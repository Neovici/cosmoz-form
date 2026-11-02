import { useEffect, useRef, useState } from '@pionjs/pion';
import type { AsyncItemRule, AsyncRunner } from './async-rule';
import { makeTakeLatestRunner } from './make-take-latest-runner';
import type { UseForm } from './use-form-core';

const changed = (a: unknown[], b: unknown[]) =>
	a.length !== b.length || a.some((v, i) => !Object.is(v, b[i]));

const DEFAULT_ON_ERROR = (err: unknown) => {
	// eslint-disable-next-line no-console
	console.error('[cosmoz-form] async rule error:', err);
};

/**
 * Adds async rules on top of UseForm<T, C>.
 * Returns UseForm<T, C> & { processing } where processing is true while any
 * async rule is in flight.
 *
 * Async patches are passed to onChange(patch, false); the form is not marked
 * touched. Intermediate patches (from opts.update(...)) reach onChange like
 * any other patch, and sync rules then run on top of them, which is expected.
 *
 * Loading-state contract: patches pushed via opts.update(...) are merged at
 * once and are never rolled back. Once a run is cancelled (takeLatest
 * supersession, debounce discard, unmount), everything it pushes after the
 * cancel point is ignored — the final patch resolves as null — while what
 * it already pushed stays in state. The rule owns clearing: emit the flag
 * in every terminal patch — final return, early return, and the onError
 * patch (error patches are applied exactly like async results). Prefer a
 * placeholder in the target field over a separate flag: the winning run's
 * final patch then overwrites the placeholder anyway.
 *
 * Error handling precedence when a rule rejects:
 *   1. the rule's own `onError` (4th tuple member) — a returned partial patch is
 *      applied like any async result (no touch), and hook-level handling is skipped;
 *   2. hook-level `opts.onError` — a returned partial patch is applied the same way;
 *   3. otherwise the default handler logs to console.error.
 * `opts.onError` is always invoked as fallback when the rule handler returns void.
 *
 * Note: the default runners (`makeTakeLatestRunner`, `makeDebounceRunner`)
 * implement the cancellation contract on `AsyncRunner`: once aborted,
 * anything a run outputs — opts.update(...) calls or the final patch — is
 * ignored, and `run()` resolves as `null`, with no error path from a
 * cancelled run. Rules should still rethrow signal errors rather than
 * swallow them: only an uncaught 'AbortError' stops the rest of the rule
 * body; with the abort caught, the statements after the catch keep
 * executing. In a local catch, discriminate with `signal.aborted`: rethrow
 * when aborted, recover with a patch only for real failures (see the
 * `AsyncRule` contract).
 *
 * Rules must be defined once — module scope, or useMemo/useRef — never inline:
 * runner and dependency state is keyed by rule identity, so a rule object
 * re-created each render is treated as a new rule and re-fires every render.
 * With error/patch feedback that can freeze the component. Violating this is
 * undefined behavior; the hook does not defensively re-key.
 *
 * Usage:
 *   const form = useValidatedForm({ fields, initial, rules, context });
 *   const { processing } = useAsyncFormCore(form, asyncRules);
 */
export const useAsyncFormCore = <T extends object, C extends object = object>(
	form: UseForm<T, C>,
	asyncRules: readonly AsyncItemRule<T, C>[] | undefined,
	opts?: {
		/**
		 * Hook-level error fallback. Called whenever a rule rejects and the
		 * rule's own `onError` returned void/undefined. Returning a partial
		 * patch recovers the error (applied via onChange, no touch); returning
		 * void/undefined falls back to the default console.error handler.
		 */
		onError?: (err: unknown, rule: AsyncItemRule<T, C>) => Partial<T> | void;
	},
): UseForm<T, C> & { processing: boolean } => {
	const onError = opts?.onError;

	// Error precedence: rule's own onError (patch) → hook opts.onError (patch) → log
	const handleRuleError = (err: unknown, rule: AsyncItemRule<T, C>) => {
		const rulePatch = rule[3]?.(err) as Partial<T> | undefined;
		if (rulePatch !== undefined) {
			form.onChange(rulePatch, false); // error patch: no touch
			return;
		}
		const hookPatch = onError?.(err, rule) as Partial<T> | undefined;
		if (hookPatch !== undefined) {
			form.onChange(hookPatch, false); // error patch: no touch
			return;
		}
		DEFAULT_ON_ERROR(err);
	};

	// Refs persist across renders without triggering re-renders
	const runnersRef = useRef(new Map<AsyncItemRule<T, C>, AsyncRunner<T, C>>());
	const prevDepsRef = useRef(new Map<AsyncItemRule<T, C>, unknown[]>());

	// pendingCount tracks in-flight rules without causing re-renders itself.
	// processing state is updated only on 0→1 and 1→0 transitions.
	const pendingCount = useRef(0);
	const [processing, setProcessing] = useState(false);

	// Refs are initialized synchronously, so `.current` is defined for the
	// lifetime of the hook; pion's Ref typing models lazy initialization.
	const runners = runnersRef as {
		current: Map<AsyncItemRule<T, C>, AsyncRunner<T, C>>;
	};
	const prevDeps = prevDepsRef as {
		current: Map<AsyncItemRule<T, C>, unknown[]>;
	};
	const pending = pendingCount as { current: number };

	// Cleanup: cancel all in-flight rules on unmount
	useEffect(
		() => () => {
			for (const runner of runners.current.values()) runner.cancel();
		},
		[],
	);

	// Dep-check + rule dispatch: runs after every values or context change
	useEffect(() => {
		if (!asyncRules?.length) return;

		const context = form.context;

		for (const rule of asyncRules) {
			const [ruleFn, depsFn, runnerFactory = makeTakeLatestRunner] = rule;

			if (!runners.current.has(rule)) {
				runners.current.set(rule, runnerFactory());
			}

			const deps = depsFn(form.values, undefined, context);
			const prev = prevDeps.current.get(rule);

			// Skip if deps unchanged (Object.is per element, same as applyRules)
			if (prev != null && !changed(deps, prev)) {
				continue;
			}

			prevDeps.current.set(rule, deps);

			const runner = runners.current.get(rule)!;

			pending.current++;
			if (pending.current === 1) setProcessing(true);

			runner
				.run(
					ruleFn,
					form.values,
					(patch) => form.onChange(patch, false), // intermediate: no touch
					{ context },
				)
				.then((result) => {
					if (result !== null) {
						form.onChange(result, false); // final: no touch
					}
				})
				.catch((err) => handleRuleError(err, rule))
				.finally(() => {
					pending.current--;
					if (pending.current === 0) setProcessing(false);
				});
		}
	}, [form.values, form.context]);

	return { ...form, processing };
};

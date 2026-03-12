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
 * Composes with UseForm<T> to add async rules.
 * Returns UseForm<T> & { processing } where processing is true while any
 * async rule is in flight.
 *
 * Async patches call onChange(patch, false) — they do not mark the form touched.
 * Intermediate patches (from opts.update(...)) go through onChange like any other
 * patch — sync rules cascade on top of them, which is expected.
 *
 * Usage:
 *   const form = useValidatedForm({ fields, initial, rules });
 *   const { processing } = useAsyncFormCore(form, asyncRules);
 */
export const useAsyncFormCore = <T extends object>(
	form: UseForm<T>,
	asyncRules: readonly AsyncItemRule<T>[] | undefined,
	opts?: { onError?: (err: unknown, rule: AsyncItemRule<T>) => void },
): UseForm<T> & { processing: boolean } => {
	const onError = opts?.onError ?? DEFAULT_ON_ERROR;

	// Refs persist across renders without triggering re-renders
	const runnersRef = useRef(new Map<AsyncItemRule<T>, AsyncRunner<T>>());
	const prevDepsRef = useRef(new Map<AsyncItemRule<T>, unknown[]>());

	// pendingCount tracks in-flight rules without causing re-renders itself.
	// processing state is updated only on 0→1 and 1→0 transitions.
	const pendingCount = useRef(0);
	const [processing, setProcessing] = useState(false);

	// Cleanup: cancel all in-flight rules on unmount
	useEffect(
		() => () => {
			for (const runner of runnersRef.current.values()) runner.cancel();
		},
		[],
	);

	// Dep-check + rule dispatch: runs after every values change
	useEffect(() => {
		if (!asyncRules?.length) return;

		for (const rule of asyncRules) {
			const [ruleFn, depsFn, runnerFactory = makeTakeLatestRunner] = rule;

			if (!runnersRef.current.has(rule)) {
				runnersRef.current.set(rule, runnerFactory());
			}

			const deps = depsFn(form.values);
			const prev = prevDepsRef.current.get(rule);

			// Skip if deps unchanged (Object.is per element, same as applyRules)
			if (prev != null && !changed(deps, prev)) {
				continue;
			}

			prevDepsRef.current.set(rule, deps);

			const runner = runnersRef.current.get(rule)!;

			pendingCount.current++;
			if (pendingCount.current === 1) setProcessing(true);

			runner
				.run(
					ruleFn,
					form.values,
					(patch) => form.onChange(patch, false), // intermediate: no touch
				)
				.then((result) => {
					if (result !== null) {
						form.onChange(result, false); // final: no touch
					}
				})
				.catch((err) => onError(err, rule))
				.finally(() => {
					pendingCount.current--;
					if (pendingCount.current === 0) setProcessing(false);
				});
		}
	}, [form.values]);

	return { ...form, processing };
};

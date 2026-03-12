import { useEffect, useRef } from '@pionjs/pion';
import type { AsyncItemRule, SagaRunner } from './async-rule';
import { makeTakeLatestRunner } from './make-take-latest-runner';
import type { UseForm } from './use-form-core';

const changed = (a: unknown[], b: unknown[]) =>
	a.length !== b.length || a.some((v, i) => !Object.is(v, b[i]));

const DEFAULT_ON_ERROR = (err: unknown) => {
	// eslint-disable-next-line no-console
	console.error('[cosmoz-form] async rule error:', err);
};

/**
 * Composes with UseForm<T> to add async saga rules.
 * Returns the same UseForm<T> — no new fields (YAGNI).
 *
 * Async patches call onChange(patch, false) — they do not mark the form touched.
 * Intermediate loading patches (from yield loading(...)) go through applyRules
 * like any other onChange — sync rules cascade on top of them, which is expected.
 *
 * Usage:
 *   const form = useValidatedForm({ fields, initial, rules });
 *   useSagaFormCore(form, asyncRules);
 */
export const useSagaFormCore = <T extends object>(
	form: UseForm<T>,
	asyncRules: readonly AsyncItemRule<T>[] | undefined,
	opts?: { onError?: (err: unknown, rule: AsyncItemRule<T>) => void },
): UseForm<T> => {
	const onError = opts?.onError ?? DEFAULT_ON_ERROR;

	// Always-live ref — updated on every render, read by getState closures
	const valuesRef = useRef(form.values);
	valuesRef.current = form.values;

	// Refs persist across renders without triggering re-renders
	const runnersRef = useRef(new Map<AsyncItemRule<T>, SagaRunner<T>>());
	const prevDepsRef = useRef(new Map<AsyncItemRule<T>, unknown[]>());
	const prevItemRef = useRef(new Map<AsyncItemRule<T>, T>());

	// Cleanup: cancel all in-flight sagas on unmount
	useEffect(
		() => () => {
			for (const runner of runnersRef.current.values()) runner.cancel();
		},
		[],
	);

	// Dep-check + saga dispatch: runs after every values change (not during render)
	useEffect(() => {
		if (!asyncRules?.length) return;

		for (const rule of asyncRules) {
			const [sagaFn, depsFn, runnerFactory = makeTakeLatestRunner] = rule;

			if (!runnersRef.current.has(rule)) {
				runnersRef.current.set(rule, runnerFactory<T>());
			}

			const deps = depsFn(form.values);
			const prev = prevDepsRef.current.get(rule);

			// Skip if deps unchanged (Object.is per element, same as applyRules)
			if (prev != null && !changed(deps, prev)) {
				continue;
			}

			const old = prevItemRef.current.get(rule); // snapshot at previous invocation
			prevDepsRef.current.set(rule, deps);
			prevItemRef.current.set(rule, form.values);

			const runner = runnersRef.current.get(rule)!;

			runner
				.run(
					sagaFn(form.values, old, undefined, undefined),
					(patch) => form.onChange(patch, false), // intermediate: no touch
					() => valuesRef.current, // live state for yield select()
				)
				.then((result) => {
					if (result !== null) {
						form.onChange(result, false); // final: no touch
					}
				})
				.catch((err) => onError(err, rule));
		}
	}, [form.values]);

	return form;
};

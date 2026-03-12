import { useEffect, useRef, useState } from '@pionjs/pion';
import type { AsyncItemRule, AsyncRunner } from '../async-rule';
import { makeTakeLatestRunner } from '../make-take-latest-runner';
import type { UseItemsCore } from './use-items';

const changed = (a: unknown[], b: unknown[]) =>
	a.length !== b.length || a.some((v, i) => !Object.is(v, b[i]));

const DEFAULT_ON_ERROR = (err: unknown) => {
	// eslint-disable-next-line no-console
	console.error('[cosmoz-form] async rule error:', err);
};

type RunnerMap<T> = Map<AsyncItemRule<T>, Map<number, AsyncRunner<T>>>;
type DepsMap<T> = Map<AsyncItemRule<T>, Map<number, unknown[]>>;

const ensureRuleTracking = <T>(
	rule: AsyncItemRule<T>,
	runnersRef: { current: RunnerMap<T> },
	prevDepsRef: { current: DepsMap<T> },
) => {
	if (!runnersRef.current.has(rule)) {
		runnersRef.current.set(rule, new Map());
		prevDepsRef.current.set(rule, new Map());
	}
};

/**
 * Composes with useItemsCore / useItems to add async rules.
 * One runner per (rule, itemIndex) pair — item rules are independent.
 *
 * Usage:
 *   const core = useItems({ initial, rules });
 *   useAsyncRules(core.items, asyncRules, core.update);
 *   return core;
 */
export const useAsyncRules = <T extends object>(
	items: T[],
	asyncRules: readonly AsyncItemRule<T>[] | undefined,
	update: UseItemsCore<T>['update'],
	opts?: {
		onError?: (err: unknown, rule: AsyncItemRule<T>, index: number) => void;
	},
): { processing: boolean } => {
	const onError = opts?.onError ?? DEFAULT_ON_ERROR;

	const pendingCount = useRef(0);
	const [processing, setProcessing] = useState(false);

	const runnersRef = useRef<RunnerMap<T>>(new Map());
	const prevDepsRef = useRef<DepsMap<T>>(new Map());

	// Cleanup on unmount
	useEffect(
		() => () => {
			for (const perItem of runnersRef.current.values()) {
				for (const runner of perItem.values()) {
					runner.cancel();
				}
			}
		},
		[],
	);

	// Dep-check + rule dispatch: runs after every items change
	useEffect(() => {
		if (!asyncRules?.length) {
			return;
		}

		for (const rule of asyncRules) {
			const [ruleFn, depsFn, runnerFactory = makeTakeLatestRunner] = rule;

			ensureRuleTracking(rule, runnersRef, prevDepsRef);

			for (const [idx, item] of items.entries()) {
				const runnersForRule = runnersRef.current.get(rule)!;
				if (!runnersForRule.has(idx)) {
					runnersForRule.set(idx, runnerFactory());
				}

				const deps = depsFn(item, idx);
				const prev = prevDepsRef.current.get(rule)!.get(idx);

				if (prev != null && !changed(deps, prev)) {
					continue;
				}

				prevDepsRef.current.get(rule)!.set(idx, deps);

				const runner = runnersForRule.get(idx)!;

				pendingCount.current++;
				if (pendingCount.current === 1) setProcessing(true);

				runner
					.run(
						ruleFn,
						item,
						(patch) => update(idx, patch), // intermediate: no touch
						{ index: idx },
					)
					.then((result) => {
						if (result !== null) {
							update(idx, result);
						}
					})
					.catch((err) => onError(err, rule, idx))
					.finally(() => {
						pendingCount.current--;
						if (pendingCount.current === 0) setProcessing(false);
					});
			}
		}
	}, [items]);

	return { processing };
};

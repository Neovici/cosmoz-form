import { useEffect, useRef } from '@pionjs/pion';
import type { AsyncItemRule, SagaRunner } from '../async-rule';
import { makeTakeLatestRunner } from '../make-take-latest-runner';
import type { UseItemsCore } from './use-items';

const changed = (a: unknown[], b: unknown[]) =>
	a.length !== b.length || a.some((v, i) => !Object.is(v, b[i]));

const DEFAULT_ON_ERROR = (err: unknown) => {
	// eslint-disable-next-line no-console
	console.error('[cosmoz-form] async rule error:', err);
};

type RunnerMap<T> = Map<AsyncItemRule<T>, Map<number, SagaRunner<T>>>;
type DepsMap<T> = Map<AsyncItemRule<T>, Map<number, unknown[]>>;
type PrevMap<T> = Map<AsyncItemRule<T>, Map<number, T>>;

const ensureRuleTracking = <T>(
	rule: AsyncItemRule<T>,
	runnersRef: { current: RunnerMap<T> },
	prevDepsRef: { current: DepsMap<T> },
	prevItemRef: { current: PrevMap<T> },
) => {
	if (!runnersRef.current.has(rule)) {
		runnersRef.current.set(rule, new Map());
		prevDepsRef.current.set(rule, new Map());
		prevItemRef.current.set(rule, new Map());
	}
};

/**
 * Composes with useItemsCore / useItems to add async saga rules.
 * One TakeLatestRunner per (rule, itemIndex) pair — item sagas are independent.
 *
 * Usage:
 *   const core = useItems({ initial, rules });
 *   useSagaRules(core.items, asyncRules, core.update);
 *   return core;
 */
export const useSagaRules = <T extends object>(
	items: T[],
	asyncRules: readonly AsyncItemRule<T>[] | undefined,
	update: UseItemsCore<T>['update'],
	opts?: {
		onError?: (err: unknown, rule: AsyncItemRule<T>, index: number) => void;
	},
): void => {
	const onError = opts?.onError ?? DEFAULT_ON_ERROR;

	// Always-live ref for getState closures
	const itemsRef = useRef(items);
	itemsRef.current = items;

	const runnersRef = useRef<RunnerMap<T>>(new Map());
	const prevDepsRef = useRef<DepsMap<T>>(new Map());
	const prevItemRef = useRef<PrevMap<T>>(new Map());

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

	// Dep-check + saga dispatch: runs after every items change
	useEffect(() => {
		if (!asyncRules?.length) {
			return;
		}

		for (const rule of asyncRules) {
			const [sagaFn, depsFn, runnerFactory = makeTakeLatestRunner] = rule;

			ensureRuleTracking(rule, runnersRef, prevDepsRef, prevItemRef);

			for (const [idx, item] of items.entries()) {
				const runnersForRule = runnersRef.current.get(rule)!;
				if (!runnersForRule.has(idx)) {
					runnersForRule.set(idx, runnerFactory<T>());
				}

				const deps = depsFn(item, idx);
				const prev = prevDepsRef.current.get(rule)!.get(idx);

				if (prev != null && !changed(deps, prev)) {
					continue;
				}

				const old = prevItemRef.current.get(rule)!.get(idx);
				prevDepsRef.current.get(rule)!.set(idx, deps);
				prevItemRef.current.get(rule)!.set(idx, item);

				const runner = runnersForRule.get(idx)!;

				runner
					.run(
						sagaFn(item, old, idx, idx),
						(patch) => update(idx, patch), // intermediate: no touch
						() => itemsRef.current[idx], // live item for yield select()
					)
					.then((result) => {
						if (result !== null) {
							update(idx, result);
						}
					})
					.catch((err) => onError(err, rule, idx));
			}
		}
	}, [items]);
};

import { invoke } from '@neovici/cosmoz-utils/function';
import {
	StateUpdater,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from '@pionjs/pion';
import { touch, touched } from '../touch';
import { applyRules, ItemRule } from './apply-rules';

interface Props<T extends object, C extends object = object> {
	initial: T[];
	rules?: ItemRule<T, C>[];
	context?: C;
}

const changes = <T>(
	indexOrChanges: number | readonly [number, Partial<T>][],
	update: Partial<T>,
): readonly [number, Partial<T>][] => {
	if (Array.isArray(indexOrChanges)) {
		return indexOrChanges;
	}
	return [[indexOrChanges as number, update]];
};

export type UseItemsCore<T extends object> = {
	items: T[];
	setItems: StateUpdater<T[]>;
	touched: boolean;
	update: (
		indexOrChanges: number | readonly [number, Partial<T>][],
		update: Partial<T>,
	) => void;
	updateAll: (updateOrFn: Partial<T> | ((i: T) => Partial<T>)) => void;
	remove: (index: number) => void;
	append: (items: T[]) => void;
	reset: () => void;
	clear: () => void;
	load: (items: T[], rulesOverride?: ItemRule<T>[]) => void;
};

export const useItemsCore = <T extends object, C extends object = object>({
	items,
	setItems,
	initial,
	rules,
	context,
}: Props<T, C> & {
	items: T[];
	setItems: StateUpdater<T[]>;
}): UseItemsCore<T> => {
	// Re-apply rules when context changes, passing oldContext so depsFn comparisons
	// correctly detect the change (new context vs old context for the same item).
	const prevContextRef = useRef<C | undefined>(undefined);
	useEffect(() => {
		const oldContext = prevContextRef.current;
		prevContextRef.current = context;
		if (oldContext === undefined) return; // skip mount
		setItems((currentItems) =>
			currentItems.map((oldItem, index) =>
				touch(
					applyRules({
						oldItem,
						newItem: oldItem,
						rules,
						index,
						context,
						oldContext,
					}),
					touched(oldItem),
				),
			),
		);
	}, [context]);

	return {
		items,
		setItems,
		touched: touched(items),
		update: useCallback(
			(
				indexOrChanges: number | readonly [number, Partial<T>][],
				update: Partial<T>,
			) =>
				setItems((items = []) =>
					touch(
						changes(indexOrChanges ?? items.length, update).reduce(
							(acc, [index, update]) => [
								...acc.slice(0, index),
								touch(
									applyRules({
										oldItem: acc[index],
										newItem: { ...acc[index], ...update },
										rules,
										index,
										context,
									}),
								),
								...acc.slice(index + 1),
							],
							items,
						),
					),
				),
			[rules, context],
		),
		updateAll: useCallback(
			(updateOrFn: Partial<T> | ((i: T) => Partial<T>)) =>
				setItems((items = []) =>
					items.map((oldItem, index) => {
						const newItem = invoke(updateOrFn, oldItem);
						return touch(
							applyRules({
								oldItem,
								newItem: { ...oldItem, ...newItem },
								rules,
								index,
								context,
							}),
						);
					}),
				),
			[rules, context],
		),
		remove: useCallback(
			(rindex: number) =>
				setItems((items = []) =>
					touch([
						...items.slice(0, rindex),
						...items.slice(rindex + 1).map((item, index) =>
							applyRules({
								rules,
								newItem: item,
								oldItem: item,
								index: index + rindex,
								oldIndex: index + rindex + 1,
								context,
							}),
						),
					]),
				),
			[rules, context],
		),
		append: useCallback(
			(appendedItems: T[]) =>
				setItems((items = []) =>
					touch(
						items.concat(
							appendedItems.map((item, index) =>
								applyRules({
									rules,
									newItem: item,
									index: index + items.length,
									context,
								}),
							),
						),
					),
				),
			[rules, context],
		),
		reset: useCallback(() => setItems(initial), [initial]),
		clear: useCallback(() => setItems(touch([])), []),
		load: useCallback(
			(items: T[], rulesOverride?: ItemRule<T>[]) =>
				setItems(
					items.map((newItem, index) =>
						applyRules({
							newItem,
							index,
							rules: rulesOverride ?? rules,
							context,
						}),
					),
				),
			[rules, context],
		),
	};
};

export const useItems = <T extends object, C extends object = object>({
	initial,
	rules,
	context,
}: Props<T, C>) => {
	const _initial = useMemo(
			() =>
				initial.map((newItem, index) =>
					applyRules({ rules, newItem, index, context }),
				),
			[initial],
		),
		[items, setItems] = useState<T[]>(_initial);

	return useItemsCore({ items, setItems, initial: _initial, rules, context });
};

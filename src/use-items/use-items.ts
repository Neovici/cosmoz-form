import { StateUpdater, useCallback, useMemo, useState } from '@pionjs/pion';
import { invoke } from '@neovici/cosmoz-utils/function';
import { applyRules, ItemRule } from './apply-rules';
import { touch, touched } from '../touch';

interface Props<T extends object> {
	initial: T[];
	rules?: ItemRule<T>[];
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

export const useItemsCore = <T extends object>({
	items,
	setItems,
	initial,
	rules,
}: Props<T> & {
	items: T[];
	setItems: StateUpdater<T[]>;
}): UseItemsCore<T> => {
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
									}),
								),
								...acc.slice(index + 1),
							],
							items,
						),
					),
				),
			[rules],
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
							}),
						);
					}),
				),
			[rules],
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
							}),
						),
					]),
				),
			[rules],
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
								}),
							),
						),
					),
				),
			[rules],
		),
		reset: useCallback(() => setItems(initial), [initial]),
		clear: useCallback(() => setItems(touch([])), []),
		load: useCallback(
			(items: T[], rulesOverride?: ItemRule<T>[]) =>
				setItems(
					items.map((newItem, index) =>
						applyRules({ newItem, index, rules: rulesOverride ?? rules }),
					),
				),
			[rules],
		),
	};
};

export const useItems = <T extends object>({ initial, rules }: Props<T>) => {
	const _initial = useMemo(
			() =>
				initial.map((newItem, index) => applyRules({ rules, newItem, index })),
			[initial],
		),
		[items, setItems] = useState<T[]>(_initial);

	return useItemsCore({ items, setItems, initial: _initial, rules });
};

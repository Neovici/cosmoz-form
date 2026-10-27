import { invoke } from '@neovici/cosmoz-utils/function';
import {
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
	touched?: boolean;
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

/**
 * Items setter, usable with a controlled update store; `opts.userInitiated`
 * distinguishes user edits from programmatic writes (e.g. re-applying rules
 * after a context change), so controlled consumers can avoid wrongly marking
 * the form as touched.
 */
export type SetItems<T> = (
	update: T[] | ((items: T[]) => T[]),
	opts?: { userInitiated?: boolean },
) => void;

export type UseItemsCore<T extends object> = {
	items: T[];
	setItems: SetItems<T>;
	touched: boolean;
	update: (
		indexOrChanges: number | readonly [number, Partial<T>][],
		update: Partial<T>,
	) => void;
	updateAll: (updateOrFn: Partial<T> | ((i: T) => Partial<T>)) => void;
	remove: (index: number) => void;
	append: (items: T[]) => void;
	prepend: (items: T[]) => void;
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
	touched: externalTouched,
}: Props<T, C> & {
	items: T[];
	setItems: SetItems<T>;
}): UseItemsCore<T> => {
	// Re-apply rules when context changes, passing oldContext so depsFn comparisons
	// correctly detect the change (new context vs old context for the same item).
	const prevContextRef = useRef<C | undefined>(undefined);
	useEffect(() => {
		const oldContext = prevContextRef.current;
		prevContextRef.current = context;
		if (oldContext === undefined) return; // skip mount
		// Re-applying rules is not a user edit; don't touch in controlled setups.
		setItems(
			(currentItems) =>
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
			{ userInitiated: false },
		);
	}, [context]);

	return {
		items,
		setItems,
		touched: useMemo(
			() => touched(items) || (externalTouched ?? false),
			[items, externalTouched],
		),
		update: useCallback(
			(
				indexOrChanges: number | readonly [number, Partial<T>][],
				update: Partial<T>,
			) =>
				setItems(
					(items = []) =>
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
					{ userInitiated: true },
				),
			[rules, context],
		),
		updateAll: useCallback(
			(updateOrFn: Partial<T> | ((i: T) => Partial<T>)) =>
				setItems(
					(items = []) =>
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
					{ userInitiated: true },
				),
			[rules, context],
		),
		remove: useCallback(
			(rindex: number) =>
				setItems(
					(items = []) =>
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
					{ userInitiated: true },
				),
			[rules, context],
		),
		append: useCallback(
			(appendedItems: T[]) =>
				setItems(
					(items = []) =>
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
					{ userInitiated: true },
				),
			[rules, context],
		),
		prepend: useCallback(
			(prependedItems: T[]) =>
				setItems(
					(items = []) =>
						touch([
							...prependedItems.map((item, index) =>
								applyRules({
									rules,
									newItem: item,
									index,
									context,
								}),
							),
							...items.map((item, index) =>
								applyRules({
									rules,
									newItem: item,
									oldItem: item,
									index: index + prependedItems.length,
									oldIndex: index,
									context,
								}),
							),
						]),
					{ userInitiated: true },
				),
			[rules, context],
		),
		reset: useCallback(
			() => setItems(initial, { userInitiated: true }),
			[initial],
		),
		clear: useCallback(() => setItems(touch([]), { userInitiated: true }), []),
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
					{ userInitiated: true },
				),
			[rules, context],
		),
	};
};

export const useItems = <T extends object, C extends object = object>({
	initial,
	rules,
	context,
	touched,
}: Props<T, C>): UseItemsCore<T> => {
	const _initial = useMemo(
			() =>
				initial.map((newItem, index) =>
					applyRules({ rules, newItem, index, context }),
				),
			[initial],
		),
		[items, setItems] = useState<T[]>(_initial);

	return useItemsCore({
		items,
		setItems,
		initial: _initial,
		rules,
		context,
		touched,
	});
};

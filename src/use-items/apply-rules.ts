const changed = <T>(values: T[], lastValues?: T[]) =>
	!lastValues || values.some((value, i) => !Object.is(lastValues[i], value));

export type Compute<T> = (
	current: T,
	item: T | undefined,
	index: number | undefined,
	oldIndex: number | undefined,
) => Partial<T>;
export type Deps<T> = (current: T, index: number | undefined) => unknown[];
export type ItemRule<T> = readonly [Compute<T>, Deps<T>?];

export const applyRules = <T extends object>({
	oldItem,
	newItem,
	rules,
	index,
	oldIndex = index,
}: {
	oldItem?: T | undefined;
	newItem: T;
	rules: readonly ItemRule<T>[] | undefined; // TODO: rules should never be undefined
	index?: number;
	oldIndex?: number;
}): T => {
	if (!rules) return newItem;
	return rules.reduce(
		(currentItem, [computeFn, depsFn]) =>
			oldItem &&
			depsFn &&
			!changed(depsFn(currentItem, index), depsFn(oldItem, oldIndex))
				? currentItem
				: {
						...currentItem,
						...computeFn(currentItem, oldItem, index, oldIndex),
					},
		newItem,
	);
};

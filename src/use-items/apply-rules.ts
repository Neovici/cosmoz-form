const changed = <T>(values: T[], lastValues?: T[]) =>
	!lastValues || values.some((value, i) => !Object.is(lastValues[i], value));

export type Compute<T, C extends object = object> = (
	current: T,
	item: T | undefined,
	index: number | undefined,
	oldIndex: number | undefined,
	context?: C,
) => Partial<T>;
export type Deps<T, C extends object = object> = (
	current: T,
	index: number | undefined,
	context?: C,
) => unknown[];
export type ItemRule<T, C extends object = object> = readonly [
	Compute<T, C>,
	Deps<T, C>?,
];

export const applyRules = <T extends object, C extends object = object>({
	oldItem,
	newItem,
	rules,
	index,
	oldIndex = index,
	context,
}: {
	oldItem?: T | undefined;
	newItem: T;
	rules: readonly ItemRule<T, C>[] | undefined; // TODO: rules should never be undefined
	index?: number;
	oldIndex?: number;
	context?: C;
}): T => {
	if (!rules) return newItem;
	return rules.reduce(
		(currentItem, [computeFn, depsFn]) =>
			oldItem &&
			depsFn &&
			!changed(
				depsFn(currentItem, index, context),
				depsFn(oldItem, oldIndex, context),
			)
				? currentItem
				: {
						...currentItem,
						...computeFn(currentItem, oldItem, index, oldIndex, context),
					},
		newItem,
	);
};

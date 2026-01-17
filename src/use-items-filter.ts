import { useState, useMemo } from '@pionjs/pion';
import { ERROR } from './validation';

type Item = Record<PropertyKey, unknown>;

export const useItemsFilter = <I extends Item = Item>(
	items: I[],
	condition: (item: I) => boolean,
) => {
	const [filtering, setFiltering] = useState(false),
		indexes = useMemo(
			() =>
				filtering &&
				items.reduce(
					(acc, item, index) => (condition(item) ? acc.concat(index) : acc),
					[] as number[],
				),
			[filtering, items.length],
		),
		filteredItems = useMemo(
			() => (indexes ? indexes.map((index) => items[index]) : items),
			[items, indexes],
		);

	return {
		filtering,
		setFiltering,
		filteredItems,
	};
};

export const withError = <I extends Item = Item>(item: I) =>
	item[ERROR] as Record<string, string>;

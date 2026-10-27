import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { useMemo } from '@pionjs/pion';
import type { Errors, Fields } from '../types';
import { ERROR, validateFields } from '../validation';
import type { ItemRule } from './apply-rules';
import { useItems, UseItemsCore } from './use-items';

export type ValidatedItem = Partial<{ [ERROR]: Errors | undefined }>;
interface Props<T extends ValidatedItem, C extends object = object> {
	initial: T[];
	rules?: ItemRule<T, C>[];
	fields: Fields<T, C>;
	context?: C;
	touched?: boolean;
}

/**
 * Item rule that computes row level errors ([ERROR]) from a set of fields.
 * Shared by useValidatedItems and useValidatedItemsCore.
 */
export const errorRule = <T extends object, C extends object = object>(
	fields: Fields<T, C>,
	context?: C,
): ItemRule<T> => [
	(item: T) =>
		({ [ERROR]: validateFields(fields, item, context) }) as Partial<
			T & ValidatedItem
		>,
];

export interface UseValidatedItems<T extends object> extends UseItemsCore<
	T & ValidatedItem
> {
	invalid: boolean;
}

export const useValidatedItems = <T extends object, C extends object = object>({
	initial,
	rules,
	fields,
	context,
	touched,
}: Props<T, C>): UseValidatedItems<T> => {
	const meta = useMeta({ fields }),
		validation: ItemRule<T> = useMemo(
			() => errorRule<T, C>(meta.fields, context),
			[meta, context],
		),
		{ items, ...rest } = useItems<T & ValidatedItem, C>({
			initial,
			rules: useMemo(
				() =>
					[...(rules ?? []), validation] as ItemRule<T & ValidatedItem, C>[],
				[rules, validation],
			),
			context,
			touched,
		}),
		invalid = useMemo(() => items.some((i) => i[ERROR]), [items]);

	return {
		...rest,
		items,
		invalid,
	};
};

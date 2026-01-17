import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { useMemo } from '@pionjs/pion';
import type { Errors, Fields } from '../types';
import { ERROR, validateFields } from '../validation';
import type { ItemRule } from './apply-rules';
import { useItems, UseItemsCore } from './use-items';

export type ValidatedItem = Partial<{ [ERROR]: Errors | undefined }>;
interface Props<T extends ValidatedItem> {
	initial: T[];
	rules?: ItemRule<T>[];
	fields: Fields<T>;
}

export interface UseValidatedItems<T extends object>
	extends UseItemsCore<T & ValidatedItem> {
	invalid: boolean;
}

export const useValidatedItems = <T extends object>({
	initial,
	rules,
	fields,
}: Props<T>): UseValidatedItems<T> => {
	const meta = useMeta({ fields }),
		validation: ItemRule<T> = useMemo(
			() => [
				(item: T) =>
					({ [ERROR]: validateFields(meta.fields, item) }) as Partial<
						T & ValidatedItem
					>,
			],
			[meta],
		),
		{ items, ...rest } = useItems<T & ValidatedItem>({
			initial,
			rules: useMemo(() => [...(rules ?? []), validation], [rules, validation]),
		}),
		invalid = useMemo(() => items.some((i) => i[ERROR]), [items]);

	return {
		...rest,
		items,
		invalid,
	};
};

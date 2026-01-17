import { array } from '@neovici/cosmoz-utils/array';
import { useMemo } from '@pionjs/pion';
import { ERROR } from '../validation';
import { UseValidatedItems, ValidatedItem } from './use-validated-items';

type Rule<T extends ValidatedItem> = (item: T, items: T[]) => boolean | string;
type Rules<T extends ValidatedItem> = Rule<T> | Rule<T>[];
type FieldRules<T extends ValidatedItem> = Partial<Record<keyof T, Rules<T>>>;

const ifDefined = <T extends object>(obj: T) =>
	obj && Object.entries(obj).length > 0 ? obj : undefined;

const validate = <T extends ValidatedItem>(
	item: T,
	items: T[],
	fieldRules: FieldRules<T>,
) =>
	Object.fromEntries(
		Object.entries(fieldRules).flatMap(([fieldId, rules]) => {
			// find first error
			const error = array(rules as Rules<T>).reduce(
				(error: boolean | string, rule) => (error ? error : rule(item, items)),
				false,
			);
			return error ? [[fieldId, error]] : [];
		}),
	);

export const useListValidation = <T extends object>(
	fieldRules: FieldRules<T>,
	form: UseValidatedItems<T>,
): UseValidatedItems<T> => {
	const items = useMemo(
			() =>
				form.items.map((item) => ({
					...item,
					[ERROR]: ifDefined({
						...item[ERROR],
						...validate(item, form.items, fieldRules),
					}),
				})),
			[form.items],
		),
		invalid = useMemo(
			() => form.invalid || items.some((i) => i[ERROR]),
			[form.invalid, items],
		);

	return {
		...form,
		items,
		invalid,
	};
};

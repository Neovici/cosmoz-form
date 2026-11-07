import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { useCallback, useEffect, useMemo, useRef, useState } from '@pionjs/pion';
import type { Fields } from '../types';
import type { UseForm } from '../use-form-core';
import { ERROR } from '../validation';
import { applyRules, ItemRule } from './apply-rules';
import { useItemsCore, type SetItems } from './use-items';
import {
	errorRule,
	UseValidatedItems,
	ValidatedItem,
} from './use-validated-items';

/** Array element type of T[K], so lists can be typed from the form values. */
export type Row<T extends object, K extends keyof T> =
	NonNullable<T[K]> extends readonly (infer R)[] ? R & object : never;

type ValidatedRow<T extends object, K extends keyof T> = ValidatedItem &
	Row<T, K>;

interface Options<T extends object, K extends keyof T, C extends object> {
	fields: Fields<Row<T, K>, C>;
	rules?: ItemRule<Row<T, K>, C>[];
	context?: C;
}

/**
 * Controlled, validated list of items. Rows live in form.values[id], so they
 * participate in the form's own rules and are cleared/rolled back by
 * form.onReset() and form.load().
 *
 * User directed writes (update, append, prepend, remove, clear, reset,
 * updateAll, load) are routed onto values[id] via form.onChange with
 * touched=true, while the row rules re-applied after a context change, and the
 * mount-time validation of the initial rows, are routed with touched=false
 * (like form rules are), keeping fresh/reset forms untouched.
 */
export const useValidatedItemsCore = <
	T extends object,
	K extends keyof T,
	C extends object = object,
>(
	form: UseForm<T, C>,
	id: K,
	{ fields, rules, context }: Options<T, K, C>,
): UseValidatedItems<Row<T, K>> => {
	const meta = useMeta({ fields }),
		rowRules = useMemo(
			() =>
				[...(rules ?? []), errorRule(meta.fields, context)] as ItemRule<
					ValidatedRow<T, K>,
					C
				>[],
			[rules, meta, context],
		),
		// form.values[id] is the single source of truth.
		items = (form.values?.[id] ?? []) as ValidatedRow<T, K>[],
		[initial] = useState<ValidatedRow<T, K>[]>(() =>
			((form.values?.[id] ?? []) as Row<T, K>[]).map((row, index) =>
				applyRules({
					newItem: row as ValidatedRow<T, K>,
					index,
					rules: rowRules,
					context,
				}),
			),
		),
		setItems: SetItems<ValidatedRow<T, K>> = useCallback(
			(update, opts) => {
				form.onChange(
					(values) =>
						({
							[id]:
								typeof update === 'function'
									? update((values?.[id] ?? []) as ValidatedRow<T, K>[])
									: update,
						}) as Partial<T>,
					opts?.userInitiated ?? false,
				);
			},
			[form.onChange, id],
		),
		// Validate the rows found in values[id] once, at mount, and write them
		// back into the form (untouched), like useForm does with its own initial
		// values, so [ERROR] cells and `invalid` are correct before any user
		// edit or context change.
		hydrated = useRef(false);
	useEffect(() => {
		if (hydrated.current) {
			return;
		}
		hydrated.current = true;
		// Rows are re-derived from the current values, so an update racing
		// this effect is not clobbered.
		form.onChange(
			(values) =>
				({
					[id]: ((values?.[id] ?? []) as Row<T, K>[]).map((row, index) =>
						applyRules({
							newItem: row as ValidatedRow<T, K>,
							index,
							rules: rowRules,
							context,
						}),
					),
				}) as Partial<T>,
			false,
		);
	}, [form.onChange, id, rowRules, context]);

	const core = useItemsCore<ValidatedRow<T, K>, C>({
			items,
			setItems,
			initial,
			rules: rowRules,
			context,
			touched: form.touched,
		}),
		invalid = useMemo(() => items.some((row) => row[ERROR]), [items]);

	return {
		...core,
		items,
		invalid,
	};
};

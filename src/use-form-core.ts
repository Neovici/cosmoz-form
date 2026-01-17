import { useCallback, useMemo, StateUpdater } from '@pionjs/pion';
import { invoke } from '@neovici/cosmoz-utils/function';
import { applyRules, ItemRule } from './use-items/apply-rules';
import { touch, untouch, touched } from './touch';

export interface UseForm<T extends object> {
	values: T;
	onReset: () => void;
	onValues: (valueOrFn: T | ((values: T) => T), touched?: boolean) => void;
	onChange: (
		update: Partial<T> | ((values: T) => Partial<T>),
		touched?: boolean,
	) => void;
	load: (values: T, rulesOverride?: ItemRule<T>[]) => void;
	touched: boolean;
}

export type FormValues<T extends object> = readonly [T, T];

export const useFormCore = <T extends object>(
	state: FormValues<T>,
	setState: StateUpdater<FormValues<T>>,
	rules?: readonly ItemRule<T>[],
): UseForm<T> => {
	const [, values] = state;

	return {
		values,
		onReset: useCallback(
			() => setState(([initial]) => [initial, initial]),
			[setState],
		),
		onValues: useCallback(
			(valuesOrFn, touched = true) =>
				setState(([initial, prev]) => [
					initial,
					touch(
						applyRules({
							oldItem: prev,
							newItem: invoke(valuesOrFn, prev),
							rules,
						}),
						touched,
					),
				]),
			[rules, setState],
		),
		onChange: useCallback(
			(update, touched = true) =>
				setState(([initial, values]) => [
					initial,
					touch(
						applyRules({
							oldItem: values,
							newItem: {
								...values,
								...invoke(update, values),
							},
							rules,
						}),
						touched,
					),
				]),
			[rules, setState],
		),
		load: useCallback(
			(values, rulesOverride) => {
				if (!values) {
					setState([values, values]);
					return;
				}

				const ini = untouch(
					applyRules({
						oldItem: undefined,
						newItem: values,
						rules: rulesOverride ?? rules,
					}),
				);
				setState([ini, ini]);
			},
			[rules, setState],
		),
		touched: useMemo(() => touched(values), [values]),
	};
};

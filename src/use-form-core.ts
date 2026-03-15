import { invoke } from '@neovici/cosmoz-utils/function';
import {
	StateUpdater,
	useCallback,
	useEffect,
	useMemo,
	useRef,
} from '@pionjs/pion';
import { touch, touched, untouch } from './touch';
import { applyRules, ItemRule } from './use-items/apply-rules';

export interface UseForm<T extends object, C extends object = object> {
	values: T;
	context: C;
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

export const useFormCore = <T extends object, C extends object = object>(
	state: FormValues<T>,
	setState: StateUpdater<FormValues<T>>,
	rules?: readonly ItemRule<T, C>[],
	context?: C,
	externalTouched?: boolean,
): UseForm<T, C> => {
	const [, values] = state;

	// Re-apply rules when context changes, passing oldContext so depsFn comparisons
	// correctly detect the change (new context vs old context for the same values).
	const prevContextRef = useRef<C | undefined>(undefined);
	useEffect(() => {
		const oldContext = prevContextRef.current;
		prevContextRef.current = context;
		if (oldContext === undefined) return; // skip mount
		setState(([initial, values]) => [
			initial,
			touch(
				applyRules({
					oldItem: values,
					newItem: values,
					rules,
					context,
					oldContext,
				}),
				touched(values),
			),
		]);
	}, [context]);

	return {
		values,
		context: (context ?? {}) as C,
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
							context,
						}),
						touched,
					),
				]),
			[rules, setState, context],
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
							context,
						}),
						touched,
					),
				]),
			[rules, setState, context],
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
						context,
					}),
				);
				setState([ini, ini]);
			},
			[rules, setState, context],
		),
		touched: useMemo(
			() => touched(values) || (externalTouched ?? false),
			[values, externalTouched],
		),
	};
};

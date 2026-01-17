import { invoke } from '@neovici/cosmoz-utils/function';
import { Validate, InputProps, Renderable, Field } from '../types';
import { invokeValue } from '../helpers';
import { required } from '../validation';

type ComputedRenderOpts<T extends object, K extends keyof T, V extends T[K]> = {
	values: T;
	label: string;
	placeholder?: string;
	disabled?: boolean;
	warning?: Renderable;
	prefix?: Renderable;
	suffix?: Renderable;
	value: V;
	onFocus?: (event: FocusEvent) => void;
	onChange: (value: V, touched?: boolean) => void;
};

type RenderThru<T extends object, K extends keyof T, V extends T[K]> = Omit<
	InputProps<T, K, V>,
	'field' | 'value' | 'values' | 'onChange'
>;

export type InputBaseProps<
	T extends object,
	K extends keyof T,
	V extends T[K] = T[K],
> = Omit<Field<T, K, V>, keyof ComputedRenderOpts<T, K, V>> &
	ComputedRenderOpts<T, K, V> &
	RenderThru<T, K, V>;

const defaultOnChange = <T extends object, K extends keyof T, V extends T[K]>(
	update: (changes: Partial<T>, touched?: boolean) => void,
	id: K,
	value: V,
	values: T,
) => {
	if (values != null && Object.is(values[id], value)) {
		return;
	}
	update({ [id]: value } as Partial<T>);
};

const isRequired = <T extends object, K extends keyof T, V extends T[K]>(
	validate?: Validate<T, K, V>,
) => {
	if (Array.isArray(validate)) {
		return validate.some((v) => v === required);
	}
	return validate === required;
};

export const input =
	<T extends object, K extends keyof T, V extends T[K]>(
		render: (r: InputBaseProps<T, K, V>) => Renderable,
	) =>
	({
		field,
		value,
		values,
		onChange: update,
		...thru
	}: InputProps<T, K, V>): Renderable => {
		// TODO: rename as onChangeValue and also send in original onChange
		const onChange = (value: V, touched?: boolean) =>
			(field.onChange ?? defaultOnChange)(
				// intercept the update and pass touched
				(a) => update(a, touched),
				(field.path as K) ?? field.id,
				invokeValue(field.value?.[1], value, values, field),
				values,
			);

		const mandatory = invoke(
			field.mandatory ?? isRequired(field.validate),
			value,
			values,
			field,
		)
			? ' *'
			: undefined;

		const hidden = invoke(field.hidden, value, values, field);
		if (hidden) return;

		return render({
			...field,
			...thru,
			values,
			label: [invoke(field.label, value, values, field), mandatory].join(''),
			placeholder: invoke(field.placeholder, value, values, field),
			disabled: invoke(field.disabled, value, values, field),
			warning: invoke(field.warning, value, values, field),
			prefix: invoke(field.prefix, value, values, field),
			suffix: invoke(field.suffix, value, values, field),
			value: invokeValue(field.value?.[0], value, values, field) as V,
			onFocus: field.onFocus?.(onChange, value, values, field),
			onChange,
		});
	};

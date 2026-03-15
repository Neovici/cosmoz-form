import { invoke } from '@neovici/cosmoz-utils/function';
import { invokeValue } from '../helpers';
import { Field, InputProps, Renderable, Validate } from '../types';
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

type RenderThru<
	T extends object,
	K extends keyof T,
	V extends T[K],
	C extends object = object,
> = Omit<InputProps<T, K, V, C>, 'field' | 'value' | 'values' | 'onChange'>;

export type InputBaseProps<
	T extends object,
	K extends keyof T,
	V extends T[K] = T[K],
	C extends object = object,
> = Omit<Field<T, K, V, C>, keyof ComputedRenderOpts<T, K, V>> &
	ComputedRenderOpts<T, K, V> &
	RenderThru<T, K, V, C>;

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

const isRequired = <
	T extends object,
	K extends keyof T,
	V extends T[K],
	C extends object = object,
>(
	validate?: Validate<T, K, V, C>,
) => {
	if (Array.isArray(validate)) {
		return validate.some((v) => v === required);
	}
	return validate === required;
};

export const input =
	<
		T extends object,
		K extends keyof T,
		V extends T[K],
		C extends object = object,
	>(
		render: (r: InputBaseProps<T, K, V, C>) => Renderable,
	) =>
	({
		field,
		value,
		values,
		onChange: update,
		context,
		...thru
	}: InputProps<T, K, V, C>): Renderable => {
		// TODO: rename as onChangeValue and also send in original onChange
		const onChange = (value: V, touched?: boolean) =>
			(field.onChange ?? defaultOnChange)(
				// intercept the update and pass touched
				(a) => update(a, touched),
				(field.path as K) ?? field.id,
				invokeValue(field.value?.[1], value, values, field, context),
				values,
			);

		const mandatory = invoke(
			field.mandatory ?? isRequired(field.validate),
			value,
			values,
			field,
			context,
		)
			? ' *'
			: undefined;

		const hidden = invoke(field.hidden, value, values, field, context);
		if (hidden) return;

		return render({
			...field,
			...thru,
			context,
			values,
			label: [
				invoke(field.label, value, values, field, context),
				mandatory,
			].join(''),
			placeholder: invoke(field.placeholder, value, values, field, context),
			disabled: invoke(field.disabled, value, values, field, context),
			warning: invoke(field.warning, value, values, field, context),
			prefix: invoke(field.prefix, value, values, field, context),
			suffix: invoke(field.suffix, value, values, field, context),
			value: invokeValue(field.value?.[0], value, values, field, context) as V,
			onFocus: field.onFocus?.(onChange, value, values, field),
			onChange,
		});
	};

import { array } from '@neovici/cosmoz-utils/array';
import { prop } from '@neovici/cosmoz-utils/object';
import { Field } from './types';

export { invoke } from '@neovici/cosmoz-utils/function';

type InvokeValueReturn<F, V> = F extends (...args: any) => infer R ? R : V;
export function invokeValue<
	V,
	A extends any[],
	F extends ((value: V, ...args: A) => any) | undefined | null,
>(valueFn: F, value: V, ...args: A): InvokeValueReturn<F, V> {
	return valueFn ? valueFn(value, ...args) : (value as InvokeValueReturn<F, V>);
}

interface Initiatable<T extends object, K extends keyof T, V extends T[K]> {
	id: K;
	initiate: (value: V, values: T) => any;
}
// TODO: Better typing with better inference
export const initiate = <T extends object, K extends keyof T, V extends T[K]>(
	obj: T,
	fields: Initiatable<T, K, V>[],
) =>
	Object.fromEntries(
		fields.map(({ id, initiate }) => [
			id,
			initiate ? initiate(obj[id] as V, obj) : obj[id],
		]),
	) as {
		[key in K]: ReturnType<Initiatable<T, K, V>['initiate']>;
	};

/*
 * Transforms primitive values to an item from options
 *  and selection back to a primitive value on change.
 */
export const primeval = [
	<
		T extends object,
		K extends keyof T,
		V extends T[K],
		F extends Field<T, K, V>,
	>(
		value: V,
		values: T,
		{ options, valueProperty }: F,
	) =>
		options
			? array(value).map(
					(v) =>
						(['string', 'number'].includes(typeof v) &&
							(options as unknown[]).find(
								(c) => prop(valueProperty)(c) === v,
							)) ??
						v,
				)
			: value,
	<
		T extends object,
		K extends keyof T,
		V extends T[K],
		F extends Field<T, K, V>,
	>(
		value: V,
		values: T,
		{ valueProperty }: F,
	) =>
		value &&
		(Array.isArray(value)
			? value.map(prop(valueProperty))
			: prop(valueProperty)(value)),
];

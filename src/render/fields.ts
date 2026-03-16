import { html } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat.js';
import { invoke } from '../helpers';
import { text } from '../inputs/common';
import { Field, Fields, Renderable } from '../types';
import { UseValidatedForm } from '../use-validated-form-core';
import { ERROR } from '../validation';

type ValidatedValue<K extends PropertyKey> = { [ERROR]?: Record<K, string> };

interface ValidatedField<
	T extends ValidatedValue<K>,
	K extends keyof T,
	V extends T[K],
	C extends object = object,
> extends Field<T, K, V, C> {
	error?: string;
}

interface RenderField<
	T extends ValidatedValue<K>,
	K extends keyof T,
	V extends T[K],
	C extends object = object,
> extends UseValidatedForm<T, C> {
	field: ValidatedField<T, K, V, C>;
}

export const renderField = <
	T extends ValidatedValue<K>,
	K extends keyof T,
	V extends T[K],
	C extends object = object,
>({
	field,
	values,
	...thru
}: RenderField<T, K, V, C>) => {
	const error =
		(thru.touched && (values?.[ERROR]?.[field.id] ?? field.error)) ?? false;
	const value = values?.[field.path ?? field.id] as V;

	return (field.input ?? text)({
		...thru,
		error,
		value,
		field,
		values,
	});
};

export const renderFields = <T extends object, C extends object = object>({
	fields,
	...thru
}: UseValidatedForm<T, C>): Renderable =>
	repeat(
		fields ?? [],
		({ id }) => id,
		(field) => renderField({ field, fields, ...thru }),
	) as Renderable;

interface RenderStyles<T extends object, C extends object = object> {
	fields?: Fields<T, C>;
	selector?: string;
}
export const renderStyles = <T extends object, C extends object = object>({
	fields,
	selector = '',
}: RenderStyles<T, C>) =>
	(fields ?? [])
		.map(({ id, styles }) =>
			styles
				? `${selector}[name="${String(id)}"] { ${Object.entries(styles)
						.map(([key, value]) => `${key}:${value}`)
						.join(';')} }`
				: '',
		)
		.join('\n');

interface RenderHeaders<T extends object, C extends object = object> {
	fields?: Fields<T, C>;
}
export const renderHeaders = <T extends object, C extends object = object>({
	fields,
}: RenderHeaders<T, C>) =>
	repeat(
		fields ?? [],
		({ id }) => id,
		(field) => {
			const text = invoke(
				field.header ?? field.label,
				undefined as T[keyof T],
				{} as T,
				field,
			);
			return html`<div class="header" name="${field.id}" title="${text}">
				${text}
			</div>`;
		},
	);

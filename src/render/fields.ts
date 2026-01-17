import { html } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat.js';
import { invoke } from '../helpers';
import { text } from '../inputs/common';
import { touched } from '../touch';
import { Field, Fields, Renderable } from '../types';
import { UseValidatedForm } from '../use-validated-form-core';
import { ERROR } from '../validation';

type ValidatedValue<K extends PropertyKey> = { [ERROR]?: Record<K, string> };

interface ValidatedField<
	T extends ValidatedValue<K>,
	K extends keyof T,
	V extends T[K],
> extends Field<T, K, V> {
	error?: string;
}

interface RenderField<
	T extends ValidatedValue<K>,
	K extends keyof T,
	V extends T[K],
> extends UseValidatedForm<T> {
	field: ValidatedField<T, K, V>;
}

export const renderField = <
	T extends ValidatedValue<K>,
	K extends keyof T,
	V extends T[K],
>({
	field,
	values,
	...thru
}: RenderField<T, K, V>) => {
	const error =
		(touched(values) && (values?.[ERROR]?.[field.id] ?? field.error)) ?? false;
	const value = values?.[field.path ?? field.id] as V;

	return (field.input ?? text)({
		...thru,
		error,
		value,
		field,
		values,
	});
};

export const renderFields = <T extends object>({
	fields,
	...thru
}: UseValidatedForm<T>): Renderable =>
	repeat(
		fields ?? [],
		({ id }) => id,
		(field) => renderField({ field, fields, ...thru }),
	) as Renderable;

interface RenderStyles<T extends object> {
	fields?: Fields<T>;
	selector?: string;
}
export const renderStyles = <T extends object>({
	fields,
	selector = '',
}: RenderStyles<T>) =>
	(fields ?? [])
		.map(({ id, styles }) =>
			styles
				? `${selector}[name="${String(id)}"] { ${Object.entries(styles)
						.map(([key, value]) => `${key}:${value}`)
						.join(';')} }`
				: '',
		)
		.join('\n');

interface RenderHeaders<T extends object> {
	fields?: Fields<T>;
}
export const renderHeaders = <T extends object>({ fields }: RenderHeaders<T>) =>
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

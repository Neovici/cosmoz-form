import '@neovici/cosmoz-input';
import '@neovici/cosmoz-input/textarea';
import { invoke } from '@neovici/cosmoz-utils/function';
import {
	parse as parseNumber,
	patternNumber,
} from '@neovici/cosmoz-utils/number';
import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import type { Field, InputBaseOpts, Invokable } from '../types';
import { input } from './base';
import { renderContents } from './render';

export interface CommonFieldProps<
	T extends object,
	K extends keyof T,
	V extends T[K],
	C extends object = object,
> {
	title?: string;
	noLabelFloat?: boolean;
	alwaysFloatLabel?: boolean;
	allowedPattern?: string | RegExp;
	step?: string;
	maxlength?: number;
	min?: Invokable<T, Field<T, K, V, C>, V, number | string, C>;
	max?: Invokable<T, Field<T, K, V, C>, V, number | string, C>;
	autosize?: boolean;
	noSpinner?: boolean;
	autocomplete?: string;
}

export interface Common<
	T extends object,
	K extends keyof T,
	V extends T[K],
	C extends object = object,
> extends Omit<InputBaseOpts<T, K, V, C>, 'onChange'> {
	type?: string;
	onInput?: (e: InputEvent) => void;
}

export const common = <
	T extends object,
	K extends keyof T,
	V extends T[K],
	C extends object = object,
>(
	props: Common<T, K, V, C>,
) => {
	const { value, values, onFocus, onInput, context, ...field } = props;
	const {
		id,
		type = 'text',
		label,
		placeholder,
		noLabelFloat,
		alwaysFloatLabel,
		error,
		prefix,
		suffix,
		warning,
		allowedPattern,
		step,
		disabled,
		maxlength,
		min,
		max,
		autosize,
		noSpinner,
		autocomplete,
		title,
		description,
	} = field;
	return html`<cosmoz-input
		class="input input-common input-${type}"
		name=${id}
		type=${type}
		?autosize=${autosize}
		?disabled=${disabled}
		?no-label-float=${noLabelFloat}
		?always-float-label=${alwaysFloatLabel}
		?invalid=${!!error}
		?no-spinner=${!!noSpinner}
		.placeholder=${placeholder}
		.errorMessage=${error}
		.allowedPattern=${allowedPattern}
		.step=${step}
		.label=${label}
		.value=${value}
		title=${ifDefined((error ?? title) || undefined)}
		maxlength=${ifDefined(maxlength)}
		min=${ifDefined(invoke(min, value, values, field, context))}
		max=${ifDefined(invoke(max, value, values, field, context))}
		autocomplete=${ifDefined(autocomplete)}
		@focus=${onFocus}
		@input=${onInput}
		>${renderContents({ prefix, suffix, warning, description })}</cosmoz-input
	>`;
};

export const text = input(
	<
		T extends object,
		K extends keyof T,
		V extends T[K],
		C extends object = object,
	>({
		onChange,
		...props
	}: InputBaseOpts<T, K, V, C>) =>
		common({
			...props,
			onInput: (e) => onChange!((e.target as HTMLInputElement).value as V),
		}),
);
export const number = input(
	<
		T extends object,
		K extends keyof T,
		V extends T[K],
		C extends object = object,
	>({
		onChange,
		allowedPattern = patternNumber,
		...props
	}: InputBaseOpts<T, K, V, C>) =>
		common({
			...props,
			type: 'number',
			allowedPattern,
			onInput: (e) =>
				onChange!(
					parseNumber((e.target as HTMLInputElement).value as string) as V,
				),
		}),
);
export const date = input(
	<
		T extends object,
		K extends keyof T,
		V extends T[K],
		C extends object = object,
	>({
		onChange,
		...props
	}: InputBaseOpts<T, K, V, C>) =>
		common({
			...props,
			type: 'date',
			onInput: (e) => onChange!((e.target as HTMLInputElement).value as V),
		}),
);
export const color = input(
	<
		T extends object,
		K extends keyof T,
		V extends T[K],
		C extends object = object,
	>({
		onChange,
		...props
	}: InputBaseOpts<T, K, V, C>) =>
		common({
			...props,
			type: 'color',
			onInput: (e) => onChange!((e.target as HTMLInputElement).value as V),
		}),
);

export interface TextareaProps {
	rows?: number;
	maxRows?: number;
	maxlength?: number;
}

export const textarea = input(
	<
		T extends object,
		K extends keyof T,
		V extends T[K],
		C extends object = object,
	>({
		id,
		label,
		placeholder,
		noLabelFloat,
		error,
		suffix,
		warning,
		disabled,
		onChange,
		value,
		maxRows,
		rows,
		maxlength,
	}: InputBaseOpts<T, K, V, C>) =>
		html`<cosmoz-textarea
			class="input input-textarea"
			name=${id}
			?disabled=${disabled}
			?no-label-float=${noLabelFloat}
			?invalid=${!!error}
			.placeholder=${placeholder}
			.errorMessage=${error}
			.label=${label}
			.value=${value}
			.rows=${rows}
			.maxRows=${maxRows}
			maxlength=${ifDefined(maxlength)}
			@input=${(e: InputEvent) =>
				onChange!((e.target as HTMLInputElement).value as V)}
			>${renderContents({ suffix, warning })}</cosmoz-textarea
		>`,
);

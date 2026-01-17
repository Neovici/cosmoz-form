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
> {
	title?: string;
	noLabelFloat?: boolean;
	alwaysFloatLabel?: boolean;
	allowedPattern?: string | RegExp;
	step?: string;
	maxlength?: number;
	min?: Invokable<T, Field<T, K, V>, V, number | string>;
	max?: Invokable<T, Field<T, K, V>, V, number | string>;
	autosize?: boolean;
	noSpinner?: boolean;
}

export interface Common<T extends object, K extends keyof T, V extends T[K]>
	extends Omit<InputBaseOpts<T, K, V>, 'onChange'> {
	type?: string;
	onInput?: (e: InputEvent) => void;
}

export const common = <T extends object, K extends keyof T, V extends T[K]>(
	props: Common<T, K, V>,
) => {
	const { value, values, onFocus, onInput, ...field } = props;
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
		min=${ifDefined(invoke(min, value, values, field))}
		max=${ifDefined(invoke(max, value, values, field))}
		@focus=${onFocus}
		@input=${onInput}
		>${renderContents({ prefix, suffix, warning, description })}</cosmoz-input
	>`;
};

export const text = input(
	<T extends object, K extends keyof T, V extends T[K]>({
		onChange,
		...props
	}: InputBaseOpts<T, K, V>) =>
		common({
			...props,
			onInput: (e) => onChange!((e.target as HTMLInputElement).value as V),
		}),
);
export const number = input(
	<T extends object, K extends keyof T, V extends T[K]>({
		onChange,
		allowedPattern = patternNumber,
		...props
	}: InputBaseOpts<T, K, V>) =>
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
	<T extends object, K extends keyof T, V extends T[K]>({
		onChange,
		...props
	}: InputBaseOpts<T, K, V>) =>
		common({
			...props,
			type: 'date',
			onInput: (e) => onChange!((e.target as HTMLInputElement).value as V),
		}),
);
export const color = input(
	<T extends object, K extends keyof T, V extends T[K]>({
		onChange,
		...props
	}: InputBaseOpts<T, K, V>) =>
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
	<T extends object, K extends keyof T, V extends T[K]>({
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
	}: InputBaseOpts<T,K,V>) =>
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

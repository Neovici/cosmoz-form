import { invoke } from '@neovici/cosmoz-utils/function';
import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { ensureNumber } from '../utils/number';
import { renderContents } from './render';
import { InputProps } from '../types';

export interface ReadOnlyNumberProps {
	format?: (value?: number) => string;
}

const formatter = new Intl.NumberFormat(undefined, {
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
});

const defaultFormat = (value?: number) => formatter.format(ensureNumber(value));

export const readOnlyNumber = <
	T extends object,
	K extends keyof T,
	V extends T[K],
>({
	value,
	values,
	field,
	error,
}: InputProps<T, K, V>) => {
	const {
		id,
		suffix,
		warning,
		label,
		format = defaultFormat,
		noLabelFloat,
	} = field;
	return [
		html`<style>
			cosmoz-input[disabled] {
				pointer-events: auto;
			}
		</style>`,
		html`<cosmoz-input
			class="input input-common input-number"
			.label=${label}
			name="${id}"
			disabled
			?no-label-float=${ifDefined(noLabelFloat)}
			.value=${format(value as number)}
			?invalid=${!!error}
			.errorMessage=${error}
			>${renderContents({
				suffix: invoke(suffix, value, values, field),
				warning: invoke(warning, value, values, field),
			})}</cosmoz-input
		>`,
	];
};

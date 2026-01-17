import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { ensureNumber } from '../../../util/number';
import '../../cz-progress-line/cz-progress-line';
import { InputProps } from '../types';

export interface ProgressLine {
	valueProperty?: PropertyKey;
	totalProperty?: string;
	offsetProperty?: string;
	color?: string;
	offsetColor?: string;
}

export interface ProgressLineProps {
	progressLine?: ProgressLine;
}

export const progressLine = <
	T extends object,
	K extends keyof T,
	V extends T[K],
>({
	field: {
		id,
		progressLine: {
			valueProperty = id,
			totalProperty,
			offsetProperty,
			color,
			offsetColor,
		} = {},
	},
	values,
	error,
}: InputProps<T, K, V>) => {
	if (!valueProperty || !totalProperty || !offsetProperty) return;
	const value =
			ensureNumber(
				(values as any)[valueProperty] /
					((values as any)[totalProperty] ?? 100),
			) * 100,
		offset = ensureNumber(
			((values as any)[offsetProperty] /
				((values as any)[totalProperty] ?? 100)) *
				100,
		);
	return html`<cz-progress-line
		value=${value}
		offset=${offset}
		color=${ifDefined(color)}
		offset-color=${ifDefined(offsetColor)}
		?error=${ifDefined(error)}
	></cz-progress-line>`;
};

export const withProgressLine =
	<T extends object, K extends keyof T, V extends T[K]>(
		input: (props: InputProps<T, K, V>) => unknown,
	) =>
	(pass: InputProps<T, K, V>) =>
		html`<div class="input input--w-progress-line">
			${[input(pass), progressLine(pass)]}
		</div>`;

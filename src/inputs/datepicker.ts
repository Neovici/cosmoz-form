import '@neovici/cosmoz-datepicker';
// eslint-disable-next-line no-duplicate-imports
import type {
	DatepickerMode,
	DatepickerValue,
	RangePreset,
} from '@neovici/cosmoz-datepicker';
import { html } from '@pionjs/pion';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { InputBaseOpts } from '../types';
import { input } from './base';

export interface DatepickerProps {
	locale?: string;
	mode?: DatepickerMode;
	minDate?: string;
	maxDate?: string;
	noPresets?: boolean;
	presets?: RangePreset[];
}

export const datepicker = input(
	<
		T extends object,
		K extends keyof T,
		V extends T[K],
		C extends object = object,
	>({
		id,
		disabled,
		onChange,
		value,
		mode,
		locale,
		minDate,
		maxDate,
		noPresets,
		presets,
	}: InputBaseOpts<T, K, V, C>) => {
		return html`
			<div class="input">
				<cosmoz-datepicker
					name=${id}
					mode=${ifDefined(mode)}
					locale=${ifDefined(locale)}
					min=${ifDefined(minDate)}
					max=${ifDefined(maxDate)}
					?disabled=${disabled}
					?no-presets=${noPresets}
					.presets=${ifDefined(presets)}
					.value=${value}
					@value-changed=${({
						detail,
					}: CustomEvent<{ value: DatepickerValue }>) =>
						onChange!(detail.value as V)}
				></cosmoz-datepicker>
			</div>
		`;
	},
);

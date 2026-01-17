import { html } from 'lit-html';
import { input, InputBaseProps } from './base';
import { renderContents } from './render';

// TODO: import cz-number-header
export const numberRange = input(
	<T extends object, K extends keyof T, V extends T[K]>({
		id,
		label,
		error,
		suffix,
		warning,
		disabled,
		onChange,
		value,
		alwaysFloatLabel,
		min,
		max,
	}: InputBaseProps<T, K, V>) =>
		html`<cz-number-header
			wide
			?always-float-label=${alwaysFloatLabel}
			?disabled=${disabled}
			.label=${label}
			name=${id}
			.onChange=${onChange}
			.value=${value}
			.error=${error}
			.values=${[min, max]}
			>${renderContents({ suffix, warning })}</cz-number-header
		>`,
);

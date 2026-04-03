import '@neovici/cosmoz-input';
import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { live } from 'lit-html/directives/live.js';
import { InputBaseOpts } from '../types';
import { input } from './base';
import { renderDescription, renderWarning } from './render';

export const toggleInput = <
	T extends object,
	K extends keyof T,
	V extends T[K],
	C extends object = object,
>({
	id,
	label,
	error,
	disabled,
	warning,
	onChange,
	value,
	title,
	description,
}: InputBaseOpts<T, K, V, C>) =>
	html`<cosmoz-toggle
		class="input input-toggle"
		name=${id}
		title=${ifDefined(title)}
		?disabled=${disabled}
		.label=${label}
		.error=${error}
		.value=${live(value)}
		@change=${(e: CustomEvent<boolean>) => onChange!(e.detail as V)}
		>${[renderWarning(warning), renderDescription(description)]}</cosmoz-toggle
	>`;

export const toggle = input(toggleInput);

import { html } from 'lit-html';
import { until } from 'lit-html/directives/until.js';
import { when } from 'lit-html/directives/when.js';
import { invoke } from '../helpers';
import { InputBaseOpts } from '../types';
import { input } from './base';

// this only works in cosmoz-frontend, as cz-file-drop is not imported here
// TODO: import cz-file-drop
export const fileDrop = input(
	<T extends object, K extends keyof T, V extends T[K]>({
		id,
		value,
		values,
		error,
		onChange,
		multiple,
		accept,
	}: InputBaseOpts<T, K, V>) =>
		html`<div class="input">
			<cz-file-drop
				name=${id}
				.multiple=${multiple}
				.accept=${until(invoke(accept, value, values))}
				@change=${({ detail }: { detail: File[] }) => onChange!(detail as V)}
			></cz-file-drop>
			${when(error, () => html`<div class="failure">${error}</div>`)}
		</div>`,
);

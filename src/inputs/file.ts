import { invoke } from '@neovici/cosmoz-utils/function';
import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { until } from 'lit-html/directives/until.js';
import { when } from 'lit-html/directives/when.js';
import { InputBaseOpts } from '../types';
import { input } from './base';

export interface FileProps<
	T extends object,
	K extends keyof T,
	V extends T[K],
> {
	multiple?: boolean;
	accept?:
		| string
		| PromiseLike<string>
		| ((value: V, values: T) => PromiseLike<string>);
	autoReset?: boolean;
}

export const file = input(
	<
		T extends object,
		K extends keyof T,
		V extends T[K],
		C extends object = object,
	>({
		id,
		error,
		onChange,
		accept,
		multiple,
		value,
		values,
		autoReset,
	}: InputBaseOpts<T, K, V, C>) =>
		html`<div class="input input-file" name=${id}>
			<input
				class="file"
				type="file"
				name=${id}
				?multiple=${multiple}
				accept=${ifDefined(until(invoke(accept, value, values)))}
				@change=${(e: Event) => {
					onChange(
						Array.from((e.target! as HTMLInputElement).files ?? []) as V,
					);
					if (autoReset) {
						(e.target as HTMLInputElement).value = '';
					}
				}}
			/>
			${when(error, (error) => html`<div class="failure">${error}</div>`)}
		</div>`,
);

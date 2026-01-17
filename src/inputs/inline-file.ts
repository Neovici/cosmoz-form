import { _ } from '@neovici/cosmoz-i18next';
import { invoke, noop } from '@neovici/cosmoz-utils/function';
import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { until } from 'lit-html/directives/until.js';
import { input } from './base';
import { text } from './common';
import { tagged as css } from '@neovici/cosmoz-utils';
import { InputBaseOpts } from '../types';

// TODO: wrap in a component
export const inlineFileStyle = css`
	.input-inline-file {
		position: relative;
	}

	.input-inline-file svg {
		margin-right: 5px;
	}

	.input-inline-file > .file {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0;
		cursor: pointer;
	}
`;

const icon = html`<svg
	xmlns="http://www.w3.org/2000/svg"
	width="18"
	height="18"
	viewBox="0 0 24 24"
>
	<g
		fill="none"
		stroke="#000"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
	>
		<path
			d="M18 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7.1a2 2 0 0 1 1.5.6l4.9 5.2a2 2 0 0 1 .5 1.4V20a2 2 0 0 1-2 2ZM7.9 17.5h8.2M7.9 13.5h8.2M8 9.5h5"
		/>
	</g>
</svg>`;

const humanLabel = (value?: File | File[]) => {
	if (!value) return _('Choose file');
	if (Array.isArray(value)) {
		if (value.length === 1) return value[0].name;
		return _('{0} files', value.length);
	}
	return value.name;
};

interface Ev extends Omit<Event, 'target'> {
	target: HTMLInputElement;
}

export const inlineFile = input(
	<T extends object, K extends keyof T, V extends T[K]>({
		id,
		label,
		value,
		values,
		onChange,
		accept,
		multiple,
		disabled,
	}: InputBaseOpts<T, K, V>) =>
		html`<div class="input input-inline-file" name=${id}>
			${text<T, K, T[K]>({
				value: humanLabel(value as File | File[] | undefined) as T[K],
				field: { label, disabled, prefix: icon, id },
				error: false,
				invalid: false,
				load: noop,
				onChange: noop,
				onReset: noop,
				onValues: noop,
				touched: false,
				values,
			})}

			<input
				class="file"
				type="file"
				name=${id}
				title=${humanLabel(value as File | File[] | undefined)}
				?multiple=${multiple}
				?disabled=${ifDefined(disabled)}
				accept=${ifDefined(until(invoke(accept, value, values)))}
				@change=${(e: Ev) =>
					onChange!(
						(multiple ? Array.from(e.target.files!) : e.target.files![0]) as V,
					)}
			/>
		</div>`,
);

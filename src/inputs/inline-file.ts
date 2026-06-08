import { fileAttachment02Icon } from '@neovici/cosmoz-icons/untitled';
import { tagged as css } from '@neovici/cosmoz-utils';
import { invoke, noop } from '@neovici/cosmoz-utils/function';
import { t } from 'i18next';
import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { until } from 'lit-html/directives/until.js';
import { InputBaseOpts } from '../types';
import { input } from './base';
import { text } from './common';
// TODO: wrap in a component
export const inlineFileStyle = css`
	.input-inline-file {
		position: relative;
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

const humanLabel = (value?: File | File[]) => {
	if (!value) return t('Choose file');
	if (Array.isArray(value)) {
		if (value.length === 1) return value[0].name;
		return t('{0} files', { 0: value.length });
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
				field: {
					label,
					disabled,
					prefix: fileAttachment02Icon({ styles: 'vertical-align: middle;' }),
					id,
				},
				error: false,
				invalid: false,
				load: noop,
				onChange: noop,
				onReset: noop,
				onValues: noop,
				touched: false,
				values,
				context: {},
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

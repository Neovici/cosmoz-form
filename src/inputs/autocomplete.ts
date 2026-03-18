import { html } from 'lit-html';
import { guard } from 'lit-html/directives/guard.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { live } from 'lit-html/directives/live.js';

import '@neovici/cosmoz-autocomplete';

import { InputBaseOpts, Resolvable } from '../types';
import { input } from './base';
import { renderContents } from './render';

type OptionsOpts<T, V, C> = {
	active: boolean;
	query: string;
	value: V;
	values: T;
	context: C;
};

export interface AutocompleteProps<
	T extends object,
	K extends keyof T,
	V extends T[K],
	C extends object,
> {
	options?: Resolvable<unknown[] | false | undefined, [OptionsOpts<T, V, C>]>;
	limit?: number;
	textProperty?: string;
	valueProperty?: string;
	keepOpened?: boolean;
	keepQuery?: boolean;
	wrap?: boolean;
	showSingle?: boolean;
	preserveOrder?: boolean;
	itemRenderer?: unknown;
	chipRenderer?: unknown;
	textual?: unknown;
	externalSearch?: boolean;
	itemHeight?: number | 'auto';
}

interface Info {
	active: boolean;
	query: string;
}

export const autocomplete = input(
	<T extends object, K extends keyof T, V extends T[K], C extends object>({
		id,
		label,
		noLabelFloat,
		alwaysFloatLabel,
		error,
		warning,
		suffix,
		disabled,
		onChange,
		options,
		limit,
		min,
		textProperty,
		valueProperty,
		value,
		values,
		itemRenderer,
		chipRenderer,
		keepOpened,
		keepQuery,
		placeholder,
		wrap,
		showSingle,
		preserveOrder,
		title,
		textual,
		description,
		externalSearch,
		itemHeight,
		context,
		...thru
	}: InputBaseOpts<T, K, V, C>) => {
		return html`<cosmoz-autocomplete
			class="input input-autocomplete"
			?data-warning=${!!warning}
			name=${id}
			?disabled=${disabled}
			?wrap=${wrap}
			?no-label-float=${noLabelFloat}
			?always-float-label=${alwaysFloatLabel}
			?invalid=${!!error}
			?keep-opened=${!!keepOpened}
			?keep-query=${!!keepQuery}
			?show-single=${!!showSingle}
			?preserve-order=${!!preserveOrder}
			.placeholder=${placeholder}
			.itemRenderer=${ifDefined(itemRenderer)}
			.chipRenderer=${ifDefined(chipRenderer)}
			.errorMessage=${error}
			.label=${label}
			.value=${live(value)}
			.source=${guard([options, value, values, context], () =>
				typeof options === 'function'
					? (info: Info) =>
							options({ ...thru, ...info, value, values, context })
					: options,
			)}
			.textProperty=${textProperty}
			.valueProperty=${valueProperty}
			.limit=${limit}
			.min=${min}
			.itemHeight=${itemHeight}
			.title=${ifDefined(title)}
			.textual=${textual}
			.onChange=${(options?: V[]) =>
				onChange((limit === 1 ? options?.[0] : options) as V)}
			?external-search=${externalSearch}
			>${renderContents({ suffix, warning, description })}</cosmoz-autocomplete
		>`;
	},
);

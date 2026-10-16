import { html } from 'lit-html';
import { guard } from 'lit-html/directives/guard.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { live } from 'lit-html/directives/live.js';
import { when } from 'lit-html/directives/when.js';

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
	mode?: 'select';
	variant?: 'cell';
	compact?: boolean;
	hint?: string;
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
	required?: boolean;
	textual?: unknown;
	externalSearch?: boolean;
	itemHeight?: number | 'auto';
	/** Message shown instead of "No results found" when the query matches no options. */
	noResult?: unknown;
}

interface Info {
	active: boolean;
	query: string;
}

// slotted content is not styled by cosmoz-autocomplete, so match its default message
const noResultStyle = [
	'font-size: var(--cz-text-sm)',
	'line-height: var(--cz-text-sm-line-height)',
	'font-weight: var(--cz-font-weight-regular)',
	'padding: 0 calc(var(--cz-spacing) * 3)',
	'color: var(--cz-color-text-secondary)',
].join(';');

const renderNoResult = (noResult: unknown) =>
	when(
		noResult,
		() =>
			html`<span slot="no-result" style=${noResultStyle}>${noResult}</span>`,
	);

export const autocomplete = input(
	<T extends object, K extends keyof T, V extends T[K], C extends object>({
		id,
		variant,
		compact,
		hint,
		label,
		error,
		required,
		warning,
		suffix,
		mode,
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
		noResult,
		context,
		...thru
	}: InputBaseOpts<T, K, V, C>) => {
		return html`<cosmoz-autocomplete
			class="input input-autocomplete"
			mode=${ifDefined(mode)}
			variant=${ifDefined(variant)}
			?compact=${compact}
			hint=${ifDefined(hint)}
			?data-warning=${!!warning}
			name=${id}
			?disabled=${disabled}
			?wrap=${wrap}
			?invalid=${!!error}
			?required=${required}
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
				onChange(
					(limit === 1 || mode === 'select' ? options?.[0] : options) as V,
				)}
			?external-search=${externalSearch}
			>${renderContents({ suffix, warning, description })}${renderNoResult(
				noResult,
			)}</cosmoz-autocomplete
		>`;
	},
);

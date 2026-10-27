import { html } from 'lit-html';
import { guard } from 'lit-html/directives/guard.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { live } from 'lit-html/directives/live.js';
import { when } from 'lit-html/directives/when.js';

import '@neovici/cosmoz-autocomplete';

import { InputBaseOpts, Renderable, Resolvable } from '../types';
import { input } from './base';
import { renderContents } from './render';

type OptionsOpts<T, V, C> = {
	active: boolean;
	query: string;
	value: V;
	values: T;
	context: C;
};

/**
 * The individual item behind an autocomplete value: for multi-select fields
 * the value is an array of items, so the item is extracted from it.
 */
type OptionValue<V> = V extends readonly unknown[] ? V[number] : V;

/**
 * A single option the autocomplete offers: the raw value itself, or an object
 * shaped per `valueProperty`/`textProperty` (commonly `{ id, text }`).
 */
export type AutocompleteOption<V> = OptionValue<V> | {
	id: OptionValue<V>;
	text?: string;
};

/**
 * Context `cosmoz-autocomplete` passes to an item renderer, as
 * `(item, index, opts)`. Renderers are forwarded opaquely to the element, so
 * the option is typed (giving `V` presence end-to-end), but the renderer's
 * return type stays permissive.
 */
export type AutocompleteItemRendererOpts<V> = {
	items: AutocompleteOption<V>[];
	position: { index: number; scroll?: boolean };
	query?: string;
	textual: (item: AutocompleteOption<V>) => string;
	highlight: (index: number) => void;
	select: (item: AutocompleteOption<V>) => void;
	isSelected: (item: AutocompleteOption<V>) => void;
};

export type AutocompleteItemRenderer<V> = (
	item: AutocompleteOption<V>,
	index: number,
	opts: AutocompleteItemRendererOpts<V>,
) => unknown;

/**
 * Props `cosmoz-autocomplete` passes to a chip renderer, as a single object;
 * `item` is `null` for the hidden overflow badge chip.
 */
export type AutocompleteChipRenderer<V> = (opts: {
	item: AutocompleteOption<V> | null;
	content?: unknown;
	onClear?: false | (() => void);
	disabled?: boolean;
	className?: string;
	slot?: string;
	hidden?: boolean;
}) => unknown;

export interface AutocompleteProps<
	T extends object,
	K extends keyof T,
	V extends T[K],
	C extends object,
> {
	options?: Resolvable<
		AutocompleteOption<V>[] | false | undefined,
		[OptionsOpts<T, V, C>]
	>;
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
	itemRenderer?: AutocompleteItemRenderer<V>;
	chipRenderer?: AutocompleteChipRenderer<V>;
	required?: boolean;
	textual?: unknown;
	externalSearch?: boolean;
	itemHeight?: number | 'auto';
	/** Extra content rendered inside `cosmoz-autocomplete`, e.g. `<span slot="no-result">`. */
	// TODO: should be applied to all other inputs (if applicable)
	content?: Renderable;
}

interface Info {
	active: boolean;
	query: string;
}

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
		content,
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
			>${[
				renderContents({ suffix, warning, description }),
				when(content, () => content),
			]}</cosmoz-autocomplete
		>`;
	},
);

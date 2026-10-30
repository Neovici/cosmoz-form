import { virtualize } from '@lit-labs/virtualizer/virtualize.js';
import { trash01Icon } from '@neovici/cosmoz-icons/untitled';
import { tagged as css } from '@neovici/cosmoz-utils';
import { invoke, noop } from '@neovici/cosmoz-utils/function';
import { TemplateResult, html } from 'lit-html';
import { when } from 'lit-html/directives/when.js';
import { Fields } from '../types';
import { renderFields, renderHeaders, renderStyles } from './fields';
import { styles } from './styles';

const key = Symbol('key');
type Item = Partial<{ [key]: unknown }>;

const mkDefaults = <T extends object>(defaults: T) => {
	const newly = { ...defaults };
	return Object.assign(newly, { [key]: newly });
};

export const renderRemove = (remove: () => void) =>
	html`<cosmoz-button
		class="remove"
		variant="tertiary"
		size="sm"
		?disabled=${!remove}
		@click=${remove}
	>
		${trash01Icon()}
	</cosmoz-button>`;

// An invisible remove button keeps the columns of rows without one (the header
// and the add row) aligned with the removable rows.
export const renderRemovePlaceholder = () =>
	html`<cosmoz-button
		class="remove remove-placeholder"
		variant="tertiary"
		size="sm"
		aria-hidden="true"
		inert
	>
		${trash01Icon()}
	</cosmoz-button>`;

interface RenderOpts<T extends Item, C extends object = object> {
	fields: Fields<T, C>;
	context?: C;
	touched?: boolean;
	remove?: (index: number) => void;
	// Reserve the remove-button gutter even though this row has no button, so
	// it stays aligned with the removable rows.
	removePlaceholder?: boolean;
	update: (index: number, update: Partial<T>) => void;
}
export const renderItem = <T extends Item, C extends object = object>(
	values: T,
	index: number,
	{
		update,
		remove,
		removePlaceholder,
		fields,
		context,
		touched = false,
		...thru
	}: RenderOpts<T, C>,
): TemplateResult =>
	html`<div class="item" data-index=${index}>
		${[
			renderFields({
				...thru,
				values,
				fields,
				context: context ?? ({} as C),
				touched,
				onChange: (changes) =>
					update(index, {
						...invoke(changes, values),
						[key]: values?.[key] ?? values,
					}),
				invalid: false,
				load: noop,
				onReset: noop,
				onValues: noop,
			}),
			when(remove, (remove) =>
				renderRemove(values && remove && (() => remove(index))),
			),
			when(removePlaceholder, renderRemovePlaceholder),
		]}
	</div>`;

const defaultKeyFunction = <V>(item: V): V =>
	(item as { [key]: V })?.[key] ?? item;

export interface RenderItems<T extends object, C extends object = object> {
	items: T[];
	fields: Fields<T, C>;
	context?: C;
	touched?: boolean;
	paste?: (e: ClipboardEvent) => void;
	renderItem?: typeof renderItem;
	defaults?: T;
	keyFunction?: typeof defaultKeyFunction;
	update: (index: number, value: Partial<T>) => void;
	remove?: (index: number) => void;
	/**
	 * @deprecated `.items` is always the scroller; it scrolls once its height is
	 * bounded and grows with its rows otherwise.
	 */
	scroller?: boolean;
	style?: string;
}

export const renderItems = <T extends object, C extends object = object>({
	items,
	fields,
	renderItem: render = renderItem,
	paste,
	defaults,
	keyFunction = defaultKeyFunction,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	scroller,
	update,
	style,
	...thru
}: RenderItems<T, C>) =>
	// The headers sit outside the virtualized rows so they can stick to the
	// top of the scroller; the virtualizer then scrolls with \`.items\`.
	html`<div class="items" @paste=${paste} style=${style}>
		<div class="headers">
			${renderHeaders({ fields })}
			${when(thru.remove != null, renderRemovePlaceholder)}
		</div>
		<div class="rows">
			${virtualize({
				items: [...items, ...(defaults ? [mkDefaults(defaults)] : [])],
				keyFunction,
				renderItem: (item: T, index: number) =>
					defaults != null && index === items.length
						? render(item, index, {
								...thru,
								fields,
								remove: undefined,
								removePlaceholder: thru.remove != null,
								update: (index, changes) =>
									update(index, { ...item, ...changes }),
							})
						: render(item, index, {
								...thru,
								fields,
								update,
							}),
				scroller: false,
			})}
		</div>
	</div>`;

export const renderItemsStyles = <T extends object, C extends object = object>({
	fields,
}: {
	fields: Fields<T, C>;
}) => css`
	${styles}
	${renderStyles({ fields })}
`;

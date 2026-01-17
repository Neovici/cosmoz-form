import { virtualize } from '@lit-labs/virtualizer/virtualize.js';
import { tagged as css } from '@neovici/cosmoz-utils';
import { TemplateResult, html } from 'lit-html';
import { when } from 'lit-html/directives/when.js';
import { Fields } from '../types';
import { renderFields, renderHeaders, renderStyles } from './fields';
import { cancelIcon } from '../../cz-icon/cancel.js';
import { styles } from './styles';
import { invoke, noop } from '@neovici/cosmoz-utils/function';

const key = Symbol('key');
type Item = Partial<{ [key]: unknown }>;

const mkDefaults = <T extends object>(defaults: T) => {
	const newly = { ...defaults };
	return Object.assign(newly, { [key]: newly });
};

export const renderRemove = (remove: () => void) =>
	html`<button class="remove" ?disabled=${!remove} @click=${remove}>
		${cancelIcon()}
	</button>`;

interface RenderOpts<T extends Item> {
	fields: Fields<T>;
	remove?: (index: number) => void;
	update: (index: number, update: Partial<T>) => void;
}
export const renderItem = <T extends Item>(
	values: T,
	index: number,
	{ update, remove, fields, ...thru }: RenderOpts<T>,
): TemplateResult =>
	html`<div class="item" data-index=${index}>
		${[
			renderFields({
				...thru,
				values,
				fields,
				onChange: (changes) =>
					update(index, {
						...invoke(changes, values),
						[key]: values?.[key] ?? values,
					}),
				invalid: false,
				load: noop,
				onReset: noop,
				onValues: noop,
				touched: false,
			}),
			when(remove, (remove) =>
				renderRemove(values && remove && (() => remove(index))),
			),
		]}
	</div>`;

const defaultKeyFunction = <V>(item: V): V =>
	(item as { [key]: V })?.[key] ?? item;

export interface RenderItems<T extends object> {
	items: T[];
	fields: Fields<T>;
	paste?: (e: ClipboardEvent) => void;
	renderItem?: typeof renderItem;
	defaults?: T;
	keyFunction?: typeof defaultKeyFunction;
	update: (index: number, value: Partial<T>) => void;
	remove?: (index: number) => void;
	scroller?: boolean;
	style?: string;
}

export const renderItems = <T extends object>({
	items,
	fields,
	renderItem: render = renderItem,
	paste,
	defaults,
	keyFunction = defaultKeyFunction,
	scroller = true,
	update,
	style,
	...thru
}: RenderItems<T>) =>
	html`<div class="items" @paste=${paste} style=${style}>
		${virtualize({
			items: [
				{ [key]: 0 } as unknown as T,
				...items,
				...(defaults ? [mkDefaults(defaults)] : []),
			],
			keyFunction,
			renderItem: (item: T, index: number) => {
				switch (true) {
					case index === 0:
						return html`<div class="headers">
							${renderHeaders({ fields })}
						</div>`;

					case defaults != null && index === items.length + 1:
						return render(item, index - 1, {
							...thru,
							fields,
							remove: undefined,
							update: (index, changes) =>
								update(index, { ...item, ...changes }),
						});

					default:
						return render(item, index - 1, {
							...thru,
							fields,
							update,
						});
				}
			},
			scroller,
		})}
	</div>`;

export const renderItemsStyles = <T extends object>({
	fields,
}: {
	fields: Fields<T>;
}) => css`
	${styles}
	${renderStyles({ fields })}
`;

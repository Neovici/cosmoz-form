import { assert, fixture, html, waitUntil } from '@open-wc/testing';
import { render } from 'lit-html';
import { autocomplete } from '../inputs';
import { renderItems, renderItemsStyles } from '../render/items';
import type { Fields } from '../types';

// The virtualizer resizes while measuring; the browser reports that as a benign error.
window.addEventListener('error', (e) => {
	if (e.message.includes('ResizeObserver loop')) e.stopImmediatePropagation();
});

const tokens = Object.assign(document.createElement('link'), {
	rel: 'stylesheet',
	href: new URL(
		'../../node_modules/@neovici/cosmoz-tokens/src/index.css',
		import.meta.url,
	).href,
});
document.head.append(tokens);
await new Promise((resolve) => tokens.addEventListener('load', resolve));

type Item = { a?: string; b?: string; c?: string };

const fields = [
	{ id: 'a', header: 'A' },
	{ id: 'b', header: 'B' },
	{ id: 'c', header: 'C', input: autocomplete, options: ['x', 'y'] },
] as Fields<Item>;

const renderList = async () => {
	const host = await fixture<HTMLDivElement>(
		html`<div style="width: 600px"></div>`,
	);
	const root = host.attachShadow({ mode: 'open' });
	render(
		html`<style>
				${renderItemsStyles({ fields })}
			</style>
			${renderItems({
				items: [{ a: '1', b: '2', c: 'x' }],
				fields,
				update: () => undefined,
				remove: () => undefined,
				defaults: {},
				scroller: false,
			} as unknown as Parameters<typeof renderItems>[0])}`,
		root,
	);
	await waitUntil(() => root.querySelectorAll('.item').length === 2);
	await new Promise(requestAnimationFrame);
	return root;
};

const lefts = (row: Element, selector: string) =>
	Array.from(row.querySelectorAll(selector), (el) =>
		Math.round(el.getBoundingClientRect().left),
	);

const middle = (el: Element) => {
	const { top, height } = el.getBoundingClientRect();
	return Math.round(top + height / 2);
};

suite('renderItems', () => {
	suite('layout', () => {
		test('the add row lines its columns up with removable rows and the headers', async () => {
			const root = await renderList();
			const [removable, add] = root.querySelectorAll('.item');
			const columns = lefts(removable, '.input');

			assert.lengthOf(columns, 3);
			assert.deepEqual(lefts(add, '.input'), columns);
			assert.deepEqual(
				lefts(root.querySelector('.headers')!, '.header'),
				columns,
			);
		});

		test('the remove button sits on the middle of the input controls', async () => {
			const root = await renderList();
			const row = root.querySelector('.item')!;
			const button = row.querySelector('cosmoz-button')!;
			const control = row
				.querySelector('.input')!
				.shadowRoot!.querySelector('[part~="wrap"]')!;

			assert.closeTo(middle(button), middle(control), 1);
		});
	});

	suite('add row', () => {
		const setup = async () => {
			const host = await fixture<HTMLDivElement>(
				html`<div style="width: 600px"></div>`,
			);
			const root = host.attachShadow({ mode: 'open' });
			const defaults = {};
			let items: Item[] = [];
			const draw = async () => {
				render(
					renderItems({
						items,
						fields,
						defaults,
						scroller: false,
						update: (index: number, changes: Partial<Item>) => {
							items = [...items];
							items[index] = { ...items[index], ...changes };
						},
					} as unknown as Parameters<typeof renderItems>[0]),
					root,
				);
				await waitUntil(
					() => root.querySelectorAll('.item').length === items.length + 1,
				);
			};
			const row = (index: number) =>
				root.querySelector(`.item[data-index="${index}"]`)!;
			const addRow = () => row(items.length);
			await draw();
			return { row, draw, addRow };
		};

		test('the add row becomes the new item and a fresh add row follows', async () => {
			const { row, draw, addRow } = await setup();
			const typedIn = addRow();
			const input = typedIn
				.querySelector('[name="a"]')!
				.shadowRoot!.querySelector('input')!;
			input.value = 'typed';
			input.dispatchEvent(
				new InputEvent('input', { bubbles: true, composed: true }),
			);

			await draw();

			assert.strictEqual(row(0), typedIn);
			assert.notStrictEqual(addRow(), typedIn);
		});
	});
});

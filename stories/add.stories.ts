import '@neovici/cosmoz-spinner';
import { component, useState } from '@pionjs/pion';
import { html } from 'lit-html';

import {
	autocomplete,
	dateRange,
	file,
	fileDrop,
	inlineFile,
	number,
	readOnlyNumber,
	renderAddFields,
	renderAddStyles,
	renderButton$,
	renderDescription,
	renderWarning,
	required,
	text,
	toggle,
	useValidatedForm,
	type Fields,
	type ItemRule,
} from '../src/index.js';

export default {
	title: 'Add',
};

// ── Types ─────────────────────────────────────────────────────────────────────

type Product = {
	name: string;
	price: number;
	sku: string;
	active: boolean;
	category: string;
	tags: string[];
	attachments: File[];
	document: File;
	dropFiles: File[];
};

const CATEGORIES = ['Electronics', 'Clothing', 'Food', 'Books', 'Toys'];
const TAGS = ['new', 'sale', 'popular', 'limited', 'exclusive', 'seasonal'];

const INITIAL_PRODUCT: Product = {
	name: '',
	price: 0,
	sku: '',
	active: true,
	category: '',
	tags: [],
	attachments: [],
	document: undefined as unknown as File,
	dropFiles: [],
};

const PRODUCT_FIELDS: Fields<Product> = [
	{
		id: 'name',
		label: 'Product name',
		hint: 'Best practice: keep it under 50 characters.',
		input: text,
		validate: [required, (v) => (v ? false : 'Name is required')],
	},
	{
		id: 'price',
		label: 'Price',
		hint: 'Enter the price in euros. Must be greater than 0.',
		input: number,
		min: 0,
		validate: [
			required,
			(v) => (v > 0 ? false : 'Price must be greater than 0'),
		],
	},
	{ id: 'sku', label: 'SKU', hint: 'Stock Keeping Unit', input: text },
	{
		id: 'category',
		label: 'Category',
		input: autocomplete,
		options: CATEGORIES,
		mode: 'select',
		preserveOrder: true,
		validate: [required, (v) => (v ? false : 'Category is required')],
	},
	{
		id: 'tags',
		label: 'Tags',
		input: autocomplete,
		options: TAGS,
		preserveOrder: true,
		validate: [
			required,
			(v) => (v.length > 0 ? false : 'At least one tag is required'),
		],
	},
	{ id: 'active', label: 'Active', input: toggle },
	{ id: 'attachments', label: 'Attachments', input: file, multiple: true },
	{ id: 'document', label: 'Document', input: inlineFile },
	{ id: 'dropFiles', label: 'Drop files', input: fileDrop, multiple: true },
];

const PRODUCT_RULES: ItemRule<Product>[] = [
	[(current) => (current.name ? {} : { name: current.name })],
];

// ── Story: Basic add fields ──────────────────────────────────────────────────

const AddFieldsDemo = () => {
	const form = useValidatedForm({
		initial: INITIAL_PRODUCT,
		fields: PRODUCT_FIELDS,
		rules: PRODUCT_RULES,
		touched: true,
	});
	return html`
		<style>
			:host {
				display: block;
				max-width: 420px;
				padding: 1rem;
				font-family: sans-serif;
			}
			${renderAddStyles()}
		</style>
		<h3>Add Product (fields only)</h3>
		${renderAddFields(form)}
	`;
};

customElements.define('story-add-fields', component(AddFieldsDemo));

export const BasicFields = () => html`<story-add-fields></story-add-fields>`;
BasicFields.storyName = 'Fields';

// ── Story: With save button ──────────────────────────────────────────────────

const fakeSave = () =>
	new Promise<void>((resolve) => setTimeout(resolve, 2000));

const AddWithButtonDemo = () => {
	const form = useValidatedForm({
		initial: INITIAL_PRODUCT,
		fields: PRODUCT_FIELDS,
		rules: PRODUCT_RULES,
		touched: true,
	});
	const [save$, setSave] = useState<PromiseLike<void> | undefined>(undefined);

	const onSave = () => {
		if (form.invalid) return;
		const p = fakeSave();
		setSave(p);
		p.then(() => setSave(undefined));
	};

	return html`
		<style>
			:host {
				display: flex;
				flex-direction: column;
				gap: 1rem;
				max-width: 420px;
				padding: 1rem;
				font-family: sans-serif;
			}
			${renderAddStyles()}
		</style>
		<h3>Add Product (with save button)</h3>
		${renderAddFields(form)}
		${renderButton$({
			save$,
			onSave,
			disabled: form.invalid,
			title: 'Save product',
		})}
	`;
};

customElements.define('story-add-button', component(AddWithButtonDemo));

export const WithButton = () => html`<story-add-button></story-add-button>`;

// ── Story: Variant Cell and Select Mode ─────────────────────────────────────

type Order = {
	description: string;
	quantity: number;
	unitPrice: number;
	total: number;
	period: { from: string; to: string };
};

const INITIAL_ORDER: Order = {
	description: 'Widget package',
	quantity: 10,
	unitPrice: 49.99,
	total: 499.9,
	period: { from: '2026-01-01', to: '2026-06-30' },
};

const ORDER_FIELDS: Fields<Order> = [
	{ id: 'description', label: 'Description', input: text },
	{ id: 'quantity', label: 'Quantity', input: number, min: 1 },
	{ id: 'unitPrice', label: 'Unit price (€)', input: number, min: 0 },
	{
		id: 'total',
		label: 'Total (€)',
		input: readOnlyNumber,
	},
	{ id: 'period', label: 'Period', input: dateRange },
];

const ORDER_FIELDS_CELL: Fields<Order> = [
	{ id: 'description', label: 'Description', input: text, variant: 'cell' },
	{ id: 'quantity', label: 'Quantity', input: number, min: 1, variant: 'cell' },
	{
		id: 'unitPrice',
		label: 'Unit price (€)',
		input: number,
		min: 0,
		variant: 'cell',
	},
	{
		id: 'total',
		label: 'Total (€)',
		input: readOnlyNumber,
		variant: 'cell',
	},
	{ id: 'period', label: 'Period', input: dateRange, variant: 'cell' },
];

const ORDER_RULES: ItemRule<Order>[] = [
	[
		(current) => ({
			total: current.quantity * current.unitPrice,
		}),
		(current) => [current.quantity, current.unitPrice],
	],
];

const DateRangeDemo = () => {
	const form = useValidatedForm({
		initial: INITIAL_ORDER,
		fields: ORDER_FIELDS,
		rules: ORDER_RULES,
		touched: true,
	});

	const formCell = useValidatedForm({
		initial: INITIAL_ORDER,
		fields: ORDER_FIELDS_CELL,
		rules: ORDER_RULES,
		touched: true,
	});

	return html`
		<style>
			:host {
				display: block;
				max-width: 680px;
				padding: 1rem;
				font-family: sans-serif;
			}
			${renderAddStyles()} .table-grid {
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
				align-items: end;
				border: 1px solid #dde3ef;
				border-radius: 8px;
				padding: 12px;
			}
		</style>
		<h3>Order form — date range &amp; computed total</h3>
		<p style="font-size: 0.85rem; color: #555;">
			Change quantity or unit price — the total recalculates automatically
			(read-only). The period uses a date range input.
		</p>
		${renderAddFields(form)}
		<h3>Order form — table layout (cell variant)</h3>
		<p style="font-size: 0.85rem; color: #555;">
			Same fields rendered in a grid/table layout using
			<code>variant: 'cell'</code>.
		</p>
		<div class="table-grid">${renderAddFields(formCell)}</div>
	`;
};

customElements.define('story-add-daterange', component(DateRangeDemo));

export const DateRangeAndReadOnly = () =>
	html`<story-add-daterange></story-add-daterange>`;
DateRangeAndReadOnly.storyName = 'Date range & read-only number';

// ── Story: Icons ─────────────────────────────────────────────────────────────

const IconsDemo = () => html`
	<style>
		:host {
			display: block;
			max-width: 480px;
			padding: 1rem;
			font-family: sans-serif;
		}
		.icon-row {
			display: flex;
			align-items: center;
			gap: 12px;
			margin: 12px 0;
			padding: 8px 12px;
			border: 1px solid #dde3ef;
			border-radius: 6px;
		}
		.icon-row span {
			font-size: 0.85rem;
			color: #333;
		}
	</style>
	<h3>Icons used in form inputs</h3>
	<p style="font-size: 0.85rem; color: #555;">
		These are the icons rendered by <code>renderWarning</code> and
		<code>renderDescription</code> in <code>src/inputs/render.ts</code>.
	</p>
	<div class="icon-row">
		${renderWarning('Warning icon')}

		<span><strong>warningIcon</strong> — shown when a field has a warning</span>
	</div>

	<div class="icon-row">
		${renderDescription('Help icon')}

		<span><strong>helpOutlineIcon</strong> — shown for field descriptions</span>
	</div>

	</div>
`;

customElements.define('story-add-icons', component(IconsDemo));

export const Icons = () => html`<story-add-icons></story-add-icons>`;
Icons.storyName = 'Icons';

// ── Story: Render Failure ────────────────────────────────────────────────────

import { renderFailure$ } from '../src/add/render.js';

const failingSave = () =>
	new Promise<void>((_, reject) =>
		setTimeout(() => reject(new Error('Network error: could not save')), 1500),
	);

const FailureDemo = () => {
	const [save$, setSave] = useState<PromiseLike<void> | undefined>(undefined);

	const triggerFail = () => {
		setSave(failingSave());
	};

	const triggerSuccess = () => {
		setSave(new Promise<void>((resolve) => setTimeout(resolve, 1500)));
	};

	return html`
		<style>
			:host {
				display: block;
				max-width: 480px;
				padding: 1rem;
				font-family: sans-serif;
			}
			${renderAddStyles()} button {
				background: #1a56db;
				border: none;
				border-radius: 4px;
				color: #fff;
				cursor: pointer;
				font-size: 14px;
				padding: 8px 16px;
				margin-right: 8px;
			}
			button.fail {
				background: #dc2626;
			}
		</style>
		<h3>renderFailure$ demo</h3>
		<p style="font-size: 0.85rem; color: #555;">
			Click "Trigger failing save" to see the error message rendered by
			<code>renderFailure$</code>. Click "Trigger success" to see it resolve
			without error.
		</p>
		<button class="fail" @click=${triggerFail}>Trigger failing save</button>
		<button @click=${triggerSuccess}>Trigger success</button>
		<div style="margin-top: 12px;">${renderFailure$(save$)}</div>
	`;
};

customElements.define('story-add-failure', component(FailureDemo));

export const Failure = () => html`<story-add-failure></story-add-failure>`;
Failure.storyName = 'Render Failure';

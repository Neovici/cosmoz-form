import '@neovici/cosmoz-spinner';
import { component, useState } from '@pionjs/pion';
import { html, nothing } from 'lit-html';

import {
	autocomplete,
	dateRange,
	file,
	inlineFile,
	number,
	readOnlyNumber,
	renderAddFields,
	renderAddStyles,
	renderButton$,
	renderItems,
	renderItemsStyles,
	required,
	text,
	toggle,
	useValidatedForm,
	useValidatedItems,
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

	{ id: 'attachments', label: 'Attachments', input: file, multiple: true },
	{ id: 'document', label: 'Document', input: inlineFile },
	{ id: 'active', label: 'Active', input: toggle },
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
			${renderAddStyles()}
		</style>
		<div class="story-stack">
			<h3 class="story-section-title">Add Product (fields only)</h3>
			${renderAddFields(form)}
		</div>
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
			${renderAddStyles()}
		</style>
		<div class="story-stack">
			<h3 class="story-section-title">Add Product (with save button)</h3>
			${renderAddFields(form)}
			${renderButton$({
				save$,
				onSave,
				disabled: form.invalid,
				title: 'Save product',
			})}
		</div>
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
			${renderAddStyles()} .table-grid {
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
				align-items: end;
				border: 1px solid #dde3ef;
				border-radius: 8px;
				max-width: 480px;
				padding: 12px;
			}
		</style>
		<div class="story-stack">
			<h3 class="story-section-title">
				Order form — date range &amp; computed total
			</h3>
			<p class="story-label">
				Change quantity or unit price — the total recalculates automatically
				(read-only). The period uses a date range input.
			</p>
			${renderAddFields(form)}
			<h3 class="story-section-title">
				Order form — table layout (cell variant)
			</h3>
			<p class="story-label">
				Same fields rendered in a grid/table layout using
				<code>variant: 'cell'</code>.
			</p>
			<div class="table-grid">${renderAddFields(formCell)}</div>
		</div>
	`;
};

customElements.define('story-add-daterange', component(DateRangeDemo));

export const DateRangeAndReadOnly = () =>
	html`<story-add-daterange></story-add-daterange>`;
DateRangeAndReadOnly.storyName = 'Date range, read-only & cell variant';

// ── Story: Form Dialog ───────────────────────────────────────────────────────

import { formDialog, type Dialog } from '../src/form-dialog/form-dialog.js';

type ContactForm = {
	name: string;
	email: string;
	message: string;
};

const CONTACT_INITIAL: ContactForm = { name: '', email: '', message: '' };

const CONTACT_FIELDS: Fields<ContactForm> = [
	{ id: 'name', label: 'Name', input: text, validate: [required] },
	{ id: 'email', label: 'Email', input: text, validate: [required] },
	{ id: 'message', label: 'Message', input: text },
];

const FormDialogDemo = () => {
	const [result, setResult] = useState<string>('');
	const [dialog, setDialog] = useState<Dialog<ContactForm> | undefined>(
		undefined,
	);

	const openDialog = () => {
		setDialog({
			heading: 'Contact us',
			description: 'Fill in the form to send a message.',
			fields: CONTACT_FIELDS,
			initial: CONTACT_INITIAL,
			saveText: 'OK',
			onSave: async (values) => {
				await new Promise((r) => setTimeout(r, 2000));
				setResult(JSON.stringify(values, null, 2));
				setDialog(undefined);
			},
			onClose: () => setDialog(undefined),
		});
	};

	return html`
		<div class="story-stack">
			<h3 class="story-section-title">Form Dialog</h3>
			<p class="story-label">
				Click the button to open a form inside a dialog. Submitting logs the
				result below.
			</p>
			<button @click=${openDialog}>Open dialog</button>
			${dialog ? formDialog(dialog) : nothing}
			${result ? html`<pre>${result}</pre>` : nothing}
		</div>
	`;
};

customElements.define('story-add-form-dialog', component(FormDialogDemo));

export const FormDialog = () =>
	html`<story-add-form-dialog></story-add-form-dialog>`;
FormDialog.storyName = 'Form Dialog';

// ── Story: Items list (renderItems) ──────────────────────────────────────────

type LineItem = {
	description: string;
	quantity: number;
	unitPrice: number;
};

const INITIAL_ITEMS: LineItem[] = [
	{ description: 'Widget A', quantity: 5, unitPrice: 12.5 },
	{ description: 'Widget B', quantity: 2, unitPrice: 29.99 },
	{ description: 'Gadget C', quantity: 10, unitPrice: 4.0 },
];

const LINE_ITEM_FIELDS: Fields<LineItem> = [
	{
		id: 'description',
		label: 'Description',
		input: text,
		validate: [required],
		variant: 'cell',
	},
	{ id: 'quantity', label: 'Qty', input: number, min: 1, variant: 'cell' },
	{
		id: 'unitPrice',
		label: 'Unit price (€)',
		input: number,
		min: 0,
		variant: 'cell',
	},
];

const DEFAULTS: LineItem = { description: '', quantity: 1, unitPrice: 0 };

const ItemsDemo = () => {
	const { items, update, remove, append } = useValidatedItems({
		initial: INITIAL_ITEMS,
		fields: LINE_ITEM_FIELDS,
		touched: true,
	});

	return html`
		<style>
			${renderItemsStyles({ fields: LINE_ITEM_FIELDS })} .item {
				display: flex;
				align-items: center;
			}
		</style>
		<div class="story-stack">
			<h3 class="story-section-title">Items list (renderItems)</h3>
			<p class="story-label">
				A repeating list of items with headers, inline editing, remove buttons,
				and a "defaults" row for adding new items. Uses
				<code>renderItems</code> + <code>useValidatedItems</code>.
			</p>
			${renderItems({
				items,
				fields: LINE_ITEM_FIELDS,
				update,
				remove,
				defaults: DEFAULTS,
				touched: true,
			})}
			<button @click=${() => append([{ ...DEFAULTS }])}>+ Add row</button>

			<h3 class="story-section-title">Items list (no remove)</h3>
			<p class="story-label">
				Same list without the remove button — useful for read-only or
				non-deletable rows.
			</p>
			${renderItems({
				items,
				fields: LINE_ITEM_FIELDS,
				update,
				touched: true,
			})}
		</div>
	`;
};

customElements.define('story-add-items', component(ItemsDemo));

export const Items = () => html`<story-add-items></story-add-items>`;
Items.storyName = 'Items list';

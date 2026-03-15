import { component, useMemo } from '@pionjs/pion';
import { html } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat.js';
import { when } from 'lit-html/directives/when.js';

import {
	number,
	renderFields,
	text,
	useItems,
	useValidatedForm,
	type Fields,
	type ItemRule,
} from '../src/index.js';

// ── Shared styles ─────────────────────────────────────────────────────────────

const SHARED_STYLES = html`
	<style>
		.story-wrap {
			font-family: sans-serif;
			max-width: 540px;
			padding: 1rem;
		}
		.story-hint {
			color: #555;
			font-size: 0.85rem;
			margin-top: 0.75rem;
		}
		.story-section {
			border: 1px solid #dde3ef;
			border-radius: 8px;
			margin-top: 1rem;
			padding: 0.75rem 1rem;
		}
		.story-section h3 {
			font-size: 0.9rem;
			font-weight: 600;
			margin: 0 0 0.5rem;
			color: #1a56db;
		}
		.story-badge {
			background: #1a56db;
			border-radius: 4px;
			color: #fff;
			font-size: 0.7rem;
			padding: 2px 6px;
			white-space: nowrap;
			align-self: center;
			margin-left: 4px;
		}
		.story-badge-warn {
			background: #c27803;
		}
	</style>
`;

// ── Story 1: Budget per row ───────────────────────────────────────────────────
//
// Parent form holds a `budget` value. Each nested row form has a `cost` field
// whose suffix shows an "Over budget!" badge when cost > context.budget.

type BudgetCtx = { budget: number };
type BudgetParent = { budget: number };
type CostRow = { cost: number };

// context is typed as `object` in Field (no C param on Field itself);
// cast inside the function body.
const COST_FIELDS: Fields<CostRow, BudgetCtx> = [
	{
		id: 'cost',
		label: 'Cost (€)',
		input: number,
		min: 0,
		suffix: (_value, values, _field, context) => {
			const budget = context?.budget ?? Infinity;
			return when(
				values.cost > budget,
				() =>
					html`<span class="story-badge story-badge-warn">Over budget!</span>`,
			);
		},
	},
];

const BUDGET_FIELDS: Fields<BudgetParent> = [
	{ id: 'budget', label: 'Budget (€)', input: number, min: 0 },
];

const BudgetDemo = () => {
	// Parent form — budget field
	const budgetForm = useValidatedForm({
		fields: BUDGET_FIELDS,
		initial: { budget: 100 },
	});

	// Derive context from live parent values
	const ctx = useMemo<BudgetCtx>(
		() => ({ budget: budgetForm.values.budget }),
		[budgetForm.values.budget],
	);

	const row0 = useValidatedForm<CostRow, BudgetCtx>({
		fields: COST_FIELDS,
		initial: { cost: 50 },
		context: ctx,
	});
	const row1 = useValidatedForm<CostRow, BudgetCtx>({
		fields: COST_FIELDS,
		initial: { cost: 120 },
		context: ctx,
	});
	const row2 = useValidatedForm<CostRow, BudgetCtx>({
		fields: COST_FIELDS,
		initial: { cost: 80 },
		context: ctx,
	});

	return html`
		${SHARED_STYLES}
		<div class="story-wrap">
			<div class="story-section">
				<h3>Parent form — set the budget</h3>
				${renderFields(budgetForm)}
			</div>

			<div class="story-section">
				<h3>Rows — cost suffix reflects parent budget via context</h3>
				${renderFields(row0)} ${renderFields(row1)} ${renderFields(row2)}
			</div>

			<p class="story-hint">
				Change the budget — rows immediately update their suffix badge. Context
				flows from parent to each nested form without prop drilling.
			</p>
		</div>
	`;
};

customElements.define('story-context-budget', component(BudgetDemo));

export const BudgetContext = () =>
	html`<story-context-budget></story-context-budget>`;

BudgetContext.storyName = 'Budget context — parent value in row suffix';
BudgetContext.parameters = {
	docs: {
		source: {
			language: 'typescript',
			code: `\
type BudgetCtx = { budget: number };
type CostRow = { cost: number };

// suffix reads budget from context — shows a badge when cost exceeds it
const costFields: Fields<CostRow, BudgetCtx> = [
  {
    id: 'cost',
    label: 'Cost (€)',
    input: number,
    suffix: (_value, values, _field, context) => {
      const budget = context?.budget ?? Infinity;
      return values.cost > budget
        ? html\`<span class="badge">Over budget!</span>\`
        : undefined;
    },
  },
];

// Parent form owns the budget value
const budgetForm = useValidatedForm({
  fields: [{ id: 'budget', label: 'Budget (€)', input: number }],
  initial: { budget: 100 },
});

// Memoize to keep the context reference stable between renders
const ctx = useMemo(
  () => ({ budget: budgetForm.values.budget }),
  [budgetForm.values.budget],
);

// Row forms receive context — suffix re-evaluates whenever ctx changes
const rowForm = useValidatedForm<CostRow, BudgetCtx>({
  fields: costFields,
  initial: { cost: 120 },
  context: ctx,
});`,
		},
	},
};

// ── Story 2: Delivery date validation ─────────────────────────────────────────
//
// Parent form has a `deliveryDate`. Row forms validate their `rowDate` field
// against it via context.

type DeliveryCtx = { deliveryDate: string };
type DeliveryParent = { deliveryDate: string };
type RowItem = { rowDate: string };

const DELIVERY_PARENT_FIELDS: Fields<DeliveryParent> = [
	{
		id: 'deliveryDate',
		label: 'Delivery date',
		input: text,
		placeholder: 'YYYY-MM-DD',
	},
];

const ROW_DATE_FIELDS: Fields<RowItem, DeliveryCtx> = [
	{
		id: 'rowDate',
		label: 'Row date',
		input: text,
		placeholder: 'YYYY-MM-DD',
		validate: (value, _values, _field, context) => {
			const minDate = context?.deliveryDate;
			if (!value || !minDate) return false;
			return value < minDate
				? `Must be on or after delivery date (${minDate})`
				: false;
		},
		suffix: (value, _values, _field, context) => {
			const minDate = context?.deliveryDate;
			return value && minDate && value >= minDate
				? html`<span class="story-badge">✓</span>`
				: undefined;
		},
	},
];

const DeliveryDemo = () => {
	const parentForm = useValidatedForm<DeliveryParent>({
		fields: DELIVERY_PARENT_FIELDS,
		initial: { deliveryDate: '2024-06-01' },
	});

	const ctx = useMemo<DeliveryCtx>(
		() => ({ deliveryDate: parentForm.values.deliveryDate }),
		[parentForm.values.deliveryDate],
	);

	const row0 = useValidatedForm<RowItem, DeliveryCtx>({
		fields: ROW_DATE_FIELDS,
		initial: { rowDate: '2024-07-01' },
		context: ctx,
	});
	const row1 = useValidatedForm<RowItem, DeliveryCtx>({
		fields: ROW_DATE_FIELDS,
		initial: { rowDate: '2024-05-01' },
		context: ctx,
	});

	return html`
		${SHARED_STYLES}
		<div class="story-wrap">
			<div class="story-section">
				<h3>Parent form — set the delivery date</h3>
				${renderFields(parentForm)}
			</div>

			<div class="story-section">
				<h3>Rows — row date validated against parent delivery date</h3>
				${renderFields(row0)} ${renderFields(row1)}
			</div>

			<p class="story-hint">
				Change the delivery date — rows with earlier dates instantly show a
				validation error. Context is the mechanism; no manual prop passing
				needed.
			</p>
		</div>
	`;
};

customElements.define('story-context-delivery', component(DeliveryDemo));

export const DeliveryValidation = () =>
	html`<story-context-delivery></story-context-delivery>`;

DeliveryValidation.storyName =
	'Delivery date context — validate rows against parent date';
DeliveryValidation.parameters = {
	docs: {
		source: {
			language: 'typescript',
			code: `\
type DeliveryCtx = { deliveryDate: string };
type RowItem = { rowDate: string };

// validate reads the minimum date from context
const rowDateFields: Fields<RowItem, DeliveryCtx> = [
  {
    id: 'rowDate',
    label: 'Row date',
    input: text,
    validate: (value, _values, _field, context) => {
      const minDate = context?.deliveryDate;
      if (!value || !minDate) return false;
      return value < minDate
        ? \`Must be on or after delivery date (\${minDate})\`
        : false;
    },
  },
];

// Parent form owns the delivery date
const parentForm = useValidatedForm({
  fields: [{ id: 'deliveryDate', label: 'Delivery date', input: text }],
  initial: { deliveryDate: '2024-06-01' },
});

const ctx = useMemo(
  () => ({ deliveryDate: parentForm.values.deliveryDate }),
  [parentForm.values.deliveryDate],
);

// When deliveryDate changes, rowForm re-validates immediately via context
const rowForm = useValidatedForm<RowItem, DeliveryCtx>({
  fields: rowDateFields,
  initial: { rowDate: '2024-05-01' },
  context: ctx,
});`,
		},
	},
};

// ── Story 3: VAT context in computed rules ────────────────────────────────────
//
// Parent form has a VAT rate. Items compute their `totalWithVat` via a rule
// that reads context.vatRate — whenever the VAT rate changes, all items
// immediately re-compute.

type VatCtx = { vatRate: number };
type VatParent = { vatRate: number };
type LineItem = { price: number; totalWithVat: number };

const VAT_FIELDS: Fields<VatParent> = [
	{ id: 'vatRate', label: 'VAT rate (%)', input: number, min: 0, max: 100 },
];

const VAT_RULES: ItemRule<LineItem, VatCtx>[] = [
	[
		({ price }, _old, _index, _oldIndex, context?: VatCtx) => ({
			totalWithVat:
				Math.round(price * (1 + (context?.vatRate ?? 0) / 100) * 100) / 100,
		}),
		({ price }, _index, context?: VatCtx) => [price, context?.vatRate],
	],
];

const VatDemo = () => {
	const vatForm = useValidatedForm({
		fields: VAT_FIELDS,
		initial: { vatRate: 20 },
	});

	const ctx = useMemo<VatCtx>(
		() => ({ vatRate: vatForm.values.vatRate }),
		[vatForm.values.vatRate],
	);

	const { items } = useItems<LineItem, VatCtx>({
		initial: [
			{ price: 100, totalWithVat: 0 },
			{ price: 250, totalWithVat: 0 },
			{ price: 75, totalWithVat: 0 },
		],
		rules: VAT_RULES,
		context: ctx,
	});

	return html`
		${SHARED_STYLES}
		<div class="story-wrap">
			<div class="story-section">
				<h3>Parent form — set the VAT rate</h3>
				${renderFields(vatForm)}
			</div>

			<div class="story-section">
				<h3>Line items — totals recomputed when VAT rate changes</h3>
				${repeat(
					items,
					(_item, i) => i,
					(item) => html`
						<div
							style="display:flex;justify-content:space-between;padding:0.3rem 0;border-bottom:1px solid #eee"
						>
							<span style="font-size:0.9rem"
								>Price: <strong>${item.price.toFixed(2)} €</strong></span
							>
							<span style="font-size:0.9rem"
								>Total with VAT:
								<strong>${item.totalWithVat.toFixed(2)} €</strong></span
							>
						</div>
					`,
				)}
			</div>

			<p class="story-hint">
				Change the VAT rate — all line item totals instantly recompute via
				context-aware rules. Rules receive <code>context.vatRate</code> in their
				<code>depsFn</code> so they re-run whenever it changes.
			</p>
		</div>
	`;
};

customElements.define('story-context-vat', component(VatDemo));

export const VatRules = () => html`<story-context-vat></story-context-vat>`;

VatRules.storyName = 'VAT context — rules recompute when parent rate changes';
VatRules.parameters = {
	docs: {
		source: {
			language: 'typescript',
			code: `\
type VatCtx = { vatRate: number };
type LineItem = { price: number; totalWithVat: number };

// Rule computes totalWithVat from price × (1 + vatRate%).
// depsFn includes context.vatRate so the rule re-runs when VAT changes.
const vatRule: ItemRule<LineItem, VatCtx> = [
  ({ price }, _old, _index, _oldIndex, context) => ({
    totalWithVat:
      Math.round(price * (1 + (context?.vatRate ?? 0) / 100) * 100) / 100,
  }),
  ({ price }, _index, context) => [price, context?.vatRate],
];

// Parent form owns the VAT rate
const vatForm = useValidatedForm({
  fields: [{ id: 'vatRate', label: 'VAT rate (%)', input: number }],
  initial: { vatRate: 20 },
});

const ctx = useMemo(
  () => ({ vatRate: vatForm.values.vatRate }),
  [vatForm.values.vatRate],
);

// All items recompute totalWithVat whenever ctx.vatRate changes —
// no explicit update() call needed, context change triggers the rule.
const { items } = useItems<LineItem, VatCtx>({
  initial: lineItems,
  rules: [vatRule],
  context: ctx,
});`,
		},
	},
};

// ── Meta ──────────────────────────────────────────────────────────────────────

export default {
	title: 'Context Propagation',
	tags: ['autodocs'],
	parameters: {
		docs: {
			canvas: { sourceState: 'shown' },
		},
	},
};

import '@neovici/cosmoz-spinner';
import { component, useMemo, useRef, useState } from '@pionjs/pion';
import { html, nothing } from 'lit-html';

import {
	autocomplete,
	call,
	loading,
	makeDebounceRunner,
	number,
	renderFields,
	useValidatedForm$,
	type AsyncItemRule,
	type ItemRule,
} from '../src/index.js';

// ── Shared styles ─────────────────────────────────────────────────────────────

const SHARED_STYLES = html`
	<style>
		.story-wrap {
			font-family: sans-serif;
			max-width: 420px;
			padding: 1rem;
		}
		.story-hint {
			color: #555;
			font-size: 0.85rem;
			margin-top: 0.5rem;
		}
		.story-stats {
			background: #f0f4ff;
			border-radius: 6px;
			display: flex;
			font-size: 0.8rem;
			gap: 1.5rem;
			margin-top: 1rem;
			padding: 0.6rem 0.9rem;
		}
		.story-stats span {
			color: #333;
		}
		.story-stats strong {
			color: #1a56db;
		}
	</style>
`;

// ── Story 1: TakeLatest ───────────────────────────────────────────────────────

type OrderForm = { supplier: string; contactEmail: string };

const INITIAL_ORDER: OrderForm = { supplier: '', contactEmail: '' };

const SUPPLIERS = ['Acme Corp', 'Globex', 'Initech'];

const CONTACT_EMAILS: Record<string, string> = {
	'Acme Corp': 'contact@acme.example',
	Globex: 'hello@globex.example',
	Initech: 'info@initech.example',
};

/** Simulated API call — resolves after 3 s (long enough to switch supplier mid-flight). */
const fetchContactEmail = async (
	signal: AbortSignal,
	supplier: string,
): Promise<string> => {
	await new Promise<void>((resolve, reject) => {
		const t = setTimeout(resolve, 3000);
		signal.addEventListener('abort', () => {
			clearTimeout(t);
			reject(new DOMException('Aborted', 'AbortError'));
		});
	});
	return CONTACT_EMAILS[supplier] ?? '';
};

const ORDER_FIELDS = [
	{
		id: 'supplier' as const,
		label: 'Supplier',
		input: autocomplete,
		options: SUPPLIERS,
		limit: 1,
		showSingle: true,
		preserveOrder: true,
	},
	{ id: 'contactEmail' as const, label: 'Contact email', disabled: true },
];

const TakeLatestDemo = () => {
	const statsRef = useRef({ started: 0, cancelled: 0, resolved: 0 });
	const [, setTick] = useState(0);

	const emailRule: AsyncItemRule<OrderForm> = useMemo(
		() => [
			async function* (current) {
				if (!current.supplier) return { contactEmail: '' };
				statsRef.current.started++;
				setTick((t) => t + 1);
				yield loading<OrderForm>({ contactEmail: 'loading…' });
				const email = yield call((signal: AbortSignal, supplier: string) => {
					// Count cancellations the moment the signal fires, before the
					// promise rejects — so the counter updates immediately.
					signal.addEventListener(
						'abort',
						() => {
							statsRef.current.cancelled++;
							setTick((t) => t + 1);
						},
						{ once: true },
					);
					return fetchContactEmail(signal, supplier);
				}, current.supplier);
				statsRef.current.resolved++;
				setTick((t) => t + 1);
				return { contactEmail: email as string };
			},
			({ supplier }) => [supplier],
			// No runner specified — defaults to makeTakeLatestRunner.
		],
		[],
	);

	const form = useValidatedForm$<OrderForm>({
		fields: ORDER_FIELDS,
		initial: INITIAL_ORDER,
		asyncRules: [emailRule],
	});

	const { started, cancelled, resolved } = statsRef.current;

	return html`
		${SHARED_STYLES}
		<div class="story-wrap">
			${renderFields(form)}
			<p class="story-hint">
				Select a supplier, then quickly select a different one before 3 s — only
				the final selection's email appears. The first fetch is cancelled.
			</p>
			<div class="story-stats">
				<span>Started: <strong>${started}</strong></span>
				<span>Cancelled: <strong>${cancelled}</strong></span>
				<span>Resolved: <strong>${resolved}</strong></span>
			</div>
		</div>
	`;
};

customElements.define('story-supplier-take-latest', component(TakeLatestDemo));

export const TakeLatest = () =>
	html`<story-supplier-take-latest></story-supplier-take-latest>`;

TakeLatest.storyName = 'TakeLatest — supplier contact email';
TakeLatest.parameters = {
	docs: {
		source: {
			code: `\
// Form shape
type OrderForm = { supplier: string; contactEmail: string };

const INITIAL: OrderForm = { supplier: '', contactEmail: '' };

// Async rule — fetches contact email for the selected supplier.
// Switching supplier mid-flight cancels the previous fetch;
// only the final selection's result appears (takeLates / switchMap).
const emailRule: AsyncItemRule<OrderForm> = [
  async function* (current) {
    if (!current.supplier) return { contactEmail: '' };
    yield loading<OrderForm>({ contactEmail: 'loading…' });
    const email = yield call(fetchContactEmail, current.supplier);
    return { contactEmail: email as string };
  },
  ({ supplier }) => [supplier],
  // No runner specified — defaults to makeTakeLatestRunner.
];`,
		},
	},
};

// ── Story 2: Debounce ─────────────────────────────────────────────────────────

type QuoteForm = {
	quantity: number;
	unitPrice: number;
	total: number;
	_pricingLoading: boolean;
};

const INITIAL_QUOTE: QuoteForm = {
	quantity: 1,
	unitPrice: 0,
	total: 0,
	_pricingLoading: false,
};

/** Simulated pricing API — resolves after 1 s. */
const fetchUnitPrice = async (
	signal: AbortSignal,
	quantity: number,
): Promise<number> => {
	await new Promise<void>((resolve, reject) => {
		const t = setTimeout(resolve, 1000);
		signal.addEventListener('abort', () => {
			clearTimeout(t);
			reject(new DOMException('Aborted', 'AbortError'));
		});
	});
	// Simulated tiered pricing
	if (quantity >= 50) return 8.0;
	if (quantity >= 20) return 9.5;
	if (quantity >= 10) return 11.0;
	return 13.5;
};

const QUOTE_FIELDS = [
	{
		id: 'quantity' as const,
		label: 'Quantity',
		input: number,
		min: 1,
		max: 100,
		step: '1',
	},
	{
		id: 'unitPrice' as const,
		label: 'Unit price (€)',
		disabled: true,
		suffix: (_: unknown, values: QuoteForm) =>
			values._pricingLoading
				? html`<cosmoz-spinner></cosmoz-spinner>`
				: nothing,
	},
	{
		id: 'total' as const,
		label: 'Total (€)',
		disabled: true,
		rules: [
			[
				({ quantity, unitPrice }: QuoteForm) => ({
					total: Math.round(quantity * unitPrice * 100) / 100,
				}),
				({ quantity, unitPrice }: QuoteForm) => [quantity, unitPrice],
			] satisfies ItemRule<QuoteForm>,
		],
	},
	{ id: '_pricingLoading' as const, hidden: true },
];

const DebounceDemo = () => {
	const statsRef = useRef({ started: 0, resolved: 0 });
	const [, setTick] = useState(0);

	const pricingRule: AsyncItemRule<QuoteForm> = useMemo(
		() => [
			async function* (current) {
				if (!current.quantity) return { unitPrice: 0, _pricingLoading: false };
				statsRef.current.started++;
				setTick((t) => t + 1);
				yield loading<QuoteForm>({ _pricingLoading: true });
				const price = yield call(fetchUnitPrice, current.quantity);
				statsRef.current.resolved++;
				setTick((t) => t + 1);
				return { unitPrice: price as number, _pricingLoading: false };
			},
			({ quantity }) => [quantity],
			() => makeDebounceRunner<QuoteForm>(500),
		],
		[],
	);

	const form = useValidatedForm$<QuoteForm>({
		fields: QUOTE_FIELDS,
		initial: INITIAL_QUOTE,
		asyncRules: [pricingRule],
	});

	const { started, resolved } = statsRef.current;
	const inFlight = started - resolved;

	return html`
		${SHARED_STYLES}
		<div class="story-wrap">
			${renderFields(form)}
			<p class="story-hint">
				Increment the quantity — the price lookup only fires 500 ms after you
				stop. Rapid changes are debounced. Total updates instantly via a sync
				rule once the price arrives.
			</p>
			<div class="story-stats">
				<span>Started: <strong>${started}</strong></span>
				<span>Resolved: <strong>${resolved}</strong></span>
				<span>In flight: <strong>${inFlight}</strong></span>
			</div>
		</div>
	`;
};

customElements.define('story-quote-debounce', component(DebounceDemo));

export const Debounce = () =>
	html`<story-quote-debounce></story-quote-debounce>`;

Debounce.storyName = 'Debounce — quantity → unit price + total';
Debounce.parameters = {
	docs: {
		source: {
			code: `\
// Form shape — _pricingLoading is a UI-only flag, hidden from the rendered form
type QuoteForm = {
  quantity: number;
  unitPrice: number;
  total: number;
  _pricingLoading: boolean;
};

const INITIAL: QuoteForm = { quantity: 1, unitPrice: 0, total: 0, _pricingLoading: false };

// Sync rule — total updates instantly whenever quantity or unitPrice changes
const totalRule: ItemRule<QuoteForm> = [
  ({ quantity, unitPrice }) => ({
    total: Math.round(quantity * unitPrice * 100) / 100,
  }),
  ({ quantity, unitPrice }) => [quantity, unitPrice],
];

// Async rule — unit price is fetched 500 ms after quantity stops changing.
// Rapid spinner clicks are debounced; only the final value triggers a lookup.
// _pricingLoading drives the spinner suffix on the unitPrice field.
const pricingRule: AsyncItemRule<QuoteForm> = [
  async function* (current) {
    if (!current.quantity) return { unitPrice: 0, _pricingLoading: false };
    yield loading<QuoteForm>({ _pricingLoading: true });
    const price = yield call(fetchUnitPrice, current.quantity);
    return { unitPrice: price as number, _pricingLoading: false };
  },
  ({ quantity }) => [quantity],
  () => makeDebounceRunner(500),
];

// Field definition for unitPrice — shows a spinner while loading
const unitPriceField = {
  id: 'unitPrice',
  label: 'Unit price (€)',
  disabled: true,
  suffix: (_, values) =>
    values._pricingLoading ? html\`<cosmoz-spinner></cosmoz-spinner>\` : nothing,
};`,
		},
	},
};

// ── Meta ──────────────────────────────────────────────────────────────────────

export default {
	title: 'Async Rules',
	tags: ['autodocs'],
	parameters: {
		docs: {
			canvas: { sourceState: 'shown' },
		},
	},
};

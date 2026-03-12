import { component } from '@pionjs/pion';
import { html } from 'lit-html';

import {
	autocomplete,
	call,
	loading,
	makeDebounceRunner,
	renderFields,
	useValidatedForm$,
	type AsyncItemRule,
} from '../src/index.js';

// ── Simulated data ────────────────────────────────────────────────────────────

const SUPPLIERS = ['Acme Corp', 'Globex', 'Initech'];

const CONTACT_EMAILS: Record<string, string> = {
	'Acme Corp': 'contact@acme.example',
	Globex: 'hello@globex.example',
	Initech: 'info@initech.example',
};

/** Simulated API call — resolves after 800ms. */
const fetchContactEmail = async (
	_signal: AbortSignal,
	supplier: string,
): Promise<string> => {
	await new Promise((r) => setTimeout(r, 800));
	return CONTACT_EMAILS[supplier] ?? '';
};

// ── Shared form type ──────────────────────────────────────────────────────────

type OrderForm = { supplier: string; contactEmail: string };

const INITIAL: OrderForm = { supplier: '', contactEmail: '' };

const FIELDS = [
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

// ── Story 1: TakeLatest ───────────────────────────────────────────────────────

/**
 * Async rule that fetches the contact email for the selected supplier.
 * Uses the default takeLates runner — switching supplier mid-flight
 * cancels the previous fetch and only the final selection's result appears.
 */
const emailFromSupplierTakeLatest: AsyncItemRule<OrderForm> = [
	async function* (current) {
		if (!current.supplier) return { contactEmail: '' };
		yield loading<OrderForm>({ contactEmail: 'loading...' });
		const email = yield call(fetchContactEmail, current.supplier);
		return { contactEmail: email as string };
	},
	({ supplier }) => [supplier],
	// No runner specified — defaults to makeTakeLatestRunner.
];

const TakeLatestDemo = () => {
	const form = useValidatedForm$<OrderForm>({
		fields: FIELDS,
		initial: INITIAL,
		asyncRules: [emailFromSupplierTakeLatest],
	});

	return html`
		<style>
			.story-wrap {
				font-family: sans-serif;
				max-width: 400px;
				padding: 1rem;
			}
			.story-wrap pre {
				background: #f4f4f4;
				border-radius: 4px;
				font-size: 0.8rem;
				margin-top: 1rem;
				padding: 0.75rem;
			}
			.story-hint {
				color: #666;
				font-size: 0.85rem;
				margin-top: 0.5rem;
			}
		</style>
		<div class="story-wrap">
			${renderFields(form)}
			<p class="story-hint">
				Switch supplier quickly — only the last selection's email loads.
			</p>
			<pre>${JSON.stringify(form.values, null, 2)}</pre>
		</div>
	`;
};

customElements.define('story-supplier-take-latest', component(TakeLatestDemo));

export const TakeLatest = () =>
	html`<story-supplier-take-latest></story-supplier-take-latest>`;

TakeLatest.storyName = 'TakeLatest — supplier contact email';

// ── Story 2: Debounce ─────────────────────────────────────────────────────────

/**
 * Same rule but with a 500ms debounce runner — the fetch only fires after
 * the user stops changing the supplier for 500ms.
 * Useful for free-text fields where you want to avoid firing on every keystroke.
 */
const emailFromSupplierDebounce: AsyncItemRule<OrderForm> = [
	async function* (current) {
		if (!current.supplier) return { contactEmail: '' };
		yield loading<OrderForm>({ contactEmail: 'loading...' });
		const email = yield call(fetchContactEmail, current.supplier);
		return { contactEmail: email as string };
	},
	({ supplier }) => [supplier],
	() => makeDebounceRunner<OrderForm>(500),
];

const DebounceDemo = () => {
	const form = useValidatedForm$<OrderForm>({
		fields: FIELDS,
		initial: INITIAL,
		asyncRules: [emailFromSupplierDebounce],
	});

	return html`
		<style>
			.story-wrap {
				font-family: sans-serif;
				max-width: 400px;
				padding: 1rem;
			}
			.story-wrap pre {
				background: #f4f4f4;
				border-radius: 4px;
				font-size: 0.8rem;
				margin-top: 1rem;
				padding: 0.75rem;
			}
			.story-hint {
				color: #666;
				font-size: 0.85rem;
				margin-top: 0.5rem;
			}
		</style>
		<div class="story-wrap">
			${renderFields(form)}
			<p class="story-hint">
				Switch supplier rapidly — the fetch only fires after 500ms of silence.
			</p>
			<pre>${JSON.stringify(form.values, null, 2)}</pre>
		</div>
	`;
};

customElements.define('story-supplier-debounce', component(DebounceDemo));

export const Debounce = () =>
	html`<story-supplier-debounce></story-supplier-debounce>`;

Debounce.storyName = 'Debounce — supplier contact email';

// ── Meta ──────────────────────────────────────────────────────────────────────

export default {
	title: 'Async Rules',
};

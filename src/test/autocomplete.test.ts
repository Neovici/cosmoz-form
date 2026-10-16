import { assert, fixture, html } from '@open-wc/testing';
import { render } from 'lit-html';
import { autocomplete } from '../inputs';

type Values = { a?: string };

const renderInput = async (field: Record<string, unknown>) => {
	const host = await fixture<HTMLDivElement>(html`<div></div>`);
	render(
		autocomplete({
			field: { id: 'a', options: ['x'], ...field },
			value: undefined,
			values: {},
			onChange: () => undefined,
		} as unknown as Parameters<
			typeof autocomplete<Values, 'a', string, object>
		>[0]),
		host,
	);
	return host.querySelector('cosmoz-autocomplete')!;
};

suite('autocomplete', () => {
	test('renders content inside the autocomplete', async () => {
		const el = await renderInput({
			content: html`<span slot="no-result">Not a valid e-mail</span>`,
		});
		const slotted = el.querySelector('[slot="no-result"]');
		assert.ok(slotted);
		assert.equal(slotted.textContent, 'Not a valid e-mail');
	});

	test('renders no extra content by default', async () => {
		const el = await renderInput({});
		assert.notOk(el.querySelector('[slot="no-result"]'));
	});
});

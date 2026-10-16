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
	test('renders noResult in the no-result slot', async () => {
		const el = await renderInput({ noResult: 'Not a valid e-mail' });
		const slotted = el.querySelector('[slot="no-result"]');
		assert.ok(slotted);
		assert.equal(slotted.textContent, 'Not a valid e-mail');
	});

	test('keeps the default message without noResult', async () => {
		const el = await renderInput({});
		assert.notOk(el.querySelector('[slot="no-result"]'));
	});
});

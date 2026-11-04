import { assert, fixture, nextFrame, waitUntil } from '@open-wc/testing';
import { init } from 'i18next';
import { html } from 'lit-html';
import '../form-dialog/form-dialog';
import { required, requiredWhen } from '../validation';

init({ lng: 'en', resources: {} });

type Values = { name?: string; ref?: string };

const fields = [
	{ id: 'name', label: 'Name', validate: required },
	{
		id: 'ref',
		label: 'Reference',
		validate: [
			requiredWhen((_: unknown, values: Values) => values.name === 'x'),
		],
	},
];

const open = async (initial: Values = {}) => {
	const el = await fixture<HTMLElement>(html`
		<cosmoz-form-dialog
			heading="Test"
			.fields=${fields}
			.initial=${initial}
		></cosmoz-form-dialog>
	`);
	const root = el.shadowRoot!;
	await waitUntil(() => root.querySelector('dialog')?.open);
	const field = (name: string) =>
		root.querySelector<HTMLElement & { required?: boolean }>(
			`cosmoz-input[name="${name}"]`,
		)!;
	return {
		field,
		type: async (name: string, value: string) => {
			const input =
				field(name).shadowRoot!.querySelector<HTMLInputElement>('#input')!;
			input.value = value;
			input.dispatchEvent(
				new InputEvent('input', { bubbles: true, composed: true }),
			);
			await nextFrame();
		},
	};
};

suite('requiredWhen marks the field required', () => {
	test('required is set while the condition holds', async () => {
		const { field } = await open({ name: 'x' });
		assert.isTrue(field('name').required);
		assert.isTrue(field('ref').required);
	});

	test('required follows the condition as values change', async () => {
		const { field, type } = await open();
		assert.isNotOk(field('ref').required);
		await type('name', 'x');
		await waitUntil(() => field('ref').required === true);
		await type('name', 'y');
		await waitUntil(() => !field('ref').required);
	});
});

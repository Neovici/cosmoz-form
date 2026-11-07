import { assert, fixture, nextFrame, waitUntil } from '@open-wc/testing';
import { init } from 'i18next';
import { html } from 'lit-html';
import '../form-dialog/form-dialog';
import { input } from '../inputs/base';
import { required } from '../validation';

init({ lng: 'en', resources: {} });

type Values = { name?: string; code?: string };

const tooShort = (value?: string) => !!value && value.length < 3 && 'Too short';

const fields = [
	{ id: 'name', label: 'Name', validate: required },
	{ id: 'code', label: 'Code', validate: tooShort },
];

const open = async ({
	onSave = () => Promise.resolve(),
	fields: f = fields,
}: { onSave?: () => PromiseLike<unknown>; fields?: unknown[] } = {}) => {
	const el = await fixture<HTMLElement>(html`
		<cosmoz-form-dialog
			heading="Test"
			.fields=${f}
			.initial=${{} as Values}
			.onSave=${onSave}
		></cosmoz-form-dialog>
	`);
	const root = el.shadowRoot!;
	await waitUntil(() => root.querySelector('dialog')?.open);
	const field = (name: string) =>
		root.querySelector<HTMLElement>(`cosmoz-input[name="${name}"]`)!;
	return {
		root,
		save: () => root.querySelector<HTMLElement>('.buttons .save')!,
		summary: () => root.querySelector('.failure')?.textContent?.trim(),
		shown: (name: string) => field(name).hasAttribute('invalid'),
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

const counting = () => {
	let saved = 0;
	return {
		onSave: () => {
			saved++;
			return Promise.resolve();
		},
		count: () => saved,
	};
};

suite('cosmoz-form-dialog reveals errors on save', () => {
	test('save stays enabled while required fields are empty', async () => {
		const { save } = await open();
		assert.isFalse(save().hasAttribute('disabled'));
	});

	test('no error shows before a save attempt, even while typing', async () => {
		const { type, shown } = await open();
		assert.isFalse(shown('name'));
		await type('code', 'ab');
		await nextFrame();
		assert.isFalse(shown('code'));
		assert.isFalse(shown('name'));
	});

	test('saving with errors reveals all of them, focuses the first and saves nothing', async () => {
		const { onSave, count } = counting();
		const { root, save, shown, type } = await open({ onSave });
		await type('code', 'ab');
		save().click();
		await waitUntil(() => shown('name') && shown('code'));
		assert.equal(root.activeElement?.getAttribute('name'), 'name');
		assert.equal(count(), 0);
	});

	test('a revealed error updates as the user types', async () => {
		const { save, shown, type } = await open();
		await type('code', 'ab');
		save().click();
		await waitUntil(() => shown('code'));
		await type('code', 'abcd');
		await waitUntil(() => !shown('code'));
	});

	test('a valid form saves', async () => {
		const { onSave, count } = counting();
		const { save, type } = await open({ onSave });
		await type('name', 'Acme');
		save().click();
		await waitUntil(() => count() === 1);
	});

	test('a failed save names the first error by the buttons until it is fixed', async () => {
		const { save, summary, type } = await open();
		assert.isUndefined(summary());
		save().click();
		await waitUntil(() => summary());
		assert.match(summary()!, /^Name: /u);
		await type('name', 'Acme');
		await waitUntil(() => summary() === undefined);
	});

	test('the summary explains an error that a custom input does not show', async () => {
		const silent = input(() => html`<div class="silent"></div>`);
		const { save, summary } = await open({
			fields: [
				{ id: 'reason', input: silent, validate: () => 'Reason is required' },
			],
		});
		save().click();
		await waitUntil(() => summary() === 'Reason is required');
	});

	test('an empty form that may not be empty, with nothing to reveal, stays disabled', async () => {
		const { save } = await open({ fields: [{ id: 'name', label: 'Name' }] });
		assert.isTrue(save().hasAttribute('disabled'));
	});
});

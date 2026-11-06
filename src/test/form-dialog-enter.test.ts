import { assert, fixture, nextFrame, waitUntil } from '@open-wc/testing';
import { init } from 'i18next';
import { html } from 'lit-html';
import '../form-dialog/form-dialog';
import { textarea } from '../inputs';
import { required } from '../validation';

init({ lng: 'en', resources: {} });

const fields = [
	{ id: 'name', label: 'Name', validate: required },
	{ id: 'note', label: 'Note', input: textarea },
];

const open = async (onSave: () => PromiseLike<unknown>, initial = {}) => {
	const el = await fixture<HTMLElement>(html`
		<cosmoz-form-dialog
			heading="Test"
			.fields=${fields}
			.initial=${initial}
			.onSave=${onSave}
		></cosmoz-form-dialog>
	`);
	const root = el.shadowRoot!;
	await waitUntil(() => root.querySelector('dialog')?.open);
	const control = (name: string) =>
		root
			.querySelector(`[name="${name}"]`)!
			.shadowRoot!.querySelector<HTMLInputElement>('#input')!;
	return {
		control,
		type: async (name: string, value: string) => {
			control(name).value = value;
			control(name).dispatchEvent(
				new InputEvent('input', { bubbles: true, composed: true }),
			);
			await nextFrame();
		},
		enter: async (name: string, init: KeyboardEventInit = {}) => {
			const e = new KeyboardEvent('keydown', {
				key: 'Enter',
				bubbles: true,
				composed: true,
				cancelable: true,
				...init,
			});
			control(name).dispatchEvent(e);
			await nextFrame();
			return e;
		},
	};
};

const counting = (delay = 0) => {
	let saved = 0;
	return {
		onSave: () => {
			saved++;
			return new Promise((resolve) => setTimeout(resolve, delay));
		},
		count: () => saved,
	};
};

suite('cosmoz-form-dialog submits on Enter', () => {
	test('Enter in a single-line input saves a valid form', async () => {
		const { onSave, count } = counting();
		const { type, enter } = await open(onSave);
		await type('name', 'Acme');
		const e = await enter('name');
		assert.isTrue(e.defaultPrevented);
		await waitUntil(() => count() === 1);
	});

	test('Enter while a save is in flight does not save again', async () => {
		const { onSave, count } = counting(200);
		const { type, enter } = await open(onSave);
		await type('name', 'Acme');
		await enter('name');
		await enter('name');
		await new Promise((r) => setTimeout(r, 250));
		assert.equal(count(), 1);
	});

	test('Enter on an invalid form reveals the errors like Save does', async () => {
		const { onSave, count } = counting();
		const { enter, control } = await open(onSave);
		const e = await enter('name');
		assert.isTrue(e.defaultPrevented);
		assert.equal(count(), 0);
		await waitUntil(() =>
			(control('name').getRootNode() as ShadowRoot).host.hasAttribute(
				'invalid',
			),
		);
	});

	test('Enter that another component handled does not save', async () => {
		const { onSave, count } = counting();
		const { type, enter, control } = await open(onSave);
		await type('name', 'Acme');
		control('name').addEventListener('keydown', (e) => e.preventDefault(), {
			once: true,
		});
		await enter('name');
		assert.equal(count(), 0);
	});

	test('Enter in a textarea does not save', async () => {
		const { onSave, count } = counting();
		const { type, enter } = await open(onSave);
		await type('name', 'Acme');
		await enter('note');
		await nextFrame();
		assert.equal(count(), 0);
	});
});

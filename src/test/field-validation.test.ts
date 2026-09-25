import { assert, fixture, nextFrame, waitUntil } from '@open-wc/testing';
import { init } from 'i18next';
import { html } from 'lit-html';

import '../form-dialog/form-dialog.js';
import { requiredWhen } from '../validation/index.js';
import { required } from '../validation/rules.js';

init({ lng: 'en', resources: {} });

// Form contract (Base UI Form/Field): errors appear per field once it was
// changed and left, or after a save attempt; saving with errors reveals them
// and focuses the first invalid field; Enter submits.

type Values = { name?: string; code?: string; note?: string; ref?: string };

const tooShort = (value?: string) => !!value && value.length < 3 && 'Too short';

const fields = [
	{ id: 'name', label: 'Name', validate: required },
	{ id: 'code', label: 'Code', validate: tooShort },
	{ id: 'note', label: 'Note', description: 'Shown to the supplier' },
	{
		id: 'ref',
		label: 'Reference',
		validate: requiredWhen((_: unknown, values: Values) => values.name === 'x'),
	},
];

const open = async ({
	onSave = () => Promise.resolve(),
	fields: f = fields,
	initial = {},
}: {
	onSave?: () => PromiseLike<unknown>;
	fields?: unknown[];
	initial?: Values;
} = {}) => {
	const el = (await fixture(html`
		<cosmoz-form-dialog
			heading="Test"
			.fields=${f}
			.initial=${initial}
			.onSave=${onSave}
		></cosmoz-form-dialog>
	`)) as HTMLElement;
	const root = el.shadowRoot!;
	await waitUntil(() => root.querySelector('cosmoz-input[name="name"]'));
	const field = (name: string) =>
		root.querySelector<HTMLElement & { invalid?: boolean }>(
			`cosmoz-input[name="${name}"]`,
		)!;
	const input = (name: string) =>
		field(name).shadowRoot!.querySelector<HTMLInputElement>('#input')!;
	return {
		root,
		field,
		save: () => root.querySelector<HTMLElement>('.buttons .save')!,
		shown: (name: string) => field(name).hasAttribute('invalid'),
		type: async (name: string, value: string) => {
			input(name).focus();
			input(name).value = value;
			input(name).dispatchEvent(
				new InputEvent('input', { bubbles: true, composed: true }),
			);
			await nextFrame();
		},
		leave: async (name: string) => {
			input(name).blur();
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
			input(name).dispatchEvent(e);
			await nextFrame();
			return e;
		},
	};
};

suite('field validation in cosmoz-form-dialog', () => {
	test('save stays enabled while required fields are empty', async () => {
		const { save } = await open();
		assert.isFalse(save().hasAttribute('disabled'));
	});

	test('no field shows an error before the user interacts', async () => {
		const { shown } = await open();
		assert.isFalse(shown('name'));
		assert.isFalse(shown('code'));
	});

	test('an error appears once the field is changed and left', async () => {
		const { type, leave, shown } = await open();
		await type('code', 'ab');
		assert.isFalse(shown('code'), 'not while typing');
		await leave('code');
		await waitUntil(() => shown('code'));
		assert.isFalse(shown('name'), 'untouched fields stay quiet');
	});

	test('tabbing through without changing shows nothing', async () => {
		const { field, leave, shown } = await open();
		field('name')
			.shadowRoot!.querySelector<HTMLInputElement>('#input')!
			.focus();
		await leave('name');
		assert.isFalse(shown('name'));
	});

	test('a shown error updates as the user types', async () => {
		const { type, leave, shown } = await open();
		await type('code', 'ab');
		await leave('code');
		await waitUntil(() => shown('code'));
		await type('code', 'abcd');
		await waitUntil(() => !shown('code'));
	});

	test('saving with errors reveals them, focuses the first invalid field and sends nothing', async () => {
		let saved = 0;
		const { root, save, shown } = await open({
			onSave: () => {
				saved++;
				return Promise.resolve();
			},
		});
		save().click();
		await waitUntil(() => shown('name'));
		await waitUntil(() => root.activeElement?.getAttribute('name') === 'name');
		assert.equal(saved, 0);
	});

	test('saving a valid form calls onSave', async () => {
		let saved = 0;
		const { save, type } = await open({
			onSave: () => {
				saved++;
				return Promise.resolve();
			},
		});
		await type('name', 'Acme');
		save().click();
		await waitUntil(() => saved === 1);
	});

	test('Enter in a field submits a valid form once, even when pressed twice', async () => {
		let saved = 0;
		const { type, enter } = await open({
			onSave: () => {
				saved++;
				return new Promise((resolve) => setTimeout(resolve, 200));
			},
		});
		await type('name', 'Acme');
		const e = await enter('name');
		assert.isTrue(e.defaultPrevented);
		await enter('name');
		await waitUntil(() => saved === 1);
		await new Promise((r) => setTimeout(r, 50));
		assert.equal(saved, 1);
	});

	test('Enter with errors reveals them instead of saving', async () => {
		let saved = 0;
		const { enter, shown } = await open({
			onSave: () => {
				saved++;
				return Promise.resolve();
			},
		});
		await enter('code');
		await waitUntil(() => shown('name'));
		assert.equal(saved, 0);
	});

	test('Enter that another component handled does not submit', async () => {
		let saved = 0;
		const { root, type } = await open({
			onSave: () => {
				saved++;
				return Promise.resolve();
			},
		});
		await type('name', 'Acme');
		const input = root
			.querySelector('cosmoz-input[name="name"]')!
			.shadowRoot!.querySelector('#input')!;
		input.addEventListener('keydown', (e) => e.preventDefault(), {
			once: true,
		});
		input.dispatchEvent(
			new KeyboardEvent('keydown', {
				key: 'Enter',
				bubbles: true,
				composed: true,
				cancelable: true,
			}),
		);
		await new Promise((r) => setTimeout(r, 50));
		assert.equal(saved, 0);
	});

	test('Enter with a modifier does not submit', async () => {
		let saved = 0;
		const { type, enter } = await open({
			onSave: () => {
				saved++;
				return Promise.resolve();
			},
		});
		await type('name', 'Acme');
		await enter('name', { shiftKey: true });
		await new Promise((r) => setTimeout(r, 50));
		assert.equal(saved, 0);
	});

	test('an empty form that may not be empty, with nothing to explain, stays disabled', async () => {
		const { save } = await open({
			fields: [{ id: 'name', label: 'Name' }],
		});
		assert.isTrue(save().hasAttribute('disabled'));
	});

	test('requiredWhen marks the field required while its condition holds', async () => {
		const { field, type } = await open();
		const ref = field('ref') as HTMLElement & { required?: boolean };
		assert.isNotOk(ref.required);
		await type('name', 'x');
		await waitUntil(() => ref.required === true);
	});

	test('description text reaches cosmoz-input', async () => {
		const { field } = await open();
		assert.equal(
			(field('note') as HTMLElement & { description?: string }).description,
			'Shown to the supplier',
		);
	});
});

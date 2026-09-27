import { assert, fixture, waitUntil } from '@open-wc/testing';
import { init } from 'i18next';
import { html } from 'lit-html';

import '../form-dialog/form-dialog.js';

init({ lng: 'en', resources: {} });

// A form dialog without fields only asks to confirm (Base UI AlertDialog):
// it is an alertdialog and starts on the least destructive action.

const open = async (fields?: unknown[]) => {
	const el = (await fixture(html`
		<cosmoz-form-dialog
			heading="Delete?"
			.fields=${fields}
			.onSave=${() => Promise.resolve()}
		></cosmoz-form-dialog>
	`)) as HTMLElement;
	const cancel = () =>
		el.shadowRoot!.querySelector('cosmoz-button[value="cancel"]');
	await waitUntil(cancel);
	return { el, cancel };
};

suite('confirm dialog', () => {
	test('without fields it is an alert that starts on Cancel', async () => {
		const { el, cancel } = await open();
		await waitUntil(() => el.hasAttribute('alert'));
		assert.isTrue(cancel()!.hasAttribute('autofocus'));
	});

	test('with fields it is a plain dialog', async () => {
		const { el, cancel } = await open([{ id: 'name', label: 'Name' }]);
		assert.isFalse(el.hasAttribute('alert'));
		assert.isFalse(cancel()!.hasAttribute('autofocus'));
	});
});

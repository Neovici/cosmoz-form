import { assert, fixture, nextFrame, waitUntil } from '@open-wc/testing';
import { html } from 'lit-html';

import { formDialog } from '../form-dialog/form-dialog.js';

suite('formDialog auto', () => {
	const render = (onSave: () => PromiseLike<unknown>) =>
		fixture(
			html`<div>
				${formDialog({
					heading: 'Auto',
					fields: [],
					initial: {},
					auto: true,
					onSave,
				})}
			</div>`,
		);

	test('saves without opening a dialog', async () => {
		let calls = 0;
		const el = await render(() => {
			calls++;
			return Promise.resolve();
		});
		await nextFrame();
		assert.equal(calls, 1);
		assert.isNull(el.querySelector('cosmoz-form-dialog'));
	});

	test('opens the dialog with the failure when saving fails', async () => {
		const el = await render(() => Promise.reject(new Error('Nope')));
		await waitUntil(() =>
			el
				.querySelector('cosmoz-form-dialog')
				?.shadowRoot?.querySelector('.failure'),
		);
		const root = el.querySelector('cosmoz-form-dialog')!.shadowRoot!;
		assert.include(root.querySelector('.failure')!.textContent, 'Nope');
		assert.isFalse(
			root.querySelector('.save')!.hasAttribute('disabled'),
			'retry is possible',
		);
	});
});

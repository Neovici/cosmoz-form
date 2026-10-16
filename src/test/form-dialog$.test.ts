import { assert, fixture, html, waitUntil } from '@open-wc/testing';
import { render } from 'lit-html';
import { formDialog$, type Dialog } from '../form-dialog/form-dialog';

suite('formDialog$', () => {
	test('a re-render keeps the open dialog', async () => {
		const host = await fixture<HTMLDivElement>(html`<div></div>`);
		let calls = 0;
		const dialog = () => {
			calls++;
			return Promise.resolve({
				heading: 'Test',
				fields: [],
				initial: {},
			} as unknown as Dialog<object>);
		};
		const draw = () => render(formDialog$(dialog), host);

		draw();
		await waitUntil(() => host.querySelector('cosmoz-form-dialog'));
		const opened = host.querySelector('cosmoz-form-dialog');

		draw();
		await new Promise(requestAnimationFrame);

		assert.strictEqual(host.querySelector('cosmoz-form-dialog'), opened);
		assert.isNull(host.querySelector('cosmoz-dialog-loading'));
		assert.equal(calls, 1);
	});
});

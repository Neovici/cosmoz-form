import { assert, fixture, waitUntil } from '@open-wc/testing';
import { html } from 'lit-html';

import '../form-dialog/form-dialog.js';

const LONG_ERROR = Array.from(
	{ length: 8 },
	(_, i) => `Row ${1078 + i}: Store profile 'Sheeeesh' is not valid.`,
).join(' ');

const openFailingDialog = async (message: string) => {
	const el = await fixture(html`
		<cosmoz-form-dialog
			heading="Test"
			.fields=${[]}
			.initial=${{}}
			.onSave=${() => Promise.reject(new Error(message))}
		></cosmoz-form-dialog>
	`);
	const root = el.shadowRoot!;
	const save = root.querySelector<HTMLElement>('.buttons .save');
	assert.ok(save, 'save button rendered');
	save!.click();
	await waitUntil(() => root.querySelector('.failure') != null);
	return { el, root };
};

suite('cosmoz-form-dialog failure rendering', () => {
	test('failure renders above the footer, not inside the buttons row', async () => {
		const { root } = await openFailingDialog('Short failure');
		const failure = root.querySelector('.failure')!,
			buttons = root.querySelector('.buttons')!;
		assert.include(failure.textContent ?? '', 'Short failure');
		assert.isNull(
			buttons.querySelector('.failure'),
			'footer must contain only buttons',
		);
		assert.isTrue(
			failure.compareDocumentPosition(buttons) ===
				Node.DOCUMENT_POSITION_FOLLOWING,
			'failure block precedes the footer',
		);
	});

	test('long failure is capped and scrollable', async () => {
		const { root } = await openFailingDialog(LONG_ERROR);
		const failure = root.querySelector('.failure')!;
		const style = getComputedStyle(failure);
		assert.equal(style.overflowY, 'auto');
		// 40vh resolves to a px value; assert it is a bounded, finite cap
		assert.isTrue(style.maxHeight.endsWith('px'));
		assert.isBelow(Number.parseFloat(style.maxHeight), 500);
		assert.equal(style.whiteSpace, 'pre-wrap');
	});
});

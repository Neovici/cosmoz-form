import { assert, fixture, waitUntil } from '@open-wc/testing';
import { html } from 'lit-html';

import '../form-dialog/form-dialog.js';

// design tokens the alert-card chrome relies on; applied via inline style on
// the host so they inherit into its shadow root (the app loads them globally)
const tokenStyle =
	'--cz-color-bg-error: #fef3f2; --cz-color-border-error-subtle: #fda29b; --cz-radius-lg: 0.625rem; --cz-spacing: 0.25rem; --cz-color-text-error: #d92d20;';

const LONG_ERROR = Array.from(
	{ length: 8 },
	(_, i) => `Row ${1078 + i}: Category 'Sheeeesh' is not valid.`,
).join(' ');

const openFailingDialog = async (
	onSave: () => PromiseLike<unknown>,
): Promise<{ el: HTMLElement; root: ShadowRoot }> => {
	const el = (await fixture(html`
		<cosmoz-form-dialog
			heading="Test"
			style=${tokenStyle}
			.fields=${[]}
			.initial=${{}}
			.onSave=${onSave}
		></cosmoz-form-dialog>
	`)) as HTMLElement;
	const root = el.shadowRoot!;
	const save = root.querySelector<HTMLElement>('.buttons .save');
	assert.ok(save, 'save button rendered');
	save!.click();
	await waitUntil(() => root.querySelector('.failure') != null);
	return { el, root };
};

suite('cosmoz-form-dialog failure rendering', () => {
	test('failure renders above the footer, not inside the buttons row', async () => {
		const { root } = await openFailingDialog(() =>
			Promise.reject(new Error('Short failure')),
		);
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
		const { root } = await openFailingDialog(() =>
			Promise.reject(new Error(LONG_ERROR)),
		);
		const failure = root.querySelector('.failure')!;
		const style = getComputedStyle(failure);
		assert.equal(style.overflowY, 'auto');
		// 40vh resolves to a px value; assert it is a bounded, finite cap
		assert.isTrue(style.maxHeight.endsWith('px'));
		assert.isBelow(Number.parseFloat(style.maxHeight), 500);
		assert.equal(style.whiteSpace, 'pre-wrap');
	});

	test('failure renders as an error alert card', async () => {
		const { root } = await openFailingDialog(() =>
			Promise.reject(new Error(LONG_ERROR)),
		);
		const style = getComputedStyle(root.querySelector('.failure')!);
		assert.notEqual(
			style.backgroundColor,
			'rgba(0, 0, 0, 0)',
			'has a tinted background',
		);
		assert.notEqual(style.borderWidth, '0px', 'has a border');
		assert.notEqual(style.borderRadius, '0px', 'is rounded');
	});

	test('rich failure content (e.content) renders instead of the message', async () => {
		const { root } = await openFailingDialog(() => {
			const err = new Error('The file contains 3 errors') as Error & {
				content?: unknown;
			};
			err.content = html`
				<div><b>The file contains 3 errors</b></div>
				<div name="row-1">Row 1078: Category 'Sheeeesh' is not valid.</div>
			`;
			return Promise.reject(err);
		});
		const failure = root.querySelector('.failure')!;
		assert.equal(
			failure.querySelector('b')?.textContent,
			'The file contains 3 errors',
		);
		assert.include(
			failure.querySelector('[name="row-1"]')?.textContent ?? '',
			'Row 1078: Category \'Sheeeesh\' is not valid.',
		);
	});
});

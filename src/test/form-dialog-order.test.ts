import { assert, fixture, html } from '@open-wc/testing';
import { restore, stub } from 'sinon';
import { formDialog } from '../form-dialog/form-dialog';

const platforms = [
	{ platform: 'Win32', userAgent: 'Windows NT 10.0', cancelFirst: false },
	{ platform: 'MacIntel', userAgent: 'Macintosh', cancelFirst: true },
	{ platform: 'iPhone', userAgent: 'iPhone OS', cancelFirst: true },
	{ platform: 'MacIntel', userAgent: 'Macintosh Mobile', cancelFirst: true },
	{ platform: '', userAgent: 'iPad', cancelFirst: true },
	{ platform: 'Linux x86_64', userAgent: 'Linux', cancelFirst: false },
	{ platform: '', userAgent: '', cancelFirst: false },
];

suite('cosmoz-form-dialog action order', () => {
	teardown(() => restore());

	test('renders actions in OS order', async () => {
		const platformStub = stub(navigator, 'platform');
		const userAgentStub = stub(navigator, 'userAgent');
		for (const { platform, userAgent, cancelFirst } of platforms) {
			platformStub.value(platform);
			userAgentStub.value(userAgent);
			const form = await fixture<HTMLElement>(
				html`${formDialog({
					heading: 'Confirm',
					fields: [],
					initial: {},
					allowEmpty: true,
				})}`,
			);
			const buttons = Array.from(
				form.shadowRoot!.querySelectorAll('.buttons cosmoz-button'),
			);
			assert.lengthOf(buttons, 2);
			assert.equal(buttons[0].getAttribute('value') === 'cancel', cancelFirst);
		}
	});

	test('keeps a hidden cancel button hidden on macOS', async () => {
		stub(navigator, 'platform').value('MacIntel');
		const form = await fixture<HTMLElement>(
			html`${formDialog({
				heading: 'Confirm',
				fields: [],
				initial: {},
				allowEmpty: true,
				hideCancelButton: true,
			})}`,
		);
		const buttons = form.shadowRoot!.querySelectorAll('.buttons cosmoz-button');
		assert.lengthOf(buttons, 1);
		assert.notEqual(buttons[0].getAttribute('value'), 'cancel');
	});

	test('preserves the disabled cancellation state on macOS', async () => {
		stub(navigator, 'platform').value('MacIntel');
		const form = await fixture<HTMLElement>(
			html`${formDialog({
				heading: 'Confirm',
				fields: [],
				initial: {},
				allowEmpty: true,
				uncancelable: true,
			})}`,
		);
		const cancel = form.shadowRoot!.querySelector('.buttons cosmoz-button');
		assert.equal(cancel?.getAttribute('value'), 'cancel');
		assert.isTrue(cancel?.hasAttribute('disabled'));
	});
});

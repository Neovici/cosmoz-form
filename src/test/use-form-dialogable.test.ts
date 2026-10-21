import { renderHook } from '@neovici/testing';
import { assert, fixture, html, waitUntil } from '@open-wc/testing';
import { component } from '@pionjs/pion';
import { formDialog } from '../form-dialog/form-dialog';
import { useFormDialogable } from '../form-dialog/use-form-dialogable';
import { SaveCancelled } from '../form-dialog/use-headless-save';

type Host = HTMLElement & { api: ReturnType<typeof useFormDialogable> };
customElements.define(
	'test-sync-recovery',
	component((host: Host) => {
		const api = useFormDialogable();
		host.api = api;
		return formDialog(api.dialog);
	}),
);

suite('useFormDialogable headless recovery', () => {
	test('a cancelled headless save releases pending without refresh or recovery', async () => {
		const { result } = await renderHook(() => useFormDialogable());
		const before = result.current.rtkn;
		await result.current.open({
			heading: 'Cancelled',
			fields: [],
			initial: {},
			headless: true,
			onSave: () => Promise.reject(new SaveCancelled()),
		});
		await waitUntil(() => !result.current.pending);
		assert.isUndefined(result.current.dialog);
		assert.strictEqual(result.current.rtkn, before);
	});

	test('a synchronous exception is retained behind an open dialog and releases the save lock', async () => {
		const { result } = await renderHook(() => useFormDialogable());
		result.current.open({ heading: 'Other', initial: {}, fields: [] });
		await result.current.open({
			heading: 'Failed',
			initial: {},
			fields: [],
			headless: true,
			onSave: () => {
				throw new Error('Sync failure');
			},
		});
		await waitUntil(() => !result.current.pending);
		assert.equal(result.current.dialog!.heading, 'Other');
		result.current.dialog!.onClose!();
		await waitUntil(() => result.current.dialog?.heading === 'Failed');
		assert.equal(result.current.dialog!.error?.message, 'Sync failure');
	});

	test('queued recovery gets fresh values and error after the first dialog is retried', async () => {
		const host = await fixture<Host>(
			html`<test-sync-recovery></test-sync-recovery>`,
		);
		let attempts = 0;
		let secondValue: string | undefined;
		const first = host.api.open({
			name: 'first',
			heading: 'First',
			fields: [{ id: 'value' }],
			initial: { value: 'A' },
			allowEmpty: true,
			headless: true,
			onSave: () => {
				attempts++;
				return Promise.reject(
					new Error(attempts === 1 ? 'First failed' : 'Retry failed'),
				);
			},
		});
		await first;
		await host.api.open({
			name: 'second',
			heading: 'Second',
			fields: [{ id: 'value' }],
			initial: { value: 'B' },
			allowEmpty: true,
			headless: true,
			onSave: ({ value }) => {
				if (secondValue === undefined) {
					secondValue = '';
					return Promise.reject(new Error('Second failed'));
				}
				secondValue = value;
				return Promise.resolve();
			},
		});
		const dialog = () => host.shadowRoot!.querySelector('cosmoz-form-dialog')!;
		await waitUntil(() => dialog()?.shadowRoot?.querySelector('.save'));
		dialog().shadowRoot!.querySelector<HTMLElement>('.save')!.click();
		await waitUntil(() =>
			dialog()
				.shadowRoot!.querySelector('.failure')
				?.textContent?.includes('Retry failed'),
		);
		host.api.dialog!.onClose!();
		await waitUntil(() => host.api.dialog?.heading === 'Second');
		await waitUntil(() =>
			dialog()
				.shadowRoot!.querySelector('.failure')
				?.textContent?.includes('Second failed'),
		);
		dialog().shadowRoot!.querySelector<HTMLElement>('.save')!.click();
		await waitUntil(() => secondValue === 'B');
	});
});

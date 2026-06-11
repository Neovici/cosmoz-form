import { renderHook } from '@neovici/testing';
import { assert, waitUntil } from '@open-wc/testing';
import { type Dialogable } from '../form-dialog/use-form-dialogable';
import { useFormDialogable$ } from '../form-dialog/use-form-dialogable$';

const makeDialogable = (
	overrides?: Partial<Dialogable<object>>,
): Dialogable<object> => ({
	heading: 'Test',
	fields: [],
	initial: {},
	onSave: () => Promise.resolve(),
	...overrides,
});

suite('useFormDialogable$', () => {
	const fixture = () => renderHook(() => useFormDialogable$());

	test('dialog is undefined initially', async () => {
		const { result } = await fixture();
		assert.isUndefined(result.current.dialog);
	});

	test('rtkn is undefined initially', async () => {
		const { result } = await fixture();
		assert.isUndefined(result.current.rtkn);
	});

	test('open() with synchronous Dialogable stores a resolver function', async () => {
		const { result, nextUpdate } = await fixture();
		result.current.open(makeDialogable());
		await nextUpdate();
		assert.isFunction(result.current.dialog);
	});

	test('open() with Promise<Dialogable> stores a resolver function', async () => {
		const { result, nextUpdate } = await fixture();
		result.current.open(Promise.resolve(makeDialogable()));
		await nextUpdate();
		assert.isFunction(result.current.dialog);
	});

	test('open() with () => Dialogable stores a resolver function', async () => {
		const { result, nextUpdate } = await fixture();
		result.current.open(() => makeDialogable());
		await nextUpdate();
		assert.isFunction(result.current.dialog);
	});

	test('dialog() resolves to wrapped Dialog with onClose', async () => {
		const { result, nextUpdate } = await fixture();
		result.current.open(makeDialogable());
		await nextUpdate();
		const resolved = await result.current.dialog!();
		assert.equal(resolved.heading, 'Test');
		assert.isFunction(resolved.onClose);
		assert.isFunction(resolved.onSave);
	});

	test('onSave calls original onSave and onClose', async () => {
		const { result, nextUpdate } = await fixture();
		let saved = false;
		result.current.open(
			makeDialogable({
				onSave: () => {
					saved = true;
					return Promise.resolve();
				},
			}),
		);
		await nextUpdate();
		const resolved = await result.current.dialog!();
		await resolved.onSave!({}, {});
		assert.isTrue(saved);
		await waitUntil(() => result.current.dialog === undefined);
	});

	test('onSave respects preventClose', async () => {
		const { result, nextUpdate } = await fixture();
		result.current.open(makeDialogable({ preventClose: true }));
		await nextUpdate();
		const resolved = await result.current.dialog!();
		await resolved.onSave!({}, {});
		assert.isFunction(result.current.dialog);
	});

	test('onSave respects preventRefresh', async () => {
		const { result, nextUpdate } = await fixture();
		result.current.open(makeDialogable({ preventRefresh: true }));
		await nextUpdate();
		const resolved = await result.current.dialog!();
		const initialRtkn = result.current.rtkn;
		await resolved.onSave!({}, {});
		assert.equal(result.current.rtkn, initialRtkn);
	});

	test('dialog() resolves async Dialogable from Promise', async () => {
		const { result, nextUpdate } = await fixture();
		result.current.open(
			Promise.resolve(makeDialogable({ heading: 'Async Test' })),
		);
		await nextUpdate();
		const resolved = await result.current.dialog!();
		assert.equal(resolved.heading, 'Async Test');
	});

	test('dialog() resolves lazy Dialogable from function', async () => {
		const { result, nextUpdate } = await fixture();
		result.current.open(() => makeDialogable({ heading: 'Lazy Test' }));
		await nextUpdate();
		const resolved = await result.current.dialog!();
		assert.equal(resolved.heading, 'Lazy Test');
	});

	test('onSave sets rtkn (refresh token)', async () => {
		const { result, nextUpdate } = await fixture();
		result.current.open(makeDialogable());
		await nextUpdate();
		const resolved = await result.current.dialog!();
		assert.isUndefined(result.current.rtkn);
		await resolved.onSave!({}, {});
		assert.isTrue(typeof result.current.rtkn === 'symbol');
	});
});

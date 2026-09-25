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
		const resolved = (await result.current.dialog!())!;
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
		const resolved = (await result.current.dialog!())!;
		await resolved.onSave!({}, {});
		assert.isTrue(saved);
		await waitUntil(() => result.current.dialog === undefined);
	});

	test('onSave respects preventClose', async () => {
		const { result, nextUpdate } = await fixture();
		result.current.open(makeDialogable({ preventClose: true }));
		await nextUpdate();
		const resolved = (await result.current.dialog!())!;
		await resolved.onSave!({}, {});
		assert.isFunction(result.current.dialog);
	});

	test('onSave respects preventRefresh', async () => {
		const { result, nextUpdate } = await fixture();
		result.current.open(makeDialogable({ preventRefresh: true }));
		await nextUpdate();
		const resolved = (await result.current.dialog!())!;
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
		const resolved = (await result.current.dialog!())!;
		assert.equal(resolved.heading, 'Async Test');
	});

	test('dialog() resolves lazy Dialogable from function', async () => {
		const { result, nextUpdate } = await fixture();
		result.current.open(() => makeDialogable({ heading: 'Lazy Test' }));
		await nextUpdate();
		const resolved = (await result.current.dialog!())!;
		assert.equal(resolved.heading, 'Lazy Test');
	});

	test('onSave sets rtkn (refresh token)', async () => {
		const { result, nextUpdate } = await fixture();
		result.current.open(makeDialogable());
		await nextUpdate();
		const resolved = (await result.current.dialog!())!;
		assert.isUndefined(result.current.rtkn);
		await resolved.onSave!({}, {});
		assert.isTrue(typeof result.current.rtkn === 'symbol');
	});

	test('open() with a headless Dialogable saves without opening', async () => {
		const { result } = await fixture();
		const saved: object[] = [];
		const initial = { a: 1 };
		result.current.open(
			makeDialogable({
				headless: true,
				initial,
				onSave: (values) => {
					saved.push(values);
					return Promise.resolve();
				},
			}),
		);
		await waitUntil(() => typeof result.current.rtkn === 'symbol');
		assert.deepEqual(saved, [initial]);
		assert.isUndefined(result.current.dialog);
	});

	test('a failed headless save opens the dialog with the error', async () => {
		const { result } = await fixture();
		const error = new Error('Nope');
		result.current.open(
			makeDialogable({ headless: true, onSave: () => Promise.reject(error) }),
		);
		await waitUntil(() => result.current.dialog);
		const resolved = (await result.current.dialog!())!;
		assert.equal(resolved.error, error);
		assert.isFunction(resolved.onSave);
	});

	test('open() ignores a headless Dialogable while one is saving', async () => {
		const { result } = await fixture();
		let saves = 0;
		let finish: () => void;
		const dialogable = makeDialogable({
			headless: true,
			onSave: () => {
				saves++;
				return new Promise<void>((resolve) => (finish = resolve));
			},
		});
		result.current.open(dialogable);
		await waitUntil(() => saves === 1);
		result.current.open(dialogable);
		await new Promise((resolve) => setTimeout(resolve, 20));
		assert.equal(saves, 1);
		finish!();
		await waitUntil(() => typeof result.current.rtkn === 'symbol');
	});
});

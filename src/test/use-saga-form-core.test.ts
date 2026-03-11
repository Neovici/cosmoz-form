import { renderHook } from '@neovici/testing';
import { assert, waitUntil } from '@open-wc/testing';
import { spy } from 'sinon';

import { delay, loading, select, type AsyncItemRule } from '../async-rule';
import { touched } from '../touch';
import { useForm } from '../use-form';
import { useSagaFormCore } from '../use-saga-form-core';

// ── Types ─────────────────────────────────────────────────────────────────────

type TestForm = { name: string; city: string };

// ── Helpers ───────────────────────────────────────────────────────────────────

const tick = (ms = 0) => new Promise<void>((r) => setTimeout(r, ms));

// ── Suite ─────────────────────────────────────────────────────────────────────

suite('useSagaFormCore', () => {
	// Basic rule: when name changes, set city = name + '-city'
	const cityFromName: AsyncItemRule<TestForm> = [
		// eslint-disable-next-line require-yield
		async function* (current) {
			return { city: current.name + '-city' };
		},
		({ name }) => [name],
	];

	test('saga runs on initialization (prev deps are null → runs)', async () => {
		const { result } = await renderHook(() => {
			const form = useForm<TestForm>({ name: 'Alice', city: '' });
			useSagaFormCore(form, [cityFromName]);
			return form;
		});
		await waitUntil(() => result.current.values.city === 'Alice-city');
	});

	test('saga does NOT run again if deps unchanged (onChange with unrelated field)', async () => {
		const { result } = await renderHook(() => {
			const form = useForm<TestForm>({ name: 'Alice', city: '' });
			useSagaFormCore(form, [cityFromName]);
			return form;
		});
		await waitUntil(() => result.current.values.city === 'Alice-city');

		// change city manually — name (dep) didn't change so saga should NOT re-run
		result.current.onChange({ city: 'manual' });
		await tick(50); // give saga time to NOT re-run
		assert.equal(result.current.values.city, 'manual');
	});

	test('saga runs again when deps change (name changes → city updated)', async () => {
		const { result } = await renderHook(() => {
			const form = useForm<TestForm>({ name: 'Alice', city: '' });
			useSagaFormCore(form, [cityFromName]);
			return form;
		});
		await waitUntil(() => result.current.values.city === 'Alice-city');

		result.current.onChange({ name: 'Bob' }); // dep changed
		await waitUntil(() => result.current.values.city === 'Bob-city');
	});

	test('takeLatest — slow saga is cancelled when deps change again', async () => {
		const slowRule: AsyncItemRule<TestForm> = [
			async function* (current) {
				yield delay(200);
				return { city: current.name + '-slow' };
			},
			({ name }) => [name],
		];

		const { result } = await renderHook(() => {
			const form = useForm<TestForm>({ name: 'Alice', city: '' });
			useSagaFormCore(form, [slowRule]);
			return form;
		});

		// initial saga for Alice kicked off (slow, 200ms)
		await tick(10); // let Alice saga start
		result.current.onChange({ name: 'Bob' }); // triggers second saga, cancels first
		await waitUntil(
			() => result.current.values.city === 'Bob-slow',
			'Bob-slow should appear',
			{ timeout: 2000 },
		);
		// Alice-slow must never appear
		assert.notEqual(result.current.values.city, 'Alice-slow');
	});

	test('yield loading() fires intermediate patch before saga completes', async () => {
		const loadingRule: AsyncItemRule<TestForm> = [
			async function* (current) {
				yield loading<TestForm>({ city: 'loading...' });
				yield delay(50);
				return { city: current.name + '-done' };
			},
			({ name }) => [name],
		];

		const { result } = await renderHook(() => {
			const form = useForm<TestForm>({ name: 'Alice', city: '' });
			useSagaFormCore(form, [loadingRule]);
			return form;
		});

		// loading patch fires synchronously within the saga (before the delay)
		await waitUntil(() => result.current.values.city === 'loading...');

		// then the final patch arrives after the delay
		await waitUntil(
			() => result.current.values.city === 'Alice-done',
			'Alice-done should appear',
			{ timeout: 2000 },
		);
	});

	test('yield select() returns live state mid-saga', async () => {
		const selectRule: AsyncItemRule<TestForm> = [
			async function* () {
				yield delay(30);
				const live = (yield select<TestForm>()) as TestForm;
				return { city: live.name + '-live' };
			},
			({ name }) => [name],
		];

		const { result } = await renderHook(() => {
			const form = useForm<TestForm>({ name: 'Alice', city: '' });
			useSagaFormCore(form, [selectRule]);
			return form;
		});

		// saga started with Alice, mid-delay change name to Bob
		await tick(15); // mid-delay
		result.current.onChange({ name: 'Bob' });
		// saga should select 'Bob' (live state) when it resumes after delay
		await waitUntil(
			() => result.current.values.city === 'Bob-live',
			'Bob-live should appear',
			{ timeout: 2000 },
		);
	});

	test('async patches do not set form.touched', async () => {
		const { result } = await renderHook(() => {
			const form = useForm<TestForm>({ name: 'Alice', city: '' });
			useSagaFormCore(form, [cityFromName]);
			return form;
		});
		await waitUntil(() => result.current.values.city === 'Alice-city');
		assert.isFalse(touched(result.current.values));
	});

	test('onError called with (err, rule) when saga throws', async () => {
		const boom: AsyncItemRule<TestForm> = [
			// eslint-disable-next-line require-yield
			async function* () {
				throw new Error('saga boom');
				return {}; // unreachable — needed to satisfy SagaCompute<T> return type
			},
			({ name }) => [name],
		];

		const onError = spy();

		await renderHook(() => {
			const form = useForm<TestForm>({ name: 'Alice', city: '' });
			useSagaFormCore(form, [boom], { onError });
			return form;
		});

		await waitUntil(() => onError.called, 'onError should be called');
		assert.instanceOf(onError.args[0][0], Error);
		assert.equal((onError.args[0][0] as Error).message, 'saga boom');
		assert.equal(onError.args[0][1], boom);
	});

	test('cleanup — no state update after unmount', async () => {
		const slowRule: AsyncItemRule<TestForm> = [
			async function* (current) {
				yield delay(100);
				return { city: current.name + '-after-unmount' };
			},
			({ name }) => [name],
		];

		const onChangeSpy = spy();

		const { unmount } = await renderHook(() => {
			const form = useForm<TestForm>({ name: 'Alice', city: '' });
			const wrappedForm = {
				...form,
				onChange: (...args: Parameters<typeof form.onChange>) => {
					onChangeSpy(...args);
					return form.onChange(...args);
				},
			};
			useSagaFormCore(wrappedForm, [slowRule]);
			return wrappedForm;
		});

		// slow saga started
		await tick(10); // mid-delay
		const callsBefore = onChangeSpy.callCount;
		unmount(); // cancel in-flight saga
		await tick(200); // wait for what would have been the delay
		assert.equal(
			onChangeSpy.callCount,
			callsBefore,
			'no onChange after unmount',
		);
	});
});

import { renderHook } from '@neovici/testing';
import { assert, waitUntil } from '@open-wc/testing';
import { spy } from 'sinon';

import { delay, loading, select, type AsyncItemRule } from '../async-rule';
import { makeDebounceRunner } from '../make-debounce-runner';
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

	test('uses runner factory from the rule — debounce semantics observed', async () => {
		const debounceRule: AsyncItemRule<TestForm> = [
			// eslint-disable-next-line require-yield
			async function* (current) {
				return { city: current.name + '-debounced' };
			},
			({ name }) => [name],
			() => makeDebounceRunner(100),
		];

		const { result } = await renderHook(() => {
			const form = useForm<TestForm>({ name: 'Alice', city: '' });
			useSagaFormCore(form, [debounceRule]);
			return form;
		});

		// Two rapid dep changes within the 100ms debounce window
		result.current.onChange({ name: 'Bob' });
		await tick(30); // within debounce window
		result.current.onChange({ name: 'Carol' });

		// Wait long enough for the debounce to fire and saga to complete
		await waitUntil(
			() => result.current.values.city !== '',
			'city should be set',
			{ timeout: 2000 },
		);

		// Only Carol's saga should have applied — Bob's was debounced away
		assert.equal(result.current.values.city, 'Carol-debounced');
		assert.notEqual(result.current.values.city, 'Bob-debounced');
	});

	test('processing is false initially', async () => {
		const { result } = await renderHook(() => {
			const form = useForm<TestForm>({ name: 'Alice', city: '' });
			return useSagaFormCore(form, [cityFromName]);
		});
		// Before the initial saga resolves it may briefly be true; after it settles it must be false
		await waitUntil(() => result.current.processing === false);
		assert.isFalse(result.current.processing);
	});

	test('processing is true while a saga is in flight', async () => {
		const slowRule: AsyncItemRule<TestForm> = [
			async function* (current) {
				yield delay(100);
				return { city: current.name + '-slow' };
			},
			({ name }) => [name],
		];

		const { result } = await renderHook(() => {
			const form = useForm<TestForm>({ name: 'Alice', city: '' });
			return useSagaFormCore(form, [slowRule]);
		});

		// Saga has been dispatched but not yet resolved — processing must be true
		await waitUntil(() => result.current.processing === true);
		assert.isTrue(result.current.processing);

		// After the saga resolves, processing must go back to false
		await waitUntil(() => result.current.processing === false, undefined, {
			timeout: 2000,
		});
		assert.isFalse(result.current.processing);
	});

	test('processing stays true while multiple sagas are in flight', async () => {
		const slowRule1: AsyncItemRule<TestForm> = [
			async function* (current) {
				yield delay(80);
				return { city: current.name + '-1' };
			},
			({ name }) => [name],
		];
		const slowRule2: AsyncItemRule<TestForm> = [
			async function* (current) {
				yield delay(160);
				return { city: current.name + '-2' };
			},
			({ name }) => [name],
		];

		const { result } = await renderHook(() => {
			const form = useForm<TestForm>({ name: 'Alice', city: '' });
			return useSagaFormCore(form, [slowRule1, slowRule2]);
		});

		// Both sagas running — processing true
		await waitUntil(() => result.current.processing === true);
		// After first settles (~80ms) processing must still be true (second still running)
		await tick(100);
		assert.isTrue(result.current.processing);
		// After both settle — processing false
		await waitUntil(() => result.current.processing === false, undefined, {
			timeout: 2000,
		});
		assert.isFalse(result.current.processing);
	});

	test('processing returns to false when a saga is cancelled (runner returns null)', async () => {
		const slowRule: AsyncItemRule<TestForm> = [
			async function* (current) {
				yield delay(200);
				return { city: current.name + '-slow' };
			},
			({ name }) => [name],
		];

		const { result } = await renderHook(() => {
			const form = useForm<TestForm>({ name: 'Alice', city: '' });
			return useSagaFormCore(form, [slowRule]);
		});

		// Initial saga in flight
		await waitUntil(() => result.current.processing === true);
		// Trigger a new dep change — cancels previous saga, starts a new one
		result.current.onChange({ name: 'Bob' });
		// Wait for the new saga to complete — processing must return to false
		await waitUntil(() => result.current.processing === false, undefined, {
			timeout: 2000,
		});
		assert.isFalse(result.current.processing);
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

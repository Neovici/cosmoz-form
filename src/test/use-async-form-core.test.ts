import { renderHook } from '@neovici/testing';
import { assert, waitUntil } from '@open-wc/testing';
import { spy } from 'sinon';

import { delay, type AsyncItemRule } from '../async-rule';
import { makeDebounceRunner } from '../make-debounce-runner';
import { touched } from '../touch';
import { useAsyncFormCore } from '../use-async-form-core';
import { useForm } from '../use-form';

// ── Types ─────────────────────────────────────────────────────────────────────

type TestForm = { name: string; city: string };

// ── Helpers ───────────────────────────────────────────────────────────────────

const tick = (ms = 0) => new Promise<void>((r) => setTimeout(r, ms));

// ── Suite ─────────────────────────────────────────────────────────────────────

suite('useAsyncFormCore', () => {
	// Basic rule: when name changes, set city = name + '-city'
	const cityFromName: AsyncItemRule<TestForm> = [
		async (current) => ({ city: current.name + '-city' }),
		({ name }) => [name],
	];

	test('rule runs on initialization (prev deps are null → runs)', async () => {
		const { result } = await renderHook(() => {
			const form = useForm<TestForm>({ name: 'Alice', city: '' });
			useAsyncFormCore(form, [cityFromName]);
			return form;
		});
		await waitUntil(() => result.current.values.city === 'Alice-city');
	});

	test('rule does NOT run again if deps unchanged (onChange with unrelated field)', async () => {
		const { result } = await renderHook(() => {
			const form = useForm<TestForm>({ name: 'Alice', city: '' });
			useAsyncFormCore(form, [cityFromName]);
			return form;
		});
		await waitUntil(() => result.current.values.city === 'Alice-city');

		// change city manually — name (dep) didn't change so rule should NOT re-run
		result.current.onChange({ city: 'manual' });
		await tick(50); // give rule time to NOT re-run
		assert.equal(result.current.values.city, 'manual');
	});

	test('rule runs again when deps change (name changes → city updated)', async () => {
		const { result } = await renderHook(() => {
			const form = useForm<TestForm>({ name: 'Alice', city: '' });
			useAsyncFormCore(form, [cityFromName]);
			return form;
		});
		await waitUntil(() => result.current.values.city === 'Alice-city');

		result.current.onChange({ name: 'Bob' }); // dep changed
		await waitUntil(() => result.current.values.city === 'Bob-city');
	});

	test('takeLatest — slow rule is cancelled when deps change again', async () => {
		const slowRule: AsyncItemRule<TestForm> = [
			async (current, { signal }) => {
				await delay(signal, 200);
				return { city: current.name + '-slow' };
			},
			({ name }) => [name],
		];

		const { result } = await renderHook(() => {
			const form = useForm<TestForm>({ name: 'Alice', city: '' });
			useAsyncFormCore(form, [slowRule]);
			return form;
		});

		// initial rule for Alice kicked off (slow, 200ms)
		await tick(10); // let Alice rule start
		result.current.onChange({ name: 'Bob' }); // triggers second rule, cancels first
		await waitUntil(
			() => result.current.values.city === 'Bob-slow',
			'Bob-slow should appear',
			{ timeout: 2000 },
		);
		// Alice-slow must never appear
		assert.notEqual(result.current.values.city, 'Alice-slow');
	});

	test('opts.update() fires intermediate patch before rule completes', async () => {
		const loadingRule: AsyncItemRule<TestForm> = [
			async (current, { update, signal }) => {
				update({ city: 'loading...' });
				await delay(signal, 50);
				return { city: current.name + '-done' };
			},
			({ name }) => [name],
		];

		const { result } = await renderHook(() => {
			const form = useForm<TestForm>({ name: 'Alice', city: '' });
			useAsyncFormCore(form, [loadingRule]);
			return form;
		});

		// loading patch fires before the delay
		await waitUntil(() => result.current.values.city === 'loading...');

		// then the final patch arrives after the delay
		await waitUntil(
			() => result.current.values.city === 'Alice-done',
			'Alice-done should appear',
			{ timeout: 2000 },
		);
	});

	test('async patches do not set form.touched', async () => {
		const { result } = await renderHook(() => {
			const form = useForm<TestForm>({ name: 'Alice', city: '' });
			useAsyncFormCore(form, [cityFromName]);
			return form;
		});
		await waitUntil(() => result.current.values.city === 'Alice-city');
		assert.isFalse(touched(result.current.values));
	});

	test('onError called with (err, rule) when rule throws', async () => {
		const boom: AsyncItemRule<TestForm> = [
			async () => {
				throw new Error('rule boom');
			},
			({ name }) => [name],
		];

		const onError = spy();

		await renderHook(() => {
			const form = useForm<TestForm>({ name: 'Alice', city: '' });
			useAsyncFormCore(form, [boom], { onError });
			return form;
		});

		await waitUntil(() => onError.called, 'onError should be called');
		assert.instanceOf(onError.args[0][0], Error);
		assert.equal((onError.args[0][0] as Error).message, 'rule boom');
		assert.equal(onError.args[0][1], boom);
	});

	test('uses runner factory from the rule — debounce semantics observed', async () => {
		const debounceRule: AsyncItemRule<TestForm> = [
			async (current) => ({ city: current.name + '-debounced' }),
			({ name }) => [name],
			() => makeDebounceRunner(100),
		];

		const { result } = await renderHook(() => {
			const form = useForm<TestForm>({ name: 'Alice', city: '' });
			useAsyncFormCore(form, [debounceRule]);
			return form;
		});

		// Two rapid dep changes within the 100ms debounce window
		result.current.onChange({ name: 'Bob' });
		await tick(30); // within debounce window
		result.current.onChange({ name: 'Carol' });

		// Wait long enough for the debounce to fire and rule to complete
		await waitUntil(
			() => result.current.values.city !== '',
			'city should be set',
			{ timeout: 2000 },
		);

		// Only Carol's rule should have applied — Bob's was debounced away
		assert.equal(result.current.values.city, 'Carol-debounced');
		assert.notEqual(result.current.values.city, 'Bob-debounced');
	});

	test('processing is false initially', async () => {
		const { result } = await renderHook(() => {
			const form = useForm<TestForm>({ name: 'Alice', city: '' });
			return useAsyncFormCore(form, [cityFromName]);
		});
		await waitUntil(() => result.current.processing === false);
		assert.isFalse(result.current.processing);
	});

	test('processing is true while a rule is in flight', async () => {
		const slowRule: AsyncItemRule<TestForm> = [
			async (current, { signal }) => {
				await delay(signal, 100);
				return { city: current.name + '-slow' };
			},
			({ name }) => [name],
		];

		const { result } = await renderHook(() => {
			const form = useForm<TestForm>({ name: 'Alice', city: '' });
			return useAsyncFormCore(form, [slowRule]);
		});

		await waitUntil(() => result.current.processing === true);
		assert.isTrue(result.current.processing);

		await waitUntil(() => result.current.processing === false, undefined, {
			timeout: 2000,
		});
		assert.isFalse(result.current.processing);
	});

	test('processing stays true while multiple rules are in flight', async () => {
		const slowRule1: AsyncItemRule<TestForm> = [
			async (current, { signal }) => {
				await delay(signal, 80);
				return { city: current.name + '-1' };
			},
			({ name }) => [name],
		];
		const slowRule2: AsyncItemRule<TestForm> = [
			async (current, { signal }) => {
				await delay(signal, 160);
				return { city: current.name + '-2' };
			},
			({ name }) => [name],
		];

		const { result } = await renderHook(() => {
			const form = useForm<TestForm>({ name: 'Alice', city: '' });
			return useAsyncFormCore(form, [slowRule1, slowRule2]);
		});

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

	test('processing returns to false when a rule is cancelled (runner returns null)', async () => {
		const slowRule: AsyncItemRule<TestForm> = [
			async (current, { signal }) => {
				await delay(signal, 200);
				return { city: current.name + '-slow' };
			},
			({ name }) => [name],
		];

		const { result } = await renderHook(() => {
			const form = useForm<TestForm>({ name: 'Alice', city: '' });
			return useAsyncFormCore(form, [slowRule]);
		});

		await waitUntil(() => result.current.processing === true);
		// Trigger a new dep change — cancels previous rule, starts a new one
		result.current.onChange({ name: 'Bob' });
		await waitUntil(() => result.current.processing === false, undefined, {
			timeout: 2000,
		});
		assert.isFalse(result.current.processing);
	});

	test('cleanup — no state update after unmount', async () => {
		const slowRule: AsyncItemRule<TestForm> = [
			async (current, { signal }) => {
				await delay(signal, 100);
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
			useAsyncFormCore(wrappedForm, [slowRule]);
			return wrappedForm;
		});

		await tick(10); // mid-delay
		const callsBefore = onChangeSpy.callCount;
		unmount(); // cancel in-flight rule
		await tick(200); // wait for what would have been the delay
		assert.equal(
			onChangeSpy.callCount,
			callsBefore,
			'no onChange after unmount',
		);
	});
});

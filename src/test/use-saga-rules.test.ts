import { renderHook } from '@neovici/testing';
import { assert, waitUntil } from '@open-wc/testing';
import { spy } from 'sinon';

import { delay, loading, select, type AsyncItemRule } from '../async-rule';
import { useItems } from '../use-items';
import { useSagaRules } from '../use-items/use-saga-rules';

// ── Types ─────────────────────────────────────────────────────────────────────

type TestItem = { name: string; derived?: string };

// ── Helpers ───────────────────────────────────────────────────────────────────

const tick = (ms = 0) => new Promise<void>((r) => setTimeout(r, ms));

// ── Suite ─────────────────────────────────────────────────────────────────────

suite('useSagaRules (items)', () => {
	// Basic rule: derived = name + '-' + idx
	const derivedFromName: AsyncItemRule<TestItem> = [
		// eslint-disable-next-line require-yield
		async function* (current, _old, idx) {
			return { derived: current.name + '-' + idx };
		},
		({ name }, idx) => [name, idx],
	];

	test('saga runs per-item on initialization', async () => {
		const { result } = await renderHook(() => {
			const core = useItems<TestItem>({
				initial: [{ name: 'A' }, { name: 'B' }],
			});
			useSagaRules(core.items, [derivedFromName], core.update);
			return core;
		});
		await waitUntil(
			() =>
				result.current.items[0]?.derived !== undefined &&
				result.current.items[1]?.derived !== undefined,
		);
		assert.equal(result.current.items[0].derived, 'A-0');
		assert.equal(result.current.items[1].derived, 'B-1');
	});

	test('saga result applied to correct item index', async () => {
		const { result } = await renderHook(() => {
			const core = useItems<TestItem>({
				initial: [{ name: 'X' }, { name: 'Y' }],
			});
			useSagaRules(core.items, [derivedFromName], core.update);
			return core;
		});
		await waitUntil(() => result.current.items[0]?.derived !== undefined);
		assert.equal(result.current.items[0].derived, 'X-0');
		assert.equal(result.current.items[1].derived, 'Y-1');
	});

	test('saga does not run for items whose deps are unchanged', async () => {
		const { result } = await renderHook(() => {
			const core = useItems<TestItem>({ initial: [{ name: 'A' }] });
			useSagaRules(core.items, [derivedFromName], core.update);
			return core;
		});
		await waitUntil(() => result.current.items[0]?.derived === 'A-0');

		// Manually set derived to 'manual', then trigger a re-render without changing name/idx
		result.current.update(0, { derived: 'manual' });
		await tick(50);
		// saga should NOT have overwritten 'manual' (name didn't change)
		assert.equal(result.current.items[0].derived, 'manual');
	});

	test('changing item[0] triggers saga for item[0] only, not item[1]', async () => {
		const runCounts = { 0: 0, 1: 0 };
		const countingRule: AsyncItemRule<TestItem> = [
			// eslint-disable-next-line require-yield
			async function* (current, _old, idx) {
				(runCounts as Record<number, number>)[idx!]++;
				return { derived: current.name + '-' + idx };
			},
			({ name }, idx) => [name, idx],
		];

		const { result } = await renderHook(() => {
			const core = useItems<TestItem>({
				initial: [{ name: 'A' }, { name: 'B' }],
			});
			useSagaRules(core.items, [countingRule], core.update);
			return core;
		});
		await waitUntil(() => result.current.items[0]?.derived !== undefined);

		const runBefore1 = runCounts[1];
		result.current.update(0, { name: 'A2' }); // only item[0] changes
		await waitUntil(() => result.current.items[0].derived === 'A2-0');
		// item[1] saga should not have run again
		assert.equal(runCounts[1], runBefore1);
	});

	test('per-item takeLatest — item[0] saga cancelled independently of item[1]', async () => {
		const slowRule: AsyncItemRule<TestItem> = [
			async function* (current, _old, idx) {
				yield delay(150);
				return { derived: current.name + '-slow-' + idx };
			},
			({ name }, idx) => [name, idx],
		];

		const { result } = await renderHook(() => {
			const core = useItems<TestItem>({
				initial: [{ name: 'A' }, { name: 'B' }],
			});
			useSagaRules(core.items, [slowRule], core.update);
			return core;
		});

		// Let initial sagas start
		await tick(10);

		// Change item[0] name mid-flight (cancels item[0] first saga)
		result.current.update(0, { name: 'A2' });
		// item[1] saga should complete normally with 'B-slow-1'
		await waitUntil(
			() => result.current.items[0]?.derived === 'A2-slow-0',
			'A2-slow-0 should appear',
			{ timeout: 2000 },
		);
		assert.equal(result.current.items[1].derived, 'B-slow-1');
		// A-slow-0 must never appear
		assert.notEqual(result.current.items[0].derived, 'A-slow-0');
	});

	test('intermediate loading patch applied to correct item only', async () => {
		const loadingRule: AsyncItemRule<TestItem> = [
			async function* (current, _old, idx) {
				yield loading<TestItem>({ derived: 'loading-' + idx });
				yield delay(50);
				return { derived: current.name + '-done-' + idx };
			},
			({ name }, idx) => [name, idx],
		];

		const { result } = await renderHook(() => {
			const core = useItems<TestItem>({
				initial: [{ name: 'A' }, { name: 'B' }],
			});
			useSagaRules(core.items, [loadingRule], core.update);
			return core;
		});

		await waitUntil(() => result.current.items[0]?.derived === 'loading-0');
		assert.equal(result.current.items[1].derived, 'loading-1');

		await waitUntil(
			() => result.current.items[0]?.derived === 'A-done-0',
			undefined,
			{ timeout: 2000 },
		);
		assert.equal(result.current.items[1].derived, 'B-done-1');
	});

	test('yield select() for items returns live item state', async () => {
		const selectRule: AsyncItemRule<TestItem> = [
			async function* (_current, _old, idx) {
				yield delay(30);
				const live = (yield select<TestItem>()) as TestItem;
				return { derived: live.name + '-live-' + idx };
			},
			({ name }, idx) => [name, idx],
		];

		const { result } = await renderHook(() => {
			const core = useItems<TestItem>({ initial: [{ name: 'A' }] });
			useSagaRules(core.items, [selectRule], core.update);
			return core;
		});

		await tick(15); // mid-delay
		result.current.update(0, { name: 'A2' });
		await waitUntil(
			() => result.current.items[0]?.derived === 'A2-live-0',
			'A2-live-0 should appear',
			{ timeout: 2000 },
		);
	});

	test('onError called with (err, rule, index)', async () => {
		const boom: AsyncItemRule<TestItem> = [
			// eslint-disable-next-line require-yield
			async function* () {
				throw new Error('item boom');
				return {}; // unreachable — needed to satisfy SagaCompute<T> return type
			},
			({ name }, idx) => [name, idx],
		];

		const onError = spy();

		await renderHook(() => {
			const core = useItems<TestItem>({ initial: [{ name: 'A' }] });
			useSagaRules(core.items, [boom], core.update, { onError });
			return core;
		});

		await waitUntil(() => onError.called, 'onError should be called');
		assert.instanceOf(onError.args[0][0], Error);
		assert.equal(onError.args[0][1], boom);
		assert.equal(onError.args[0][2], 0); // index
	});

	test('runner map grows when items are appended — new item saga runs', async () => {
		const { result } = await renderHook(() => {
			const core = useItems<TestItem>({ initial: [{ name: 'A' }] });
			useSagaRules(core.items, [derivedFromName], core.update);
			return core;
		});
		await waitUntil(() => result.current.items[0]?.derived === 'A-0');

		result.current.update(1, { name: 'B' }); // append
		await waitUntil(() => result.current.items[1]?.derived === 'B-1');
	});

	test('no stale runner for removed item — new item at index 0 gets a fresh saga', async () => {
		const { result } = await renderHook(() => {
			const core = useItems<TestItem>({
				initial: [{ name: 'A' }, { name: 'B' }],
			});
			useSagaRules(core.items, [derivedFromName], core.update);
			return core;
		});
		await waitUntil(() => result.current.items[0]?.derived === 'A-0');

		result.current.remove(0); // remove item[0], 'B' shifts to index 0
		await waitUntil(
			() => result.current.items[0]?.derived === 'B-0',
			'B-0 should appear after removal',
			{ timeout: 2000 },
		);
	});
});

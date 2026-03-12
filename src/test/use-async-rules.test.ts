import { renderHook } from '@neovici/testing';
import { assert, waitUntil } from '@open-wc/testing';
import { spy } from 'sinon';

import { delay, type AsyncItemRule } from '../async-rule';
import { makeDebounceRunner } from '../make-debounce-runner';
import { useItems } from '../use-items';
import { useAsyncRules } from '../use-items/use-async-rules';

// ── Types ─────────────────────────────────────────────────────────────────────

type TestItem = { name: string; derived?: string };

// ── Helpers ───────────────────────────────────────────────────────────────────

const tick = (ms = 0) => new Promise<void>((r) => setTimeout(r, ms));

// ── Suite ─────────────────────────────────────────────────────────────────────

suite('useAsyncRules (items)', () => {
	// Basic rule: derived = name + '-' + idx
	const derivedFromName: AsyncItemRule<TestItem> = [
		async (current, { index }) => ({ derived: current.name + '-' + index }),
		({ name }, idx) => [name, idx],
	];

	test('rule runs per-item on initialization', async () => {
		const { result } = await renderHook(() => {
			const core = useItems<TestItem>({
				initial: [{ name: 'A' }, { name: 'B' }],
			});
			useAsyncRules(core.items, [derivedFromName], core.update);
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

	test('rule result applied to correct item index', async () => {
		const { result } = await renderHook(() => {
			const core = useItems<TestItem>({
				initial: [{ name: 'X' }, { name: 'Y' }],
			});
			useAsyncRules(core.items, [derivedFromName], core.update);
			return core;
		});
		await waitUntil(() => result.current.items[0]?.derived !== undefined);
		assert.equal(result.current.items[0].derived, 'X-0');
		assert.equal(result.current.items[1].derived, 'Y-1');
	});

	test('rule does not run for items whose deps are unchanged', async () => {
		const { result } = await renderHook(() => {
			const core = useItems<TestItem>({ initial: [{ name: 'A' }] });
			useAsyncRules(core.items, [derivedFromName], core.update);
			return core;
		});
		await waitUntil(() => result.current.items[0]?.derived === 'A-0');

		// Manually set derived to 'manual', then trigger a re-render without changing name/idx
		result.current.update(0, { derived: 'manual' });
		await tick(50); // give rule time to NOT re-run
		assert.equal(result.current.items[0].derived, 'manual');
	});

	test('changing item[0] triggers rule for item[0] only, not item[1]', async () => {
		const runCounts = { 0: 0, 1: 0 };
		const countingRule: AsyncItemRule<TestItem> = [
			async (current, { index }) => {
				(runCounts as Record<number, number>)[index!]++;
				return { derived: current.name + '-' + index };
			},
			({ name }, idx) => [name, idx],
		];

		const { result } = await renderHook(() => {
			const core = useItems<TestItem>({
				initial: [{ name: 'A' }, { name: 'B' }],
			});
			useAsyncRules(core.items, [countingRule], core.update);
			return core;
		});
		await waitUntil(() => result.current.items[0]?.derived !== undefined);

		const runBefore1 = runCounts[1];
		result.current.update(0, { name: 'A2' }); // only item[0] changes
		await waitUntil(() => result.current.items[0].derived === 'A2-0');
		assert.equal(runCounts[1], runBefore1);
	});

	test('per-item takeLatest — item[0] rule cancelled independently of item[1]', async () => {
		const slowRule: AsyncItemRule<TestItem> = [
			async (current, { signal, index }) => {
				await delay(signal, 150);
				return { derived: current.name + '-slow-' + index };
			},
			({ name }, idx) => [name, idx],
		];

		const { result } = await renderHook(() => {
			const core = useItems<TestItem>({
				initial: [{ name: 'A' }, { name: 'B' }],
			});
			useAsyncRules(core.items, [slowRule], core.update);
			return core;
		});

		await tick(10);

		// Change item[0] name mid-flight (cancels item[0] first rule)
		result.current.update(0, { name: 'A2' });
		await waitUntil(
			() => result.current.items[0]?.derived === 'A2-slow-0',
			'A2-slow-0 should appear',
			{ timeout: 2000 },
		);
		assert.equal(result.current.items[1].derived, 'B-slow-1');
		assert.notEqual(result.current.items[0].derived, 'A-slow-0');
	});

	test('intermediate ctx.update patch applied to correct item only', async () => {
		const loadingRule: AsyncItemRule<TestItem> = [
			async (current, { update, signal, index }) => {
				update({ derived: 'loading-' + index });
				await delay(signal, 50);
				return { derived: current.name + '-done-' + index };
			},
			({ name }, idx) => [name, idx],
		];

		const { result } = await renderHook(() => {
			const core = useItems<TestItem>({
				initial: [{ name: 'A' }, { name: 'B' }],
			});
			useAsyncRules(core.items, [loadingRule], core.update);
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

	test('onError called with (err, rule, index)', async () => {
		const boom: AsyncItemRule<TestItem> = [
			async () => {
				throw new Error('item boom');
			},
			({ name }, idx) => [name, idx],
		];

		const onError = spy();

		await renderHook(() => {
			const core = useItems<TestItem>({ initial: [{ name: 'A' }] });
			useAsyncRules(core.items, [boom], core.update, { onError });
			return core;
		});

		await waitUntil(() => onError.called, 'onError should be called');
		assert.instanceOf(onError.args[0][0], Error);
		assert.equal(onError.args[0][1], boom);
		assert.equal(onError.args[0][2], 0); // index
	});

	test('runner map grows when items are appended — new item rule runs', async () => {
		const { result } = await renderHook(() => {
			const core = useItems<TestItem>({ initial: [{ name: 'A' }] });
			useAsyncRules(core.items, [derivedFromName], core.update);
			return core;
		});
		await waitUntil(() => result.current.items[0]?.derived === 'A-0');

		result.current.update(1, { name: 'B' }); // append
		await waitUntil(() => result.current.items[1]?.derived === 'B-1');
	});

	test('uses runner factory from the rule — debounce semantics observed', async () => {
		const debounceRule: AsyncItemRule<TestItem> = [
			async (current, { index }) => ({
				derived: current.name + '-debounced-' + index,
			}),
			({ name }, idx) => [name, idx],
			() => makeDebounceRunner(100),
		];

		const { result } = await renderHook(() => {
			const core = useItems<TestItem>({ initial: [{ name: 'A' }] });
			useAsyncRules(core.items, [debounceRule], core.update);
			return core;
		});

		// Two rapid dep changes within the 100ms debounce window
		result.current.update(0, { name: 'B' });
		await tick(30);
		result.current.update(0, { name: 'C' });

		await waitUntil(
			() => result.current.items[0]?.derived !== undefined,
			'derived should be set',
			{ timeout: 2000 },
		);

		assert.equal(result.current.items[0].derived, 'C-debounced-0');
		assert.notEqual(result.current.items[0].derived, 'B-debounced-0');
	});

	test('no stale runner for removed item — new item at index 0 gets a fresh rule', async () => {
		const { result } = await renderHook(() => {
			const core = useItems<TestItem>({
				initial: [{ name: 'A' }, { name: 'B' }],
			});
			useAsyncRules(core.items, [derivedFromName], core.update);
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

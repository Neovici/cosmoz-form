/* eslint-disable mocha/max-top-level-suites */

import { renderHook } from '@neovici/testing';
import { assert } from '@open-wc/testing';

import { useItems } from '../use-items';
import { applyRules } from '../use-items/apply-rules';
import { useValidatedForm } from '../use-validated-form';

// ── applyRules ────────────────────────────────────────────────────────────────

suite('applyRules with context', () => {
	test('passes context to computeFn', () => {
		const received = [];
		const rule = [
			(current, _old, _index, _oldIndex, context) => {
				received.push(context);
				return {};
			},
		];

		applyRules({
			newItem: { name: 'a' },
			rules: [rule],
			context: { multiplier: 2 },
		});

		assert.deepEqual(received, [{ multiplier: 2 }]);
	});

	test('passes context to depsFn', () => {
		const received = [];
		const rule = [
			() => ({}),
			(current, _index, context) => {
				received.push(context);
				return [context?.multiplier];
			},
		];

		const oldItem = { value: 1 };
		const newItem = { value: 1 }; // same value, dep change decides re-run

		// First call — no oldItem, rule always runs regardless of deps
		applyRules({
			newItem,
			rules: [rule],
			context: { multiplier: 2 },
		});

		// Second call — with oldItem, deps are compared
		applyRules({
			oldItem,
			newItem,
			rules: [rule],
			context: { multiplier: 2 },
		});

		// depsFn called for both old and new in the second invocation
		assert.isTrue(received.length >= 2);
		assert.deepEqual(received[received.length - 1], { multiplier: 2 });
	});

	test('rule re-runs when context changes cause deps to differ', () => {
		let runCount = 0;
		const rule = [
			() => {
				runCount++;
				return {};
			},
			(_current, _index, context) => [context?.threshold],
		];

		const item = { value: 5 };

		// Initial run (no oldItem) — always runs
		applyRules({ newItem: item, rules: [rule], context: { threshold: 10 } });
		assert.equal(runCount, 1);

		// Same context threshold — deps unchanged, rule skipped
		applyRules({
			oldItem: item,
			newItem: item,
			rules: [rule],
			context: { threshold: 10 },
		});
		assert.equal(runCount, 1, 'should not re-run when context unchanged');

		// Context threshold changed — deps differ, rule re-runs
		applyRules({
			oldItem: item,
			newItem: item,
			rules: [rule],
			context: { threshold: 20 },
		});
		assert.equal(runCount, 2, 'should re-run when context changes');
	});

	test('rule without context arg works unchanged (backward compat)', () => {
		const rule = [
			({ value }) => ({ doubled: value * 2 }),
			({ value }) => [value],
		];

		const result = applyRules({
			newItem: { value: 3 },
			rules: [rule],
		});

		assert.equal(result.doubled, 6);
	});
});

// ── useValidatedForm with context ─────────────────────────────────────────────

suite('useValidatedForm with context', () => {
	test('field suffix function receives context as 4th arg', async () => {
		const received = [];
		const fields = [
			{
				id: 'amount',
				suffix: (...args) => {
					received.push(args[3]);
					return null;
				},
			},
		];

		await renderHook(() =>
			useValidatedForm({
				fields,
				initial: { amount: 100 },
				context: { currency: 'EUR' },
			}),
		);

		assert.isTrue(received.length > 0, 'suffix should have been called');
		assert.deepEqual(received[0], { currency: 'EUR' });
	});

	test('field validate (Rule) receives context as 4th arg', async () => {
		const received = [];
		const fields = [
			{
				id: 'deliveryDate',
				validate: (value, _values, _field, context) => {
					received.push(context);
					return value < (context?.minDate ?? '') ? 'Too early' : false;
				},
			},
		];

		const { result } = await renderHook(() =>
			useValidatedForm({
				fields,
				initial: { deliveryDate: '2024-01-01' },
				context: { minDate: '2024-06-01' },
			}),
		);

		assert.isTrue(received.length > 0, 'validate should have been called');
		assert.deepEqual(received[0], { minDate: '2024-06-01' });
		// validation fails: '2024-01-01' < '2024-06-01'
		assert.isTrue(result.current.invalid);
		assert.equal(result.current.fields[0].error, 'Too early');
	});

	test('validation passes when value satisfies context constraint', async () => {
		const fields = [
			{
				id: 'deliveryDate',
				validate: (value, _values, _field, context) =>
					value < (context?.minDate ?? '') ? 'Too early' : false,
			},
		];

		const { result } = await renderHook(() =>
			useValidatedForm({
				fields,
				initial: { deliveryDate: '2024-12-01' },
				context: { minDate: '2024-06-01' },
			}),
		);

		assert.isFalse(result.current.invalid);
	});

	test('rule computeFn receives context', async () => {
		const received = [];
		const rules = [
			[
				(_current, _old, _index, _oldIndex, context) => {
					received.push(context);
					return {};
				},
			],
		];

		await renderHook(() =>
			useValidatedForm({
				fields: [{ id: 'name' }],
				initial: { name: 'Alice' },
				rules,
				context: { prefix: 'Dr' },
			}),
		);

		assert.isTrue(received.length > 0);
		assert.deepEqual(received[0], { prefix: 'Dr' });
	});

	test('context is exposed on the returned form object', async () => {
		const { result } = await renderHook(() =>
			useValidatedForm({
				fields: [{ id: 'name' }],
				initial: { name: 'Alice' },
				context: { tenant: 'acme' },
			}),
		);

		assert.deepEqual(result.current.context, { tenant: 'acme' });
	});

	test('context defaults to empty object when not provided', async () => {
		const { result } = await renderHook(() =>
			useValidatedForm({
				fields: [{ id: 'name' }],
				initial: { name: 'Alice' },
			}),
		);

		assert.deepEqual(result.current.context, {});
	});

	test('updating context prop causes field functions to see new context', async () => {
		const received = [];
		const fields = [
			{
				id: 'amount',
				suffix: (...args) => {
					received.push(args[3]?.threshold);
					return null;
				},
			},
		];

		const { rerender } = await renderHook(
			({ ctx }) =>
				useValidatedForm({
					fields,
					initial: { amount: 0 },
					context: ctx,
				}),
			{ initialProps: { ctx: { threshold: 100 } } },
		);

		const firstLen = received.length;
		assert.isTrue(firstLen > 0, 'suffix should have been called initially');
		assert.equal(received[firstLen - 1], 100);

		await rerender({ ctx: { threshold: 200 } });

		assert.isTrue(
			received.length > firstLen,
			'suffix should re-run on context change',
		);
		assert.equal(received[received.length - 1], 200);
	});

	test('no context — field functions with 3-arg signature work unchanged', async () => {
		const fields = [
			{
				id: 'name',
				label: () => 'Name Label',
			},
		];

		const { result } = await renderHook(() =>
			useValidatedForm({
				fields,
				initial: { name: 'Alice' },
			}),
		);

		assert.equal(result.current.fields[0].label, 'Name Label');
	});
});

// ── useItems with context ─────────────────────────────────────────────────────

suite('useItems with context', () => {
	test('computeFn receives context on initialization', async () => {
		const received = [];
		const rules = [
			[
				(_current, _old, _index, _oldIndex, context) => {
					received.push(context);
					return {};
				},
			],
		];

		await renderHook(() =>
			useItems({
				initial: [{ name: 'foo' }],
				rules,
				context: { org: 'neovici' },
			}),
		);

		assert.isTrue(received.length > 0);
		assert.deepEqual(received[0], { org: 'neovici' });
	});

	test('computeFn receives context on update', async () => {
		const received = [];
		const rules = [
			[
				(_current, _old, _index, _oldIndex, context) => {
					received.push(context);
					return {};
				},
			],
		];

		const { result, nextUpdate } = await renderHook(() =>
			useItems({
				initial: [{ name: 'foo' }],
				rules,
				context: { org: 'neovici' },
			}),
		);

		const initLen = received.length;
		result.current.update(0, { name: 'bar' });
		await nextUpdate();

		assert.isTrue(received.length > initLen);
		assert.deepEqual(received[received.length - 1], { org: 'neovici' });
	});

	test('depsFn receives context, context change triggers rule re-run', async () => {
		let runCount = 0;
		const rules = [
			[
				() => {
					runCount++;
					return {};
				},
				(_current, _index, context) => [context?.threshold],
			],
		];

		const { result, nextUpdate, rerender } = await renderHook(
			({ ctx }) =>
				useItems({
					initial: [{ value: 5 }],
					rules,
					context: ctx,
				}),
			{ initialProps: { ctx: { threshold: 10 } } },
		);

		const initRuns = runCount;

		// Re-render with same context — no item change, no context change → no re-run
		// (items are memoized; rule re-run happens on update())
		result.current.update(0, { value: 5 }); // same value, but forces rule evaluation
		await nextUpdate();

		// Now change context
		await rerender({ ctx: { threshold: 20 } });
		result.current.update(0, { value: 5 });
		await nextUpdate();

		// Rule should have run more times after context change
		assert.isTrue(runCount > initRuns, 'rule should run after context change');
	});

	test('append passes context to rules', async () => {
		const received = [];
		const rules = [
			[
				(_current, _old, _index, _oldIndex, context) => {
					received.push(context);
					return {};
				},
			],
		];

		const { result, nextUpdate } = await renderHook(() =>
			useItems({
				initial: [],
				rules,
				context: { org: 'test' },
			}),
		);

		result.current.append([{ name: 'new' }]);
		await nextUpdate();

		assert.isTrue(received.length > 0);
		assert.deepEqual(received[received.length - 1], { org: 'test' });
	});

	test('backward compat — rules without context arg work unchanged', async () => {
		const rules = [
			[({ name }) => ({ nameLength: name.length }), ({ name }) => [name]],
		];

		const { result } = await renderHook(() =>
			useItems({
				initial: [{ name: 'hello' }],
				rules,
			}),
		);

		assert.equal(result.current.items[0].nameLength, 5);
	});
});

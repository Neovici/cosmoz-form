import { assert } from '@open-wc/testing';

import { applyRules } from '../use-items/apply-rules';

suite('applyRules', () => {
	// ── Basic mechanics ───────────────────────────────────────────────────────

	test('returns newItem unchanged when rules is undefined', () => {
		const item = { name: 'Alice', age: 30 };
		const result = applyRules({ newItem: item, rules: undefined });
		assert.strictEqual(result, item);
	});

	test('returns newItem unchanged when rules is empty array', () => {
		const item = { name: 'Alice', age: 30 };
		const result = applyRules({ newItem: item, rules: [] });
		assert.deepEqual(result, item);
	});

	test('rule with no depsFn always runs and merges patch into item', () => {
		// Realistic: compute a derived `total` field from `qty * price`
		const totalRule = [({ qty, price }) => ({ total: qty * price })];

		const result = applyRules({
			newItem: { qty: 3, price: 10 },
			rules: [totalRule],
		});

		assert.equal(result.total, 30);
		assert.equal(result.qty, 3); // original fields survive
		assert.equal(result.price, 10);
	});

	test('rule result is spread — original fields not replaced', () => {
		// Rule only sets one field; others must survive
		const setStatus = [() => ({ status: 'active' })];

		const result = applyRules({
			newItem: { id: 1, name: 'Bob', status: 'pending' },
			rules: [setStatus],
		});

		assert.equal(result.id, 1);
		assert.equal(result.name, 'Bob');
		assert.equal(result.status, 'active');
	});

	test('multiple rules applied in sequence — later rule sees result of earlier rule', () => {
		// Mirrors the use-items fixture: nameLength → doubledNameLength
		const computesNameLength = [
			({ name }) => ({ nameLength: name.length }),
			({ name }) => [name],
		];
		const doublesNameLength = [
			({ nameLength }) => ({ doubledNameLength: nameLength * 2 }),
			({ nameLength }) => [nameLength],
		];

		const result = applyRules({
			newItem: { name: 'hello' },
			rules: [computesNameLength, doublesNameLength],
		});

		assert.equal(result.nameLength, 5);
		assert.equal(result.doubledNameLength, 10);
	});

	// ── depsFn skip logic ─────────────────────────────────────────────────────

	test('rule with depsFn is skipped when deps unchanged', () => {
		let runCount = 0;
		const rule = [
			({ qty, price }) => {
				runCount++;
				return { total: qty * price };
			},
			({ qty, price }) => [qty, price],
		];

		const old = { qty: 2, price: 5, total: 10 };
		const next = { qty: 2, price: 5, total: 10 }; // same values

		applyRules({ oldItem: old, newItem: next, rules: [rule] });

		assert.equal(runCount, 0, 'rule should not run when deps unchanged');
	});

	test('rule with depsFn runs when deps change', () => {
		let runCount = 0;
		const rule = [
			({ qty, price }) => {
				runCount++;
				return { total: qty * price };
			},
			({ qty, price }) => [qty, price],
		];

		const old = { qty: 2, price: 5, total: 10 };
		const next = { qty: 3, price: 5 }; // qty changed

		const result = applyRules({ oldItem: old, newItem: next, rules: [rule] });

		assert.equal(runCount, 1);
		assert.equal(result.total, 15);
	});

	test('rule with depsFn always runs when no oldItem (initial apply)', () => {
		let runCount = 0;
		const rule = [
			({ qty, price }) => {
				runCount++;
				return { total: qty * price };
			},
			({ qty, price }) => [qty, price],
		];

		// No oldItem — dep check is bypassed, rule always runs
		applyRules({ newItem: { qty: 2, price: 5 }, rules: [rule] });

		assert.equal(runCount, 1);
	});

	test('rule without depsFn always runs even when oldItem is present', () => {
		let runCount = 0;
		// No depsFn — always re-compute (e.g. addIndex pattern)
		const addIndex = [
			(_, __, index) => {
				runCount++;
				return { index };
			},
		];

		const old = { name: 'A', index: 0 };
		const next = { name: 'A' }; // name unchanged

		applyRules({ oldItem: old, newItem: next, rules: [addIndex], index: 0 });

		assert.equal(runCount, 1, 'no-depsFn rule must always run');
	});

	// ── index / oldIndex ──────────────────────────────────────────────────────

	test('passes index and oldIndex to computeFn', () => {
		// Realistic: track move history when an item changes position
		let capturedIndex, capturedOldIndex;
		const trackMove = [
			(current, old, index, oldIndex) => {
				capturedIndex = index;
				capturedOldIndex = oldIndex;
				return {};
			},
		];

		applyRules({
			oldItem: { name: 'A' },
			newItem: { name: 'A' },
			rules: [trackMove],
			index: 2,
			oldIndex: 5,
		});

		assert.equal(capturedIndex, 2);
		assert.equal(capturedOldIndex, 5);
	});

	test('oldIndex defaults to index when not provided', () => {
		let capturedOldIndex;
		const rule = [
			(current, old, index, oldIndex) => {
				capturedOldIndex = oldIndex;
				return {};
			},
		];

		applyRules({
			oldItem: { name: 'A' },
			newItem: { name: 'A' },
			rules: [rule],
			index: 3,
		});

		assert.equal(capturedOldIndex, 3);
	});

	test('depsFn receives index — rule skips when item and index both unchanged', () => {
		let runCount = 0;
		// Realistic: rule that re-computes when name or position changes
		const rule = [
			({ name }, old, index) => {
				runCount++;
				return { label: `#${index}: ${name}` };
			},
			({ name }, index) => [name, index],
		];

		const item = { name: 'Alice' };
		applyRules({
			oldItem: item,
			newItem: item,
			rules: [rule],
			index: 0,
			oldIndex: 0,
		});

		assert.equal(
			runCount,
			0,
			'rule should skip when both name and index unchanged',
		);
	});

	test('depsFn receives index — rule runs when only index changes (item moved)', () => {
		// Realistic: item reordered — index changed, content unchanged
		const results = [];
		const rule = [
			({ name }, old, index) => {
				results.push({ name, index });
				return { label: `#${index}: ${name}` };
			},
			({ name }, index) => [name, index],
		];

		const item = { name: 'Alice' };
		const result = applyRules({
			oldItem: item,
			newItem: item,
			rules: [rule],
			index: 1, // moved to position 1
			oldIndex: 0, // was at position 0
		});

		assert.equal(results.length, 1);
		assert.equal(result.label, '#1: Alice');
	});

	// ── context / oldContext ──────────────────────────────────────────────────

	test('passes context to computeFn', () => {
		// Realistic: compute totalWithVat using a VAT rate from context
		const vatRule = [
			({ price }, _old, _index, _oldIndex, context) => ({
				total: price * (1 + (context?.vatRate ?? 0) / 100),
			}),
		];

		const result = applyRules({
			newItem: { price: 100 },
			rules: [vatRule],
			context: { vatRate: 20 },
		});

		assert.equal(result.total, 120);
	});

	test('passes context to depsFn — rule skips when context and item unchanged', () => {
		let runCount = 0;
		const rule = [
			() => {
				runCount++;
				return {};
			},
			({ price }, _index, context) => [price, context?.vatRate],
		];

		const item = { price: 100 };
		const ctx = { vatRate: 20 };

		applyRules({
			oldItem: item,
			newItem: item,
			rules: [rule],
			context: ctx,
			oldContext: ctx,
		});

		assert.equal(
			runCount,
			0,
			'rule should skip when price and vatRate both unchanged',
		);
	});

	test('rule re-runs when context changes — depsFn detects vatRate change', () => {
		// Realistic: VAT rate changed on parent form — all items must re-compute
		const vatRule = [
			({ price }, _old, _index, _oldIndex, context) => ({
				total: price * (1 + (context?.vatRate ?? 0) / 100),
			}),
			({ price }, _index, context) => [price, context?.vatRate],
		];

		const item = { price: 100, total: 110 };

		const result = applyRules({
			oldItem: item,
			newItem: item,
			rules: [vatRule],
			context: { vatRate: 25 },
			oldContext: { vatRate: 10 },
		});

		assert.equal(result.total, 125);
	});

	test('rule skips when context and item both unchanged (oldContext same as context)', () => {
		let runCount = 0;
		const rule = [
			() => {
				runCount++;
				return {};
			},
			({ price }, _index, context) => [price, context?.vatRate],
		];

		const item = { price: 50 };

		applyRules({
			oldItem: item,
			newItem: item,
			rules: [rule],
			context: { vatRate: 20 },
			oldContext: { vatRate: 20 },
		});

		assert.equal(runCount, 0);
	});

	test('oldContext defaults to context — no spurious re-runs when called without oldContext', () => {
		// Callers that do not provide oldContext (normal mutations) should not
		// cause context-change re-runs
		let runCount = 0;
		const rule = [
			() => {
				runCount++;
				return {};
			},
			({ qty }, _index, context) => [qty, context?.discount],
		];

		const old = { qty: 2, discount: 0 };
		const next = { qty: 3 }; // qty changed, no oldContext provided

		applyRules({
			oldItem: old,
			newItem: next,
			rules: [rule],
			context: { discount: 10 },
			// no oldContext — defaults to context, so discount appears unchanged
		});

		// Only qty changed in deps; rule runs due to qty change not context change
		assert.equal(runCount, 1);
	});

	test('backward compat — rule with no context arg works unchanged', () => {
		const rule = [
			({ qty, price }) => ({ total: qty * price }),
			({ qty, price }) => [qty, price],
		];

		const result = applyRules({
			newItem: { qty: 4, price: 25 },
			rules: [rule],
		});

		assert.equal(result.total, 100);
	});
});

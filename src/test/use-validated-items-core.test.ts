/* eslint-disable mocha/max-top-level-suites */

import { renderHook } from '@neovici/testing';
import { assert, waitUntil } from '@open-wc/testing';
import { spy } from 'sinon';

import type { ItemRule } from '../use-items/apply-rules';
import type { Fields } from '../types';
import { ERROR } from '../validation';
import { useItemsCore } from '../use-items/use-items';
import { useValidatedForm } from '../use-validated-form';
import { useValidatedItemsCore } from '../use-items/use-validated-items-core';

// ── Types ─────────────────────────────────────────────────────────────────────

type Row = { name: string; qty?: number; scaled?: number };
type Cart = { items: Row[]; total?: number };
type Context = { factor?: number };

// ── Fields / rules ────────────────────────────────────────────────────────────

// i18next is not initialized in tests, so t('Required') is undefined;
// use a plain validator instead.
const nonEmpty = (value: string | undefined) => (value ? undefined : 'required');

const itemFields = [
	{ id: 'name', validate: nonEmpty },
	{ id: 'qty' },
	{ id: 'scaled' },
] as Fields<Row, Context>;

const formFields = [{ id: 'items' }, { id: 'total' }] as Fields<Cart, Context>;

// recomputes the cart total whenever the items array is replaced
const sumCart: ItemRule<Cart, Context> = [
	(cart) => ({
		total: (cart.items ?? []).reduce((sum, row) => sum + (row.qty ?? 0), 0),
	}),
	(cart) => [cart.items],
];

// scaled = qty * context.factor (re-runs when qty or the factor changes)
const scaleRule: ItemRule<Row, Context> = [
	(row, _old, _index, _oldIndex, context) => ({
		scaled: (row.qty ?? 0) * (context?.factor ?? 1),
	}),
	(row, _index, context) => [row.qty, context?.factor],
];

// ── Harness ───────────────────────────────────────────────────────────────────

const initialItems: Row[] = [{ name: 'start', qty: 2 }];
const context = { factor: 10 };

const renderList = async (initial = initialItems) =>
	await renderHook(
		({ initialItems, context }) => {
			const form = useValidatedForm<Cart, Context>({
				initial: { items: initialItems, total: 0 },
				fields: formFields,
				rules: [sumCart],
				context,
			});
			const list = useValidatedItemsCore(form, 'items', {
				fields: itemFields,
				rules: [scaleRule],
				context,
			});
			return { form, list };
		},
		{ initialProps: { initialItems: initial, context } },
	);

type Rendered = Awaited<ReturnType<typeof renderList>>;

suite('useValidatedItemsCore', () => {
	suite('items are form values', () => {
		let result: Rendered['result'];
		let nextUpdate: Rendered['nextUpdate'];

		setup(async () => {
			({ result, nextUpdate } = await renderList());
		});

		test('items come from form.values[id]', async () => {
			assert.equal(result.current.list.items, result.current.form.values.items);
			assert.equal(result.current.list.items.length, 1);
			assert.equal(result.current.list.items[0].name, 'start');
			assert.isUndefined(result.current.list.items[0][ERROR]);
		});

		test('update writes the row into form.values and recomputes form rules', async () => {
			result.current.list.update(0, { name: 'first', qty: 5 });
			await nextUpdate();

			assert.equal(result.current.form.values.items[0].name, 'first');
			assert.equal(result.current.list.items[0].scaled, 50);
			assert.equal(result.current.form.values.total, 5);
		});

		test('append writes rows into form.values and touches the form', async () => {
			result.current.list.append([{ name: 'added', qty: 3 }]);
			await nextUpdate();

			assert.equal(result.current.form.values.items.length, 2);
			assert.equal(result.current.list.items[1].name, 'added');
			assert.isTrue(result.current.list.touched);
			assert.isTrue(result.current.form.touched);
		});

		test('user update marks the form touched', async () => {
			assert.isFalse(result.current.form.touched);
			result.current.list.update(0, { qty: 9 });
			await nextUpdate();

			assert.isTrue(result.current.form.touched);
			assert.isTrue(result.current.list.touched);
		});
	});

	suite('validation', () => {
		let result: Rendered['result'];
		let nextUpdate: Rendered['nextUpdate'];

		setup(async () => {
			({ result, nextUpdate } = await renderList([{ name: 'ok', qty: 1 }]));
		});

		test('invalid rows get [ERROR] and list.invalid is true', async () => {
			result.current.list.update(0, { name: '' });
			await nextUpdate();

			const row = result.current.list.items[0];
			assert.isDefined(row[ERROR], 'row should have errors');
			assert.isTrue(result.current.list.invalid);
			assert.isTrue(result.current.form.touched);
		});

		test('rows are revalidated when context changes', async () => {
			const { result, rerender } = await renderList([
				{ name: '', qty: 1 },
			]);

			await waitUntil(() => result.current.list.invalid, 'rows validated at mount');

			await rerender({ initialItems: [], context: { factor: 10 } });
			result.current.list.update(0, { name: 'fixed' });
			await waitUntil(() => !result.current.list.invalid);
			assert.isDefined(result.current.list.items[0].name);
		});
	});

	suite('reset', () => {
		let result: Rendered['result'];
		let nextUpdate: Rendered['nextUpdate'];

		setup(async () => {
			({ result, nextUpdate } = await renderList([{ name: 'start', qty: 1 }]));
		});

		test('form.onReset clears rows and the list sees them empty', async () => {
			// form starts with an empty items list; user appends a row.
			const { result: res, nextUpdate: next } = await renderList([]);
			res.current.list.append([{ name: 'added', qty: 3 }]);
			await next();
			assert.equal(res.current.form.values.items.length, 1);
			assert.isTrue(res.current.form.touched);

			res.current.form.onReset();
			await next();

			assert.equal(res.current.form.values.items.length, 0);
			assert.equal(res.current.list.items.length, 0);
			assert.isFalse(res.current.form.touched);
		});

		test('form rules recompute after form.onReset', async () => {
			result.current.list.update(0, { qty: 7 });
			await nextUpdate();
			assert.equal(result.current.form.values.total, 7);

			result.current.form.onReset();
			await nextUpdate();
			assert.equal(result.current.form.values.total, 1);
			assert.equal(result.current.list.items[0].name, 'start');
		});

		test('list.reset() restores the initial rows', async () => {
			result.current.list.append([{ name: 'added' }]);
			await nextUpdate();
			assert.equal(result.current.list.items.length, 2);

			result.current.list.reset();
			await nextUpdate();

			assert.equal(result.current.form.values.items.length, 1);
			assert.equal(result.current.list.items[0].name, 'start');
			assert.isFalse(result.current.list.invalid);
		});
	});

	suite('context', () => {
		test('re-applied rows do not touch the form', async () => {
			const { result, rerender } = await renderList();

			assert.isFalse(result.current.form.touched, 'fresh form is untouched');
			await waitUntil(
				() => result.current.list.items[0].scaled === 20,
				'initial rows validated',
			);

			await rerender({ initialItems, context: { factor: 20 } });
			await waitUntil(
				() => result.current.list.items[0].scaled === 40,
				'rows should be recomputed for the new context',
			);
			assert.equal(result.current.list.items[0].scaled, 40);
			assert.equal(result.current.form.values.total, 2);
			assert.isFalse(
				result.current.form.touched,
				'fresh form must stay untouched after a context change',
			);
		});
	});
});

suite('setItems userInitiated (useItemsCore)', () => {
	test('context re-apply calls setItems with userInitiated: false', async () => {
		const setItems = spy();
		const items = [{ name: 'a' }];

		const { rerender } = await renderHook(
			({ context }) =>
				useItemsCore<Row>({
					items,
					setItems,
					initial: items,
					context,
				}),
			{ initialProps: { context } },
		);

		await rerender({ context: { factor: 2 } });
		await waitUntil(() => setItems.callCount > 0);

		assert.equal(setItems.callCount, 1, 'only the context re-apply runs');
		assert.equal(typeof setItems.firstCall.args[0], 'function');
		assert.deepEqual(setItems.firstCall.args[1], { userInitiated: false });
	});

	test('user edits call setItems with userInitiated: true', async () => {
		const setItems = spy();
		const items = [{ name: 'a' }];

		const { result } = await renderHook(() =>
			useItemsCore<Row>({
				items,
				setItems,
				initial: items,
			}),
		);

		result.current.update(0, { name: 'b' });
		result.current.remove(0);
		result.current.clear();

		assert.equal(setItems.callCount, 3);
		assert.equal(typeof setItems.firstCall.args[0], 'function');
		assert.deepEqual(setItems.firstCall.args[1], { userInitiated: true });
		assert.deepEqual(setItems.secondCall.args[1], { userInitiated: true });
		assert.deepEqual(setItems.thirdCall.args[1], { userInitiated: true });
	});
});

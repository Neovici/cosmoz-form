/* eslint-disable mocha/max-top-level-suites */

import { renderHook } from '@neovici/testing';
import { assert, waitUntil } from '@open-wc/testing';

import { useValidatedForm } from '../use-validated-form';
import { required, tooLong, tooShort } from '../validation';

suite('useValidatedForm', () => {
	let result;
	let nextUpdate;

	setup(async () => {
		const initial = { name: 'Foo', lastName: 'Barbara' };

		const fields = [
			{ id: 'name', validate: [required, tooShort(5)] },
			{ id: 'lastName', validate: [required, tooLong(5)] },
		];

		({ result, nextUpdate } = await renderHook(
			({ fields, initial }) => useValidatedForm({ fields, initial }),
			{ initialProps: { fields, initial } },
		));
	});

	test('validate the initial data', async () => {
		assert.isTrue(result.current.invalid);
		assert.equal(
			result.current.fields[0].error,
			'Must have at least {0} characters',
		);
		assert.equal(
			result.current.fields[1].error,
			'Must have maximum {0} characters',
		);
	});

	test('validate after update', async () => {
		result.current.onValues({ name: 'Feefee', lastName: 'Bar' });
		await nextUpdate();
		assert.isFalse(result.current.invalid);
	});
});

suite('useValidatedForm with field rules', () => {
	let result;
	let nextUpdate;

	setup(async () => {
		let id = 0;
		const initial = { name: 'Foo', lastName: 'Bar' },
			computeFullName = [
				({ name, lastName }) => ({
					fullName: [name, lastName].filter(Boolean).join(' '),
				}),
				({ name, lastName }) => [name, lastName],
			],
			oneTimeRule = [() => ({ id: ++id }), () => []];

		const fields = [
			{ id: 'id', rules: [oneTimeRule], validate: required },
			{ id: 'name', rules: [computeFullName], validate: tooShort(5) },
			{ id: 'lastName', validate: required },
			{ id: 'fullName', validate: required },
		];

		({ result, nextUpdate } = await renderHook(
			({ fields, initial }) => useValidatedForm({ fields, initial }),
			{ initialProps: { fields, initial } },
		));
	});

	test('initialize with data and rules', async () => {
		assert.equal(result.current.values.fullName, 'Foo Bar');
		assert.equal(
			result.current.values.id,
			1,
			'one time rules are applied on initialization',
		);

		assert.isTrue(result.current.invalid);
		assert.equal(
			result.current.fields[1].error,
			'Must have at least {0} characters',
		);
	});

	suite('onValues', () => {
		test('update values', async () => {
			result.current.onValues({ name: 'Fee', job: 'Manager' });
			await nextUpdate();
			assert.equal(result.current.values.fullName, 'Fee');
			assert.isUndefined(
				result.current.values.id,
				'one time rules are not applied by onValues',
			);

			assert.isTrue(result.current.invalid);
			assert.equal(result.current.fields[0].error, 'Required');
			assert.equal(
				result.current.fields[1].error,
				'Must have at least {0} characters',
			);
			assert.equal(result.current.fields[2].error, 'Required');
		});

		test('update values with function', async () => {
			result.current.onValues((values) => ({
				...values,
				name: values.name + 'Fee',
				job: 'Manager',
			}));
			await nextUpdate();
			assert.equal(result.current.values.fullName, 'FooFee Bar');
			assert.equal(
				result.current.values.id,
				1,
				'one time rules are not applied by onValues',
			);

			assert.isFalse(result.current.invalid);
		});
	});

	suite('onReset', () => {
		test('resets to initial value and does not re-apply rules', async () => {
			result.current.onValues({ name: 'Fee', job: 'Manager' });
			await nextUpdate();
			result.current.onReset();
			await nextUpdate();
			assert.equal(result.current.values.fullName, 'Foo Bar');
			assert.equal(result.current.values.id, 1);
		});
	});

	suite('onChange', () => {
		test('applies rules to all changes', async () => {
			result.current.onChange({ name: 'Fee', job: 'Manager' });
			await nextUpdate();
			assert.equal(result.current.values.fullName, 'Fee Bar');
			assert.equal(result.current.values.id, 1);
		});
	});

	suite('touched', () => {
		test('is not touched before there are any changes', () => {
			assert.isFalse(result.current.touched);
		});
	});
});

suite('useValidatedForm with context', () => {
	test('field validate receives context as 4th arg', async () => {
		const received = [];
		const fields = [
			{
				id: 'amount',
				validate: (value, _values, _field, context) => {
					received.push(context);
					return false;
				},
			},
		];
		const ctx = { currency: 'EUR' };

		await renderHook(() =>
			useValidatedForm({
				fields,
				initial: { amount: 100 },
				context: ctx,
			}),
		);

		assert.isTrue(received.length > 0, 'validate should have been called');
		assert.deepEqual(received[0], { currency: 'EUR' });
	});

	test('validate error uses context constraint', async () => {
		const fields = [
			{
				id: 'deliveryDate',
				validate: (value, _values, _field, context) =>
					value < (context?.minDate ?? '') ? 'Too early' : false,
			},
		];
		const ctx = { minDate: '2024-06-01' };

		const { result } = await renderHook(() =>
			useValidatedForm({
				fields,
				initial: { deliveryDate: '2024-01-01' },
				context: ctx,
			}),
		);

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
		const ctx = { minDate: '2024-06-01' };

		const { result } = await renderHook(() =>
			useValidatedForm({
				fields,
				initial: { deliveryDate: '2024-12-01' },
				context: ctx,
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
		const ctx = { prefix: 'Dr' };

		await renderHook(() =>
			useValidatedForm({
				fields: [{ id: 'name' }],
				initial: { name: 'Alice' },
				rules,
				context: ctx,
			}),
		);

		assert.isTrue(received.length > 0);
		assert.deepEqual(received[0], { prefix: 'Dr' });
	});

	test('context is exposed on the returned form object', async () => {
		const ctx = { tenant: 'acme' };

		const { result } = await renderHook(() =>
			useValidatedForm({
				fields: [{ id: 'name' }],
				initial: { name: 'Alice' },
				context: ctx,
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

	test('context change causes validate to see new context', async () => {
		const fields = [
			{
				id: 'deliveryDate',
				validate: (value, _values, _field, context) =>
					value < (context?.minDate ?? '') ? 'Too early' : false,
			},
		];

		const { result, rerender } = await renderHook(
			({ ctx }) =>
				useValidatedForm({
					fields,
					initial: { deliveryDate: '2024-01-01' },
					context: ctx,
				}),
			{ initialProps: { ctx: { minDate: '2024-06-01' } } },
		);

		assert.isTrue(result.current.invalid);

		await rerender({ ctx: { minDate: '2023-01-01' } });

		assert.isFalse(result.current.invalid);
	});

	test('context change triggers rule re-run on form', async () => {
		const rules = [
			[
				(current, _old, _index, _oldIndex, context) => ({
					total: current.price * (1 + (context?.vat ?? 0) / 100),
				}),
				(_current, _index, context) => [context?.vat],
			],
		];

		const { result, rerender } = await renderHook(
			({ ctx }) =>
				useValidatedForm({
					fields: [{ id: 'price' }, { id: 'total' }],
					initial: { price: 100, total: 0 },
					rules,
					context: ctx,
				}),
			{ initialProps: { ctx: { vat: 0 } } },
		);

		assert.equal(result.current.values.total, 100);

		await rerender({ ctx: { vat: 20 } });
		await waitUntil(
			() => result.current.values.total === 120,
			'total should update when vat context changes',
		);

		assert.equal(result.current.values.total, 120);
	});
});

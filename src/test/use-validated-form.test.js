import { assert, nextFrame } from '@open-wc/testing';
import { renderHook } from '../../../testing/render-hook';

import { useValidatedForm } from '../use-validated-form';
import { required, tooLong, tooShort } from '../validation';

suite('useValidatedForm', () => {
	let result;

	setup(async () => {
		const initial = { name: 'Foo', lastName: 'Barbara' };

		const fields = [
			{ id: 'name', validate: [required, tooShort(5)] },
			{ id: 'lastName', validate: [required, tooLong(5)] },
		];

		result = await renderHook(useValidatedForm, { fields, initial });
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
		await nextFrame();
		assert.isFalse(result.current.invalid);
	});
});

suite('useValidatedForm with field rules', () => {
	let result;

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

		result = await renderHook(useValidatedForm, { fields, initial });
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
			await nextFrame();
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
			await nextFrame();
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
			await nextFrame();
			result.current.onReset();
			await nextFrame();
			assert.equal(result.current.values.fullName, 'Foo Bar');
			assert.equal(result.current.values.id, 1);
		});
	});

	suite('onChange', () => {
		test('applies rules to all changes', async () => {
			result.current.onChange({ name: 'Fee', job: 'Manager' });
			await nextFrame();
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

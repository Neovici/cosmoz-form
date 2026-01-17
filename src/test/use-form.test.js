import { assert, nextFrame } from '@open-wc/testing';
import { renderHook } from '../../../testing/render-hook';

import { touched } from '../touch';
import { useForm } from '../use-form';
import { useFormCore } from '../use-form-core';

suite('useFormCore', () => {
	let result;
	let state;
	let setState;

	setup(async () => {
		const initial = { name: 'Foo', lastName: 'Bar' };
		state = [initial, initial];
		setState = (valueOrFn) =>
			(state = typeof valueOrFn === 'function' ? valueOrFn(state) : valueOrFn);

		result = await renderHook(useFormCore, state, setState);
	});

	test('initialize with data', async () => {
		assert.equal(result.current.values.name, 'Foo');
		assert.equal(result.current.values.lastName, 'Bar');
	});

	suite('onValues', () => {
		test('update values', async () => {
			result.current.onValues({ name: 'Fee', job: 'Manager' });
			assert.equal(state[1].name, 'Fee');
			assert.equal(state[1].job, 'Manager');
			assert.isUndefined(state[1].lastName);
		});

		test('update values with function', async () => {
			result.current.onValues((values) => ({
				...values,
				name: values.name + 'Fee',
				job: 'Manager',
			}));
			assert.equal(state[1].name, 'FooFee');
			assert.equal(state[1].job, 'Manager');
			assert.equal(state[1].lastName, 'Bar');
		});
	});

	suite('onReset', () => {
		test('resets to initial value', async () => {
			result.current.onValues({ name: 'Fee', job: 'Manager' });
			result.current.onReset();
			assert.equal(state[1].name, 'Foo');
			assert.equal(state[1].lastName, 'Bar');
			assert.isUndefined(state[1].job);
		});
	});

	suite('onChange', () => {
		test('updates part of the values', async () => {
			result.current.onChange({ name: 'Fee', job: 'Manager' });
			assert.equal(state[1].name, 'Fee');
			assert.equal(state[1].lastName, 'Bar');
			assert.equal(state[1].job, 'Manager');
		});

		test('updates part of the values with a function', async () => {
			result.current.onChange((value) => ({
				name: value.name + 'Fee',
				job: 'Manager',
			}));
			assert.equal(state[1].name, 'FooFee');
			assert.equal(state[1].lastName, 'Bar');
			assert.equal(state[1].job, 'Manager');
		});
	});

	suite('touched', () => {
		test('untouched initially', () => {
			assert.isFalse(touched(state[1]));
		});

		test('touched after onValues', async () => {
			result.current.onValues({ name: 'Fee', job: 'Manager' });
			assert.isTrue(touched(state[1]));
		});

		test('untouched after reset', async () => {
			result.current.onValues({ name: 'Fee', job: 'Manager' });
			result.current.onReset();
			assert.isFalse(touched(state[1]));
		});
	});
});

suite('useForm', () => {
	let result;

	setup(async () => {
		const initial = { name: 'Foo', lastName: 'Bar' };

		result = await renderHook(useForm, initial);
	});

	test('initialize with data', async () => {
		assert.equal(result.current.values.name, 'Foo');
		assert.equal(result.current.values.lastName, 'Bar');
	});

	suite('onValues', () => {
		test('update values', async () => {
			result.current.onValues({ name: 'Fee', job: 'Manager' });
			await nextFrame();
			assert.equal(result.current.values.name, 'Fee');
			assert.equal(result.current.values.job, 'Manager');
			assert.isUndefined(result.current.values.lastName);
		});

		test('update values with function', async () => {
			result.current.onValues((values) => ({
				...values,
				name: values.name + 'Fee',
				job: 'Manager',
			}));
			await nextFrame();
			assert.equal(result.current.values.name, 'FooFee');
			assert.equal(result.current.values.job, 'Manager');
			assert.equal(result.current.values.lastName, 'Bar');
		});
	});

	suite('onReset', () => {
		test('resets to initial value', async () => {
			result.current.onValues({ name: 'Fee', job: 'Manager' });
			await nextFrame();
			result.current.onReset();
			await nextFrame();
			assert.equal(result.current.values.name, 'Foo');
			assert.equal(result.current.values.lastName, 'Bar');
			assert.isUndefined(result.current.values.job);
		});
	});

	suite('onChange', () => {
		test('updates part of the values', async () => {
			result.current.onChange({ name: 'Fee', job: 'Manager' });
			await nextFrame();
			assert.equal(result.current.values.name, 'Fee');
			assert.equal(result.current.values.lastName, 'Bar');
			assert.equal(result.current.values.job, 'Manager');
		});

		test('updates part of the values with a function', async () => {
			result.current.onChange((value) => ({
				name: value.name + 'Fee',
				job: 'Manager',
			}));
			await nextFrame();
			assert.equal(result.current.values.name, 'FooFee');
			assert.equal(result.current.values.lastName, 'Bar');
			assert.equal(result.current.values.job, 'Manager');
		});
	});

	suite('touched', () => {
		test('untouched initially', () => {
			assert.isFalse(result.current.touched);
		});

		test('touched after onValues', async () => {
			result.current.onValues({ name: 'Fee', job: 'Manager' });
			await nextFrame();
			assert.isTrue(result.current.touched);
		});

		test('untouched after reset', async () => {
			result.current.onValues({ name: 'Fee', job: 'Manager' });
			await nextFrame();
			result.current.onReset();
			await nextFrame();
			assert.isFalse(result.current.touched);
		});
	});
});

suite('useForm with rules', () => {
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
			oneTimeRule = [() => ({ id: ++id }), () => []],
			rules = [computeFullName, oneTimeRule];

		result = await renderHook(useForm, initial, rules);
	});

	test('initialize with data and rules', async () => {
		assert.equal(result.current.values.fullName, 'Foo Bar');
		assert.equal(
			result.current.values.id,
			1,
			'one time rules are applied on initialization',
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

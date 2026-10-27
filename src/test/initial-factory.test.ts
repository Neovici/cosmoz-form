import { renderHook } from '@neovici/testing';
import { assert } from '@open-wc/testing';
import { spy } from 'sinon';

import { useForm } from '../use-form';
import { useValidatedForm } from '../use-validated-form';

type TestForm = { name: string };

suite('initial as a factory', () => {
	suite('useValidatedForm', () => {
		test('factory is invoked exactly once across re-renders', async () => {
			const makeInitial = spy((): TestForm => ({ name: 'Foo' }));

			const { result, nextUpdate, rerender } = await renderHook(
				({ initial }: { initial: () => TestForm }) =>
					useValidatedForm<TestForm>({ fields: [{ id: 'name' }], initial }),
				{ initialProps: { initial: makeInitial } },
			);

			assert.equal(result.current.values.name, 'Foo');
			assert.equal(makeInitial.callCount, 1);

			// re-renders triggered by user input
			result.current.onValues({ name: 'Feefee' });
			await nextUpdate();
			assert.equal(result.current.values.name, 'Feefee');

			result.current.onChange({ name: 'Bar' });
			await nextUpdate();
			assert.equal(result.current.values.name, 'Bar');

			assert.equal(
				makeInitial.callCount,
				1,
				'initial factory is not re-invoked on re-renders',
			);

			// re-render with fresh props wrapping the same factory
			await rerender({ initial: makeInitial });
			assert.equal(result.current.values.name, 'Bar');
			assert.equal(makeInitial.callCount, 1);

			result.current.onReset();
			await nextUpdate();
			assert.equal(result.current.values.name, 'Foo');
			assert.equal(makeInitial.callCount, 1);
		});

		test('plain constant initial still works', async () => {
			const { result } = await renderHook(() =>
				useValidatedForm<TestForm>({
					fields: [{ id: 'name' }],
					initial: { name: 'Foo' },
				}),
			);

			assert.deepEqual(result.current.values, { name: 'Foo' });
		});
	});

	suite('useForm', () => {
		test('factory is invoked exactly once across re-renders', async () => {
			const makeInitial = spy((): TestForm => ({ name: 'Foo' }));

			const { result, nextUpdate } = await renderHook(
				({ initial }: { initial: () => TestForm }) =>
					useForm<TestForm>(initial),
				{ initialProps: { initial: makeInitial } },
			);

			assert.equal(result.current.values.name, 'Foo');
			assert.equal(makeInitial.callCount, 1);

			result.current.onValues({ name: 'Feefee' });
			await nextUpdate();
			assert.equal(result.current.values.name, 'Feefee');

			result.current.onReset();
			await nextUpdate();
			assert.equal(result.current.values.name, 'Foo');
			assert.equal(makeInitial.callCount, 1);
		});

		test('plain constant initial still works', async () => {
			const { result } = await renderHook(() =>
				useForm<TestForm>({ name: 'Foo' }),
			);

			assert.deepEqual(result.current.values, { name: 'Foo' });
		});
	});
});

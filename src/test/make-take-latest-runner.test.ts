import { assert } from '@open-wc/testing';
import { spy } from 'sinon';

import { delay, type AsyncContext, type SagaCompute } from '../async-rule';
import { makeTakeLatestRunner } from '../make-take-latest-runner';

// ── Helpers ───────────────────────────────────────────────────────────────────

type S = Record<string, unknown>;

const noop = () => {
	/* intentionally empty */
};

const returns =
	(value: Partial<S>): SagaCompute<S> =>
	async () =>
		value;

// ── Suite ─────────────────────────────────────────────────────────────────────

suite('makeTakeLatestRunner', () => {
	test('run() resolves with fn return value', async () => {
		const runner = makeTakeLatestRunner<S>();
		const result = await runner.run(returns({ name: 'Alice' }), {}, noop);
		assert.deepEqual(result, { name: 'Alice' });
	});

	test('second run() aborts the first before starting', async () => {
		const runner = makeTakeLatestRunner<S>();
		const firstCompleted = spy();

		const slow: SagaCompute<S> = async (_, { signal }) => {
			await delay(signal, 200);
			firstCompleted();
			return { from: 'first' };
		};
		const fast: SagaCompute<S> = async (_, { signal }) => {
			await delay(signal, 10);
			return { from: 'second' };
		};

		const first = runner.run(slow, {}, noop);
		const second = runner.run(fast, {}, noop);

		const [firstResult, secondResult] = await Promise.all([first, second]);

		assert.isNull(firstResult, 'first run is cancelled');
		assert.deepEqual(secondResult, { from: 'second' });
		assert.isFalse(firstCompleted.called, 'first body should not complete');
	});

	test('cancel() aborts current run, resolves null', async () => {
		const runner = makeTakeLatestRunner<S>();

		const slow: SagaCompute<S> = async (_, { signal }) => {
			await delay(signal, 5000);
			return {};
		};

		const promise = runner.run(slow, {}, noop);
		runner.cancel();
		const result = await promise;
		assert.isNull(result);
	});

	test('non-abort errors are re-thrown (not swallowed)', async () => {
		const runner = makeTakeLatestRunner<S>();

		const boom: SagaCompute<S> = async () => {
			throw new Error('network error');
		};

		try {
			await runner.run(boom, {}, noop);
			assert.fail('should have thrown');
		} catch (e) {
			assert.instanceOf(e, Error);
			assert.equal((e as Error).message, 'network error');
		}
	});

	test('AbortErrors are swallowed and resolve null', async () => {
		const runner = makeTakeLatestRunner<S>();

		const aborting: SagaCompute<S> = async (_, { signal }) => {
			await delay(signal, 5000);
			return {};
		};

		const promise = runner.run(aborting, {}, noop);
		runner.cancel();
		const result = await promise;
		assert.isNull(result);
	});

	test('ctx.signal is the live AbortController signal', async () => {
		const runner = makeTakeLatestRunner<S>();
		let receivedSignal: AbortSignal | undefined;

		const captureSignal: SagaCompute<S> = async (_, { signal }) => {
			receivedSignal = signal;
			return {};
		};

		await runner.run(captureSignal, {}, noop);
		assert.instanceOf(receivedSignal, AbortSignal);
	});

	test('ctx.update calls onIntermediate immediately', async () => {
		const runner = makeTakeLatestRunner<S>();
		const patches: Partial<S>[] = [];

		const withUpdate: SagaCompute<S> = async (_, { update }) => {
			update({ status: 'loading' });
			return { status: 'done' };
		};

		const result = await runner.run(withUpdate, {}, (p) => patches.push(p));
		assert.deepEqual(patches, [{ status: 'loading' }]);
		assert.deepEqual(result, { status: 'done' });
	});

	test('ctx.index is forwarded from opts', async () => {
		const runner = makeTakeLatestRunner<S>();
		let receivedIndex: number | undefined;

		const captureIndex: SagaCompute<S> = async (_, ctx: AsyncContext<S>) => {
			receivedIndex = ctx.index;
			return {};
		};

		await runner.run(captureIndex, {}, noop, { index: 3 });
		assert.equal(receivedIndex, 3);
	});

	test('values snapshot is passed to fn', async () => {
		const runner = makeTakeLatestRunner<S>();
		let receivedValues: S | undefined;

		const captureValues: SagaCompute<S> = async (values) => {
			receivedValues = values;
			return {};
		};

		await runner.run(captureValues, { name: 'Bob' }, noop);
		assert.deepEqual(receivedValues, { name: 'Bob' });
	});
});

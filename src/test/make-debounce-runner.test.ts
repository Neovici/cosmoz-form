import { assert } from '@open-wc/testing';
import { spy, useFakeTimers } from 'sinon';

import { delay, type SagaCompute } from '../async-rule';
import { makeDebounceRunner } from '../make-debounce-runner';

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

suite('makeDebounceRunner', () => {
	test('run() resolves with fn return value after debounce delay', async () => {
		const clock = useFakeTimers();
		try {
			const runner = makeDebounceRunner<S>(50);
			const promise = runner.run(returns({ name: 'Alice' }), {}, noop);
			await clock.tickAsync(50);
			const result = await promise;
			assert.deepEqual(result, { name: 'Alice' });
		} finally {
			clock.restore();
		}
	});

	test('second run() within window resolves first as null and resets timer', async () => {
		const clock = useFakeTimers();
		try {
			const runner = makeDebounceRunner<S>(50);

			const first = runner.run(returns({ from: 'first' }), {}, noop);
			await clock.tickAsync(30);
			const second = runner.run(returns({ from: 'second' }), {}, noop);
			await clock.tickAsync(50);

			const [firstResult, secondResult] = await Promise.all([first, second]);
			assert.isNull(firstResult, 'debounced-away run() resolves null');
			assert.deepEqual(secondResult, { from: 'second' });
		} finally {
			clock.restore();
		}
	});

	test('only the last run() in a burst executes; earlier ones resolve null', async () => {
		const clock = useFakeTimers();
		try {
			const runner = makeDebounceRunner<S>(50);
			const bodySpy = spy();

			const tracked =
				(tag: string): SagaCompute<S> =>
				async () => {
					bodySpy(tag);
					return { tag };
				};

			const p1 = runner.run(tracked('a'), {}, noop);
			const p2 = runner.run(tracked('b'), {}, noop);
			const p3 = runner.run(tracked('c'), {}, noop);
			await clock.tickAsync(50);

			const [r1, r2, r3] = await Promise.all([p1, p2, p3]);
			assert.isNull(r1);
			assert.isNull(r2);
			assert.deepEqual(r3, { tag: 'c' });
			assert.equal(bodySpy.callCount, 1);
			assert.equal(bodySpy.firstCall.args[0], 'c');
		} finally {
			clock.restore();
		}
	});

	test('fn body runs once when calls stop arriving', async () => {
		const clock = useFakeTimers();
		try {
			const runner = makeDebounceRunner<S>(50);
			const bodySpy = spy();

			const counted: SagaCompute<S> = async (_, { signal }) => {
				bodySpy();
				await delay(signal, 10);
				return { counted: true };
			};

			const p = runner.run(counted, {}, noop);
			await clock.tickAsync(60);
			const result = await p;
			assert.deepEqual(result, { counted: true });
			assert.equal(bodySpy.callCount, 1);
		} finally {
			clock.restore();
		}
	});

	test('cancel() before timer fires resolves pending run() as null', async () => {
		const clock = useFakeTimers();
		try {
			const runner = makeDebounceRunner<S>(50);

			const promise = runner.run(returns({ x: 1 }), {}, noop);
			runner.cancel();
			await clock.tickAsync(50);
			const result = await promise;
			assert.isNull(result);
		} finally {
			clock.restore();
		}
	});

	test('cancel() while fn is in-flight resolves run() as null', async () => {
		const clock = useFakeTimers();
		try {
			const runner = makeDebounceRunner<S>(50);

			const slow: SagaCompute<S> = async (_, { signal }) => {
				await delay(signal, 5000);
				return { slow: true };
			};

			const promise = runner.run(slow, {}, noop);
			await clock.tickAsync(50); // let debounce fire so fn starts
			runner.cancel();
			await clock.tickAsync(5000);
			const result = await promise;
			assert.isNull(result);
		} finally {
			clock.restore();
		}
	});

	test('non-abort errors from the fn are re-thrown', async () => {
		const clock = useFakeTimers();
		try {
			const runner = makeDebounceRunner<S>(50);

			const boom: SagaCompute<S> = async () => {
				throw new Error('network error');
			};

			const promise = runner.run(boom, {}, noop);
			await clock.tickAsync(50);

			try {
				await promise;
				assert.fail('should have thrown');
			} catch (e) {
				assert.instanceOf(e, Error);
				assert.equal((e as Error).message, 'network error');
			}
		} finally {
			clock.restore();
		}
	});

	test('ctx.update calls onIntermediate during fn execution', async () => {
		const clock = useFakeTimers();
		try {
			const runner = makeDebounceRunner<S>(50);
			const patches: Partial<S>[] = [];

			const withUpdate: SagaCompute<S> = async (_, { update }) => {
				update({ status: 'loading' });
				return { status: 'done' };
			};

			const promise = runner.run(withUpdate, {}, (p) => patches.push(p));
			await clock.tickAsync(50);
			const result = await promise;
			assert.deepEqual(patches, [{ status: 'loading' }]);
			assert.deepEqual(result, { status: 'done' });
		} finally {
			clock.restore();
		}
	});

	test('values snapshot is passed to fn', async () => {
		const clock = useFakeTimers();
		try {
			const runner = makeDebounceRunner<S>(50);
			let receivedValues: S | undefined;

			const captureValues: SagaCompute<S> = async (values) => {
				receivedValues = values;
				return {};
			};

			const promise = runner.run(captureValues, { city: 'Oslo' }, noop);
			await clock.tickAsync(50);
			await promise;
			assert.deepEqual(receivedValues, { city: 'Oslo' });
		} finally {
			clock.restore();
		}
	});
});

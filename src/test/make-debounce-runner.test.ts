import { assert } from '@open-wc/testing';
import { spy, useFakeTimers } from 'sinon';

import { delay, type AsyncRule } from '../async-rule';
import {
	makeDebounceRunner,
	type DebounceRunner,
} from '../make-debounce-runner';

// ── Helpers ───────────────────────────────────────────────────────────────────

type S = Record<string, unknown>;

const noop = () => {
	/* intentionally empty */
};

const returns =
	(value: Partial<S>): AsyncRule<S> =>
	async () =>
		value;

// ── Suite ─────────────────────────────────────────────────────────────────────

suite('makeDebounceRunner', () => {
	let clock: ReturnType<typeof useFakeTimers>;
	let runner: DebounceRunner<S>;

	setup(() => {
		clock = useFakeTimers();
		runner = makeDebounceRunner<S>(50);
	});

	teardown(() => {
		runner.cancel();
		clock.restore();
	});

	test('run() resolves with fn return value after debounce delay', async () => {
		const promise = runner.run(returns({ name: 'Alice' }), {}, noop);
		await clock.tickAsync(50);
		const result = await promise;
		assert.deepEqual(result, { name: 'Alice' });
	});

	test('second run() within window resolves first as null and resets timer', async () => {
		const first = runner.run(returns({ from: 'first' }), {}, noop);
		await clock.tickAsync(30);
		const second = runner.run(returns({ from: 'second' }), {}, noop);
		await clock.tickAsync(50);

		const [firstResult, secondResult] = await Promise.all([first, second]);
		assert.isNull(firstResult, 'debounced-away run() resolves null');
		assert.deepEqual(secondResult, { from: 'second' });
	});

	test('only the last run() in a burst executes; earlier ones resolve null', async () => {
		const bodySpy = spy();

		const tracked =
			(tag: string): AsyncRule<S> =>
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
	});

	test('fn body runs once when calls stop arriving', async () => {
		const bodySpy = spy();

		const counted: AsyncRule<S> = async (_, { signal }) => {
			bodySpy();
			await delay(signal, 10);
			return { counted: true };
		};

		const p = runner.run(counted, {}, noop);
		await clock.tickAsync(60);
		const result = await p;
		assert.deepEqual(result, { counted: true });
		assert.equal(bodySpy.callCount, 1);
	});

	test('cancel() before timer fires resolves pending run() as null', async () => {
		const promise = runner.run(returns({ x: 1 }), {}, noop);
		runner.cancel();
		await clock.tickAsync(50);
		const result = await promise;
		assert.isNull(result);
	});

	test('cancel() while fn is in-flight resolves run() as null', async () => {
		const slow: AsyncRule<S> = async (_, { signal }) => {
			await delay(signal, 5000);
			return { slow: true };
		};

		const promise = runner.run(slow, {}, noop);
		await clock.tickAsync(50); // let debounce fire so fn starts
		runner.cancel();
		await clock.tickAsync(5000);
		const result = await promise;
		assert.isNull(result);
	});

	test('non-abort errors from the fn are re-thrown', async () => {
		const boom: AsyncRule<S> = async () => {
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
	});

	test('opts.update calls onIntermediate during fn execution', async () => {
		const patches: Partial<S>[] = [];

		const withUpdate: AsyncRule<S> = async (_, { update }) => {
			update({ status: 'loading' });
			return { status: 'done' };
		};

		const promise = runner.run(withUpdate, {}, (p) => patches.push(p));
		await clock.tickAsync(50);
		const result = await promise;
		assert.deepEqual(patches, [{ status: 'loading' }]);
		assert.deepEqual(result, { status: 'done' });
	});

	test('values snapshot is passed to fn', async () => {
		let receivedValues: S | undefined;

		const captureValues: AsyncRule<S> = async (values) => {
			receivedValues = values;
			return {};
		};

		const promise = runner.run(captureValues, { city: 'Oslo' }, noop);
		await clock.tickAsync(50);
		await promise;
		assert.deepEqual(receivedValues, { city: 'Oslo' });
	});
});

import { assert } from '@open-wc/testing';
import { spy, useFakeTimers } from 'sinon';

import { call, delay, type Effect } from '../async-rule';
import { makeDebounceRunner } from '../make-debounce-runner';

// ── Helpers ───────────────────────────────────────────────────────────────────

type S = Record<string, unknown>;
type Gen = AsyncGenerator<Effect<S>, Partial<S>>;

const noop = () => {
	/* intentionally empty */
};
const getState = () => ({}) as S;

// eslint-disable-next-line require-yield
async function* returns(value: Partial<S>): Gen {
	return value;
}

// ── Suite ─────────────────────────────────────────────────────────────────────

suite('makeDebounceRunner', () => {
	test('run() resolves with the saga return value after debounce delay', async () => {
		const clock = useFakeTimers();
		try {
			const runner = makeDebounceRunner<S>(50);
			const promise = runner.run(returns({ name: 'Alice' }), noop, getState);
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

			const first = runner.run(returns({ from: 'first' }), noop, getState);
			// Advance partway — still within debounce window
			await clock.tickAsync(30);
			const second = runner.run(returns({ from: 'second' }), noop, getState);
			// Advance the full debounce window from the second run()
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

			// eslint-disable-next-line require-yield
			async function* tracked(tag: string): Gen {
				bodySpy(tag);
				return { tag };
			}

			const p1 = runner.run(tracked('a'), noop, getState);
			const p2 = runner.run(tracked('b'), noop, getState);
			const p3 = runner.run(tracked('c'), noop, getState);
			await clock.tickAsync(50);

			const [r1, r2, r3] = await Promise.all([p1, p2, p3]);
			assert.isNull(r1);
			assert.isNull(r2);
			assert.deepEqual(r3, { tag: 'c' });
			// Only the last saga body should have run
			assert.equal(bodySpy.callCount, 1);
			assert.equal(bodySpy.firstCall.args[0], 'c');
		} finally {
			clock.restore();
		}
	});

	test('saga body runs once when calls stop arriving', async () => {
		const clock = useFakeTimers();
		try {
			const runner = makeDebounceRunner<S>(50);
			const bodySpy = spy();

			async function* counted(): Gen {
				bodySpy();
				yield delay(10);
				return { counted: true };
			}

			const p = runner.run(counted(), noop, getState);
			// Advance past debounce + saga delay
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

			const promise = runner.run(returns({ x: 1 }), noop, getState);
			// Cancel before the debounce window expires
			runner.cancel();
			await clock.tickAsync(50);
			const result = await promise;
			assert.isNull(result);
		} finally {
			clock.restore();
		}
	});

	test('cancel() while saga is in-flight resolves run() as null', async () => {
		const clock = useFakeTimers();
		try {
			const runner = makeDebounceRunner<S>(50);

			async function* slow(): Gen {
				yield delay(5000);
				return { slow: true };
			}

			const promise = runner.run(slow(), noop, getState);
			// Let the debounce fire so the saga starts
			await clock.tickAsync(50);
			// Now cancel while the saga is awaiting its delay
			runner.cancel();
			await clock.tickAsync(5000);
			const result = await promise;
			assert.isNull(result);
		} finally {
			clock.restore();
		}
	});

	test('non-abort errors from the saga are re-thrown', async () => {
		const clock = useFakeTimers();
		try {
			const runner = makeDebounceRunner<S>(50);

			async function* boom(): Gen {
				yield call(() => Promise.reject(new Error('network error')));
				return {};
			}

			const promise = runner.run(boom(), noop, getState);
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
});

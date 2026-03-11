import { assert } from '@open-wc/testing';
import { spy } from 'sinon';

import { call, delay, loading, select, type Effect } from '../async-rule';
import { runSaga } from '../run-saga';

// ── Helpers ───────────────────────────────────────────────────────────────────

type S = Record<string, unknown>;
type Gen = AsyncGenerator<Effect<S>, Partial<S>>;

const noop = () => {
	/* intentionally empty */
};
const identity = <T>(v: T) => v;
const getNothing = () => ({}) as S;

const abortedSignal = () => {
	const ac = new AbortController();
	ac.abort();
	return ac.signal;
};

// eslint-disable-next-line require-yield
async function* returns(value: Partial<S>): Gen {
	return value;
}

// ── Suite ─────────────────────────────────────────────────────────────────────

suite('runSaga', () => {
	test('resolves with generator return value', async () => {
		const result = await runSaga(
			returns({ name: 'Alice' }),
			new AbortController().signal,
			noop,
			getNothing,
		);
		assert.deepEqual(result, { name: 'Alice' });
	});

	test('resolves null if signal already aborted before first next()', async () => {
		let calledNext = false;
		// eslint-disable-next-line require-yield
		async function* gen(): Gen {
			calledNext = true;
			return {};
		}
		const result = await runSaga(gen(), abortedSignal(), noop, getNothing);
		assert.isNull(result);
		assert.isFalse(calledNext);
	});

	test('resolves null if signal aborted between effects', async () => {
		const ac = new AbortController();
		async function* gen(): Gen {
			yield delay(5000); // would block forever without abort
			return {};
		}
		const promise = runSaga(gen(), ac.signal, noop, getNothing);
		// abort right after starting
		setTimeout(() => ac.abort(), 10);
		const result = await promise;
		assert.isNull(result);
	});

	test('loading effect calls onIntermediate synchronously (before any await)', async () => {
		const calls: string[] = [];
		async function* gen(): Gen {
			yield loading({ status: 'loading' });
			calls.push('after-yield');
			return {};
		}
		const onIntermediate = spy((patch: object) =>
			calls.push('intermediate:' + JSON.stringify(patch)),
		);
		await runSaga(
			gen(),
			new AbortController().signal,
			onIntermediate,
			getNothing,
		);
		// intermediate must be called BEFORE 'after-yield' (synchronous, no microtask between)
		assert.equal(calls[0], 'intermediate:{"status":"loading"}');
		assert.equal(calls[1], 'after-yield');
	});

	test('call effect threads signal as first arg to fn', async () => {
		let receivedSignal: AbortSignal | undefined;
		const ac = new AbortController();

		async function* gen(): Gen {
			yield call((sig) => {
				receivedSignal = sig;
				return Promise.resolve(42);
			});
			return {};
		}
		await runSaga(gen(), ac.signal, noop, getNothing);
		assert.strictEqual(receivedSignal, ac.signal);
	});

	test('call effect feeds resolved value back into generator via next()', async () => {
		let received: unknown;
		async function* gen(): Gen {
			received = yield call(() => Promise.resolve('hello'));
			return {};
		}
		await runSaga(gen(), new AbortController().signal, noop, getNothing);
		assert.equal(received, 'hello');
	});

	test('call effect — if fn rejects, error propagates out of runSaga', async () => {
		async function* gen(): Gen {
			yield call(() => Promise.reject(new Error('boom')));
			return {};
		}
		try {
			await runSaga(gen(), new AbortController().signal, noop, getNothing);
			assert.fail('should have thrown');
		} catch (e) {
			assert.instanceOf(e, Error);
			assert.equal((e as Error).message, 'boom');
		}
	});

	test('delay effect waits ms then resolves', async () => {
		const start = Date.now();
		async function* gen(): Gen {
			yield delay(50);
			return {};
		}
		await runSaga(gen(), new AbortController().signal, noop, getNothing);
		assert.isAtLeast(Date.now() - start, 40); // allow for timer imprecision
	});

	test('delay effect aborts cleanly when signal fires mid-delay', async () => {
		const ac = new AbortController();
		async function* gen(): Gen {
			yield delay(5000);
			return {};
		}
		const promise = runSaga(gen(), ac.signal, noop, getNothing);
		setTimeout(() => ac.abort(), 10);
		const result = await promise;
		assert.isNull(result);
	});

	test('select effect (no selector) returns getState() result', async () => {
		const state = { name: 'Bob' };
		let received: unknown;
		async function* gen(): Gen {
			received = yield select();
			return {};
		}
		await runSaga(gen(), new AbortController().signal, noop, () => state);
		assert.deepEqual(received, state);
	});

	test('select effect (with selector) returns selector(getState())', async () => {
		const state = { name: 'Bob', age: 42 };
		let received: unknown;
		async function* gen(): Gen {
			received = yield select(identity as (s: S) => S);
			return {};
		}
		await runSaga(gen(), new AbortController().signal, noop, () => state);
		assert.deepEqual(received, state);
	});

	test('select effect is synchronous — getState called once per yield select', async () => {
		let callCount = 0;
		const getState = () => {
			callCount++;
			return { n: callCount };
		};
		let received: unknown;
		async function* gen(): Gen {
			received = yield select();
			return {};
		}
		await runSaga(gen(), new AbortController().signal, noop, getState);
		assert.equal(callCount, 1);
		assert.deepEqual(received, { n: 1 });
	});
});

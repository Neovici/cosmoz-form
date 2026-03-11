import { assert } from '@open-wc/testing';
import { spy } from 'sinon';

import { call, delay, type Effect } from '../async-rule';
import { makeTakeLatestRunner } from '../make-take-latest-runner';

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

suite('makeTakeLatestRunner', () => {
	test('run() resolves with saga return value', async () => {
		const runner = makeTakeLatestRunner<S>();
		const result = await runner.run(returns({ name: 'Alice' }), noop, getState);
		assert.deepEqual(result, { name: 'Alice' });
	});

	test('second run() aborts the first before starting', async () => {
		const runner = makeTakeLatestRunner<S>();
		const firstCompleted = spy();

		async function* slow(): Gen {
			yield delay(200);
			firstCompleted();
			return { from: 'first' };
		}
		async function* fast(): Gen {
			yield delay(10);
			return { from: 'second' };
		}

		const first = runner.run(slow(), noop, getState);
		const second = runner.run(fast(), noop, getState);

		const [firstResult, secondResult] = await Promise.all([first, second]);

		assert.isNull(firstResult, 'first saga is cancelled');
		assert.deepEqual(secondResult, { from: 'second' });
		assert.isFalse(
			firstCompleted.called,
			'first saga body should not complete',
		);
	});

	test('cancel() aborts current run, run() resolves null', async () => {
		const runner = makeTakeLatestRunner<S>();

		async function* slow(): Gen {
			yield delay(5000);
			return {};
		}

		const promise = runner.run(slow(), noop, getState);
		runner.cancel();
		const result = await promise;
		assert.isNull(result);
	});

	test('non-abort errors are re-thrown (not swallowed)', async () => {
		const runner = makeTakeLatestRunner<S>();

		async function* boom(): Gen {
			yield call(() => Promise.reject(new Error('network error')));
			return {};
		}

		try {
			await runner.run(boom(), noop, getState);
			assert.fail('should have thrown');
		} catch (e) {
			assert.instanceOf(e, Error);
			assert.equal((e as Error).message, 'network error');
		}
	});

	test('AbortErrors are swallowed and resolve null', async () => {
		const runner = makeTakeLatestRunner<S>();

		async function* aborting(): Gen {
			yield delay(5000);
			return {};
		}

		const promise = runner.run(aborting(), noop, getState);
		runner.cancel();
		const result = await promise;
		// should resolve null without throwing
		assert.isNull(result);
	});
});

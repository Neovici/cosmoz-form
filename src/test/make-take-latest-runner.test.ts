import { assert } from '@open-wc/testing';
import { spy } from 'sinon';

import { delay, type AsyncOpts, type AsyncRule } from '../async-rule';
import {
	makeTakeLatestRunner,
	type TakeLatestRunner,
} from '../make-take-latest-runner';

// ── Helpers ───────────────────────────────────────────────────────────────────

type S = Record<string, unknown>;

const noop = () => {
	/* intentionally empty */
};

const returns =
	(value: Partial<S>): AsyncRule<S> =>
	async () =>
		value;

const tick = (ms = 0) => new Promise<void>((r) => setTimeout(r, ms));

// ── Suite ─────────────────────────────────────────────────────────────────────

suite('makeTakeLatestRunner', () => {
	let runner: TakeLatestRunner<S>;

	setup(() => {
		runner = makeTakeLatestRunner<S>();
	});

	teardown(() => {
		runner.cancel();
	});

	test('run() resolves with fn return value', async () => {
		const result = await runner.run(returns({ name: 'Alice' }), {}, noop);
		assert.deepEqual(result, { name: 'Alice' });
	});

	test('second run() aborts the first before starting', async () => {
		const firstCompleted = spy();

		const slow: AsyncRule<S> = async (_, { signal }) => {
			await delay(signal, 200);
			firstCompleted();
			return { from: 'first' };
		};
		const fast: AsyncRule<S> = async (_, { signal }) => {
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
		const slow: AsyncRule<S> = async (_, { signal }) => {
			await delay(signal, 5000);
			return {};
		};

		const promise = runner.run(slow, {}, noop);
		runner.cancel();
		const result = await promise;
		assert.isNull(result);
	});

	test('non-abort errors are re-thrown (not swallowed)', async () => {
		const boom: AsyncRule<S> = async () => {
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
		const aborting: AsyncRule<S> = async (_, { signal }) => {
			await delay(signal, 5000);
			return {};
		};

		const promise = runner.run(aborting, {}, noop);
		runner.cancel();
		const result = await promise;
		assert.isNull(result);
	});

	test('rule that ignores signal resolving late after a newer run resolves null', async () => {
		const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

		// Ignores opts.signal: never observes abort, resolves normally when superseded.
		const ignoresSignal: AsyncRule<S> = async () => {
			await sleep(30);
			return { from: 'stale' };
		};

		const stale = runner.run(ignoresSignal, {}, noop);
		const latest = runner.run(returns({ from: 'latest' }), {}, noop);

		assert.deepEqual(await latest, { from: 'latest' });
		assert.isNull(await stale, 'signal-ignoring stale run must resolve null');
	});

	test('suppresses stale patches and results even when the rule ignores abort', async () => {
		const patches = spy();
		let release!: () => void;

		// Ignores opts.signal, pushes an intermediate and a final after being
		// superseded — neither may reach state.
		const first = runner.run(
			async (_, { update }) => {
				await new Promise<void>((resolve) => {
					release = resolve;
				});
				update({ from: 'stale intermediate' });
				return { from: 'stale final' };
			},
			{},
			patches,
		);
		await tick(10);
		const latest = runner.run(returns({ from: 'latest' }), {}, noop);

		assert.deepEqual(await latest, { from: 'latest' });
		release();
		assert.isNull(await first, 'stale final is dropped');
		assert.isFalse(patches.called, 'stale intermediate is suppressed');
	});

	test('update from a cancelled run is suppressed after the rule catches the abort', async () => {
		const patches = spy();

		const first = runner.run(
			async (_, { update, signal }) => {
				try {
					await delay(signal, 5000);
					return { from: 'first' };
				} catch {
					update({ from: 'catch fallback' });
					return { from: 'catch fallback' };
				}
			},
			{},
			patches,
		);
		await tick(10);
		const latest = runner.run(returns({ from: 'latest' }), {}, noop);

		assert.deepEqual(await latest, { from: 'latest' });
		assert.isNull(await first, 'swallowed abort still resolves null');
		assert.isFalse(patches.called, 'catch-driven update is suppressed');
	});

	test('a real error raised after cancel resolves null, not re-thrown', async () => {
		let release!: () => void;

		const first = runner.run(
			async (_, { signal }) => {
				await new Promise<void>((resolve) => {
					release = resolve;
				});
				if (signal.aborted) throw new Error('late failure');
				return { from: 'first' };
			},
			{},
			noop,
		);
		await tick(10);
		runner.cancel();
		release();

		assert.isNull(await first, 'post-cancel errors stay on the cancel path');
	});

	test('latest run result passes through when stale signal-ignoring run resolved earlier', async () => {
		const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

		const ignoresSignal: AsyncRule<S> = async () => {
			await sleep(10);
			return { from: 'stale' };
		};
		const latest: AsyncRule<S> = async () => {
			await sleep(40);
			return { from: 'latest' };
		};

		const [staleResult, latestResult] = await Promise.all([
			runner.run(ignoresSignal, {}, noop),
			runner.run(latest, {}, noop),
		]);

		assert.isNull(staleResult, 'stale result is dropped');
		assert.deepEqual(latestResult, { from: 'latest' });
	});

	test('bare DOMException AbortError resolves null without cancel()', async () => {
		const aborting: AsyncRule<S> = async () => {
			throw new DOMException('The operation was aborted.', 'AbortError');
		};

		const result = await runner.run(aborting, {}, noop);
		assert.isNull(result);
	});

	test('opts.signal is the live AbortController signal', async () => {
		let receivedSignal: AbortSignal | undefined;

		const captureSignal: AsyncRule<S> = async (_, { signal }) => {
			receivedSignal = signal;
			return {};
		};

		await runner.run(captureSignal, {}, noop);
		assert.instanceOf(receivedSignal, AbortSignal);
	});

	test('opts.update calls onIntermediate immediately', async () => {
		const patches: Partial<S>[] = [];

		const withUpdate: AsyncRule<S> = async (_, { update }) => {
			update({ status: 'loading' });
			return { status: 'done' };
		};

		const result = await runner.run(withUpdate, {}, (p) => patches.push(p));
		assert.deepEqual(patches, [{ status: 'loading' }]);
		assert.deepEqual(result, { status: 'done' });
	});

	test('opts.index is forwarded from run opts', async () => {
		let receivedIndex: number | undefined;

		const captureIndex: AsyncRule<S> = async (_, opts: AsyncOpts<S>) => {
			receivedIndex = opts.index;
			return {};
		};

		await runner.run(captureIndex, {}, noop, { index: 3 });
		assert.equal(receivedIndex, 3);
	});

	test('values snapshot is passed to fn', async () => {
		let receivedValues: S | undefined;

		const captureValues: AsyncRule<S> = async (values) => {
			receivedValues = values;
			return {};
		};

		await runner.run(captureValues, { name: 'Bob' }, noop);
		assert.deepEqual(receivedValues, { name: 'Bob' });
	});
});

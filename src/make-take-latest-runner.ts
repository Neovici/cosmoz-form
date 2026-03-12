import type { Effect, SagaRunner } from './async-rule';
import { runSaga, type OnIntermediate } from './run-saga';

export type TakeLatestRunner<T> = SagaRunner<T>;

export const makeTakeLatestRunner = <T>(): TakeLatestRunner<T> => {
	let ac: AbortController | null = null;

	return {
		run: async (
			gen: AsyncGenerator<Effect<T>, Partial<T>>,
			onIntermediate: OnIntermediate<T>,
			getState: () => T,
		) => {
			ac?.abort(); // cancel previous saga (takeLatest)
			ac = new AbortController();
			try {
				return await runSaga(gen, ac.signal, onIntermediate, getState);
			} catch (e) {
				// AbortError from a delay/call that was cancelled — not a real error
				if (e instanceof DOMException && e.name === 'AbortError') return null;
				throw e; // re-throw real errors to caller
			}
		},
		cancel: () => {
			ac?.abort();
			ac = null;
		},
	};
};

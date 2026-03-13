import type { AsyncRunner } from './async-rule';

export type TakeLatestRunner<T> = AsyncRunner<T>;

export const makeTakeLatestRunner = <T>(): TakeLatestRunner<T> => {
	let ac: AbortController | null = null;

	return {
		run: async (fn, values, onIntermediate, opts) => {
			ac?.abort(); // cancel previous (takeLatest / switchMap)
			ac = new AbortController();
			const asyncOpts = {
				update: onIntermediate,
				signal: ac.signal,
				index: opts?.index,
			};
			try {
				return await fn(values, asyncOpts);
			} catch (e) {
				// AbortError from delay() or fetch() when cancelled — not a real error
				if (e instanceof DOMException && e.name === 'AbortError') return null;
				throw e;
			}
		},
		cancel: () => {
			ac?.abort();
			ac = null;
		},
	};
};

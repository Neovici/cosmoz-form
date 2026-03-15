import type { AsyncRunner } from './async-rule';

export type TakeLatestRunner<T, C extends object = object> = AsyncRunner<T, C>;

export const makeTakeLatestRunner = <
	T,
	C extends object = object,
>(): TakeLatestRunner<T, C> => {
	let ac: AbortController | null = null;

	return {
		run: async (fn, values, onIntermediate, opts) => {
			ac?.abort(); // cancel previous (takeLatest / switchMap)
			ac = new AbortController();
			const asyncOpts = {
				update: onIntermediate,
				signal: ac.signal,
				index: opts?.index,
				context: opts?.context,
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

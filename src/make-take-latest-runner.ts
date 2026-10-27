import type { AsyncRunner } from './async-rule';

export type TakeLatestRunner<T, C extends object = object> = AsyncRunner<T, C>;

export const makeTakeLatestRunner = <
	T,
	C extends object = object,
>(): TakeLatestRunner<T, C> => {
	let ac: AbortController | null = null;

	return {
		run: async (fn, values, onIntermediate, opts) => {
			const controller = new AbortController();
			ac?.abort(); // cancel previous (takeLatest / switchMap)
			ac = controller;
			const { signal } = controller;

			try {
				const result = await fn(values, {
					update: onIntermediate,
					signal,
					index: opts?.index,
					context: opts?.context,
				});
				// A rule that ignores `signal` may still resolve normally after a
				// newer run took over (or cancel() fired). Drop that stale result.
				return signal.aborted ? null : result;
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

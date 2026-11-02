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
			ac?.abort();
			ac = controller;
			const { signal } = controller;

			try {
				const result = await fn(values, {
					update: (patch: Partial<T>) => {
						if (!signal.aborted) onIntermediate(patch);
					},
					signal,
					index: opts?.index,
					context: opts?.context,
				});
				return signal.aborted ? null : result;
			} catch (e) {
				if (
					signal.aborted ||
					(e instanceof DOMException && e.name === 'AbortError')
				) {
					return null;
				}
				throw e;
			}
		},
		cancel: () => {
			ac?.abort();
			ac = null;
		},
	};
};

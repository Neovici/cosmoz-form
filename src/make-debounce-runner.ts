import type { AsyncRule, AsyncRunner } from './async-rule';

export type DebounceRunner<T, C extends object = object> = AsyncRunner<T, C>;

export const makeDebounceRunner = <T, C extends object = object>(
	ms: number,
): DebounceRunner<T, C> => {
	let timer: ReturnType<typeof setTimeout> | null = null;
	let ac: AbortController | null = null;
	let pending: {
		fn: AsyncRule<T, C>;
		values: T;
		index?: number;
		context?: C;
		resolve: (v: Partial<T> | null) => void;
		reject: (e: unknown) => void;
	} | null = null;

	return {
		run: (fn, values, onIntermediate, opts) =>
			new Promise<Partial<T> | null>((resolve, reject) => {
				if (pending !== null) {
					// Debounced-away call resolves null (same as cancelled in takeLatest)
					pending.resolve(null);
					clearTimeout(timer!);
				}
				pending = {
					fn,
					values,
					index: opts?.index,
					context: opts?.context,
					resolve,
					reject,
				};
				timer = setTimeout(async () => {
					const {
						fn: f,
						values: v,
						index,
						context,
						resolve: res,
						reject: rej,
					} = pending!;
					pending = null;
					timer = null;
					ac = new AbortController();
					const asyncOpts = {
						update: onIntermediate,
						signal: ac.signal,
						index,
						context,
					};
					try {
						res(await f(v, asyncOpts));
					} catch (e) {
						if (e instanceof DOMException && e.name === 'AbortError') res(null);
						else rej(e);
					} finally {
						ac = null;
					}
				}, ms);
			}),

		cancel: () => {
			if (timer !== null) {
				clearTimeout(timer);
				timer = null;
			}
			if (pending !== null) {
				pending.resolve(null);
				pending = null;
			}
			ac?.abort();
			ac = null;
		},
	};
};

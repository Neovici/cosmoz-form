import type { SagaCompute, SagaRunner } from './async-rule';

export type DebounceRunner<T> = SagaRunner<T>;

export const makeDebounceRunner = <T>(ms: number): DebounceRunner<T> => {
	let timer: ReturnType<typeof setTimeout> | null = null;
	let ac: AbortController | null = null;
	let pending: {
		fn: SagaCompute<T>;
		values: T;
		index?: number;
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
				pending = { fn, values, index: opts?.index, resolve, reject };
				timer = setTimeout(async () => {
					const {
						fn: f,
						values: v,
						index,
						resolve: res,
						reject: rej,
					} = pending!;
					pending = null;
					timer = null;
					ac = new AbortController();
					const ctx = { update: onIntermediate, signal: ac.signal, index };
					try {
						res(await f(v, ctx));
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

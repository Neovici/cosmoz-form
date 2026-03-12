import type { Effect } from './async-rule';
import { runSaga, type OnIntermediate } from './run-saga';

export type DebounceRunner<T> = {
	run: (
		gen: AsyncGenerator<Effect<T>, Partial<T>>,
		onIntermediate: OnIntermediate<T>,
		getState: () => T,
	) => Promise<Partial<T> | null>;
	cancel: () => void;
};

export const makeDebounceRunner = <T>(ms: number): DebounceRunner<T> => {
	let timer: ReturnType<typeof setTimeout> | null = null;
	let ac: AbortController | null = null;
	let pending: {
		gen: AsyncGenerator<Effect<T>, Partial<T>>;
		resolve: (v: Partial<T> | null) => void;
		reject: (e: unknown) => void;
	} | null = null;

	return {
		run: (gen, onIntermediate, getState) =>
			new Promise<Partial<T> | null>((resolve, reject) => {
				if (pending !== null) {
					// Discard the superseded generator immediately
					pending.gen.return(undefined as unknown as Partial<T>);
					// Debounced-away call resolves null (same as cancelled in takeLatest)
					pending.resolve(null);
					clearTimeout(timer!);
				}
				pending = { gen, resolve, reject };
				timer = setTimeout(async () => {
					const { gen: g, resolve: res, reject: rej } = pending!;
					pending = null;
					timer = null;
					ac = new AbortController();
					try {
						res(await runSaga(g, ac.signal, onIntermediate, getState));
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
				pending.gen.return(undefined as unknown as Partial<T>);
				pending.resolve(null);
				pending = null;
			}
			ac?.abort();
			ac = null;
		},
	};
};

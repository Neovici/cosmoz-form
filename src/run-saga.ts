import type { Effect } from './async-rule';

export type OnIntermediate<T> = (patch: Partial<T>) => void;

/** Cancellable delay that rejects with AbortError when signal fires. */
const abortableDelay = (ms: number, signal: AbortSignal) =>
	new Promise<void>((resolve, reject) => {
		if (signal.aborted) {
			reject(new DOMException('Aborted', 'AbortError'));
			return;
		}
		const t = setTimeout(resolve, ms);
		signal.addEventListener(
			'abort',
			() => {
				clearTimeout(t);
				reject(new DOMException('Aborted', 'AbortError'));
			},
			{ once: true },
		);
	});

/**
 * Runs an async generator to completion, interpreting yielded effects.
 * Returns the generator's return value (the final Partial<T> patch),
 * or null if the saga was aborted.
 * Re-throws any non-abort errors — callers are responsible for catching.
 */
export async function runSaga<T>(
	gen: AsyncGenerator<Effect<T>, Partial<T>>,
	signal: AbortSignal,
	onIntermediate: OnIntermediate<T>,
	getState: () => T,
): Promise<Partial<T> | null> {
	let nextValue: unknown;

	while (true) {
		if (signal.aborted) {
			await gen.return({});
			return null;
		}

		const { value, done } = await gen.next(nextValue);
		if (done) return value as Partial<T>;

		switch (value._tag) {
			case 'loading':
				// Synchronous — no await, fires immediately
				onIntermediate(value.patch);
				nextValue = undefined;
				break;

			case 'call':
				// fn receives the AbortSignal as its first argument
				nextValue = await value.fn(signal, ...value.args);
				break;

			case 'delay':
				try {
					await abortableDelay(value.ms, signal);
				} catch (e) {
					if (e instanceof DOMException && e.name === 'AbortError') {
						await gen.return({});
						return null;
					}
					throw e;
				}
				nextValue = undefined;
				break;

			case 'select':
				// Synchronous — no await, returns live state right now
				nextValue = value.selector ? value.selector(getState()) : getState();
				break;
		}

		if (signal.aborted) {
			await gen.return({});
			return null;
		}
	}
}

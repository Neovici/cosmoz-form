/**
 * Options passed to every async rule function.
 * @template T - the form/item value type
 */
export type AsyncOpts<T> = {
	/** Emit an intermediate partial patch immediately (e.g. a loading state). */
	update: (patch: Partial<T>) => void;
	/**
	 * AbortSignal that fires when the runner cancels this invocation
	 * (takeLatest supersession, debounce discard, or unmount).
	 * Pass to `fetch()`, `delay()`, or any other cancellable operation.
	 */
	signal: AbortSignal;
	/**
	 * Item index when running inside `useAsyncRules`.
	 * `undefined` when running inside `useAsyncFormCore`.
	 */
	index?: number;
};

/**
 * Plain async function that computes a partial state update.
 *
 * `values` is a snapshot at invocation time.
 *
 * @template T - the form/item value type
 * @param values - snapshot of current form/item values
 * @param opts - cancellation signal, intermediate update callback, and item index
 * @returns a partial patch to merge into state
 * @example
 * async function myRule(values, { update, signal }) {
 *   if (!values.supplierId) return { contactEmail: '' };
 *   update({ contactEmail: 'loading…' });
 *   const email = await fetchEmail(signal, values.supplierId);
 *   return { contactEmail: email };
 * }
 */
export type AsyncRule<T> = (
	values: T,
	opts: AsyncOpts<T>,
) => Promise<Partial<T>>;

/**
 * Callback invoked with intermediate partial patches during a rule run.
 * @param patch - the intermediate partial state to apply immediately
 */
export type OnIntermediate<T> = (patch: Partial<T>) => void;

/**
 * Shared interface for all async runner strategies.
 * @template T - the form/item value type
 */
export type AsyncRunner<T> = {
	/**
	 * Run `fn` with `values` as input.
	 *
	 * @param fn - the async rule to execute
	 * @param values - snapshot of current values passed to `fn`
	 * @param onIntermediate - wired to `opts.update` inside the rule
	 * @param opts - optional `index` forwarded to `opts.index` inside the rule
	 * @returns the resolved patch from `fn`, or `null` if cancelled
	 */
	run: (
		fn: AsyncRule<T>,
		values: T,
		onIntermediate: OnIntermediate<T>,
		opts?: { index?: number },
	) => Promise<Partial<T> | null>;
	/** Cancel the current in-flight run, resolving it as `null`. */
	cancel: () => void;
};

/**
 * Tuple describing a single async rule for use with `useAsyncRules`.
 *
 * @template T - the form/item value type
 */
export type AsyncItemRule<T> = readonly [
	ruleFn: AsyncRule<T>,
	depsFn: (current: T, index?: number) => unknown[],
	runner?: () => AsyncRunner<T>,
];

/**
 * Cancellable delay. Rejects with `AbortError` if `signal` fires before `ms` elapses.
 *
 * @param signal - AbortSignal to cancel the delay early
 * @param ms - milliseconds to wait
 * @returns a Promise that resolves after `ms`, or rejects with `AbortError` if cancelled
 * @example
 * await delay(opts.signal, 400);
 */
export const delay = (signal: AbortSignal, ms: number): Promise<void> =>
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

/**
 * Options passed to every async rule function.
 * @template T - the form/item value type
 * @template C - the context type
 */
export type AsyncOpts<T, C extends object = object> = {
	/** Emit an intermediate partial patch immediately (e.g. a loading state). */
	update: (patch: Partial<T>) => void;
	/**
	 * AbortSignal that fires when the runner cancels this invocation
	 * (takeLatest supersession, debounce discard, or unmount).
	 * Pass to `fetch()`, `delay()`, or any other cancellable operation — and
	 * rethrow the 'AbortError' they throw on cancel. Runners drop a cancelled
	 * run's final patch and suppress its update() calls — guards specified on
	 * `AsyncRunner` — but only a propagating abort keeps the rule from doing
	 * any work at all after cancel (catch-driven side effects).
	 */
	signal: AbortSignal;
	/**
	 * Item index when running inside `useAsyncRules`.
	 * `undefined` when running inside `useAsyncFormCore`.
	 */
	index?: number;
	/**
	 * Optional context object propagated from the parent form.
	 * Available when `context` is passed to `useAsyncRules` or `useAsyncFormCore`.
	 */
	context?: C;
};

/**
 * Plain async function that computes a partial state update.
 *
 * `values` is a snapshot at invocation time.
 *
 * @template T - the form/item value type
 * @template C - the context type
 * @param values - snapshot of current form/item values
 * @param opts - cancellation signal, intermediate update callback, item index, and context
 * @returns a partial patch to merge into state
 * @example
 * async function myRule(values, { update, signal, context }) {
 *   if (!values.supplierId) return { contactEmail: '' };
 *   update({ contactEmail: 'loading…' });
 *   const email = await fetchEmail(signal, values.supplierId);
 *   return { contactEmail: email };
 * }
 *
 * Cancellation: pass `signal` into every awaited call and let the
 * 'AbortError' it throws on cancel propagate. Runners silence a cancelled
 * run end-to-end: its final patch resolves `null` and its `update()` calls
 * are suppressed once aborted. That is the contract every runner must
 * implement (see `AsyncRunner`) — a cancelled run's patch can never land,
 * whether the rule respects the signal, ignores it, or swallows the abort
 * in a catch. A rule that swallows the abort instead (e.g. a broad
 * try/catch returning a fallback) keeps running its recovery logic for
 * what is not a failure — side effects fire. In a local catch, discriminate
 * with `signal.aborted`:
 * @example
 * async function resilientRule(values, { signal }) {
 *   try {
 *     return { x: await fetchX(signal, values.id) };
 *   } catch (e) {
 *     if (signal.aborted) throw e; // cancelled — runner stays silent
 *     return { x: 'fallback' };    // real failure — recover locally
 *   }
 * }
 */
export type AsyncRule<T, C extends object = object> = (
	values: T,
	opts: AsyncOpts<T, C>,
) => Promise<Partial<T>>;

/**
 * Callback invoked with intermediate partial patches during a rule run.
 * @param patch - the intermediate partial state to apply immediately
 */
export type OnIntermediate<T> = (patch: Partial<T>) => void;

/**
 * Shared interface for all async runner strategies.
 *
 * The cancelled-run guards below are part of this contract, not extras.
 * A custom runner must:
 * 1. hand the rule an `AbortSignal` that fires on supersession or cancel, so
 *    cancellable work dies up front;
 * 2. suppress `onIntermediate` (wired as `opts.update`) once a run is aborted;
 * 3. resolve `run()` as `null` once aborted — including when the rule
 *    resolves normally after cancel (it ignored the signal or caught the
 *    abort), and when cancellation itself raises `AbortError`; only a genuine
 *    pre-cancel failure propagates to `onError`.
 *
 * Guard-less custom runners should not exist: a stale patch that lands or
 * races a newer run is a failure of the runner implementation, never a
 * supported mode. The built-ins (`makeTakeLatestRunner`,
 * `makeDebounceRunner`) are the reference implementations.
 *
 * @template T - the form/item value type
 * @template C - the context type
 */
export type AsyncRunner<T, C extends object = object> = {
	/**
	 * Run `fn` with `values` as input.
	 *
	 * @param fn - the async rule to execute
	 * @param values - snapshot of current values passed to `fn`
	 * @param onIntermediate - wired to `opts.update` inside the rule
	 * @param opts - optional `index` and `context` forwarded into the rule
	 * @returns the resolved patch from `fn`, or `null` if cancelled
	 */
	run: (
		fn: AsyncRule<T, C>,
		values: T,
		onIntermediate: OnIntermediate<T>,
		opts?: { index?: number; context?: C },
	) => Promise<Partial<T> | null>;
	/** Cancel the current in-flight run, resolving it as `null`. */
	cancel: () => void;
};

/**
 * Tuple describing a single async rule for use with `useAsyncRules`.
 *
 * @template T - the form/item value type
 * @template C - the context type
 */
export type AsyncItemRule<T, C extends object = object> = readonly [
	ruleFn: AsyncRule<T, C>,
	depsFn: (current: T, index?: number, context?: C) => unknown[],
	runner?: () => AsyncRunner<T, C>,
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

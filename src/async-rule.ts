/**
 * Options passed to every async rule function.
 * @template T - the form/item value type
 * @template C - the context type
 */
export type AsyncOpts<T, C extends object = object> = {
	/**
	 * Emit an intermediate partial patch immediately (e.g. a loading state).
	 * Merged at once, never rolled back — even when this run is later
	 * cancelled (the next run must clear it, see the `AsyncRule` contract).
	 */
	update: (patch: Partial<T>) => void;
	/**
	 * AbortSignal that is aborted when this invocation is cancelled
	 * (takeLatest supersession, debounce discard, or unmount).
	 * Pass to `fetch()`, `delay()`, or any other cancellable operation — and
	 * rethrow the 'AbortError' they throw on cancel. Once aborted, anything
	 * this run outputs — via update() or the final patch — is ignored (see
	 * `AsyncRunner`). Throw the 'AbortError' to stop executing the rest of
	 * the body.
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
 * The patch pushed via `update` is never rolled back: whatever a run pushed
 * before it was cancelled stays, everything it pushes after the cancel point
 * is dropped, and only the winning run's patches land afterwards. Clear any loading state in EVERY terminal patch —
 * early return, final return, and the rule's `onError` patch (applied exactly
 * like an async result). A separate flag (e.g. `{ busy: true }` via `update`)
 * follows the same contract; a placeholder in the target field sidesteps it
 * because the final patch overwrites the field anyway.
 *
 * Cancellation: pass `signal` into every awaited call and let the
 * 'AbortError' they throw on cancel propagate. A cancelled run is not a
 * failure — once aborted, anything the run outputs (update() or the final
 * patch) is ignored (see `AsyncRunner`), however the rule treats the abort.
 * Absorbing the abort in a catch still leaves the statements after it
 * executing; out of a local catch, rethrow on `signal.aborted` and keep
 * recovery for real failures:
 * @example
 * async function resilientRule(values, { signal }) {
 *   try {
 *     return { x: await fetchX(signal, values.id) };
 *   } catch (e) {
 *     if (signal.aborted) throw e; // cancelled — not a failure; report upstream
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
 * Implementing a custom runner — the requirements below belong to this
 * contract, not extras:
 * 1. the rule is passed an `AbortSignal` aborted on supersession or cancel,
 *    so cancellable work ends immediately;
 * 2. once a run is aborted, nothing more passes through `onIntermediate`
 *    (wired as `opts.update`);
 * 3. once a run is aborted, `run()` resolves as `null` — also when the rule
 *    resolves after cancel (ignored signal, or the abort caught by a
 *    rule-side catch), and when its only rejection is the `AbortError`
 *    thrown on cancel. A failure raised before the cancel propagates to
 *    `onError`.
 *
 * Runners without these requirements should not exist: an aborted run's
 * outputs applied to state, or applied while a newer run is in flight, are
 * a defect of the implementation, never a supported mode. The built-ins
 * (`makeTakeLatestRunner`, `makeDebounceRunner`) are the reference
 * implementations.
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
 * Tuple describing a single async rule for use with `useAsyncRules`
 * or `useAsyncFormCore`.
 *
 * @template T - the form/item value type
 * @template C - the context type
 */
export type AsyncItemRule<T, C extends object = object> = readonly [
	/**
	 * The async rule body. Receives a snapshot of the current values plus
	 * `AsyncOpts` (`update`, `signal`, `index`, `context`), and resolves with
	 * a partial patch merged into state (no touch). Must rethrow signal errors
	 * ('AbortError') rather than swallow them, so cancellation stays silent.
	 */
	ruleFn: AsyncRule<T, C>,
	/**
	 * Dependency extractor. The rule re-fires only when the extracted deps
	 * change (Object.is per element, same as sync rules). `depsFn(item, idx,
	 * context)` per item in `useAsyncRules`, `depsFn(form.values, undefined,
	 * context)` in `useAsyncFormCore`.
	 */
	depsFn: (current: T, index?: number, context?: C) => unknown[],
	/**
	 * Optional runner factory — the cancellation strategy for this rule
	 * (per item index in `useAsyncRules`). Defaults to `makeTakeLatestRunner`;
	 * pass `() => makeDebounceRunner(ms)` for debounce, or a custom
	 * `AsyncRunner`. Invoked once per rule (per (rule, index) pair in
	 * `useAsyncRules`) — the closure holds the runner's cancellation state.
	 */
	runner?: () => AsyncRunner<T, C>,
	/**
	 * Optional per-rule error handler (local recovery).
	 * Return a partial patch to recover locally — it is applied exactly like an
	 * async result (form.onChange(patch, false), no touch).
	 * Return `void`/`undefined` (or omit the handler) to fall back to the
	 * hook-level `opts.onError` of `useAsyncFormCore`.
	 */
	onError?: (err: unknown) => Partial<T> | void,
];

/**
 * Cancellable delay. Rejects with `AbortError` if `signal` is aborted before `ms` elapses.
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

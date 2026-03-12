// ── Context ───────────────────────────────────────────────────────────────────

/**
 * Context passed to every async rule function.
 *
 * - `update(patch)` — emit an intermediate partial patch immediately
 *   (replaces the old `yield loading(patch)` pattern).
 * - `signal` — AbortSignal that fires when the runner cancels this invocation
 *   (takeLatest supersession, debounce discard, or unmount).
 *   Pass it to `fetch()`, `delay()`, or any other cancellable operation.
 * - `index` — item index when the rule is running inside `useAsyncRules`;
 *   `undefined` when running inside `useAsyncFormCore`.
 */
export type AsyncOpts<T> = {
	update: (patch: Partial<T>) => void;
	signal: AbortSignal;
	index?: number;
};

// ── Rule types ────────────────────────────────────────────────────────────────

/**
 * Plain async function that computes a partial state update.
 *
 * `values` is a SNAPSHOT at invocation time.
 * Use `ctx.signal` to cancel in-flight work when the runner supersedes this call.
 * Use `ctx.update(patch)` to push intermediate (loading) patches before returning.
 *
 * Example:
 *   async function myRule(values, { update, signal }) {
 *     if (!values.supplierId) return { contactEmail: '' };
 *     update({ contactEmail: 'loading…' });
 *     const email = await fetchEmail(signal, values.supplierId);
 *     return { contactEmail: email };
 *   }
 */
export type SagaCompute<T> = (
	values: T,
	ctx: AsyncOpts<T>,
) => Promise<Partial<T>>;

/** Callback invoked with intermediate partial patches during a rule run. */
export type OnIntermediate<T> = (patch: Partial<T>) => void;

/** Shared interface for all async runner strategies. */
export type SagaRunner<T> = {
	/**
	 * Run `fn` with `values` as input.
	 * `onIntermediate` is wired to `ctx.update`.
	 * `opts.index` is forwarded to `ctx.index`.
	 * Returns the fn's resolved patch, or null if cancelled.
	 */
	run: (
		fn: SagaCompute<T>,
		values: T,
		onIntermediate: OnIntermediate<T>,
		opts?: { index?: number },
	) => Promise<Partial<T> | null>;
	cancel: () => void;
};

export type AsyncItemRule<T> = readonly [
	sagaFn: SagaCompute<T>,
	depsFn: (current: T, index?: number) => unknown[],
	runner?: () => SagaRunner<T>,
];

// ── Helpers ───────────────────────────────────────────────────────────────────

/**
 * Cancellable delay.  Rejects with AbortError if `signal` fires before `ms`.
 *
 * Usage:
 *   await delay(ctx.signal, 400);
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

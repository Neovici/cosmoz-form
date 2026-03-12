// ── Effect types ─────────────────────────────────────────────────────────────

/** Emits an intermediate partial patch immediately (no await). */
export type LoadingEffect<T> = { _tag: 'loading'; patch: Partial<T> };

/** Calls an async function with the live AbortSignal threaded in as first arg. */
export type CallEffect = {
	_tag: 'call';
	fn: (signal: AbortSignal, ...args: unknown[]) => Promise<unknown>;
	args: unknown[];
};

/** Cancellable setTimeout. */
export type DelayEffect = { _tag: 'delay'; ms: number };

/**
 * Reads live form/item state at the moment of yield.
 * With no selector, returns the entire current T.
 * With a selector, returns selector(currentState).
 */
export type SelectEffect<T> = {
	_tag: 'select';
	selector?: (state: T) => unknown;
};

export type Effect<T> =
	| LoadingEffect<T>
	| CallEffect
	| DelayEffect
	| SelectEffect<T>;

// ── Constructors ──────────────────────────────────────────────────────────────

export const loading = <T>(patch: Partial<T>): LoadingEffect<T> => ({
	_tag: 'loading',
	patch,
});

export const call = <T>(
	fn: (signal: AbortSignal, ...args: unknown[]) => Promise<T>,
	...args: unknown[]
): CallEffect => ({ _tag: 'call', fn, args });

export const delay = (ms: number): DelayEffect => ({ _tag: 'delay', ms });

export const select = <T, R = T>(
	selector?: (state: T) => R,
): SelectEffect<T> => ({ _tag: 'select', selector });

// ── Runner types ──────────────────────────────────────────────────────────────

/** Callback invoked with intermediate partial patches during a saga. */
export type OnIntermediate<T> = (patch: Partial<T>) => void;

/** Shared interface for all saga runner strategies. */
export type SagaRunner<T> = {
	run: (
		gen: AsyncGenerator<Effect<T>, Partial<T>>,
		onIntermediate: OnIntermediate<T>,
		getState: () => T,
	) => Promise<Partial<T> | null>;
	cancel: () => void;
};

// ── Rule types ────────────────────────────────────────────────────────────────

/**
 * Async generator that computes a partial state update.
 *
 * `current` and `old` are SNAPSHOTS at invocation time.
 * - `old` is the state at the PREVIOUS saga invocation for this rule
 *   (not the previous render — only updated when deps change).
 * - After `yield call()` or `yield delay()`, use `yield select()` to read
 *   live state if needed. Do not read `current` post-yield for live data.
 * - Fields whose changes should restart the saga must appear in `depsFn`.
 *
 * For parallel async calls, wrap them in a single `yield call()`:
 *   const [a, b] = yield call((signal) => Promise.all([fetchA(signal), fetchB(signal)]));
 */
export type SagaCompute<T> = (
	current: T,
	old: T | undefined,
	index: number | undefined,
	oldIndex: number | undefined,
) => AsyncGenerator<Effect<T>, Partial<T>>;

export type AsyncItemRule<T> = readonly [
	sagaFn: SagaCompute<T>,
	depsFn: (current: T, index?: number) => unknown[],
	runner?: () => SagaRunner<T>,
];

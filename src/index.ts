export * from './form-dialog';
export * from './helpers';
export * from './inputs';
export * from './render';
export * from './touch';
export * from './use-form';
export * from './use-items';
export * from './use-items-filter';
export * from './use-validated-form';
export * from './use-validated-form$';
export * from './validation';

export type * from './types';

// Core hooks
export { useFormCore, type FormValues } from './use-form-core';
export { useValidatedFormCore } from './use-validated-form-core';

// Add form utilities
export * from './add';

// Async rules
export { delay } from './async-rule';
export type {
	AsyncItemRule,
	AsyncOpts,
	AsyncRule,
	AsyncRunner,
	OnIntermediate,
} from './async-rule';
// Async runners — choose the concurrency strategy that fits your use case:
//   makeTakeLatestRunner  cancels the previous run when a new one arrives (switchMap)
//   makeDebounceRunner    waits for silence before running; resets timer on each call (debounce + switchMap)
//
// Future ideas:
//   makeThrottleRunner    fires immediately, queues one trailing call (runs when in-flight finishes)
//   makeExhaustRunner     ignores new calls while one is in-flight (exhaustMap)
export { makeDebounceRunner } from './make-debounce-runner';
export type { DebounceRunner } from './make-debounce-runner';
export { makeTakeLatestRunner } from './make-take-latest-runner';
export type { TakeLatestRunner } from './make-take-latest-runner';
export { useAsyncFormCore } from './use-async-form-core';
export { useAsyncRules } from './use-items/use-async-rules';

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
export { computeRules, useValidatedFormCore } from './use-validated-form-core';

// Add form utilities
export * from './add';

// Async saga rules
export { call, delay, loading, select } from './async-rule';
export type {
	AsyncItemRule,
	CallEffect,
	DelayEffect,
	Effect,
	LoadingEffect,
	OnIntermediate,
	SagaCompute,
	SagaRunner,
	SelectEffect,
} from './async-rule';
// Async runners — choose the concurrency strategy that fits your use case:
//   makeTakeLatestRunner  cancels the previous saga when a new run() arrives (switchMap)
//   makeDebounceRunner    waits for silence before running; resets timer on each run() (debounce + switchMap)
//
// Future ideas:
//   makeThrottleRunner    fires immediately, queues one trailing call (runs when in-flight saga finishes)
//   makeExhaustRunner     ignores new run() calls while a saga is in-flight (exhaustMap)
export { makeDebounceRunner } from './make-debounce-runner';
export type { DebounceRunner } from './make-debounce-runner';
export { makeTakeLatestRunner } from './make-take-latest-runner';
export type { TakeLatestRunner } from './make-take-latest-runner';
export { useSagaRules } from './use-items/use-saga-rules';
export { useSagaFormCore } from './use-saga-form-core';

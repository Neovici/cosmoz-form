import { useCallback, useState } from '@pionjs/pion';
import { ItemRule } from '.';
import type { AsyncItemRule } from './async-rule';
import type { Fields } from './types';
import { useAsyncFormCore } from './use-async-form-core';
import { UseValidatedForm, useValidatedForm } from './use-validated-form';

export type ProgressValue = string | number;
export type Progress = [ProgressValue, ProgressValue];

export interface Props<T extends object, C extends object = object> {
	fields: Fields<T, C>;
	initial: T;
	rules?: ItemRule<T, C>[];
	asyncRules?: readonly AsyncItemRule<T, C>[];
	context?: C;
	onSave?: (
		values: T,
		initial: T,
		setProgress?: (p: Progress) => void,
	) => PromiseLike<unknown>;
	allowEmpty?: boolean;
}

interface Opts {
	disabled: boolean;
	processing: boolean;
	progress?: Progress;
	save$?: PromiseLike<unknown>;
	onSave: () => void;
}

export interface UseValidatedForm$<T extends object, C extends object = object>
	extends UseValidatedForm<T, C>, Opts {}

function useValidatedForm$<T extends object, C extends object = object>({
	fields,
	initial,
	rules,
	asyncRules,
	context,
	onSave,
	allowEmpty,
}: Props<T, C>): UseValidatedForm$<T, C> {
	const form = useValidatedForm({ fields, initial, rules, context });
	const { processing } = useAsyncFormCore(form, asyncRules);
	const { values, invalid } = form;
	const [save$, setSave$] = useState<PromiseLike<unknown>>();
	const [progress, setProgress] = useState<Progress>();
	const [submitted, setSubmitted] = useState(false);
	const empty = values == null || values === initial;
	// An invalid form can be saved: the attempt reveals the errors instead.
	// Only an empty form that may not be empty, with nothing to reveal, cannot.
	const disabled = form.fields?.length > 0 && empty && !allowEmpty && !invalid;

	const { onReset, load } = form;

	return {
		...form,
		touched: submitted,
		onReset: useCallback(() => {
			setSubmitted(false);
			onReset();
		}, [onReset]),
		load: useCallback<typeof load>(
			(...args) => {
				setSubmitted(false);
				load(...args);
			},
			[load],
		),
		save$,
		onSave: useCallback(() => {
			if (invalid) return setSubmitted(true);
			setSave$(onSave?.(values!, initial, setProgress));
		}, [onSave, values, initial, invalid]),
		disabled,
		processing,
		progress,
	};
}

export { useValidatedForm$ };

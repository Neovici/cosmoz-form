import { useCallback, useState } from '@pionjs/pion';
import { ItemRule } from '.';
import type { AsyncItemRule } from './async-rule';
import type { Fields } from './types';
import { useSagaFormCore } from './use-saga-form-core';
import { UseValidatedForm, useValidatedForm } from './use-validated-form';

export type ProgressValue = string | number;
export type Progress = [ProgressValue, ProgressValue];

export interface Props<T extends object> {
	fields: Fields<T>;
	initial: T;
	rules?: ItemRule<T>[];
	asyncRules?: readonly AsyncItemRule<T>[];
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

export interface UseValidatedForm$<T extends object>
	extends UseValidatedForm<T>, Opts {}

function useValidatedForm$<T extends object>({
	fields,
	initial,
	rules,
	asyncRules,
	onSave,
	allowEmpty,
}: Props<T>): UseValidatedForm$<T> {
	const form = useValidatedForm({ fields, initial, rules });
	const { processing } = useSagaFormCore(form, asyncRules);
	const { values, invalid } = form;
	const [save$, setSave$] = useState<PromiseLike<unknown>>();
	const [progress, setProgress] = useState<Progress>();
	const empty = values == null || values === initial;
	const disabled =
		form.fields?.length > 0 && !(empty && allowEmpty) && (empty || invalid);

	return {
		...form,
		save$,
		onSave: useCallback(
			() => setSave$(onSave?.(values!, initial, setProgress)),
			[onSave, values, initial],
		),
		disabled,
		processing,
		progress,
	};
}

export { useValidatedForm$ };

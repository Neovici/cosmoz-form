import { StateUpdater, useMemo } from '@pionjs/pion';
import { invoke } from '@neovici/cosmoz-utils/function';
import { validate } from './validation';
import { UseForm } from './use-form';
import type { Fields } from './types';
import type { ItemRule } from './use-items/apply-rules';
import { FormValues, useFormCore } from './use-form-core';

export const computeRules = <T extends object>(
	fields: Fields<T>,
	rules: readonly ItemRule<T>[] = [],
): ItemRule<T>[] => {
	const fieldRules = fields
		.filter((f) => f?.rules != null)
		.flatMap((f) => f?.rules);

	return [...rules, ...(fieldRules as ItemRule<T>[])];
};

type Validate<T extends object> = ReturnType<typeof validate<T>>;

export interface UseValidatedForm<T extends object>
	extends UseForm<T>,
		Validate<T> {}

interface Props<T extends object> {
	fields?: Fields<T> | (() => Fields<T>);
	rules?: readonly ItemRule<T>[];
}

export const useValidatedFormCore = <T extends object>(
	state: FormValues<T>,
	setState: StateUpdater<FormValues<T>>,
	{ fields: _fields, rules }: Readonly<Props<T>>,
): UseValidatedForm<T> => {
	const fields = useMemo(() => invoke(_fields) ?? [], [_fields]);
	const allRules = useMemo(() => computeRules(fields, rules), [fields, rules]);
	const form = useFormCore(state, setState, allRules);
	const { values } = form;

	return {
		...useMemo(() => validate(fields, values), [fields, values]),
		...form,
	};
};

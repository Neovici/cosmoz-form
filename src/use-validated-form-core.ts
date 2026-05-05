import { invoke } from '@neovici/cosmoz-utils/function';
import { StateUpdater, useMemo } from '@pionjs/pion';
import type { Fields } from './types';
import { UseForm } from './use-form';
import { FormValues, useFormCore } from './use-form-core';
import type { ItemRule } from './use-items/apply-rules';
import { validate } from './validation';

type Validate<T extends object, C extends object = object> = ReturnType<
	typeof validate<T, C>
>;

export interface UseValidatedForm<T extends object, C extends object = object>
	extends UseForm<T, C>, Validate<T, C> {}

interface Props<T extends object, C extends object = object> {
	fields?: Fields<T, C> | (() => Fields<T, C>);
	rules?: readonly ItemRule<T, C>[];
	context?: C;
	touched?: boolean;
}

export const useValidatedFormCore = <
	T extends object,
	C extends object = object,
>(
	state: FormValues<T>,
	setState: StateUpdater<FormValues<T>>,
	{ fields: _fields, rules, context, touched }: Readonly<Props<T, C>>,
): UseValidatedForm<T, C> => {
	const fields = useMemo(() => invoke(_fields) ?? [], [_fields]);
	const form = useFormCore(state, setState, rules, context, touched);
	const { values } = form;

	return {
		...useMemo(
			() => validate(fields, values, context),
			[fields, values, context],
		),
		...form,
	};
};

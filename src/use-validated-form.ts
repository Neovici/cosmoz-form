import { useState } from '@pionjs/pion';
import { invoke } from './helpers';
import type { Fields } from './types';
import { processInitial } from './use-form';
import { FormValues } from './use-form-core';
import type { ItemRule } from './use-items/apply-rules';
import {
	computeRules,
	useValidatedFormCore,
	type UseValidatedForm,
} from './use-validated-form-core';

interface Props<T extends object, C extends object = object> {
	initial: Readonly<T>;
	fields?: Fields<T> | (() => Fields<T>);
	rules?: readonly ItemRule<T, C>[];
	context?: C;
}

export const useValidatedForm = <T extends object, C extends object = object>(
	options: Readonly<Props<T, C>>,
): UseValidatedForm<T, C> => {
	const [state, setState] = useState<FormValues<T>>(() => {
		const fields = invoke(options.fields) ?? [],
			allRules = computeRules(fields, options.rules),
			ini = processInitial(options.initial, allRules);

		return [ini, ini];
	});

	return useValidatedFormCore(state, setState, options);
};

export { UseValidatedForm };

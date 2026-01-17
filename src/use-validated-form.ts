import { useState } from '@pionjs/pion';
import type { Fields } from './types';
import { processInitial } from './use-form';
import type { ItemRule } from './use-items/apply-rules';
import { computeRules, useValidatedFormCore } from './use-validated-form-core';
// eslint-disable-next-line no-duplicate-imports
import type { UseValidatedForm } from './use-validated-form-core';
import { invoke } from './helpers';
import { FormValues } from './use-form-core';

interface Props<T extends object> {
	initial: Readonly<T>;
	fields?: Fields<T> | (() => Fields<T>);
	rules?: readonly ItemRule<T>[];
}

export const useValidatedForm = <T extends object>(
	options: Readonly<Props<T>>,
): UseValidatedForm<T> => {
	const [state, setState] = useState<FormValues<T>>(() => {
		const fields = invoke(options.fields) ?? [],
			allRules = computeRules(fields, options.rules),
			ini = processInitial(options.initial, allRules);

		return [ini, ini];
	});

	return useValidatedFormCore(state, setState, options);
};

export { UseValidatedForm };

import { useState } from '@pionjs/pion';
import { untouch } from './touch';
import { useFormCore } from './use-form-core';
// eslint-disable-next-line no-duplicate-imports
import type { FormValues, UseForm } from './use-form-core';
import { applyRules, ItemRule } from './use-items/apply-rules';

export const processInitial = <T extends object, C extends object = object>(
	initial: T,
	rules?: readonly ItemRule<T, C>[],
	context?: C,
): T =>
	untouch(applyRules({ oldItem: undefined, newItem: initial, rules, context }));

export const useForm = <T extends object>(
	initial: T,
	rules?: readonly ItemRule<T>[],
): UseForm<T> => {
	const [state, setState] = useState<FormValues<T>>(() => {
		const ini = processInitial(initial, rules);
		return [ini, ini];
	});

	return useFormCore(state, setState, rules);
};

export { UseForm };

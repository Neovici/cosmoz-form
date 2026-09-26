import { invoke$ } from '@neovici/cosmoz-utils/promise';
import { useCallback, useState } from '@pionjs/pion';
import { useSlot } from '../hooks/use-slot';
import { type Resolvable } from '../types';
import { type Dialog } from './form-dialog';
import { type Dialogable, wrapDialogable } from './use-form-dialogable';
import { useHeadlessSave } from './use-headless-save';

type Dialog$ = () => Promise<Dialog<object> | undefined>;

export const useFormDialogable$ = () => {
	const { value: dialog, show, claim, release } = useSlot<Dialog$>();
	const [rtkn, setRtkn] = useState<symbol>();
	const { saving, save } = useHeadlessSave();

	return {
		dialog,
		rtkn,
		setRtkn,
		open: useCallback(
			<T extends object>(resolvable: Resolvable<Dialogable<T>>) => {
				const token = {};
				let loading = false;
				const dialog$ = invoke$(resolvable).then(
					(dialogable: Dialogable<T>) => {
						const dialog = wrapDialogable(
							dialogable,
							() => release(token),
							setRtkn,
						) as unknown as Dialog<object>;
						if (!dialogable.headless) {
							if (!loading) show(token, () => dialog$);
							return dialog;
						}
						release(token);
						save(dialog, (failed) =>
							claim(token, () => Promise.resolve(failed)),
						);
					},
				);
				// The spinner may only take an empty slot, and not while a headless
				// save runs: this open may be a duplicate that is about to be dropped.
				if (!saving.current) loading = claim(token, () => dialog$);
			},
			[show, claim, release, setRtkn, save, saving],
		),
	};
};

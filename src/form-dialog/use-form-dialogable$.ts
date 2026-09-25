import { invoke$ } from '@neovici/cosmoz-utils/promise';
import { useCallback, useState } from '@pionjs/pion';
import { useOpened } from '../hooks/use-opened';
import { type Resolvable } from '../types';
import { type Dialog } from './form-dialog';
import { type Dialogable, wrapDialogable } from './use-form-dialogable';
import { useHeadlessSave } from './use-headless-save';

type DialogableSlot = { value: () => Promise<Dialog<object> | undefined> };

export const useFormDialogable$ = () => {
	const { opened: maybeSlot, onOpen, onClose } = useOpened<DialogableSlot>();
	const [rtkn, setRtkn] = useState<symbol>();
	const saveHeadless = useHeadlessSave();

	const slot = typeof maybeSlot === 'boolean' ? undefined : maybeSlot;

	return {
		dialog: slot?.value,
		rtkn,
		setRtkn,
		open: useCallback(
			<T extends object>(resolvable: Resolvable<Dialogable<T>>) => {
				const dialog$ = invoke$(resolvable).then(
					(dialogable: Dialogable<T>) => {
						const dialog = wrapDialogable(
							dialogable,
							onClose,
							setRtkn,
						) as unknown as Dialog<object>;
						if (!dialogable.headless) return dialog;
						onClose();
						saveHeadless(dialog, (failed) =>
							onOpen({ value: () => Promise.resolve(failed) }),
						);
					},
				);
				onOpen({ value: () => dialog$ });
			},
			[onOpen, onClose, setRtkn, saveHeadless],
		),
	};
};

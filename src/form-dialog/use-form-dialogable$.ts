import { invoke$ } from '@neovici/cosmoz-utils/promise';
import { useCallback, useState } from '@pionjs/pion';
import { useOpened } from '../hooks/use-opened';
import { type Resolvable } from '../types';
import { type Dialog } from './form-dialog';
import { type Dialogable, wrapDialogable } from './use-form-dialogable';

type DialogableSlot = { value: () => Promise<Dialog<object>> };

export const useFormDialogable$ = () => {
	const { opened: maybeSlot, onOpen, onClose } = useOpened<DialogableSlot>();
	const [rtkn, setRtkn] = useState<symbol>();

	const slot = typeof maybeSlot === 'boolean' ? undefined : maybeSlot;

	return {
		dialog: slot?.value,
		rtkn,
		setRtkn,
		open: useCallback(
			<T extends object>(resolvable: Resolvable<Dialogable<T>>) =>
				onOpen({
					value: () =>
						invoke$(resolvable).then(
							(dialogable: Dialogable<T>) =>
								wrapDialogable(
									dialogable,
									onClose,
									setRtkn,
								) as unknown as Dialog<object>,
						),
				}),
			[onClose, setRtkn],
		),
	};
};

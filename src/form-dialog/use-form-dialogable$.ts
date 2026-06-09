import { invoke$ } from '@neovici/cosmoz-utils/promise';
import { useCallback, useState } from '@pionjs/pion';
import { useOpened } from '../hooks/use-opened';
import { type Resolvable } from '../types';
import { Progress } from '../use-validated-form$';
import { type Dialog } from './form-dialog';
import { type Dialogable } from './use-form-dialogable';

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
								({
									...dialogable,
									onClose,
									onSave: (
										values: T,
										initial: T,
										setProgress?: (p: Progress) => void,
									) =>
										Promise.resolve(
											dialogable.onSave?.(values, initial, setProgress),
										).then(() => {
											if (!dialogable.preventRefresh) {
												setRtkn(Symbol('rtkn'));
											}
											if (!dialogable.preventClose) {
												onClose();
											}
										}),
								}) as unknown as Dialog<object>,
						),
				}),
			[onClose],
		),
	};
};

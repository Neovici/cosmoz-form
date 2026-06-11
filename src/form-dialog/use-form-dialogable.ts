import { useCallback, useState } from '@pionjs/pion';
import { useOpened } from '../hooks/use-opened';
import { Progress } from '../use-validated-form$';
import type { Dialog } from './form-dialog';

export interface Dialogable<T extends object> extends Dialog<T> {
	preventClose?: boolean;
	preventRefresh?: boolean;
}

export const wrapDialogable = <T extends object>(
	dialogable: Dialogable<T>,
	onClose: () => void,
	setRtkn: (s: symbol) => void,
): Dialog<T> => ({
	...dialogable,
	onClose,
	onSave: (values: T, initial: T, setProgress?: (p: Progress) => void) =>
		Promise.resolve(dialogable.onSave?.(values, initial, setProgress)).then(
			() => {
				if (!dialogable.preventRefresh) {
					setRtkn(Symbol('rtkn'));
				}
				if (!dialogable.preventClose) {
					onClose();
				}
			},
		),
});

export const useFormDialogable = () => {
	const {
		opened: maybeDialog,
		onOpen,
		onClose,
	} = useOpened<Dialogable<object>>();
	const [rtkn, setRtkn] = useState();
	const dialog = typeof maybeDialog === 'boolean' ? undefined : maybeDialog;
	return {
		dialog,
		rtkn,
		setRtkn,
		open: useCallback(
			<T extends object>(dialog: Dialogable<T>) =>
				onOpen(
					wrapDialogable(
						dialog,
						onClose,
						setRtkn,
					) as unknown as Dialogable<object>,
				),
			[onClose, setRtkn],
		),
	};
};

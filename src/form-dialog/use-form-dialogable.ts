import { useCallback, useState } from '@pionjs/pion';
import { useSlot } from '../hooks/use-slot';
import { Progress } from '../use-validated-form$';
import type { Dialog } from './form-dialog';
import { useHeadlessSave } from './use-headless-save';

export interface Dialogable<T extends object> extends Dialog<T> {
	preventClose?: boolean;
	preventRefresh?: boolean;
	headless?: boolean;
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
	const { value: dialog, show, claim, release } = useSlot<Dialogable<object>>();
	const [rtkn, setRtkn] = useState();
	const { save } = useHeadlessSave();
	return {
		dialog,
		rtkn,
		setRtkn,
		open: useCallback(
			<T extends object>(dialogable: Dialogable<T>) => {
				const token = {};
				const dialog = wrapDialogable(
					dialogable,
					() => release(token),
					setRtkn,
				) as unknown as Dialogable<object>;
				if (!dialogable.headless) return show(token, dialog);
				save(dialog, (failed) => claim(token, failed));
			},
			[show, claim, release, setRtkn, save],
		),
	};
};

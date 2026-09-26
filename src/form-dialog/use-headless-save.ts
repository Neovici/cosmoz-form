import { useCallback, useRef } from '@pionjs/pion';
import type { Failure } from '../add/render';
import type { Dialog } from './form-dialog';

export const useHeadlessSave = () => {
	const saving = useRef(false);
	const save = useCallback(
		<T extends object>(
			dialog: Dialog<T>,
			onFailure: (failed: Dialog<T>) => void,
		) => {
			// Nothing is rendered while saving, so a repeated click must not save twice.
			if (saving.current) return;
			saving.current = true;
			Promise.resolve(dialog.onSave?.(dialog.initial, dialog.initial))
				.then(undefined, (error: Failure) => onFailure({ ...dialog, error }))
				.finally(() => {
					saving.current = false;
				});
		},
		[],
	);
	return { saving, save };
};

import { useCallback, useMemo, useRef, useState } from '@pionjs/pion';
import type { Failure } from '../add/render';
import type { Dialog } from './form-dialog';

/** Reject a headless save with this error to cancel without refresh or recovery. */
export class SaveCancelled extends Error {}

export const useHeadlessSave = () => {
	const saving = useRef(false);
	const active = useMemo(
		() => new Map<string | undefined, Promise<void>>(),
		[],
	);
	const [pending, setPending] = useState(false);
	const save = useCallback(
		<T extends object>(
			dialog: Dialog<T>,
			onFailure: (failed: Dialog<T>) => void,
		) => {
			const existing = active.get(dialog.name);
			if (existing) return existing;
			saving.current = true;
			setPending(true);
			const request = Promise.resolve()
				.then(() => dialog.onSave?.(dialog.initial, dialog.initial))
				.then(() => undefined)
				.then(undefined, (error: Failure) => {
					if (!(error instanceof SaveCancelled)) {
						onFailure({ ...dialog, error });
					}
				})
				.finally(() => {
					active.delete(dialog.name);
					saving.current = active.size > 0;
					setPending(saving.current);
				});
			active.set(dialog.name, request);
			return request;
		},
		[active],
	);
	return { saving, pending, save };
};

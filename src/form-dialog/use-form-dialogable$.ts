import { invoke$ } from '@neovici/cosmoz-utils/promise';
import { useCallback, useMemo, useRef, useState } from '@pionjs/pion';
import { useSlot } from '../hooks/use-slot';
import { type Resolvable } from '../types';
import { type Dialog } from './form-dialog';
import { type Dialogable, wrapDialogable } from './use-form-dialogable';
import { useHeadlessSave } from './use-headless-save';

type Dialog$ = () => Promise<Dialog<object> | undefined>;
type Opening = { completed: Set<string | undefined> };

export const useFormDialogable$ = () => {
	const { value: dialog, show, claim, defer, release } = useSlot<Dialog$>();
	const [rtkn, setRtkn] = useState<symbol>();
	const [resolving, setResolving] = useState(0);
	const latest = useRef<Opening>();
	const openings = useMemo(() => new Set<Opening>(), []);
	const { saving, pending, save } = useHeadlessSave();

	return {
		dialog,
		rtkn,
		setRtkn,
		pending: pending || resolving > 0,
		open: useCallback(
			<T extends object>(resolvable: Resolvable<Dialogable<T>>) => {
				const token: Opening = { completed: new Set() };
				latest.current = token;
				openings.add(token);
				setResolving((count) => count + 1);
				let loading = false;
				const dialog$ = Promise.resolve()
					.then(() => invoke$(resolvable))
					.then<Dialog<object> | undefined>((dialogable: Dialogable<T>) => {
						openings.delete(token);
						const dialog = wrapDialogable(
							dialogable,
							() => release(token),
							setRtkn,
						) as unknown as Dialog<object>;
						if (!dialogable.headless) {
							if (!loading && latest.current === token) {
								show(token, () => dialog$);
							}
							return dialog;
						}
						release(token);
						if (token.completed.has(dialog.name)) return;
						return save(dialog, (failed) =>
							defer(token, () => Promise.resolve(failed)),
						).then(() => {
							// Resolvers already waiting during this save cannot repeat it later.
							for (const opening of openings) {
								opening.completed.add(dialog.name);
							}
							return undefined;
						});
					});
				if (!saving.current) loading = claim(token, () => dialog$);
				return dialog$
					.then(
						() => undefined,
						() => undefined,
					)
					.finally(() => {
						openings.delete(token);
						setResolving((count) => count - 1);
					});
			},
			[show, claim, defer, release, setRtkn, save, saving, openings],
		),
	};
};

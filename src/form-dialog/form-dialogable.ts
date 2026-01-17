import { nothing } from 'lit-html';
import { formDialog, Dialog } from './form-dialog';

export const formDialogable = <T extends { new (...args: any[]): any }>(
	base: T,
) =>
	class extends base {
		renderFormDialog<T extends object>(dialog: Dialog<T>) {
			return !dialog
				? nothing
				: () => {
						const onClose = (
							...args: Parameters<NonNullable<Dialog<T>['onClose']>>
						) => {
							this._dialog = undefined;
							dialog.onClose?.(...args);
						};
						return formDialog({
							...dialog,
							onClose,
							onSave: (...args) =>
								Promise.resolve(dialog.onSave?.(...args)).then(onClose),
						});
					};
		}
	};

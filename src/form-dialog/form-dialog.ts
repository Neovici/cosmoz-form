import '@neovici/cosmoz-button';
import { dialog, Props as DialogProps } from '@neovici/cosmoz-dialog';
import '@neovici/cosmoz-dialog/loading';
import { usePromise } from '@neovici/cosmoz-utils/hooks/use-promise';
import { invoke$ } from '@neovici/cosmoz-utils/promise';
import { useEffect } from '@pionjs/pion';
import { t } from 'i18next';
import { html, nothing } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { until } from 'lit-html/directives/until.js';
import { when } from 'lit-html/directives/when.js';
import { renderButton$, renderFailure$ } from '../add/render';
import { renderFields, renderStyles } from '../render';
import buttonStyles from '../styles/button';
import { Renderable, Resolvable } from '../types';
import { useFieldTouch } from '../use-field-touch';
import { Props as AddProps, useValidatedForm$ } from '../use-validated-form$';
import styles from './style.css';
interface Props<T extends object> extends DialogProps, AddProps<T> {
	heading: string;
	subtitle?: string;
	description?: Renderable;
	auto?: boolean;
	uncancelable?: boolean;
	hideCancelButton?: boolean;
	saveText?: string;
}

const FormDialog = <T extends object>(host: Props<T>) => {
	const {
			description,
			auto,
			uncancelable,
			hideCancelButton,
			saveText = t('OK'),
		} = host,
		{
			onSave: save,
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			disabled: _,
			save$,
			progress,
			...form
		} = useValidatedForm$(host),
		touch = useFieldTouch(form),
		[, , saveState] = usePromise(save$),
		empty = form.values == null || form.values === host.initial,
		// Save stays enabled so that trying to save can explain what is missing.
		// Only an empty form that may not be empty, with nothing to explain, can't be saved.
		disabled =
			form.fields.length > 0 && empty && !host.allowEmpty && !form.invalid,
		onSave = () => {
			if (touch.submit((host as unknown as HTMLElement).shadowRoot)) save();
		},
		onKeyDown = (e: KeyboardEvent) => {
			const target = e.composedPath()[0];
			if (
				e.key !== 'Enter' ||
				e.defaultPrevented ||
				e.isComposing ||
				e.shiftKey ||
				e.ctrlKey ||
				e.altKey ||
				e.metaKey ||
				!(target instanceof HTMLInputElement) ||
				['checkbox', 'radio', 'file', 'button', 'submit'].includes(
					target.type,
				) ||
				disabled ||
				(save$ && saveState === 'pending')
			) {
				return;
			}
			e.preventDefault();
			onSave();
		};

	useEffect(() => {
		if (!auto) {
			return;
		}

		save();
	}, [auto]);

	return html` <style>
			${buttonStyles} ${renderStyles(form)}${styles}
		</style>
		${when(
			description,
			() => html`<div class="description">${description}</div>`,
		)}
		<div
			class="form"
			part="form"
			@focusin=${touch.onFocusIn}
			@focusout=${touch.onFocusOut}
			@keydown=${onKeyDown}
		>
			${renderFields({ ...form, touchedFields: touch.touchedFields })}
		</div>
		${renderFailure$(save$)}
		<div class="buttons">
			${renderButton$({ save$, onSave, disabled, title: saveText, progress })}
			${when(
				!hideCancelButton,
				() =>
					html`<cosmoz-button
						class="button"
						variant="secondary"
						value="cancel"
						?disabled=${uncancelable}
					>
						${t('Cancel')}
					</cosmoz-button>`,
			)}
		</div>`;
};

customElements.define(
	'cosmoz-form-dialog',
	dialog<Props<object>>(FormDialog, { observedAttributes: ['allow-empty'] }),
);

// backwards-compat alias — consumers should migrate to <cosmoz-form-dialog>
customElements.define(
	'cosmoz-form-dialog-next',
	dialog<Props<object>>(FormDialog, { observedAttributes: ['allow-empty'] }),
);

export interface Dialog<T extends object> extends Props<T> {
	name?: string;
}

export const formDialog = <T extends object>(props?: Dialog<T>): Renderable => {
	if (!props) return nothing;
	const dialog = html`<cosmoz-form-dialog
		name=${ifDefined(props.name)}
		?allow-empty=${props.allowEmpty}
		.heading=${props.heading}
		.subtitle=${props.subtitle}
		.icon=${props.icon}
		.description=${props.description}
		.fields=${props.fields}
		.initial=${props.initial}
		.rules=${props.rules}
		.onClose=${props.onClose}
		.onSave=${props.onSave}
		.auto=${props.auto}
		.uncancelable=${props.uncancelable}
		.hideCancelButton=${props.hideCancelButton}
		.saveText=${props.saveText}
	></cosmoz-form-dialog>`;
	return dialog;
};

export const formDialog$ = <T extends object>(
	maybeProps$: Resolvable<Dialog<T>> | undefined,
) =>
	when(maybeProps$, (props$) =>
		until(
			invoke$(props$).then(formDialog, () => nothing),
			html`<cosmoz-dialog-loading></cosmoz-dialog-loading>`,
		),
	);

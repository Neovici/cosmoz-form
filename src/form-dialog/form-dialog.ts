import '@neovici/cosmoz-button';
import { dialog, Props as DialogProps } from '@neovici/cosmoz-dialog';
import '@neovici/cosmoz-dialog/loading';
import { usePromise } from '@neovici/cosmoz-utils/hooks/use-promise';
import { invoke$ } from '@neovici/cosmoz-utils/promise';
import { useEffect } from '@pionjs/pion';
import { t } from 'i18next';
import { html, nothing } from 'lit-html';
import { guard } from 'lit-html/directives/guard.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { keyed } from 'lit-html/directives/keyed.js';
import { until } from 'lit-html/directives/until.js';
import { when } from 'lit-html/directives/when.js';
import {
	Failure,
	renderButton$,
	renderFailure,
	renderFailure$,
} from '../add/render';
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
	error?: Failure;
}

const FormDialog = <T extends object>(host: Props<T>) => {
	const {
			description,
			auto,
			uncancelable,
			hideCancelButton,
			saveText = t('OK'),
			error,
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
		confirmOnly = form.fields.length === 0,
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
		(host as unknown as HTMLElement).toggleAttribute('alert', confirmOnly);
	}, [confirmOnly]);

	useEffect(() => {
		if (!auto) {
			return;
		}

		save();
	}, [auto]);

	// Follow the host OS while keeping DOM, tab and visual order aligned.
	const cancelFirst = /Mac|iPhone|iPad|iPod/iu.test(
		navigator.platform + ' ' + navigator.userAgent,
	);
	const confirmButton = renderButton$({
		save$,
		onSave,
		disabled,
		title: saveText,
		progress,
	});
	const cancelButton = when(
		!hideCancelButton,
		() =>
			html`<cosmoz-button
				class="button"
				variant="secondary"
				value="cancel"
				?disabled=${uncancelable}
				?autofocus=${confirmOnly}
			>
				${t('Cancel')}
			</cosmoz-button>`,
	);

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
		${save$ ? renderFailure$(save$) : when(error, renderFailure)}
		<div class="buttons">
			${cancelFirst
				? [cancelButton, confirmButton]
				: [confirmButton, cancelButton]}
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
	key?: object;
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
		.error=${props.error}
	></cosmoz-form-dialog>`;
	return keyed(props.key, dialog);
};

export const formDialog$ = <T extends object>(
	maybeProps$: Resolvable<Dialog<T> | undefined> | undefined,
) =>
	guard([maybeProps$], () =>
		maybeProps$
			? until(
					invoke$(maybeProps$).then(formDialog, () => nothing),
					html`<cosmoz-dialog-loading></cosmoz-dialog-loading>`,
				)
			: nothing,
	);

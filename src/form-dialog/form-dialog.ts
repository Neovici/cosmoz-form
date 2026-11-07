import '@neovici/cosmoz-button';
import { dialog, Props as DialogProps } from '@neovici/cosmoz-dialog';
import '@neovici/cosmoz-dialog/loading';
import { usePromise } from '@neovici/cosmoz-utils/hooks/use-promise';
import { invoke$ } from '@neovici/cosmoz-utils/promise';
import { useEffect, useHost } from '@pionjs/pion';
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
			disabled,
			save$,
			progress,
			...form
		} = useValidatedForm$(host),
		el = useHost(),
		onSave = () => {
			save();
			if (!form.invalid) return;
			const first = form.fields.find((f) => 'error' in f && f.error)?.id;
			el.shadowRoot
				?.querySelector<HTMLElement>(`[name="${String(first)}"]`)
				?.focus();
		},
		// Custom inputs may not render their error, so a failed attempt also
		// names the first one next to the buttons.
		firstError = form.touched
			? form.fields.find(
					(f): f is typeof f & { error: string } => 'error' in f && !!f.error,
				)
			: undefined,
		[, , saveState] = usePromise(save$),
		saving = save$ != null && saveState === 'pending',
		// Enter in a single-line input is the keyboard form of the Save button,
		// unless another component already handled it (e.g. an open autocomplete).
		onKeyDown = (e: KeyboardEvent) => {
			if (
				e.key !== 'Enter' ||
				e.defaultPrevented ||
				e.isComposing ||
				!(e.composedPath()[0] instanceof HTMLInputElement) ||
				disabled ||
				saving
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

		onSave();
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
		<div class="form" part="form" @keydown=${onKeyDown}>
			${renderFields(form)}
		</div>
		${save$ ? renderFailure$(save$) : when(error, renderFailure)}
		${when(firstError, (f) =>
			renderFailure({
				message: String(f.error),
				content:
					typeof f.label === 'string' ? `${f.label}: ${f.error}` : f.error,
			}),
		)}
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

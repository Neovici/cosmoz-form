import '@neovici/cosmoz-button';
import { dialog, Props as DialogProps } from '@neovici/cosmoz-dialog';
import '@neovici/cosmoz-dialog/loading';
import { invoke$ } from '@neovici/cosmoz-utils/promise';
import { component, useEffect, useState } from '@pionjs/pion';
import { t } from 'i18next';
import { html, nothing } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { until } from 'lit-html/directives/until.js';
import { when } from 'lit-html/directives/when.js';
import { renderButton$, renderFailure$ } from '../add/render';
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
	save$?: PromiseLike<unknown>;
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
			onSave,
			disabled,
			save$ = host.save$,
			progress,
			...form
		} = useValidatedForm$(host);

	useEffect(() => {
		if (!auto) {
			return;
		}

		onSave();
	}, [auto]);

	return html` <style>
			${buttonStyles} ${renderStyles(form)}${styles}
		</style>
		${when(
			description,
			() => html`<div class="description">${description}</div>`,
		)}
		<div class="form" part="form">${renderFields(form)}</div>
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
	if (props.auto) {
		return html`<cosmoz-form-dialog-auto
			.dialog=${props}
		></cosmoz-form-dialog-auto>`;
	}
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
		.save$=${props.save$}
	></cosmoz-form-dialog>`;
	return dialog;
};

// Saves without showing anything; the dialog only opens to show a failure.
const AutoFormDialog = ({ dialog }: { dialog: Dialog<object> }) => {
	const [failed$, setFailed$] = useState<PromiseLike<unknown>>();

	// Once per element: parents re-render with a new dialog object, which
	// must not trigger another save.
	useEffect(() => {
		const save$ = Promise.resolve(
			dialog.onSave?.(dialog.initial, dialog.initial),
		);
		save$.catch(() => setFailed$(save$));
	}, []);

	return failed$
		? formDialog({ ...dialog, auto: false, save$: failed$ })
		: nothing;
};

customElements.define(
	'cosmoz-form-dialog-auto',
	component(AutoFormDialog, { useShadowDOM: false }),
);

export const formDialog$ = <T extends object>(
	maybeProps$: Resolvable<Dialog<T>> | undefined,
) =>
	when(maybeProps$, (props$) =>
		until(
			invoke$(props$).then(formDialog, () => nothing),
			html`<cosmoz-dialog-loading></cosmoz-dialog-loading>`,
		),
	);

import '@neovici/cosmoz-button';
import { dialog, Props as DialogProps } from '@neovici/cosmoz-dialog';
import '@neovici/cosmoz-dialog/loading';
import { xCircleIcon } from '@neovici/cosmoz-icons/untitled';
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
import { Props as AddProps, useValidatedForm$ } from '../use-validated-form$';
import styles from './style.css';
interface Props<T extends object> extends DialogProps, AddProps<T> {
	heading: string;
	description?: Renderable;
	auto?: boolean;
	uncancelable?: boolean;
	hideCancelButton?: boolean;
	saveText?: string;
}

const FormDialog = <T extends object>(host: Props<T>) => {
	const { auto, uncancelable, hideCancelButton, saveText = t('OK') } = host,
		{ onSave, disabled, save$, progress, ...form } = useValidatedForm$(host);

	useEffect(() => {
		if (!auto) {
			return;
		}

		onSave();
	}, [auto]);

	return html` <style>
			${buttonStyles} ${renderStyles(form)}${styles}
		</style>
		<div class="form" part="form">${renderFields(form)}</div>
		<div class="buttons">
			${renderFailure$(save$)}
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
						${xCircleIcon({ slot: 'prefix' })} ${t('Cancel')}
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
		.title=${props.heading}
		.subtitle=${props.description}
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
	props$: Resolvable<Dialog<T>> | undefined,
) =>
	until(
		invoke$(props$).then(formDialog, () => nothing),
		html`<cosmoz-dialog-loading></cosmoz-dialog-loading>`,
	);

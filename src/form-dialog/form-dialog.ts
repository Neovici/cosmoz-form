import { useEffect } from '@pionjs/pion';
import { html, nothing } from 'lit-html';
import { when } from 'lit-html/directives/when.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { _ } from '@neovici/cosmoz-i18next';
import { portal } from '@neovici/cosmoz-utils/directives/portal';
import { dialog, Props as DialogProps } from '../../dialog';
import buttonStyles from '../../../styles/button';
import { renderFields, renderStyles } from '../render';
import { renderFailure$, renderButton$ } from '../add/render';
import { useValidatedForm$, Props as AddProps } from '../use-validated-form$';
import '../../cz-spinner';
import styles from './style.css';
import { invoke } from '@neovici/cosmoz-utils/function';
import { until } from 'lit-html/directives/until.js';
import { Renderable, Resolvable } from '../types';

interface Props<T extends object> extends DialogProps, AddProps<T> {
	heading: string;
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
			saveText = _('OK'),
		} = host,
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
		${when(description, () => html`<p class="description">${description}</p>`)}
		<div class="form" part="form">${renderFields(form)}</div>
		<div class="buttons">
			${renderFailure$(save$)}
			${renderButton$({ save$, onSave, disabled, title: saveText, progress })}
			${when(
				!hideCancelButton,
				() =>
					html`<button class="button" value="cancel" ?disabled=${uncancelable}>
						${_('Cancel')}
					</button>`,
			)}
		</div>`;
};

customElements.define(
	'cosmoz-form-dialog-next',
	dialog<Props<object>>(FormDialog, { observedAttributes: ['allow-empty'] }),
);

export interface Dialog<T extends object> extends Props<T> {
	name?: string;
	title?: string;
	renderInPortal?: boolean;
	backdrop?: boolean;
}

export const formDialog = <T extends object>(props?: Dialog<T>): Renderable => {
	if (!props) return nothing;
	const dialog = html`<cosmoz-form-dialog-next
		?backdrop=${props.backdrop ?? true}
		name=${ifDefined(props.name)}
		?allow-empty=${props.allowEmpty}
		.heading=${props.heading ?? props.title}
		.description=${props.description}
		.fields=${props.fields}
		.initial=${props.initial}
		.rules=${props.rules}
		.onClose=${props.onClose}
		.onSave=${props.onSave}
		.auto=${props.auto}
		.uncancelable=${props.uncancelable}
		.hideCancelButton=${props.hideCancelButton}
		.manualFocus=${props.manualFocus}
		.saveText=${props.saveText}
	></cosmoz-form-dialog-next>`;
	return props.renderInPortal ? portal(dialog) : dialog;
};

export const formDialog$ = <T extends object>(props$: Resolvable<Dialog<T>>) =>
	until(
		Promise.resolve(invoke(props$)).then(formDialog, () => nothing),
		html`<cosmoz-dialog-loading></cosmoz-dialog-loading>`,
	);

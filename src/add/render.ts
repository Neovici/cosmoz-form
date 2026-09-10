import '@neovici/cosmoz-button';
import '@neovici/cosmoz-spinner';
import { html, nothing } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { until } from 'lit-html/directives/until.js';
import { when } from 'lit-html/directives/when.js';
import { renderFields } from '../render';
import { UseValidatedForm } from '../use-validated-form-core';
import { Progress } from './types';
export const nothing$ = () => nothing;
export const then$ = <P, R>(p$?: PromiseLike<P>, fn?: () => R) =>
	Promise.resolve(p$).then(fn, fn);

/**
 * A save failure. `message` is the plain-text summary (toasts, logging);
 * `content`, when present, is rendered in the failure block instead —
 * allowing rich markup (e.g. a structured list of row errors). The failure
 * block renders with `white-space: pre-wrap`, so keep templates free of
 * indentation whitespace.
 */
export interface Failure {
	message: string;
	content?: unknown;
}

const failureHtml = (e: Failure) => e.content ?? e.message;

interface RenderAddFields<T extends object> extends UseValidatedForm<T> {
	error?: Error | ({ message: string } & Partial<Failure>);
}
export const renderAddFields = <T extends object>({
	error,
	...thru
}: RenderAddFields<T>) => [
	renderFields(thru),
	when(error, (err) => html`<div class="failure">${failureHtml(err)}</div>`),
];

export const renderFailure$ = <T>(save$?: PromiseLike<T>) =>
	until(
		save$?.then(
			nothing$,
			(e: Failure) => html`<div class="failure">${failureHtml(e)}</div>`,
		),
		nothing,
	);

interface Button {
	slot?: string;
	content?: unknown;
	progress?: boolean;
	disabled?: boolean;
	title: string;
	onSave: () => void;
	onClick?: () => void;
}
interface RenderButton extends Omit<Button, 'progress'> {
	progress?: Progress;
	save$?: PromiseLike<unknown>;
}
export const renderButton$ = ({ save$, progress, ...thru }: RenderButton) => {
	const button = ({
		onSave,
		onClick = onSave,
		title,
		disabled,
		progress,
		content = nothing,
		slot,
	}: Button) =>
		html` <cosmoz-button
			class="button save"
			slot=${ifDefined(slot)}
			?disabled=${disabled}
			?data-progress=${progress}
			@click=${(ev: MouseEvent) => {
				ev.stopPropagation();
				return onClick();
			}}
		>
			${content} ${title}
		</cosmoz-button>`;
	return until(
		then$(save$, () => button(thru)),
		button({
			...thru,
			disabled: true,
			progress: true,
			content: html`<cosmoz-spinner></cosmoz-spinner> ${when(progress, (p) =>
					p.join('/'),
				)}`,
		}),
	);
};

interface RenderAddForm {
	button: string;
	tab: string;
	tabCard?: string;
	hash?: string;
}

interface RenderAddFormOpts<T extends object> extends RenderAddFields<T> {
	disabled?: boolean;
	save$?: PromiseLike<unknown>;
	onSave: () => void;
}
export const renderAddForm$ =
	<T extends object>({
		button: buttonTitle,
		tab,
		tabCard = tab,
		hash,
	}: RenderAddForm) =>
	({ disabled, save$, onSave, ...pass }: RenderAddFormOpts<T>) =>
		html` <cosmoz-tabs class="flex" hash-param=${ifDefined(hash)}>
				<cosmoz-tab name="overview" heading=${tab}>
					<cosmoz-tab-card heading=${tabCard}>
						${renderFields(pass)} ${renderFailure$(save$)}
					</cosmoz-tab-card>
				</cosmoz-tab>
			</cosmoz-tabs>
			<cosmoz-bottom-bar active>
				${renderButton$({ save$, onSave, disabled, title: buttonTitle })}
			</cosmoz-bottom-bar>`;

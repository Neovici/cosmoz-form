import { html, nothing } from 'lit-html';
import { until } from 'lit-html/directives/until.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';
import { renderFields } from '../render';
import { Progress } from './types';
import { UseValidatedForm } from '../use-validated-form-core';

export const nothing$ = () => nothing;
export const then$ = <P, R>(p$?: PromiseLike<P>, fn?: () => R) =>
	Promise.resolve(p$).then(fn, fn);

interface RenderAddFields<T extends object> extends UseValidatedForm<T> {
	error?: Error | { message: string };
}
export const renderAddFields = <T extends object>({
	error,
	...thru
}: RenderAddFields<T>) => [
	renderFields(thru),
	when(error, (err) => html`<div class="failure">${err.message}</div>`),
];

export const renderFailure$ = <T>(save$?: PromiseLike<T>) =>
	until(
		save$?.then(nothing$, (e) => html`<div class="failure">${e.message}</div>`),
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
		html` <button
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
		</button>`;
	return until(
		then$(save$, () => button(thru)),
		button({
			...thru,
			disabled: true,
			progress: true,
			content: html`<cz-spinner></cz-spinner> ${when(progress, (p) =>
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

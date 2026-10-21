import {
	alertCircleIcon,
	helpCircleIcon,
} from '@neovici/cosmoz-icons/untitled';
import { Renderable } from '@pionjs/pion';
import { html } from 'lit-html';
import { when } from 'lit-html/directives/when.js';

export const renderPrefix = <T>(prefix: T) =>
	when(prefix, () => html`<span slot="prefix">${prefix}</span>`);

export const renderSuffix = <T>(suffix: T) =>
	when(suffix, () => html`<span slot="suffix">${suffix}</span>`);

export const renderWarning = (msg: Renderable, slot = 'suffix') =>
	when(msg, () =>
		alertCircleIcon({
			slot,
			title: msg as string,
			width: '22',
			height: '22',
			styles: 'color: var(--cz-color-text-warning); vertical-align: middle',
		}),
	);

export const renderDescription = (description: Renderable, slot = 'suffix') =>
	when(description, () =>
		helpCircleIcon({
			slot,
			title: description as string,
			width: '22',
			height: '22',
			styles:
				'color: var(--cz-color-text-primary); vertical-align: middle; cursor: help',
		}),
	);

/**
 * The text of the help and warning icons, for cosmoz-input's `description`: the
 * icons only have a `title`, which assistive technology doesn't reliably read.
 */
export const readable = (...texts: Renderable[]) =>
	texts
		.filter((t): t is string => typeof t === 'string' && t !== '')
		.join('. ') || undefined;

export const renderContents = ({
	prefix,
	suffix,
	warning,
	description,
}: {
	prefix?: Renderable;
	suffix?: Renderable;
	warning?: Renderable;
	description?: Renderable;
}) => [
	renderPrefix(prefix),
	renderSuffix(suffix),
	renderWarning(warning),
	renderDescription(description),
];

import { html } from 'lit-html';
import { when } from 'lit-html/directives/when.js';
import { warningIcon, helpOutlineIcon } from '@neovici/cosmoz-icons';
import { Renderable } from '../types';

export const renderPrefix = <T>(prefix: T) =>
	when(prefix, () => html`<span slot="prefix">${prefix}</span>`);

export const renderSuffix = <T>(suffix: T) =>
	when(suffix, () => html`<span slot="suffix">${suffix}</span>`);

export const renderWarning = <T>(msg?: T, slot = 'suffix') =>
	when(msg, () =>
		warningIcon({
			slot,
			title: msg,
			width: '22',
			height: '22',
			styles: 'color: var(--paper-amber-500); vertical-align: middle',
		}),
	);

export const renderDescription = <T>(description?: T, slot = 'suffix') =>
	when(description, () =>
		helpOutlineIcon({
			slot,
			title: description,
			width: '22',
			height: '22',
			styles:
				'color: var(--cz-text-color); vertical-align: middle; cursor: help',
		}),
	);

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

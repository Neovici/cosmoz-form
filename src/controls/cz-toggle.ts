import { css, sheet } from '@neovici/cosmoz-utils';
import { component, html, useCallback } from '@pionjs/pion';
import { live } from 'lit-html/directives/live.js';
import { when } from 'lit-html/directives/when.js';
import toggleStyles from '../styles/toggle';

interface Host extends Element {
	label: string;
	value?: boolean;
	disabled?: boolean;
	error?: string;
}

const CzToggle = (host: Host) => {
	const { label, value, disabled, error } = host;
	const onChange = useCallback(
		(e: InputEvent) =>
			host.dispatchEvent(
				new CustomEvent('change', {
					detail: (<HTMLInputElement>e.target).checked,
				}),
			),
		[],
	);

	return html`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${live(!!value)}
			?disabled=${disabled}
			@change=${onChange}
		/>
		${when(label, () => html`<label for="toggle">${label}</label>`)}
		<slot name="suffix"></slot>
		${when(error, (error) => html`<div class="failure">${error}</div>`)} `;
};

const style = css`
	${toggleStyles}

	:host {
		display: block;
	}

	:host > * {
		vertical-align: middle;
		line-height: 0px;
	}

	::slotted(*) {
		margin-left: 5px;
	}
`;

customElements.define(
	'cz-toggle',
	component(CzToggle, { styleSheets: [sheet(style)] }),
);

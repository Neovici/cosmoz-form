import { html } from 'lit-html';
import '@neovici/cosmoz-input';
import { input } from './base';

export const basic = (render: <T>(field: T) => unknown) =>
	input(
		(field) =>
			html`<div class="input input-basic" name=${field.id}>
				${render(field)}
			</div>`,
	);

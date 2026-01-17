import { html } from 'lit-html';
import { when } from 'lit-html/directives/when.js';
import { updateWith } from '../../../util/polymer-property-changed-event.js';
import { input } from './base';

import '../../cz-user-mention-comment/cz-user-mention-comment';
import { InputBaseOpts } from '../types.js';

export const comment = input(
	<T extends object, K extends keyof T, V extends T[K]>({
		label,
		onChange,
		value,
		error,
	}: InputBaseOpts<T, K, V>) => html`
		<div class="input input-comment">
			<cz-user-mention-comment
				title="${label}"
				.comment=${value}
				@comment-changed=${updateWith(onChange!)}
				comment-label=${label}
			>
			</cz-user-mention-comment>
			${when(error, () => html`<div class="failure">${error}</div>`)}
		</div>
	`,
);

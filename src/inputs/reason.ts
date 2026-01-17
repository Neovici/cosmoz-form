import { html } from 'lit-html';
import { input, InputBaseProps } from './base';
import '../../cz-reason-selector/index.js';
import { updateWith } from '../../../util/polymer-property-changed-event.js';
import { _ } from '@neovici/cosmoz-i18next';

interface Reason {
	id: string;
	requiresComment: boolean;
}
interface Value {
	reason?: Reason;
	comment?: string;
}

export interface ReasonProps {
	reasons?: Value[];
	hideSingleReason?: boolean;
}

export const reason = input(
	<T extends object, K extends keyof T, V extends T[K]>({
		label,
		onChange,
		value,
		error,
		hideSingleReason,
		reasons,
	}: InputBaseProps<T, K, V>) => html`
		<div class="input input-reason">
			<cz-reason-selector
				title=${label}
				?hide-single-reason=${hideSingleReason}
				.reasons=${reasons}
				.reasonComment=${(value as Value)?.comment}
				.selectedReasonId=${(value as Value)?.reason?.id}
				@reason-comment-changed=${updateWith<string>((comment: string) =>
					onChange!({ ...value, comment } as V),
				)}
				@selected-reason-changed=${updateWith<Reason>((reason: Reason) =>
					onChange!({ ...value, reason } as V),
				)}
			>
			</cz-reason-selector>
			${error && html`<div class="failure">${error}</div>`}
		</div>
	`,
);

export const validReason = (value: Value) => {
	const reason = value?.reason;
	if (!reason) {
		return _('Reason is required');
	} else if (reason.requiresComment && !value?.comment) {
		return _('Comment is required');
	}
};

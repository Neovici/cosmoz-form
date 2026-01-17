import { html } from 'lit-html';
import { live } from 'lit-html/directives/live.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { _ } from '@neovici/cosmoz-i18next';
import { input } from './base';
import { missing } from '../validation';
import { InputBaseOpts } from '../types';

interface Value {
	to: string;
	from: string;
}

interface Ev extends Omit<Event, 'target'> {
	target: HTMLInputElement;
}

const checkFormat = (value: unknown): value is Value | undefined =>
	value === undefined || typeof value === 'object';

const _dateRange = (type: 'date' | 'datetime-local') =>
	input(
		<T extends object, K extends keyof T, V extends T[K]>({
			id,
			label,
			error,
			warning,
			disabled,
			onChange,
			value,
		}: InputBaseOpts<T, K, V>) => {
			if (!checkFormat(value)) return;
			return [
				html`<cosmoz-input
					class="input input-date-range"
					type=${type}
					?data-warning=${!!warning}
					name=${String(id) + 'From'}
					?disabled=${disabled}
					?invalid=${!!(error as any)?.from}
					.errorMessage=${(error as any)?.from}
					.label=${_('From ({0})', label)}
					.value=${live(value?.from)}
					.max=${ifDefined(value?.to)}
					@change=${({ target }: Ev) =>
						onChange!({ ...value, from: target.value } as V)}
				></cosmoz-input>`,
				html`<cosmoz-input
					class="input input-date-range"
					type=${type}
					?data-warning=${!!warning}
					name=${String(id) + 'To'}
					?disabled=${disabled}
					?invalid=${!!(error as any)?.to}
					.errorMessage=${(error as any)?.to}
					.label=${_('To ({0})', label)}
					.value=${live(value?.to)}
					.min=${ifDefined(value?.from)}
					@change=${({ target }: Ev) =>
						onChange!({ ...value, to: target.value } as V)}
				></cosmoz-input>`,
			];
		},
	);

export const dateRange = _dateRange('date'),
	dateTimeRange = _dateRange('datetime-local'),
	// error is typed as string | false, but here we have an object with errors per field
	// TODO: review how the error is handled
	missingRange = (value?: Value) =>
		(missing(value?.from) || missing(value?.to)) && {
			from: missing(value?.from) && _('Required'),
			to: missing(value?.to) && _('Required'),
		};

import { _ } from '@neovici/cosmoz-i18next';
import { isoDate } from '@neovici/cosmoz-utils/date';
import { invoke } from '@neovici/cosmoz-utils/function';
import {
	component,
	useCallback,
	useContext,
	useMemo,
	useState,
} from '@pionjs/pion';
import { html } from 'lit-html';
import { live } from 'lit-html/directives/live.js';
import { getYear } from 'date-fns/getYear';
import { parseISO } from 'date-fns/parseISO';
import { input, InputBaseProps } from './base';
import { BootInfo } from '../../../context/boot-info';

/*
	TODO: render initial value
	TODO: call options only when active
	TODO: handle options errors
*/
export const month = input(
	<T extends object, K extends keyof T, V extends T[K]>({
		id,
		label,
		error,
		disabled,
		onChange,
		options,
		value,
		values,
	}: InputBaseProps<T, K, V>) =>
		html`<cz-month-selector
			class="input input-month"
			.id=${id}
			.label=${label}
			?disabled=${disabled}
			.error=${error}
			.onChange=${onChange}
			.options=${options}
			.value=${value}
			.values=${values}
		></cz-month-selector>`,
);

interface Info {
	active?: boolean;
	value?: string;
	values?: Record<PropertyKey, unknown>;
}

interface MonthProps {
	id: string;
	label?: string;
	error?: string;
	disabled?: boolean;
	options: <T extends Info>(r: T) => Promise<string[]>;
	onChange: (v: string) => void;
	value: string;
	values: Record<string, unknown>;
}

const defaultOptions = () => Promise.resolve([new Date().toISOString()]);
const MonthSelector = ({
	id,
	label,
	error,
	disabled,
	options = defaultOptions,
	onChange,
	value,
	values,
}: MonthProps) => {
	const [year, setYear] = useState(),
		options$ = useCallback(
			(info: Info) => Promise.resolve(invoke(options, info)),
			[options],
		),
		availableDates$ = useCallback(
			(info: Info) =>
				options$(info).then((options: string[]) =>
					options.map((o) => parseISO(o)),
				),
			[options$],
		),
		years$ = useCallback(
			async (info: Info) => {
				if (!info.active) return;
				return Array.from(
					(await availableDates$({ ...info, value, values })).reduce(
						(acc, date) => acc.add(getYear(date)),
						new Set(),
					),
				);
			},
			[availableDates$, value, values],
		),
		bootInfo = useContext(BootInfo),
		language = bootInfo.currentUser?.language,
		formatter = useMemo(
			() => new Intl.DateTimeFormat(language, { month: 'long' }),
			[language],
		),
		months$ = useCallback(
			async (info: Info) => {
				if (!info.active) return;
				if (!year) {
					return [];
				}
				return (await availableDates$({ ...info, value, values }))
					.filter((date) => getYear(date) === year)
					.map((date) => ({ value: date, label: formatter.format(date) }));
			},
			[availableDates$, year, formatter, value, values],
		);

	return html`<style>
			:host {
				display: flex;
				align-items: flex-end;
			}
			cosmoz-autocomplete {
				flex: 1;
				margin-left: 10px;
			}
			label {
				font-size: 16px;
				padding-bottom: 13px;
			}
		</style>
		<label for=${id + '-month'}>${label}</label>
		<cosmoz-autocomplete
			name=${id + '-year'}
			?disabled=${disabled}
			.value=${live(year)}
			.label=${_('Year')}
			.source=${years$}
			.limit=${1}
			.onChange=${(options: { value: string }[]) => setYear(options[0])}
		></cosmoz-autocomplete
		><cosmoz-autocomplete
			name=${id + '-month'}
			?disabled=${disabled || !year}
			?invalid=${!!error}
			.errorMessage=${error}
			.label=${_('Month')}
			.limit=${1}
			.source=${months$}
			.textProperty=${'label'}
			.onChange=${(options: { value: string }[]) =>
				onChange(isoDate(options[0]?.value))}
		></cosmoz-autocomplete>`;
};

customElements.define(
	'cz-month-selector',
	component(MonthSelector, { observedAttributes: ['disabled'] }),
);

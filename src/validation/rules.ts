import { _ } from '@neovici/cosmoz-i18next';
import { luhn as isLuhn } from '../util/luhn';
import { gln as isGln } from '../util/gln';
import { ensureDate } from '@neovici/cosmoz-utils/date';
import { Rule } from '../types';
import { format } from 'date-fns/format';
import { addDays } from 'date-fns/fp/addDays';

export const STRING_TEXT = 200,
	STRING_LONG = 50,
	STRING_SHORT = 20;

export const missing = <V>(value: V) =>
	value == null ||
	value === '' ||
	Number.isNaN(value) ||
	(Array.isArray(value) && value.length < 1);

export const exists = <V>(value: V): value is NonNullable<V> => !missing(value);

export const required = <T>(value: T) => missing(value) && _('Required');

export const requiredWhen =
	<T extends object, K extends keyof T, V extends T[K]>(
		condition: (value: V, values: T) => boolean,
	): Rule<T, K, V> =>
	(value: V, values: T) =>
		condition(value, values) ? required(value) : false;

export const requireEither =
	<T extends object, K extends keyof T, V extends T[K], P extends keyof T>(
		otherField: P,
	): Rule<T, K, V> =>
	(value: V, values: T) =>
		missing(value) && missing(values[otherField]) && _('Required');

export function notAnOption<
	T extends object,
	K extends keyof T,
	V extends T[K],
	O,
	OK extends keyof O,
>(options: O[], key?: OK): Rule<T, K, V> {
	return (value) =>
		!missing(value) &&
		options != null &&
		!options.some((option) => option[(key ?? 'value') as keyof O] === value) &&
		_('Option not among possible values');
}

export const tooShort =
	(length: number) =>
	<V extends string | undefined>(value: V) =>
		exists(value) &&
		value.length < length &&
		_('Must have at least {0} characters', length);

export const tooLong =
	(length: number) =>
	<V extends string | undefined>(value: V) =>
		exists(value) &&
		value.length > length &&
		_('Must have maximum {0} characters', length);

export const exactLength =
	(length: number) =>
	<V extends string | undefined>(value: V) =>
		exists(value) &&
		value.length !== length &&
		_('Must have exactly {0} characters', length);

export const tooSmall =
	(min: number) =>
	<V extends number | undefined>(value: V) =>
		exists(value) &&
		value < min &&
		_('Value must be greater or equal to {0}', min);

export const tooSmallStrict =
	(min: number) =>
	<V extends number | undefined>(value: V) =>
		exists(value) && value <= min && _('Value must be greater than {0}', min);

export const tooBig =
	(max: number) =>
	<V extends number | undefined>(value: V) =>
		exists(value) &&
		exists(max) &&
		value > max &&
		_('Value must be less or equal to {0}', max);

export const doesNotMatchFormat =
	(regexp: RegExp, message = 'Does not match format: ' + regexp) =>
	<V extends string | undefined>(value: V) =>
		exists(value) && !value.match(regexp) && message;

export const luhn = <V extends string | undefined>(value: V) =>
	exists(value) && !isLuhn(value) && _('Not a valid identification number');

export const gln = <V extends string | undefined>(value: V) =>
	exists(value) && !isGln(value) && _('Not a valid identification number');

export const onlyDigits = <V extends string | undefined>(value: V) =>
	exists(value) && !/^[0-9]+$/u.test(value) && _('Only digits allowed');

export const hint = <K extends PropertyKey>(field: K) => ({
	value: [
		<V, O extends Record<K, any>>(value: V, values: O) => {
			if (value != null) {
				return value;
			}
			const hintValue = values[field];
			return hintValue != null ? { label: hintValue } : undefined;
		},
	],
	onChange: <V>(
		update: <Q extends Record<PropertyKey, any>>(q: Q) => void,
		id: string,
		value: V,
	) =>
		update({
			[id]: value,
			[field]: undefined,
		}),
	validate: <V, O extends Record<K, any>>(value: V, values: O) => {
		const req = required(value);
		if (!req) {
			return;
		}
		const hintValue = values[field];
		return hintValue == null ? req : _('Option not among possible values');
	},
});

export const afterStartDate =
	<K extends PropertyKey>(startDateField: K, eq?: boolean) =>
	<V, O extends Record<K, any>>(value: V, values: O) => {
		const end = ensureDate(value);
		const start = ensureDate(values[startDateField]);
		if (!(end && start)) return;
		const endTime = end.getTime();
		const startTime = start.getTime();
		const invalid = eq ? endTime < startTime : endTime <= startTime;
		return invalid && _('End date must be after start date');
	};

export const minDate =
	<Q>(date: Q) =>
	<V>(value: V) => {
		const dateValue = ensureDate(value),
			minDateValue = ensureDate(date);
		return (
			dateValue &&
			minDateValue &&
			dateValue.getTime() <= minDateValue.getTime() &&
			_('Date must be bigger than {0}', date)
		);
	};
export const maxDate =
	<Q>(date: Q) =>
	<V>(value: V) => {
		const dateValue = ensureDate(value),
			maxDateValue = ensureDate(date);
		return (
			dateValue &&
			maxDateValue &&
			maxDateValue.getTime() <= dateValue.getTime() &&
			_('Date must be lower than {0}', date)
		);
	};
export const maxDays = (days: number) =>
	maxDate(format(addDays(days, new Date()), 'yyyy-MM-dd'));

export const xor =
	<T extends object, K extends keyof T, V extends T[K], P extends keyof T>(
		otherField: P,
	) =>
	(value: V, values: T) =>
		values[otherField] != null;

const decimalRegexp = (precision: number) =>
	new RegExp('^[0-9]*(.[0-9]{0,' + precision.toString() + '})?$', 'u');

export const maxDecimal =
	(precision: number, message = `Maximum ${precision} decimal digits.`) =>
	<V>(value: V) => {
		if (value === null || value === undefined) return;
		if (typeof value !== 'string' && typeof value !== 'number') return message;
		return !decimalRegexp(precision).test(String(value)) && message;
	};

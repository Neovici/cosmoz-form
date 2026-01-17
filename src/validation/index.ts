import { array } from '@neovici/cosmoz-utils/array';

import { Field, Errors, Validate, Fields } from '../types';

export const ERROR: unique symbol = Symbol('error');

export const runValidation = <
	T extends object,
	K extends keyof T,
	V extends T[K],
>(
	validate: Validate<T, K, V>,
	value: V,
	values: T,
	field: Field<T, K, V>,
): string | undefined => {
	for (const check of array(validate)) {
		const error = check(value, values, field);
		if (error) {
			return error;
		}
	}
};

export const validateField = <T extends object, K extends keyof T>(
	field: Field<T, K, T[K]>,
	values: T,
) =>
	field.validate &&
	runValidation(
		field.validate,
		values[(field.path as K) ?? field.id],
		values,
		field,
	);

export const validateFields = <T extends object>(
	fields: Fields<T>,
	values: T,
): Errors | undefined => {
	const errors = fields.flatMap((field) => {
		const error = validateField(field, values);
		return error ? [[field.id, error]] : [];
	});
	return errors.length ? Object.fromEntries(errors) : undefined;
};

export const validateFieldsM = <T extends object>(
	fields: Fields<T>,
	values: T,
) => {
	const validated = fields.map((field) => ({
		...field,
		error: validateField(field, values),
	}));
	return {
		fields: validated,
		invalid: validated.some(({ error }) => !!error),
	};
};

export const validate = <T extends object>(
	fields: Fields<T>,
	values?: T,
) =>
	values
		? validateFieldsM(fields, values)
		: {
				fields,
				invalid: true,
			};

export const validateForms = <T extends object>(
	fields: Fields<T>,
	items: T[],
) => {
	const forms = items.map((values, index) => ({
		...validate(fields, values),
		values,
		index,
	}));
	return {
		forms,
		invalid: forms.some(({ invalid }) => invalid),
	};
};

export * from './rules';

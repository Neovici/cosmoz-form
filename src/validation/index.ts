import { array } from '@neovici/cosmoz-utils/array';

import { Errors, Field, Fields, Validate } from '../types';

export const ERROR: unique symbol = Symbol('error');

export const runValidation = <
	T extends object,
	K extends keyof T,
	V extends T[K],
	C extends object = object,
>(
	validate: Validate<T, K, V, C>,
	value: V,
	values: T,
	field: Field<T, K, V>,
	context?: C,
): string | undefined => {
	for (const check of array(validate)) {
		const error = check(value, values, field, context);
		if (error) {
			return error;
		}
	}
};

export const validateField = <
	T extends object,
	K extends keyof T,
	C extends object = object,
>(
	field: Field<T, K, T[K]>,
	values: T,
	context?: C,
) =>
	field.validate &&
	runValidation(
		field.validate,
		values[(field.path as K) ?? field.id],
		values,
		field,
		context,
	);

export const validateFields = <T extends object, C extends object = object>(
	fields: Fields<T>,
	values: T,
	context?: C,
): Errors | undefined => {
	const errors = fields.flatMap((field) => {
		const error = validateField(field, values, context);
		return error ? [[field.id, error]] : [];
	});
	return errors.length ? Object.fromEntries(errors) : undefined;
};

export const validateFieldsM = <T extends object, C extends object = object>(
	fields: Fields<T>,
	values: T,
	context?: C,
) => {
	const validated = fields.map((field) => ({
		...field,
		error: validateField(field, values, context),
	}));
	return {
		fields: validated,
		invalid: validated.some(({ error }) => !!error),
	};
};

export const validate = <T extends object, C extends object = object>(
	fields: Fields<T>,
	values?: T,
	context?: C,
) =>
	values
		? validateFieldsM(fields, values, context)
		: {
				fields,
				invalid: true,
			};

export const validateForms = <T extends object, C extends object = object>(
	fields: Fields<T>,
	items: T[],
	context?: C,
) => {
	const forms = items.map((values, index) => ({
		...validate(fields, values, context),
		values,
		index,
	}));
	return {
		forms,
		invalid: forms.some(({ invalid }) => invalid),
	};
};

export * from './rules';

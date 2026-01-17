import {
	AutocompleteProps,
	CommonFieldProps,
	FileProps,
	TextareaProps,
} from '../inputs';
import { ProgressLineProps } from '../inputs/progress-line';
import { ReadOnlyNumberProps } from '../inputs/read-only-number';
import { UseForm } from '../use-form-core';
import { ItemRule } from '../use-items';

export type Invoked<T, F, V, R> = (value: V, values: T, field: F) => R;

export type Invokable<T, F, V, R> = R | Invoked<T, F, V, R>;

export type Resolvable<T, A extends unknown[] = []> =
	| T
	| PromiseLike<T>
	| ((...args: A) => T | PromiseLike<T>);

export type OnFocusFn<T, F, V> = (
	onChange: (value: V, touched?: boolean) => void,
	value: V,
	values: T,
	field: F,
) => (event: FocusEvent) => void;

export type OnChange<T, K, V> = (
	update: (changes: Partial<T>, touched?: boolean) => void,
	id: K,
	value: V,
	values: T,
) => void;

export type Rule<T extends object, K extends keyof T, V extends T[K]> = (
	value: V,
	values: T,
	field: Field<T, K, V>,
) => false | string;

export type Errors = {
	[key: string]: string | true | undefined;
};

export type Validate<T extends object, K extends keyof T, V extends T[K]> =
	| Rule<T, K, V>
	| Rule<T, K, V>[];

export type Renderable =
	| null
	| undefined
	| { toString(): string }
	| ReadonlyArray<Renderable>;

export interface InputProps<T extends object, K extends keyof T, V extends T[K]>
	extends UseForm<T> {
	value: V;
	field: Field<T, K, V>;
	error: false | string;
	invalid: boolean;
	touched: boolean;
}

// TODO: figure out a way to enforce the type of the input value, so you can't use a number input for a string field
export interface Input<T extends object, K extends keyof T, V extends T[K]> {
	(opts: InputProps<T, K, V>): Renderable;
}

export type Codec<
	T extends object,
	K extends keyof T,
	V extends T[K],
> = readonly [
	Invoked<T, Field<T, K, V>, V, unknown>,
	Invoked<T, Field<T, K, V>, unknown, V>,
];

export interface Field<
		T extends object,
		K extends keyof T,
		V extends T[K] = T[K],
	>
	// TODO: drop all of the following props by moving them to input constructors
	extends CommonFieldProps<T, K, V>,
		TextareaProps,
		AutocompleteProps<T, K, V>,
		FileProps<T, K, V>,
		ProgressLineProps,
		ReadOnlyNumberProps,
		ReasonProps {
	id: K;
	path?: keyof T;
	label?: Invokable<T, Field<T, K, V>, V, string>;
	description?: string;
	placeholder?: Invokable<T, Field<T, K, V>, V, string>;
	validate?: Validate<T, K, V>;
	mandatory?: Invokable<T, Field<T, K, V>, V, boolean>;
	disabled?: Invokable<T, Field<T, K, V>, V, boolean>;
	hidden?: Invokable<T, Field<T, K, V>, V, boolean>;
	warning?: Invokable<T, Field<T, K, V>, V, Renderable>;
	prefix?: Invokable<T, Field<T, K, V>, V, Renderable>;
	suffix?: Invokable<T, Field<T, K, V>, V, Renderable>;
	// TODO: figure out how to properly enforce the codec type to match the expect input type
	value?: Codec<T, K, V>;
	styles?: Record<string, string>;
	onFocus?: OnFocusFn<T, Field<T, K, V>, V>;
	onChange?: OnChange<T, K, V>;
	rules?: ItemRule<T>[];
	header?: Invokable<T, Field<T, K, V>, V, string>;
	input?: Input<T, K, V>;
}

export type Fields<T extends object> = readonly {
	[K in keyof T]-?: Readonly<Field<T, K, T[K]>>;
}[keyof T][];

export { InputBaseProps as InputBaseOpts } from '../inputs/base';

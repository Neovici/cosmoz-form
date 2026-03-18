import {
	AutocompleteProps,
	CommonFieldProps,
	FileProps,
	TextareaProps,
} from '../inputs';
import { ReadOnlyNumberProps } from '../inputs/read-only-number';
import { UseForm } from '../use-form-core';
import { ItemRule } from '../use-items';

export type Invoked<T, F, V, R, C extends object = object> = (
	value: V,
	values: T,
	field: F,
	context?: C,
) => R;

export type Invokable<T, F, V, R, C extends object = object> =
	| R
	| Invoked<T, F, V, R, C>;

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

export type Rule<
	T extends object,
	K extends keyof T,
	V extends T[K],
	C extends object = object,
> = (
	value: V,
	values?: T,
	field?: Field<T, K, V, C>,
	context?: C,
) => false | string;

export type Errors = {
	[key: string]: string | true | undefined;
};

export type Validate<
	T extends object,
	K extends keyof T,
	V extends T[K],
	C extends object = object,
> = Rule<T, K, V, C> | Rule<T, K, V, C>[];

export type Renderable =
	| null
	| undefined
	| { toString(): string }
	| ReadonlyArray<Renderable>;

export interface InputProps<
	T extends object,
	K extends keyof T,
	V extends T[K],
	C extends object = object,
> extends UseForm<T, C> {
	value: V;
	field: Field<T, K, V, C>;
	error: false | string;
	invalid: boolean;
	touched: boolean;
}

// TODO: figure out a way to enforce the type of the input value, so you can't use a number input for a string field
export interface Input<
	T extends object,
	K extends keyof T,
	V extends T[K],
	C extends object = object,
> {
	(opts: InputProps<T, K, V, C>): Renderable;
}

export type Codec<
	T extends object,
	K extends keyof T,
	V extends T[K],
	C extends object = object,
> = readonly [
	Invoked<T, Field<T, K, V, C>, V, unknown, C>,
	Invoked<T, Field<T, K, V, C>, unknown, V, C>,
];

export interface Field<
	T extends object,
	K extends keyof T,
	V extends T[K] = T[K],
	C extends object = object,
>
	// TODO: drop all of the following props by moving them to input constructors
	extends
		CommonFieldProps<T, K, V, C>,
		TextareaProps,
		AutocompleteProps<T, K, V, C>,
		FileProps<T, K, V>,
		ReadOnlyNumberProps {
	id: K;
	path?: keyof T;
	label?: Invokable<T, Field<T, K, V, C>, V, string, C>;
	description?: string;
	placeholder?: Invokable<T, Field<T, K, V, C>, V, string, C>;
	validate?: Validate<T, K, V, C>;
	mandatory?: Invokable<T, Field<T, K, V, C>, V, boolean, C>;
	disabled?: Invokable<T, Field<T, K, V, C>, V, boolean, C>;
	hidden?: Invokable<T, Field<T, K, V, C>, V, boolean, C>;
	warning?: Invokable<T, Field<T, K, V, C>, V, Renderable, C>;
	prefix?: Invokable<T, Field<T, K, V, C>, V, Renderable, C>;
	suffix?: Invokable<T, Field<T, K, V, C>, V, Renderable, C>;
	// TODO: figure out how to properly enforce the codec type to match the expect input type
	value?: Codec<T, K, V, C>;
	styles?: Record<string, string>;
	onFocus?: OnFocusFn<T, Field<T, K, V, C>, V>;
	onChange?: OnChange<T, K, V>;
	rules?: ItemRule<T>[];
	header?: Invokable<T, Field<T, K, V, C>, V, string, C>;
	input?: Input<T, K, V, C>;
}

export type Fields<T extends object, C extends object = object> = readonly {
	[K in keyof T]-?: Readonly<Field<T, K, T[K], C>>;
}[keyof T][];

export { InputBaseProps as InputBaseOpts } from '../inputs/base';

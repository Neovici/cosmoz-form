import { component } from '@pionjs/pion';
import { html } from 'lit-html';
import { when } from 'lit-html/directives/when.js';
import { invoke } from '../src/helpers';
import { autocomplete, date, file, number, toggle } from '../src/inputs';
import { renderFields } from '../src/render';
import { InputProps, Renderable } from '../src/types';
import { useValidatedForm } from '../src/use-validated-form';
import { requireEither, tooShort, tooSmall } from '../src/validation';

type User = {
	isActive: boolean;
	id: string;
	name: string;
	gender?: 'Male' | 'Female';
	age?: number;
	occupation?: string;
	isAdult?: boolean;
	birthday?: string;
	comment?: string;
	employmentRange?: {
		from?: string;
		to?: string;
	};
	attachments?: File[];
	cv?: File[];
	inlineFile?: File;
	month?: string;
	numberRange?: {
		from?: number;
		to?: number;
	};
};

const customToggle = <T extends object, K extends keyof T>({
	value,
	values,
	field,
	onChange,
	error,
	invalid,
	load,
	onReset,
	onValues,
	touched,
}: InputProps<T, K, T[K]>): Renderable => {
	// eslint-disable-next-line no-console
	console.log({
		value,
		values,
		field,
		onChange,
		error,
		invalid,
		load,
		onReset,
		onValues,
		touched,
		id: field.id,
	});
	const disabled = invoke(field.disabled, value, values, field);
	return html`<label>${invoke(field.label, value, values, field)}:</label>
		<b>${value}</b>
		<button
			@click=${() => onChange({ [field.id]: true } as Partial<T>)}
			?disabled=${disabled}
		>
			Yes
		</button>
		<button
			@click=${() => onChange({ [field.id]: false } as Partial<T>)}
			?disabled=${disabled}
		>
			No
		</button>
		<button
			@click=${() =>
				onChange((value) => ({ [field.id]: !value[field.id] }) as Partial<T>)}
			?disabled=${disabled}
		>
			toggle
		</button>
		${when(error, () => html`<p style="color:red">${error}</p>`)}`;
};

const TestComponent = () => {
	const form = useValidatedForm<Partial<User>>({
		initial: {},
		fields: [
			{
				id: 'id',
				label: 'ID',
				onChange: (update, id, value) => {
					update({ [id]: value, name: value });
				},
				validate: requireEither('name'),
			},
			{
				id: 'name',
				label: 'Name',
				validate: [requireEither('id'), tooShort(3)],
			},
			{
				id: 'isActive',
				label: 'Is active',
				input: toggle,
			},
			{
				id: 'age',
				label: 'Age',
				input: number,
				validate: tooSmall(3),
				min: 0,
				max: 100,
				rules: [
					[({ age }) => ({ isAdult: (age ?? 0) >= 18 }), ({ age }) => [age]],
				],
			},
			{
				id: 'occupation',
				label: 'Occupation',
				input: autocomplete,
				options: ['guard', 'janitor', 'chef'],
				limit: 1,
				showSingle: true,
				preserveOrder: true,
			},
			{
				id: 'occupation',
				label: 'Is janitor',
				input: toggle,
				value: [
					(value) => value === 'janitor',
					(value) => (value === true ? 'janitor' : ''),
				],
			},
			{
				id: 'isAdult',
				label: 'Is adult',
				input: customToggle,
				rules: [
					[
						({ isAdult, age }) => ({
							age: isAdult ? Math.max(age ?? 0, 18) : Math.min(age ?? 0, 17),
						}),
						({ isAdult }) => [isAdult],
					],
				],
			},
			{
				id: 'birthday',
				label: 'Birthday',
				input: date,
			},
			{
				id: 'cv',
				label: 'CV',
				input: file,
			},
		],
	});

	return [
		renderFields(form),
		html`<p>form valid: ${!form.invalid}</p>`,
		html`<pre>${JSON.stringify(form.values, undefined, 2)}</pre>`,
	];
};

customElements.define('test-component', component(TestComponent));

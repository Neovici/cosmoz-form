import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { useCallback, useMemo, useState } from '@pionjs/pion';
import type { Fields } from './types';

/** Every field (after a save attempt), or the ids of the touched fields. */
export type TouchedFields = true | ReadonlySet<PropertyKey>;

type ValidatedField<T extends object> = Fields<T>[number] & { error?: unknown };
type ValidatedFields<T extends object> = readonly ValidatedField<T>[];

interface Form<T extends object> {
	values: T;
	invalid?: boolean;
	fields?: ValidatedFields<T>;
}

const nameOf = (id: PropertyKey) => String(id);

// Date ranges render two inputs, named `<id>From` and `<id>To`.
const fieldOf = <T extends object>(fields: ValidatedFields<T>, name: string) =>
	fields.find(({ id }) =>
		[nameOf(id), `${nameOf(id)}From`, `${nameOf(id)}To`].includes(name),
	);

const fieldIn = <T extends object>(fields: ValidatedFields<T>, e: Event) => {
	for (const node of e.composedPath()) {
		const name = (node as Element).getAttribute?.('name');
		const field = name ? fieldOf(fields, name) : undefined;
		if (field) return field;
	}
};

/**
 * Shows a field's error once the user changed it and left it (like
 * `:user-invalid`), and every error after a save attempt. Opt-in: pass
 * `touchedFields` to `renderFields`, bind `onFocusIn`/`onFocusOut` on the element
 * that contains the fields, and call `submit(root)` before saving.
 */
export const useFieldTouch = <T extends object>(form: Form<T>) => {
	const [touchedFields, setTouchedFields] = useState<TouchedFields>(
			() => new Set(),
		),
		focusValues = useMemo(() => new Map<PropertyKey, unknown>(), []),
		meta = useMeta(form),
		valueOf = (field: ValidatedField<T>) =>
			meta.values?.[(field.path ?? field.id) as keyof T];

	return {
		touchedFields,
		onFocusIn: useCallback((e: FocusEvent) => {
			const field = fieldIn(meta.fields ?? [], e);
			if (field) focusValues.set(field.id, valueOf(field));
		}, []),
		onFocusOut: useCallback((e: FocusEvent) => {
			const field = fieldIn(meta.fields ?? [], e);
			if (!field || !focusValues.has(field.id)) return;
			const changed = !Object.is(focusValues.get(field.id), valueOf(field));
			focusValues.delete(field.id);
			if (!changed) return;
			setTouchedFields((touched) =>
				touched === true ? touched : new Set(touched).add(field.id),
			);
		}, []),
		/**
		 * Returns true when the form is valid. Otherwise reveals every error and
		 * focuses the first invalid field inside `root`.
		 */
		submit: useCallback((root?: ParentNode | null) => {
			if (!meta.invalid) return true;
			setTouchedFields(true);
			const names = (meta.fields ?? [])
				.filter(({ error }) => error)
				.flatMap(({ id }) => [nameOf(id), `${nameOf(id)}From`]);
			requestAnimationFrame(() => {
				for (const name of names) {
					const el = root?.querySelector<HTMLElement>(`[name="${name}"]`);
					if (el) return el.focus();
				}
			});
			return false;
		}, []),
		reset: useCallback(() => setTouchedFields(new Set()), []),
	};
};

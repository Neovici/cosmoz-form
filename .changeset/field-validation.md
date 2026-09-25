---
'@neovici/cosmoz-form': major
---

Form dialogs validate like Base UI's Form:

- **Save stays enabled.** Saving with errors shows them, moves focus to the first invalid field and doesn't call `onSave`. The only exception is an empty form that isn't allowed to be empty and has no errors to show.
- **Errors appear per field:** once the user changed a field and left it, or after a save attempt. Before, every field showed its error as soon as any field changed. Once shown, an error updates as the user types.
- **Enter submits** from a single-line field, unless another component handled the key (for example an autocomplete selecting an option) or a save is in progress.
- The help and warning icon texts (`description`, `warning`) are passed to cosmoz-input's `description`, so assistive technology reads them with the field.
- `requiredWhen` fields show the required asterisk while their condition holds.

New `useFieldTouch(form)` brings the same per-field timing to forms rendered with `renderFields` outside a dialog: pass its `touchedFields` to `renderFields`, bind `onFocusIn`/`onFocusOut` on the element around the fields, and call `submit(root)` before saving. Forms that don't opt in keep the old timing.

Breaking: tests that expect a disabled Save button for an invalid dialog, or errors on fields the user hasn't touched, need updating.

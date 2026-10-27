---
'cosmoz-form': minor
---

Add `useValidatedItemsCore(form, id, opts)`: a controlled, validated list where rows live in `form.values[id]` as the single source of truth, so they participate in the form's own rules and are reset by `form.onReset()`. Row fields validation reuses the `[ERROR]` rule of `useValidatedItems`; user-directed methods (`update`, `append`, `prepend`, `remove`, `clear`, `reset`, `updateAll`, `load`) mark the form touched while rules re-applied after a context change don't. Also widens the controlled `useItemsCore` `setItems` with an options argument (`{ userInitiated }`) so the context re-apply effect can write without marking a controlled consumer as touched.

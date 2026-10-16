---
'@neovici/cosmoz-form': minor
---

Add `headless` to `Dialogable`. `open()` from `useFormDialogable` and `useFormDialogable$` saves a headless dialogable with its `initial` values without rendering anything. If the save fails, the dialog opens and shows the failure through the new `error` prop of `cosmoz-form-dialog`, so the user can retry.

Opening the dialog when a save fails is intentional but temporary. The long-term plan is to give headless saves and their failures a place of their own.

A headless save never replaces or closes a dialog it didn't open. A save's close, and a failure's dialog, only apply while the dialog slot is still empty or still holds that save's own dialog. This also stops one normal dialog from closing another.

`useFormDialogable$().open()` now resolves the dialogable once instead of on every render. It shows the loading dialog only when no other dialog is open and no headless save is running.

Known limitation: there is only one dialog slot, so some failures are never shown.

- A headless save that fails while another dialog is open is dropped without being shown.
- While a headless save is running, further headless saves are ignored.

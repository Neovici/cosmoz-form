---
'@neovici/cosmoz-form': minor
---

Add `headless` to `Dialogable`. `open()` from `useFormDialogable` and `useFormDialogable$` saves a headless dialogable with its `initial` values without rendering anything. If the save fails, the dialog opens and shows the failure through the new `error` prop of `cosmoz-form-dialog`, so the user can retry.

Opening the dialog when a save fails is intentional but temporary. The long-term plan is to give headless saves and their failures a place of their own.

A headless save never replaces or closes a dialog it didn't open. A save's close, and a failure's dialog, only apply while the dialog slot is still empty or still holds that save's own dialog. This also stops one normal dialog from closing another.

`useFormDialogable$().open()` now resolves the dialogable once instead of on every render. It shows the loading dialog only when no other dialog is open and no headless save is running.

Failures wait for an occupied dialog to close, then open for retry or cancellation. Opening another dialog preserves a pending failure. Different named headless saves can run independently; repeated saves with the same name are deduplicated, including delayed resolvers that overlap a completed save. Unnamed headless saves share a deduplication key.

Both hooks expose `pending` and return a promise from headless opens, allowing consumers to display progress. Async opens include resolver time in that promise and pending state. Synchronous save exceptions are handled like rejected promises. Normal async dialogs retain the most recently opened request even when an older resolver finishes later.

Each opened dialog has a render key, so queued recovery dialogs start with their own values and errors. The key stays stable while the same dialog is edited or retried.

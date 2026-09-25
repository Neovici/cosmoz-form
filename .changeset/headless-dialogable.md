---
'@neovici/cosmoz-form': minor
---

Add `headless` to `Dialogable`. `open()` from `useFormDialogable` and `useFormDialogable$` saves a headless dialogable with its `initial` values without rendering anything. The dialog opens only if the save fails, showing the failure through the new `error` prop of `cosmoz-form-dialog`, so the user can retry. While a headless save is running, further headless saves are ignored.

`useFormDialogable$().open()` now resolves the dialogable once instead of on every render.

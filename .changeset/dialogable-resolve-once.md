---
'@neovici/cosmoz-form': patch
---

An open form dialog survives a re-render of its host. `formDialog$` gave `until` a new promise on every render, which showed the loading placeholder and then a new `cosmoz-form-dialog` with a fresh form, and `useFormDialogable$` ran the dialogable again each time. Entered values, rows and selections were lost, and a focused autocomplete was removed mid-typing.

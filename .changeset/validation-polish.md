---
'@neovici/cosmoz-form': patch
---

fix(dialog): a failed save in `cosmoz-form-dialog` also names the first error next to the buttons, so fields whose custom input does not render its error still explain why nothing was saved. `useValidatedForm$` hides revealed errors again on `onReset` and `load`.

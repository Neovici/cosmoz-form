---
'@neovici/cosmoz-form': major
---

feat(dialog): field errors are revealed by the first save attempt, not the first change. `useValidatedForm$` keeps Save enabled while the form is invalid; saving then reveals every error (live from there on), and `cosmoz-form-dialog` focuses the first invalid field. Save is only disabled for an empty form that may not be empty and has no error to reveal.

Breaking: `useValidatedForm$` no longer reports `touched` for a changed form, only for a submitted one; tests expecting a disabled Save on an invalid dialog, or errors before saving, need updating.

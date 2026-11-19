---
'@neovici/cosmoz-form': major
---

revert(dialog): validate as in 4.x again. Reverts #110, #113 and #114: field errors show after the first change, and Save is disabled while the form is invalid. `useValidatedForm$` reports `touched` for a changed form again and no longer tracks a submit attempt. Enter in a single-line input (#111) still saves, and does nothing while Save is disabled.

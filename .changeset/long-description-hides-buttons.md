---
'@neovici/cosmoz-form': patch
---

fix(form-dialog): keep the buttons visible when the description is long

`.description` was an unshrinkable flex item inside `.content { overflow: hidden }`, so a description taller than the dialog pushed the button row past the clipped edge — the dialog could not be confirmed or (with `uncancelable` + `hideCancelButton`) dismissed at all, and the text was not scrollable either.

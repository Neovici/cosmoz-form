---
'@neovici/cosmoz-form': patch
---

`onChange(patch, false)` no longer clears the touched flag of a form the user already touched. Async rule patches use it, so a lookup that finished after the user's first edit hid every validation error until the next edit.

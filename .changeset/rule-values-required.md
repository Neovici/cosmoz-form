---
'cosmoz-form': minor
---

Make the `values` parameter of the `Rule` type required, since the validation pipeline always supplies it; rule bodies can rely on `values` instead of guarding with `?.`.

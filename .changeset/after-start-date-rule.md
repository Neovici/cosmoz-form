---
'@neovici/cosmoz-form': patch
---

`afterStartDate` returns a `Rule`, so it can be listed in a field's `validate` without a cast. It also passes when the form values are not given.

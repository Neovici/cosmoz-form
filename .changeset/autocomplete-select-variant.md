---
'@neovici/cosmoz-form': minor
---

**autocomplete:** `mode: 'select'` now unwraps the selected value in `onChange`
(same as `limit: 1`) and supports the `cell` variant. Inputs accept `variant`
(`'cell'`) and `hint` props; required fields render a `*` indicator through
`cosmoz-input`.

---
'cosmoz-form': minor
---

`useValidatedForm`, `useValidatedForm$` and `useForm` now also accept `initial` as a factory `(() => T)`, resolved once during initialization (mirroring how `fields` already accepts a factory).

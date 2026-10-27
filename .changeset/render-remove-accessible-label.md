---
'cosmoz-form': minor
---

The row remove button rendered by `renderItems` gets an accessible name (`aria-label`, relayed by cosmoz-button into its native control) and a `tooltip`, falling back to `Remove`. `renderItems` accepts a new `removeLabel` option (string or a function of the row's values, e.g. `(values) => \`Remove ${values.a}\``), passed to `renderItem`and`renderRemove`.

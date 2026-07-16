---
'@neovici/cosmoz-form': minor
---

Add `onPaste` prop support to field configs, allowing paste event handlers to be bound directly to individual input elements (`cosmoz-input`, `cosmoz-textarea`, `cosmoz-autocomplete`). The `onPaste` prop follows the same curried-function pattern as `onFocus`, receiving `(onChange, value, values, field)` and returning a `ClipboardEvent` handler.

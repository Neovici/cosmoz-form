---
'@neovici/cosmoz-form': minor
---

'@neovici/cosmoz-form': fix(form-dialog): render save failures above the footer as a capped, scrollable block

`renderFailure$` rendered the save error inside the `.buttons` footer row, where a long message (e.g. multi-row import errors) squeezed the text next to the buttons, stretched them vertically, and grew the dialog without any scrolling. The failure now renders as its own block between the form and the footer, styled as an error alert card (`--cz-color-bg-error` / `--cz-color-border-error-subtle` tokens), capped at `40vh` with internal scrolling and `white-space: pre-wrap`, so embedded newlines display as rows and the footer stays buttons-only. The in-page add-form failure (`renderAddStyles`) gets the same treatment.

Rejections may now optionally carry rich content: a `Failure` exposes `content?: unknown` (e.g. a lit-html `TemplateResult`), which is rendered in the failure block instead of `message` when present. `message` remains the plain-text summary used by toasts and logging, so consumers can pass a short summary alongside a structured error list.

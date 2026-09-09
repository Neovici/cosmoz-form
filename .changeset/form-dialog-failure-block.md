---
'@neovici/cosmoz-form': minor
---

'@neovici/cosmoz-form': fix(form-dialog): render save failures above the footer as a capped, scrollable block

`renderFailure$` rendered the save error inside the `.buttons` footer row, where a long message (e.g. multi-row import errors) squeezed the text next to the buttons, stretched them vertically, and grew the dialog without any scrolling. The failure now renders as its own block between the form and the footer, capped at `40vh` with internal scrolling and `white-space: pre-wrap`, so embedded newlines display as rows and the footer stays buttons-only. The in-page add-form failure (`renderAddStyles`) gets the same capping.

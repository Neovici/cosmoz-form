---
'@neovici/cosmoz-form': patch
---

`useFormDialogable$` resolves the opened dialogable once. Before, every render of the host ran the dialogable again, so a re-render while the dialog was open rebuilt the form from its initial values and dropped what the user had entered.

---
'@neovici/cosmoz-form': minor
---

feat(dialog): Enter in a single-line input saves the form dialog, as the Save button would. Nothing happens while Save is disabled or a save is in flight, and Enter that another component already handled (an open autocomplete selecting its option, an IME composition) is left alone.

---
'@neovici/cosmoz-form': patch
---

`renderItems` headers stay at the top of the list while its rows scroll. They used to be the first row of the virtualized list and scrolled away with it. They also now use the app's table header style: extra-small, medium weight, tertiary color, on one line with an ellipsis. The `scroller` option is deprecated, since `.items` is always the scroller now.

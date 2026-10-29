---
'@neovici/cosmoz-form': patch
---

`renderItems` headers now stay at the top of the list while its rows scroll. They used to be the first row of the virtualized list and scrolled away with it. They now use the app's table header style: extra-small, medium weight, tertiary color, on one line with an ellipsis.

Every row now splits its width the same way the headers do, so a suffix or warning icon in one row no longer shifts that row's columns. Rows and headers never shrink below their columns' minimum widths; the list scrolls sideways instead.

The `scroller` option is deprecated, since `.items` is always the scroller now.

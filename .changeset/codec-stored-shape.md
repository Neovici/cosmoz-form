---
'cosmoz-form': minor
---

Add a `S` (stored shape) parameter to the `Codec` type: encode now returns and decode now receives the declared stored value instead of `unknown`, defaulting to `unknown` so existing codecs keep compiling.

---
'cosmoz-form': minor
---

fix(async): for cancelled runs, takeLatest behaves like debounce — once aborted, a superseded run's final patch resolves as `null` and its `opts.update()` calls are ignored, so a cancelled run (signal-respecting, signal-ignoring, or error-swallowing) no longer ends with an applied patch or a conflict with the re-run.

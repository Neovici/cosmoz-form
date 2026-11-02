---
'cosmoz-form': minor
---

fix(async): the takeLatest runner now mirrors the debounce runner for cancelled runs — a superseded run's final patch resolves `null` and its `opts.update()` calls are suppressed once aborted, so a cancelled run (signal-respecting, signal-ignoring, or error-swallowing) can no longer write state and race the re-run.

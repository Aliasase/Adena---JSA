# Adena JSA / PTP — Protected Baseline

**Version:** 1.0.0
**Status:** Protected Phase 1 Baseline
**Established:** Revision 001, Phase 1 — Existing JSA Stabilization and Refinement
**Implementation file:** `adena-jsa.html` (single-file, offline, no external dependencies)

## What "Protected Baseline" Means

This version is the formal starting point for all Phase 1 development. Every future
revision is implemented as an incremental, approved change against this baseline —
not a redesign of it. Unrelated changes, refactors, or improvements are out of scope
unless a specific revision package calls for them.

## Collaboration Framework

- **Andrew** — Product Owner / SME, final approval on all revisions
- **ChatGPT** — Architect: workflow design, safety content, requirements, validation,
  acceptance criteria, UI critique, documentation
- **Claude Code** — Engineer: HTML/CSS/JS implementation, bug fixes, refactoring,
  optimization, integration, strictly within approved revision packages

## Protected Baseline Behaviors

The following capabilities are established as-is at v1.0.0 and must remain unchanged
unless a revision package specifically directs otherwise:

- Offline single-file operation
- Same-day saved-data restoration (does not restore prior-day JSAs)
- New JSA creation (with in-app confirmation)
- Unique JSA identification number
- Created and revised timestamps
- Job-information entry
- Hazard selection (30 items, 4 high-risk triggers)
- PPE selection (15 items)
- Permit selection (14 items, 7 high-risk triggers)
- Task-step entry
- Offline hazard and control suggestions (keyword-matched, no network dependency)
- Site-condition entry
- High-risk notification behavior (banner, top-bar badge, footer risk level)
- Supervisor signature and acknowledgment, locked on confirmation
- Crew signatures, locked permanently on entry
- Print preview
- PDF and print output

## Revision History

| Revision | Summary | Version |
|---|---|---|
| 001 | Established protected baseline; added discreet in-app version identifier and this document. No functional or visual changes. | 1.0.0 |
| 002 | iPad/smartphone field compatibility: fixed auto-zoom on field focus, enlarged touch targets to ~44px minimum, fixed fixed-footer overlap risk on narrow phones, added orientation-safe signature canvas resizing, kept keyboard-covered fields/buttons reachable, improved tab-switch scroll behavior, added defensive overflow guards. No safety content, workflow, or print-output changes. | 1.0.0 |

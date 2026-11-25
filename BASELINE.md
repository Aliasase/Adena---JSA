# Adena JSA / PTP — Protected Baseline

**Version:** 1.1.0
**Status:** Revision A-1 — Foundation (authorized November 24, 2026)
**Established:** Revision 001, Phase 1 — Existing JSA Stabilization and Refinement
**Latest revision:** Revision A-1, authorized by Product Owner Decision Record 003
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
| 003 | Fixed Finish Time field overflowing into the Crew Size column on iPad (Safari-specific `input[type=time]` sizing quirk), and matched its height to Crew Size for consistent row alignment. No labels, fields, data behavior, or print output changed. | 1.0.0 |
| 004 | (Sent as "Revision 003" — renumbered here to avoid colliding with the entry above.) Job Information now uses one shared grid across Job#/Trade, Location, Date/Start Time, and Finish/Crew Size rows instead of three independent grids, guaranteeing column alignment by construction rather than by coincidence. Renamed "Print / PDF" to "Save as PDF." Save as PDF now generates a real offline PDF client-side and opens the native Share Sheet on supported devices (Files, Mail, AirDrop, etc.), falling back to the existing print-preview workflow unchanged on desktop or unsupported browsers. No safety content, data behavior, or print-page layout changed. | 1.0.0 |
| A-1 | PWA infrastructure added: Service Worker (`sw.js`, cache-first strategy, install/activate/fetch handlers with logging), Web App Manifest (`manifest.json`, `"orientation": "any"`), and app icons (`icons/icon-192.png`, `icons/icon-512.png`, solid #C8102E). Added `APP_VERSION = '1.1.0'` JS variable with live footer binding. Established offline suggestion engine boundary: `getSuggestions(kind, text, context)` with full JSDoc; `context` parameter reserved for Track B (A-2). Added startup diagnostic console log and `<meta name="application-version">` tag. Authorized by PO-003, November 24, 2026. No changes to safety content, workflow, data behavior, PDF/print output, or any Protected Baseline behaviors. | 1.1.0 |

## Production Baseline Tags

| Tag | Commit | Release | Status |
|---|---|---|---|
| `production-baseline-v1.2.0` | `958c7ca` | Revision A-2 — Suggestion Intelligence v1.2.0 (PO-006) | Tag exists locally; push to remote **deferred, non-blocking** per PO direction, November 25, 2026. Cloud environment tag push returned HTTP 403. Commit reference retained here as the permanent record. |
| *(untagged)* | `8318ddb` | v1.3.0-p1 — current production baseline (PO-007, AD-008 §1) | Active production baseline. |

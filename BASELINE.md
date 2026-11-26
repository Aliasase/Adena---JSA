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
| A-4 dev1 | **Interim test build only (not production).** Safety Intelligence Library engine (Packages 001–002) integrated into `getSuggestions`; legacy library retained; respirator correction (PO-approved); CACHE_NAME `adena-jsa-v1.4.0-dev1`. Deployed to the Netlify test environment under AD-009. See `SIL-ENGINE-v1.4.0.md`. Production remains v1.3.0-p1. | 1.4.0-dev1 |
| A-4 p1 | **Interim Phase A-4 production release** (PO-008). The v1.4.0-dev1 build was promoted unchanged after PO physical testing. Only the release identifiers changed: APP_BUILD `p1`, CACHE_NAME `adena-jsa-v1.4.0-p1`. Six RCSC controls remain withheld. Phase A-4 is still open; see `A4-INTERIM-CHECKPOINT.md`. | 1.4.0-p1 |
| A-4 dev v1.4.1-dev1 | **Test build only (not production)** (AD-010). SIL Package 003 r2 implemented: 97 active hazards, 399 controls in the app (6 RCSC withheld), 10 policies; defects F-1 to F-16 corrected. CACHE_NAME `adena-jsa-v1.4.1-dev1`. Deployed to the `revision-a4` Netlify branch preview only. See `SIL-ENGINE-v1.4.1.md`. Production remains v1.4.0-p1. | 1.4.1-dev1 |
| A-4 dev v1.4.1-dev2 | **Test build only (not production).** Field-testing corrections: clamp-type anchor recognition (ED-1, PO direction) and contextual hot tap classification (ED-3); controls C-000406 and C-000407 added (401 in the app). CACHE_NAME `adena-jsa-v1.4.1-dev2`. Deployed to the `revision-a4` Netlify branch preview only. See `SIL-ENGINE-v1.4.1.md` §7. Production remains v1.4.0-p1. | 1.4.1-dev2 |
| A-4 dev v1.4.1-dev3 | **Test build only (not production).** Architect disposition of dev2: C-000406 revised, C-000407 accepted; process-system controls gated on process-system context (PD-1); roof location vs. roofing work (PD-2). CACHE_NAME `adena-jsa-v1.4.1-dev3`. Deployed to the `revision-a4` Netlify branch preview only. See `SIL-ENGINE-v1.4.1.md` §8. Production remains v1.4.0-p1. | 1.4.1-dev3 |
| A-4 dev v1.4.1-dev4 | **Test build only (not production).** Approved by the Architect disposition of dev4; deployed to the `revision-a4` Netlify branch preview only. Architect supplemental directive: temporary fall protection anchorage connectors — new hazards H-DF-042 to H-DF-044 (100 active), new controls C-000408 to C-000418 (412 in the app). CACHE_NAME `adena-jsa-v1.4.1-dev4`. See `SIL-ENGINE-v1.4.1.md` §9. Production remains v1.4.0-p1. | 1.4.1-dev4 |
| A-4 p1 v1.4.1-p1 | **Phase A-4 production release — Package 003** (PO-009). The PO-accepted v1.4.1-dev4 build (`5c53b81`) was promoted unchanged. Only the release identifiers changed: APP_BUILD `p1`, CACHE_NAME `adena-jsa-v1.4.1-p1`, header status comment. Library: 122 hazard IDs (100 active, 22 retired), 418 controls (412 in the app; six RCSC withheld), 10 policies. Package 003 implementation and field acceptance complete; Phase A-4 remains open. Rollback baseline v1.4.0-p1 (`76ac7c7`). See `SIL-ENGINE-v1.4.1.md` §10. | 1.4.1-p1 |

## Approved Development Baseline

**v1.4.1-p1** (`54a2199`, merged to main as `6557a04`) is the approved baseline for subsequent development (Architect disposition of the PO-009 release closure, November 26, 2026; `SIL-ARCHITECT-DISPOSITION-PO-009-CLOSURE.md`).

- Package 003 implementation and field acceptance are complete. Phase A-4 remains open.
- **Environment rule (PO, November 26, 2026; PO-010):**
  - The Netlify training/testing environment advances through development builds on `revision-a4`.
  - GitHub Pages (`main`) stays on the latest approved production release.
  - When a development build is approved for production, both environments are synchronized to it.
- **Environment separation:** production (`aliasase.github.io`) and Netlify (`*.netlify.app`) are different origins. Active JSA storage (`localStorage`) and service worker caches are therefore held separately by the browser.

## Environments (PO-010, November 26, 2026)

| Environment | Address | Source | Serves |
|---|---|---|---|
| **Production** | https://aliasase.github.io/Adena---JSA/adena-jsa.html | GitHub Pages, `main` | The latest approved production release only (v1.4.1-p1) |
| **Training / testing (permanent)** | **https://adena-jsa.netlify.app/adena-jsa.html** | Netlify primary site, production branch `revision-a4` | The current development build (v1.4.1-p1 at the time of the change) |

- **Repointing:** the primary Netlify site was repointed from `revision-a2` to `revision-a4` under PO-010. The `revision-a2` branch and its deploy history are intact.
- **Build trigger:** the first `revision-a4` production-context deploy was triggered by an empty commit (`6826bed`); no files changed.
- **Branch preview address:** `https://revision-a4--adena-jsa.netlify.app` was the revision-a4 preview before the change. Netlify removed revision-a4 from the branch-preview list because it is now the production branch. Use the permanent address above.
- **Separation:** the two addresses are different origins, so active JSA storage and service worker caches stay separate. Each installed copy (including a home-screen icon) belongs to its own address.

### Validation before the change (PO-010 §1–2)

`tests/browser-update-path-v120.js`: a same-day JSA signed under v1.2.0-p1 (`revision-a2@38a08b5`, the deploy then live on the primary site), then updated in place to v1.4.1-p1. **18 checks, 17 pass.**

| Area | Result |
|---|---|
| Version and cache | v1.4.1-p1 served; only the `adena-jsa-v1.4.1-p1` cache remains |
| Data preserved | Job information, task steps and the created timestamp |
| Signatures | Supervisor and crew signatures, names and timestamps unchanged |
| Acknowledgment history | None created: empty `snapshots`, no acknowledgment fields added to signers, no revision banner on load, stored record not rewritten |
| Other | PDF generates; no page errors |

The one non-passing check is a supplementary check, beyond the PO-010 criteria; see `SIL-UNRESOLVED-REGISTER.md` A3-U1, since accepted by the Architect as a document integrity defect for the next development cycle. A JSA signed before Revision A-3 carries no signing snapshot. A material change made to it after the update therefore does not raise re-acknowledgment. This is existing A-3 behavior for pre-A-3 records, unchanged since v1.3.0. It affects only same-day JSAs signed under v1.2.0-p1.

**Live check after the change:** a browser holding v1.2.0-p1 on the primary address updated on reload to v1.4.1-p1, with only the `adena-jsa-v1.4.1-p1` cache remaining, 100 hazards and 412 controls. GitHub production was unchanged at v1.4.1-p1 on its own origin and cache.
- **Recorded for the next authorized development cycle** (`SIL-UNRESOLVED-REGISTER.md`): recognition defects P3-U17 to P3-U19, and document integrity defect A3-U1 (accepted by the Architect with correction requirements; `SIL-ARCHITECT-DISPOSITION-PO-010-A3-U1.md`).
- **Package 004:** awaits the Architect's SIL-PKG-004 candidate library.

## Production Baseline Tags

| Tag | Commit | Release | Status |
|---|---|---|---|
| `production-baseline-v1.2.0` | `958c7ca` | Revision A-2 — Suggestion Intelligence v1.2.0 (PO-006) | Tag exists locally; push to remote **deferred, non-blocking** per PO direction, November 25, 2026. Cloud environment tag push returned HTTP 403. Commit reference retained here as the permanent record. |
| *(untagged)* | `8318ddb` | v1.3.0-p1 — Acknowledgment Workflow (PO-007, AD-008 §1) | Previous production baseline. This is the rollback point for v1.4.0-p1. |
| *(untagged)* | `76ac7c7` | v1.4.0-p1 — interim Phase A-4 production baseline (PO-008) | Previous production baseline. This is the rollback point for v1.4.1-p1 (PO-009). |
| *(untagged)* | *(main merge commit — see `git log main`)* | v1.4.1-p1 — Phase A-4 production release, Package 003 (PO-009) | Active production baseline. |

# Phase A-4 Interim Production Checkpoint — v1.4.0-p1

**Authority:** Product Owner Decision Record PO-008 (November 25, 2026). The full text is in `ADENA_JSA_PO-008.md`.
**Production version:** v1.4.0-p1. CACHE_NAME is `adena-jsa-v1.4.0-p1` and APP_BUILD is `p1`.
**Tested baseline:** v1.4.0-dev1. Revision-a4 commit `b0ba99b`, plus Netlify trigger commit `e798380`. PO physical testing was done on the Netlify revision-a4 preview.
**Promotion changes:** release identifiers only (header comment status, APP_BUILD, CACHE_NAME) and release records. No safety intelligence, functionality or other corrections were added.
**Previous production baseline:** v1.3.0-p1, main at `8318ddb` (PO-007).

## Status

| Item | Status |
|---|---|
| SIL Package 001 | Implemented. Technical validation items are still outstanding. |
| SIL Package 002 | Implemented. Technical validation items are still outstanding. |
| Phase A-4 | Open |
| SIL Package 003 — Drill and Mechanical Fastening | Not started. It waits for PO authorization. |

## Implemented library (v1.4.0-p1)

- **Hazards:** 74 active canonical records (78 IDs). Retired: H-BT-005, H-HW-033, H-HW-039, H-HW-040.
- **Controls:** 266 of 272 records are implemented (C-000001 to C-000272).
- **Policies:** 9 confirmed company policy records (P-000001 to P-000009).
- **Legacy library:** coverage is preserved. Entries are replaced only where an approved mapping exists.
- **Respiratory protection:** the PO-approved correction is implemented (C-000164 and C-000271).

## Withheld controls (PO-008 §3)

These six controls are still kept out of operational suggestions until their technical content is validated against an authoritative source (U-5, U-20). They remain in the permanent candidate library (`SIL-CONTROL-REGISTRY.md`). Production release does not approve unverified technical content.

C-000081 · C-000082 · C-000083 · C-000085 · C-000086 · C-000087

## Outstanding items (preserved from the AD-009 Completion Report)

| ID | Item | Owner |
|---|---|---|
| U-4 | Unverified OSHA, OSHA-GI and MSHA citations (Package 001) | Architect |
| U-5 | RCSC provisions other than §2.11; AISC 303/360; ASME PCC-1; whether client procedures govern | Architect |
| U-9 | Company vs. client policy requirements other than hand protection | PO |
| U-10 | OSHA-GI and MSHA equivalents marked "To be identified" | Architect |
| U-20 | Six withheld RCSC controls return to the app once U-5 is validated | Architect |
| P2-U10 | Unverified citations (Package 002) | Architect |
| P2-U11 | MSHA Part 56 equivalent of 57.14116 (constant hand pressure on hand-held grinders) | Architect |
| P2-U16 | Whether induction and resistance heating (PWHT) are hot work under P-000008. Currently treated as *possible* hot work. | PO |
| P2-U17 | Basis for C-000259 (welding machines outside confined spaces) | Architect |
| — | Remote push of the `production-baseline-v1.2.0` tag is deferred and non-blocking | — |

## Known limitations (carried forward)

- Near-duplicate legacy strings still appear beside canonical records. Example: "Flying debris from vibrating tool" alongside H-HW-029.
- Legacy keywords reach too far. Example: leading-edge fall hazards appear for ground-level steel work.
- Recognition is based on vocabulary. Wording the app doesn't recognize gets fewer suggestions.
- Safari and iPadOS behavior (PWA install, Share Sheet, dictation) was validated by PO physical testing, not by automated tests.

## Intelligence improvements carried forward (PO-008 §5)

Per PO-008, these were not attempted during promotion.

1. Semantic deduplication between legacy and canonical records.
2. Better contextual applicability of legacy hazards.
3. Continued expansion of the recognition vocabulary.
4. Resolution of the induction and resistance heating classification (P2-U16).
5. Outstanding regulatory and technical validation (U-4, U-5, U-10, P2-U10, P2-U11, P2-U17).

## Environments

- **Production:** GitHub Pages, served from branch `main`.
- **Testing:** the Netlify revision-a4 branch preview at `https://revision-a4--adena-jsa.netlify.app/adena-jsa.html` is retained. The primary Netlify configuration (production branch revision-a2) was left unchanged, per PO-008 §4.

## Development stop

Development stopped once this release was deployed and verified (PO-008 §7). It resumes when the PO authorizes SIL-PKG-003 — Drill and Mechanical Fastening.

> **Repository Record (AD-008 §6):** Implementation record for the v1.4.1-dev1 test release (AD-010). Test build only — not a production release. Production remains v1.4.0-p1 on `main` / GitHub Pages. No merge to `main` is authorized.

# Safety Intelligence Library Engine — v1.4.1-dev1

**Authority:** AD-010 (PO, November 26, 2026) · SIL-PKG-003 r2 (`e2f768b`) · Architect Response 005 · SIL PO Decisions 005 and 006
**Branch:** `revision-a4` · **Build:** `APP_VERSION 1.4.1`, `APP_BUILD dev1`, `CACHE_NAME adena-jsa-v1.4.1-dev1`
**Base:** v1.4.0 engine (`SIL-ENGINE-v1.4.0.md`). Everything in that record still applies unless changed below.

## 1. What changed in the application

| Area | Change |
|---|---|
| SIL data (`SIL_DATA`) | Package 003 hazards (23 new H-DF records), 133 new controls (C-000273 to C-000405), 13 wording revisions (T-1 to T-14, prior wording kept in `SIL_DATA.prior`), 201 Package 003 relationships, policy P-000010 |
| SIL engine | Package 003 vocabulary (`SIL_RX` additions), `silConceptsP3`, Package 003 rules, legacy phrase masks, control precedence (§2) |
| Version identifiers | Header comment, `<meta application-version>`, `APP_VERSION 1.4.1`, `APP_BUILD dev1`, header status line |
| `sw.js` | `CACHE_NAME` = `adena-jsa-v1.4.1-dev1` |

**Unchanged:** legacy libraries; drawer UI, Show More (15 per batch), tap-to-add/remove, manual entry and dictation; storage and active-JSA persistence; signatures, revision acknowledgment and revision history; PDF, print and sharing. The diff against `main` is confined to the engine region and the version identifiers.

## 2. Engine changes

1. **Recognition (Package 003).** Drilling (cordless, hammer, rotary hammer, core, mag, drill press, hole saw, annular, tapping), anchors (mechanical, adhesive, life-safety, existing), fastening tools (PAT, gas-actuated, nailers, rivets, hot rivets, lockbolts, self-drilling screws), materials (silica-containing, unknown, wood, coated, PT/prestressed), services and occupancy, compressed-air cleaning, batteries, induction/resistance heating.
   - Non-tool "drill" phrases (fire, evacuation, emergency drills; drill rigs; blast holes; directional boring) are masked before drilling is recognized (C-1, C-3, C-4).
   - Standalone brand names (Ramset, Hilti, deck gun) never establish PAT work (AD-010 §3.7, E-13).
2. **Silica (AD-010 §3.1, §3.2).** Known silica-containing material → H-DF-017 explicit with method controls. Unknown or unstated material on a dust-producing operation → assessment form only ("Possible respirable crystalline silica exposure — material composition not established") with C-000314 and C-000397; never confirmed exposure. C-000395 (99% filter efficiency) applies only with the prescribed dust-collection method and states that it is separate from HEPA hole cleaning. Drywall and composites are not classified as silica-free (§3.6).
3. **Induction and resistance heating (AD-010 §3.3).** C-000393 appears for every heating task (via H-HW-008). Hot work is established from ignition cues after clearance and "no ignition hazard" phrases are removed, so a contradictory cue (e.g., "near wood framing") still governs. Clearing combustibles leaves hot work conditional, not removed.
4. **Control precedence.**
   - Drill press: C-000276 (no gloves near the spindle) replaces C-000004/C-000286; C-000218 secures the workpiece whatever its size; C-000112/C-000272 only with a handling cue; legacy cut-glove line dropped.
   - PAT: P-000010 presents C-000354 (safety glasses plus face shield) in place of C-000055; not applied to nailers or gas tools.
   - Legacy respirator line dropped where the silica method controls apply; C-000164 revised wording applies on every relationship (P3-U15).
5. **Legacy library.** Phrase-scoped masks keep A-2 keyword entries from matching Package 003 activities they don't describe (entries 1, 3, 4, 5, 6, 11, 12, 15, 20, 21, 22, 31, 36). Legacy keyword matching skips H-DF hazard lines. Method-scoped (`p3n:`) relationships keep socket/wrench/wheel controls off drilling-only tasks.

## 3. Engineer decisions made during implementation (for Architect validation)

These were needed to make the approved regression scenarios pass. None adds a numeric limit or new safety-critical instruction; each is an applicability or collision rule.

| # | Decision | Scenario |
|---|---|---|
| ED-1 | H-BT-001 narrowed to mechanical anchors, rivets and hammer-set tools (not fall-protection anchor installation) | R-8, C-13 |
| ED-2 | H-BT-018 (dropped objects) for mag drills on vertical/overhead surfaces; H-BT-026 for induction/resistance heating | A-5, A-6, B-5 |
| ED-3 | Hot tap treated as hot work for C-000241 | C-5 |
| ED-4 | H-DF-018 conditional (not explicit) for nailers in wood — trim and framing are cut and fitted on site | A-16 |
| ED-5 | Loading or tensioning an adhesive anchor establishes H-DF-024 and puts it first | A-34 |
| ED-6 | "Drill rig" no longer matches the legacy rigging entry (suspended-load hazards); production/rig drilling with no handheld tool named is not handheld drilling | C-4 |

### Architect disposition (November 26, 2026 — `SIL-PKG-003-ARCHITECT-DISPOSITION-ED.md`)

| # | Disposition | Engineer action |
|---|---|---|
| ED-1 | Accepted, subject to keeping pinch points where the installation method creates them | v1.4.1-dev1 kept H-BT-001 for mechanical anchors but dropped it for clamp-type anchors (beam clamps, beam trolleys, sliding beam anchors). **Corrected in the working tree, not yet deployed** (pending build). |
| ED-2 | Accepted | — |
| ED-3 | Accepted, subject to contextual hot work classification and independent recognition of pressure, process contents and stored energy | v1.4.1-dev1 treated every "hot tap" as hot work, including a mechanical tap with no welding, and treated "no welding" as welding. **Corrected in the working tree, not yet deployed:** a welded hot tap is hot work; a mechanical tap (bolt-on saddle, tapping machine, no welding) makes hot work conditional; a negated welding statement doesn't establish welding. Pressure and stored-energy hazards appear in all three cases. |
| ED-4 | Held pending the exact task wording and the two dust suggestions | Awaiting PO task text |
| ED-5 | Accepted | — |
| ED-6 | Accepted; P3-U16 recorded as a deferred library expansion (not authorized) | Recorded in `SIL-UNRESOLVED-REGISTER.md`. Existing production drilling and mining coverage is preserved. |

## 4. Counts as implemented

| Item | Count |
|---|---|
| Hazard IDs in the registry | 119 (97 active and implemented, 22 retired/consolidated) |
| Controls in the registry | 405 |
| Controls in the application | 399 (405 less the 6 withheld RCSC controls C-000081–C-000083, C-000085–C-000087) |
| Policies | 10 |
| Additional controls withheld in this release | None |

## 5. Test execution (November 26, 2026)

| Suite | Result |
|---|---|
| `tests/sil-pkg003.js` — 82 Package 003 scenarios (83 task texts; D-12 run as two) plus acceptance and F-1 to F-16 defect checks | 526 / 526 PASS |
| `tests/sil-regression.js` — existing suite | 447 / 447 PASS |
| `tests/browser-functional.js` (Chrome, iPad viewport) — drawers, Show More, tap add/remove, manual entry, persistence, offline reload, signatures, revision banner, revision history, PDF | 22 / 22 PASS |
| Update path v1.4.0-p1 (`main` files) → v1.4.1-dev1 — cache replacement, active JSA preserved, legacy hazards still get controls, re-acknowledgment, stale JSA rejection | 9 / 9 PASS |
| Phone (390 px) and iPad viewports — drill-press gloves, PAT face shield, silica 99%, induction C-000393, no auto-selection, no page errors | PASS |

**Verification vs validation:** these results are Engineer verification that the build behaves as the approved records specify. They are not Architect validation of the safety content, and not PO field acceptance. Engineer decisions ED-1 to ED-6 need Architect validation.

## 6. Known limitations

- `tests/sil-pkg003.js` resolves suggestions to IDs by exact wording from the embedded library; it carries its own case list and control-key map, so it must be updated alongside any future wording or ID change.
- Defects F-1 to F-16 (P3-U13) are corrected in this build but stay open until PO physical testing and a production release.
- Recognition is vocabulary-based. Uncommon phrasing will fall back to the legacy library and manual entry, which remain unrestricted.

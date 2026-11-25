> **Repository Record (AD-008 §6):** Implementation record for the v1.4.0-dev1 interim test release (AD-009). Test build only — not a production release. Production remains v1.3.0-p1 on `main` / GitHub Pages.

# Safety Intelligence Library Engine — v1.4.0-dev1

**Authority:** AD-009 (PO), Architect Response 004 · **Branch:** `revision-a4` · **Build:** `APP_VERSION 1.4.0`, `APP_BUILD dev1`, `CACHE_NAME adena-jsa-v1.4.0-dev1`

## 1. What changed in the application

| Area | Change |
|---|---|
| `adena-jsa.html` — suggestion engine region | The A-2 engine body was replaced by the SIL engine (§2). `getSuggestions(kind, text, context)` keeps its interface. |
| `toggleDrawer()` | One line: control suggestions now receive the step description as `context.task`, which was reserved for Track B since A-1. |
| Version identifiers | Header comment, `<meta application-version>`, `APP_VERSION`, `APP_BUILD` |
| `sw.js` | `CACHE_NAME` = `adena-jsa-v1.4.0-dev1` |

**Unchanged:**
- the legacy libraries (`TASK_TO_HAZARD`, `HAZ_TO_CONTROL`, `HAZARDS`, `PPE_ITEMS`, `PERMITS`);
- the drawer UI, Show More (`A2_PAGE_SIZE` = 15), tap-to-add and tap-to-remove, manual entry;
- storage, document integrity, acknowledgment, PDF and print code.

The diff is limited to the regions above.

## 2. Engine design

1. **Recognition.** Whole-term vocabulary for activities, work methods, work means, objects, materials, conditions and context (`SIL_RX`, `silConcepts`). Rules follow the reconciled packages:
   - clause-level fit-up scoping;
   - exclusions such as "no line break" and "no hot work";
   - collision rules for tig/tight, arc flash, welding leads, spotter, grind welds, pretension and belt tension, non-thoriated;
   - brand names and electrode numbers count only with context.
2. **Applicability.** One rule per canonical hazard returns Explicit, Inferred or Conditional (`SIL_RULES`). Hot work follows B-12 as confirmed by the PO: definite or possible, never asserted from concrete grinding, cold cutting or flammable-material cues.
3. **Legacy library preserved.** The A-2 keyword library still runs for every step:
   - Production strings superseded under the crosswalks are replaced by their canonical records, which inherit the relationship.
   - Method-specific records (fit-up and hot work families) don't inherit without their own applicability.
   - Process-piping entries are conditional for flange work without an opening cue.
   - Short keywords (4 characters or fewer) now match whole terms. This removes fragment false positives such as "tig" in tight, "ear" in near, "av" in excavation, "pm" in equipment, "pull" in pulley and "fire" in misfire.
4. **Ranking.** Explicit → Inferred → legacy keyword matches (original A-2 order) → Conditional. Consequence only orders items *within* a class. Results are deduplicated. There is no padding and no automatic selection.
5. **Controls.** Each canonical hazard line brings its related canonical controls, filtered by relationship conditions evaluated on the step description.
   - Hazards saved before v1.4.0 map to their canonical records.
   - Legacy controls still run for every line. Equivalent legacy lines are shown once, in canonical wording.
   - Hot work policy controls appear only when hot work is recognized.
   - The respirator line is corrected (PO-approved).
   - Policy precedence: A4 replaces work gloves for cut exposure; the combined heat + A4 control replaces the separate ones; P-000009 face shield replaces the general face-shield control for handheld grinding.

## 3. Implemented content

| Item | Count |
|---|---|
| Active canonical hazards | 74 |
| Canonical controls in the app | 266 of 272 (6 withheld) |
| Company policies linked | 9 |
| Legacy task entries retained | 42 |
| Legacy control entries retained | 24 |
| Production hazard strings superseded (relationships inherited) | 47 |

**Withheld pending technical validation** (AD-009 §5). These are RCSC method-specific installation controls on H-BT-031, held because the exact provisions are not yet validated (U-5). They stay in the library and registry.

| Control | Content |
|---|---|
| C-000081 | Tightening pattern |
| C-000082 | Turn-of-nut procedure |
| C-000083 | Calibrated-wrench daily verification |
| C-000085 | DTI verification |
| C-000086 | Pre-installation verification |
| C-000087 | Bolt storage and lubrication |

## 4. Test results (executed against the built application)

| Suite | Result |
|---|---|
| `tests/sil-regression.js` — Packages 001–002 regression scenarios, Response 004 scenarios, legacy coverage probes, control and policy relationships, collision rules, withheld-content check | **447 / 447 pass** |
| Legacy hazard coverage probe — every legacy keyword (823 probes) vs. v1.3.0-p1 | 26 probes differ; all are removed fragment false positives (listed in §3 item 3). No intended legacy relationship lost. |
| Legacy control coverage probe — every legacy hazard string (341) vs. v1.3.0-p1 | Differences limited to approved substitutions (canonical wording), hot work gating, the respirator correction and removed fragment false positives |
| `tests/browser-functional.js` — headless Chrome, iPad viewport | **22 / 22 pass.** Covers load, version, service worker, hazard and control drawers, first batch of 15, Show More, tap-to-add and tap-to-remove, manual entry, same-day restoration, offline reload, supervisor and crew signatures, material-change banner, original signature preserved, revision history, native PDF blob (`%PDF-`) and filename, no page errors. Identical results on v1.3.0-p1. |
| `tests/browser-update-path.js` — deploy v1.4.0-dev1 over v1.3.0-p1 on the same origin | **9 / 9 pass.** Covers new build served, old cache replaced, active JSA preserved, legacy hazards still get controls, individual crew re-acknowledgment, original signature unchanged, stale prior-day JSA rejected. |

**Not exercised here:** Safari / iPadOS specifics (PWA install prompt, Share Sheet PDF hand-off, native dictation). These need PO physical-device testing.

## 5. Known limitations

- Some legacy strings retained by the crosswalks sit beside close canonical records. Example: T22 "Flying debris from vibrating tool" alongside H-HW-029 "Flying particles, sparks and fragments." These are candidates for later generalization.
- Legacy entries keep their original keyword reach. For example, a structural-steel step at ground level still lists T7 "Fall exposure at leading edge and open sides."
- Induction and resistance heating are treated as *possible* hot work pending PO decision (P2-U16).
- Recognition is vocabulary-based. Unusual phrasing may fall back to legacy suggestions or conditional items. Manual entry is always available.

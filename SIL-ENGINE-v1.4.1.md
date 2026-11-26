> **Repository Record (AD-008 §6):** Implementation record for the v1.4.1-dev1 test release (AD-010). Test build only — not a production release. Production remains v1.4.0-p1 on `main` / GitHub Pages. No merge to `main` is authorized.

# Safety Intelligence Library Engine — v1.4.1-dev1 to dev4

**Authority:** AD-010 (PO, November 26, 2026) · SIL-PKG-003 r2 (`e2f768b`) · Architect Response 005 · SIL PO Decisions 005 and 006
**Branch:** `revision-a4` · **Builds:** `1.4.1-dev1` (`CACHE_NAME adena-jsa-v1.4.1-dev1`), then `1.4.1-dev2` (§7) and `1.4.1-dev3` (`CACHE_NAME adena-jsa-v1.4.1-dev3`, §8), the build now on the preview
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
| ED-1 | Accepted, subject to keeping pinch points where the installation method creates them | Corrected in v1.4.1-dev2, extended by PO field-testing direction (`SIL-PO-FIELD-TEST-ED-1.md`) — §7. |
| ED-2 | Accepted | — |
| ED-3 | Accepted, subject to contextual hot work classification and independent recognition of pressure, process contents and stored energy | v1.4.1-dev1 treated every "hot tap" as hot work, including a mechanical tap with no welding, and treated "no welding" as welding. **Corrected in v1.4.1-dev2:** a welded hot tap is hot work; a mechanical tap (bolt-on saddle, tapping machine, no welding) makes hot work conditional; a negated welding statement doesn't establish welding. Pressure and stored-energy hazards appear in all three cases. |
| ED-4 | Held, then accepted and closed by the PO (`SIL-PO-FIELD-TEST-ED-1.md`) | — |
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

## 7. v1.4.1-dev2 — field-testing corrections (November 26, 2026)

**Authority:** Architect disposition of ED-1 to ED-6 (`SIL-PKG-003-ARCHITECT-DISPOSITION-ED.md`); PO field-testing direction (`SIL-PO-FIELD-TEST-ED-1.md`). **Build:** `APP_BUILD dev2`, `CACHE_NAME adena-jsa-v1.4.1-dev2`. The diff against dev1 is confined to the engine region, `SIL_DATA` and the version identifiers.

### Clamp-type anchors (ED-1)

- **Terms recognized:** clamp anchors, clamp-on anchors, beam clamps, girder clamps, beam anchors, beam trolleys, trolley anchors, sliding (beam) anchors. Recognition does not require "fall protection".
- **Treated as one device:** the words "beam", "clamp" and "anchor" inside these phrases establish no other activity. They no longer trigger the drilling/anchoring keyword entry, the rigging entry or steel-erection/elevated-work entries.
- **Hazards (canonical reuse):**
  - H-BT-001 — pinch points while fitting, bolting, anchoring or fastening.
  - H-DF-026 — failure of an anchor used for fall protection, suspended access or lifting.
- **Not assumed without context:**
  - drilling and post-installed anchors: H-DF-024; C-000339 "Drill, clean and set…" is now scoped to drilled-in or post-installed anchors
  - adhesive anchoring and curing
  - silica
  - powered tools: C-000224 on H-BT-001 is now scoped to powered or tool-driven fastening
  - bolt fit-up (C-000002, drift pin)
  - elevated work
- **Context preserved:** leading-edge, drilling, wedge-anchor, concrete and rigging context in the same step still brings its own hazards. See scenarios ED-1-7 to ED-1-9.
- **Inspecting an existing clamp:** inspection and removal-from-service controls apply; installation controls and pinch points don't.
- **New controls** (PO-directed; Engineer draft, Architect validation pending; no numeric values):
  - **C-000406** — "Select a clamp-type anchor rated for the application and compatible with the beam size, flange width and flange thickness; install it by the manufacturer's instructions, tighten and lock it, and confirm it cannot slide or come off the member before use. Keep fingers clear of the jaws and flange while positioning and tightening."
  - **C-000407** — "Inspect the clamp before each use for damage, deformation, worn jaws, missing or damaged locking parts and illegible markings, and remove any defective clamp from service."

### Hot tap (ED-3)

- A welded hot tap is hot work.
- A mechanical tap (bolt-on saddle, tapping machine, "no welding") makes hot work conditional.
- A cold tap is not hot work.
- "No welding" / "without welding" no longer establishes welding.
- Pressure, process-contents and stored-energy hazards appear in every case.

### Counts in dev2

| Item | Count |
|---|---|
| Hazards | 97 active (unchanged) |
| Controls in the registry | 407 |
| Controls in the application | 401 (407 less the 6 withheld RCSC controls) |
| Policies | 10 |
| Additional controls withheld | None |

### Tests (dev2)

| Suite | Result |
|---|---|
| `tests/sil-pkg003.js`: 82 scenarios plus 18 §E field-testing / disposition scenarios, acceptance and defect checks | 740 / 740 pass |
| `tests/sil-regression.js` | 447 / 447 pass |
| `tests/browser-functional.js` | 22 / 22 pass |
| Update path v1.4.0-p1 → dev2 | 9 / 9 pass |
| Update path dev1 → dev2 | 9 / 9 pass |

The first v1.4.0-p1 → dev2 run reported the old page after update. The local test server was sending a stale Last-Modified date on files extracted by `git archive`, which let the browser serve them from its HTTP cache. Re-staged with fresh file times, the run passed. Netlify revalidates on every request, so this doesn't apply to the preview.

### Observed, not changed (existing v1.4.0 behavior)

- **Process-piping controls on unrelated steps.** H-BT-002 ("…pipe ends and flanges") pulls the legacy process-piping controls (depressurize, line break permit) into its control list. This happens on any step with that hazard, e.g. "Erect steel beams at leading edge". The same output occurs in production v1.4.0-p1.
- **Roofing hazards from "roof edge".** "Roof edge" matches the legacy roofing entry and brings torch, kettle and membrane hazards onto non-roofing steps.

Both need a phrase-scoped correction. Neither was changed here because both are outside the ED-1 / ED-3 scope.

## 8. v1.4.1-dev3 — Architect disposition of dev2 (November 26, 2026)

**Authority:** `SIL-PKG-003-ARCHITECT-DISPOSITION-DEV2.md`. **Build:** `APP_BUILD dev3`, `CACHE_NAME adena-jsa-v1.4.1-dev3`. Production v1.4.0-p1 is unchanged.

### Controls
- **C-000406:** revised to the Architect's wording, verbatim.
- **C-000407:** accepted as written.
- **Clamp types kept distinct:** recognition records fixed clamps (clamp, clamp-on, beam and girder clamps, beam anchors) separately from travelling devices (sliding beam anchors, beam trolleys). Regression checks confirm each type.

### PD-1 — process-system controls need process-system context
- **Cause:** legacy control entries were matched against the wording of each hazard line. "…pipe ends and flanges" in H-BT-002 matched the legacy process-piping entry, so depressurize, double block and bleed, and line break permit appeared on any step with sharp metal.
- **Correction:** the relationship is now gated, not the phrase. The legacy process-system control entries are 22 (process piping / line break), 23 (vessel entry) and 24 (chemical plant). They apply only when the task itself establishes process-system context, by either:
  - a process-system cue in the task: process line or plant, line break, opening or breaking a line or flange, hot or cold tap, tie-in, in-service, live or pressurized line, a named chemical, steam, gas or fuel line, vessel, tank, reactor or exchanger; or
  - a task that the legacy library itself classifies as process piping, process vessel or process plant work (hazard entries 30, 31, 34). This keeps production coverage for tasks such as flange make-up.
- **Not changed:** hazard wording no longer establishes process context. Steps with no task description keep the previous behavior.

### PD-2 — roof location vs. roofing work
- **Cause:** the legacy roofing entry (35) matched the bare word "roof", so any rooftop step got torch, hot kettle, membrane, asphalt and substrate hazards.
- **Correction:**
  - **Roofing work** is recognized only from roofing activity cues: roofing, re-roofing, roofers, membrane, built-up roof, torch-applied or torch-down, kettle, hot tar or asphalt, waterproofing, shingles, TPO, EPDM, modified bitumen, tear-off, flashing, cap sheet, or roof repair, replacement or coating.
  - **Without roofing work,** roof location words don't match the roofing entry.
  - **Roof as a location** establishes elevation and H-BT-017 fall exposure:
    - explicit at a roof edge, perimeter, parapet, opening, hatch or skylight
    - inferred elsewhere on a roof
  - **When roofing work is recognized,** the roofing relationships carry fall exposure, so H-BT-017 isn't added beside the roofing fall line.
  - **Metal or steel roof decking** is treated as decking and uses the decking fall relationship.
- **Same class of defect:** location wording in hazard lines (leading edge, roof edge, open sides) no longer matches the legacy cutting-tool control entry through the word "edge".

### Counts (dev3)
| Item | Count |
|---|---|
| Hazards | 97 active (unchanged) |
| Controls in the registry | 407 |
| Controls in the application | 401 (6 RCSC withheld) |
| Policies | 10 |
| Additional controls withheld | None |

### Tests (dev3)
| Suite | Result |
|---|---|
| `tests/sil-pkg003.js`: §A to §D (82), §E (18) and §F (15) scenarios, plus acceptance, defect, wording and clamp-type checks | 835 / 835 pass |
| `tests/sil-regression.js` | 447 / 447 pass |
| `tests/browser-functional.js` | 22 / 22 pass |
| Update path v1.4.0-p1 → dev3 | 9 / 9 pass |
| Update path dev2 → dev3 | 9 / 9 pass |

### Observed, not changed (existing behavior; for Architect review)
- **Task-keyword process classification.** Pipe fabrication tasks such as "Grind burrs off pipe spool in fab shop" are still classified as process piping by the legacy library's task keywords ("pipe spool", "flange"). They therefore keep the process-fluid hazards and process-piping controls, as in production. Narrowing this would reduce existing production coverage, so it was left for an Architect decision.
- **Cutting-tool controls from sharp-metal wording.** H-BT-002 / "Sharp edges on steel" still bring the legacy cutting-tool controls (line of cut, blades, cutting zone) to non-cutting steel work, through the words "cut" and "sharp".
- **Torch and kettle hazards on roofing.** Roofing recognized from non-torch systems (e.g. TPO) still brings the roofing entry's torch and kettle hazards, as in production.

## 9. v1.4.1-dev4 — temporary fall protection anchorage connectors (November 26, 2026)

**Authority:** `SIL-ARCHITECT-DIRECTIVE-FP-ANCHORAGE-CONNECTORS.md`.

**Build:** `APP_BUILD dev4`, `CACHE_NAME adena-jsa-v1.4.1-dev4`. The directive asked for incorporation into v1.4.1-dev3. dev3 was already deployed, so the additions are built under the next test identifier.

**Status:** committed on revision-a4 but **not pushed or deployed** — deployment awaits PO confirmation. Production v1.4.0-p1 is unchanged.

### Recognition
- **Connectors by name:** beamer(s), beam strap anchor, sliding beam anchor, sliding beam clamp, sliding beam clamp anchor, pivot D-ring beam anchor or clamp, fall protection beam clamp or anchor, beam glide anchor, temporary beam anchor or clamp, and (temporary) beam anchorage connector. These are temporary fall protection anchorage connectors.
- **Generic terms:** clamp anchor, clamp-on anchor, beam clamp, beam anchor and beam trolley are treated as fall protection connectors only where the task establishes fall protection — fall protection or arrest, tie-off, lanyard, SRL, harness, lifeline, anchorage.
- **Other uses:**
  - **Lifting clamps** ("lifting beam clamps", or a clamp with lifting, rigging, hoist, chain fall, load or pick context) keep the lifting relationships.
  - **Beam trolleys** default to material handling.
  - **Clamp hardware for hangers and supports** (conduit, strut, threaded rod, cable tray, duct, pipe supports) is mechanical fastening: pinch points only, with no anchor or fall protection records.
  - **Mixed tasks** keep both relationships.
- **Connector types:**
  - **Sliding** (travels along the flange): beamers, sliding, glide and trolley anchors.
  - **Fixed jaw-type:** all other jaw-type connectors.
  - **Beam strap:** no jaws.
- **Activities** are recognized separately: installation, inspection, use (the default), repositioning (move, slide, walk, transfer, relocate) and removal.
- **Phrase scoping:**
  - "beam", "flange", "fixed" and "remove" inside these tasks no longer trigger steel erection (from the device name), process piping, maintenance or demolition entries.
  - A flange named with a beam device is the beam flange.

### Hazards
| Exposure (directive §2) | Record |
|---|---|
| Failure or disengagement | H-DF-026 (reused) for failure; H-DF-042 for disengagement |
| Travel beyond the beam end or through a flange discontinuity; improper jaw engagement; incompatible flange; unintentional release or loosening | **H-DF-042 (new)** — "Beam anchorage connector traveling off the beam end or through a flange gap or discontinuity, or disengaging from the flange" |
| Pinch points (installation, adjustment, removal) | H-BT-001 (reused) |
| Swing fall | **H-DF-043 (new)** — no equivalent canonical record existed |
| Insufficient fall clearance | **H-DF-044 (new)** — no equivalent canonical record existed |
| Falls during installation, repositioning or removal | H-BT-017 (reused) |
| Dropped anchorage equipment at elevation | H-BT-018 (reused) |

**Applicability by activity:**

| Activity | Records |
|---|---|
| Installation | H-DF-026, H-DF-042 (jaw-type or sliding), H-BT-001, H-BT-017, H-BT-018, H-DF-043, H-DF-044 |
| Use | H-DF-026, H-DF-042, H-BT-017, H-DF-043, H-DF-044 |
| Repositioning or transfer | As for use, plus H-BT-018; H-BT-001 when the connector is adjusted, relocated or transferred |
| Removal | H-BT-017, H-BT-018, H-BT-001 |
| Inspection only | H-DF-026 with its inspection and removal-from-service controls |

**Ranking:** H-DF-042 is ranked first when a sliding connector is used near a beam end, gap, discontinuity, connection tab or splice, or is being transferred. The foreman doesn't have to describe the failure mechanism.

### Controls (new, C-000408 to C-000418; no numeric values)

| ID | Text | Applies to |
|---|---|---|
| C-000408 | Use an approved fall protection anchorage connector compatible with the beam dimensions, flange configuration and intended application. | H-DF-026, H-DF-042 |
| C-000409 | Verify both jaws are fully engaged on the beam flange and the locking mechanism is secured according to the manufacturer's instructions before connecting. | H-DF-042 (jaw-type) |
| C-000410 | Before using a sliding beam anchor, inspect the entire intended travel path. | H-DF-042 (sliding) |
| C-000411 | Identify beam ends, flange discontinuities, gaps, connection tabs and other locations where the anchor could disengage. | H-DF-042 (sliding) |
| C-000412 | Do not allow a sliding beam anchor to travel beyond the usable beam flange. | H-DF-042 (sliding) |
| C-000413 | Do not rely on connection tabs, bolts or adjacent structural members as travel stops unless they have been specifically verified as suitable for that purpose. | H-DF-042 (sliding) |
| C-000414 | Where required, use manufacturer-approved travel stops or another approved method to prevent unintended disengagement. Do not improvise travel stops or modify the equipment. | H-DF-042 (sliding) |
| C-000415 | Maintain continuous fall protection while installing, repositioning or removing an anchorage connector when exposed to a fall hazard. | H-BT-017 |
| C-000416 | Evaluate swing fall exposure and available fall clearance before use. | H-DF-043, H-DF-044 |
| C-000417 | Inspect the anchorage connector before each use and remove defective equipment from service. | H-DF-026 |
| C-000418 | Keep hands and fingers clear of clamp jaws and adjustment mechanisms. | H-BT-001 |

**Existing controls on fall protection connectors:** the generic clamp-anchor controls are replaced by the connector controls above. These are C-000346, C-000406, C-000407, C-000403, and C-000341 (acceptance before loading). C-000347 (anchors installed to a qualified person's design or approval) and C-000404 (remove from service an anchor that is damaged or has arrested a fall) still apply.

### Engineer decisions (for Architect validation)
- **EDF-1:** H-DF-043 and H-DF-044 were created as new canonical records. No existing record described swing fall or fall clearance. The directive named only one new record (travel and disengagement) but required these exposures and reuse "where equivalent".
- **EDF-2:** A bare "beam anchor" stays generic; it becomes a fall protection connector only with fall protection context. "Temporary beam anchor" is recognized as a connector by name.
- **EDF-3:** A beamer is treated as a sliding connector.
- **EDF-4:** A beam strap anchor is treated as a fixed connector without jaws. It takes no jaw or travel controls and no H-DF-042.
- **EDF-5:** H-DF-026 is not presented for a removal-only task. H-BT-017, H-BT-018 and H-BT-001 carry the exposure there.
- **EDF-6:** Swing fall and clearance (H-DF-043, H-DF-044) apply to installation, use and repositioning, not to inspection or removal.

### Counts (dev4)
| Item | Count |
|---|---|
| Hazard IDs | 122 (100 active, 22 retired) |
| Controls in the registry | 418 |
| Controls in the application | 412 (6 RCSC withheld) |
| Policies | 10 |
| Additional controls withheld | None |

### Tests (dev4)
| Suite | Result |
|---|---|
| `tests/sil-pkg003.js`: §A to §G — 82 + 18 + 15 + 22 scenarios (ED-1-6 revised under the directive) — plus acceptance, defect, wording and clamp-type checks | 1,143 / 1,143 pass |
| `tests/sil-regression.js` | 447 / 447 pass |
| `tests/browser-functional.js` | 22 / 22 pass |
| Update path v1.4.0-p1 → dev4 | 9 / 9 pass |
| Update path dev3 → dev4 | 9 / 9 pass |

> **Repository Record (AD-008 §6):** Engineer independent review of the SIL-PKG-004 candidate (Rigging and Hoisting), November 26, 2026. Candidate under review — not approved. Nothing in production is changed by this document. No Package 004 implementation is authorized.

# SIL-PKG-004 — Engineer Review (r1)

**Candidate:** `SIL-PKG-004.md` (Architect, Candidate 1.0) · **Baseline:** v1.4.1-p1 · **Reviewer:** Claude (Engineer) · **Scope:** review and reconciliation only (candidate §12)

**Companion records:**
- `SIL-PKG-004-RECONCILED.md` — dispositions, records, controls, rules
- `SIL-PKG-004-PRODUCTION-CROSSWALK.md` — v1.4.1-p1 baseline and defects
- `SIL-PKG-004-REGRESSION.md` — 67 scenarios

## 1. Result

The candidate is sound and well-structured. Reconciled against the 122 hazard IDs and 418 controls in v1.4.1-p1:

- **Hazards:** 38 of the 75 candidate hazards are genuinely new mechanisms and keep their H-RH IDs. Twelve are equivalent to 7 existing records; 5 of those records need a wording generalization (T-15 to T-19). Twenty-five consolidate into a retained Package 004 record.
- **Controls:** the 161 candidate control lines reduce to 100 proposed canonical controls (C-000419 to C-000518). Six of those are Engineer additions, because candidate §4 lists six hazards with no control. Six existing controls are reused.
- **Production baseline:** the v1.4.1-p1 rigging and hoisting coverage has 20 defects (crosswalk §B). Nine required scenarios return nothing at all, and "Lift near overhead power lines" returns no electrical hazard.

The review does not change any approved record. Proposed changes to approved records are listed in §6 for Architect acceptance.

## 2. Findings

| # | Finding | Recommendation |
|---|---|---|
| E-1 | **Identifier practice.** Package 003 kept candidate IDs for retained records and registered consolidated IDs as retired. | Apply the same practice. Register H-RH-001 to H-RH-075 on validation (38 active, 37 retired) and C-000419 to C-000518. The registries are not updated until then. |
| E-2 | **Tag lines conflict with MSHA.** Candidate §6 says tag lines are not automatically required. On MSHA-regulated surface mines, tag lines **shall be attached** to loads that may require steadying or guidance while suspended (30 CFR 56.16007(a); 77.210(c) for surface coal — verified). Adena works phosphate mines. | Keep the §6 rule for construction. On mine sites, the tag-line control applies whenever the load needs steadying or guidance. Added to PO decision 5 (§5). |
| E-3 | **Power lines are not only "when named."** A power-line assessment of the work zone is required before every crane equipment operation (1926.1408(a), verified). A dedicated spotter is required when traveling unloaded within 20 ft (1926.1411(a), verified). | Make H-RH-044 *Conditional* on every mobile, boom-type or tower crane operation and *Explicit* when lines are named. Apply it to unloaded travel near lines. Never apply it to bridge cranes or hoists. Keep the numeric distances out of user-facing text. |
| E-4 | **Personnel hoisting is restricted.** Hoisting employees by crane is prohibited unless conventional access would be more hazardous or isn't possible (1926.1431(a), verified). This does not apply to steel erection (1926.753(a), verified). The candidate defers detailed controls to validation. | The eight personnel-lifting controls (C-000504 to C-000511) contain no numeric values. Their paragraph references beyond 1926.1431(a)–(b)(1) are unverified. Recommend Architect validation and PO decision 7 before any of them is implemented. Until then, implement only H-RH-073 and H-RH-074 recognition, or hold the whole set, as the Architect directs. |
| E-5 | **Clamps play four roles.** "Beam clamp" can mean: a clamp gripping the load; an overhead beam clamp or trolley used to hang a hoist; a fall protection anchorage connector (Package 003); or clamp hardware for hangers. In Package 003, overhead lifting beam clamps and trolleys present H-DF-026 ("anchor used for fall protection, suspended access or lifting"). | Present H-RH-060 (hoist support) for overhead beam clamps and trolleys used for lifting, keeping C-000406 and C-000407. Keep H-DF-026 for installed lifting and life-safety anchors. This changes approved Package 003 behavior (§6, P-4). |
| E-6 | **Steel erection overlap.** H-BT-014 "Struck by or caught between suspended structural steel" is the natural canonical home for suspended-load struck-by. Its controls C-000034 (connectors), C-000035 (tag lines) and C-000036 (signal person) are steel-erection practice. | Generalize H-BT-014 (T-15) and scope C-000034 to C-000036 to structural steel erection. Treat C-000036 and the new communication control as equivalent for display, so a steel lift does not show both. |
| E-7 | **C-000033 is absolute.** "Stay out from under the suspended load" allows no exceptions. 1926.1425(b) and (d) permit workers needed to hook, unhook, guide or receive the load inside the fall zone (verified). | No change to C-000033 — it is conservative and approved. The new fall-zone control C-000457 states the permitted roles. Architect to confirm both may appear together. |
| E-8 | **Legacy duplicates and collisions.** The rigging and crane legacy entries duplicate each other on every crane task. Ten keyword collisions produce false hazards (demolition, confined space, electrical panel, stage fly systems, leading edge, aerial lift). | Supersede the legacy lines to canonical records and make phrase-scoped collision corrections (`RECONCILED` §9). This is the same method as Packages 001–003. |
| E-9 | **Gap: multiple lifts.** Steel-erection multiple lifts ("christmas-treeing") have specific rigging requirements (1926.753(e) — seen in the OSHA eTool, not verified against the CFR text). The candidate does not cover them. | Architect to decide whether to add a record and controls now or defer. Scenario M-6 records current expectations. |
| E-10 | **Inspection vs. operation.** Production presents every active-lift hazard for rigging or crane inspection. | Inspection-only rule (`RECONCILED` §7.3), per candidate §6. |
| E-11 | **Equipment classes.** Production applies mobile-crane outrigger, ground and power-line hazards to overhead bridge cranes. | Equipment-class rule (§7.4), per candidate §6. |
| E-12 | **Brand names.** "JLG" is a key in the legacy aerial-lift entry, so "JLG telehandler" is read as an aerial lift. | Brand names alone establish nothing (§7.2). |
| E-13 | **Themed-entertainment loads.** "Fly", "set" and "pick" are field terms for crane lifts of ride vehicles and rockwork. "Panel" collides with electrical panels. | Recognize "fly … with crane" and "set … with crane". Mask "panel" for precast, rockwork and large panels. |
| E-14 | **Suggestion volume.** Thirty-eight records plus five generalized ones is a large addition. | Proposed consequence classes (`RECONCILED` §8). Activity-scoped applicability keeps a typical lift to about 10–14 hazards; the first 15 are shown, as today. |
| E-15 | **Scheduled corrections overlap.** P3-U17 affects scenario 12 (shop spool) and scenarios M-2 and 13. P3-U18 affects scenarios 2, 3 and 4 (sharp-edged steel). | Implement them in the same cycle (candidate §11). Their scenarios are in the same suite. |
| E-16 | **RCSC unaffected.** Package 004 doesn't touch bolting. | The six RCSC controls stay withheld (U-5, U-20). |

## 3. Engineer additions (no candidate control existed)

| Control | For | Basis |
|---|---|---|
| C-000513 Assemble/disassemble by the manufacturer's procedure under the A/D director | H-RH-039 | 1926.1404(a) (verified via state-plan summary) |
| C-000514 Block or support boom and jib sections before removing pins; stay out from under | H-RH-039 | 1926.1404 (paragraph not verified) |
| C-000515 Anti-two-block device works; watch block-to-tip clearance | H-RH-041 | 1926.1415–1416 (not verified) |
| C-000516 Non-conductive tag lines near power lines | H-RH-044 | 1926.1408(b)(2) (verified) |
| C-000517 Temporary bracing or lifting arrangement for long or flexible loads | H-RH-059 | Practice |
| C-000518 Block and sheave sizing, reeving, snatch-block anchorage load | H-RH-062 | Consensus / manufacturer |


## 4. Regulatory and technical validation (candidate §9)

All references are internal. None appears in user-facing text.

"Verified" means the Engineer read the provision text in an official or official-mirror source on November 26, 2026: osha.gov, govinfo, Cornell LII, or the state plans of WA and CA. That is **Engineer verification, not Architect validation**.

| Reference | Used for | Status |
|---|---|---|
| 1926.1425(a), (b), (c)(1)–(3), (d), (e) — keeping clear of the load | Hoisting routes; fall-zone roles; unintentional displacement; self-closing latches; qualified rigger; receiving a load | Verified |
| 1926.1408(a), (b)(2), (b)(4); 1926.1409; 1926.1411(a) — power lines | Work-zone assessment; 20-ft option and Table A; non-conductive tag lines; encroachment measures; over 350 kV; unloaded travel | Verified (numbers not placed in user-facing text) |
| 1926.1431(a), (b)(1); 1926.753(a) — personnel hoisting | Restriction; platform; steel-erection exception | Verified |
| 1926.1431 — pre-lift meeting, trial lift, proof test, wind limits | Personnel-lifting controls | **Not verified** — paragraph text not reviewed |
| 1926.1402(a), (b), (c)(2), (e) — ground conditions | Ground, supporting materials, hazards beneath the set-up area | Verified |
| 1926.1417(h) — storm warning | Weather | Verified (competent person determines the manufacturer's recommendations) |
| 1926.1404(a) — A/D director | Assembly and disassembly | Verified via state-plan summary; other 1926.1404 paragraphs not verified |
| 1926.251(a) — rigging inspected before use on each shift; defective rigging removed | Rigging inspection | Verified. Paragraph numbering differs between sources (Cornell vs. osha.gov); the requirement text agrees. |
| 1926.753(c)(2) — qualified rigger inspects rigging before each shift (steel erection) | Rigging qualification | Verified |
| 1926.753(e) — multiple lift | E-9 | Seen in the OSHA eTool only; not verified |
| 1910.184 — slings: no knots or makeshift shortening; no kinked legs; legible identification | Rigging selection and use | Verified |
| 30 CFR 56.16007(a), (b); 77.210 — tag lines; suitable hitches and slings; stay clear of hoisted loads (coal) | E-2; rigging selection | Verified |
| 1926.1419–1428 — signals and signal-person qualification; 1926.1427 operator certification; 1926.1424 swing barricade; 1926.1415–1416 safety devices | Communication, qualification, swing area, two-block | **Not verified** |
| 1910.179 (overhead and gantry cranes); 1926.602 / 1910.178 (forklift and telehandler suspended loads) | Equipment classes; attachments | **Not verified** |
| ASME B30 series (B30.5, .9, .10, .16, .20, .21, .26) | Consensus basis | **Not verified** — not freely accessible |
| Manufacturer instructions and load charts; precast lifting-system instructions | Capacity, attachments, inserts | Equipment-specific — the user-facing controls defer to them |

## 5. Product Owner policy decisions

None is assumed. No Adena policy record is created from industry practice (candidate §8).

| # | Decision | Engineer note |
|---|---|---|
| 1 | Critical-lift classification and approval thresholds | No percentage threshold is used anywhere. C-000425 defers to the project's classification. |
| 2 | Written lift-plan requirements | Same control. |
| 3 | Company wind and lightning restrictions | C-000481 and C-000483 defer to the manufacturer and the project procedure. No number is placed. |
| 4 | Rigging inspection and identification beyond regulatory and manufacturer requirements | Example: inspection color-coding. |
| 5 | Tag-line requirements or exceptions | **Must reflect MSHA 56.16007(a) on mine sites** (E-2). |
| 6 | Lift Director assignment requirements | C-000430 defers to it. |
| 7 | Restrictions on crane-suspended personnel platforms | E-4 — gates the personnel-lifting controls. |
| 8 | Company requirements for lifting with telehandlers, forklifts and excavators | C-000499 defers to the manufacturer. |
| 9 *(Engineer)* | Whether the personnel-lifting controls are withheld until validated, as with the RCSC controls | E-4 |
| 10 *(Engineer)* | Confirm which Adena sites are MSHA-regulated, for the tag-line rule | E-2 |

## 6. Proposed changes to previously approved records (candidate §12)

| # | Change | Records | Approval needed |
|---|---|---|---|
| P-1 | Text generalizations T-15 to T-19 | H-BT-014, H-HW-037, H-BT-007, H-BT-002, H-BT-015 | Architect |
| P-2 | Scope steel-erection controls to steel erection | C-000034, C-000035, C-000036 on H-BT-014; C-000037 on H-BT-015 | Architect |
| P-3 | Legacy supersessions | Rigging, crane and overhead entries (`RECONCILED` §9) | Architect |
| P-4 | Overhead lifting beam clamps and trolleys present H-RH-060 instead of H-DF-026 | Package 003 scenarios FP-10, FP-18, FP-19 and ED-1-5 change expectations | Architect + PO |
| P-5 | Excavator or equipment "lifting point" no longer presents H-DF-026 | Package 003 lsAnchor vocabulary | Architect |

## 7. Not changed

- Package 001–003 records, IDs and production behavior, until P-1 to P-5 are accepted and implemented.
- The six withheld RCSC controls.
- All open validation items (U-series, P3-U7, P3-U10 to P3-U12, P3-U16).
- The scheduled corrections A3-U1 and P3-U17 to P3-U19.

Nothing has been implemented, built or deployed. Production stays v1.4.1-p1, and the training address serves v1.4.1-p1.

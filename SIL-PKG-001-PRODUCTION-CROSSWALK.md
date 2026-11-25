> **Repository Record (AD-008 §6):** Candidate crosswalk — not approved. Nothing in production is changed by this document. It records which production records *would* be superseded if Package 001 is approved, under Architect Response 001, Decision 1.

# SIL-PKG-001 — Production Record Crosswalk

**Production baseline:** v1.3.0-p1, commit `8318ddb`, as extracted in `A4-LIBRARY-EXPORT.md`
**Notation:**
- T*n* = `TASK_TO_HAZARD` entry *n*
- C*n* = `HAZ_TO_CONTROL` entry *n*
- H-BT-*nnn* = Package 001 reconciled candidate record (`SIL-PKG-001-RECONCILED.md`)

**Method.** I matched every production hazard string against all reconciled H-BT records, by mechanism, not by wording.

**How production strings relate to records.** Production strings have no IDs. A string's "relationship" is the task entry, keyword group, that surfaces it. When a string is superseded:
- the canonical H-BT record **inherits that relationship**, so it must still surface for the same production keywords;
- the production string is retired.

Decision 1 requires this: valid existing relationships across other activities are preserved.

---

## A. Superseded: equivalent mechanism and scope

| Production string | Appears in | Superseded by | Relationships the H-BT record must inherit |
|---|---|---|---|
| Pinch points during bolt-up and alignment | T7 | H-BT-001 | T7 Steel Erection |
| Sharp edges on steel | T7 | H-BT-002 | T7 |
| Kickback / torque reaction | T3 | H-BT-004 | T3 Drilling/Fastening, which covers powered drills and impact drivers; same powered-tool reaction mechanism |
| Crushing from shifting steel | T7 | H-BT-012 | T7 (identical text) |
| Unstable temporary structure condition | T7 | H-BT-013 | T7 |
| Suspended load during picks | T7 | H-BT-014 | T7 |
| Dropped objects | T7 | H-BT-018 | T7 |
| Dropped objects striking workers below | T25 | H-BT-018 | T25 Overhead Work |
| Falling tools from elevated workers | T25 | H-BT-018 | T25 |
| Noise exposure | T1, T2, T3, T4, T11 | H-BT-019 (as canonical noise record) | T1, T2, T3, T4, T11 — **see A-1** |
| Noise from pneumatic tools | T23 | H-BT-019 | T23 |
| Noise-induced hearing damage | T22 | H-BT-019 | T22 |
| Vibration exposure (hand-arm) | T22 | H-BT-020 | T22 |
| Injection injury from high-pressure fluid | T23 | H-BT-023 | T23 Pressurized Systems |
| Hose whip from disconnected line | T23 | H-BT-025 | T23 |
| Electrical cord trip hazard | T2 | H-BT-027 | T2 |
| Trip hazard from cords and cables | T15 | H-BT-027 | T15 Electrical |

**A-1. Canonical records serving other activities.** H-BT-019, H-BT-020, H-BT-023, H-BT-025 and H-BT-027 would become canonical records surfaced by welding, carpentry, drilling, concrete and electrical work. Under Decision 3, their bolting-specific controls must carry control-level applicability. For example, "wear hearing protection when running impact tools" must not be the only noise control shown for a step like "grind weld."

The canonical *hazard* text should therefore be neutral, as below. The bolting-specific wording moves into conditional controls.

| Record | Neutral canonical text |
|---|---|
| H-BT-019 | Noise exposure |
| H-BT-020 | Hand-arm vibration |
| H-BT-023 | High-pressure fluid injection |
| H-BT-025 | Compressed-air hose whip |
| H-BT-027 | Trips from hoses and cords |

---

## B. Supersede only if the record is generalized — Architect decision

In each case the mechanism matches, but the H-BT record as currently written is narrower than the production string.

| Production string | Appears in | Candidate | Generalization required |
|---|---|---|---|
| Rotating equipment entanglement | T3 | H-BT-010 | Broaden to "Fingers, gloves, clothing or lanyards caught in a rotating tool, bit, socket or extension" |
| Electrical shock | T3 (corded tools) | H-BT-026 | Broaden to "Electrical shock from corded tools or electrically powered equipment." T15 (energized electrical work) is **not** included — see C. |
| Cuts from pipe ends and flanges | T31 | H-BT-002 | Broaden the hazard text to include pipe ends and flanges. The "remove burrs where permitted" control needs flange-face applicability, because gasket seating surfaces must not be ground. |
| Caught-between from steel components | T7 | H-BT-012 | Fold caught-between into H-BT-012 ("Caught or crushed between steel members"), or retain T7 separately |

**Recommendation:** generalize and supersede all four. Leaving them creates the near-duplicate pairs that S-3 identified.

---

## C. Retained: related but distinct (not superseded)

| Production string | Appears in | Related H-BT | Reason retained |
|---|---|---|---|
| Fall exposure at leading edge and open sides | T7 | H-BT-017 | Leading edge and decking exposure is more specific than a general elevated position |
| Fall from aerial lift platform | T8 | H-BT-017 | Cross-referenced aerial lift record (Package 001 §6) |
| Fall from ladder; Overreaching and loss of balance | T9 | H-BT-009, H-BT-017 | Cross-referenced ladder records |
| Crushing / caught-between at overhead obstructions | T8 | — | Cross-referenced. **Highest-ranked aerial lift record for bolting from a boom lift.** |
| Struck-by from overhead steel | T7 | H-BT-014 | Ambiguous: could mean falling steel rather than suspended steel. Retain until clarified. |
| Suspended load / dropped load; Suspended load / struck-by; Dropped load | T5, T6 | H-BT-014 | General rigging and crane scope; H-BT-014 is connection-specific |
| Struck-by from falling materials and tools; Materials stored at height | T25 | H-BT-018 | Broader than tools and hardware |
| Eye injury from pressure spray | T23 | H-BT-024 | T23 covers pneumatic and hydraulic spray; H-BT-024 is hydraulic-only (Decision: H-BT-024) |
| Stored pressure release injury | T23, T31 | H-BT-024, H-BT-034 | The line-break / process-pressure meaning is retained |
| Pinch during flange assembly | T31 | H-BT-001, H-BT-035 | Flange fit-up context; relate to Torque and tensioning on flanges |
| Electrical shock | T15 | — | Energized electrical work |
| Trips from debris and cords | T19 | H-BT-027 | Covers debris as well |
| All context-specific noise, vibration, strain and electrical strings (crusher, shaker, show systems, pump motor, jackhammer, etc.) | Various | — | Context-specific. Consolidate in the packages that own those activities. |
| Musculoskeletal and ergonomic strain strings | T11, T17, T26, T28, T32–T36, T41 | H-BT-007 | Each is tied to its own task context; out of Package 001 scope |

---

## D. Control entries (HAZ_TO_CONTROL)

Production controls are triggered by keyword groups and are not linked to hazards. Package 001 links controls to hazards. **No production control entry is superseded by Package 001.** Superseding them needs canonical control IDs, which don't exist yet (Unresolved Item U-1).

These control entries overlap Package 001 controls and must be reconciled when control IDs are assigned:

| Entry | Overlaps with |
|---|---|
| C1 Fall Hazards | H-BT-017 |
| C3 Cuts / Lacerations / Sharp Edges | H-BT-002 |
| C4 Flying Debris / Eye Injury | H-BT-021, H-BT-029, H-BT-032 |
| C7 Suspended Load / Rigging | H-BT-014 |
| C8 Pinch / Caught-Between | H-BT-001, H-BT-012, H-BT-035 |
| C11 Crushing / Caught Under / Load Shifts | H-BT-012, H-BT-013 |
| C15 Slip / Trip / Housekeeping | H-BT-027 |
| C16 Noise / Hearing | H-BT-019 |
| C19 Stored Energy / LOTO | Cross-reference for flange and tensioning work |
| C22 Process Piping / Line Break | Cross-reference for flange and tensioning work |

---

## E. Production keyword relationships to retain

Production T7 already recognizes `bolt-up`, `spud wrench`, `drift pin` and `erection bolt`, and T3 recognizes `bolt installation`. These terms must remain recognition terms in Track B, mapped to Bolt (0013), so existing field phrasing keeps producing results.

The production `tig` keyword (T1) must use whole-term matching in Track B. It currently matches inside "tight" — Engineer Review finding A-1, Regression scenario R-11.

> **Repository Record (AD-008 §6):** Candidate crosswalk, **revision r3.2**. Not approved. Nothing in production is changed by this document. It records which production records *would* be superseded if Package 001 is approved (Architect Response 001 Decision 1; Responses 002 §2 and 003 §4). r1 is preserved at commit `0195ed9`, r2 at `4376c8e`.

# SIL-PKG-001 — Production Record Crosswalk (r3.2)

**Production baseline:** v1.3.0-p1, commit `8318ddb`, as extracted in `A4-LIBRARY-EXPORT.md`

**Notation:**
- T*n* = `TASK_TO_HAZARD` entry
- C*n* = `HAZ_TO_CONTROL` entry
- H-BT-*nnn* = reconciled r3 hazard record
- C-*nnnnnn* = canonical control (`SIL-CONTROL-REGISTRY.md`)

**How production strings relate to records.** Production strings have no IDs. A string's relationship is the task entry, keyword group, that surfaces it. When a string is superseded:
- the canonical H-BT record **inherits that relationship with its own applicability** (Package 001 r2, §2 rule 5);
- the production string is retired.

So an H-BT record that is [FIT-UP]-constrained for bolting is *not* fit-up-constrained when it is reached through T7 steel erection keywords.

**r2 test (Response 002 §2):** a supersession stands only if the H-BT record is **at least as broad** as the production string, in mechanism, exposed population and work means. If not, it is withdrawn until the record is generalized.

---

## A. Superseded: confirmed at least as broad (28)

| # | Production string | Entry | Superseded by | Inherited relationships | Broadness check |
|---|---|---|---|---|---|
| 1 | Pinch points during bolt-up and alignment | T7 | H-BT-001 | T7 | Same scope |
| 2 | Sharp edges on steel | T7 | H-BT-002 | T7 | H-BT-002 generalized; broader |
| 3 | Cuts from pipe ends and flanges | T31 | H-BT-002 | T31 | Generalized (Response 002 §2); flange-face control limit carried by C-000005 |
| 4 | Rotating equipment entanglement | T3 | H-BT-010 | T3 | Generalized to tool, bit, socket or extension |
| 5 | Electrical shock | T3 | H-BT-026 | T3 | Generalized to powered tools and equipment |
| 6 | Crushing from shifting steel | T7 | H-BT-012 | T7 | Generalized; identical mechanism |
| 7 | Caught-between from steel components | T7 | H-BT-012 | T7 | Generalized (Response 002 §2) |
| 8 | Unstable temporary structure condition | T7 | H-BT-013 | T7 | Same scope |
| 9 | Suspended load during picks | T7 | H-BT-014 | T7 | Same scope (steel picks) |
| 10 | Falling tools from elevated workers | T25 | H-BT-018 | T25 | H-BT-018 covers tools and hardware |
| 11 | Noise exposure | T1, T2, T3, T4, T11 | H-BT-019 | T1, T2, T3, T4, T11 | Canonical neutral text; OR applicability |
| 12 | Noise from pneumatic tools | T23 | H-BT-019 | T23 | As #11 |
| 13 | Noise-induced hearing damage | T22 | H-BT-019 | T22 | As #11 |
| 14 | Vibration exposure (hand-arm) | T22 | H-BT-020 | T22 | Canonical neutral text |
| 15 | Injection injury from high-pressure fluid | T23 | H-BT-023 | T23 | Canonical; controls apply to hydraulic systems generally |
| 16 | Electrical cord trip hazard | T2 | H-BT-027 | T2 | Hoses and cords; broader |
| 17 | Trip hazard from cords and cables | T15 | H-BT-027 | T15 | As #16 |
| 18 | Kickback / torque reaction | T3 | H-BT-004 | T3 (drills, hammer drills, mag drills, core drills) | Generalized r3 (Response 003 §4); drill and mag-drill controls C-000106 / C-000107; wrench controls conditional |
| 19 | Dropped objects | T7 | H-BT-018 | T7 | Generalized r3. Falling structural members (T7 "Struck-by from overhead steel") and suspended loads stay distinct. |
| 20 | Dropped objects striking workers below | T25 | H-BT-018 | T25 | Generalized r3 |
| 21 | Hose whip from disconnected line | T23 | H-BT-025 | T23 | Generalized r3. Pneumatic controls are conditional on pneumatic systems; other pressurized hoses use C-000109 / C-000110; hydraulic tool circuits stay with H-BT-023 / H-BT-024. |
| 22 | Dropped objects from elevated platform | T8 | H-BT-018 | T8 Aerial lift | Generalized r3; accepted r3.2 |
| 23 | Falling objects from ladder user | T9 | H-BT-018 | T9 Ladders | Accepted r3.2 |
| 24 | Falling objects from scaffold | T10 | H-BT-018 | T10 Scaffold | Accepted r3.2 |
| 25 | Struck-by from falling materials and tools | T25 | H-BT-018 | T25 | Accepted r3.2 |
| 26 | Materials stored at height | T25 | H-BT-018 | T25 | Accepted r3.2 |
| 27 | Dropped objects to floors and personnel below | T35 | H-BT-018 | T35 Roofing | Accepted r3.2 |
| 28 | Dropped rigging hardware onto workers below | T37 | H-BT-018 | T37 Themed | Accepted r3.2 |

**Canonical-record caution.** Records #11–17 make H-BT-019, H-BT-020, H-BT-023, H-BT-026 and H-BT-027 canonical across welding, carpentry, drilling, concrete and electrical work. Their bolting-specific controls carry relationship conditions so they don't appear as the only controls for unrelated work:
- C-000020 (rotate impact work)
- C-000064 (tensioner hoses)
- C-000075 (lift snag)

Records #18–28 make H-BT-004, H-BT-018 and H-BT-025 canonical in the same way.

## A2. Seven additional H-BT-018 supersessions — accepted (PO Decision 003 §7), now §A rows 22–28

All valid production relationships are preserved. Not superseded and kept distinct:
- suspended / dropped *loads* (T5, T6, T16);
- "Crush hazard from dropped material" (T17, a handling drop);
- T7 "Struck-by from overhead steel" (falling structural members).
---

## B. Supersession status changes

### B1. r1 §B generalizations — accepted, now in §A
Accepted under Response 002 §2: rows 3, 4, 5 and 7 above.

### B2. r2 withdrawn supersessions — resolved in r3
All four were reconciled after Response 003 §4 generalized H-BT-004, H-BT-018 and H-BT-025. They are now §A rows 18–21.

---

## C. Retained: related but distinct (not superseded)

| Production string | Entry | Related H-BT | Reason retained |
|---|---|---|---|
| Struck-by from overhead steel | T7 | H-BT-014, H-BT-018 | **Falling structural members, distinct from suspended load and from dropped tools/materials** (Responses 002 §2, 003 §4) |
| Fall exposure at leading edge and open sides | T7 | H-BT-017 | Leading edge and decking exposure is more specific |
| Fall from aerial lift platform | T8 | H-BT-017 | Cross-referenced aerial lift record |
| Fall from ladder; Overreaching and loss of balance | T9 | H-BT-009, H-BT-017 | Cross-referenced ladder records |
| Crushing / caught-between at overhead obstructions | T8 | — | Cross-referenced. Ranks high for bolting from a boom lift. |
| Suspended load / dropped load; Suspended load / struck-by; Dropped load | T5, T6 | H-BT-014 | General rigging and crane scope |
| Eye injury from pressure spray | T23 | H-BT-024 | T23 covers pneumatic and hydraulic; H-BT-024 is hydraulic-only |
| Stored pressure release injury | T23, T31 | H-BT-024, H-BT-034 | Process-pressure meaning |
| Pinch during flange assembly | T31 | H-BT-001, H-BT-035 | Flange fit-up; related to Torque and tensioning on flanges |
| Electrical shock | T15 | H-BT-026 | Energized electrical work |
| Trips from debris and cords | T19 | H-BT-027 | Includes debris |
| Context-specific noise, vibration, strain, electrical, cut and pinch strings | Various | — | Owned by other activity packages |

---

## D. Control entries (HAZ_TO_CONTROL)

The full mapping is in `SIL-CONTROL-REGISTRY.md` (Production equivalent column, notes R-1 to R-3).

**No production control entry is retired.**

**U-14 resolved — no policy conflict** (PO Decision 002 §4). Both production thresholds are confirmed company policy and retained:
- **C1** "100% tie-off at 6 feet or greater" ≡ C-000039 / P-000003 (registry note R-1)
- **C16** "85 dBA" ≡ C-000049 / P-000005 (registry note R-2). Only the boundary wording differs.
- **C3** cut-resistant gloves: related to P-000001 / P-000002 (`SIL-POLICY-REGISTRY.md`). Production doesn't state the A4 triggers.

---

## E. Production keyword relationships to retain

- Production T7 recognizes `bolt-up`, `spud wrench`, `drift pin` and `erection bolt`; T3 recognizes `bolt installation`. These stay recognition terms mapped to Bolt (0013).
- Production `tig` (T1) must use whole-term matching in Track B. It currently matches inside "tight" (R-11).

## F. Hot work control reconciliation (PO Decision 003, for Package 002)

Production C2 lines are matched to company policy controls C-000114 to C-000117 (registry note R-4).

The 30-minute and 30–60-minute fire watch references are reconciled into:
- **C-000115**: at least 30 minutes after hot work;
- **C-000117**: conditional extended monitoring, where a project, permit or standard requires it.

Production is unchanged. The T1 hazard crosswalk will be done in Package 002.

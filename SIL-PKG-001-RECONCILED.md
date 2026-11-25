> **Repository Record (AD-008 §6):** Reconciled **candidate** package, revision r2. Not approved. Citations not marked as checked, company policy, and structural or flange specifications are **not** treated as validated. No application implementation or production release is authorized.

# Safety Intelligence Library — Package 001 (Reconciled Candidate r2)
## Bolt (0013) · Torque (0014) · Hydraulic Bolt Tensioning (work method under Bolt)

**Status:** Candidate. Pending Architect technical validation and Product Owner approval.
**Reconciled by:** Claude (Engineer), November 25, 2026.
**Original records are preserved unchanged** in the source files below. Reconciled r1 is preserved at commit `0195ed9`.

### Source documents and revision history

| Order | Document | Repository file | Commit |
|---|---|---|---|
| 1 | Package 001 (original 31 records) | `SIL-PKG-001.md` | `8910536` |
| 2 | Addendum 01 — Cumulative recognition | `SIL-PKG-001-ADDENDUM-01.md` | `f92afa6` |
| 3 | Engineer Independent Review | `SIL-PKG-001-ENGINEER-REVIEW.md` | `8910536` |
| 4 | Architect Response 001 | `SIL-PKG-001-ARCHITECT-RESPONSE-001.md` | `0195ed9` |
| 5 | Addendum 02 — Hydraulic bolt tensioning | `SIL-PKG-001-ADDENDUM-02.md` | `0195ed9` |
| 6 | Reconciled candidate r1 + crosswalk r1 | this file, `SIL-PKG-001-PRODUCTION-CROSSWALK.md` | `0195ed9` |
| 7 | Architect Response 002 | `SIL-PKG-001-ARCHITECT-RESPONSE-002.md` | this commit |
| 8 | PO Decision Record 001 | `SIL-PKG-001-PO-DECISION-001.md` | this commit |
| 9 | Reconciled candidate r2, crosswalk r2, control registry | this file, crosswalk, `SIL-CONTROL-REGISTRY.md` | this commit |

**Reference labels:**

| Label | Meaning |
|---|---|
| OSHA-C | 29 CFR 1926 (construction) |
| OSHA-GI | 29 CFR 1910 (general industry) |
| MSHA | 30 CFR |
| Spec | RCSC / AISC / ASME |
| Mfr | Manufacturer |
| BP | Best practice |
| Policy | Company or client |

**Status of each citation:**
- "Architect-checked" = verified by the Architect in Response 002 §4.
- "verified, Engineer" = I checked it against the primary or official source in this revision (§8).
- Everything else is **unverified**.

Citations are internal only and never shown to users.

### r2 change summary
- Canonical control IDs C-000001 to C-000104 assigned. Every control below cites its ID; full registry in `SIL-CONTROL-REGISTRY.md`.
- Response 002 §5 corrections applied to: H-BT-007, H-BT-019, H-BT-023, H-BT-025, H-BT-032, H-BT-033, H-BT-034, H-BT-035.
- H-BT-015 diagonal-bracing citation corrected. My r1 mapping of 1926.756(a)(2) was wrong.
- Four crosswalk generalizations applied: H-BT-002, H-BT-010, H-BT-012, H-BT-026.
- Four r1 supersessions withdrawn as narrower than production (Crosswalk §B2).
- PO Decisions 1–4 applied: H-BT-017 has no numeric threshold and tie-off in boom **and** scissor lifts; H-BT-002 has no cut level.
- Cumulative applicability corrected to clause-level scoping (§2 rule 4). A flange reference establishes context; it does not assert line breaking (§2 rule 6).
- Jurisdiction model added (§4).
- New Engineer findings in §8.

---

## 1. Activity and work-means recognition

**Two separate relationships** (Architect Response 001):
- **Recognition confidence** = how reliably a word maps to a concept. Tiers: High / Context-dependent.
- **Hazard applicability** = how a recognized concept and its context relate to a hazard. Classes: Explicit / Inferred / Conditional / Not applicable.

The two must not share labels or storage.

**Matching rule:** whole-term matching with legitimate inflections (bolt / bolts / bolted / bolting). Matching fragments inside other words is not permitted (production `tig` / "tight" defect).

### 1.1 Bolt (0013)
**Definition (original):** Work involving installation or assembly of bolted connections.

| Tier | Terms |
|---|---|
| High | bolting, bolt-up, bolt up, bolting up, bolt out, install bolts, insert bolts, bolted connection, field bolting, bolt installation, install connection bolts, erection bolt(s), make up the connection, run bolts, snug tight, snug-tight, snug up, pretension, pre-tension, pretensioned |
| Context-dependent (needs a fastener or steel cue) | fasten, connect, secure, assemble, splice, fit up, fit-up |
| Removed as standalone | anchor (fall protection / drilled-anchor collision). "Anchor bolt(s)" and "anchor rod(s)" are kept as Objects. |

**Objects:** structural beams, columns, connection plates, gusset plates, splice plates, base plates, flanges, structural bolts, nuts, washers, anchor bolts / anchor rods, tension-control bolts.

**Bolt and fastener aliases (Objects):**

| Group | Terms |
|---|---|
| TC bolts | TC bolt, tension control bolt, twist-off bolt, F1852, F2280 |
| Grades | A325, A490, F3125, high-strength bolt(s) |
| Joint type | slip-critical |

**Recognition notes:**
- "TC" alone needs a bolt cue, because it collides with *thermocouple*.
- "Pretension" must **not** establish controlled torque application (Response 001), and must **not** establish hydraulic tensioning (§5.2).

### 1.2 Torque (0014)
**Definition (original):** Work involving controlled application of rotational force to a fastener.

| Tier | Terms |
|---|---|
| High | torque bolts, torquing, torque wrench, torque tightening, torque nuts, re-torque, check bolt torque, torque check, calibrated wrench |
| Context-dependent (needs a fastener cue) | tighten, final tightening, run down |

Turn-of-nut (turn of nut, match mark) is recognized as a **pretensioning method** under Bolt, not as controlled torque. Snug-tight, turn-of-nut, pretensioning, TC installation and controlled torque keep distinct meanings (Response 001).

### 1.3 Work methods and work means (cumulative — any combination may be present)

**Hydraulic bolt tensioning** is a **work method under Bolt (0013)**; the hydraulic tensioner is a **work means**. No separate Tension activity (Response 002 §3).

| Work means | Terms (all aliases accepted, PO Decision 3; brand names are recognition-only and never mandate a brand) |
|---|---|
| Manual wrench | spud wrench, box wrench, open-end wrench, socket wrench, hand wrench, sleever bar |
| Striking / alignment | drift pin, bull pin, sledge, hammer |
| Impact wrench | impact wrench, impact gun, rattle gun, impact (only with a fastener cue) |
| Electric / battery torque tool | electric torque wrench, battery torque wrench, cordless torque wrench, torque gun |
| Pneumatic torque tool | pneumatic torque wrench, air torque wrench, air impact |
| Hydraulic torque wrench | hydraulic torque wrench, hydraulic wrench, square drive, low profile wrench, cassette; brand: HyTorc |
| Torque multiplier (manual or powered) | torque multiplier, gear multiplier, reaction arm, reaction bar, reaction foot |
| TC installation | shear wrench, TC gun, spline |
| Pretension verification | DTI, direct tension indicator, load indicating washer, squirter, Skidmore |
| **Hydraulic bolt tensioner** (Addendum 02) | hydraulic bolt tensioner, hydraulic bolt tensioning, hydraulic stud tensioner, stud tensioning, hydraulic stud tensioning, axial bolt tensioning, hydraulic tensioning pump, bolt stretching, stud stretching, multi-stud tensioning, simultaneous bolt tensioning, detension, de-tension, detensioning; brands: Hydratight, Tentec, ITH, Enerpac |
| Context-dependent for tensioning | tensioning, stretching, tensioner, pump, puller, bridge |

**Collisions that must not resolve to bolt tensioning:**
- belt tensioning, take-up (conveyors)
- post-tension, PT tendon, stressing (concrete)
- guy, cable or wire rope tensioning (rigging)
- pretension and TC bolts (structural)
- "pump" as an object (pump flange, pump maintenance — production T32)

---

## 2. Applicability rules (Addendum 01; Responses 001–002)

1. **Cumulative.** Every recognized activity, work method, work means, object, condition and context contributes its records. Recognizing one never suppresses another.

2. **Ranking** (AD-008 §4 supersedes CRF §7):
   - first by applicability class (Explicit → Inferred → Conditional);
   - then by consequence *within* each class;
   - then by relevance.

   Consequence never lifts an unrelated record across classes.

3. **Inferred applicability** covers reasonably foreseeable hazards the crew did not describe.

4. **Clause-level scoping** (Response 002 §6). Relationships are recognized within the relevant portion of the task description, normally the clause containing the activity and object.
   - An existing-connection cue (check, re-torque, inspect, verify, existing, retighten) blocks **[FIT-UP]** inference only for the activity and object in the same clause. It never suppresses fit-up hazards established by another clause.
   - **[FIT-UP]** records need initial-erection, fit-up or temporary-connection cues (hang, set, connect, fit up, align, drift, make up, erect, pick, on the hook), or Bolt + a structural member with no existing-connection cue in that clause.
   - Suspended-load and temporary-erection hazards are never inferred from an existing structural connection being mentioned alone.

5. **Relationship-level applicability.** Applicability belongs to each hazard relationship and each control relationship, not to the record globally:
   - A canonical hazard keeps a production relationship (for example, H-BT-012 ← T7) with that relationship's own applicability.
   - A canonical control can carry an additional condition per hazard relationship (Response 002 §1).
   - Conditions come from recognized concepts, not exact keyword matches.

6. **Flange context** (Response 002 §6):
   - A flange reference establishes context for *evaluating* line break, hazardous energy, residual pressure and chemical exposure.
   - These cross-referenced records are **Explicit** only with an opening or breaking cue (break, open, line break, remove blind, replace gasket, disassemble, pull spool).
   - Otherwise they are **Conditional** (ranked lower, reachable through Show More). They are never asserted for a flange inspection or torque check.

7. **Jurisdiction** (Response 002 §7):
   - Regulatory jurisdiction is set internally from the operation and work context: OSHA-C, OSHA-GI or MSHA (§4).
   - OSHA construction citations are not applied universally to mining or industrial maintenance.
   - User-facing text carries no citations.

8. **Thresholds** (PO Decision 1). No universal numeric fall protection threshold and no universal steel-erection exception in user-facing text. Controls refer to project requirements. Federal exceptions that are less protective than verified Adena or project requirements are never introduced.

9. **Emergency response** (Response 002 §8). Include an immediate response action only where it materially reduces injury severity for that specific hazard:
   - H-BT-017: rescue (C-000044)
   - H-BT-023: injection (C-000062)
   - H-BT-024: eye flush (C-000066, proposed)

   Generic emergency instructions are not repeated across records.

10. **No padding.** Show 15–20 suggestions when there's enough applicable content; Show More beyond that; never fill to a count.

---

## 3. Reconciled hazard records

Each control shows its canonical ID. `[condition]` marks a relationship-specific control condition.

**H-BT-001 — Pinch points during bolt installation**
- Applicability: Explicit for Bolt · [FIT-UP]
- Hazard: Pinch points while fitting and bolting connections.
- Controls:
  - `C-000002` Never use fingers to check or align holes — use a drift pin or spud wrench.
  - `C-000003` Keep hands off mating surfaces while plies are drawn together.
- Refs: BP
- Δ: r1: wording, fit-up constraint. r2: none.

**H-BT-002 — Cuts from sharp metal surfaces, pipe ends and flanges**
- Applicability: Explicit for Bolt/Torque; relationship inherited from T7, T31
- Hazard: Cuts from sharp metal surfaces, burrs, pipe ends and flanges.
- Controls:
  - `C-000004` Wear the hand protection required for the task and project.
  - `C-000005` Remove burrs only where the connection or flange requirements allow it — never on gasket seating faces.
  - `C-000006` Keep hands off unprotected plate, pipe and hole edges.
- Refs: OSHA-C 1926.95, 1926.28 (unverified); Spec (faying-surface and flange-face limits, unverified); Policy (hand protection)
- Δ: r2: generalized (Response 002 §2); no cut level (PO Decision 4).

**H-BT-003 — Wrench or socket slippage**
- Applicability: Explicit for Bolt/Torque
- Hazard: Wrench or socket slipping off the fastener, striking hands against steel.
- Controls:
  - `C-000007` Use the correct size wrench or socket, fully seated on the nut.
  - `C-000008` Do not use wrenches with sprung or worn jaws.
  - `C-000009` Pull rather than push where possible, with knuckles clear of steel.
  - `C-000010` Do not extend a wrench with pipe unless it is designed for it.
- Refs: OSHA-C 1926.301(b) (unverified); BP
- Δ: Absorbs H-BT-005.

**H-BT-004 — Sudden tool movement from torque reaction**
- Applicability: Conditional: handheld powered wrench without reaction arm
- Hazard: Powered tool twisting or kicking against the operator.
- Controls:
  - `C-000011` Brace for the tool's reaction before starting; use the side handle where provided.
  - `C-000012` Set direction and torque or speed before starting.
  - `C-000013` Expect the tool to twist when the nut seats or stalls.
- Refs: Mfr; BP
- Δ: r1: reclassified conditional. r2: T3 supersession withdrawn pending generalization (Crosswalk §B2).

**H-BT-005 — RETIRED**
- Applicability: —
- Hazard: Consolidated into H-BT-003 (Response 001, Decision 5). Identifier never reused.
- Refs: —
- Δ: Retired.

**H-BT-006 — Tool or component failure under load**
- Applicability: Explicit for Bolt/Torque; tensioner relationship
- Hazard: Wrench, socket, extension, multiplier or tensioner component failing under load.
- Controls:
  - `C-000014` Inspect wrenches, sockets, extensions and multipliers before use; tag and remove damaged tools.
  - `C-000015` Use only extensions and multipliers rated for the force applied.
  - `C-000016` `[if tensioner]` Inspect puller threads, pistons, seals and bridges before use; remove damaged components.
  - `C-000010` Do not extend a wrench with pipe unless it is designed for it.
- Refs: OSHA-C 1926.300(a), 1926.301(a) (unverified); Mfr

**H-BT-007 — Strain from applying force or handling heavy tools**
- Applicability: Explicit for Bolt/Torque
- Hazard: Strain from applying force or from handling heavy torque or tensioning equipment.
- Controls:
  - `C-000017` Choose a longer wrench, a multiplier or a powered tool based on the force needed and the access available — do not overpower a manual wrench.
  - `C-000018` Set up to apply force at waist-to-chest height, not overhead or twisted.
  - `C-000019` `[if hydraulic wrench, tensioner, large impact or pump]` Move heavy tool heads, tensioners and pumps with a handling method rated for their weight, configuration and access — do not climb carrying them.
- Refs: BP
- Δ: r2: rated handling method replaces universal two-person/hand-line (Response 002 §5).

**H-BT-008 — Repetitive hand and wrist strain**
- Applicability: Explicit for Bolt/Torque (ranks lower in core)
- Hazard: Repetitive hand and wrist strain.
- Controls:
  - `C-000020` Rotate tasks or workers on long bolting or impact runs to limit exposure.
  - `C-000021` Keep wrists straight and use tools sized to the work.
- Refs: BP

**H-BT-009 — Loss of balance during tightening**
- Applicability: Explicit for Bolt/Torque; with elevation cue always accompanied by H-BT-017
- Hazard: Loss of balance when a fastener breaks free or a tool slips.
- Controls:
  - `C-000022` Set your feet and brace before applying force — expect the nut to break free.
  - `C-000023` `[if aerial or scissor lift]` Stand on the platform floor; never climb or stand on rails to reach the work.
  - `C-000024` `[if ladder]` Do not apply heavy wrench force from a ladder — reposition or use a lift.
- Refs: OSHA-C 1926.453(b)(2)(iv) (verified, Engineer); 1926.1053(b)(22) (unverified); BP

**H-BT-010 — Caught in a rotating tool, bit, socket or extension**
- Applicability: Conditional: powered rotating tool; relationship inherited from T3
- Hazard: Fingers, gloves, clothing or lanyards caught in a rotating tool, bit, socket or extension.
- Controls:
  - `C-000025` Never hold the socket, extension or chuck while the tool runs.
  - `C-000026` Secure loose sleeves; keep lanyards and tool tethers clear of rotating parts.
- Refs: Mfr; BP
- Δ: r2: generalized (Response 002 §2); supersedes T3 "Rotating equipment entanglement".

**H-BT-011 — Bolt snapping or seized nut breaking loose**
- Applicability: Explicit for Torque; Explicit for Bolt when tightening
- Hazard: Bolt snapping, or a seized nut breaking loose suddenly under applied force.
- Controls:
  - `C-000027` Do not exceed the specified tightening.
  - `C-000028` Replace and reuse fasteners only as the project requirements specify — remove bolts that have stretched, galled or been over-tightened.
  - `C-000022` Set your feet and brace before applying force — expect the nut to break free.
- Refs: Spec — RCSC 2020 §2.11 reuse provisions (Architect-checked); BP
- Δ: r2: reuse wording made project-specific (Response 002 §4).

**H-BT-012 — Caught-between and crushing from shifting steel**
- Applicability: [FIT-UP]; Inferred from Bolt + structural member; relationship inherited from T7 (own applicability)
- Hazard: Caught between or crushed by shifting steel members.
- Controls:
  - `C-000029` Keep hands and body out from between members until the connection is made.
  - `C-000030` Pull pins and loosen bolts only with the member supported — misaligned steel can spring when released.
- Refs: OSHA-C 1926.754(a) (unverified); BP
- Δ: r2: generalized (Response 002 §2); supersedes T7 "Crushing from shifting steel" and "Caught-between from steel components".

**H-BT-013 — Structural instability or collapse**
- Applicability: [FIT-UP]; Inferred from Bolt + structural member
- Hazard: Structural instability or collapse of partially connected steel.
- Controls:
  - `C-000031` Leave temporary bolts, bracing and guying in place until removal is authorized under the erection sequence and stability requirements.
  - `C-000032` Follow the erection plan sequence.
- Refs: OSHA-C 1926.754(a), 1926.752(e) (unverified)

**H-BT-014 — Struck-by or caught-between suspended steel**
- Applicability: [FIT-UP]; Conditional (hang, set, pick, crane, on the hook)
- Hazard: Struck by or caught between suspended structural steel. (Distinct from falling structural materials — production T7 "Struck-by from overhead steel" retained.)
- Controls:
  - `C-000033` Stay out from under the suspended load.
  - `C-000034` Only the connectors make the initial connection.
  - `C-000035` Use tag lines; keep hands off the load except at the connection point.
  - `C-000036` Keep direct communication with the signal person.
- Refs: OSHA-C 1926.753(d), 1926.760(b) (unverified)

**H-BT-015 — Member movement or collapse on releasing hoisting equipment**
- Applicability: [FIT-UP]; Conditional
- Hazard: Structural member moving or collapsing when the hoisting line is released.
- Controls:
  - `C-000037` Do not release the load until the connection required for that member is made and stability is verified.
  - `C-000032` Follow the erection plan sequence.
- Refs: OSHA-C 1926.756(a)(1) solid-web members (Architect-checked); 1926.756(a)(2) cantilevered members (Architect-checked); 1926.756(b) diagonal bracing (Architect-checked); 1926.757 joists, 1926.755 columns/anchor rods (unverified)
- Δ: r2: diagonal bracing corrected to 1926.756(b); (a)(2) = cantilevered members (Response 002 §4). Engineer r1 mapping was wrong.

**H-BT-016 — Collapse from removing bolts at a shared (double) connection**
- Applicability: [FIT-UP]; Conditional (double connection, shared holes, both sides of column, beam over column)
- Hazard: First member falling when shared bolts are removed to make a double connection.
- Controls:
  - `C-000038` At a shared connection, keep at least one bolt with its nut tight in the first member — unless a seat or approved support device holds it.
- Refs: OSHA-C 1926.756(c)(1) — verified by Engineer; per OSHA interpretation of 05/09/2006, (c) does not apply to double connections at a beam away from a column. The hazard remains, so the record applies to all shared-bolt connections; the citation applies only at columns.
- Δ: r2: interpretation added.

**H-BT-017 — Fall from elevated work position**
- Applicability: Conditional on elevation cue
- Hazard: Fall from an elevated work position.
- Controls:
  - `C-000039` Use the fall protection required by company, project and equipment-manufacturer requirements for the access being used — do not start until it is in place.
  - `C-000040` `[if boom or scissor lift]` In boom and scissor lifts, wear compatible personal fall protection attached to the manufacturer-approved anchorage point.
  - `C-000041` `[if boom or scissor lift]` Never tie off to the steel or an adjacent structure from a lift.
  - `C-000042` `[if on structure]` Tie off to an approved anchorage rated for fall arrest before working on steel.
  - `C-000043` Inspect harness, lanyard or SRL and connectors before use.
  - `C-000044` Have a rescue plan ready before work at height — a worker suspended in a harness must be reached promptly.
- Refs: Policy (PO Decision 1 — project-specific thresholds; PO Decision 2 — tie-off in boom and scissor lifts); OSHA-C 1926.453(b)(2)(iii), (v) (verified, Engineer); 1926.760(a) (Response 001); OSHA-GI 1910.67(c)(2)(v) (verified, Engineer). Per OSHA interpretation, scissor lifts are not covered by the 1926.453 aerial lift provisions — scissor tie-off rests on Policy.
- Δ: r2: PO Decisions 1–2; no numeric threshold; no-tie-to-structure and rescue controls added.

**H-BT-018 — Dropped bolts, sockets, tools and components**
- Applicability: Conditional on elevation cue; relationship inherited from T25 (Falling tools) and T7
- Hazard: Dropped bolts, sockets, tools and tensioning components striking people below.
- Controls:
  - `C-000045` Keep bolts, nuts and washers in a secured bolt bag or bucket — never loose on flanges or beams.
  - `C-000046` Use rated tool tethers where required.
  - `C-000047` Barricade or control the area below; no one works below without protection.
  - `C-000048` `[if tensioner]` Support tensioners so they cannot fall when pullers are unthreaded.
- Refs: OSHA-C 1926.759(a), (b) (Architect-checked; steel erection scope)
- Δ: r2: T7 "Dropped objects" and T25 "Dropped objects striking workers below" supersession withdrawn pending generalization (Crosswalk §B2).

**H-BT-019 — Noise exposure**
- Applicability: Conditional: noise-producing equipment OR nearby noisy operations (either suffices)
- Hazard: Noise exposure.
- Controls:
  - `C-000049` Wear hearing protection around noise-producing equipment and operations, including when working near others' noisy work.
- Refs: OSHA-C 1926.52, 1926.101; OSHA-GI 1910.95; MSHA 30 CFR Part 62 (all unverified)
- Δ: r2: OR applicability (Response 002 §5).

**H-BT-020 — Hand-arm vibration**
- Applicability: Conditional: impact or pneumatic tools
- Hazard: Hand-arm vibration.
- Controls:
  - `C-000020` Rotate tasks or workers on long bolting or impact runs to limit exposure.
  - `C-000050` Keep tools maintained to reduce vibration.
  - `C-000051` Do not rely on anti-vibration gloves alone.
- Refs: BP (ISO 5349 / ANSI S2.70, unverified); no OSHA standard

**H-BT-021 — Socket or attachment ejection**
- Applicability: Conditional: powered wrench
- Hazard: Socket or attachment coming off or shattering.
- Controls:
  - `C-000052` Use sockets rated for the tool — impact-rated sockets on impact tools.
  - `C-000053` Use the manufacturer-approved socket or attachment retention.
  - `C-000054` Wear safety glasses.
- Refs: Mfr; BP. 1926.302(b)(2) not relied on.
- Δ: r2: tool-rated sockets, manufacturer retention.

**H-BT-022 — Crushing at the reaction point**
- Applicability: Conditional: any reaction-arm equipment, including manual torque multipliers
- Hazard: Hand or body crushed at the torque reaction point.
- Controls:
  - `C-000056` Set the reaction arm against a solid surface and confirm the reaction direction before applying force.
  - `C-000057` Keep hands, hoses and body clear of the reaction arm and reaction point.
  - `C-000001` `[if pump operated by another person]` The pump operator pressurizes only on a clear signal from the person at the tool.
- Refs: Mfr; BP

**H-BT-023 — High-pressure fluid injection**
- Applicability: Conditional: hydraulic wrench or tensioner; relationship inherited from T23
- Hazard: High-pressure hydraulic fluid injection.
- Controls:
  - `C-000058` Inspect hydraulic hoses and fittings before use.
  - `C-000059` Never use hands to locate leaks.
  - `C-000060` Verify hydraulic pressure is released and address any trapped pressure or stored mechanical energy before disconnecting or removing equipment.
  - `C-000061` Do not kink, step on or drive over hoses.
  - `C-000062` Get immediate medical attention for any suspected injection injury, even if it looks minor.
- Refs: OSHA-C 1926.302(d)(2) (Architect-checked); BP
- Δ: r2: depressurization control covers trapped pressure and stored mechanical energy (Response 002 §5).

**H-BT-024 — Hydraulic hose or fitting failure**
- Applicability: Conditional: hydraulic wrench or tensioner
- Hazard: Hydraulic hose or fitting failure — fluid spray to eyes and face, slippery surfaces.
- Controls:
  - `C-000063` Use hoses and couplers rated for the system's maximum pressure, with couplers fully engaged.
  - `C-000064` `[if tensioner]` Do not use torque-wrench hoses or couplers on a tensioner system unless they are rated for tensioner pressure.
  - `C-000065` Clean up spilled fluid before continuing.
  - `C-000066` If hydraulic fluid gets in the eyes, flush immediately and get medical evaluation.
  - `C-000060` Verify hydraulic pressure is released and address any trapped pressure or stored mechanical energy before disconnecting or removing equipment.
- Refs: OSHA-C 1926.302(d)(2) (Architect-checked); Mfr
- Δ: r2: eye-flush response proposed (Response 002 §8).

**H-BT-025 — Compressed-air hose whip**
- Applicability: Conditional: pneumatic tool or air-driven pump
- Hazard: Air hose whipping when a coupling or tool connection separates.
- Controls:
  - `C-000067` Use air tools with a positive connection to the hose that cannot come apart accidentally.
  - `C-000068` Install hose restraints (whip checks) at couplings.
  - `C-000069` Use excess-flow valves on supply lines where required — hose restraints and excess-flow valves do not replace each other.
  - `C-000070` Shut off and bleed the air before disconnecting.
- Refs: OSHA-C 1926.302(b)(1), (b)(7) (Architect-checked); MSHA 56.13021 (verified, Engineer — different scope: hoses of 3/4 in. ID and larger at 100 psi or more; automatic shutoff valves are an alternative)
- Δ: r2: positive connection added separately (Response 002 §5); T23 supersession withdrawn pending generalization (Crosswalk §B2).

**H-BT-026 — Electrical shock from powered tools and equipment**
- Applicability: Conditional: corded tools or electrically powered equipment (incl. pumps); relationship inherited from T3
- Hazard: Electrical shock from powered tools and equipment.
- Controls:
  - `C-000071` Inspect cords and plugs before use.
  - `C-000072` Use the GFCI or other electrical protection required for the equipment and conditions.
  - `C-000073` Keep cords out of water and away from pinch points.
- Refs: OSHA-C 1926.404(b)(1) (unverified); general-industry equivalent to be identified
- Δ: r2: generalized (Response 002 §2).

**H-BT-027 — Trips from hoses and cords**
- Applicability: Conditional: corded, pneumatic or hydraulic equipment; relationships inherited from T2, T15
- Hazard: Trips from hoses and cords.
- Controls:
  - `C-000074` Route hoses and cords out of walkways.
  - `C-000075` `[if aerial or scissor lift]` On lifts, secure hoses and cords so they cannot snag on steel as the lift moves, with enough slack for travel and without creating entanglement points.
- Refs: BP

**H-BT-028 — Falling or ejected bolt splines**
- Applicability: Conditional: TC installation
- Hazard: Falling or ejected TC bolt splines.
- Controls:
  - `C-000076` Collect splines using the wrench's ejector into a bag or bucket.
  - `C-000047` `[if elevated]` Barricade or control the area below; no one works below without protection.
- Refs: Mfr

**H-BT-029 — Flying fragments or ejected drift pin**
- Applicability: Conditional: striking or drift pins
- Hazard: Flying fragments, or a drift pin ejected when struck.
- Controls:
  - `C-000077` Remove mushroomed or damaged striking tools and pins from service.
  - `C-000054` Wear safety glasses.
  - `C-000055` Add goggles or a face shield where debris or fragments can reach the face.
  - `C-000078` Keep your partner and others clear of the far side when driving pins.
- Refs: OSHA-C 1926.301(c), 1926.102 (unverified)
- Δ: r2: face protection by exposure, not duration.

**H-BT-030 — Hand injury from missed strikes**
- Applicability: Conditional: striking or drift pins
- Hazard: Hand struck by a missed hammer blow.
- Controls:
  - `C-000079` Keep hands out of the strike zone; use a pin holder or long-handled tool to hold pins.
- Refs: BP

**H-BT-031 — Structural connection failure from incorrect installation**
- Applicability: Inferred from structural bolting, pretensioning or torquing
- Hazard: Structural connection failure from incorrect bolt installation or tightening.
- Controls:
  - `C-000080` Use the bolt grade, length and washers called for on the drawings.
  - `C-000081` Tighten in pattern from the stiffest part of the joint outward.
  - `C-000082` `[if turn-of-nut]` Turn-of-nut: snug tight first, match mark, then turn the specified rotation.
  - `C-000083` `[if calibrated wrench]` Calibrated wrench: verify calibration daily with the bolts being installed.
  - `C-000084` `[if TC bolts]` TC bolts: the spline must be sheared off — a bolt with the spline intact is not tensioned.
  - `C-000085` `[if DTI]` DTI: verify gaps or indicator per manufacturer.
  - `C-000086` `[if pretensioned joint]` Complete pre-installation verification before production bolting of pretensioned joints.
  - `C-000028` Replace and reuse fasteners only as the project requirements specify — remove bolts that have stretched, galled or been over-tightened.
  - `C-000087` Keep bolts clean, dry and lubricated as delivered.
  - `C-000027` Do not exceed the specified tightening.
- Refs: Spec — RCSC 2020 (§2.11 Architect-checked; other provisions unverified); AISC 303/360 (unverified)
- Δ: r2: reuse control made project-specific.

**H-BT-032 — Debris falling into eyes during overhead bolting**
- Applicability: Conditional: overhead work cue, or inferred from lift beneath steel
- Hazard: Scale, rust or debris falling into the eyes during overhead bolting.
- Controls:
  - `C-000054` Wear safety glasses.
  - `C-000055` Add goggles or a face shield where debris or fragments can reach the face.
  - `C-000088` Position yourself so you are not looking straight up into the work.
- Refs: OSHA-C 1926.102 (unverified); BP
- Δ: r2: protection selected by actual debris exposure (Response 002 §5).

**H-BT-033 — Stud or tensioner component ejected under hydraulic pressure**
- Applicability: Conditional: hydraulic bolt tensioner
- Hazard: Stud, puller or tensioner component ejected under hydraulic pressure.
- Controls:
  - `C-000089` Verify the required puller thread engagement on the stud before pressurizing.
  - `C-000090` Confirm the tensioner and puller match the stud size and thread.
  - `C-000091` Seat the bridge square and flat on the flange face.
  - `C-000092` Keep everyone clear of the axial line of force of each tensioner or loaded stud, whatever its orientation.
  - `C-000093` Do not exceed the tool's rated pressure or piston stroke.
  - `C-000094` If a nut will not turn, stop — do not raise pressure beyond the procedure.
  - `C-000016` Inspect puller threads, pistons, seals and bridges before use; remove damaged components.
- Refs: Mfr; Spec (ASME PCC-1, unverified)
- Δ: r2: axial line regardless of orientation (Response 002 §5).

**H-BT-034 — Sudden release of stud tension during detensioning or loosening**
- Applicability: Conditional: detensioning or removal of tensioned studs
- Hazard: Sudden release of stud preload during detensioning, or when a tensioned nut is loosened by other means.
- Controls:
  - `C-000095` Loosen tensioned studs only with the tensioner and the specified detensioning procedure.
  - `C-000096` Never cut, hammer or impact a tensioned nut or stud loose.
  - `C-000092` Keep everyone clear of the axial line of force of each tensioner or loaded stud, whatever its orientation.
  - `C-000060` Verify hydraulic pressure is released and address any trapped pressure or stored mechanical energy before disconnecting or removing equipment.
- Refs: Mfr
- Δ: r2: depressurization/stored-energy control linked (Response 002 §5).

**H-BT-035 — Pinch and crush points at tensioners**
- Applicability: Conditional: hydraulic bolt tensioner
- Hazard: Fingers pinched or crushed at tensioners during positioning, pressurizing and nut turning.
- Controls:
  - `C-000097` Turn nuts by the manufacturer-designated method; keep fingers out of nut-turning openings and the gap between tool and flange.
  - `C-000098` Keep hands clear of pistons and pullers while pressurized.
  - `C-000001` The pump operator pressurizes only on a clear signal from the person at the tool.
  - `C-000099` Disconnect or lock the pump control while positioning or adjusting tools.
- Refs: Mfr; BP
- Δ: r2: manufacturer-designated nut-turning method (Response 002 §5).

**H-BT-036 — Pressure-boundary bolted joint failure or leak**
- Applicability: Inferred from Bolt, Torque or tensioning on a flange, vessel or piping joint
- Hazard: Bolted pressure-boundary joint leaking or failing from incorrect bolt load.
- Controls:
  - `C-000100` Follow the specified tightening or tensioning sequence, number of passes and pressure or torque.
  - `C-000101` Use the specified studs, nuts and gasket; do not reuse a gasket.
  - `C-000102` `[if tensioner]` Run nuts down fully before releasing tensioner pressure.
  - `C-000103` Use calibrated gauges and correctly rated equipment.
  - `C-000104` Complete the required joint verification and records before return to service.
- Refs: Spec (ASME PCC-1, unverified); OSHA-C 1926.64 / OSHA-GI 1910.119(j) where PSM applies (unverified); Policy / client


---

## 4. Jurisdiction model (Response 002 §7)

Jurisdiction is an internal attribute set from the operation and work context, never from the user-facing text:
- construction project → OSHA-C;
- plant maintenance at a general-industry facility → OSHA-GI;
- work on mine property (e.g. phosphate) → MSHA.

Each reference is stored with its jurisdiction. Where an equivalent provision hasn't been identified, the record carries the gap rather than borrowing another jurisdiction's citation.

| Topic | OSHA-C | OSHA-GI | MSHA | Status |
|---|---|---|---|---|
| Aerial lift fall protection | 1926.453(b)(2)(iii)–(v) | 1910.67(c)(2)(v) | 56.15005 | C and GI verified (Engineer); MSHA unverified |
| Pneumatic hose connections | 1926.302(b)(1), (b)(7) | To be identified | 56.13021 | C Architect-checked; MSHA verified (Engineer) |
| Hydraulic component pressure limits | 1926.302(d)(2) | To be identified | To be identified | C Architect-checked |
| Hand tool condition | 1926.301 | 1910.242(a) | To be identified | Unverified |
| Noise | 1926.52, 1926.101 | 1910.95 | Part 62 | Unverified |
| Electrical protection for tools | 1926.404(b)(1) | To be identified | To be identified | Unverified |
| Steel erection (connections, falling objects) | 1926.754–.760 | n/a | n/a | Partly Architect-checked |
| Hazardous energy (flange cross-reference) | Cross-reference | 1910.147 | 56.14105 | Unverified |
| PSM mechanical integrity (H-BT-036) | 1926.64 | 1910.119(j) | n/a | Unverified |

**Note on MSHA 56.13021.** It has a different scope from OSHA 1926.302(b)(7):
- hoses of 3/4 in. inside diameter or larger, at 100 psi or more;
- safety chains or locking devices required;
- automatic shutoff valves are an alternative.

In line with rule 8, these thresholds stay internal.

---

## 5. Engineer review of Addendum 02 — hydraulic bolt tensioning

### 5.1 Classification
Hydraulic tensioning applies axial stretch, not rotation (Addendum 02 is correct). **Resolved (Response 002 §3):** work method under Bolt (0013); the tensioner is a work means; no Tension activity. Air-driven pump relationships accepted. No universal pressures, stroke limits or thread-engagement measurements are encoded.

### 5.2 Recognition
- The Addendum 02 terms are accepted; detension variants and brand aliases are added (§1.3).
- **Critical collision:** "pretension" and "tension-control bolt" contain *tension*. These must not recognize hydraulic tensioning. Regression tests R-19 and R-20 added.
- "Pump" is the most collision-prone term: pump flange, pump maintenance (T32), hydraulic torque wrench pump. It must only contribute to tensioning when a tensioning cue is present. Addendum scenario 1 tests this correctly.

### 5.3 Record findings

| Record | Finding | Resolution in §3 |
|---|---|---|
| H-BT-033 | Sound. Missing: puller-to-stud size and thread match (metric vs. inch, thread series), the bridge not seating square on the flange face, damaged stud threads, and the field reaction of raising pressure when a nut won't turn. With multiple tools, the line of force is the whole flange, not one axis. | Controls added |
| H-BT-034 | As written, its controls (release pressure, verify depressurization) are hydraulic stored energy, which duplicates H-BT-023 / H-BT-024. The distinct mechanical hazard is release of **stud preload** during detensioning — or when a tensioned nut is cut, hammered or impacted loose without the tensioner. | Redefined. Gauge-zero check stays in H-BT-023. |
| H-BT-035 | "Keep hands clear of… nut-turning mechanisms" conflicts with the procedure: the nut is turned by hand through the bridge window **while pressurized**. The control must describe how to do that safely. Communication control duplicates H-BT-022. | Corrected; shared control C-000001. r2: nut-turning method is manufacturer-designated, not a universal tommy bar or bridge window (Response 002 §5). |
| H-BT-036 | Same hazard class as H-BT-031 (Decision 2: canonical records). Kept separate because the consequence differs and drives different controls: H-BT-031 = structural collapse; H-BT-036 = loss of containment of process fluid. Flange torquing has the same consequence, so H-BT-036 covers all methods on pressure-boundary joints rather than tensioning only. | Scope widened |

### 5.4 Relationships to existing records (Addendum 02 list, reviewed)

| Record | Relationship | Note |
|---|---|---|
| H-BT-006 | Yes | Tensioner-specific inspection control |
| H-BT-007 | Yes | Tensioners are heavy |
| H-BT-017 | Yes | — |
| H-BT-018 | Yes | Tensioner falling when the puller is unthreaded |
| H-BT-023 | Yes | — |
| H-BT-024 | Yes | Hose rating mismatch control added |
| H-BT-026 | Yes | Electric pumps |
| H-BT-027 | Yes | — |
| **Added: H-BT-025** | Yes | Air-driven tensioning pumps are common; Addendum 02 listed electric only |
| **Added: H-BT-019** | Yes | Air-driven pump noise |
| **Added: H-BT-002** | Yes | Flange and stud edges |
| **Added: production T31 "Pinch during flange assembly"** | Yes | Retained, related (Crosswalk §C) |
| Flange / process piping | Cross-reference | Line break, LOTO, residual pressure, chemical exposure (C19, C22) — no new records |

### 5.5 Manufacturer-specific limits
The library should **not** encode numeric pressures, stroke limits, thread-engagement lengths or load-transfer factors. They vary by tool model, stud size and joint design. Controls point to "the tool's rated pressure and stroke" and "the specified procedure."

Validation should confirm:
- the procedure sources the field crew will actually carry (manufacturer tool manual, joint-specific tensioning procedure, client procedures);
- whether tensioner operating pressures commonly exceed hydraulic torque wrench system ratings. This supports the H-BT-024 hose mismatch control. I believe this is generally true, but it's **unverified**.

### 5.6 Simultaneous tensioning
Multi-tool operation is covered by:
- H-BT-033 (full-flange exclusion);
- H-BT-035 / C-000001 (one signal controls pressurization);
- H-BT-036 (coverage sequence and passes).

No separate record is needed.

**No unnecessary duplication remains among H-BT-033 to H-BT-036 after these revisions.**

---

## 6. Cross-library references (resolve to actual records; never display reference text)

| Trigger | Resolves to |
|---|---|
| Aerial lift (T8) | Fall from platform; tip-over; **crushing at overhead obstructions (rank high with structural member)**; dropped objects; unexpected travel |
| Ladder (T9) | Fall from ladder; overreaching; unstable setup |
| Flange / process piping (T31; C19, C22) | Line break, LOTO, residual pressure, process-fluid / chemical exposure |

---

## 7. Regression scenarios (illustrative; not fixed output lists)

**Package 001 original**
- R-1 Install bolts in steel connections at ground level using hand wrenches
- R-2 Install connection bolts on a suspended structural beam while working from an aerial lift
- R-3 Torque structural connection bolts at ground level using a hydraulic torque wrench
- R-4 Install structural connection bolts using hand tools, impact wrenches and hydraulic torque wrenches while working from aerial lifts
- R-5 Torque structural bolts
- R-6 Install TC bolts with shear wrench
- R-7 Snug tight and turn of nut on beam connections

**Engineer additions (accepted, Decision 8)**
- R-8 Install fall protection anchor → no Bolt
- R-9 Splice conveyor belt → no Bolt
- R-10 Tighten ratchet straps on load → no Torque
- R-11 Work in tight space → no welding, no Torque
- R-12 Check torque on pump flange bolts → Torque + H-BT-036; no [FIT-UP] records; line-break/LOTO Conditional only (not asserted)
- R-13 Break flange and re-torque bolts on acid line → Torque + H-BT-036 + line break / LOTO; no structural records
- R-14 Bolt up beam connections from boom lift → overhead-crush cross-reference ranked high

**Addendum 02**
- R-15 Hydraulically tension studs on pump flange → tensioner records + H-BT-036; line-break/LOTO Conditional only
- R-16 Install hydraulic bolt tensioners and tension vessel flange studs
- R-17 Simultaneously tension multiple flange studs using hydraulic pump
- R-18 Remove hydraulic tensioners after completing stud tensioning → tool removal; H-BT-023 depressurization; not H-BT-034 unless detensioning is recognized
- R-18a Torque and hydraulically tension flange bolts during plant maintenance
- R-18b Tension conveyor belt → no bolt tensioning

**Engineer additions (this reconciliation; proposed)**
- R-19 Pretension TC bolts on beam splice → no hydraulic tensioning; no controlled-torque assumption
- R-20 Install tension control bolts → no hydraulic tensioning
- R-21 Stress post-tension tendons → no bolt tensioning
- R-22 Pump maintenance, replace coupling → no tensioning
- R-23 Detension studs and remove heat exchanger channel cover → H-BT-034 + tensioner records + flange cross-reference
- R-24 Re-torque anchor bolts on column base plates → Torque; no [FIT-UP]

**Architect Response 002**
- R-25 Check torque on existing column connections and install bolts on the next suspended beam → existing-connection torque hazards **and** initial-connection, suspended-load and structural-stability hazards, cumulatively (clause-level scoping, §2 rule 4)

---


---

## 8. New Engineer findings in r2

| # | Finding | Effect |
|---|---|---|
| F-1 | I checked **1926.756(c)(1)** against OSHA's interpretation of 05/09/2006: paragraph (c) does not apply to double connections at a beam away from a column. The hazard still exists there; the preamble describes the connector falling with collapsing double-connected members. | H-BT-016 applies to all shared-bolt double connections; the citation is limited to connections at columns. |
| F-2 | **1926.453(b)(2)(iii)** prohibits belting off to an adjacent pole, structure or equipment from an aerial lift. This is directly relevant to bolting steel from a lift. | New control C-000041 ("Never tie off to the steel or an adjacent structure from a lift"). |
| F-3 | OSHA has interpreted that **scissor lifts are not covered** by the 1926.453 aerial lift provisions. | The scissor lift tie-off requirement in H-BT-017 rests on PO Decision 2 (Policy), not 1926.453. Recorded internally so validation doesn't attribute it to the wrong source. |
| F-4 | **Production control conflicts with PO Decision 1.** Production C1 "Maintain 100% tie-off when exposed to fall hazards at 6 feet or greater" is a universal numeric threshold in the live app. | Not superseded (registry note R-1). Production change outside scope; recorded for PO action (U-14). |
| F-5 | **Production C16 "Wear hearing protection when noise levels exceed 85 dBA."** Crews can't measure dBA in the field. 85 dBA is the general-industry hearing conservation action level (1910.95), not the construction requirement structure (1926.52), so as a universal statement it is questionable. | Not superseded (registry note R-2). Canonical C-000049 is exposure-based. Recorded (U-14). |
| F-6 | Four r1 supersessions would have replaced broader production hazards with narrower bolting records: T3 kickback (drills and bits), T7 "Dropped objects" (any material), T25 "Dropped objects striking workers below," T23 "Hose whip from disconnected line" (any pressurized hose). | Withdrawn. Generalization proposals in Crosswalk §B2 (U-13). |
| F-7 | Hydraulic depressurization (C-000060) is now one canonical control shared by H-BT-023, H-BT-024 and H-BT-034. It is broader than production C19 "Verify zero energy state" in one respect (trapped pressure *and* stored mechanical energy) and narrower in another (hydraulic only). | Neither supersedes the other; both retained. |

---

## 9. Unresolved technical and regulatory items

| # | Item | Status | Owner |
|---|---|---|---|
| U-1 | Control ID scheme | **Resolved** (Response 002 §1). Registry established. Reconciliation of production control entries outside Package 001 scope is pending future packages. | — |
| U-2 | Crosswalk §B generalizations | **Resolved** (Response 002 §2) | — |
| U-3 | T7 "Struck-by from overhead steel" | **Resolved:** retained as falling structural materials, distinct from suspended load | — |
| U-4 | Remaining unverified citations: 1926.754(a), 1926.752(e), 1926.753(d), 1926.755, 1926.757, 1926.760(a)–(b), 1926.300–.301, 1926.404(b)(1), 1926.1053(b)(22), 1926.52/.101/.102, 1926.95/.28, 1926.64; all OSHA-GI and MSHA references except those marked verified | Open | Architect |
| U-5 | RCSC provisions other than §2.11 (methods, pre-installation verification); AISC 303/360; ASME PCC-1; whether client procedures govern | Open | Architect |
| U-6 | Tensioning classification | **Resolved** (Response 002 §3) | — |
| U-7 | Company / project fall protection requirements | **Resolved** (PO Decisions 1–2) | — |
| U-8 | Crew terminology and brand aliases | **Resolved** (PO Decision 3) | — |
| U-9 | Policy-based controls (hand protection and other company vs. client requirements) | **Open** — policy-specific validation (PO Decision 4) | PO |
| U-10 | General-industry and MSHA equivalents marked "To be identified" (§4) | Open | Architect |
| U-11 | Whether tensioner pressures commonly exceed torque-wrench hose ratings (C-000064 basis) | Open | Architect |
| U-12 | Emergency response actions | **Resolved in principle** (Response 002 §8). C-000066 (hydraulic fluid eye flush) is proposed and needs approval. | Architect |
| U-13 | Generalize H-BT-004, H-BT-018 and H-BT-025 so the four withdrawn supersessions can proceed (Crosswalk §B2) | Open | Architect |
| U-14 | Production controls C1 (6-ft threshold) and C16 (85 dBA) conflict with PO Decision 1 and field usability. Change requires a PO-approved production milestone. | Open | PO |
| U-15 | Confirm flange line-break / LOTO cross-references as Conditional, not Explicit, without an opening cue (§2 rule 6) | Open | Architect |

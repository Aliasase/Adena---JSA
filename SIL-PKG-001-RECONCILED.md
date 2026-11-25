> **Repository Record (AD-008 §6):** Reconciled **candidate** package, revision r3.3 (r3 amended by PO Decision Records 002–003 and Architect Response 004). Not approved. Citations not marked as checked, company policy, and structural or flange specifications are **not** treated as validated. No application implementation or production release is authorized.

# Safety Intelligence Library — Package 001 (Reconciled Candidate r3.3)
## Bolt (0013) · Torque (0014) · Hydraulic Bolt Tensioning (work method under Bolt)

**Status:** Candidate. Pending Architect technical validation and Product Owner approval.
**Reconciled by:** Claude (Engineer), November 25, 2026.
**Original records are preserved unchanged** in the source files below. Reconciled r1 is preserved at commit `0195ed9` r2 at `4376c8e`, and r3 at `d9b7a1a`.

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
| 9 | Reconciled candidate r2, crosswalk r2, control registry r2 | this file, crosswalk, `SIL-CONTROL-REGISTRY.md` | `4376c8e` |
| 10 | Architect Response 003 | `SIL-PKG-001-ARCHITECT-RESPONSE-003.md` | this commit |
| 11 | Reconciled candidate r3, crosswalk r3, control registry r3 | this file, crosswalk, registry | `d9b7a1a` |
| 12 | PO Decision Record 002 — Company safety requirements | `SIL-PKG-001-PO-DECISION-002.md` | this commit |
| 13 | r3.1 amendments; Company Policy Registry | this file, crosswalk, control registry, `SIL-POLICY-REGISTRY.md` | `54c4249` |
| 14 | PO Decision Record 003 | `SIL-PO-DECISION-003.md` | this commit |
| 15 | r3.2 amendments | this file, crosswalk, registries | `c630be6` |
| 16 | Architect Response 004; AD-009 | `SIL-PKG-002-ARCHITECT-RESPONSE-004.md`, `ADENA_JSA_AD-009.md` | this commit |
| 17 | r3.3 amendments (consolidations from Package 002) | this file | this commit |

**Reference labels:**

| Label | Meaning |
|---|---|
| OSHA-C | 29 CFR 1926 (construction) |
| OSHA-GI | 29 CFR 1910 (general industry) |
| MSHA | 30 CFR |
| Spec | RCSC / AISC / ASME |
| Mfr | Manufacturer |
| BP | Best practice |
| Policy | Company (PO-confirmed, `SIL-POLICY-REGISTRY.md` P-*nnnnnn*) or client — kept distinct |

**Status of each citation:**
- "Architect-checked" = verified by the Architect in Response 002 §4.
- "verified (Engineer, <source>, r3)" = I checked it against the named primary source and confirmed applicability (Response 003 §9).
- Everything else is **unverified**.

Citations are internal only and never shown to users.

### r3.3 amendment summary (Architect Response 004)

**Consolidations.** Three Package 002 records are retired permanently and absorbed into Package 001 canonical records:

| Retired | Absorbed into | New canonical wording |
|---|---|---|
| H-HW-033 | H-BT-013 | Structural instability or collapse |
| H-HW-039 | H-BT-031 | Structural connection failure |
| H-HW-040 | H-BT-036 | Pressure-boundary joint failure or leakage |

Controls are method-specific: `[if bolted]`, `[if welded]`, `[if erection or fit-up]`, `[if cutting or removal]`. Welding controls never appear only because bolting is recognized, and the reverse.

**H-BT-032 generalized.** Now "Falling debris, particles or slag entering the eyes or ears during overhead work." Adds C-000261 (thermal ear protection from slag). Ordinary hearing protection is not slag protection.

**Hazard text cleanup.** Internal crosswalk notes moved out of the user-facing hazard text of H-BT-014 and H-BT-018.

**Withheld from the v1.4.0-dev1 test release** (AD-009 §5; still in the library). Six RCSC method-specific controls on H-BT-031 — C-000081, C-000082, C-000083, C-000085, C-000086, C-000087 — pending validation (U-5). Each is marked in §3.

### r3.2 amendment summary (PO Decision Record 003)

- **Resolved:** U-16 (seven dropped-object supersessions accepted; crosswalk §A now 28), U-17 (Cornell LII accepted as a reliable secondary reproduction, with official sources preferred for final verification; labels updated), U-18 and U-19.
- P-000002 scope is confirmed: stainless steel lath only.
- The demolition recognition cues are adopted (§1.4).
- **Policy precedence corrected (§2 rule 8):** "more protective governs" applies only to the *same exposure*. Requirements for different exposure mechanisms are cumulative.
- Company hot work policies P-000006 to P-000008 and controls C-000114 to C-000117 are registered for Package 002. They have no Package 001 hazard relationships.

### r3.1 amendment summary (PO Decision Record 002)

PO Decision 002 **supersedes** conflicting provisions of PO Decision 001 and Architect Response 003.

**Company policy registry**
- `SIL-POLICY-REGISTRY.md` created with P-000001 to P-000005. Policy records link to canonical controls rather than duplicating them.

**Hand protection**
- C-000004 is now "work gloves when working with steel" (P-000001).
- New C-000112 requires A4 cut-resistant gloves for demolition, knife use and stainless steel lath (P-000002). It is applied to H-BT-002 as a relationship condition. Where both apply, the more protective governs.

**Fall protection**
- C-000039 now carries the 6-ft company trigger, "or at a lower height where required" (P-000003).
- New C-000113 covers fall protection regardless of height.
- Boom and scissor lift tie-off is unchanged (P-000004).

**Hearing protection**
- C-000049 now carries the 85 dBA company threshold, plus designated-area and task triggers (P-000005). Employees are never required to measure sound levels.

**§2 rule 8 rewritten.** PO-confirmed company thresholds are kept and labeled as company policy. More protective requirements govern.

**Status changes**
- U-14 resolved: no policy conflict.
- The hand protection portion of U-9 resolved.
- r2 findings F-4 and F-5 withdrawn as superseded.

### r3 change summary (Architect Response 003)

**Registry**
- Accepted as the single permanent control repository for all packages. C-000105 to C-000111 added.
- Eleven controls revised per §7: C-000004, C-000028, C-000038, C-000039, C-000042, C-000049, C-000055, C-000066, C-000084, C-000095, C-000099. C-000096 was aligned with C-000095.
- Registry now records the internal basis and the revision of each control.

**Generalized hazards** (U-13, §4)
- H-BT-004, H-BT-018 and H-BT-025 are generalized, with controls specific to each relationship:
  - powered wrenches; drills and binding bits; magnetic drills;
  - tools, equipment and materials at height;
  - pneumatic hose systems, kept separate from other pressurized hose systems.
- Pneumatic controls are not applied to hydraulic or process-pressure systems.
- The four withdrawn supersessions are reconciled, and seven further equivalent production strings are identified (Crosswalk r3 §A2).

**U-14 candidate replacements** (§5)
- Production C1 and C16 replacement texts recorded as the canonical text of C-000039 and C-000049.
- **The production app is unchanged.**

**Resolved items**
- U-11 (§2), U-12 (§3), U-13 (§4) and U-15 (§6) resolved.
- Flange exposure cues expanded (§2 rule 6).
- Explicitly excluded exposures are suppressed, Show More included.

**Jurisdiction** (§8)
- Context indicators are not determinations; jurisdiction may stay undetermined.
- Hazards are never suppressed for that reason (§2 rule 7, §4).

**Verification**
- I re-checked the citations I had marked "verified, Engineer" in r2 against primary sources. One was downgraded:
  - MSHA 56.13021's 100-psi definition came from MSHA compliance material, not the regulation text, so it is now **unverified**.
- Added: 1926.756(a)(1), (a)(2), (b), (c)(1), (c)(2) — checked against the osha.gov primary text.
- "Verified" now always names the source checked (§8).

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

### 1.4 Policy trigger recognition (PO Decisions 002–003)

These cues decide when the A4 control C-000112 (P-000002) applies. They are contextual: activity, object, condition and context are all considered.

| Trigger | Cues | Does **not** trigger by itself |
|---|---|---|
| Demolition | demo, demolish, demolition, tear out, gut, wreck, selective demolition, dismantle structure | Ordinary equipment or component removal (ACT-0007 Remove), e.g. "remove pump coupling guard." When demolition and removal occur together, both contribute their relationships. |
| Knife use | knife, utility knife, box cutter, razor knife, hook knife, cut with a knife | Torch, plasma or abrasive cutting (Package 002 Cut, ACT-0016) |
| Stainless steel lath | stainless steel lath, stainless lath, SS lath, stainless expanded metal | Galvanized or other expanded metal or lath. Hand protection there is selected by the actual exposure (C-000004 for steel; H-BT-002 cut relationships). |

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

6. **Flange context** (Responses 002 §6, 003 §6):
   - A flange reference alone does not establish line breaking.
   - Line break, hazardous energy, residual pressure and process-fluid / chemical records become **Explicit** when the description shows the exposure, with or without the literal words "line break." Cues include:
     - opening: break, open, pull, split, remove blind or spool, replace gasket;
     - disassembly: disassemble, unbolt, remove cover or bonnet;
     - isolation: isolate, blind, block and bleed, LOTO;
     - depressurization: drain, depressurize, vent, bleed down;
     - process-fluid exposure: acid, caustic, chemical, process fluid, slurry, steam, ammonia.
   - Otherwise, for process flanges these records are **Conditional** (ranked lower, reachable through Show More).
   - **An exposure the crew explicitly excludes** (for example "torque check only — no line break," "flange not opened") is suppressed entirely. It is never reintroduced to populate Show More. The same exclusion rule applies to every record, not only flange context.

7. **Jurisdiction** (Responses 002 §7, 003 §8):
   - Construction projects, industrial facilities and mine property are **contextual indicators**, not determinations.
   - Jurisdiction (OSHA-C, OSHA-GI, MSHA) is decided internally from the nature of the work, the operation and the jurisdictional boundaries. It may remain **undetermined** when the information isn't available.
   - **No hazard or control is suppressed because jurisdiction is undetermined**; only the internal citation set is affected.
   - OSHA construction citations are not applied universally to mining or industrial maintenance.
   - User-facing text carries no citations.

8. **Thresholds** (PO Decision 002, superseding PO Decision 001 §1):
   - Numeric thresholds confirmed by the PO as company policy stay in the library and are labeled as company policy, not attributed to a regulation:
     - fall protection at 6 ft (P-000003);
     - hearing protection at 85 dBA (P-000005).
   - Where a client, project or regulatory requirement is more protective (for example, a lower fall height), the more protective requirement governs. Controls say "or at a lower height where required."
   - No less protective federal exception (for example, steel erection height allowances) is introduced.
   - Employees are never required to measure sound levels; task-based triggers still apply.
   - **Policy precedence** (PO Decision 003 §6):
     - **Same exposure:** the more protective requirement governs, and the less protective one is not presented as an alternative. Example: work gloves vs. A4 gloves for cut exposure.
     - **Different exposure mechanisms are cumulative:** cut resistance does not replace thermal protection; thermal protection does not establish A4 cut resistance; welding during demolition requires both; chemical, electrical, thermal and mechanical protection are evaluated independently.

9. **Emergency response** (Response 002 §8). Include an immediate response action only where it materially reduces injury severity for that specific hazard:
   - H-BT-017: rescue (C-000044)
   - H-BT-023: injection (C-000062)
   - H-BT-024: eye flush (C-000066, accepted with revised wording, Response 003 §3)

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
  - `C-000004` Wear work gloves when working with steel.
  - `C-000112` `[if demolition, knife use or stainless steel lath]` Wear ANSI A4 or higher cut-resistant gloves for demolition, knife use and work with stainless steel lath (expanded metal).
  - `C-000005` Remove burrs only where the connection or flange requirements allow it — never on gasket seating faces.
  - `C-000006` Keep hands off unprotected plate, pipe and hole edges.
- Refs: Company policy P-000001, P-000002 (PO Decision 002); OSHA-C 1926.95, 1926.28 (unverified); Spec (faying-surface and flange-face limits, unverified)
- Δ: r2: generalized. r3.1: hand protection per PO Decision 002 — work gloves for steel; A4 for demolition, knife use, stainless steel lath; more protective governs.

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

**H-BT-004 — Sudden tool movement from torque reaction, kickback or binding**
- Applicability: Conditional: handheld powered rotating tool (powered wrench, drill, magnetic drill); relationship inherited from T3
- Hazard: Sudden tool movement from torque reaction, kickback or binding.
- Controls:
  - `C-000011` Brace for the tool's reaction before starting; use the side handle where provided.
  - `C-000012` `[if powered wrench]` Set direction and torque or speed before starting.
  - `C-000013` `[if powered wrench]` Expect the tool to twist when the nut seats or stalls.
  - `C-000106` `[if drill]` Expect the bit to bind as it breaks through — hold the drill firmly with the side handle and ease off the trigger.
  - `C-000107` `[if magnetic drill]` Seat a magnetic drill fully on clean, flat steel and use its safety strap or chain as the manufacturer requires.
- Refs: Mfr; BP
- Δ: r3: generalized (Response 003 §4); supersedes T3 "Kickback / torque reaction"; relationship-specific controls.

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
- Refs: OSHA-C 1926.453(b)(2)(iv) (verified, Engineer, CFR text via Cornell LII — reliable secondary reproduction, official source preferred for final verification (PO Decision 003 §7), r3); 1926.1053(b)(22) (unverified); BP

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
  - `C-000028` Replace fasteners that are damaged, galled, necked down or improperly tightened, as the project requirements specify — the stretch from correct pretensioning is expected.
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
- Applicability: [FIT-UP] Inferred from Bolt + structural member; Conditional for cutting, removal or modification of load-bearing members, connections, braces or structural welds (absorbs H-HW-033)
- Hazard: Structural instability or collapse during erection, modification or removal.
- Controls:
  - `C-000031` `[if erection or fit-up]` Leave temporary bolts, bracing and guying in place until removal is authorized under the erection sequence and stability requirements.
  - `C-000032` `[if erection or fit-up]` Follow the erection plan sequence.
  - `C-000234` `[if cutting or removal]` Confirm authorization and the approved sequence before cutting or removing structural members, connections, braces or welds.
  - `C-000235` `[if cutting or removal]` Install required supports or bracing before cutting.
  - `C-000236` `[if cutting or removal]` Stop work if unexpected structural movement occurs.
- Refs: OSHA-C 1926.754(a), 1926.752(e) (unverified)
- Δ:  P002 r2: generalized; absorbs retired H-HW-033 (Response 004 §2).

**H-BT-014 — Struck-by or caught-between suspended steel**
- Applicability: [FIT-UP]; Conditional (hang, set, pick, crane, on the hook) — Distinct from falling structural members (production T7 'Struck-by from overhead steel' retained).
- Hazard: Struck by or caught between suspended structural steel.
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
- Refs: OSHA-C 1926.756(a)(1) solid-web members; (a)(2) competent-person determination of additional bolts for cantilevered members; (b) diagonal bracing — all Architect-checked and verified (Engineer, osha.gov primary text, r3). 1926.757 joists, 1926.755 columns/anchor rods (unverified)
- Δ: r2: diagonal bracing corrected to 1926.756(b). r3: verification recorded.

**H-BT-016 — Collapse from removing bolts at a shared (double) connection**
- Applicability: [FIT-UP]; Conditional (double connection, shared holes, both sides of column, beam over column)
- Hazard: First member falling when shared bolts are removed to make a double connection.
- Controls:
  - `C-000038` At a shared connection, keep at least one bolt with its nut wrench-tight in the first member while making the double connection, unless a seat or equivalent device secures the first member.
  - `C-000105` `[if seat or equivalent device used]` If a seat or equivalent device is used, it must be designed to carry the load and be bolted or welded to both the support and the first member before the shared nuts are removed.
- Refs: OSHA-C 1926.756(c)(1)–(2) — verified (Engineer, osha.gov primary text, r3). Per OSHA interpretation of 05/09/2006, (c) does not apply to double connections at a beam away from a column; the hazard remains, so the record applies to all shared-bolt connections and the citation only at columns / beam webs over columns.
- Δ: r3: reviewed against complete (c)(1)–(2) requirements (Response 003 §7); seat-device control C-000105 added.

**H-BT-017 — Fall from elevated work position**
- Applicability: Conditional on elevation cue
- Hazard: Fall from an elevated work position.
- Controls:
  - `C-000039` Use required fall protection when exposed to a fall hazard of 6 feet or greater, or at a lower height where required.
  - `C-000113` `[if dangerous equipment, holes or openings, or client / project rule]` Protect against falls at any height into or onto dangerous equipment, and guard or cover holes and openings regardless of height.
  - `C-000040` `[if boom or scissor lift]` In boom and scissor lifts, wear compatible personal fall protection attached to the manufacturer-approved anchorage point.
  - `C-000041` `[if boom or scissor lift]` Never tie off to the steel or an adjacent structure from a lift.
  - `C-000042` `[if personal fall protection used on structure]` When using personal fall protection on steel, connect to an approved anchorage rated for the system.
  - `C-000043` `[if personal fall protection used]` Inspect harness, lanyard or SRL and connectors before use.
  - `C-000044` `[if personal fall protection used]` Have a rescue plan ready before work at height — a worker suspended in a harness must be reached promptly.
- Refs: Company policy P-000003 (6-ft trigger; lower where required) and P-000004 (tie-off in boom and scissor lifts) — PO Decision 002 supersedes PO Decision 001 §1; OSHA-C 1926.453(b)(2)(iii)–(v) — verified (Engineer, CFR text via Cornell LII — reliable secondary reproduction, official source preferred for final verification (PO Decision 003 §7), r3); OSHA-GI 1910.67(c)(2)(v) — verified (Engineer, osha.gov, r3); 1926.760(a) (Response 001; unverified). Per OSHA interpretation, scissor lifts are not covered by 1926.453 — scissor tie-off rests on PO Decision 2.
- Δ: r3: anchorage/inspection/rescue apply when personal fall protection is used. r3.1: C-000039 per PO Decision 002; C-000113 any-height control added.

**H-BT-018 — Dropped tools, equipment, hardware or materials striking personnel below**
- Applicability: Conditional on elevation cue; relationships inherited from T7, T8, T9, T10, T25, T35, T37 — Suspended loads and falling structural members remain distinct records.
- Hazard: Dropped tools, equipment, hardware or materials striking personnel below.
- Controls:
  - `C-000047` Barricade or control the area below; no one works below without protection.
  - `C-000046` `[if tools at height]` Use rated tool tethers where required.
  - `C-000045` `[if bolting hardware]` Keep bolts, nuts and washers in a secured bolt bag or bucket — never loose on flanges or beams.
  - `C-000108` `[if materials or equipment at height]` Secure materials and equipment kept at height against displacement, back from edges and openings.
  - `C-000048` `[if tensioner]` Support tensioners so they cannot fall when pullers are unthreaded.
- Refs: OSHA-C 1926.759(a), (b) — Architect-checked (steel erection scope); other contexts BP / 1926.502(j) (unverified)
- Δ: r3: generalized (Response 003 §4).

**H-BT-019 — Noise exposure**
- Applicability: Conditional: noise-producing equipment OR nearby noisy operations (either suffices)
- Hazard: Noise exposure.
- Controls:
  - `C-000049` Wear hearing protection when exposed to noise levels of 85 dBA or greater, in designated hearing protection areas, or when required for the task.
- Refs: Company policy P-000005 (85 dBA). Regulatory criteria internal: OSHA-C 1926.52, 1926.101; OSHA-GI 1910.95; MSHA Part 62 (all unverified). Task-based triggers apply when levels are not measured.
- Δ: r2: OR applicability. r3.1: C-000049 per PO Decision 002.

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
  - `C-000066` If hydraulic fluid enters the eyes, immediately flush with clean water, follow the SDS first-aid instructions and obtain medical evaluation.
  - `C-000060` Verify hydraulic pressure is released and address any trapped pressure or stored mechanical energy before disconnecting or removing equipment.
- Refs: OSHA-C 1926.302(d)(2) (Architect-checked); Mfr
- Δ: r2: eye-flush response proposed (Response 002 §8).

**H-BT-025 — Hose whip from pressurized hose or coupling separation**
- Applicability: Conditional: pneumatic or other pressurized hose systems (not hydraulic tool circuits, covered by H-BT-023/024); relationship inherited from T23
- Hazard: Hose whip from pressurized hose or coupling separation.
- Controls:
  - `C-000067` `[if pneumatic tool]` Use air tools with a positive connection to the hose that cannot come apart accidentally.
  - `C-000068` `[if pneumatic hose]` Install hose restraints (whip checks) at couplings.
  - `C-000069` `[if pneumatic supply line]` Use excess-flow valves on supply lines where required — hose restraints and excess-flow valves do not replace each other.
  - `C-000070` `[if pneumatic]` Shut off and bleed the air before disconnecting.
  - `C-000109` `[if other pressurized hose system]` Use hoses, couplings and restraints rated for the system's pressure and medium.
  - `C-000110` `[if other pressurized hose system]` Isolate and relieve pressure before disconnecting a pressurized hose.
- Refs: OSHA-C 1926.302(b)(1), (b)(7) (Architect-checked; pneumatic only); MSHA 56.13021 — locking-device requirement verified (Engineer, eCFR, r3), 100 psi definition unverified
- Δ: r3: generalized (Response 003 §4); pneumatic controls not applied to other systems.

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
  - `C-000055` Add a face shield over safety glasses or goggles where debris or fragments can reach the face — a face shield does not replace eye protection.
  - `C-000078` Keep your partner and others clear of the far side when driving pins.
- Refs: OSHA-C 1926.301(c), 1926.102 (unverified)
- Δ: r2: face protection by exposure, not duration.

**H-BT-030 — Hand injury from missed strikes**
- Applicability: Conditional: striking or drift pins
- Hazard: Hand struck by a missed hammer blow.
- Controls:
  - `C-000079` Keep hands out of the strike zone; use a pin holder or long-handled tool to hold pins.
- Refs: BP

**H-BT-031 — Structural connection failure**
- Applicability: Inferred from structural bolting, pretensioning, torquing or structural welding (absorbs H-HW-039)
- Hazard: Structural connection failure from incorrect installation, tightening or welding.
- Controls:
  - `C-000080` `[if bolted]` Use the bolt grade, length and washers called for on the drawings.
  - `C-000081` `[if bolted]` Tighten in pattern from the stiffest part of the joint outward. *(withheld from v1.4.0-dev1)*
  - `C-000082` `[if bolted; turn-of-nut]` Turn-of-nut: snug tight first, match mark, then turn the specified rotation. *(withheld from v1.4.0-dev1)*
  - `C-000083` `[if bolted; calibrated wrench]` Calibrated wrench: verify calibration daily with the bolts being installed. *(withheld from v1.4.0-dev1)*
  - `C-000084` `[if bolted; TC bolts]` TC bolts: install and inspect by the specified procedure — a bolt with the spline still on is not complete, and a sheared spline alone does not prove correct pretension.
  - `C-000085` `[if bolted; DTI]` DTI: verify gaps or indicator per manufacturer. *(withheld from v1.4.0-dev1)*
  - `C-000086` `[if bolted; pretensioned joint]` Complete pre-installation verification before production bolting of pretensioned joints. *(withheld from v1.4.0-dev1)*
  - `C-000028` `[if bolted]` Replace fasteners that are damaged, galled, necked down or improperly tightened, as the project requirements specify — the stretch from correct pretensioning is expected.
  - `C-000087` `[if bolted]` Keep bolts clean, dry and lubricated as delivered. *(withheld from v1.4.0-dev1)*
  - `C-000027` `[if bolted]` Do not exceed the specified tightening.
  - `C-000251` `[if welded]` Follow the approved drawings and welding procedure, using qualified welders where required.
  - `C-000252` `[if welded]` Verify joint preparation, fit-up and any required preheat before welding.
  - `C-000253` `[if welded]` Keep required temporary supports in place until the welded connection is accepted.
  - `C-000254` `[if welded]` Complete the required inspection before the welded connection is loaded.
  - `C-000255` Do not modify structural members without authorization.
- Refs: Spec — RCSC 2020 (§2.11 Architect-checked; other provisions unverified); AISC 303/360 (unverified)
- Δ: r2: reuse control made project-specific. P002 r2: generalized; absorbs retired H-HW-039; bolting and welding controls method-specific (Response 004 §2).

**H-BT-032 — Falling debris, particles or slag entering the eyes or ears during overhead work**
- Applicability: Conditional: overhead work cue (bolting, welding, cutting, grinding), or inferred from a lift beneath steel
- Hazard: Falling debris, particles or slag entering the eyes or ears during overhead work.
- Controls:
  - `C-000054` Wear safety glasses.
  - `C-000111` `[if falling debris can get around glasses]` Wear goggles instead of safety glasses where falling or airborne debris can get around glasses.
  - `C-000055` `[if debris can reach the face]` Add a face shield over safety glasses or goggles where debris or fragments can reach the face — a face shield does not replace eye protection.
  - `C-000088` Position yourself so you are not looking straight up into the work.
  - `C-000261` `[if overhead thermal work]` During overhead welding, cutting or gouging, protect your ears from hot slag with flame-resistant coverage such as a welding cap or hood — ordinary earplugs or earmuffs are not slag protection.
- Refs: OSHA-C 1926.102 (unverified); BP
- Δ: r3: eye and supplemental face protection selected by actual exposure. P002 r2: generalized (Response 004 §2, P2-U4).

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
  - `C-000095` Loosen tensioned studs or nuts only by the specified safe detensioning or removal procedure.
  - `C-000096` Do not cut, split, hammer or impact a tensioned nut or stud unless the specified removal procedure allows it.
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
  - `C-000099` Prevent unintended pressurization while positioning or adjusting tools by following the manufacturer's isolation procedure.
- Refs: Mfr; BP
- Δ: r2: manufacturer-designated nut-turning method (Response 002 §5).

**H-BT-036 — Pressure-boundary joint failure or leakage**
- Applicability: Inferred from Bolt, Torque, tensioning or welding on a flange, vessel or piping pressure boundary (absorbs H-HW-040)
- Hazard: Bolted or welded pressure-boundary joint failing or leaking from incorrect assembly, welding or repair.
- Controls:
  - `C-000100` `[if bolted]` Follow the specified tightening or tensioning sequence, number of passes and pressure or torque.
  - `C-000101` `[if bolted]` Use the specified studs, nuts and gasket; do not reuse a gasket.
  - `C-000102` `[if bolted; if tensioner]` Run nuts down fully before releasing tensioner pressure.
  - `C-000103` `[if bolted]` Use calibrated gauges and correctly rated equipment.
  - `C-000104` Complete the required joint verification and records before return to service.
  - `C-000256` `[if welded]` Follow the approved pressure-boundary welding or repair procedure, with qualified welders and the specified materials.
  - `C-000257` `[if welded]` Complete required examination and testing, and keep isolation in place until the equipment is accepted for service.
  - `C-000241` `[if welded]` Hot tapping or welding on in-service systems needs separate qualified engineering authorization — ordinary hot work controls do not cover it.
- Refs: Spec (ASME PCC-1, unverified); OSHA-C 1926.64 / OSHA-GI 1910.119(j) where PSM applies (unverified); Policy / client
- Δ:  P002 r2: generalized; absorbs retired H-HW-040 (Response 004 §2).


---

## 4. Jurisdiction model (Responses 002 §7, 003 §8)

Jurisdiction is an internal attribute decided from the nature of the work, the operation and the jurisdictional boundaries. The work context is only an **indicator**:
- construction project → likely OSHA-C;
- industrial facility maintenance → likely OSHA-GI;
- mine property → possibly MSHA. MSHA/OSHA boundaries depend on the operation; for example, some processing facilities are covered under the MSHA/OSHA interagency agreement.

When it can't be decided, jurisdiction stays **undetermined**, and every applicable hazard and control is still presented. References are stored per jurisdiction; gaps are recorded rather than filled from another jurisdiction.

| Topic | OSHA-C | OSHA-GI | MSHA | Verification status |
|---|---|---|---|---|
| Aerial lift fall protection | 1926.453(b)(2)(iii)–(v) | 1910.67(c)(2)(v) | 56.15005 | C verified (Engineer, CFR text via Cornell LII — reliable secondary reproduction, official source preferred, r3); GI verified (Engineer, osha.gov, r3); MSHA unverified |
| Steel erection connections | 1926.756(a)(1), (a)(2), (b), (c)(1)–(2) | n/a | n/a | Architect-checked; verified (Engineer, osha.gov, r3) |
| Falling object protection (steel erection) | 1926.759(a)–(b) | To be identified | To be identified | C Architect-checked |
| Pneumatic hose connections | 1926.302(b)(1), (b)(7) | To be identified | 56.13021 | C Architect-checked; MSHA locking-device requirement verified (Engineer, eCFR, r3); MSHA 100-psi definition unverified |
| Hydraulic component pressure limits | 1926.302(d)(2) | To be identified | To be identified | C Architect-checked |
| Hand tool condition | 1926.301 | 1910.242(a) | To be identified | Unverified |
| Noise (internal criteria only; company threshold = P-000005) | 1926.52, 1926.101 | 1910.95 | Part 62 | Unverified |
| Fall protection trigger (company trigger = P-000003, 6 ft) | Subpart M (6 ft general) | 1910.28(b)(1) (4 ft) | 56.15005 (danger of falling) | Unverified. The lower GI threshold and MSHA's no-fixed-height rule govern where applicable. |
| Electrical protection for tools | 1926.404(b)(1) | To be identified | To be identified | Unverified |
| Hazardous energy (flange cross-reference) | Cross-reference | 1910.147 | 56.14105 | Unverified |
| PSM mechanical integrity (H-BT-036) | 1926.64 | 1910.119(j) | n/a | Unverified |
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

**Engineer additions r3 (Response 003 §4, §6; proposed)**
- R-26 Check torque on flange bolts — no line break → no line-break / LOTO / process-fluid records, **including in Show More**
- R-27 Remove spool piece and replace gaskets on acid line → line break, residual pressure, chemical exposure Explicit (no literal "line break")
- R-28 Torque pump flange bolts → line-break records Conditional only
- R-29 Drill holes in beam flange with mag drill → H-BT-004 with C-000106 / C-000107; no wrench controls C-000012 / C-000013
- R-30 Blow down air hose and disconnect impact gun → H-BT-025 pneumatic controls; not C-000109 / C-000110
- R-31 Disconnect water blast hose → H-BT-025 with C-000109 / C-000110; no pneumatic controls
- R-32 Stage deck bundles and tools on upper level → H-BT-018 with C-000108 / C-000046; no bolt-bag control

**PO Decision 002 (proposed)**
- R-33 Bolt up beam splice at ground level → C-000004 (work gloves); **not** C-000112
- R-34 Cut and tie stainless steel lath for rockwork with utility knife → C-000112 (A4) governs; C-000004 not presented as an alternative
- R-35 Demolish existing steel platform and remove bolts → C-000112 (A4) governs
- R-36 Bolt beam connections from scissor lift at 4 ft platform height → C-000039 plus C-000040 / C-000041 (tie-off in scissor lifts, P-000004)
- R-37 Torque pump flange bolts next to running pump → C-000049 by task trigger, without a measured level

**PO Decision 003 (proposed)**
- R-38 Remove pump coupling guard and re-torque bolts → no C-000112 (removal is not demolition)
- R-39 Demo old conveyor drive and remove baseplate bolts → C-000112 (demolition) plus Bolt / Torque and removal relationships, cumulatively
- R-40 Tie galvanized lath to rockwork frame → C-000004; **not** C-000112
- R-41 Cut stainless steel lath with snips → C-000112
- R-42 Torch cut beam during selective demolition → C-000112 **and** Package 002 thermal hand protection (different mechanisms, cumulative)

---


---

## 8. Engineer findings — r3

r2 findings F-1 to F-7 are preserved at commit `4376c8e`. F-6 was resolved by Response 003 §4. **F-4 and F-5 are withdrawn.** PO Decision 002 confirms the 6-ft and 85 dBA thresholds as company policy, so neither is a conflict. My F-5 point that crews can't measure dBA in the field is addressed by the task-based triggers in C-000049, not by removing the threshold.

| # | Finding | Effect |
|---|---|---|
| G-1 | **C-000038 review (Response 003 §7)** against the complete 1926.756(c), checked against the osha.gov primary text. (c)(1) requires at least one bolt *with its wrench-tight nut* to remain on the first member, unless a seat or equivalent device secures it and prevents column displacement. (c)(2) requires that any seat or device be designed to carry the load during the double connection, and be bolted or welded to both the supporting member and the first member *before* the shared nuts are removed. | C-000038 revised to "wrench-tight" and "secures the first member." The device characteristics and installation sequence are a separate conditional control, C-000105. Joined into one sentence they were not field-readable. |
| G-2 | **1926.756(a)(2)** is a *competent-person determination* of whether more than two bolts are needed for cantilevered members, not a fixed count. | H-BT-015 internal reference corrected. C-000037 user text is unchanged; it already defers to "the connection required for that member." |
| G-3 | **1926.453(b)(2)(v)** text says "body belt … and a lanyard." Its note states body belts are not acceptable in personal fall arrest after Jan 1, 1998, and restrict them to tethering or restraint (1926.502(e)). | Supports C-000040 "compatible personal fall protection." No user text names a body belt. |
| G-4 | **Generalizing H-BT-018** makes it equivalent to seven further production strings beyond the two in U-13: T8 "Dropped objects from elevated platform," T9 "Falling objects from ladder user," T10 "Falling objects from scaffold," T25 "Struck-by from falling materials and tools" and "Materials stored at height," T35 "Dropped objects to floors and personnel below," T37 "Dropped rigging hardware onto workers below." | Proposed as supersessions in Crosswalk r3 §A2, **pending Architect confirmation**. Retained, not superseded: suspended or dropped loads (T5, T6, T16), "Crush hazard from dropped material" (T17, a handling drop, not from height) and falling structural members (T7). |
| G-5 | **C-000096** ("Never cut, hammer or impact a tensioned nut loose") conflicted with Response 003's direction for C-000095 not to require tensioning equipment universally. Some joint procedures specify alternative removal methods. | Revised to defer to the specified removal procedure. |
| G-6 | **Verification hygiene.** My r2 "verified, Engineer" marks for 1926.453 and 1910.67 relied on search-result text. In r3 I re-checked them against CFR text (LII reproduction for 1926.453; osha.gov for 1910.67), and the source is now named. **Architect to confirm** that the LII CFR reproduction is acceptable as a primary source, or re-check against eCFR. | Status labels updated throughout. |
| G-8 | **Production C16 boundary wording.** It says "exceed 85 dBA"; P-000005 says "85 dBA or greater." | Boundary difference only. Harmonize in a future approved production milestone (policy registry). |
| G-9 | **Lower regulatory fall thresholds exist.** Examples (unverified): OSHA general industry 1910.28(b)(1) at 4 ft; MSHA 56.15005 "danger of falling" with no fixed height. These matter for plant-maintenance and mine-site work. | Covered by the "or at a lower height where required" clause of C-000039 and by the jurisdiction model. Thresholds stay internal. |
| G-7 | **Goggles.** For falling overhead debris, safety glasses alone may be bypassed. Face shields are secondary protection (C-000055). | New C-000111 "goggles where debris can get around glasses," used conditionally by H-BT-032. |

---

## 9. Unresolved technical and regulatory items

| # | Item | Status | Owner |
|---|---|---|---|
| U-1 | Control ID scheme | Resolved (Response 002 §1; registry accepted, Response 003 §1) | — |
| U-2 | Crosswalk §B generalizations | Resolved | — |
| U-3 | T7 "Struck-by from overhead steel" | Resolved — falling structural members, distinct | — |
| U-4 | Unverified citations: 1926.754(a), 1926.752(e), 1926.753(d), 1926.755, 1926.757, 1926.760(a)–(b), 1926.300–.302 except Architect-checked items, 1926.404(b)(1), 1926.502(d)/(j), 1926.1053(b)(22), 1926.52/.101/.102, 1926.95/.28, 1926.64; all OSHA-GI and MSHA references not marked verified; MSHA 56.13021 100-psi definition | **Open** — validation continues in parallel with later packages (PO Decision 003 §7) | Architect |
| U-5 | RCSC provisions other than §2.11; AISC 303/360; ASME PCC-1; whether client procedures govern | **Open** — validation continues in parallel with later packages (PO Decision 003 §7) | Architect |
| U-6 | Tensioning classification | Resolved | — |
| U-7 | Fall protection requirements | Resolved (PO Decisions 1–2) | — |
| U-8 | Terminology and aliases | Resolved (PO Decision 3) | — |
| U-9 | Policy-based controls | Hand protection resolved (PO Decisions 002–003). **Open:** other company vs. client requirements not yet confirmed. | PO |
| U-10 | OSHA-GI and MSHA equivalents marked "To be identified" (§4) | **Open** — validation continues in parallel with later packages (PO Decision 003 §7) | Architect |
| U-11 | Tensioner / torque-wrench hose compatibility | Resolved (Response 003 §2) | — |
| U-12 | Emergency response actions | Resolved (Response 003 §3) | — |
| U-13 | Generalize H-BT-004 / -018 / -025 | Resolved (Response 003 §4) | — |
| U-14 | Production C1 / C16 | **Resolved — no policy conflict** (PO Decision 002 §4). Both thresholds are company policy and retained. The only remaining wording item is G-8. | — |
| U-15 | Flange applicability | Resolved (Response 003 §6) | — |
| U-16 | Seven additional H-BT-018 supersessions | **Resolved** (PO Decision 003 §7). Crosswalk §A rows 22–28; all production relationships preserved. | — |
| U-17 | Cornell LII as a verification source | **Resolved** (PO Decision 003 §7): a reliable secondary reproduction; official regulatory sources preferred for final verification | — |
| U-18 | A4 lath scope | **Resolved** (PO Decision 003 §1): stainless steel lath only | — |
| U-19 | Demolition recognition | **Resolved** (PO Decision 003 §2); cues in §1.4 | — |
| U-20 | Implementation note: the six withheld RCSC controls return to the app once U-5 is validated | **Open** | Architect |

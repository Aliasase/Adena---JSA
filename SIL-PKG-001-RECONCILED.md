> **Repository Record (AD-008 §6):** Reconciled **candidate** package. Not approved. Unverified citations, company policy and structural or flange specifications are **not** treated as validated here (Architect Response 001). No application implementation or production release is authorized.

# Safety Intelligence Library — Package 001 (Reconciled Candidate r1)
## Bolt (0013) · Torque (0014) · Hydraulic Bolt Tensioning (work means)

**Status:** Candidate. Pending Architect technical validation and Product Owner approval.
**Reconciled by:** Claude (Engineer), November 25, 2026.
**Original records preserved unchanged in:** the source files below. This document supersedes none of them.

### Source documents and revision history

| Order | Document | Repository file | Commit |
|---|---|---|---|
| 1 | Package 001 (original 31 records) | `SIL-PKG-001.md` | `8910536` |
| 2 | Addendum 01 — Cumulative recognition | `SIL-PKG-001-ADDENDUM-01.md` | `f92afa6` |
| 3 | Engineer Independent Review | `SIL-PKG-001-ENGINEER-REVIEW.md` | `8910536` |
| 4 | Architect Response 001 | `SIL-PKG-001-ARCHITECT-RESPONSE-001.md` | this commit |
| 5 | Addendum 02 — Hydraulic bolt tensioning | `SIL-PKG-001-ADDENDUM-02.md` | this commit |
| 6 | Engineer review of Addendum 02 | §5 of this document | this commit |
| 7 | Production record crosswalk | `SIL-PKG-001-PRODUCTION-CROSSWALK.md` | this commit |

**Labels:**
- Reference classes: **OSHA** (regulation) · **Spec** (RCSC/AISC/ASME contract specification) · **Mfr** (manufacturer instructions) · **BP** (best practice) · **Policy** (company or client).
- Every citation is marked **(unverified)** until the Architect completes validation.
- Citations are internal only; none is shown to users.

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

### 1.3 Work means (cumulative — any combination may be present)

| Work means | Terms (brand aliases are recognition-only; PO to confirm usage) |
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
| **Hydraulic bolt tensioner** (Addendum 02) | hydraulic bolt tensioner, hydraulic bolt tensioning, hydraulic stud tensioner, stud tensioning, hydraulic stud tensioning, axial bolt tensioning, hydraulic tensioning pump, bolt stretching, stud stretching, multi-stud tensioning, simultaneous bolt tensioning, detension, de-tension, detensioning; brands: Hydratight, Tentec, ITH, Enerpac (recognition-only; PO to confirm) |
| Context-dependent for tensioning | tensioning, stretching, tensioner, pump, puller, bridge |

**Collisions that must not resolve to bolt tensioning:**
- belt tensioning, take-up (conveyors)
- post-tension, PT tendon, stressing (concrete)
- guy, cable or wire rope tensioning (rigging)
- pretension and TC bolts (structural)
- "pump" as an object (pump flange, pump maintenance — production T32)

---

## 2. Applicability rules (Addendum 01 and Response 001)

1. **Cumulative.** Every recognized activity, object, work means, condition and context contributes its records. Recognizing one never suppresses another.
2. **Ranking** (AD-008 §4 supersedes CRF §7): applicability class first (Explicit → Inferred → Conditional), then consequence *within* each class, then relevance. Consequence never lifts an unrelated record across classes.
3. **Inferred applicability** covers reasonably foreseeable hazards the crew did not describe. Example: Bolt + structural member infers H-BT-012, H-BT-013 and H-BT-031.
4. **Fit-up versus existing connection.** Records marked **[FIT-UP]** apply only when initial erection, fit-up or temporary-connection cues are present:
   - verbs: hang, set, connect, fit up, align, drift, make up, erect, pick, on the hook;
   - or Bolt combined with a structural member where no existing-connection cue appears.

   Existing-connection cues (check, re-torque, inspect, verify, existing, retighten) **block** [FIT-UP] records. Suspended-load and temporary-erection hazards are never inferred from a structural connection being mentioned alone.
5. **Control-level applicability** (Decision 3). A control may carry its own condition. Conditions come from recognized concepts (work means, access, condition), not from exact keyword matches.
6. **Flange / process piping context** pulls in cross-referenced line break, LOTO, residual pressure and chemical exposure records (production C19, C22; T31). Package 001 does not duplicate them.
7. **No padding.** Show 15–20 when there's enough applicable content; Show More beyond that; never fill to a count.

---

## 3. Reconciled hazard records

**Format:**
- **Applicability** (class; cues; constraints)
- **Hazard** (reconciled user-facing text)
- **Controls** (user-facing; `[if …]` = control-level condition)
- **Refs** (internal)
- **Δ** (change from the original)

### Core records (Explicit when Bolt or Torque is recognized)

**H-BT-001 — Pinch points during bolt installation** · [FIT-UP]
- Hazard: Pinch points while fitting and bolting connections.
- Controls:
  - Never use fingers to check or align holes — use a drift pin or spud wrench.
  - Keep hands off mating surfaces while plies are drawn together.
- Refs: BP. Supersedes production T7 "Pinch points during bolt-up and alignment."
- Δ: Wording specific; fit-up constraint added.

**H-BT-002 — Cuts from sharp metal edges or burrs**
- Controls:
  - Wear the cut-resistant gloves required for the task.
  - Remove burrs only where the connection requirements allow it. `[if flange]` Never grind or file gasket seating faces.
  - Keep hands off unprotected plate and hole edges.
- Refs: OSHA 1926.95, 1926.28 (unverified). Glove cut level = Policy. Faying-surface and flange-face limits = Spec (unverified).
- Δ: Source control added, limited by connection requirements (Response 001).

**H-BT-003 — Wrench or socket slippage** *(absorbs H-BT-005)*
- Hazard: Wrench or socket slipping off the fastener, striking hands against steel.
- Controls:
  - Use the correct size wrench or socket, fully seated on the nut.
  - Do not use wrenches with sprung or worn jaws.
  - Pull rather than push where possible, knuckles clear of steel.
  - Do not extend a wrench with pipe unless it is designed for it.
- Refs: OSHA 1926.301(b) (unverified); BP.
- Δ: Absorbs 005; controls added.

**H-BT-004 — Sudden tool movement from torque reaction** · *Conditional*
- Applicability: handheld powered wrench without a reaction arm (impact, electric, battery, pneumatic). Manual sudden-release hazards stay in H-BT-003, H-BT-009 and H-BT-011.
- Controls:
  - Brace for the reaction before pulling the trigger; use the side handle where provided.
  - Set direction and torque or speed before starting.
  - Expect the tool to twist when the nut seats or stalls.
- Refs: Mfr; BP. Supersedes production T3 "Kickback / torque reaction" (inherits the T3 relationship).
- Δ: Reclassified from core to conditional.

**H-BT-005 — RETIRED.** Consolidated into H-BT-003 (Decision 5). Identifier permanently retired; never reused.

**H-BT-006 — Tool or socket failure under load**
- Applicability: also related to the hydraulic bolt tensioner (Addendum 02). `[if tensioner]` control below.
- Controls:
  - Inspect wrenches, sockets, extensions and multipliers before use. Tag and remove cracked, worn or damaged tools.
  - Use only extensions and multipliers rated for the force applied.
  - `[if tensioner]` Inspect puller threads, pistons, seals and bridges before use; remove damaged components.
- Refs: OSHA 1926.300(a), 1926.301(a) (unverified); Mfr.

**H-BT-007 — Strain from applying force or handling heavy tools**
- Controls:
  - Choose a longer wrench, a multiplier or a powered tool based on the force needed and the access available — do not overpower a manual wrench.
  - Set up to pull at waist-to-chest height, not overhead or twisted.
  - `[if hydraulic wrench, tensioner, large impact or pump]` Move heavy tool heads, tensioners and pumps with two people or a hand line; do not climb carrying them.
- Refs: BP.
- Δ: Absorbs tool-handling strain. Powered equipment is not universally prescribed (Response 001).

**H-BT-008 — Repetitive hand and wrist strain**
- Controls:
  - Rotate tasks on long bolt-up runs.
  - Keep wrists straight.
  - Use tools sized to the work.
- Refs: BP. Ranks lower within the core group.
- Δ: Wording only.

**H-BT-009 — Loss of balance during tightening**
- Applicability: core. When an elevation cue is present, H-BT-017 always accompanies it (Response 001).
- Controls:
  - Set your feet and brace before applying force — expect the nut to break free.
  - `[if aerial lift]` Stand on the platform floor; never climb or stand on rails to reach a bolt.
  - `[if ladder]` Do not apply heavy wrench force from a ladder — reposition or use a lift.
- Refs: OSHA 1926.453(b)(2)(iv), 1926.1053(b)(22) (unverified); BP.

**H-BT-010 — Caught in a rotating socket or extension** · *Conditional*
- Applicability: powered wrench.
- Hazard: Fingers, gloves, sleeves or lanyards caught in a rotating socket or extension.
- Controls:
  - Never hold the socket or extension while the tool runs.
  - Secure loose sleeves.
  - Keep lanyards and tool tethers clear of the spinning socket.
- Refs: Mfr; BP.
- Δ: Reclassified and renamed. Crosswalk §B: generalization to supersede production T3 entanglement is pending.

**H-BT-011 — Bolt snapping or seized nut breaking loose**
- Hazard: Bolt snapping, or a seized nut breaking loose suddenly under applied force.
- Controls:
  - Do not exceed the specified tightening.
  - Replace fasteners as the project requirements specify — do not reuse bolts that have stretched, galled or been over-tightened.
  - Brace on seized or rusted nuts and keep clear of the swing.
- Refs: Spec (RCSC reuse provisions, unverified); BP.
- Δ: Mechanism redefined (Decision accepted).

### Conditional / inferred records

**H-BT-012 — Caught or crushed between shifting steel** · [FIT-UP]; Inferred from Bolt + structural member
- Controls:
  - Keep hands and body out from between members until the connection is made.
  - Pull pins and loosen bolts only with the member supported — misaligned steel can spring when released.
- Refs: OSHA 1926.754(a) (unverified); BP. Supersedes production T7 "Crushing from shifting steel." Crosswalk §B: "Caught-between" decision pending.

**H-BT-013 — Structural instability or collapse** · [FIT-UP]; Inferred from Bolt + structural member
- Cues: temporary bolts, erection bolts, guy, bracing, plumb up, temporary connection.
- Controls:
  - Leave temporary bolts, bracing and guying in place until removal is authorized under the erection sequence and stability requirements.
  - Follow the erection plan sequence.
- Refs: OSHA 1926.754(a); 1926.752(e) where a site-specific erection plan is used (unverified).

**H-BT-014 — Struck-by or caught-between suspended steel** · [FIT-UP]; Conditional
- Cues: hang, set, pick, crane, on the hook, connect + structural member.
- Controls:
  - Stay out from under the load; only the connectors make the initial connection.
  - Use tag lines; keep hands off the load except at the connection point.
  - Keep direct communication with the signal person.
- Refs: OSHA 1926.753(d), 1926.760(b) (unverified). Supersedes production T7 "Suspended load during picks."

**H-BT-015 — Member movement or collapse on releasing hoisting equipment** · [FIT-UP]; Conditional
- Controls:
  - Do not release the load until the connection required for that member is made.
  - Verify stability before releasing the rigging.
- Refs, by member type — never stated as a universal rule (unverified):
  - Solid-web members: 1926.756(a)(1)
  - Diagonal bracing: 1926.756(a)(2)
  - Joists: 1926.757
  - Columns and anchor rods: 1926.755
- Δ: None to user text.

**H-BT-016 — Collapse from removing bolts at a shared (double) connection** · [FIT-UP]; Conditional
- Cues: double connection, both sides of the column, shared holes, beams over column.
- Controls: At a shared connection, keep at least one bolt with its nut tight in the first member — unless a seat or approved support device holds it — while installing the second member.
- Refs: OSHA 1926.756(c)(1) (unverified).

**H-BT-017 — Fall from elevated work position** · Conditional on an elevation cue
- Controls:
  - Use the fall protection required by company, project and equipment-manufacturer requirements for the access being used — do not start until it is in place.
  - `[if boom lift]` Tie off to the platform's designated anchor.
  - `[if on structural steel]` Tie off to an approved anchorage before bolting.
- Interpretation (Response 001):
  - Final bolting or torquing of members already erected ordinarily falls under 1926.760(a), not the connector provisions of 1926.760(b).
  - Connector status depends on actual duties under 1926.751.
  - No federal threshold or exception appears in user-facing text where Adena or project rules are more stringent.
- Cross-references: aerial lift (T8) — **"Crushing / caught-between at overhead obstructions" ranks high for boom lift + structural member**; ladder (T9).
- Refs: OSHA 1926.453(b)(2)(v), 1926.760(a) (unverified); Policy.

**H-BT-018 — Dropped bolts, sockets, tools and components** · Conditional on an elevation cue
- Controls:
  - Keep bolts, nuts and washers in a secured bolt bag or bucket — never loose on flanges or beams.
  - Use rated tool tethers where required.
  - Barricade or control the area below; no one works below without protection.
  - `[if tensioner]` Support tensioners so they cannot fall when pullers are unthreaded.
- Refs: OSHA 1926.759(a), (b) (unverified). Supersedes production T7 "Dropped objects," T25 "Dropped objects striking workers below," and T25 "Falling tools from elevated workers."

**H-BT-019 — Noise exposure** · Conditional (canonical; Crosswalk §A-1)
- Applicability: noise-producing work means (impact, pneumatic tools, air-driven pumps, striking), **and** nearby operations.
- Controls:
  - Wear hearing protection around impact tools, air tools, air-driven pumps and hammering — including workers nearby.
  - Consider other noisy operations in the area.
- Refs: OSHA 1926.52, 1926.101 (unverified).

**H-BT-020 — Hand-arm vibration** · Conditional (canonical)
- Controls:
  - Rotate impact work across the crew.
  - Keep tools maintained.
  - Do not rely on anti-vibration gloves alone.
- Refs: BP (ISO 5349 / ANSI S2.70, unverified). No OSHA standard.

**H-BT-021 — Socket or attachment ejection** · Conditional on a powered wrench
- Controls:
  - Use sockets rated for the tool (impact-rated on impact tools).
  - Use the manufacturer-approved retention.
  - Wear safety glasses.
- Refs: Mfr; BP. 1926.302(b)(2) **not** relied on (Response 001).

**H-BT-022 — Crushing at the reaction point** · Conditional on any reaction-arm equipment (hydraulic, electric, battery, pneumatic and manual torque multipliers)
- Controls:
  - Set the reaction arm against a solid surface and confirm the reaction direction before applying force.
  - Keep hands, hoses and body clear of the arm and the reaction point.
  - `[if pump operated by another person]` **Shared control SC-01:** the pump operator pressurizes only on a clear signal from the person at the tool.
- Refs: Mfr; BP.

**H-BT-023 — High-pressure fluid injection** · Conditional on hydraulic wrench or tensioner (canonical)
- Controls:
  - Inspect hoses and fittings.
  - Never use hands to locate leaks.
  - Confirm the gauge reads zero before disconnecting.
  - Do not kink, step on or drive over hoses.
  - **Get immediate medical attention for any suspected injection injury, even if it looks minor** (Decision 4).
- Refs: OSHA 1926.302(d)(2) (unverified); BP. Supersedes production T23 "Injection injury from high-pressure fluid."

**H-BT-024 — Hydraulic hose or fitting failure** · Conditional on hydraulic wrench or tensioner
- Hazard: Hydraulic hose or fitting failure — fluid spray to eyes and face, slippery surfaces.
- Controls:
  - Use hoses and couplers rated for the system's maximum pressure.
  - Fully engage couplers.
  - `[if tensioner]` Do not use torque-wrench hoses or couplers on tensioner systems unless they are rated for tensioner pressure.
  - Clean up spilled fluid before continuing.
- Refs: OSHA 1926.302(d)(2) (unverified); Mfr.
- Δ: Hydraulic only (Decision accepted).

**H-BT-025 — Compressed-air hose whip** · Conditional on pneumatic wrench or air-driven pump (canonical)
- Controls:
  - Install whip checks at couplings.
  - Use excess-flow valves on supply lines where required — one does not replace the other.
  - Shut off and bleed the air before disconnecting.
- Refs: OSHA 1926.302(b)(1), (b)(7) (unverified). Supersedes production T23 "Hose whip from disconnected line."
- Δ: Restraint and excess-flow distinguished (Response 001).

**H-BT-026 — Electrical shock** · Conditional on corded tool or electrically powered pump
- Controls:
  - Inspect cords and plugs.
  - Use the GFCI or other electrical protection required for the equipment and conditions.
  - Keep cords out of water and away from pinch points.
- Refs: OSHA 1926.404(b)(1) (unverified).

**H-BT-027 — Trips from hoses and cords** · Conditional on corded, pneumatic or hydraulic equipment (canonical)
- Controls:
  - Route hoses and cords out of walkways.
  - `[if aerial lift]` Secure hoses and cords so they cannot snag on steel as the lift moves, while leaving enough slack for travel and avoiding entanglement points.
- Refs: BP. Supersedes production T2 and T15 cord-trip strings.

**H-BT-028 — Falling or ejected bolt splines** · Conditional on TC installation
- Controls:
  - Collect splines in a bag or bucket using the wrench's ejector.
  - Keep personnel clear below.
- Refs: Mfr.

**H-BT-029 — Flying fragments or ejected drift pin** · Conditional on striking or drift pins
- Controls:
  - Remove mushroomed or damaged striking tools and pins from service.
  - Wear safety glasses; add a face shield for sustained striking.
  - Keep your partner and others clear of the far side when driving pins.
- Refs: OSHA 1926.301(c), 1926.102 (unverified).
- Δ: Absorbs drift-pin ejection.

**H-BT-030 — Hand injury from missed strikes** · Conditional on striking or drift pins
- Controls:
  - Keep hands out of the strike zone.
  - Use a pin holder or long-handled tool to hold pins.
- Refs: BP.

**H-BT-031 — Structural connection failure from incorrect installation** · Inferred from structural bolting, pretensioning or torquing
- Controls (method-specific; **exact provisions pending validation**):
  - Use the bolt grade, length and washers called for on the drawings.
  - Tighten in pattern from the stiffest part of the joint outward.
  - `[if turn-of-nut]` Snug tight first, match mark, then turn the specified rotation.
  - `[if calibrated wrench]` Verify calibration daily with the bolts being installed.
  - `[if TC bolt]` The spline must be sheared off — a bolt with spline intact is not tensioned.
  - `[if DTI]` Verify gaps or indicator per manufacturer.
  - `[if pretensioned joint]` Complete pre-installation verification before production bolting.
  - Follow the project's bolt reuse limits.
  - Keep bolts clean, dry and lubricated as delivered.
- Refs: Spec — RCSC *Specification for Structural Joints Using High-Strength Bolts*; AISC 303/360 (unverified).
- Δ: Renamed "structural"; flange joints moved to H-BT-036 (§5.3).

**H-BT-032 — Debris falling into eyes during overhead bolting** · Conditional on overhead work (cues: overhead, underside, bottom flange, ceiling; or inferred from an aerial lift beneath steel)
- Controls:
  - Wear safety glasses; add goggles or a face shield for sustained overhead impact work.
  - Position yourself so you are not looking straight up into the work.
- Refs: OSHA 1926.102 (unverified); BP.
- Δ: New (Decision 6).

### Hydraulic bolt tensioning records (Addendum 02, revised per §5)

**H-BT-033 — Stud or tensioner component ejected under hydraulic pressure** · Conditional on a tensioner
- Controls:
  - Verify the required thread engagement of the puller on the stud before pressurizing.
  - Confirm the tensioner and puller match the stud size and thread.
  - Seat the bridge square and flat on the flange face.
  - Keep everyone out of the line of force above the tools — `[if multiple tools]` around the full flange.
  - Do not exceed the tool's rated pressure or piston stroke.
  - If a nut will not turn, stop — do not raise pressure beyond the procedure.
- Refs: Mfr; Spec (ASME PCC-1, unverified).

**H-BT-034 — Sudden release of stud tension during detensioning or loosening** · Conditional on detension or removal of tensioned studs
- Controls:
  - Loosen tensioned studs only with the tensioner and the specified detensioning procedure.
  - Never cut, hammer or impact a tensioned nut or stud loose.
  - Keep clear of the stud axis while load is released.
- Refs: Mfr.
- Δ: Hydraulic depressurization controls moved to H-BT-023 / H-BT-024 (§5.3).

**H-BT-035 — Pinch and crush points at tensioners** · Conditional on a tensioner
- Controls:
  - Turn nuts only through the bridge window with the tommy bar; keep fingers out of the window and from between the tool and the flange.
  - Keep hands clear of pistons and pullers while pressurized.
  - **Shared control SC-01** (signal before pressurizing).
  - Disconnect or lock the pump control while positioning or adjusting tools.
- Refs: Mfr; BP.
- Δ: "Keep hands clear of nut-turning mechanisms" corrected (§5.3).

**H-BT-036 — Pressure-boundary bolted joint failure or leak from incorrect bolt load** · Inferred from Torque, Bolt or tensioning on a flange, vessel or piping joint
- Controls:
  - Follow the specified tightening or tensioning sequence, number of passes and pressure or torque.
  - Use the specified studs, nuts and gasket; do not reuse a gasket.
  - `[if tensioner]` Run nuts down fully before releasing pressure.
  - Use calibrated gauges and correctly rated equipment.
  - Complete the required joint verification and records before return to service.
- Refs: Spec (ASME PCC-1, unverified); OSHA 1926.64 / 1910.119(j) where PSM applies (unverified); Policy / client.
- Δ: Scope widened from tensioning only to all flange bolt-load methods (§5.3).

---

## 4. Shared controls

| ID (provisional) | Control | Used by |
|---|---|---|
| SC-01 | Pump operator pressurizes only on a clear signal from the person at the tool | H-BT-022, H-BT-035 |

Control ID scheme pending (U-1).

---

## 5. Engineer review of Addendum 02 — hydraulic bolt tensioning

### 5.1 Classification
Hydraulic tensioning applies axial stretch, not rotation (Addendum 02 is correct). **Recommendation:** treat the tensioner as a **work means under Bolt (0013)**, as the hydraulic torque wrench is treated, rather than creating a new "Tension" activity. Its distinct hazards attach to the work means. That keeps with CRF §8.3 ("more generic") and avoids a new activity that would collide with structural pretension, belt, post-tension and rigging senses of "tension." **Architect decision** (U-6).

### 5.2 Recognition
- The Addendum 02 terms are accepted; detension variants and brand aliases are added (§1.3).
- **Critical collision:** "pretension" and "tension-control bolt" contain *tension*. These must not recognize hydraulic tensioning. Regression tests R-19 and R-20 added.
- "Pump" is the most collision-prone term: pump flange, pump maintenance (T32), hydraulic torque wrench pump. It must only contribute to tensioning when a tensioning cue is present. Addendum scenario 1 tests this correctly.

### 5.3 Record findings

| Record | Finding | Resolution in §3 |
|---|---|---|
| H-BT-033 | Sound. Missing: puller-to-stud size and thread match (metric vs. inch, thread series), the bridge not seating square on the flange face, damaged stud threads, and the field reaction of raising pressure when a nut won't turn. With multiple tools, the line of force is the whole flange, not one axis. | Controls added |
| H-BT-034 | As written, its controls (release pressure, verify depressurization) are hydraulic stored energy, which duplicates H-BT-023 / H-BT-024. The distinct mechanical hazard is release of **stud preload** during detensioning — or when a tensioned nut is cut, hammered or impacted loose without the tensioner. | Redefined. Gauge-zero check stays in H-BT-023. |
| H-BT-035 | "Keep hands clear of… nut-turning mechanisms" conflicts with the procedure: the nut is turned by hand through the bridge window **while pressurized**. The control must describe how to do that safely. Communication control duplicates H-BT-022. | Corrected; shared control SC-01 |
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
- H-BT-035 / SC-01 (one signal controls pressurization);
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
- R-12 Check torque on pump flange bolts → Torque + H-BT-036; no [FIT-UP] records
- R-13 Break flange and re-torque bolts on acid line → Torque + H-BT-036 + line break / LOTO; no structural records
- R-14 Bolt up beam connections from boom lift → overhead-crush cross-reference ranked high

**Addendum 02**
- R-15 Hydraulically tension studs on pump flange
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

---

## 8. Unresolved technical and regulatory questions

| # | Question | Owner |
|---|---|---|
| U-1 | Canonical **control** ID scheme, and reconciliation of production HAZ_TO_CONTROL entries (Crosswalk §D) | Architect |
| U-2 | Crosswalk §B: generalize and supersede four production strings, or retain | Architect |
| U-3 | Meaning of production T7 "Struck-by from overhead steel" (falling vs. suspended) | Architect / PO |
| U-4 | All citations marked (unverified), including 1926.754(a), 1926.752(e), 1926.756(a)(1)–(2), (c)(1), 1926.759(a)–(b), 1926.302(b)(1), (b)(7), (d)(2), 1926.404(b)(1), 1926.453(b)(2)(iv)–(v), 1926.1053(b)(22), 1926.64 / 1910.119(j) | Architect |
| U-5 | RCSC/AISC provisions in H-BT-031 (methods, pre-installation verification, reuse) and ASME PCC-1 applicability for H-BT-036 — and whether client procedures govern instead | Architect |
| U-6 | Tensioner as a work means under Bolt vs. a separate activity | Architect |
| U-7 | Company / project fall protection requirements to drive H-BT-017 controls (boom lift, scissor lift, steel) | PO |
| U-8 | Confirmation of crew terminology and brand aliases (§1.3) as actual Adena usage | PO |
| U-9 | Glove cut-level and other Policy-based controls: company standard vs. per-client | PO |
| U-10 | MSHA applicability for mining-site bolting (phosphate) — Package 001 references are OSHA 1926 only | Architect |
| U-11 | Whether tensioner pressures commonly exceed torque-wrench hose ratings (H-BT-024 control basis) | Architect |
| U-12 | Whether response actions beyond H-BT-023 (e.g., eye flushing for hydraulic fluid spray) belong in controls under Decision 4 | Architect |

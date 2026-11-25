> **Repository Record (AD-008 §6):** Engineer independent review of candidate content. Not approved. Subject to Architect response and Product Owner approval. No application change is authorized by this document.

# Safety Intelligence Library Package 001 — Engineer Independent Review

**Package:** SIL-PKG-001 — Bolt (0013) and Torque (0014), read with SIL-PKG-001-ADDENDUM-01
**Reviewer:** Claude (Engineer)
**Date:** November 25, 2026
**Baseline for comparison:** `A4-LIBRARY-EXPORT.md` (production v1.3.0-p1, commit `8318ddb`)
**Branch:** `revision-a4`

---

## 0. Summary

| Disposition | Count | Records |
|---|---|---|
| Accept as written | 4 | 008, 015, 028, 030 |
| Accept with corrections | 21 | 001–003, 006, 007, 009, 012–014, 016–023, 025–027, 029 |
| Reclassify from core to conditional | 2 | 004, 010 |
| Substantive revision required | 3 | 011, 024, 031 |
| Consolidate (ID retired, not reused) | 1 | 005 → 003 |

- **All eight hazards I proposed earlier (D-1 to D-8) already exist in the package** or can go into an existing record. None needs a new ID.
- **One new candidate hazard is proposed:** H-BT-032.
- **Three things need cross-library references** rather than new records: aerial lift hazards, ladder hazards, and line break/LOTO for flange work.
- **Seven structural findings (S-1 to S-7)** affect how the records will actually behave in Track B. **S-1 and S-3 are the most important.**

**Correction to my earlier finding A-2.** I said production had no bolting coverage. That was overstated. Production steel erection Entry 7 already recognizes `bolt-up`, `spud wrench`, `drift pin` and `erection bolt`, and Entry 3 recognizes `bolt installation`. What production lacks is *torque* coverage and anything specific to powered, hydraulic or pneumatic wrenches.

**Labels used in this review:**
- **OSHA** = regulatory requirement.
- **Spec** = contract or industry specification (RCSC/AISC), which is not OSHA.
- **BP** = best practice.
- **Policy** = company or client policy.

All citations are internal references for validation and must never be shown to users. Each one needs Architect verification before approval.

---

## 1. Structural findings (affect multiple records)

### S-1. The required contexts must be recognizable from what the crew writes
Several conditional records depend on a *state* that crews almost never write:
- "Unsecured structural components" (012)
- "Temporary structural connections" (013)
- "Releasing hoisting equipment" (015)
- "Shared-bolt double connection" (016)
- "Improper structural bolt installation" (031)

Nobody writes "improper bolt installation" in a task step. As written, these records will either never surface or will need to surface every time.

**Proposed:**
- Each required context needs a defined set of **recognition cues** taken from the language crews actually use (examples per record below).
- Where no cue is realistically available, assign **Reasonably Inferred** applicability from Activity + Object, rather than relying on detecting a condition. For example, Bolt + beam, column or connection would infer applicability for 012, 013 and 031.
- This applies Addendum §5 directly: high-consequence records should not be suppressed just because the crew wrote a brief description.

### S-2. Controls need their own applicability
Several records carry controls that are only valid in one context:
- 017: the fall protection method differs between a boom lift, a scissor lift, a ladder and the steel itself.
- 007: heavy-tool handling controls only apply when heavy tools are present.
- 022: two-person coordination only applies when one worker positions the tool and another runs the pump.

**Proposed:** controls inherit their hazard's applicability by default, but can carry an additional context condition. Without this, either generic controls get presented, or tool-specific controls appear for unrelated work. Both violate AD-008 §4 ("practical, specific").

### S-3. Package 001 overlaps production records
Several candidate hazards duplicate, or nearly duplicate, records already in the production baseline:

| Candidate | Production equivalent (A4-LIBRARY-EXPORT) | Relationship |
|---|---|---|
| H-BT-001 Pinch points | Task Entry 7 "Pinch points during bolt-up and alignment" | Near-identical |
| H-BT-002 Cuts | Task Entry 7 "Sharp edges on steel" | Equivalent |
| H-BT-012 Shifting steel | Task Entry 7 "Crushing from shifting steel" | **Identical text** |
| H-BT-013 Instability | Task Entry 7 "Unstable temporary structure condition" | Equivalent |
| H-BT-014 Suspended steel | Task Entry 7 "Suspended load during picks" / "Struck-by from overhead steel" | Overlapping |
| H-BT-017 Fall | Task Entry 7 "Fall exposure at leading edge…"; Entry 8 "Fall from aerial lift platform"; Entry 9 "Fall from ladder" | Overlapping, specific to the access method |
| H-BT-018 Dropped | Task Entry 7 "Dropped objects"; Entry 25 "Dropped objects striking workers below" | Equivalent |
| H-BT-019 Noise | Task Entry 22 / Control Entry 16 | Equivalent |
| H-BT-020 HAV | Task Entry 22 "Vibration exposure (hand-arm)" | Equivalent |
| H-BT-023 Injection | Task Entry 23 "Injection injury from high-pressure fluid" | Equivalent |
| H-BT-025 Hose whip | Task Entry 23 "Hose whip from disconnected line" | Equivalent |

**Architect decision needed:** whether the Track B library will:
- (a) **supersede** these production strings with H-BT records and retire the production equivalents; or
- (b) give production records permanent IDs and have H-BT records **reference** them.

If neither, Track B will show the crew two near-identical suggestions. Here's what happens if both texts are kept:

| Wording difference | Exact-text dedupe in the current engine |
|---|---|
| Identical wording | Collapses them to one |
| Wording differs at all | Lets both through |

This is the main semantic-duplication risk in the package.

**My recommendation is (a).** The H-BT records are better specified and carry controls. Production strings would then be mapped to the H-BT records in the retirement crosswalk.

### S-4. Core records need an object/state constraint for torque-only work
"Check bolt torque on pump flange" or "Re-torque anchor bolts" (existing connections, no fit-up) should not suggest:
- 001 (pinch at holes)
- 012 (shifting steel)
- 014 (suspended member)
- 015 (releasing hoist)
- 016 (double connection)
- 029/030 (drift pins)

**Proposed constraint:** these records apply when Bolt is recognized with a structural member, or when fit-up cues are present ("fit up", "drift", "align", "hang", "set", "connect", "make up"). They do not apply to Torque on an existing connection alone.

### S-5. The object lists widen the scope beyond structural steel
The Bolt and Torque objects include **flanges, flange bolts and anchor bolts**, but every hazard record is structural.

**Flange bolting** in process piping brings line break, residual pressure, process fluid exposure and LOTO. Production already covers these (Task Entry 31; Control Entries 19 and 22).

**Proposed:**
- Flange context should resolve by cross-reference to the existing line-break/LOTO records. **No new H-BT records.**
- Add regression test: *"Break flange and re-torque bolts on acid line"* → torque records + line break records; no structural erection records.

**Anchor bolts:**
- Any field modification of anchor rods requires engineer-of-record approval (**OSHA** 1926.755(b) — verify).
- No hazard record is needed. Flagged for awareness only.

### S-6. Vague words in the controls
"Suitable" or "appropriate" appears in the controls for 001, 007, 008, 017, 018, 019, 020, 022, 026, 029 and 030. AD-008 §4 requires user-facing content to be practical and specific. Corrected wording is proposed per record in §2. Where the specific choice really is site-dependent (for example fall protection method), the control should name the deciding factor rather than say "appropriate."

### S-7. Recognition corrections
| Term (package location) | Issue | Proposed |
|---|---|---|
| "anchor" (Bolt, context-dependent) | Collides with fall protection anchors, rock anchors and drilled anchors (production Task Entry 3). CRF §7 uses this exact word as its ambiguity example. | Remove as a standalone trigger. Keep "anchor bolt(s)" / "anchor rod(s)" as an Object. |
| "splice" (Bolt, context-dependent) | Collides with belt splice (Task Entry 26), rebar splice and cable splice | Keep, but only trigger with a bolt/plate/steel cue |
| "connect", "secure" (Bolt, context-dependent) | These are the primary terms of ACT-0008 Connect and ACT-0009 Secure | Fine as conditional for Bolt, but only with a fastener cue. Must not cross into Bolt's high-confidence tier. |
| "snug-tight" (Torque, context-dependent) | An RCSC joint condition reached by a spud wrench or a few impacts. It is bolting, not controlled torque. | Move to **Bolt high-confidence**. Variants: snug tight, snug-tight, snugged, snug up. |
| "pretension" (Torque, context-dependent) | Package line 15 correctly says pretensioning is method-dependent | High-confidence for structural bolting; recognize both Bolt and Torque. Variants: pretension, pretensioned, pre-tension, tension the bolts. |
| "tension-control bolts" (Torque term) | This is an **Object**, not an activity phrase | Move to Objects. Aliases: TC bolt, TC bolts, tension control bolt, twist-off bolt, F1852, F2280. "TC" alone only with bolt context, because "TC" also means thermocouple in industrial work. |
| "tighten" (Torque, context-dependent) | Without context: ratchet straps, chain binders, tight space | Keep conditional, with a fastener cue. Whole-word matching only (see the production `tig`/"tight" defect). |

**Missing aliases to add** (each needs Architect validation as real Adena crew usage):

| Group | Terms |
|---|---|
| Bolt | bolt up, bolting up, bolt out, make up the connection, run bolts, fit up, fit-up |
| Torque | turn of nut, turn-of-nut, match mark, calibrated wrench, torque check, run down |
| Powered tools | impact, impact gun, rattle gun, torque gun, torque multiplier, reaction arm, shear wrench, TC gun |
| Hydraulic | hydraulic wrench, hydraulic torque wrench, square drive, low profile wrench, pump |
| Bolt grades | A325, A490, F3125, high-strength bolts, slip-critical |
| Hand tools | spud wrench, drift pin, sleever bar, bull pin |
| Verification | DTI, direct tension indicator, load indicating washer, Skidmore |
| Brand aliases (recognition only) | HyTorc |

Production already uses JLG and Genie as aliases, so brand aliases are consistent with existing practice.

---

## 2. Record-by-record review

Format: **Disposition** — findings — proposed user-facing correction — internal reference.

### Core records

**H-BT-001 Pinch points during bolt installation** — *Accept with corrections*
- Applies only when parts are being fitted (S-4).
- Production Entry 7 duplicate (S-3).
- Proposed controls:
  - "Never use fingers to check or align holes — use a drift pin or spud wrench."
  - "Keep hands off mating surfaces while plies are drawn together."
- Ref: BP.

**H-BT-002 Cuts from sharp metal edges or burrs** — *Accept with corrections*
- The current control is PPE only, which is the lowest level of the hierarchy of controls.
- Add a source control: "File or grind burrs on plates and bolt holes where practical."
- Glove type: OSHA requires PPE where a hazard exists. Cut-level glove mandates are **Policy** (many Adena GCs require them); keep the distinction internally.
- Ref: OSHA 1926.95, 1926.28; Policy.

**H-BT-003 Wrench or socket slippage** — *Accept with corrections; absorbs 005*
- Proposed hazard text: "Wrench or socket slipping off the fastener, striking hands against steel."
- Proposed controls:
  - "Use the correct size wrench or socket, fully seated on the nut."
  - "Do not use wrenches with sprung or worn jaws."
  - "Pull toward your body rather than push where possible, with knuckles clear of steel."
  - "Do not extend wrenches with cheater pipe unless the wrench is designed for it."
- Ref: OSHA 1926.301(b) (sprung jaws); BP.

**H-BT-004 Sudden tool movement from torque reaction** — *Reclassify: conditional*
- Kickback of the tool body is a *powered handheld* mechanism. The manual-wrench equivalent is already covered by 003 (slip), 009 (balance) and 011 (breakaway). Leaving it as core duplicates them.
- Required context: handheld powered wrench without a reaction arm (impact, battery, corded or pneumatic).
- Proposed controls:
  - "Brace for the reaction before pulling the trigger; use the side handle where provided."
  - "Set direction and torque or speed before starting."
  - "Expect the tool to twist when the nut seats or stalls."
- Ref: manufacturer instructions; BP.

**H-BT-005 Hand impact against adjacent steel** — *Consolidate into H-BT-003*
- This is the injury result of the same event as 003 (slip or breakaway), not a separate mechanism.
- Retire the ID with the note "Consolidated into H-BT-003." **Do not reuse the ID.**

**H-BT-006 Tool or socket failure under load** — *Accept with corrections*
- Proposed controls:
  - "Inspect wrenches, sockets and extensions before use. Tag and remove cracked, worn or damaged tools."
  - "Use only extensions and multipliers rated for the torque applied."
- Ref: OSHA 1926.301(a), 1926.300(a).

**H-BT-007 Musculoskeletal strain from excessive force** — *Accept with corrections; absorbs tool handling strain (former D-7)*
- Proposed hazard text: "Strain from applying force or from handling heavy torque tools."
- Proposed controls:
  - Core: "Use a powered or multiplier wrench instead of forcing a manual wrench."
  - Core: "Set up so you pull at waist-to-chest height, not overhead or twisted."
  - Conditional on hydraulic wrench, large impact or pump (S-2): "Use two people or a hand line to move heavy wrench heads and pumps — do not climb or ride up carrying them."
- Ref: BP.

**H-BT-008 Repetitive hand and wrist strain** — *Accept*
- Applicability scales with volume (field bolting, bolt-up of floors). Rank within the core group as lower consequence.
- Ref: BP.

**H-BT-009 Loss of balance during tightening** — *Accept with corrections*
- At ground level this is a fall at the same level. At elevation it hands off to 017.
- Proposed controls:
  - "Set your feet and brace before applying force — expect the nut to break free."
  - Aerial lift (S-2): "Stand on the platform floor; never climb or stand on rails to reach a bolt."
  - Ladder (S-2): "Do not apply heavy wrench force from a ladder — reposition or use a lift."
- Ref: OSHA 1926.453(b)(2)(iv) (lift); 1926.1053(b)(22) (ladder, verify); BP.

**H-BT-010 Finger injury from rotating fasteners** — *Reclassify: conditional on powered wrench; rename*
- Entanglement is a powered-tool mechanism, so this should not be core.
- Proposed hazard text: "Fingers, gloves, sleeves or lanyards caught in rotating socket or extension."
- Proposed controls:
  - "Never hold the socket or extension while the tool runs."
  - "Secure loose sleeves, and keep lanyards and tool tethers clear of the spinning socket."
- The lanyard snag at elevation is a real exposure that isn't captured anywhere else.
- Ref: manufacturer instructions; BP.

**H-BT-011 Unexpected release of mechanical force** — *Substantive revision*
- As written, this overlaps 003, 004, 006, 012 and 029 and has no clear boundary. Its control ("relieve applied force in a controlled manner") can't be acted on during bolting.
- The distinct bolting mechanism is **fastener failure**: the bolt snaps from over-tightening, a seized nut breaks free suddenly, or a stripped thread releases. This is separate from the tool slipping off (003) or the tool breaking (006).
- Proposed hazard text: "Bolt snapping or seized nut breaking loose under applied force."
- Proposed controls:
  - "Do not exceed the specified tightening."
  - "Replace bolts that have stretched, galled or been over-tightened."
  - "Expect sudden release on rusted or seized nuts — brace and keep clear of the swing."
- Ref: Spec (RCSC, bolt reuse limits); BP.
- Spring-back of misaligned plies when pins or bolts are pulled stays with 012.

### Conditional records

**H-BT-012 Crushing from shifting steel** — *Accept with corrections*
- Production duplicate (S-3).
- Recognition cues (S-1): fit up, drift, align, hang, set, connect, make up, plate, splice, beam, column, brace.
- Inferred applicability from Bolt + structural member.
- Proposed controls:
  - "Keep hands and body out from between steel members until the connection is made."
  - "Pull pins and loosen bolts with the member supported — misaligned steel can spring when released."
- Ref: OSHA 1926.754(a) (verify); BP.

**H-BT-013 Structural instability or collapse** — *Accept with corrections*
- Cues: temporary bolts, erection bolts, guy, guying, bracing, temporary connection, plumb up.
- Inferred from Bolt + structural member (S-1).
- Proposed controls:
  - "Do not remove temporary bolts, bracing or guying until the permanent connection is complete and the erection supervisor releases it."
  - "Follow the erection plan sequence."
- Ref: OSHA 1926.754(a), 1926.752(e) (site-specific erection plan, where used) (verify).

**H-BT-014 Struck-by or caught-between suspended steel** — *Accept with corrections*
- Bolting on a member that is still hanging is the **connector's** initial connection. Applicability should key on "hang", "set", "connect", "crane", "pick" or "on the hook" combined with Bolt.
- Proposed controls:
  - "Stay out from under the load; only the connectors make the initial connection."
  - "Use tag lines; keep hands off the load except at the connection."
  - "Maintain direct communication with the signal person."
- Ref: OSHA 1926.753(d), 1926.760(b) (connectors) (verify).

**H-BT-015 Member movement or collapse on releasing hoisting equipment** — *Accept*
- Keep the user-facing text as written. It correctly avoids a universal bolt count.
- Internal reference must be by member type, per the Architect's instruction:
  - Solid-web members on final placement: at least two bolts per connection, wrench-tight or as the EOR specifies — 1926.756(a)(1).
  - Solid-web diagonal bracing: one bolt per connection — 1926.756(a)(2).
  - Joists: 1926.757.
  - Columns and anchor rods: 1926.755.
- (verify all)

**H-BT-016 Collapse from removal of existing connection bolts (double connection)** — *Accept with corrections*
- Proposed control wording (more specific): "At a shared connection, keep at least one bolt with its nut tight in the first member — unless a seat or approved support device holds it — before installing the second member."
- Cues: double connection, both sides of the column, shared holes, beams over column, through the web.
- Ref: OSHA 1926.756(c)(1) (verify).

**H-BT-017 Fall from elevated work position** — *Accept with corrections*
- The current control is generic. Controls must vary by access means (S-2):

| Access means | Proposed control | Ref |
|---|---|---|
| Steel erection, bolt-up crew above 15 ft | Fall protection required | OSHA 1926.760(a)(1) |
| Connectors | The connector provisions apply to the initial connection only | 1926.760(b) |
| Bolt-up crews | Not connectors once the member is released; the general 15-ft rule applies | **Architect to verify this interpretation** |
| Boom lift | Harness and lanyard tied off to the basket anchor | OSHA 1926.453(b)(2)(v) |
| Scissor lift | Guardrails are the system; harness use is **Policy/manufacturer** | — |
| Ladder | Cross-reference to production Entry 9 | — |

- **Aerial lift resolution:** cross-reference production Entry 8 records. The highest-consequence one in this context is **"Crushing / caught-between at overhead obstructions."** The boom lift operator gets pinned against steel while positioning to bolt.
  - The aerial lift cross-reference must rank that record high when Bolt + boom lift + structural member are recognized.
  - Associated controls (cross-reference): "Watch overhead clearance while positioning; move slowly near steel." Secondary guarding is **BP/Policy**.

**H-BT-018 Dropped bolts, sockets and tools** — *Accept with corrections; absorbs workers-below exposure (former D-8)*
- Proposed controls:
  - "Keep bolts, nuts and washers in a bolt bag or bucket — never loose on flanges or beams."
  - "Tether tools at height."
  - "Barricade or control the area below; no one works below without overhead protection."
- Production duplicates: Entries 7 and 25 (S-3).
- Ref: OSHA 1926.759(a), 1926.759(b) (verify).

**H-BT-019 Noise exposure** — *Accept with corrections*
- Required context is too narrow. Should be: impact wrench, pneumatic wrench, hammering or driving pins.
- Proposed control: "Wear hearing protection when running impact or air tools, and anyone working near them too."
- Ref: OSHA 1926.52, 1926.101.

**H-BT-020 Hand-arm vibration** — *Accept with corrections*
- Context: impact or pneumatic wrench.
- No OSHA standard applies. Treat as BP (ISO 5349 / ANSI S2.70 — verify).
- Proposed controls:
  - "Rotate impact work across the crew on long bolt-up runs."
  - "Keep tools maintained."
  - "Do not rely on anti-vibration gloves alone."
- Their limited effectiveness should be stated internally.

**H-BT-021 Socket or attachment ejection** — *Accept with corrections*
- Context should be any powered wrench, not only impact.
- Proposed controls:
  - "Use impact-rated sockets only — chrome hand sockets can shatter on impact tools."
  - "Use the retaining pin and ring."
  - "Wear safety glasses."
- 1926.302(b)(2) (retainers) covers pneumatic *percussion* tools. **Verify whether it applies to rotary impact wrenches**; otherwise this is manufacturer/BP.

**H-BT-022 Crushing at torque reaction point** — *Accept with corrections*
- Context: hydraulic torque wrench **or any torque multiplier with a reaction arm** (electric, battery, pneumatic). Add aliases.
- Proposed controls:
  - "Set the reaction arm against a solid surface and confirm the reaction direction before pressurizing."
  - "Hands, hoses and body clear of the arm and the reaction point."
  - Conditional on two-person operation: "The person on the pump runs it only on a clear signal from the person at the tool."
- The two-person miscommunication is a primary cause of reaction-point crush.
- Ref: manufacturer instructions; BP.

**H-BT-023 High-pressure fluid injection** — *Accept with corrections*
- Proposed controls (added):
  - "Confirm the gauge reads zero before disconnecting."
  - "Do not kink, step on or drive over hoses."
  - **"Get immediate medical attention for any injection injury, even if it looks minor."**
- That last control is the most important field knowledge for this hazard. Injection injuries often look trivial and need surgical treatment. **Architect decision:** response actions in the control list, or kept separate.
- Ref: OSHA 1926.302(d)(2); BP.

**H-BT-024 Hose rupture or fitting separation** — *Substantive revision*
- As written, this is the *cause* of 023 (injection) and 025 (whip). It duplicates both.
- Proposed scope: **hydraulic only**. Hazard text: "Hydraulic hose or fitting failure — fluid spray to the eyes and face, slippery surfaces."
- Proposed controls:
  - "Use hoses and couplers rated for the pump's maximum pressure."
  - "Fully engage couplers."
  - "Clean up spilled fluid before continuing."
- The pneumatic failure mode stays in 025.
- Ref: OSHA 1926.302(d)(2).

**H-BT-025 Compressed-air hose whip** — *Accept with corrections*
- Proposed controls:
  - "Use whip checks at every coupling and locking-type couplers."
  - "Shut off and bleed the air before disconnecting."
- Internal:
  - Positive connection to the tool — 1926.302(b)(1).
  - Safety (excess-flow) device for hoses over ½" ID — 1926.302(b)(7).
- (verify)

**H-BT-026 Electrical shock** — *Accept with corrections; absorbs hydraulic pump power*
- Context: corded electric wrench **or an electrically driven hydraulic pump**.
- Proposed controls:
  - "Inspect cords and plugs."
  - "Plug into GFCI protection."
  - "Keep cords out of water and away from pinch points."
- Battery tools: no shock record needed. Their other hazards are covered by 004, 010 and 021.
- Ref: OSHA 1926.404(b)(1).

**H-BT-027 Trips from hoses and electrical cords** — *Accept with corrections*
- Context: also pneumatic.
- Add an aerial lift control (S-2): "Secure hoses and cords to the lift so they can't snag on steel during travel."
- Ref: BP; production Control Entry 15.

**H-BT-028 Falling or ejected bolt splines** — *Accept*
- Add aliases (S-7).
- Consider adding: "Use the wrench's spline ejector into a bag or bucket."
- Ref: manufacturer instructions.

**H-BT-029 Flying metal fragments** — *Accept with corrections; absorbs drift-pin ejection (former D-4)*
- Proposed hazard text: "Flying fragments or ejected drift pin when striking."
- Proposed controls (added):
  - "Keep your partner and others clear of the far side of the connection when driving pins."
  - "Control the pin exit."
- Ref: OSHA 1926.301(c) (mushroomed heads), 1926.102.

**H-BT-030 Hand injury from missed hammer strikes** — *Accept*
- Minor: replace "suitable holding tools" with "Use a pin holder or long-handled tool to hold pins."

**H-BT-031 Connection failure from improper installation** — *Substantive revision*
- **Recognition (S-1):** nobody writes "improper." Assign **Reasonably Inferred** applicability whenever structural bolting, pretensioning or torquing is recognized.
- **Classification:** this is **Spec** (RCSC/AISC via the contract documents) with safety consequences. It is not OSHA, except the temporary-connection requirements already in 013, 015 and 016.
- **Controls must be specific to the method.** The cues are already in the S-7 aliases. Proposed:

| Method / cue | Control |
|---|---|
| General | "Use the bolt grade, length and washers called for on the drawings." |
| General | "Tighten in pattern from the stiffest part of the joint outward." |
| Turn-of-nut | "Snug tight first, match mark, then turn the specified rotation." |
| Calibrated wrench | "Verify wrench calibration daily with the bolts being installed." |
| TC bolts | "Spline must be sheared off — a bolt with spline intact is not tensioned." |
| DTI | "Verify DTI gaps or indicator squirt per manufacturer." |
| Pretensioned joints | "Complete pre-installation verification before production bolting." |
| Reuse | "Do not reuse A490, F2280 or galvanized bolts." |
| Storage | "Keep bolts clean, dry and lubricated as delivered." |

- Ref: Spec — RCSC *Specification for Structural Joints Using High-Strength Bolts*; AISC 303/360. Exact provisions need Architect verification, especially the reuse rules.

---

## 3. Proposed new candidate record

Before assigning this ID I checked it against all 31 records and the production baseline. There's no equivalent.

| ID (provisional) | Required context | Hazard | Proposed controls | Ref |
|---|---|---|---|---|
| H-BT-032 | Bolting or torquing overhead (cues: overhead, above head, underside, bottom flange, ceiling; or inferred from an aerial lift below steel) | Scale, rust or debris falling into eyes during overhead bolting | "Wear safety glasses; add a face shield or goggles for sustained overhead impact work." "Position to avoid looking straight up into the work." | OSHA 1926.102; BP |

**Not proposed as records, handled by cross-reference:**
- Aerial lift hazards: production Entry 8, with emphasis on overhead crush.
- Ladder hazards: production Entry 9.
- Flange line break and LOTO: production Task Entry 31; Control Entries 19 and 22.

---

## 4. Addendum §2 process coverage check

| Confirmed process | Covered by |
|---|---|
| Manual bolt installation | 001, 002, 003, 012–016, 029, 030, 031 |
| Manual wrench tightening | 003, 006, 007, 008, 009, 011 |
| Manual torque wrench | 003, 006, 007, 009, 011, 031 |
| Powered impact wrench | 004, 010, 019, 020, 021 |
| Electric / battery torque wrench | 004, 010, 021, 022 (if reaction arm), 026 (corded only) |
| Hydraulic torque wrench | 007 (handling), 022, 023, 024, 026 (electric pump), 027 |
| Pneumatic torque wrench | 004, 019, 020, 022 (if reaction arm), 025, 027 |
| TC bolt installation | 028, 031, plus powered wrench records |
| Pretensioning by specified method | 031 (method-specific controls) |
| Ground level | Core records; 009 at the same level |
| Elevated | 017, 018, 032, aerial lift and ladder cross-references |
| Suspended structural components | 014, 015 |
| Temporary structural connections | 013, 015, 016 |

**No confirmed process is left uncovered after the corrections above.**

---

## 5. Regression scenarios — proposed additions

The package scenarios are adequate for testing what *should* match. Add these, mostly tests for things that should **not** match:

1. "Install fall protection anchor" → must **not** recognize Bolt.
2. "Splice conveyor belt" → must **not** recognize Bolt.
3. "Tighten ratchet straps on load" → must **not** recognize Torque.
4. "Work in tight space" → no welding (`tig`) and no Torque.
5. "Check torque on pump flange bolts" → Torque core records; **no** 001, 012–016, 029/030.
6. "Break flange and re-torque bolts on acid line" → Torque plus line break/LOTO cross-reference; no structural records.
7. "Bolt up beam connections from boom lift" → includes the overhead-crush cross-reference ranked high.

---

## 6. Items requiring Architect decision

1. S-3: supersede or reference the production records.
2. S-2: control-level applicability conditions.
3. Whether response actions belong in control lists (H-BT-023 medical attention).
4. Whether bolt-up crews are outside the connector provisions (H-BT-017 internal interpretation).
5. Whether 1926.302(b)(2) applies to rotary impact wrenches (H-BT-021).
6. Validation of the S-7 recognition aliases as real Adena crew usage.
7. Whether hydraulic bolt *tensioners* (stud tensioning on flanges) are in Adena's scope. They aren't in Addendum §2. If they are, stud ejection on over-stroke is a distinct high-consequence hazard needing its own record.

No application changes were made or are proposed by this review.

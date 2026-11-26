> **Repository Record (AD-008 §6):** Engineer reconciliation of the SIL-PKG-004 candidate (Rigging and Hoisting), revision r2 — r1 plus Architect Response 001 and SIL PO Decision 007 — against the v1.4.1-p1 canonical library. Candidate under review — not approved. Nothing in production is changed by this document. No Package 004 implementation is authorized.

# SIL-PKG-004 — Rigging and Hoisting (Reconciled r2)

**Candidate:** `SIL-PKG-004.md` (Architect, Candidate 1.0, November 26, 2026) · **Baseline:** v1.4.1-p1 (122 hazard IDs, 418 controls, 10 policies) · **Reviewed by:** Claude (Engineer), November 26, 2026 · **Revisions:** r1 `637b067` · r2 Architect Response 001 and SIL PO Decision 007 (§11) · **Companion records:** `SIL-PKG-004-ENGINEER-REVIEW.md`, `SIL-PKG-004-PRODUCTION-CROSSWALK.md`, `SIL-PKG-004-REGRESSION.md`

## 1. Summary

| Item | Candidate | Reconciled |
|---|---|---|
| Hazard records | 75 provisional (H-RH-001 to H-RH-075) | **39 new canonical records** — 38 keep their candidate IDs, plus H-RH-076 (multiple-lift rigging) added by Architect Response 001 · **12** consolidated into 7 existing records (5 need a text generalization, T-15 to T-19) · **25** consolidated into a retained new record. All 76 IDs are registered; the 37 consolidated IDs are retired and never reused. |
| Controls | 161 candidate lines (§5) | **109 new canonical controls**, proposed C-000419 to C-000527 (6 Engineer additions for §4 hazards that had no candidate control; 9 added in r2 for Architect Response 001; 6 personnel-hoisting controls **withheld** pending validation) · 5 candidate lines answered by existing controls (C-000033, C-000231, C-000242, C-000243, C-000247, C-000407) · 64 candidate lines merged into a control drafted from another line (duplicates across activity groups — §5: do not create duplicate controls). Next available after registration: C-000528. |
| Text revisions of approved records | — | T-15 to T-19 (H-BT-014, H-HW-037, H-BT-007, H-BT-002, H-BT-015) — prior wording kept so saved JSAs still map |
| Policy records | 8 PO decisions requested (§8) | **None** — SIL PO Decision 007: no Adena-specific requirements beyond the defaults; apply regulatory, manufacturer and project/client requirements, the more protective where they overlap. |
| Regression scenarios | 50 required (§10) | 50 required + 9 negative + 8 mixed + 12 required by Architect Response 001 = 79 (`SIL-PKG-004-REGRESSION.md`) |

Identifiers above are proposed. Hazard IDs H-RH-001 to H-RH-075 and controls C-000419 to C-000527 are entered in the permanent registries only after Architect validation; until then this document is the record of the proposal.

## 2. Hazard reconciliation (75 candidate records + 1 added by Architect Response 001)

| Candidate | Candidate hazard | Disposition | Canonical record |
|---|---|---|---|
| H-RH-001 | Suspended load striking personnel | Consolidated into existing record, generalized by T-15 — retired | H-BT-014 — "Struck by, or caught between, a suspended or moving load" |
| H-RH-002 | Falling load from rigging or lifting equipment failure | **New canonical record** (ID kept) | H-RH-002 — "Load falling from rigging, hardware or lifting-equipment failure" |
| H-RH-003 | Rigging failure from excessive loading | **New canonical record** (ID kept) | H-RH-003 — "Rigging overload from load weight, sling angle, hitch or unequal leg loading" |
| H-RH-004 | Increased sling tension from unfavorable sling angles | Consolidated into retained Package 004 record — retired | H-RH-003 — "Rigging overload from load weight, sling angle, hitch or unequal leg loading" |
| H-RH-005 | Unequal loading of sling legs or lifting points | Consolidated into retained Package 004 record — retired | H-RH-003 — "Rigging overload from load weight, sling angle, hitch or unequal leg loading" |
| H-RH-006 | Load shifting or rotating from an uncontrolled center of gravity | **New canonical record** (ID kept) | H-RH-006 — "Load shifting, tipping or rotating from an unknown or changing center of gravity, including during tailing, upending or turning" |
| H-RH-007 | Load slipping or escaping from the rigging configuration | **New canonical record** (ID kept) | H-RH-007 — "Load slipping, or rigging disengaging, as the load changes orientation, is landed or the rigging slackens" |
| H-RH-008 | Sling damage from sharp edges, abrasion or inadequate bearing surfaces | **New canonical record** (ID kept) | H-RH-008 — "Sling cut or damaged by sharp edges, abrasion or inadequate bearing surfaces" |
| H-RH-009 | Rigging failure from incompatible or improperly connected hardware | Consolidated into retained Package 004 record — retired | H-RH-002 — "Load falling from rigging, hardware or lifting-equipment failure" |
| H-RH-010 | Lifting point failure from inadequate capacity or improper loading direction | **New canonical record** (ID kept) | H-RH-010 — "Lifting point, lug, eye bolt or lifting insert failure from inadequate capacity, wrong loading direction or insufficient concrete strength" |
| H-RH-011 | Shock loading from sudden movement, snagging or abrupt load release | **New canonical record** (ID kept) | H-RH-011 — "Shock loading from sudden movement, snagging or abrupt release" |
| H-RH-012 | Rigging failure from damaged, deteriorated or defective equipment | Consolidated into retained Package 004 record — retired | H-RH-002 — "Load falling from rigging, hardware or lifting-equipment failure" |
| H-RH-013 | Uncontrolled movement of loose components within a lifted assembly | Consolidated into existing record — retired | H-BT-018 — "Dropped tools, equipment, hardware or materials striking personnel below" |
| H-RH-014 | Rigging disengagement during slackening or changes in load orientation | Consolidated into retained Package 004 record — retired | H-RH-007 — "Load slipping, or rigging disengaging, as the load changes orientation, is landed or the rigging slackens" |
| H-RH-015 | Load or rigging damage from excessive heat, chemicals or environmental exposure | Consolidated into existing record, generalized by T-16 — retired | H-HW-037 — "Rigging or lifting equipment weakened by heat, welding current, chemicals or environmental exposure" |
| H-RH-016 | Hands or fingers caught between rigging and the load | **New canonical record** (ID kept) | H-RH-016 — "Hands or fingers caught between rigging, hardware and the load" |
| H-RH-017 | Personnel crushed between a moving load and a fixed object | Consolidated into existing record, generalized by T-15 — retired | H-BT-014 — "Struck by, or caught between, a suspended or moving load" |
| H-RH-018 | Personnel caught between the load and its landing surface | **New canonical record** (ID kept) | H-RH-018 — "Hands or feet caught between the load and its landing surface or supports" |
| H-RH-019 | Personnel struck by swinging or rotating loads | Consolidated into existing record, generalized by T-15 — retired | H-BT-014 — "Struck by, or caught between, a suspended or moving load" |
| H-RH-020 | Personnel caught in crane counterweight or rotating superstructure areas | **New canonical record** (ID kept) | H-RH-020 — "Struck or caught by the crane's rotating superstructure, counterweight or other moving crane components" |
| H-RH-021 | Personnel struck by moving crane components or lifting equipment | Consolidated into retained Package 004 record — retired | H-RH-020 — "Struck or caught by the crane's rotating superstructure, counterweight or other moving crane components" |
| H-RH-022 | Entanglement in tag lines, rigging or moving ropes | **New canonical record** (ID kept) | H-RH-022 — "Entangled in, or pulled off balance by, tag lines, ropes or a moving load" |
| H-RH-023 | Personnel struck by tensioned rigging or ropes releasing stored energy | **New canonical record** (ID kept) | H-RH-023 — "Struck by tensioned rigging, rope or a pulling device releasing its energy" |
| H-RH-024 | Personnel pulled off balance while attempting to control a load | Consolidated into retained Package 004 record — retired | H-RH-022 — "Entangled in, or pulled off balance by, tag lines, ropes or a moving load" |
| H-RH-025 | Falls while attaching, adjusting or removing rigging at elevation | Consolidated into existing record — retired | H-BT-017 — "Fall from an elevated work position" |
| H-RH-026 | Dropped rigging, tools or hardware from elevation | Consolidated into existing record — retired | H-BT-018 — "Dropped tools, equipment, hardware or materials striking personnel below" |
| H-RH-027 | Musculoskeletal strain from handling heavy rigging equipment | Consolidated into existing record, generalized by T-17 — retired | H-BT-007 — "Strain from applying force or from handling heavy torque, tensioning, drilling, fastening or rigging equipment" |
| H-RH-028 | Cuts and punctures from damaged wire rope, sharp hardware or load edges | Consolidated into existing record, generalized by T-18 — retired | H-BT-002 — "Cuts and punctures from sharp metal surfaces, burrs, swarf, broken wire-rope strands, pipe ends and flanges" |
| H-RH-029 | Crane overturning from inadequate ground support or loss of stability | **New canonical record** (ID kept) | H-RH-029 — "Crane or lifting equipment overturning from overload, inadequate support, improper set-up or loss of stability" |
| H-RH-030 | Outrigger or support failure from unsuitable bearing conditions | **New canonical record** (ID kept) | H-RH-030 — "Outrigger, track or support failure from inadequate ground bearing, voids, vaults, utilities or nearby excavations" |
| H-RH-031 | Ground collapse over underground utilities, voids, vaults or excavations | Consolidated into retained Package 004 record — retired | H-RH-030 — "Outrigger, track or support failure from inadequate ground bearing, voids, vaults, utilities or nearby excavations" |
| H-RH-032 | Crane overload from incorrect load weight or operating configuration | **New canonical record** (ID kept) | H-RH-032 — "Equipment overload from incorrect load weight, radius, configuration or attachment capacity" |
| H-RH-033 | Reduced lifting capacity as operating radius increases | Consolidated into retained Package 004 record — retired | H-RH-032 — "Equipment overload from incorrect load weight, radius, configuration or attachment capacity" |
| H-RH-034 | Crane instability from improper setup, leveling or outrigger configuration | Consolidated into retained Package 004 record — retired | H-RH-029 — "Crane or lifting equipment overturning from overload, inadequate support, improper set-up or loss of stability" |
| H-RH-035 | Boom or structural damage from side loading | **New canonical record** (ID kept) | H-RH-035 — "Side loading of the boom, hook, hoist or lifting hardware" |
| H-RH-036 | Crane or equipment instability while traveling with a suspended load | **New canonical record** (ID kept) | H-RH-036 — "Lifting equipment unstable or out of control while traveling with a load, on slopes or on poor surfaces" |
| H-RH-037 | Uncontrolled equipment movement on slopes or unsuitable travel surfaces | Consolidated into retained Package 004 record — retired | H-RH-036 — "Lifting equipment unstable or out of control while traveling with a load, on slopes or on poor surfaces" |
| H-RH-038 | Collision between cranes, booms, structures or adjacent equipment | **New canonical record** (ID kept) | H-RH-038 — "Load, boom or crane colliding with structures, other equipment or adjacent operations" |
| H-RH-039 | Crane assembly or disassembly instability | **New canonical record** (ID kept) | H-RH-039 — "Boom, jib, counterweight or outrigger components moving, falling or becoming unstable during crane assembly or disassembly" |
| H-RH-040 | Crushing or uncontrolled movement during counterweight, outrigger or boom assembly | Consolidated into retained Package 004 record — retired | H-RH-039 — "Boom, jib, counterweight or outrigger components moving, falling or becoming unstable during crane assembly or disassembly" |
| H-RH-041 | Two-blocking or contact between the load block and upper boom components | **New canonical record** (ID kept) | H-RH-041 — "Two-blocking — the load block contacting the boom tip or upper boom components" |
| H-RH-042 | Uncontrolled load descent from brake, hoist or mechanical failure | **New canonical record** (ID kept) | H-RH-042 — "Uncontrolled load descent or loss of load control from hoist, brake, hydraulic or power failure" |
| H-RH-043 | Loss of load control from hydraulic, electrical or power-system failure | Consolidated into retained Package 004 record — retired | H-RH-042 — "Uncontrolled load descent or loss of load control from hoist, brake, hydraulic or power failure" |
| H-RH-044 | Electrical contact or arcing involving overhead power lines | **New canonical record** (ID kept) | H-RH-044 — "Electrical contact or arcing from overhead power lines to the crane, load, rigging or tag lines" |
| H-RH-045 | Electrical exposure from an energized crane, load or rigging system | Consolidated into retained Package 004 record — retired | H-RH-044 — "Electrical contact or arcing from overhead power lines to the crane, load, rigging or tag lines" |
| H-RH-046 | Uncontrolled load movement from wind or gusts | **New canonical record** (ID kept) | H-RH-046 — "Wind or gusts moving the load or reducing crane stability and capacity" |
| H-RH-047 | Reduced crane stability or capacity from wind loading | Consolidated into retained Package 004 record — retired | H-RH-046 — "Wind or gusts moving the load or reducing crane stability and capacity" |
| H-RH-048 | Lightning exposure during lifting operations | **New canonical record** (ID kept) | H-RH-048 — "Lightning strike exposure" |
| H-RH-049 | Reduced visibility of personnel, loads or obstructions | **New canonical record** (ID kept) | H-RH-049 — "Operator or signal person unable to see the load, personnel, landing area or obstructions" |
| H-RH-050 | Loss of communication between operator, signal person and rigging personnel | **New canonical record** (ID kept) | H-RH-050 — "Loss of communication, or conflicting or misunderstood signals, between the operator, signal person and riggers" |
| H-RH-051 | Conflicting or misunderstood lifting instructions | Consolidated into retained Package 004 record — retired | H-RH-050 — "Loss of communication, or conflicting or misunderstood signals, between the operator, signal person and riggers" |
| H-RH-052 | Unauthorized personnel entering the lifting or landing area | Consolidated into existing record, generalized by T-15 — retired | H-BT-014 — "Struck by, or caught between, a suspended or moving load" |
| H-RH-053 | Load collision with structures, scaffolding, utilities or adjacent operations | Consolidated into retained Package 004 record — retired | H-RH-038 — "Load, boom or crane colliding with structures, other equipment or adjacent operations" |
| H-RH-054 | Uncontrolled movement caused by snagged or obstructed loads | **New canonical record** (ID kept) | H-RH-054 — "Snagged or obstructed load moving unexpectedly" |
| H-RH-055 | Reduced traction or equipment stability from rain, mud, ice or surface contamination | Consolidated into retained Package 004 record — retired | H-RH-036 — "Lifting equipment unstable or out of control while traveling with a load, on slopes or on poor surfaces" |
| H-RH-056 | Unequal or changing load distribution during multiple-crane lifts | **New canonical record** (ID kept) | H-RH-056 — "Unequal or shifting load share between cranes, or uncontrolled transfer between lifting devices" |
| H-RH-057 | Uncontrolled load transfer between lifting devices | Consolidated into retained Package 004 record — retired | H-RH-056 — "Unequal or shifting load share between cranes, or uncontrolled transfer between lifting devices" |
| H-RH-058 | Sudden center-of-gravity changes during upending, tailing or rotation | Consolidated into retained Package 004 record — retired | H-RH-006 — "Load shifting, tipping or rotating from an unknown or changing center of gravity, including during tailing, upending or turning" |
| H-RH-059 | Load failure from inadequate temporary reinforcement or structural rigidity | **New canonical record** (ID kept) | H-RH-059 — "Load buckling, bending or breaking from inadequate stiffness or temporary bracing" |
| H-RH-060 | Failure of supporting structures used to suspend hoists or rigging | **New canonical record** (ID kept) | H-RH-060 — "Failure, displacement or unintended travel of the beam clamp, trolley, structure or anchorage supporting a hoist, winch or pulling device" |
| H-RH-061 | Uncontrolled movement from improper winch or pulling-device anchorage | Consolidated into retained Package 004 record — retired | H-RH-060 — "Failure, displacement or unintended travel of the beam clamp, trolley, structure or anchorage supporting a hoist, winch or pulling device" |
| H-RH-062 | Rope or cable failure from improper reeving, bending or sheave compatibility | **New canonical record** (ID kept) | H-RH-062 — "Rope, block or sheave failure from improper reeving, bending or block loading" |
| H-RH-063 | Load release following loss of vacuum or magnetic holding force | **New canonical record** (ID kept) | H-RH-063 — "Load released or slipping from a lifting clamp, vacuum lifter or lifting magnet" |
| H-RH-064 | Plate or beam slipping from an incorrectly applied lifting clamp | Consolidated into retained Package 004 record — retired | H-RH-063 — "Load released or slipping from a lifting clamp, vacuum lifter or lifting magnet" |
| H-RH-065 | Precast lifting insert or surrounding concrete failure | Consolidated into retained Package 004 record — retired | H-RH-010 — "Lifting point, lug, eye bolt or lifting insert failure from inadequate capacity, wrong loading direction or insufficient concrete strength" |
| H-RH-066 | Load displacement from unapproved forklift or telehandler lifting attachments | **New canonical record** (ID kept) | H-RH-066 — "Load falling or equipment tipping from an unapproved or misapplied forklift, telehandler or excavator lifting attachment" |
| H-RH-067 | Equipment overload from incorrect suspended-load configuration or attachment capacity | Consolidated into retained Package 004 record — retired | H-RH-032 — "Equipment overload from incorrect load weight, radius, configuration or attachment capacity" |
| H-RH-068 | Uncontrolled movement of a load during landing or rigging removal | Consolidated into existing record, generalized by T-19 — retired | H-BT-015 — "Load or structural member moving, tipping or collapsing when the rigging is slackened or released" |
| H-RH-069 | Load collapse from inadequate blocking, cribbing or temporary support | **New canonical record** (ID kept) | H-RH-069 — "Load shifting or collapsing off blocking, cribbing or temporary supports, or displaced cribbing striking personnel" |
| H-RH-070 | Premature rigging release before the load is adequately secured | Consolidated into existing record, generalized by T-19 — retired | H-BT-015 — "Load or structural member moving, tipping or collapsing when the rigging is slackened or released" |
| H-RH-071 | Uncontrolled movement from residual connections, attachments or process lines during equipment removal | **New canonical record** (ID kept) | H-RH-071 — "Load held or released unexpectedly by residual fasteners, connections, attachments or process lines during equipment removal" |
| H-RH-072 | Personnel struck by displaced blocking or cribbing under load | Consolidated into retained Package 004 record — retired | H-RH-069 — "Load shifting or collapsing off blocking, cribbing or temporary supports, or displaced cribbing striking personnel" |
| H-RH-073 | Failure of personnel lifting equipment or its supporting system | **New canonical record** (ID kept) | H-RH-073 — "Personnel platform, suspension system or supporting equipment failure" |
| H-RH-074 | Personnel trapped, suspended or stranded during personnel lifting operations | **New canonical record** (ID kept) | H-RH-074 — "Personnel trapped, stranded or suspended in a crane-suspended platform" |
| H-RH-075 | Load or rigging failure from improper use of a pulling device for overhead lifting | **New canonical record** (ID kept) | H-RH-075 — "Load falling from a pulling-only device used for overhead lifting" |
| H-RH-076 | *(added by Architect Response 001)* Multiple-lift rigging / christmas-treeing | **New canonical record** (ID kept) | H-RH-076 — "Multiple suspended members in a multiple lift colliding, falling or overloading the rigging assembly or an attachment point" |

## 3. Proposed text generalizations of approved records

Each generalization widens an approved record so the rigging exposure reuses it instead of duplicating it. Architect acceptance is required. The prior wording stays mapped to the same record, so JSAs saved under v1.4.1-p1 keep their controls.

| # | Record | Current wording (v1.4.1-p1) | Proposed wording | Absorbs |
|---|---|---|---|---|
| T-15 | H-BT-014 | Struck by or caught between suspended structural steel | Struck by, or caught between, a suspended or moving load | H-RH-001, H-RH-017, H-RH-019, H-RH-052 |
| T-16 | H-HW-037 | Rigging or lifting equipment weakened by heat or welding current | Rigging or lifting equipment weakened by heat, welding current, chemicals or environmental exposure | H-RH-015 |
| T-17 | H-BT-007 | Strain from applying force or from handling heavy torque, tensioning, drilling or fastening equipment | Strain from applying force or from handling heavy torque, tensioning, drilling, fastening or rigging equipment | H-RH-027 |
| T-18 | H-BT-002 | Cuts and punctures from sharp metal surfaces, burrs, swarf, pipe ends and flanges | Cuts and punctures from sharp metal surfaces, burrs, swarf, broken wire-rope strands, pipe ends and flanges | H-RH-028 |
| T-19 | H-BT-015 | Structural member moving or collapsing when the hoisting line is released | Load or structural member moving, tipping or collapsing when the rigging is slackened or released | H-RH-068, H-RH-070 |

With T-15, the steel-erection controls on H-BT-014 (C-000034 connectors, C-000035 tag lines, C-000036 signal person) become conditional on structural steel erection, and C-000037 on H-BT-015 conditional on structural steel; the new general controls apply otherwise.

## 4. Retained records and control relationships

Relationship conditions are evaluated on the task description (Package 001–003 convention). "if …" conditions are proposed applicability rules (§6).

**H-BT-014 — Struck by, or caught between, a suspended or moving load** · *existing record*

- `C-000519` `[if mine site and the load may need steadying or guidance]` At a mine, attach tag lines to suspended loads that may need steadying or guidance.
- `C-000033` Stay out from under the suspended load *(existing)*
- `C-000034` `[if structural steel erection]` Only the connectors make the initial connection *(existing)*
- `C-000035` `[if structural steel erection]` Use tag lines; keep hands off the load except at the connection point *(existing)*
- `C-000036` `[if structural steel erection]` Keep direct communication with the signal person *(existing)*
- `C-000457` Keep everyone out of the load's fall zone except workers needed to hook, unhook, guide or land the load or make the initial connection.
- `C-000422` Establish the lift sequence, hoisting route, travel path and landing location before hoisting, using routes that keep the load away from people.
- `C-000469` Keep personnel out of blind spots and the load and equipment travel path, and do not resume movement until the area is clear.
- `C-000231` Set an exclusion zone around the movement and drop area, and keep everyone out of the line of fire *(existing)*
- `C-000461` Do not try to hold or stop a moving load with your body — let go and get clear.
- `C-000464` Control load swing and rotation throughout hoisting, travel and landing.

**H-BT-015 — Load or structural member moving, tipping or collapsing when the rigging is slackened or released** · *existing record*

- `C-000037` `[if structural steel]` Do not release the load until the connection required for that member is made and stability is verified *(existing)*
- `C-000032` `[if erection or fit-up]` Follow the erection plan sequence *(existing)*
- `C-000472` `[if not structural steel]` Before slackening the rigging, verify the load is on adequate supports, required connections or temporary supports are in place, and it cannot roll, tip, slide or collapse.
- `C-000473` Release rigging tension gradually.
- `C-000474` Remove rigging without pulling it against the load, obstructions or unsecured material.

**H-RH-002 — Load falling from rigging, hardware or lifting-equipment failure**

- `C-000432` Inspect rigging and lifting accessories before use, and remove from service any that meet the applicable removal criteria.
- `C-000433` Verify rigging identification and rated capacity are legible where required — do not use rigging that cannot be identified.
- `C-000434` Select rigging suited to the load weight, configuration, material and environmental conditions.
- `C-000436` Use compatible hooks, shackles, links and connecting hardware, connected and secured by manufacturer-approved methods.
- `C-000440` Verify hook latches and other retention devices work, and that shackle pins and threaded lifting accessories are fully engaged and secured.
- `C-000439` Do not knot, shorten or modify rigging by unapproved methods, and do not use makeshift lifting accessories.
- `C-000419` Determine the load weight before lifting, and include the rigging, lifting accessories and below-the-hook attachments in the total load on the equipment.
- `C-000423` `[if crane or hoist]` Confirm the load chart or rated capacity that applies to the actual equipment configuration and radius, and keep the total load within it.
- `C-000033` Stay out from under the suspended load *(existing)*
- `C-000427` Use riggers qualified for the rigging assigned to them.
- `C-000447` Verify spreader bars, lifting beams and other below-the-hook devices are rated and suitable for the configuration being used.

**H-RH-003 — Rigging overload from load weight, sling angle, hitch or unequal leg loading**

- `C-000419` Determine the load weight before lifting, and include the rigging, lifting accessories and below-the-hook attachments in the total load on the equipment.
- `C-000435` Determine sling capacity from the hitch and sling angle, and do not assume every leg carries an equal share of the load.
- `C-000434` Select rigging suited to the load weight, configuration, material and environmental conditions.
- `C-000420` Identify the load's center of gravity, including how it changes as the load is rotated, tailed or upended, and rig to keep the load balanced.

**H-RH-006 — Load shifting, tipping or rotating from an unknown or changing center of gravity, including during tailing, upending or turning**

- `C-000420` Identify the load's center of gravity, including how it changes as the load is rotated, tailed or upended, and rig to keep the load balanced.
- `C-000442` Take up slack gradually, then stop and verify the slings are seated and the load is balanced before continuing the lift.
- `C-000455` Raise the load a short distance and hold it to confirm balance, rigging and brakes before the full lift, where appropriate.
- `C-000487` `[if more than one lifting device]` Determine each lifting device's share of the load at every stage of the lift — including changes in center of gravity, radius and orientation — and keep each within its capacity.
- `C-000426` Stop and reassess when the load, equipment configuration, operating conditions or load behavior differ from the plan.

**H-RH-007 — Load slipping, or rigging disengaging, as the load changes orientation, is landed or the rigging slackens**

- `C-000443` Rig so that slings and lifting accessories cannot slip or disengage as the load changes orientation, is landed or the rigging slackens.
- `C-000444` Use a hitch configuration that keeps the load from slipping out of the rigging.
- `C-000440` Verify hook latches and other retention devices work, and that shackle pins and threaded lifting accessories are fully engaged and secured.
- `C-000442` Take up slack gradually, then stop and verify the slings are seated and the load is balanced before continuing the lift.

**H-RH-008 — Sling cut or damaged by sharp edges, abrasion or inadequate bearing surfaces**

- `C-000438` Protect slings from sharp edges and damaging bearing surfaces with suitable softeners or edge protection.
- `C-000432` Inspect rigging and lifting accessories before use, and remove from service any that meet the applicable removal criteria.
- `C-000434` Select rigging suited to the load weight, configuration, material and environmental conditions.
- `C-000446` Do not twist, kink or bend slings or rigging hardware in ways they are not designed for.
- `C-000475` Inspect and store rigging after use so it is protected from damage.

**H-RH-010 — Lifting point, lug, eye bolt or lifting insert failure from inadequate capacity, wrong loading direction or insufficient concrete strength**

- `C-000421` Use lifting points designed or approved for the intended load, configuration and loading direction.
- `C-000437` Load hooks, shackles, hoists and other lifting hardware only in their intended direction — no side loading of hardware or crane booms unless the equipment and operation are designed and approved for it.
- `C-000440` Verify hook latches and other retention devices work, and that shackle pins and threaded lifting accessories are fully engaged and secured.
- `C-000498` `[if precast or concrete lifting inserts]` Before lifting precast, verify the lifting inserts, compatible lifting hardware and required concrete strength.

**H-RH-011 — Shock loading from sudden movement, snagging or abrupt release**

- `C-000456` Move the load smoothly — avoid sudden starts, stops and other shock loading.
- `C-000442` Take up slack gradually, then stop and verify the slings are seated and the load is balanced before continuing the lift.
- `C-000463` Stop if the load snags, is obstructed or meets unexpected resistance, and find and correct the cause before continuing.

**H-RH-016 — Hands or fingers caught between rigging, hardware and the load**

- `C-000512` Keep hands and fingers out from between slings, hardware and the load while attaching and tensioning rigging.
- `C-000471` Keep hands and feet out from under and beside the load at the landing — use push-pull or other positioning tools.

**H-RH-018 — Hands or feet caught between the load and its landing surface or supports**

- `C-000471` Keep hands and feet out from under and beside the load at the landing — use push-pull or other positioning tools.
- `C-000470` Prepare a stable landing area with suitable blocking, cribbing or dunnage before moving the load into position.
- `C-000457` Keep everyone out of the load's fall zone except workers needed to hook, unhook, guide or land the load or make the initial connection.
- `C-000473` Release rigging tension gradually.

**H-RH-020 — Struck or caught by the crane's rotating superstructure, counterweight or other moving crane components**

- `C-000454` Barricade the swing area of the rotating superstructure and counterweight, and keep personnel out of it.
- `C-000469` Keep personnel out of blind spots and the load and equipment travel path, and do not resume movement until the area is clear.

**H-RH-022 — Entangled in, or pulled off balance by, tag lines, ropes or a moving load**

- `C-000459` Never wrap a tag line around your hand, wrist or body.
- `C-000520` Position tag-line handlers clear of the fall zone, pinch points and the load's path, where they can let go if the load moves unexpectedly.
- `C-000461` Do not try to hold or stop a moving load with your body — let go and get clear.
- `C-000458` Use tag lines or another load-control method where the load needs steadying or guidance and they can be used safely.

**H-RH-023 — Struck by tensioned rigging, rope or a pulling device releasing its energy**

- `C-000460` Keep everyone out of the line of pull and the recoil or release path of tensioned rigging, ropes and hoists.
- `C-000473` Release rigging tension gradually.
- `C-000463` Stop if the load snags, is obstructed or meets unexpected resistance, and find and correct the cause before continuing.

**H-RH-029 — Crane or lifting equipment overturning from overload, inadequate support, improper set-up or loss of stability**

- `C-000423` Confirm the load chart or rated capacity that applies to the actual equipment configuration and radius, and keep the total load within it.
- `C-000448` Verify the ground can support the equipment and its outrigger, track or wheel loads, and reassess after rain or other changes in site conditions.
- `C-000451` Set outriggers or stabilizers and level the equipment as the load chart and manufacturer require.
- `C-000453` Verify the counterweight, boom, jib and reeving configuration matches the lift plan and load chart before lifting.
- `C-000450` Use outrigger mats, cribbing or other supporting materials where the ground conditions or the manufacturer require them.
- `C-000428` Use operators who meet the training, qualification and certification requirements for the specific equipment.

**H-RH-030 — Outrigger, track or support failure from inadequate ground bearing, voids, vaults, utilities or nearby excavations**

- `C-000448` Verify the ground can support the equipment and its outrigger, track or wheel loads, and reassess after rain or other changes in site conditions.
- `C-000449` Identify underground utilities, voids, vaults, tanks, recently disturbed ground and nearby excavations beneath and around the set-up area before setting up.
- `C-000450` Use outrigger mats, cribbing or other supporting materials where the ground conditions or the manufacturer require them.
- `C-000452` `[if near an excavation]` Keep the equipment back from excavation edges and unstable ground by a distance set from the assessed conditions.

**H-RH-032 — Equipment overload from incorrect load weight, radius, configuration or attachment capacity**

- `C-000419` Determine the load weight before lifting, and include the rigging, lifting accessories and below-the-hook attachments in the total load on the equipment.
- `C-000423` Confirm the load chart or rated capacity that applies to the actual equipment configuration and radius, and keep the total load within it.
- `C-000453` Verify the counterweight, boom, jib and reeving configuration matches the lift plan and load chart before lifting.
- `C-000499` `[if forklift, telehandler or excavator]` Lift a suspended load with a forklift, telehandler or excavator only with an attachment or lifting point approved for that equipment, using the capacity information for that configuration — standard fork or bucket capacity does not apply.
- `C-000425` `[if critical or complex lift]` Confirm the lift classification, lift-plan and approval requirements that apply — regulatory, manufacturer, project or client — and have any required plan approved before lifting.

**H-RH-035 — Side loading of the boom, hook, hoist or lifting hardware**

- `C-000437` Load hooks, shackles, hoists and other lifting hardware only in their intended direction — no side loading of hardware or crane booms unless the equipment and operation are designed and approved for it.
- `C-000462` Keep the load and rigging clear of structures, scaffolding and utilities along the travel path.

**H-RH-036 — Lifting equipment unstable or out of control while traveling with a load, on slopes or on poor surfaces**

- `C-000485` Travel with a suspended load only where the manufacturer allows it, using the travel or pick-and-carry capacity for that configuration.
- `C-000486` Check the travel route for slope, ground support and overhead clearance, and keep the load position and travel speed within the manufacturer's limits.
- `C-000464` Control load swing and rotation throughout hoisting, travel and landing.
- `C-000469` Keep personnel out of blind spots and the load and equipment travel path, and do not resume movement until the area is clear.
- `C-000429` Assign a qualified signal person, or a spotter where required, when the operator cannot see the load, the landing area or the travel path, or when site rules require one.

**H-RH-038 — Load, boom or crane colliding with structures, other equipment or adjacent operations**

- `C-000462` Keep the load and rigging clear of structures, scaffolding and utilities along the travel path.
- `C-000424` Identify adjacent operations that could interfere with the lift, and coordinate with the affected crews.
- `C-000422` Establish the lift sequence, hoisting route, travel path and landing location before hoisting, using routes that keep the load away from people.
- `C-000429` `[if the operator cannot see the load path]` Assign a qualified signal person, or a spotter where required, when the operator cannot see the load, the landing area or the travel path, or when site rules require one.
- `C-000484` Maintain lighting and visibility, and stop movement when the operator or signal person cannot see or monitor the operation.

**H-RH-039 — Boom, jib, counterweight or outrigger components moving, falling or becoming unstable during crane assembly or disassembly**

- `C-000513` Assemble and disassemble the crane only by the manufacturer's procedure, under the designated assembly/disassembly director.
- `C-000514` Before removing boom or jib pins, block or support the sections, and keep everyone out from under them and out of their path if they move.
- `C-000453` Verify the counterweight, boom, jib and reeving configuration matches the lift plan and load chart before lifting.
- `C-000454` Barricade the swing area of the rotating superstructure and counterweight, and keep personnel out of it.

**H-RH-041 — Two-blocking — the load block contacting the boom tip or upper boom components**

- `C-000515` Verify the anti-two-block device works, and watch the clearance between the block and the boom tip when hoisting, extending or lowering the boom.

**H-RH-042 — Uncontrolled load descent or loss of load control from hoist, brake, hydraulic or power failure**

- `C-000455` Raise the load a short distance and hold it to confirm balance, rigging and brakes before the full lift, where appropriate.
- `C-000491` `[if hoist]` Inspect the hoist's hooks, chain or rope, brake and attachment points before use.
- `C-000457` Keep everyone out of the load's fall zone except workers needed to hook, unhook, guide or land the load or make the initial connection.

**H-RH-044 — Electrical contact or arcing from overhead power lines to the crane, load, rigging or tag lines**

- `C-000476` Before setting up or moving the equipment, identify overhead power lines and other electrical sources within reach of the boom, load, rigging and tag lines at their full range of movement.
- `C-000477` `[if overhead power lines are identified]` Maintain the minimum approach distance required for the line voltage and equipment, with the required warning lines, barricades, proximity devices or dedicated spotter.
- `C-000478` `[if overhead power lines are identified]` Treat every line as energized until the utility or responsible electrical authority verifies it de-energized and grounded, and coordinate that where the clearance cannot otherwise be kept.
- `C-000479` `[if overhead power lines are identified]` Stop if the required clearance cannot be maintained.
- `C-000480` `[if overhead power lines are identified]` Establish an emergency response for electrical contact, and keep everyone away from equipment, loads and rigging that may be energized.
- `C-000516` `[if tag lines are used near identified power lines]` Use non-conductive tag lines where tag lines are used near power lines.

**H-RH-046 — Wind or gusts moving the load or reducing crane stability and capacity**

- `C-000481` Evaluate wind and gusts against the manufacturer's limits and the load's surface area — no single wind-speed limit fits every crane and load.
- `C-000482` Monitor the weather and stop lifting when conditions prevent safe control of the load.
- `C-000458` Use tag lines or another load-control method where the load needs steadying or guidance and they can be used safely.
- `C-000519` `[if mine site]` At a mine, attach tag lines to suspended loads that may need steadying or guidance.
- `C-000464` Control load swing and rotation throughout hoisting, travel and landing.

**H-RH-048 — Lightning strike exposure**

- `C-000483` Follow the applicable lightning suspension and resumption procedure.
- `C-000482` Monitor the weather and stop lifting when conditions prevent safe control of the load.

**H-RH-049 — Operator or signal person unable to see the load, personnel, landing area or obstructions**

- `C-000429` Assign a qualified signal person, or a spotter where required, when the operator cannot see the load, the landing area or the travel path, or when site rules require one.
- `C-000484` Maintain lighting and visibility, and stop movement when the operator or signal person cannot see or monitor the operation.
- `C-000465` Use standard hand signals or an agreed communication method suited to the operation, and confirm radios work before lifting where they are used.

**H-RH-050 — Loss of communication, or conflicting or misunderstood signals, between the operator, signal person and riggers**

- `C-000465` Use standard hand signals or an agreed communication method suited to the operation, and confirm radios work before lifting where they are used.
- `C-000466` Maintain communication with the operator throughout the lift, and stop movement whenever required communication is lost.
- `C-000467` The operator obeys a stop or emergency-stop signal from anyone.
- `C-000468` Give operating instructions from one designated person or a coordinated plan, so instructions do not conflict.
- `C-000431` Review the lift plan, roles, signals and stop-work responsibilities with everyone involved before the lift begins.
- `C-000431` Review the lift plan, roles, signals and stop-work responsibilities with everyone involved before the lift begins.

**H-RH-054 — Snagged or obstructed load moving unexpectedly**

- `C-000463` Stop if the load snags, is obstructed or meets unexpected resistance, and find and correct the cause before continuing.
- `C-000456` Move the load smoothly — avoid sudden starts, stops and other shock loading.
- `C-000460` Keep everyone out of the line of pull and the recoil or release path of tensioned rigging, ropes and hoists.

**H-RH-056 — Unequal or shifting load share between cranes, or uncontrolled transfer between lifting devices**

- `C-000487` Determine each lifting device's share of the load at every stage of the lift — including changes in center of gravity, radius and orientation — and keep each within its capacity.
- `C-000488` Do not release one lifting device until the receiving device is verified to be supporting the load safely, and prevent unplanned load transfer between devices.
- `C-000468` Give operating instructions from one designated person or a coordinated plan, so instructions do not conflict.
- `C-000425` Confirm the lift classification, lift-plan and approval requirements that apply — regulatory, manufacturer, project or client — and have any required plan approved before lifting.
- `C-000426` Stop and reassess when the load, equipment configuration, operating conditions or load behavior differ from the plan.
- `C-000430` Assign lift supervision suited to the complexity of the operation, meeting any applicable regulatory, project or client Lift Director requirement.

**H-RH-059 — Load buckling, bending or breaking from inadequate stiffness or temporary bracing**

- `C-000517` Verify long, flexible or partially assembled loads have the temporary bracing or lifting arrangement needed to keep them from buckling or breaking during the lift.
- `C-000447` `[if spreader bar or lifting beam]` Verify spreader bars, lifting beams and other below-the-hook devices are rated and suitable for the configuration being used.

**H-RH-060 — Failure, displacement or unintended travel of the beam clamp, trolley, structure or anchorage supporting a hoist, winch or pulling device**

- `C-000489` Verify the beam, structure or anchorage supporting a hoist, trolley or pulling device can carry the anticipated load in the direction it will be loaded.
- `C-000406` `[if beam clamp or trolley]` Select a rated clamp or trolley compatible with the beam dimensions and intended application. Install and secure it according to the manufacturer's instructions to prevent unintended movement or disengagement while allowing designed travel where applicable. Keep fingers clear of jaws and pinch points during positioning and adjustment *(existing)*
- `C-000407` `[if beam clamp or trolley]` Inspect the clamp before each use for damage, deformation, worn jaws, missing or damaged locking parts and illegible markings, and remove any defective clamp from service *(existing)*
- `C-000437` Load hooks, shackles, hoists and other lifting hardware only in their intended direction — no side loading of hardware or crane booms unless the equipment and operation are designed and approved for it.
- `C-000521` `[if trolley or monorail]` Verify end stops or other end-of-travel protection keep the trolley or hoist from running off the beam.
- `C-000490` Use a hoist or pulling device rated and approved for the operation — never use equipment intended only for pulling to suspend a load overhead.
- `C-000492` Keep the load chain or rope straight and correctly seated — not twisted, kinked or wrapped around the load.
- `C-000493` Do not extend a hoist's operating handle or add force beyond what the manufacturer permits.
- `C-000494` Do not use a hoist's load chain as a sling unless the hoist is designed for it.

**H-RH-062 — Rope, block or sheave failure from improper reeving, bending or block loading**

- `C-000518` Use blocks and sheaves sized for the rope, reeve them as the manufacturer or lift plan requires, and account for the higher load on a snatch block's anchorage.
- `C-000432` Inspect rigging and lifting accessories before use, and remove from service any that meet the applicable removal criteria.

**H-RH-063 — Load released or slipping from a lifting clamp, vacuum lifter or lifting magnet**

- `C-000495` `[if lifting clamp]` Use a lifting clamp or attachment designed for the material, thickness, dimensions, load range and lifting orientation — a vertical lifting clamp is not a horizontal one.
- `C-000496` `[if lifting clamp]` Install and lock the lifting clamp or attachment by the manufacturer's instructions, on a surface condition compatible with its grip.
- `C-000407` `[if lifting clamp]` Inspect the clamp before each use for damage, deformation, worn jaws, missing or damaged locking parts and illegible markings, and remove any defective clamp from service *(existing)*
- `C-000497` `[if vacuum or magnetic lifter]` Verify a vacuum or magnetic lifter is rated for the load, material and surface condition, and keep everyone clear in case vacuum, power or holding force is lost.
- `C-000443` Rig so that slings and lifting accessories cannot slip or disengage as the load changes orientation, is landed or the rigging slackens.
- `C-000457` Keep everyone out of the load's fall zone except workers needed to hook, unhook, guide or land the load or make the initial connection.

**H-RH-066 — Load falling or equipment tipping from an unapproved or misapplied forklift, telehandler or excavator lifting attachment**

- `C-000499` Lift a suspended load with a forklift, telehandler or excavator only with an attachment or lifting point approved for that equipment, using the capacity information for that configuration — standard fork or bucket capacity does not apply.
- `C-000500` Follow the equipment's restrictions on boom extension, load position and travel with a suspended load.
- `C-000443` Rig so that slings and lifting accessories cannot slip or disengage as the load changes orientation, is landed or the rigging slackens.
- `C-000485` `[if traveling with the load]` Travel with a suspended load only where the manufacturer allows it, using the travel or pick-and-carry capacity for that configuration.

**H-RH-069 — Load shifting or collapsing off blocking, cribbing or temporary supports, or displaced cribbing striking personnel**

- `C-000470` Prepare a stable landing area with suitable blocking, cribbing or dunnage before moving the load into position.
- `C-000472` Before slackening the rigging, verify the load is on adequate supports, required connections or temporary supports are in place, and it cannot roll, tip, slide or collapse.
- `C-000471` Keep hands and feet out from under and beside the load at the landing — use push-pull or other positioning tools.

**H-RH-071 — Load held or released unexpectedly by residual fasteners, connections, attachments or process lines during equipment removal**

- `C-000501` Verify the equipment is disconnected from fasteners, structural attachments and utilities, and is free, before applying lifting force.
- `C-000503` Support the equipment with the rigging or temporary supports before removing load-bearing fasteners or connections.
- `C-000502` Identify residual contents that add weight or shift the center of gravity.
- `C-000242` `[if process system]` Follow the approved isolation and energy-control procedure, and verify the safe state before work *(existing)*
- `C-000243` `[if process system]` Control residual pressure, temperature and chemical exposure before opening or heating the system *(existing)*

**H-RH-073 — Personnel platform, suspension system or supporting equipment failure**

- `C-000504` `[if not steel erection]` Hoist personnel by crane only where the project has determined that conventional access — ladder, stairway, scaffold, aerial lift or personnel hoist — would be more hazardous or is not possible, and the lift is authorized.
- `C-000505` Use a personnel platform and suspension system designed for hoisting personnel and suited to the equipment.
- `C-000507` **— withheld pending validation (Architect Response 001)** Complete the required inspections, trial lift and proof test before personnel are hoisted.
- `C-000506` **— withheld pending validation (Architect Response 001)** Plan the personnel lift with a pre-lift meeting of the operator, signal person, platform occupants and the person responsible for the task.

**H-RH-074 — Personnel trapped, stranded or suspended in a crane-suspended platform**

- `C-000511` **— withheld pending validation (Architect Response 001)** Have emergency lowering and rescue arrangements in place before personnel are hoisted.
- `C-000509` **— withheld pending validation (Architect Response 001)** Keep continuous communication with the platform occupants, and move the platform slowly and under control.
- `C-000508` **— withheld pending validation (Architect Response 001)** Platform occupants use the fall protection required for the personnel platform.
- `C-000510` **— withheld pending validation (Architect Response 001)** Do not hoist personnel in wind, lightning or other conditions outside the platform and equipment limits.
- `C-000457` Keep everyone out of the load's fall zone except workers needed to hook, unhook, guide or land the load or make the initial connection.
- `C-000466` Maintain communication with the operator throughout the lift, and stop movement whenever required communication is lost.

**H-RH-075 — Load falling from a pulling-only device used for overhead lifting**

- `C-000490` Use a hoist or pulling device rated and approved for the operation — never use equipment intended only for pulling to suspend a load overhead.
- `C-000489` Verify the beam, structure or anchorage supporting a hoist, trolley or pulling device can carry the anticipated load in the direction it will be loaded.

**H-RH-076 — Multiple suspended members in a multiple lift colliding, falling or overloading the rigging assembly or an attachment point**

- `C-000522` Perform a multiple lift only with a multiple-lift rigging assembly, only for beams and similar structural members, only where the crane manufacturer permits it, and within the number of members the applicable requirements allow.
- `C-000523` Use a multiple-lift rigging assembly with a certified maximum capacity for the total assembly and for each attachment point, and keep the total load within both the rigging rating and the crane's rated capacity.
- `C-000524` Only personnel trained in multiple-lift procedures take part in a multiple lift.
- `C-000525` Rig each member at its center of gravity so it hangs reasonably level, rig from the top down, and keep the required spacing between members so they cannot contact each other.
- `C-000526` Set the members from the bottom up in the planned sequence, keeping connectors clear of the remaining suspended members.
- `C-000527` Use controlled load lowering whenever the load is over the connectors.
- `C-000419` Determine the load weight before lifting, and include the rigging, lifting accessories and below-the-hook attachments in the total load on the equipment.
- `C-000457` Keep everyone out of the load's fall zone except workers needed to hook, unhook, guide or land the load or make the initial connection.
- `C-000037` Do not release the load until the connection required for that member is made and stability is verified *(existing)*
- `C-000031` Leave temporary bolts, bracing and guying in place until removal is authorized under the erection sequence and stability requirements *(existing)*

**H-BT-018 — Dropped tools, equipment, hardware or materials striking personnel below** · *existing record*

- `C-000445` `[p4: if an assembly is lifted]` Secure or remove loose components before lifting an assembly.

**H-HW-037 — Rigging or lifting equipment weakened by heat, welding current, chemicals or environmental exposure** · *existing record*

- `C-000441` `[p4: if synthetic slings]` Protect synthetic slings from chemicals and temperatures they are not rated for.

## 5. Proposed canonical controls

| Proposed ID | Control (user-facing) | Candidate §5 lines | Basis |
|---|---|---|---|
| C-000419 | Determine the load weight before lifting, and include the rigging, lifting accessories and below-the-hook attachments in the total load on the equipment. | 1, 2 | R; M |
| C-000420 | Identify the load's center of gravity, including how it changes as the load is rotated, tailed or upended, and rig to keep the load balanced. | 3, 39 | BP; C |
| C-000421 | Use lifting points designed or approved for the intended load, configuration and loading direction. | 4, 35 | M; C |
| C-000422 | Establish the lift sequence, hoisting route, travel path and landing location before hoisting, using routes that keep the load away from people. | 5 | R (1926.1425(a), verified); BP |
| C-000423 | Confirm the load chart or rated capacity that applies to the actual equipment configuration and radius, and keep the total load within it. | 6, 49, 51 | R; M |
| C-000424 | Identify adjacent operations that could interfere with the lift, and coordinate with the affected crews. | 8, 76 | BP |
| C-000425 | Confirm the lift classification, lift-plan and approval requirements that apply — regulatory, manufacturer, project or client — and have any required plan approved before lifting. | 10, 114 | R; M; project (SIL PO Decision 007 — no Adena-specific threshold) |
| C-000426 | Stop and reassess when the load, equipment configuration, operating conditions or load behavior differ from the plan. | 11, 120 | BP |
| C-000427 | Use riggers qualified for the rigging assigned to them. | 12 | R (1926.1425(c)(3), 1926.753(c)(2), verified) |
| C-000428 | Use operators who meet the training, qualification and certification requirements for the specific equipment. | 13 | R (1926.1427, not verified in this review) |
| C-000429 | Assign a qualified signal person, or a spotter where required, when the operator cannot see the load, the landing area or the travel path, or when site rules require one. | 14, 68, 112 | R (1926.1419–1428, not verified); PO |
| C-000430 | Assign lift supervision suited to the complexity of the operation, meeting any applicable regulatory, project or client Lift Director requirement. | 15 | R; project (SIL PO Decision 007) |
| C-000431 | Review the lift plan, roles, signals and stop-work responsibilities with everyone involved before the lift begins. | 9, 16, 17 | BP |
| C-000432 | Inspect rigging and lifting accessories before use, and remove from service any that meet the applicable removal criteria. | 18, 31 | R (1926.251(a), verified); C |
| C-000433 | Verify rigging identification and rated capacity are legible where required — do not use rigging that cannot be identified. | 19 | R (1910.184 identification, verified); C |
| C-000434 | Select rigging suited to the load weight, configuration, material and environmental conditions. | 20 | R (30 CFR 56.16007(b), verified); C |
| C-000435 | Determine sling capacity from the hitch and sling angle, and do not assume every leg carries an equal share of the load. | 21, 22 | C; BP |
| C-000436 | Use compatible hooks, shackles, links and connecting hardware, connected and secured by manufacturer-approved methods. | 23, 28 | M; C |
| C-000437 | Load hooks, shackles, hoists and other lifting hardware only in their intended direction — no side loading of hardware or crane booms unless the equipment and operation are designed and approved for it. | 24, 66, 129 | M; C |
| C-000438 | Protect slings from sharp edges and damaging bearing surfaces with suitable softeners or edge protection. | 25 | R (1926.251 synthetic webbing, paragraph not verified); C |
| C-000439 | Do not knot, shorten or modify rigging by unapproved methods, and do not use makeshift lifting accessories. | 26, 27 | R (1910.184, verified); C |
| C-000440 | Verify hook latches and other retention devices work, and that shackle pins and threaded lifting accessories are fully engaged and secured. | 29, 34 | R (1926.1425(c)(2), verified, fall-zone context); M |
| C-000441 | Protect synthetic slings from chemicals and temperatures they are not rated for. | 30 | M; C |
| C-000442 | Take up slack gradually, then stop and verify the slings are seated and the load is balanced before continuing the lift. | 33, 53, 54 | BP |
| C-000443 | Rig so that slings and lifting accessories cannot slip or disengage as the load changes orientation, is landed or the rigging slackens. | 36, 136, 145 | R (1926.1425(c)(1), verified); BP |
| C-000444 | Use a hitch configuration that keeps the load from slipping out of the rigging. | 37 | C; BP |
| C-000445 | Secure or remove loose components before lifting an assembly. | 38 | BP |
| C-000446 | Do not twist, kink or bend slings or rigging hardware in ways they are not designed for. | 40 | R (1910.184, verified); C |
| C-000447 | Verify spreader bars, lifting beams and other below-the-hook devices are rated and suitable for the configuration being used. | 41 | C; M |
| C-000448 | Verify the ground can support the equipment and its outrigger, track or wheel loads, and reassess after rain or other changes in site conditions. | 42, 52, 106 | R (1926.1402(b), verified); M |
| C-000449 | Identify underground utilities, voids, vaults, tanks, recently disturbed ground and nearby excavations beneath and around the set-up area before setting up. | 7, 43 | R (1926.1402(c)(2), verified) |
| C-000450 | Use outrigger mats, cribbing or other supporting materials where the ground conditions or the manufacturer require them. | 44 | R (1926.1402, verified); M |
| C-000451 | Set outriggers or stabilizers and level the equipment as the load chart and manufacturer require. | 45, 46 | M; R (not verified) |
| C-000452 | Keep the equipment back from excavation edges and unstable ground by a distance set from the assessed conditions. | 47 | BP; competent person |
| C-000453 | Verify the counterweight, boom, jib and reeving configuration matches the lift plan and load chart before lifting. | 48 | M |
| C-000454 | Barricade the swing area of the rotating superstructure and counterweight, and keep personnel out of it. | 50 | R (1926.1424, not verified) |
| C-000455 | Raise the load a short distance and hold it to confirm balance, rigging and brakes before the full lift, where appropriate. | 55 | BP; C |
| C-000456 | Move the load smoothly — avoid sudden starts, stops and other shock loading. | 56 | C; BP |
| C-000457 | Keep everyone out of the load's fall zone except workers needed to hook, unhook, guide or land the load or make the initial connection. | 57 | R (1926.1425(b), (d), verified) |
| C-000458 | Use tag lines or another load-control method where the load needs steadying or guidance and they can be used safely. | 59 | R (30 CFR 56.16007(a), 77.210(c), verified — required in that condition on MSHA sites); PO (decision 5) |
| C-000459 | Never wrap a tag line around your hand, wrist or body. | 60 | BP |
| C-000460 | Keep everyone out of the line of pull and the recoil or release path of tensioned rigging, ropes and hoists. | 61, 87, 128 | BP |
| C-000461 | Do not try to hold or stop a moving load with your body — let go and get clear. | 62 | BP |
| C-000462 | Keep the load and rigging clear of structures, scaffolding and utilities along the travel path. | 63 | BP |
| C-000463 | Stop if the load snags, is obstructed or meets unexpected resistance, and find and correct the cause before continuing. | 64, 65 | BP |
| C-000464 | Control load swing and rotation throughout hoisting, travel and landing. | 67, 111, 130 | BP |
| C-000465 | Use standard hand signals or an agreed communication method suited to the operation, and confirm radios work before lifting where they are used. | 69, 70 | R (1926.1419–1422, not verified); C |
| C-000466 | Maintain communication with the operator throughout the lift, and stop movement whenever required communication is lost. | 71, 72 | R (not verified); BP |
| C-000467 | The operator obeys a stop or emergency-stop signal from anyone. | 73 | R (not verified); C |
| C-000468 | Give operating instructions from one designated person or a coordinated plan, so instructions do not conflict. | 74, 118 | C; BP |
| C-000469 | Keep personnel out of blind spots and the load and equipment travel path, and do not resume movement until the area is clear. | 77, 78, 113 | BP |
| C-000470 | Prepare a stable landing area with suitable blocking, cribbing or dunnage before moving the load into position. | 79, 80 | BP |
| C-000471 | Keep hands and feet out from under and beside the load at the landing — use push-pull or other positioning tools. | 81, 82 | BP |
| C-000472 | Before slackening the rigging, verify the load is on adequate supports, required connections or temporary supports are in place, and it cannot roll, tip, slide or collapse. | 83, 84, 85, 153 | BP; R (1926.756 for steel, existing C-000037) |
| C-000473 | Release rigging tension gradually. | 86 | BP |
| C-000474 | Remove rigging without pulling it against the load, obstructions or unsecured material. | 88 | BP |
| C-000475 | Inspect and store rigging after use so it is protected from damage. | 89 | R (1926.251(a), verified); BP |
| C-000476 | Before setting up or moving the equipment, identify overhead power lines and other electrical sources within reach of the boom, load, rigging and tag lines at their full range of movement. | 7, 90, 94 | R (1926.1408(a), verified) |
| C-000477 | Maintain the minimum approach distance required for the line voltage and equipment, with the required warning lines, barricades, proximity devices or dedicated spotter. | 91, 93 | R (1926.1408(a)–(b), verified; no distance placed in user-facing text) |
| C-000478 | Treat every line as energized until the utility or responsible electrical authority verifies it de-energized and grounded, and coordinate that where the clearance cannot otherwise be kept. | 92, 95 | R (1926.1408, verified) |
| C-000479 | Stop if the required clearance cannot be maintained. | 96 | R; BP |
| C-000480 | Establish an emergency response for electrical contact, and keep everyone away from equipment, loads and rigging that may be energized. | 97, 98 | R (1926.1408(g) training, not verified); BP |
| C-000481 | Evaluate wind and gusts against the manufacturer's limits and the load's surface area — no single wind-speed limit fits every crane and load. | 99, 101 | M; R (1926.1417(h) storm warning, verified); PO (decision 3) |
| C-000482 | Monitor the weather and stop lifting when conditions prevent safe control of the load. | 100, 102 | BP |
| C-000483 | Follow the applicable lightning suspension and resumption procedure. | 103 | M; project (SIL PO Decision 007) |
| C-000484 | Maintain lighting and visibility, and stop movement when the operator or signal person cannot see or monitor the operation. | 104, 105 | BP |
| C-000485 | Travel with a suspended load only where the manufacturer allows it, using the travel or pick-and-carry capacity for that configuration. | 107, 108 | M |
| C-000486 | Check the travel route for slope, ground support and overhead clearance, and keep the load position and travel speed within the manufacturer's limits. | 109, 110 | M; BP |
| C-000487 | Determine each lifting device's share of the load at every stage of the lift — including changes in center of gravity, radius and orientation — and keep each within its capacity. | 115, 116, 117 | C; BP |
| C-000488 | Do not release one lifting device until the receiving device is verified to be supporting the load safely, and prevent unplanned load transfer between devices. | 119, 121 | BP |
| C-000489 | Verify the beam, structure or anchorage supporting a hoist, trolley or pulling device can carry the anticipated load in the direction it will be loaded. | 122 | C; BP |
| C-000490 | Use a hoist or pulling device rated and approved for the operation — never use equipment intended only for pulling to suspend a load overhead. | 123, 131 | M |
| C-000491 | Inspect the hoist's hooks, chain or rope, brake and attachment points before use. | 124 | C (ASME B30 hoist volumes, not verified); M |
| C-000492 | Keep the load chain or rope straight and correctly seated — not twisted, kinked or wrapped around the load. | 125 | M; C |
| C-000493 | Do not extend a hoist's operating handle or add force beyond what the manufacturer permits. | 126 | M |
| C-000494 | Do not use a hoist's load chain as a sling unless the hoist is designed for it. | 127 | M; C |
| C-000495 | Use a lifting clamp or attachment designed for the material, thickness, dimensions, load range and lifting orientation — a vertical lifting clamp is not a horizontal one. | 132, 133, 137 | M |
| C-000496 | Install and lock the lifting clamp or attachment by the manufacturer's instructions, on a surface condition compatible with its grip. | 135, 138 | M |
| C-000497 | Verify a vacuum or magnetic lifter is rated for the load, material and surface condition, and keep everyone clear in case vacuum, power or holding force is lost. | 139, 140 | M |
| C-000498 | Before lifting precast, verify the lifting inserts, compatible lifting hardware and required concrete strength. | 141 | M (lifting-system instructions); engineer of record |
| C-000499 | Lift a suspended load with a forklift, telehandler or excavator only with an attachment or lifting point approved for that equipment, using the capacity information for that configuration — standard fork or bucket capacity does not apply. | 142, 143, 144 | M; R (not verified); PO (decision 8) |
| C-000500 | Follow the equipment's restrictions on boom extension, load position and travel with a suspended load. | 146, 147 | M |
| C-000501 | Verify the equipment is disconnected from fasteners, structural attachments and utilities, and is free, before applying lifting force. | 148, 152 | BP |
| C-000502 | Identify residual contents that add weight or shift the center of gravity. | 150 | BP |
| C-000503 | Support the equipment with the rigging or temporary supports before removing load-bearing fasteners or connections. | 151 | BP |
| C-000504 | Hoist personnel by crane only where the project has determined that conventional access — ladder, stairway, scaffold, aerial lift or personnel hoist — would be more hazardous or is not possible, and the lift is authorized. | 154 | R (1926.1431(a), verified; not applicable to steel erection per 1926.753(a), verified); PO (decision 7) |
| C-000505 | Use a personnel platform and suspension system designed for hoisting personnel and suited to the equipment. | 155 | R (1926.1431(b)(1), verified) |
| C-000506 **(withheld)** | Plan the personnel lift with a pre-lift meeting of the operator, signal person, platform occupants and the person responsible for the task. | 156 | R (1926.1431, paragraph not verified) |
| C-000507 **(withheld)** | Complete the required inspections, trial lift and proof test before personnel are hoisted. | 157 | R (1926.1431, paragraphs not verified) |
| C-000508 **(withheld)** | Platform occupants use the fall protection required for the personnel platform. | 158 | R (not verified) |
| C-000509 **(withheld)** | Keep continuous communication with the platform occupants, and move the platform slowly and under control. | 159 | R (not verified); BP |
| C-000510 **(withheld)** | Do not hoist personnel in wind, lightning or other conditions outside the platform and equipment limits. | 160 | R (numeric wind limit not verified — none placed in user-facing text); M |
| C-000511 **(withheld)** | Have emergency lowering and rescue arrangements in place before personnel are hoisted. | 161 | BP |
| C-000512 | Keep hands and fingers out from between slings, hardware and the load while attaching and tensioning rigging. | 32 | BP |
| C-000513 | Assemble and disassemble the crane only by the manufacturer's procedure, under the designated assembly/disassembly director. | — *(Engineer addition)* | E; R (1926.1404(a), verified via state plan summary) |
| C-000514 | Before removing boom or jib pins, block or support the sections, and keep everyone out from under them and out of their path if they move. | — *(Engineer addition)* | E; R (1926.1404, paragraph not verified) |
| C-000515 | Verify the anti-two-block device works, and watch the clearance between the block and the boom tip when hoisting, extending or lowering the boom. | — *(Engineer addition)* | E; R (1926.1415–1416, not verified) |
| C-000516 | Use non-conductive tag lines where tag lines are used near power lines. | — *(Engineer addition)* | E; R (1926.1408(b)(2), verified) |
| C-000517 | Verify long, flexible or partially assembled loads have the temporary bracing or lifting arrangement needed to keep them from buckling or breaking during the lift. | — *(Engineer addition)* | E; BP |
| C-000518 | Use blocks and sheaves sized for the rope, reeve them as the manufacturer or lift plan requires, and account for the higher load on a snatch block's anchorage. | — *(Engineer addition)* | E; C; M |
| C-000519 | At a mine, attach tag lines to suspended loads that may need steadying or guidance. | — *(Architect Response 001)* | AR-001; R (30 CFR 56.16007(a), 77.210(c), verified) |
| C-000520 | Position tag-line handlers clear of the fall zone, pinch points and the load's path, where they can let go if the load moves unexpectedly. | — *(Architect Response 001)* | AR-001; BP |
| C-000521 | Verify end stops or other end-of-travel protection keep the trolley or hoist from running off the beam. | — *(Architect Response 001)* | AR-001; C; M |
| C-000522 | Perform a multiple lift only with a multiple-lift rigging assembly, only for beams and similar structural members, only where the crane manufacturer permits it, and within the number of members the applicable requirements allow. | — *(Architect Response 001)* | AR-001; R (1926.753(e)(1), verified) |
| C-000523 | Use a multiple-lift rigging assembly with a certified maximum capacity for the total assembly and for each attachment point, and keep the total load within both the rigging rating and the crane's rated capacity. | — *(Architect Response 001)* | AR-001; R (1926.753(e)(2)–(3), verified; safety factor not placed in user-facing text) |
| C-000524 | Only personnel trained in multiple-lift procedures take part in a multiple lift. | — *(Architect Response 001)* | AR-001; R (1926.753(e)(1)(iv), verified) |
| C-000525 | Rig each member at its center of gravity so it hangs reasonably level, rig from the top down, and keep the required spacing between members so they cannot contact each other. | — *(Architect Response 001)* | AR-001; R (1926.753(e)(4), verified; spacing value not placed in user-facing text) |
| C-000526 | Set the members from the bottom up in the planned sequence, keeping connectors clear of the remaining suspended members. | — *(Architect Response 001)* | AR-001; R (1926.753(e)(5), verified) |
| C-000527 | Use controlled load lowering whenever the load is over the connectors. | — *(Architect Response 001)* | AR-001; R (1926.753(e)(6), verified) |

Basis tags: R regulatory (verification status in the Engineer review §4) · C consensus standard · M manufacturer · BP recognized practice · PO needs a Product Owner decision · E Engineer addition. No basis tag or citation appears in user-facing text.

## 6. Candidate control lines — disposition

| # | §5 group | Candidate line | Disposition |
|---|---|---|---|
| 1 | Lift planning | Determine the load weight before lifting. | C-000419 |
| 2 | Lift planning | Include applicable rigging, lifting accessories and attachments when determining total crane loading. | C-000419 |
| 3 | Lift planning | Identify the load center of gravity and anticipated changes in orientation. | C-000420 |
| 4 | Lift planning | Verify lifting points are suitable for the intended loading direction and configuration. | C-000421 |
| 5 | Lift planning | Establish the lifting sequence, travel path and landing location before hoisting. | C-000422 |
| 6 | Lift planning | Verify equipment capacity for the actual configuration, radius and operating conditions. | C-000423 |
| 7 | Lift planning | Identify underground and overhead obstructions before equipment setup. | C-000449, C-000476 |
| 8 | Lift planning | Identify adjacent operations that could interfere with the lift. | C-000424 |
| 9 | Lift planning | Establish communication methods and responsibilities before lifting. | C-000431 |
| 10 | Lift planning | Confirm applicable lift-plan and approval requirements before proceeding. | C-000425 |
| 11 | Lift planning | Stop and reassess when the load, equipment configuration or operating conditions change. | C-000426 |
| 12 | Personnel qualifications | Use personnel qualified for their assigned rigging responsibilities. | C-000427 |
| 13 | Personnel qualifications | Use operators meeting applicable equipment-specific training, qualification and certification requirements. | C-000428 |
| 14 | Personnel qualifications | Use qualified signal persons where required. | C-000429 |
| 15 | Personnel qualifications | Assign lift supervision appropriate to the complexity and requirements of the operation. | C-000430 |
| 16 | Personnel qualifications | Review specialized lifting procedures with affected personnel before beginning. | C-000431 |
| 17 | Personnel qualifications | Ensure personnel understand their assigned roles, communication methods and stop-work responsibilities. | C-000431 |
| 18 | Rigging inspection and selection | Inspect rigging and lifting accessories before use and remove defective equipment from service. | C-000432 |
| 19 | Rigging inspection and selection | Verify identification and rated capacity are legible where required. | C-000433 |
| 20 | Rigging inspection and selection | Select rigging suitable for the load weight, configuration and environmental conditions. | C-000434 |
| 21 | Rigging inspection and selection | Account for sling angle and hitch configuration when determining sling capacity. | C-000435 |
| 22 | Rigging inspection and selection | Account for unequal load distribution rather than assuming all sling legs carry equal loads. | C-000435 |
| 23 | Rigging inspection and selection | Use compatible hooks, shackles, links and connecting hardware. | C-000436 |
| 24 | Rigging inspection and selection | Verify hardware is loaded in the intended direction. | C-000437 |
| 25 | Rigging inspection and selection | Protect slings from damaging edges and bearing surfaces using suitable protection. | C-000438 |
| 26 | Rigging inspection and selection | Do not shorten, knot or modify rigging by unauthorized methods. | C-000439 |
| 27 | Rigging inspection and selection | Do not use makeshift lifting accessories. | C-000439 |
| 28 | Rigging inspection and selection | Use manufacturer-approved methods for connecting and securing rigging hardware. | C-000436 |
| 29 | Rigging inspection and selection | Verify hooks, latches and other retention devices are suitable and functioning where required. | C-000440 |
| 30 | Rigging inspection and selection | Protect synthetic rigging from incompatible chemicals, excessive temperatures and hot work. | C-000441; existing C-000247 |
| 31 | Rigging inspection and selection | Remove damaged wire rope, chain, webbing and roundslings from service according to applicable rejection criteria. | C-000432 |
| 32 | Rigging attachment | Keep hands clear of pinch points while attaching and tensioning rigging. | C-000512 |
| 33 | Rigging attachment | Verify slings are seated correctly before applying load. | C-000442 |
| 34 | Rigging attachment | Verify shackle pins and threaded lifting accessories are properly engaged and secured. | C-000440 |
| 35 | Rigging attachment | Use lifting points designed or approved for the intended load and direction. | C-000421 |
| 36 | Rigging attachment | Verify lifting accessories cannot unintentionally disengage as load orientation changes. | C-000443 |
| 37 | Rigging attachment | Use suitable hitch configurations to prevent load slippage. | C-000444 |
| 38 | Rigging attachment | Secure loose components before lifting an assembly. | C-000445 |
| 39 | Rigging attachment | Position rigging to maintain load balance. | C-000420 |
| 40 | Rigging attachment | Avoid twisting or unintended bending of rigging hardware. | C-000446 |
| 41 | Rigging attachment | Verify lifting beams and spreader bars are suitable for the intended configuration. | C-000447 |
| 42 | Crane setup and stability | Verify ground conditions can support the crane and anticipated support reactions. | C-000448 |
| 43 | Crane setup and stability | Identify underground utilities, voids, vaults, recently disturbed ground and adjacent excavations. | C-000449 |
| 44 | Crane setup and stability | Use suitable outrigger mats, blocking or supporting materials where required. | C-000450 |
| 45 | Crane setup and stability | Position and configure outriggers according to the applicable load chart and manufacturer instructions. | C-000451 |
| 46 | Crane setup and stability | Verify equipment is level within manufacturer requirements. | C-000451 |
| 47 | Crane setup and stability | Maintain required clearances from excavation edges and unstable ground based on assessed conditions. | C-000452 |
| 48 | Crane setup and stability | Verify counterweight, boom, jib and reeving configurations before lifting. | C-000453 |
| 49 | Crane setup and stability | Confirm the correct load chart applies to the actual crane configuration. | C-000423 |
| 50 | Crane setup and stability | Establish and maintain exclusion zones around rotating superstructures and counterweights. | C-000454 |
| 51 | Crane setup and stability | Do not exceed rated capacity for the operating configuration. | C-000423 |
| 52 | Crane setup and stability | Reassess ground and support conditions when weather or site conditions change. | C-000448 |
| 53 | Hoisting and load control | Take up rigging slack gradually. | C-000442 |
| 54 | Hoisting and load control | Verify rigging seating and load balance before continuing the lift. | C-000442 |
| 55 | Hoisting and load control | Perform a controlled initial lift to verify load stability where appropriate. | C-000455 |
| 56 | Hoisting and load control | Avoid sudden acceleration, abrupt stopping and shock loading. | C-000456 |
| 57 | Hoisting and load control | Keep personnel clear of suspended loads and the load fall zone except where necessary and permitted for the operation. | C-000457 |
| 58 | Hoisting and load control | Do not allow personnel beneath suspended loads. | existing C-000033 |
| 59 | Hoisting and load control | Use tag lines or other suitable load-control methods when necessary and safe. | C-000458 |
| 60 | Hoisting and load control | Never wrap tag lines around hands, wrists or the body. | C-000459 |
| 61 | Hoisting and load control | Keep personnel out of the line of pull and potential recoil path. | C-000460 |
| 62 | Hoisting and load control | Do not attempt to restrain an uncontrolled load using body weight. | C-000461 |
| 63 | Hoisting and load control | Maintain clearance between the load and adjacent structures. | C-000462 |
| 64 | Hoisting and load control | Stop if the load becomes snagged or obstructed. | C-000463 |
| 65 | Hoisting and load control | Determine and correct the cause of unexpected resistance before resuming. | C-000463 |
| 66 | Hoisting and load control | Avoid side loading unless the equipment and operation are specifically designed and approved for it. | C-000437 |
| 67 | Hoisting and load control | Maintain control of the load throughout lifting, movement and landing. | C-000464 |
| 68 | Communication and exclusion zones | Establish a designated signal person when required. | C-000429 |
| 69 | Communication and exclusion zones | Use recognized signals or an agreed communication system appropriate to the operation. | C-000465 |
| 70 | Communication and exclusion zones | Verify radio communication before lifting. | C-000465 |
| 71 | Communication and exclusion zones | Maintain reliable communication throughout the operation. | C-000466 |
| 72 | Communication and exclusion zones | Stop movement when required communication is lost. | C-000466 |
| 73 | Communication and exclusion zones | Accept stop or emergency-stop signals from anyone identifying an unsafe condition. | C-000467 |
| 74 | Communication and exclusion zones | Prevent conflicting operating instructions. | C-000468 |
| 75 | Communication and exclusion zones | Establish barricades or controlled access around lifting and landing areas. | existing C-000231 |
| 76 | Communication and exclusion zones | Coordinate with adjacent work crews. | C-000424 |
| 77 | Communication and exclusion zones | Keep personnel clear of blind spots, swing areas and load travel paths. | C-000469 |
| 78 | Communication and exclusion zones | Do not resume movement until the affected area is clear. | C-000469 |
| 79 | Landing and rigging removal | Prepare a stable landing area before moving the load into position. | C-000470 |
| 80 | Landing and rigging removal | Use suitable blocking, cribbing or dunnage to support the load. | C-000470 |
| 81 | Landing and rigging removal | Keep hands and feet clear of the landing interface. | C-000471 |
| 82 | Landing and rigging removal | Use suitable positioning tools rather than placing body parts between the load and fixed surfaces. | C-000471 |
| 83 | Landing and rigging removal | Verify the load is stable and adequately supported before slackening rigging. | C-000472 |
| 84 | Landing and rigging removal | Maintain lifting support until required connections or temporary supports are established. | C-000472 |
| 85 | Landing and rigging removal | Verify the load cannot roll, tip, slide or collapse after rigging removal. | C-000472 |
| 86 | Landing and rigging removal | Release rigging tension gradually. | C-000473 |
| 87 | Landing and rigging removal | Keep personnel clear of stored-energy release paths. | C-000460 |
| 88 | Landing and rigging removal | Remove rigging without pulling against unsecured loads or obstructions. | C-000474 |
| 89 | Landing and rigging removal | Inspect and store rigging appropriately after use. | C-000475 |
| 90 | Electrical exposure | Identify overhead power lines and other electrical sources before crane setup or movement. | C-000476 |
| 91 | Electrical exposure | Establish required approach distances based on voltage, equipment and applicable requirements. | C-000477 |
| 92 | Electrical exposure | Coordinate de-energization and grounding with the utility or responsible electrical authority when required. | C-000478 |
| 93 | Electrical exposure | Establish suitable warning boundaries and dedicated monitoring where required. | C-000477 |
| 94 | Electrical exposure | Consider the full movement envelope of the boom, load, rigging and load-control equipment. | C-000476 |
| 95 | Electrical exposure | Treat electrical lines as energized unless their status has been properly verified. | C-000478 |
| 96 | Electrical exposure | Stop operations if required electrical clearances cannot be maintained. | C-000479 |
| 97 | Electrical exposure | Establish an electrical-contact emergency response procedure appropriate to the equipment and operation. | C-000480 |
| 98 | Electrical exposure | Keep personnel away from equipment, loads and rigging that may have become energized. | C-000480 |
| 99 | Weather and environmental conditions | Evaluate wind speed, gusts, load surface area and manufacturer operating limitations. | C-000481 |
| 100 | Weather and environmental conditions | Stop lifting when environmental conditions prevent safe load control. | C-000482 |
| 101 | Weather and environmental conditions | Do not rely solely on a general wind-speed limit for all equipment and loads. | C-000481 |
| 102 | Weather and environmental conditions | Monitor changing weather conditions throughout the operation. | C-000482 |
| 103 | Weather and environmental conditions | Follow applicable lightning suspension and resumption procedures. | C-000483 |
| 104 | Weather and environmental conditions | Maintain adequate lighting and visibility. | C-000484 |
| 105 | Weather and environmental conditions | Stop movement when the operator or signal person cannot safely monitor the operation. | C-000484 |
| 106 | Weather and environmental conditions | Reassess equipment stability following heavy rain or changes in ground conditions. | C-000448 |
| 107 | Traveling with suspended loads | Verify the equipment is approved for traveling with a suspended load. | C-000485 |
| 108 | Traveling with suspended loads | Use the applicable travel or pick-and-carry capacity information. | C-000485 |
| 109 | Traveling with suspended loads | Assess the travel route, slope, ground support and overhead clearances. | C-000486 |
| 110 | Traveling with suspended loads | Maintain load position and travel speed within manufacturer requirements. | C-000486 |
| 111 | Traveling with suspended loads | Prevent uncontrolled load swing. | C-000464 |
| 112 | Traveling with suspended loads | Use spotters or signal persons where required. | C-000429 |
| 113 | Traveling with suspended loads | Keep personnel clear of the equipment and suspended-load travel path. | C-000469 |
| 114 | Multiple-crane lifts and load transfers | Establish an approved lift plan appropriate to the operation. | C-000425 |
| 115 | Multiple-crane lifts and load transfers | Determine anticipated load distribution throughout every stage of the lift. | C-000487 |
| 116 | Multiple-crane lifts and load transfers | Account for changes in center of gravity, operating radius and load orientation. | C-000487 |
| 117 | Multiple-crane lifts and load transfers | Verify each lifting device remains within its applicable capacity. | C-000487 |
| 118 | Multiple-crane lifts and load transfers | Establish coordinated operating instructions and designated lift direction. | C-000468 |
| 119 | Multiple-crane lifts and load transfers | Prevent unintended load transfer between lifting devices. | C-000488 |
| 120 | Multiple-crane lifts and load transfers | Stop if load distribution or movement differs from the approved plan. | C-000426 |
| 121 | Multiple-crane lifts and load transfers | Do not release one lifting device until the receiving system is verified capable of safely supporting the load. | C-000488 |
| 122 | Chain hoists, lever hoists and pulling devices | Verify the supporting structure and attachment point can withstand the anticipated loading. | C-000489 |
| 123 | Chain hoists, lever hoists and pulling devices | Select equipment rated and approved for the intended lifting or pulling operation. | C-000490 |
| 124 | Chain hoists, lever hoists and pulling devices | Inspect hooks, chains, ropes, brakes and attachment points. | C-000491 |
| 125 | Chain hoists, lever hoists and pulling devices | Verify the load chain or rope is correctly aligned. | C-000492 |
| 126 | Chain hoists, lever hoists and pulling devices | Do not extend operating handles unless specifically permitted by the manufacturer. | C-000493 |
| 127 | Chain hoists, lever hoists and pulling devices | Do not use load chains as slings unless specifically designed for that purpose. | C-000494 |
| 128 | Chain hoists, lever hoists and pulling devices | Keep personnel clear of tensioned equipment and potential recoil paths. | C-000460 |
| 129 | Chain hoists, lever hoists and pulling devices | Prevent side loading of hooks, hoists and supporting attachments. | C-000437 |
| 130 | Chain hoists, lever hoists and pulling devices | Maintain control of the load during raising and lowering. | C-000464 |
| 131 | Chain hoists, lever hoists and pulling devices | Do not use equipment intended only for pulling to suspend loads overhead. | C-000490 |
| 132 | Lifting clamps and specialized attachments | Verify the attachment is designed for the material, thickness, dimensions and lifting orientation. | C-000495 |
| 133 | Lifting clamps and specialized attachments | Verify minimum and maximum loading requirements where applicable. | C-000495 |
| 134 | Lifting clamps and specialized attachments | Inspect gripping surfaces, jaws, locking mechanisms and attachment points. | existing C-000407 |
| 135 | Lifting clamps and specialized attachments | Install and engage the attachment according to manufacturer instructions. | C-000496 |
| 136 | Lifting clamps and specialized attachments | Prevent unintended disengagement when the load is landed or rigging tension changes. | C-000443 |
| 137 | Lifting clamps and specialized attachments | Do not assume a vertical lifting clamp is suitable for horizontal lifting. | C-000495 |
| 138 | Lifting clamps and specialized attachments | Verify material surface conditions are compatible with the gripping method. | C-000496 |
| 139 | Lifting clamps and specialized attachments | Verify vacuum or magnetic lifting devices are suitable for the load and surface conditions. | C-000497 |
| 140 | Lifting clamps and specialized attachments | Establish appropriate precautions for loss of vacuum, power or magnetic holding force. | C-000497 |
| 141 | Lifting clamps and specialized attachments | Verify precast lifting inserts, compatible lifting hardware and required concrete strength before lifting. | C-000498 |
| 142 | Forklift and telehandler lifting | Use attachments approved for the equipment and intended suspended-load operation. | C-000499 |
| 143 | Forklift and telehandler lifting | Verify applicable capacity information for the installed attachment and equipment configuration. | C-000499 |
| 144 | Forklift and telehandler lifting | Do not assume standard fork capacity applies to a suspended load. | C-000499 |
| 145 | Forklift and telehandler lifting | Prevent rigging from unintentionally sliding or disengaging from the attachment. | C-000443 |
| 146 | Forklift and telehandler lifting | Maintain stability throughout lifting, placement and travel. | C-000500 |
| 147 | Forklift and telehandler lifting | Follow equipment-specific restrictions on boom extension, load position and travel. | C-000500 |
| 148 | Equipment removal and replacement | Verify equipment is disconnected from structural attachments, utilities and process systems before lifting. | C-000501 |
| 149 | Equipment removal and replacement | Establish applicable hazardous-energy isolation and line-breaking controls. | existing C-000242, C-000243 |
| 150 | Equipment removal and replacement | Identify residual contents that may affect load weight or center of gravity. | C-000502 |
| 151 | Equipment removal and replacement | Support equipment before removing load-bearing fasteners or connections. | C-000503 |
| 152 | Equipment removal and replacement | Verify the load is free before applying lifting force. | C-000501 |
| 153 | Equipment removal and replacement | Establish stable temporary support before releasing rigging. | C-000472 |
| 154 | Personnel lifting | Applicable restrictions and authorization for personnel hoisting. | C-000504 |
| 155 | Personnel lifting | Equipment and platform suitability. | C-000505 |
| 156 | Personnel lifting | Qualified planning and supervision. | C-000506 |
| 157 | Personnel lifting | Required inspections, trial lifts and proof testing. | C-000507 |
| 158 | Personnel lifting | Applicable fall protection. | C-000508 |
| 159 | Personnel lifting | Communication and controlled movement. | C-000509 |
| 160 | Personnel lifting | Environmental operating restrictions. | C-000510 |
| 161 | Personnel lifting | Emergency lowering and rescue arrangements. | C-000511 |

## 7. Applicability rules (design for implementation)

These implement candidate §6 and the Engineer findings. None is implemented.

1. **Lifting operation.** Recognized from lifting activity (lift, hoist, pick, fly, set with a crane, lower, swing, boom up/down, tail, upend, turn over, land, transfer, tandem, travel with a load) together with lifting equipment, rigging or a lifted object. A suspended load is established by the operation — the word *suspended* is not required (§6).
2. **Not a lifting operation.** Manual lifting, "pick up" (trash, materials), forklift forks carrying a load on the forks, an MEWP or aerial lift, and "lift station" do not establish suspended-load records. Brand names alone (Grove, Manitowoc, Liebherr, Link-Belt, Tadano, Terex, JLG, SkyTrak, Genie, Columbus McKinnon, Harrington, Coffing, Tirfor, Crosby) establish nothing.
3. **Inspection only.** Inspecting rigging or a crane with no lift presents H-RH-002 *Conditional* with inspection and removal-from-service controls, H-BT-002 (broken wire strands) and H-BT-007 (handling). Suspended-load, stability, swing and power-line records are added only when the inspection is during an active lift.
4. **Equipment classes.**
   - **Mobile cranes and boom-type equipment:** mobile, RT, AT, truck, crawler, lattice and carry-deck cranes; boom trucks; knuckle booms; derricks; and telehandlers or excavators used for lifting. These take the ground, outrigger, stability, swing-area and power-line records.
   - **Tower cranes:** take the power-line, swing-area and stability records. Ground records apply only where set-up is described.
   - **Overhead bridge, gantry, jib and monorail cranes and hoists:** none of the ground, outrigger, counterweight or power-line records (§6).
   - **Chain falls, lever hoists, come-alongs, Tirfor-type devices and winches:** H-RH-060, H-RH-023 and H-RH-075 by their use.
5. **Power lines** *(revised r2, Architect Response 001)*. The work-zone **assessment** is distinguished from confirmed **exposure**. For mobile, boom-type and tower crane operations, H-RH-044 is presented *Conditional* with the assessment control only (C-000476), unless the context establishes that no overhead lines are present. When overhead power lines are identified, H-RH-044 is *Explicit*, ranked first, and the clearance, de-energizing, stop and emergency controls are added. Bridge, gantry and jib crane operations take none of the mobile-crane clearance controls; their own electrical exposures (runway conductors, festoons, pendant controls, maintenance on energized crane circuits) keep the existing electrical records.
6. **Pulling vs. lifting.** A come-along, winch or Tirfor-type device used to pull horizontally takes H-RH-023 and H-RH-060, not suspended-load records. Using a pulling-only device for an overhead lift takes H-RH-075 first.
7. **Clamp roles** (extends the Package 003 distinction):
   - **Lifting clamps gripping the load** (plate, beam, pipe and drum clamps): H-RH-063, with C-000407 and the clamp-selection controls.
   - **Overhead beam clamps or trolleys used to hang a hoist:** H-RH-060, with structure capacity and loading direction (C-000489, C-000437), attachment compatibility and disengagement (C-000406), inspection (C-000407) and end-of-travel protection for trolleys and monorails (C-000521) *(r2)*.
   - **Fall protection anchorage connectors:** unchanged — H-DF-042 to H-DF-044.
   - **Clamp hardware for hangers and supports:** fastening only.
   A task naming more than one role keeps all applicable records.
8. **Process equipment.** Lifting new fabricated pipe spools, pumps or vessels takes no process-isolation or process-contents records (P3-U17). Removing *existing* process equipment, or any task with process-system context, adds H-RH-071 with C-000242 and C-000243.
9. **Vessels.** Lifting, tailing or upending a vessel is not vessel entry. Confined-space entry records require entry cues.
10. **Multiple lifting devices.** Tandem, two-crane, tailing-crane and hoist-to-hoist transfers take H-RH-056 first and the load-share controls.
11. **Personnel hoisting** *(revised r2)*. Recognition and H-RH-073 / H-RH-074 are retained. Only C-000504 (restriction — not presented for steel erection, which is evaluated separately) and C-000505 (platform) are presented. C-000506 to C-000511 are **withheld** pending validation. Independently applicable controls (fall zone, communication, crane stability, power lines) still apply. Nothing presented implies the personnel lift is authorized.
12. **Critical and complex lifts.** Explicit terms (critical lift, engineered lift, tandem, near power lines, over occupied areas) rank H-RH-032 and the plan and supervision controls. No percentage-of-capacity threshold is used (§6).
13. **Tag lines** *(revised r2)*. There is no universal tag-line requirement. On a mine site (mine, quarry, pit operations, or the task naming MSHA), C-000519 is presented for suspended loads that may need steadying or guidance. Tag-line use adds the entanglement (H-RH-022), handler-position (C-000520), non-conductive (near identified lines) and recoil considerations.
14. **Independent exposures preserved.** Electrical, fall, hot work, excavation, confined-space, chemical and process records apply on their own cues and are never suppressed because rigging is the primary activity (§6).
15. **Landing and release.** Land, set, place, rest and secure take H-RH-018, H-RH-069 and H-BT-015. Removing, releasing or unhooking rigging takes H-BT-015 and H-RH-023, never demolition records.
16. **Assembly and disassembly.** "Assemble", "erect", "dismantle" or "disassemble" a crane, or counterweight installation, takes H-RH-039 first, never demolition or entertainment-rigging records.
17. **Multiple-lift rigging** *(r2)*. Christmas-treeing, multiple-lift rigging assemblies and multiple-member steel lifts take H-RH-076 first, with C-000522 to C-000527. They also take H-BT-014 (personnel beneath the remaining suspended members), C-000037 (premature release) and C-000031 (stability of members already placed). A tandem or two-crane lift (H-RH-056) and a single load on a multi-leg sling (H-RH-003) are not multiple lifts. Multiple lifts of members other than beams and similar structural members are recognized, and C-000522 states the restriction.
18. **More protective requirement** *(SIL PO Decision 007)*. Where regulatory, manufacturer and project or client requirements overlap, the controls defer to the more protective one. No Adena-specific threshold or definition is introduced.

## 8. Ranking (candidate §7)

| Situation | First records |
|---|---|
| Crane set-up near an excavation or over a vault | H-RH-030, H-RH-029 |
| Hoisting near overhead power lines | H-RH-044 |
| Synthetic slings over sharp steel | H-RH-008, H-RH-002 |
| Upending or tailing a vessel | H-RH-006, H-RH-056 |
| Landing structural steel | H-BT-015, H-RH-018, H-BT-014 |
| Chain hoist from a beam | H-RH-060 |
| Tandem or multiple-crane lift | H-RH-056 |
| Personnel platform | H-RH-073, H-RH-074 |
| Large panel in gusty wind | H-RH-046 |
| Snagged load | H-RH-054 |
| Pulling-only device used to lift | H-RH-075 |
| Crane assembly or disassembly | H-RH-039 |
| Christmas-treeing / multiple-lift rigging | H-RH-076 |

Consequence class 3 (highest) is proposed for H-RH-002, 029, 030, 039, 041, 044, 056, 063, 066, 071, 073, 074, 075 and 076, and for H-BT-014 / H-BT-015. Class 2 is proposed for the rest. The initial suggestion count, Show More, no padding and no automatic selection are unchanged.

## 9. Legacy library — proposed supersession and collision corrections

| Legacy line (entry) | Disposition |
|---|---|
| 5 Rigging — Suspended load / dropped load | H-BT-014, H-RH-002 |
| 5 Rigging — Struck-by from swinging load | H-BT-014 |
| 5 Rigging — Crushing / caught-between from load | H-BT-014 (H-RH-018 at landing) |
| 5 Rigging — Pinch points in rigging components | H-RH-016 |
| 5 Rigging — Stored energy in rigging under tension | H-RH-023 |
| 5 Rigging — Rigging failure from overload or damage | H-RH-002, H-RH-003 |
| 5 Rigging — Line of fire during rigging operations | H-RH-023, H-BT-014 |
| 5 Rigging — Overhead work hazard | Dropped (covered by H-BT-014 / H-BT-018 where applicable) |
| 5 Rigging — Swing radius exposure | H-RH-020 where a crane is recognized; otherwise dropped |
| 6 Crane — Suspended load / struck-by | H-BT-014 |
| 6 Crane — Crane swing radius exposure | H-RH-020 |
| 6 Crane — Equipment tip-over from overload or soft ground | H-RH-029 |
| 6 Crane — Power line contact | H-RH-044 (class per §7.5) |
| 6 Crane — Rigging failure | H-RH-002 |
| 6 Crane — Dropped load | H-RH-002 |
| 6 Crane — Crushed-by from crane movement | H-RH-020 |
| 6 Crane — Communication failure between operator and rigger | H-RH-050 |
| 6 Crane — Ground bearing failure under outriggers | H-RH-030 (mobile equipment only) |
| 25 Overhead — Overhead load exposure | H-BT-014 when a load is lifted |

**Keyword collisions found in v1.4.1-p1** (phrase-scoped corrections proposed — the keywords stay, the false readings are masked):

| Phrase | False reading today | Correction |
|---|---|---|
| manual lifting, lift boxes, "pick up" | Rigging and crane entries (suspended load, tip-over) | "lifting" / "pick" count only with lifting equipment or rigging |
| remove / dismantle rigging, crane or pump | Demolition entry | Removal of rigging, cranes and equipment is not demolition |
| vessel, tank, vault (lifting or setting up over) | Confined-space entry | Entry cues required |
| panel (precast, rockwork, large panel) | Electrical-panel entry (shock, arc flash) | Electrical only with electrical cues |
| counterweight (crane) | Entertainment rigging / fly system, pyrotechnics | Crane context masks the stage entry |
| beam (lifting a beam, chain fall on a beam) | Steel erection leading-edge fall | Leading-edge records only with erection or elevation cues |
| overhead bridge crane | Mobile-crane entry (outriggers, ground, power lines) | Bridge, gantry and jib cranes mapped separately (§7.4) |
| JLG telehandler | Aerial-lift entry | Brand alone establishes nothing; telehandler is equipment for lifting |
| pipe spool / flange | Process-piping entry (P3-U17) | Scheduled correction P3-U17 |
| lifting point (excavator) | H-DF-026 anchor failure (fall protection, suspended access or lifting anchors) | An equipment lifting point is not an installed anchor |

## 10. Scheduled corrections carried with Package 004 (§11)

A3-U1 (legacy signed JSA document integrity), P3-U17 (pipe-spool fabrication), P3-U18 (sharp-metal control applicability) and P3-U19 (non-torch roofing) keep their approved requirements (`SIL-UNRESOLVED-REGISTER.md`). Regression scenarios 12, 2, 3, 22 and N-series cover the Package 004 interaction with P3-U17 and P3-U18.

## 11. r2 — Architect Response 001 and SIL PO Decision 007

`SIL-PKG-004-ARCHITECT-RESPONSE-001.md` and `SIL-PO-DECISION-007.md` are preserved verbatim.

| Disposition | r2 change |
|---|---|
| Reconciliation approach accepted; record-level acceptance pending, with P-1 to P-5 | No change. P-1 to P-5 stay proposed. |
| Electrical: assessment vs. exposure | §7.5. Clearance controls on H-RH-044 apply only when lines are identified. *Conditional* for mobile, boom-type and tower crane operations unless the context establishes no lines. None of these on bridge cranes. |
| Tag lines: MSHA requirement; no universal requirement; conductivity, entanglement, recoil, positioning, effectiveness | C-000519 (mine sites) and C-000520 (handler position). §7.13. |
| Four clamp applications accepted; hoist-support clamps and trolleys | H-RH-060 retitled to include unintended travel. C-000406, C-000407 and C-000521 (end-of-travel) attached. C-000489 reworded to capacity and loading direction. §7.7. |
| Multiple-lift rigging added | New record H-RH-076 and controls C-000522 to C-000527. Numeric limits verified against 1926.753(e) by the Engineer but kept out of user-facing text. §7.17. |
| Personnel hoisting: retain recognition, withhold unvalidated controls, no implied authorization, steel erection separate | C-000506 to C-000511 withheld. C-000504 not presented for steel erection. §7.11. |
| 20 production defects accepted, subject to crosswalk review; A3-U1 and P3-U17 to P3-U19 preserved | No change. |
| 12 additional regression scenarios | `SIL-PKG-004-REGRESSION.md` §D |
| SIL PO Decision 007: no Adena-specific requirements; follow the more protective requirement; no unsupported thresholds | No policy records. Rewording: C-000425 (lift plan), C-000430 (supervision) and C-000483 (lightning) defer to applicable requirements. §7.18. |

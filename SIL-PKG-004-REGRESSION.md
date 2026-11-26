> **Repository Record (AD-008 §6):** Package 004 regression library, revision r2 (Architect Response 001) — scenarios for the future authorized implementation. Candidate under review — not approved. Nothing in production is changed by this document. No Package 004 implementation is authorized.

# SIL-PKG-004 — Regression Library (r2)

**79 scenarios:**
- **§A:** the 50 required by candidate §10.
- **§B:** 9 negative-applicability scenarios.
- **§C:** 8 mixed-operation scenarios.
- **§D:** 12 scenarios required by Architect Response 001.

IDs are the reconciled records (`SIL-PKG-004-RECONCILED.md`). "First" uses the v1.4.0 ranking (Explicit → Inferred → Legacy → Conditional). The Package 001–003 suites (447 + 1,162 assertions) must keep passing. The scheduled corrections A3-U1 and P3-U17 to P3-U19 carry their own scenarios into the same suite.

## A. Required scenarios (candidate §10)

| # | Task | Must include | Must not include |
|---|---|---|---|
| 1 | Inspect slings and shackles | H-RH-002 *Conditional*; H-BT-002; H-BT-007; C-000432, C-000433 | H-BT-014, H-RH-020, H-RH-029, H-RH-030, H-RH-044 (inspection only — §7.3) |
| 2 | Rig structural steel | H-BT-014 (with C-000034–C-000036 under steel erection); H-RH-002; H-RH-016 | H-RH-029, H-RH-030 (no crane set-up named) |
| 3 | Lift beam with two synthetic slings | H-BT-014; H-RH-003; H-RH-008; H-RH-002; C-000435, C-000438, C-000441 | Leading-edge fall (no erection or elevation cue — D-17) |
| 4 | Lift sharp-edged steel with roundslings | H-RH-008 **first**; C-000438 | Cutting-tool controls (P3-U18) |
| 5 | Hoist unbalanced fabricated assembly | H-RH-006 **first**; H-BT-018 with C-000445; C-000420, C-000455 | — |
| 6 | Set up crane beside excavation | H-RH-030 **first**, H-RH-029; C-000452, C-000448; H-RH-044 *Conditional* with C-000476 only | Excavation-entry hazards for workers in the trench (no entry cue) |
| 7 | Set crane outriggers over underground vault | H-RH-030 **first**; C-000449, C-000450 | Confined-space atmosphere and engulfment (D-10) |
| 8 | Lift near overhead power lines | H-RH-044 **Explicit, first**; C-000476, C-000477, C-000478, C-000479, C-000480 | Numeric approach distance in user-facing text |
| 9 | Swing steel into building | H-BT-014; H-RH-038; H-RH-020 *Conditional*; H-RH-049 *Conditional* | Empty result (D-1) |
| 10 | Land beam on columns | H-BT-015 (C-000037); H-RH-018; H-BT-014; H-BT-017 (erection at elevation) | — |
| 11 | Remove rigging after securing steel | H-BT-015; H-RH-023; H-RH-016; C-000473, C-000474 | Demolition hazards (D-5); H-RH-029, H-RH-030 |
| 12 | Lift pipe spool fabricated in shop | H-BT-014; H-RH-002; H-RH-006 | Process-fluid hazards; C-000242, C-000243; line-break controls (P3-U17) |
| 13 | Remove existing process pump with crane | H-RH-071; H-BT-014; C-000242, C-000243; C-000501; H-RH-044 *Conditional* | Demolition hazards (D-5) |
| 14 | Lift vessel using two cranes | H-RH-056 **first**; H-RH-006; C-000487, C-000488 | Confined-space entry hazards (D-6) |
| 15 | Tail and upend vessel | H-RH-006 **first**; H-RH-056; C-000420, C-000487 | Confined-space entry hazards |
| 16 | Transfer load between chain hoists | H-RH-056 **first**; H-RH-060; C-000488, C-000489 | H-RH-020, H-RH-029, H-RH-030, H-RH-044 |
| 17 | Lift motor with overhead bridge crane | H-BT-014; H-RH-002; H-RH-042 | H-RH-020, H-RH-029, H-RH-030, H-RH-044; C-000451, C-000450, C-000448 (D-3) |
| 18 | Install chain fall on existing beam | H-RH-060 **first**; C-000489, C-000491 | Leading-edge fall (D-17); H-RH-029, H-RH-030 |
| 19 | Pull equipment with come-along | H-RH-023 **first**; H-RH-060 | H-BT-014; H-RH-075 (pulling, not lifting — D-13) |
| 20 | Hoist equipment with lever hoist | H-RH-060; H-BT-014; H-RH-002; C-000493, C-000490 | — |
| 21 | Lift plate using vertical plate clamp | H-RH-063 **first**; C-000495, C-000496; C-000407 | Empty result (D-1); H-DF-042 to H-DF-044 |
| 22 | Lift steel using beam lifting clamps | H-RH-063 (clamp gripping the load); C-000495; C-000407 | H-DF-042 to H-DF-044, C-000408–C-000418 (fall protection connectors); leading-edge fall |
| 23 | Install beamers for fall protection | Unchanged from Package 003 FP-1: H-DF-026, H-DF-042, H-DF-043, H-DF-044, H-BT-001, H-BT-017, H-BT-018 | Any H-RH record (not a lifting operation) |
| 24 | Use beam trolley to move material | H-RH-060 **first**; C-000489, C-000521; C-000406; C-000407; H-BT-014; H-RH-002 | H-DF-042 to H-DF-044 and C-000408 to C-000418 |
| 25 | Lift precast panel using embedded lifting inserts | H-RH-010 **first**; C-000498 | Electrical-panel hazards (D-7) |
| 26 | Lift sheet material using vacuum lifter | H-RH-063 **first**; C-000497 | Empty result (D-1) |
| 27 | Lift steel plate with magnetic lifter | H-RH-063 **first**; C-000497 | Empty result (D-1) |
| 28 | Travel with suspended load on telehandler | H-RH-036 **first**; H-RH-066; C-000485, C-000499 | H-RH-020 (no rotating superstructure) |
| 29 | Lift equipment using approved excavator lifting point | H-RH-066; H-BT-014; C-000499 | H-DF-026 (D-16) |
| 30 | Guide suspended load with tag line | H-RH-022 **first**; H-BT-014; C-000459, C-000457 | — |
| 31 | Recover snagged load | H-RH-054 **first**; H-RH-011; H-RH-023; C-000463 | Empty result (D-1) |
| 32 | Lift large panel during gusty winds | H-RH-046 **first**; C-000481, C-000482 | Electrical-panel hazards (D-7) |
| 33 | Perform blind lift using radio communication | H-RH-049 and H-RH-050 **first**; C-000465, C-000466, C-000429 | Empty result (D-1) |
| 34 | Assemble crane counterweights | H-RH-039 **first**; C-000513, C-000453 | Entertainment fly-system and pyrotechnic hazards (D-8) |
| 35 | Dismantle lattice-boom crane | H-RH-039 **first**; C-000514, C-000513 | Demolition hazards (D-5) |
| 36 | Hoist personnel using crane-suspended platform | H-RH-073 and H-RH-074 **first**; C-000504, C-000505; fall-zone and communication controls | Withheld controls C-000506–C-000511; any wording implying the lift is authorized; duplicate legacy lines (D-11, D-12) |
| 37 | Move materials using forklift forks | Existing material-handling and powered-industrial-truck coverage | H-BT-014, H-RH-002, H-RH-066 — no suspended load (negative) |
| 38 | Lift suspended load using approved forklift attachment | H-RH-066 **first**; H-BT-014; C-000499, C-000500 | — |
| 39 | Remove pump after isolating process lines | H-RH-071; C-000242, C-000243; C-000501, C-000502 | Demolition hazards (D-5) |
| 40 | Install structural steel while using sliding fall protection anchors | H-DF-042, H-DF-043, H-DF-044 (Package 003); H-BT-014 with steel-erection controls; H-BT-017 — all retained (mixed) | Suppression of either set |
| 41 | Land machinery on cribbing | H-RH-069 **first**; H-RH-018; C-000470, C-000472 | Empty result (D-1) |
| 42 | Remove rigging from unstable load | H-BT-015 **first**; H-RH-069; C-000472 | Demolition hazards (D-5) |
| 43 | Inspect crane without operating it | Inspection and access records only (H-BT-017 where climbing is described) | H-BT-014, H-RH-002 active, H-RH-020, H-RH-029, H-RH-044 (D-14) |
| 44 | Move unloaded crane through site | H-RH-036; H-RH-044 *Conditional* (traveling near lines) | H-BT-014, H-RH-002 (no load — D-14) |
| 45 | Lift steel while welding occurs nearby | H-BT-014; H-RH-002; hot work records; H-HW-037 (T-16) | Empty lifting set (D-15) |
| 46 | Lift ride component through restricted opening | H-RH-038 **first**; H-BT-014; H-RH-049 *Conditional* | Empty result (D-1) |
| 47 | Lift load with changing center of gravity | H-RH-006 **first**; C-000420, C-000455 | Empty result (D-1) |
| 48 | Use winch to pull equipment horizontally | H-RH-023; H-RH-060 | H-BT-014, H-RH-075 |
| 49 | Use pulling-only winch for proposed overhead lift | H-RH-075 **first**; C-000490 | — |
| 50 | Perform critical lift | H-RH-032; H-RH-029; C-000425, C-000430 | Any percentage-of-capacity threshold in user-facing text |

## B. Negative applicability

| # | Task | Must include | Must not include |
|---|---|---|---|
| N-1 | Manual lifting of boxes into truck | Existing manual-handling coverage | Any H-RH record; H-BT-014; legacy rigging and crane lines (D-19) |
| N-2 | Pick up trash around site | Existing housekeeping coverage | Any H-RH record; crane and rigging lines (D-19) |
| N-3 | Inspect JLG boom lift | Existing aerial-lift coverage | H-RH-073, H-RH-074 (an MEWP is not a crane-suspended platform) |
| N-4 | Set JLG telehandler outriggers before lifting | H-RH-030; H-RH-066 *Conditional* | Aerial-lift entry from the brand alone (D-20) |
| N-5 | Work from forklift-mounted work platform | Existing coverage | H-RH-073, H-RH-074 |
| N-6 | Replace electrical panel | Existing electrical coverage, unchanged | Any H-RH record |
| N-7 | Inspect lift station pumps | Existing coverage | Any H-RH record ("lift station" is not lifting) |
| N-8 | Install beam clamps on beam flange for conduit hangers | H-BT-001 (Package 003 FP-20) | Any H-RH record; H-DF-026 |
| N-9 | Boom up aerial lift to the deck | Existing aerial-lift coverage | H-RH-020, H-RH-029, H-RH-041 (boom lift is not a crane) |

## C. Mixed operations

| # | Task | Must include | Must not include |
|---|---|---|---|
| M-1 | Rig chain fall from beam clamp and install beamers for fall protection | H-RH-060 (C-000406, C-000407) **and** H-DF-042 to H-DF-044 (C-000408 to C-000418) | Either set suppressed |
| M-2 | Lift new pump off skid, then break existing process flange | H-BT-014; H-RH-002; C-000242, C-000243 and process-piping controls from the flange break | Process records attributed to the new pump lift alone |
| M-3 | Hoist load with chain hoist while welding overhead | H-RH-060; H-BT-014; H-HW-037 with C-000247, C-000248, C-000158; hot work records | — |
| M-4 | Guide load with tag line near overhead power lines | H-RH-044 **first**; H-RH-022; C-000516 | — |
| M-5 | Lift conveyor pulley with crane at phosphate mine | H-BT-014; H-RH-002; C-000519 | Tag-line control suppressed on a mine site |
| M-6 | Perform multiple lift of beams (christmas tree rigging) | H-RH-076 **first**; C-000522, C-000523, C-000525, C-000526; H-BT-014; C-000037 | H-RH-056 (not a tandem lift) |
| M-7 | Set rockwork panel with crane, then weld clips at height | H-BT-014; H-RH-002; hot work records; H-BT-017 | Electrical-panel hazards (D-7) |
| M-8 | Lift HVAC unit to roof with crane | H-BT-014; H-RH-044 *Conditional*; H-BT-017 (roof location, Package 003 PD-2) | Roofing hazards (no roofing work) |

## D. Required by Architect Response 001

| # | Task | Must include | Must not include |
|---|---|---|---|
| D-1 | Christmas-tree structural steel | H-RH-076 **first**; C-000522, C-000523, C-000524, C-000525, C-000526, C-000527; H-BT-014; C-000037; C-000031 | H-RH-056 |
| D-2 | Hoist beams on a multiple-lift rigging assembly | H-RH-076 **first**; C-000523, C-000525 | H-RH-056 |
| D-3 | Perform tandem crane lift | H-RH-056 **first**; C-000487, C-000468 | H-RH-076 (not a multiple lift) |
| D-4 | Lift single load using a four-leg sling | H-RH-003 (unequal leg loading, C-000435); H-BT-014; H-RH-002 | H-RH-076, H-RH-056 (a multi-leg sling is not a multiple lift) |
| D-5 | Install beam clamp to support chain hoist | H-RH-060 **first**; C-000489, C-000437; C-000406; C-000407 | H-DF-042 to H-DF-044; C-000408 to C-000418; H-DF-026 (P-4) |
| D-6 | Install trolley for overhead hoist | H-RH-060 **first**; C-000521, C-000489; C-000406; C-000407 | H-DF-042 to H-DF-044; C-000408 to C-000418 |
| D-7 | Use beamers while receiving suspended steel | H-DF-042, H-DF-043, H-DF-044 **and** H-BT-014, H-RH-018 — both sets (mixed) | Either set suppressed |
| D-8 | Lift near energized overhead power lines | H-RH-044 **Explicit, first**; C-000477, C-000478, C-000479, C-000480 | Numeric approach distance in user-facing text |
| D-9 | Operate overhead bridge crane indoors | H-BT-014; H-RH-042 | H-RH-044; C-000476, C-000477, C-000451, C-000448; H-RH-020, H-RH-029, H-RH-030 |
| D-10 | Mobile crane setup with no overhead electrical lines present | H-RH-030; H-RH-029 | H-RH-044 and C-000477, C-000478 (context establishes no lines) |
| D-11 | Guide suspended load at an MSHA-regulated surface mine | H-RH-022; H-BT-014; C-000519, C-000459, C-000520 | Universal tag-line wording on non-mine tasks |
| D-12 | Crane-suspended personnel platform during steel erection | H-RH-073; H-RH-074; C-000505; steel-erection fall records | C-000504 (steel erection evaluated separately); withheld C-000506–C-000511; any wording implying authorization |

**Common to every scenario:**

- No regulatory citation in user-facing text.
- No duplicate suggestions.
- No padding.
- No automatic selection.
- The six RCSC controls stay absent.

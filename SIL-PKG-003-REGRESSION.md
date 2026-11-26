> **Repository Record (AD-008 §6):** Package 003 regression library, revision r1. Scenarios for the future authorized implementation; they are not run against v1.4.0-p1, which implements none of Package 003. Not approved. Nothing in production is changed by this document (SIL PO Decision 005 §6).

# SIL-PKG-003 — Regression Library (r1)

**68 scenarios:** §A Architect candidate §10 (40) · §B SIL PO Decision 005 §3 (8) · §C Engineer additions (20: collisions, policy boundaries, findings E-4 to E-16).

**Format:** *Must include* lists records or controls that must appear. *Must not include* lists records that must not appear. Ranking checks follow the v1.4.0 classes (Explicit → Inferred → Legacy → Conditional). At implementation these become `tests/sil-regression.js` cases, alongside the existing 447, which must keep passing.

Baseline evidence: every §A scenario was also run against v1.4.0-p1; observed defects are listed in `SIL-PKG-003-PRODUCTION-CROSSWALK.md` §C.

## A. Architect candidate scenarios

| # | Task text | Must include | Must not include |
|---|---|---|---|
| A-1 | Drill holes in structural steel with a cordless drill | H-BT-010, H-BT-004, H-HW-029, H-BT-002, H-BT-021; C-000004 (P-000001) | H-DF-017; striking records |
| A-2 | Drill anchor holes in concrete with a rotary hammer | H-DF-017 (C-000315, C-000317), H-BT-020, H-BT-019, H-BT-010, H-HW-029 | H-BT-029, H-BT-030; respirator line for Table 1 row (vii) |
| A-3 | Wet core drill through elevated slab | H-DF-012, H-DF-021 (C-000328), H-DF-022, H-BT-026 [wet], H-DF-017, H-BT-017, C-000113 | Concrete-placement records |
| A-4 | Core drill post-tensioned slab | H-DF-015 (C-000306, C-000307), H-DF-012, H-DF-017 | — |
| A-5 | Mag drill holes in vertical column | H-DF-010 (C-000107, C-000291), H-BT-018 | Magnetic lifting; silica |
| A-6 | Mag drill holes overhead in beam flange | H-DF-010 ranked high, H-BT-032, H-BT-018 (H-BT-017 only with an elevation cue) | Process piping (F-3) |
| A-7 | Drill press small steel brackets | H-BT-010 with C-000276, H-HW-031 (C-000218), H-BT-021 (C-000284 conditional) | C-000004 at the spindle (replaced by C-000276 — SIL PO Decision 006 §1) |
| A-8 | Install wedge anchors in concrete | H-DF-024, H-DF-017, drilling records | H-DF-023 |
| A-9 | Install adhesive anchors overhead | H-DF-023, H-DF-024 [if adhesive] (C-000343, C-000345), H-BT-032, H-DF-017 | Coating records (F-6) |
| A-10 | Install fall protection anchor in structural concrete | H-DF-026, H-DF-024, H-BT-013 [structural], H-DF-017 | — |
| A-11 | Inspect existing fall protection anchor | Inspection context only | H-DF-024, H-DF-026 installation controls, drilling records (F-7) |
| A-12 | Drill wall containing electrical conduits | H-DF-013 first (C-000301, C-000302, C-000304) | — |
| A-13 | Drill process enclosure | H-DF-014, H-DF-013 (conditional) | — |
| A-14 | Fasten steel track with powder-actuated tool | H-DF-027 (C-000348), H-DF-028 (C-000356), H-DF-029; C-000354 (P-000010) | Drywall records (F-14); C-000055 alongside C-000354 |
| A-15 | Powder-actuated tool misfire | H-DF-030 first (C-000365) | Any numeric waiting period |
| A-16 | Install wood trim with battery brad nailer | H-DF-032, H-DF-028 [nailer] (C-000361), H-DF-018 | H-DF-027, H-DF-030, C-000354, H-BT-025, H-DF-040 |
| A-17 | Frame walls with pneumatic framing nailer | H-DF-032, H-DF-028 [nailer], H-BT-025 [pneumatic], H-DF-040, H-BT-019 | C-000354; hydraulic injection (F-9) |
| A-18 | Gas-actuated fastening of track to concrete | H-DF-028, H-DF-031 (C-000368), H-DF-029 | Oxy-fuel records; hot work; C-000354 |
| A-19 | Install blind rivets in sheet metal | H-BT-028 [riveting] (C-000373), H-BT-002, H-BT-001 (C-000375) | Empty result (F-8) |
| A-20 | Cut holes in wood with hole saw | H-BT-004 (C-000227), H-HW-031, H-DF-018 | H-DF-017 |
| A-21 | Drill painted steel with unknown coating | H-DF-019 conditional (C-000322, C-000173) | H-HW-016 lead as established |
| A-22 | Drill and grind stainless steel | Drilling + grinding records; hot work for the grinding; C-000221 (P-000009) for the grinding | C-000112 / P-000002 (stainless alone ≠ lath) |
| A-23 | Drill stainless lath during demolition | C-000112 (P-000002), H-BT-002, demolition records | — |
| A-24 | Review SDS for anchor adhesive | H-DF-023 (C-000334) | Rotary-hammer recognition |
| A-25 | Drill holes with SDS Max rotary hammer | Rotary-hammer drilling records, H-BT-020 | Chemical-use records (F-5) |
| A-26 | Pilot drill and tap steel threads | Drilling records | Hot tap C-000241; water |
| A-27 | Install self-drilling screws from boom lift | H-BT-017 (C-000040, C-000041), H-BT-018, fastening records | Crane records (F-4) |
| A-28 | Drill concrete and torque steel connections | Package 001 bolting + H-DF-017 + drilling | — |
| A-29 | Weld bracket, drill anchor holes and install mechanical anchors | Package 002 welding + hot work + H-DF-024 + drilling | Hot work attributed to drilling |
| A-30 | Change drill bit and clear jammed nailer | H-HW-030 (C-000224 generalized), H-DF-032 | — |
| A-31 | Drill unspecified material | General drilling records only | H-DF-017, H-DF-018, H-DF-019 |
| A-32 | Powder coat steel | Coating records only | Any PAT record |
| A-33 | Drill through wall into occupied room | H-DF-012 (C-000298, C-000299), H-DF-013 conditional | — |
| A-34 | Load adhesive anchor before cure | H-DF-024 (C-000345) first | — |
| A-35 | Damaged lithium-ion drill battery | H-DF-039 explicit (C-000387, C-000388) | — |
| A-36 | Pneumatic drill inside confined space | H-BT-025, H-DF-040, drilling records, confined-space records | Hydraulic records (F-9) |
| A-37 | Drill elevated slab leaving hole | H-DF-012, H-BT-017 with C-000113 | — |
| A-38 | Drill and fasten excavation support | Excavation records + drilling + fastening | — |
| A-39 | Drill prestressed beam | H-BT-013 [structural] (C-000311), H-DF-015 conditional | — |
| A-40 | Powder-actuated fastening of steel to concrete near flammable vapors | H-DF-031 first (C-000367, C-000133, C-000134) | Hot work permit as required by the fastening alone |

## B. SIL PO Decision 005 scenarios

| # | Task text | Must include | Must not include |
|---|---|---|---|
| B-1 | Operate powder-actuated fastening tool | C-000354 (P-000010) with C-000054 | C-000055 in its place |
| B-2 | Operate battery-powered brad nailer | Exposure-based eye protection (C-000054) | C-000354 |
| B-3 | Operate pneumatic framing nailer | C-000054; C-000055 / C-000111 where the exposure requires | C-000354 |
| B-4 | Induction heating with combustibles nearby | Hot work Explicit: C-000114, C-000115, C-000116; H-HW-008 | — |
| B-5 | Resistance heating PWHT with insulation and combustibles nearby | Hot work Explicit: C-000114, C-000115, C-000116; H-HW-008, H-BT-026 | Welding-process records (F-12) |
| B-6 | Induction heating, area cleared — no ignition hazard | H-HW-008, H-BT-026 | Automatic C-000114, C-000115, C-000116 |
| B-7 | Induction heating pipe | Hot work records **Conditional**; C-000393 | Hot work Explicit; hot work absent |
| B-8 | Induction preheating structural steel | H-HW-008; hot work conditional | H-HW-024, H-HW-025, H-HW-006 (F-11) |

## C. Engineer additions

| # | Task text | Must include | Must not include |
|---|---|---|---|
| C-1 | Conduct fire drill for the crew | — | ACT-0017 drilling records |
| C-2 | Run flux core welds on column splice | Package 002 welding | Core drilling |
| C-3 | Directional bore under road for conduit | Excavation / utility records | ACT-0017 drilling records |
| C-4 | Drill blast holes with drill rig | Production T39 surface mining | Handheld drilling records |
| C-5 | Hot tap process line | C-000241 (Package 002) | Thread tapping |
| C-6 | Shoot pins into deck with Hilti gun | H-DF-027, H-DF-028, H-DF-029; C-000354 (SIL PO Decision 006 §3) | — |
| C-7 | Deck gun | Nothing established alone (SIL PO Decision 006 §3) | PAT records |
| C-8 | Drill holes in beam flange from boom lift | H-DF / drilling, H-BT-017 lift | Process piping (F-3); crane (F-4) |
| C-9 | Drill concrete with hammer drill | H-DF-017, H-BT-020 | H-BT-029, H-BT-030 (F-2) |
| C-10 | Core drill PT slab | H-DF-015 | — |
| C-11 | PT session after shift | — | H-DF-015 |
| C-12 | Hot rivet structural connection | Heating / hot work (P3-U8) | — |
| C-13 | Install structural rivets with lockbolt tool | Fastening records | Hot work |
| C-14 | Drill press steel brackets wearing gloves | C-000276; P-000001 for handling the steel | C-000004 at the spindle (SIL PO Decision 006 §1) |
| C-15 | Fasten metal track with screw gun | Fastening records | Drywall silica (F-14) |
| C-16 | Clean drilled holes with compressed air | H-DF-040 (C-000391, C-000392); silica housekeeping (C-000318) with a silica cue | — |
| C-17 | Wet core through slab above occupied office | H-DF-012, H-DF-021 runoff (C-000328) | — |
| C-18 | Charge cordless drill batteries | H-DF-039 (C-000384) | — |
| C-19 | Annular cutter on mag base drilling plate | H-DF-010 | Magnetic lifting |
| C-20 | Inspect anchors installed yesterday before loading | C-000341 (acceptance) | Drilling records |

> **Repository Record (AD-008 §6):** Permanent canonical control registry (Architect Response 002 §1). Entries are **candidate** content until the Product Owner approves the package that introduces them. No production control is retired by this registry.

# Safety Intelligence Library — Canonical Control Registry

**Rules (Architect Response 002 §1):**
- Identifiers use the format `C-000001` and run sequentially. They are permanent and activity-independent, are never changed, and are **never reused after retirement**.
- One canonical control may relate to many hazards. Where needed, a relationship carries its own applicability condition, shown as `[condition]`.
- Equivalent production controls (`HAZ_TO_CONTROL` entries C*n* in `A4-LIBRARY-EXPORT.md`) are mapped below. **A production control is not retired until all of its valid relationships are accounted for.** No production control is retired at this revision.
- New controls are appended at the next sequential number. Retired controls stay listed with status "Retired — do not reuse."

**Register status:** C-000001 to C-000257 assigned. Package 001: C-000001 to C-000113. Company hot work policy controls: C-000114 to C-000117, now related to Package 002 hazards. Package 002: C-000118 to C-000257. Next available: **C-000258**. Retired: none.

**Company policy links:** controls that carry a company requirement cite the policy record (P-*nnnnnn*, `SIL-POLICY-REGISTRY.md`) in their Internal basis column.

**Authority:** Architect Response 003 §1 makes this the permanent shared control repository for **all** Safety Intelligence Library packages. Activity-specific registries are not permitted. Later packages reuse existing controls wherever applicable.

**Text revisions:** A control's identifier never changes. Its user-facing text may be revised by an approved decision; the Revision column records this, and earlier text is preserved in the repository history (r2 registry at `4376c8e`).

**r3 text revisions** (Response 003 §5, §7). These replace the r2 wording:

| Control | r2 wording | Source of change |
|---|---|---|
| C-000004 | "Wear the hand protection required for the task and project." | §7 |
| C-000028 | "Replace and reuse fasteners only as the project requirements specify — remove bolts that have stretched, galled or been over-tightened." | §7 |
| C-000038 | "…keep at least one bolt with its nut tight in the first member — unless a seat or approved support device holds it." | §7 |
| C-000039 | "Use the fall protection required by company, project and equipment-manufacturer requirements for the access being used — do not start until it is in place." | §5 |
| C-000042 | "Tie off to an approved anchorage rated for fall arrest before working on steel." | §7 |
| C-000049 | "Wear hearing protection around noise-producing equipment and operations, including when working near others' noisy work." | §5 |
| C-000055 | "Add goggles or a face shield where debris or fragments can reach the face." | §7 |
| C-000066 | "If hydraulic fluid gets in the eyes, flush immediately and get medical evaluation." | §3 |
| C-000084 | "TC bolts: the spline must be sheared off — a bolt with the spline intact is not tensioned." | §7 |
| C-000095 | "Loosen tensioned studs only with the tensioner and the specified detensioning procedure." | §7 |
| C-000096 | "Never cut, hammer or impact a tensioned nut or stud loose." | Aligned with C-000095 |
| C-000099 | "Disconnect or lock the pump control while positioning or adjusting tools." | §7 |

**r3.1 text revisions** (PO Decision Record 002). These replace the r3 wording:

| Control | r3 wording | Source of change |
|---|---|---|
| C-000004 | "Wear task-appropriate cut-resistant gloves where hands are exposed to sharp metal." | PO Decision 002 §1 |
| C-000039 | "Use the fall protection required for the task and project before exposure to a fall hazard." | PO Decision 002 §2 |
| C-000049 | "Wear appropriate hearing protection when exposed to hazardous noise, in designated hearing protection areas or when required for the task." | PO Decision 002 §3 |

## Registry

| Control ID | Canonical control (user-facing) | Related hazards [relationship applicability] | Production equivalent | Internal basis | Revision |
|---|---|---|---|---|---|
| C-000001 | The pump operator pressurizes only on a clear signal from the person at the tool. | H-BT-022 [if pump operated by another person]; H-BT-035 | — | See related hazard refs | r2 |
| C-000002 | Never use fingers to check or align holes — use a drift pin or spud wrench. | H-BT-001 | — | See related hazard refs | r2 |
| C-000003 | Keep hands off mating surfaces while plies are drawn together. | H-BT-001 | — | See related hazard refs | r2 |
| C-000004 | Wear work gloves when working with steel. | H-BT-002; H-BT-002 (P002: Weld / Cut / Grind) | C3 "Wear proper cut-resistant gloves appropriate for the task" — related, not equivalent: C3 is keyword-triggered by cut/blade/knife/sharp; under PO Decision 002 knife use requires C-000112 (A4) and steel work requires C-000004 | Company policy P-000001 (PO Decision 002); OSHA-C 1926.95 / OSHA-GI 1910.138 hazard-based hand protection (unverified) | r3.1: text per PO Decision 002 §1 |
| C-000005 | Remove burrs only where the connection or flange requirements allow it — never on gasket seating faces. | H-BT-002 | — | See related hazard refs | r2 |
| C-000006 | Keep hands off unprotected plate, pipe and hole edges. | H-BT-002; H-BT-002 (P002: Weld / Cut / Grind) | — | See related hazard refs | r2 |
| C-000007 | Use the correct size wrench or socket, fully seated on the nut. | H-BT-003 | — | See related hazard refs | r2 |
| C-000008 | Do not use wrenches with sprung or worn jaws. | H-BT-003 | — | See related hazard refs | r2 |
| C-000009 | Pull rather than push where possible, with knuckles clear of steel. | H-BT-003 | — | See related hazard refs | r2 |
| C-000010 | Do not extend a wrench with pipe unless it is designed for it. | H-BT-003; H-BT-006 | — | See related hazard refs | r2 |
| C-000011 | Brace for the tool's reaction before starting; use the side handle where provided. | H-BT-004; H-BT-004 (P002: Grind / abrasive Cut) | — | See related hazard refs | r2 |
| C-000012 | Set direction and torque or speed before starting. | H-BT-004 [if powered wrench] | — | See related hazard refs | r2 |
| C-000013 | Expect the tool to twist when the nut seats or stalls. | H-BT-004 [if powered wrench] | — | See related hazard refs | r2 |
| C-000014 | Inspect wrenches, sockets, extensions and multipliers before use; tag and remove damaged tools. | H-BT-006; H-BT-006 (P002: Tool and attachment failure outside wheel rupture) | — | See related hazard refs | r2 |
| C-000015 | Use only extensions and multipliers rated for the force applied. | H-BT-006 | — | See related hazard refs | r2 |
| C-000016 | Inspect puller threads, pistons, seals and bridges before use; remove damaged components. | H-BT-006 [if tensioner]; H-BT-033 | — | See related hazard refs | r2 |
| C-000017 | Choose a longer wrench, a multiplier or a powered tool based on the force needed and the access available — do not overpower a manual wrench. | H-BT-007 | — | See related hazard refs | r2 |
| C-000018 | Set up to apply force at waist-to-chest height, not overhead or twisted. | H-BT-007; H-BT-007 (P002: Handling cylinders, welding machines, heavy grinders) | — | See related hazard refs | r2 |
| C-000019 | Move heavy tool heads, tensioners and pumps with a handling method rated for their weight, configuration and access — do not climb carrying them. | H-BT-007 [if hydraulic wrench, tensioner, large impact or pump]; H-BT-007 (P002: Handling cylinders, welding machines, heavy grinders) | — | See related hazard refs | r2 |
| C-000020 | Rotate tasks or workers on long bolting or impact runs to limit exposure. | H-BT-008; H-BT-020; H-BT-008 (P002: Repetitive grinding); H-BT-020 (P002: Grinders and chipping hammers) | — | See related hazard refs | r2 |
| C-000021 | Keep wrists straight and use tools sized to the work. | H-BT-008; H-BT-008 (P002: Repetitive grinding) | — | See related hazard refs | r2 |
| C-000022 | Set your feet and brace before applying force — expect the nut to break free. | H-BT-009; H-BT-011; H-BT-009 (P002: Loss of balance when a grinder kicks) | — | See related hazard refs | r2 |
| C-000023 | Stand on the platform floor; never climb or stand on rails to reach the work. | H-BT-009 [if aerial or scissor lift] | — | OSHA-C 1926.453(b)(2)(iv) — verified (Engineer, CFR text via Cornell LII — reliable secondary reproduction, official source preferred for final verification (PO Decision 003 §7), r3) | r2 |
| C-000024 | Do not apply heavy wrench force from a ladder — reposition or use a lift. | H-BT-009 [if ladder] | — | See related hazard refs | r2 |
| C-000025 | Never hold the socket, extension or chuck while the tool runs. | H-BT-010; H-BT-010 (P002: Grinders, wire wheels) | — | See related hazard refs | r2 |
| C-000026 | Secure loose sleeves; keep lanyards and tool tethers clear of rotating parts. | H-BT-010; H-BT-010 (P002: Grinders, wire wheels) | — | See related hazard refs | r2 |
| C-000027 | Do not exceed the specified tightening. | H-BT-011; H-BT-031 | — | See related hazard refs | r2 |
| C-000028 | Replace fasteners that are damaged, galled, necked down or improperly tightened, as the project requirements specify — the stretch from correct pretensioning is expected. | H-BT-011; H-BT-031 | — | Spec — RCSC 2020 §2.11 (Architect-checked); project requirements | r3: text revised (Response 003 §7) |
| C-000029 | Keep hands and body out from between members until the connection is made. | H-BT-012; H-BT-012 (P002: Cutting structural steel) | C11 "Keep body parts out of all crush zones" (broader; retain) | See related hazard refs | r2 |
| C-000030 | Pull pins and loosen bolts only with the member supported — misaligned steel can spring when released. | H-BT-012; H-BT-012 (P002: Cutting structural steel) | — | See related hazard refs | r2 |
| C-000031 | Leave temporary bolts, bracing and guying in place until removal is authorized under the erection sequence and stability requirements. | H-BT-013; H-BT-013 (P002: Cutting or removing structural elements) | — | See related hazard refs | r2 |
| C-000032 | Follow the erection plan sequence. | H-BT-013; H-BT-015 | — | See related hazard refs | r2 |
| C-000033 | Stay out from under the suspended load. | H-BT-014; H-BT-014 (P002: Cutting members that are rigged or suspended) | C7 "Never stand or work under a suspended load"; C11 "Never work under a suspended load" (equivalent — see registry note R-3) | See related hazard refs | r2 |
| C-000034 | Only the connectors make the initial connection. | H-BT-014 | — | See related hazard refs | r2 |
| C-000035 | Use tag lines; keep hands off the load except at the connection point. | H-BT-014 | C7 "Use tag lines to control load swing where practical" (equivalent) | See related hazard refs | r2 |
| C-000036 | Keep direct communication with the signal person. | H-BT-014; H-BT-014 (P002: Cutting members that are rigged or suspended) | — | See related hazard refs | r2 |
| C-000037 | Do not release the load until the connection required for that member is made and stability is verified. | H-BT-015 | C11 "Verify support is stable before releasing rigging or mechanical hold" (equivalent for steel) | OSHA-C 1926.756(a)(1), (a)(2), (b) — Architect-checked; verified (Engineer, osha.gov, r3) | r2 |
| C-000038 | At a shared connection, keep at least one bolt with its nut wrench-tight in the first member while making the double connection, unless a seat or equivalent device secures the first member. | H-BT-016 | — | OSHA-C 1926.756(c)(1) — verified (Engineer, osha.gov primary text, r3); applies at columns / beam webs over columns | r3: text revised (Response 003 §7) |
| C-000039 | Use required fall protection when exposed to a fall hazard of 6 feet or greater, or at a lower height where required. | H-BT-017; H-BT-017 (P002: Elevated hot work) | C1 "Maintain 100% tie-off when exposed to fall hazards at 6 feet or greater" — **equivalent**; 6-ft trigger confirmed as company policy P-000003 (PO Decision 002). This control adds the lower-height clause; any wording change must keep the 6-ft trigger (note R-1) | Company policy P-000003 (6-ft general trigger, PO Decision 002); lower thresholds govern where client, project or regulation require them — e.g. OSHA-GI 1910.28(b)(1) 4 ft (unverified), MSHA 56.15005 danger of falling (unverified). No steel-erection exception introduced. | r3.1: text per PO Decision 002 §2 |
| C-000040 | In boom and scissor lifts, wear compatible personal fall protection attached to the manufacturer-approved anchorage point. | H-BT-017 [if boom or scissor lift]; H-BT-017 (P002: Elevated hot work) [if boom or scissor lift] | — | Company policy P-000004 (PO Decision 001 §2, retained by PO Decision 002); OSHA-C 1926.453(b)(2)(v) for aerial lifts — verified (Engineer, CFR text via Cornell LII — reliable secondary reproduction, official source preferred for final verification (PO Decision 003 §7), r3); OSHA-GI 1910.67(c)(2)(v) — verified (Engineer, osha.gov, r3) | r2 |
| C-000041 | Never tie off to the steel or an adjacent structure from a lift. | H-BT-017 [if boom or scissor lift]; H-BT-017 (P002: Elevated hot work) [if boom or scissor lift] | — | OSHA-C 1926.453(b)(2)(iii) — verified (Engineer, CFR text via Cornell LII — reliable secondary reproduction, official source preferred for final verification (PO Decision 003 §7), r3); scissor lifts = Policy | r2 |
| C-000042 | When using personal fall protection on steel, connect to an approved anchorage rated for the system. | H-BT-017 [if personal fall protection used on structure] | C1 "Use approved anchorage points rated for fall arrest forces" (equivalent) | Applies when personal fall protection is used (Response 003 §7); OSHA-C 1926.502(d) (unverified) | r3: text revised (Response 003 §7) |
| C-000043 | Inspect harness, lanyard or SRL and connectors before use. | H-BT-017 [if personal fall protection used] | C1 "Inspect harness, lanyard, SRL, and all connectors before each use" (equivalent) | See related hazard refs | r2 |
| C-000044 | Have a rescue plan ready before work at height — a worker suspended in a harness must be reached promptly. | H-BT-017 [if personal fall protection used] | C1 "Review fall rescue plan before work begins" (equivalent; response emphasis added) | See related hazard refs | r2 |
| C-000045 | Keep bolts, nuts and washers in a secured bolt bag or bucket — never loose on flanges or beams. | H-BT-018 [if bolting hardware] | — | See related hazard refs | r2 |
| C-000046 | Use rated tool tethers where required. | H-BT-018 [if tools at height]; H-BT-018 (P002: Hot work at height) [if tools at height] | — | See related hazard refs | r2 |
| C-000047 | Barricade or control the area below; no one works below without protection. | H-BT-018; H-BT-028 [if elevated]; H-HW-006 [if elevated]; H-BT-018 (P002: Hot work at height) | C4 "Barricade area below or around work if debris may affect others" (equivalent) | See related hazard refs | r2 |
| C-000048 | Support tensioners so they cannot fall when pullers are unthreaded. | H-BT-018 [if tensioner] | — | See related hazard refs | r2 |
| C-000049 | Wear hearing protection when exposed to noise levels of 85 dBA or greater, in designated hearing protection areas, or when required for the task. | H-BT-019; H-BT-019 (P002: Grinding, gouging, plasma, chipping) | C16 "Wear hearing protection when noise levels exceed 85 dBA" — **equivalent**; 85 dBA confirmed as company policy P-000005 (PO Decision 002). This control adds designated-area and task triggers; any wording change must keep 85 dBA (note R-2) | Company policy P-000005 (85 dBA, PO Decision 002) — not attributed to a universal regulation. Regulatory criteria kept internally: OSHA-C 1926.52 / 1926.101; OSHA-GI 1910.95; MSHA Part 62 (all unverified). Employees are not required to measure sound levels. | r3.1: text per PO Decision 002 §3 |
| C-000050 | Keep tools maintained to reduce vibration. | H-BT-020; H-BT-020 (P002: Grinders and chipping hammers) | — | See related hazard refs | r2 |
| C-000051 | Do not rely on anti-vibration gloves alone. | H-BT-020; H-BT-020 (P002: Grinders and chipping hammers) | — | See related hazard refs | r2 |
| C-000052 | Use sockets rated for the tool — impact-rated sockets on impact tools. | H-BT-021 | — | See related hazard refs | r2 |
| C-000053 | Use the manufacturer-approved socket or attachment retention. | H-BT-021 | — | See related hazard refs | r2 |
| C-000054 | Wear safety glasses. | H-BT-021; H-BT-029; H-BT-032; H-HW-009 [under welding helmet where required]; H-HW-029; H-BT-032 (P002: Overhead welding, cutting and grinding) | C4 "Wear approved safety glasses at all times in work area" (equivalent) | See related hazard refs | r2 |
| C-000055 | Add a face shield over safety glasses or goggles where debris or fragments can reach the face — a face shield does not replace eye protection. | H-BT-029; H-BT-032 [if debris can reach the face]; H-HW-029; H-BT-032 (P002: Overhead welding, cutting and grinding) | C4 "Use face shield where flying debris or splash hazard exists" (equivalent) | OSHA-C 1926.102 (unverified); a face shield is secondary protection | r3: text revised (Response 003 §7) |
| C-000056 | Set the reaction arm against a solid surface and confirm the reaction direction before applying force. | H-BT-022 | — | See related hazard refs | r2 |
| C-000057 | Keep hands, hoses and body clear of the reaction arm and reaction point. | H-BT-022 | — | See related hazard refs | r2 |
| C-000058 | Inspect hydraulic hoses and fittings before use. | H-BT-023 | — | See related hazard refs | r2 |
| C-000059 | Never use hands to locate leaks. | H-BT-023 | — | See related hazard refs | r2 |
| C-000060 | Verify hydraulic pressure is released and address any trapped pressure or stored mechanical energy before disconnecting or removing equipment. | H-BT-023; H-BT-024; H-BT-034 | C19 "Verify zero energy state before beginning work" (broader; retain) | See related hazard refs | r2 |
| C-000061 | Do not kink, step on or drive over hoses. | H-BT-023 | — | See related hazard refs | r2 |
| C-000062 | Get immediate medical attention for any suspected injection injury, even if it looks minor. | H-BT-023 | — | Response 001 Decision 4; Response 003 §3 | r2 |
| C-000063 | Use hoses and couplers rated for the system's maximum pressure, with couplers fully engaged. | H-BT-024 | — | OSHA-C 1926.302(d)(2) (Architect-checked) | r2 |
| C-000064 | Do not use torque-wrench hoses or couplers on a tensioner system unless they are rated for tensioner pressure. | H-BT-024 [if tensioner] | — | Equipment compatibility and pressure rating (Response 003 §2); no assumed pressure differential | r3: retained (Response 003 §2) |
| C-000065 | Clean up spilled fluid before continuing. | H-BT-024 | C15 "Clean spills promptly and mark wet areas" (equivalent) | See related hazard refs | r2 |
| C-000066 | If hydraulic fluid enters the eyes, immediately flush with clean water, follow the SDS first-aid instructions and obtain medical evaluation. | H-BT-024 | — | SDS first-aid section; Response 003 §3 | r3: wording per Response 003 §3 (accepted) |
| C-000067 | Use air tools with a positive connection to the hose that cannot come apart accidentally. | H-BT-025 [if pneumatic tool]; H-BT-025 (P002: Air carbon arc gouging) [if pneumatic] | — | OSHA-C 1926.302(b)(1) (Architect-checked) | r2 |
| C-000068 | Install hose restraints (whip checks) at couplings. | H-BT-025 [if pneumatic hose]; H-BT-025 (P002: Air carbon arc gouging) [if pneumatic] | — | BP; MSHA 56.13021 locking devices — verified (Engineer, eCFR, r3); its 100 psi definition unverified | r2 |
| C-000069 | Use excess-flow valves on supply lines where required — hose restraints and excess-flow valves do not replace each other. | H-BT-025 [if pneumatic supply line] | — | OSHA-C 1926.302(b)(7) (Architect-checked) | r2 |
| C-000070 | Shut off and bleed the air before disconnecting. | H-BT-025 [if pneumatic]; H-BT-025 (P002: Air carbon arc gouging) [if pneumatic] | — | See related hazard refs | r2 |
| C-000071 | Inspect cords and plugs before use. | H-BT-026; H-BT-026 (P002: Welding machine and grinder supply power) | — | See related hazard refs | r2 |
| C-000072 | Use the GFCI or other electrical protection required for the equipment and conditions. | H-BT-026; H-BT-026 (P002: Welding machine and grinder supply power) | — | See related hazard refs | r2 |
| C-000073 | Keep cords out of water and away from pinch points. | H-BT-026; H-BT-026 (P002: Welding machine and grinder supply power) | — | See related hazard refs | r2 |
| C-000074 | Route hoses and cords out of walkways. | H-BT-027; H-BT-027 (P002: Welding leads, gas hoses, grinder cords) | C15 "Manage cords and hoses — route overhead or mark and protect on ground" (equivalent) | See related hazard refs | r2 |
| C-000075 | On lifts, secure hoses and cords so they cannot snag on steel as the lift moves, with enough slack for travel and without creating entanglement points. | H-BT-027 [if aerial or scissor lift]; H-BT-027 (P002: Welding leads, gas hoses, grinder cords) [if aerial or scissor lift] | — | See related hazard refs | r2 |
| C-000076 | Collect splines using the wrench's ejector into a bag or bucket. | H-BT-028 | — | See related hazard refs | r2 |
| C-000077 | Remove mushroomed or damaged striking tools and pins from service. | H-BT-029 | — | See related hazard refs | r2 |
| C-000078 | Keep your partner and others clear of the far side when driving pins. | H-BT-029 | — | See related hazard refs | r2 |
| C-000079 | Keep hands out of the strike zone; use a pin holder or long-handled tool to hold pins. | H-BT-030 | — | See related hazard refs | r2 |
| C-000080 | Use the bolt grade, length and washers called for on the drawings. | H-BT-031 | — | See related hazard refs | r2 |
| C-000081 | Tighten in pattern from the stiffest part of the joint outward. | H-BT-031 | — | See related hazard refs | r2 |
| C-000082 | Turn-of-nut: snug tight first, match mark, then turn the specified rotation. | H-BT-031 [if turn-of-nut] | — | See related hazard refs | r2 |
| C-000083 | Calibrated wrench: verify calibration daily with the bolts being installed. | H-BT-031 [if calibrated wrench] | — | See related hazard refs | r2 |
| C-000084 | TC bolts: install and inspect by the specified procedure — a bolt with the spline still on is not complete, and a sheared spline alone does not prove correct pretension. | H-BT-031 [if TC bolts] | — | Spec — RCSC 2020 / manufacturer (unverified) | r3: text revised (Response 003 §7) |
| C-000085 | DTI: verify gaps or indicator per manufacturer. | H-BT-031 [if DTI] | — | See related hazard refs | r2 |
| C-000086 | Complete pre-installation verification before production bolting of pretensioned joints. | H-BT-031 [if pretensioned joint] | — | See related hazard refs | r2 |
| C-000087 | Keep bolts clean, dry and lubricated as delivered. | H-BT-031 | — | See related hazard refs | r2 |
| C-000088 | Position yourself so you are not looking straight up into the work. | H-BT-032; H-BT-032 (P002: Overhead welding, cutting and grinding) | — | See related hazard refs | r2 |
| C-000089 | Verify the required puller thread engagement on the stud before pressurizing. | H-BT-033 | — | See related hazard refs | r2 |
| C-000090 | Confirm the tensioner and puller match the stud size and thread. | H-BT-033 | — | See related hazard refs | r2 |
| C-000091 | Seat the bridge square and flat on the flange face. | H-BT-033 | — | See related hazard refs | r2 |
| C-000092 | Keep everyone clear of the axial line of force of each tensioner or loaded stud, whatever its orientation. | H-BT-033; H-BT-034 | — | See related hazard refs | r2 |
| C-000093 | Do not exceed the tool's rated pressure or piston stroke. | H-BT-033 | — | See related hazard refs | r2 |
| C-000094 | If a nut will not turn, stop — do not raise pressure beyond the procedure. | H-BT-033 | — | See related hazard refs | r2 |
| C-000095 | Loosen tensioned studs or nuts only by the specified safe detensioning or removal procedure. | H-BT-034 | — | Mfr / joint procedure | r3: text revised (Response 003 §7) |
| C-000096 | Do not cut, split, hammer or impact a tensioned nut or stud unless the specified removal procedure allows it. | H-BT-034 | — | Mfr / joint procedure | r3: aligned with Response 003 §7 (C-000095) |
| C-000097 | Turn nuts by the manufacturer-designated method; keep fingers out of nut-turning openings and the gap between tool and flange. | H-BT-035 | — | See related hazard refs | r2 |
| C-000098 | Keep hands clear of pistons and pullers while pressurized. | H-BT-035 | — | See related hazard refs | r2 |
| C-000099 | Prevent unintended pressurization while positioning or adjusting tools by following the manufacturer's isolation procedure. | H-BT-035 | — | Mfr isolation procedure; locking an operating control is not assumed to isolate energy (Response 003 §7) | r3: text revised (Response 003 §7) |
| C-000100 | Follow the specified tightening or tensioning sequence, number of passes and pressure or torque. | H-BT-036 | — | See related hazard refs | r2 |
| C-000101 | Use the specified studs, nuts and gasket; do not reuse a gasket. | H-BT-036 | — | See related hazard refs | r2 |
| C-000102 | Run nuts down fully before releasing tensioner pressure. | H-BT-036 [if tensioner] | — | See related hazard refs | r2 |
| C-000103 | Use calibrated gauges and correctly rated equipment. | H-BT-036 | — | See related hazard refs | r2 |
| C-000104 | Complete the required joint verification and records before return to service. | H-BT-036 | — | See related hazard refs | r2 |
| C-000105 | If a seat or equivalent device is used, it must be designed to carry the load and be bolted or welded to both the support and the first member before the shared nuts are removed. | H-BT-016 [if seat or equivalent device used] | — | OSHA-C 1926.756(c)(2) — verified (Engineer, osha.gov primary text, r3) | r3: new |
| C-000106 | Expect the bit to bind as it breaks through — hold the drill firmly with the side handle and ease off the trigger. | H-BT-004 [if drill] | — | Mfr; BP | r3: new |
| C-000107 | Seat a magnetic drill fully on clean, flat steel and use its safety strap or chain as the manufacturer requires. | H-BT-004 [if magnetic drill] | — | Mfr | r3: new |
| C-000108 | Secure materials and equipment kept at height against displacement, back from edges and openings. | H-BT-018 [if materials or equipment at height]; H-BT-018 (P002: Hot work at height) | — | OSHA-C 1926.759(a) for steel erection (Architect-checked); other contexts BP | r3: new |
| C-000109 | Use hoses, couplings and restraints rated for the system's pressure and medium. | H-BT-025 [if other pressurized hose system] | — | Mfr; BP | r3: new |
| C-000110 | Isolate and relieve pressure before disconnecting a pressurized hose. | H-BT-025 [if other pressurized hose system] | — | BP | r3: new |
| C-000111 | Wear goggles instead of safety glasses where falling or airborne debris can get around glasses. | H-BT-032 [if falling debris can get around glasses]; H-HW-029 [if particles can get around glasses]; H-BT-032 (P002: Overhead welding, cutting and grinding) | — | OSHA-C 1926.102 (unverified) | r3: new |
| C-000112 | Wear ANSI A4 or higher cut-resistant gloves for demolition, knife use and work with stainless steel lath (expanded metal). | H-BT-002 [if demolition, knife use or stainless steel lath]; H-BT-002 (P002: Weld / Cut / Grind) [if demolition, knife use or stainless steel lath] | — | Company policy P-000002 (PO Decisions 002, 003); ANSI/ISEA 105 cut scale (unverified). Governs over C-000004 for the same (cut) exposure; cumulative with thermal, chemical and electrical protection. | r3.1: new (PO Decision 002 §1); r3.2: scope confirmed — stainless steel lath only (PO Decision 003 §1) |
| C-000113 | Protect against falls at any height into or onto dangerous equipment, and guard or cover holes and openings regardless of height. | H-BT-017 [if dangerous equipment, holes or openings, or client / project rule] | — | Applicable regulation where it sets no minimum height — e.g. OSHA-C 1926.501(b)(4), (b)(8) (unverified); MSHA 56.15005 (unverified); client / project | r3.1: new (PO Decision 002 §2) |
| C-000114 | Remove combustible materials within 35 feet of hot work. Where removal is not possible, protect them with suitable fire-resistant barriers. Increase the protected area where required. | H-HW-001 | C2 "Remove or protect all combustibles within 35 feet of hot work" (equivalent; P-000006) | Company policy P-000006 (PO Decision 003 §3) — 35 ft is a minimum, not the extent of the exposure assessment; regulatory/consensus bases (OSHA-C 1926.352, OSHA-GI 1910.252, NFPA 51B) unverified | r3.2: new (PO Decision 003 §3) |
| C-000115 | Maintain fire watch during hot work and for at least 30 minutes after completion, or longer where required. | H-HW-001; H-HW-003 | C2 "Assign fire watch during and for minimum 30 minutes after hot work" (equivalent); C2 "Monitor area 30-60 minutes after hot work for smoldering fire" (reconciled into this control; see registry note R-4) | Company policy P-000007 (PO Decision 003 §4); regulatory/consensus bases unverified | r3.2: new (PO Decision 003 §4) |
| C-000116 | Obtain and review the required hot work permit before beginning hot work. Comply with all permit conditions. | H-HW-001 | C2 "Complete hot work permit before beginning any hot work operations" (equivalent; P-000008) | Company policy P-000008 (PO Decision 003 §5) — all hot work; no designated-area or shop exemption without PO authorization | r3.2: new (PO Decision 003 §5) |
| C-000117 | Continue fire monitoring for any additional period required by the project, permit or applicable standard. | H-HW-003 [if required by project, permit or standard] | C2 "Monitor area 30-60 minutes after hot work for smoldering fire" (extended portion; conditional; registry note R-4) | Project / permit / applicable standard (distinct conditional requirement, PO Decision 003 §4) | r3.2: new (PO Decision 003 §4) |
| C-000118 | Keep a charged, inspected fire extinguisher suited to the hazard within immediate reach of the hot work. | H-HW-001 | C2 "Maintain charged fire extinguisher in the work area at all times" (equivalent) | OSHA-C 1926.352(d) (unverified); OSHA-GI 1910.252(a)(2)(ii) (unverified) | P002 r1: new |
| C-000119 | Use fire-resistant blankets, curtains or shields to contain sparks and slag. | H-HW-001 | C2 "Use fire blankets and screens to contain sparks and slag" (equivalent) | OSHA-C 1926.352(b) — verified (Engineer, osha.gov, r1) | P002 r1: new |
| C-000120 | Direct sparks, slag and particles away from people, equipment and combustibles. | H-HW-001; H-HW-029 | C2 "Control all sparks and slag direction away from personnel and materials" (equivalent) | BP; ANSI Z49.1 (unverified) | P002 r1: new |
| C-000121 | Stop hot work if the required fire protection cannot be maintained, or if concealed ignition hazards cannot be assessed and controlled. | H-HW-001; H-HW-002 | — | BP; P-000006 to P-000008 | P002 r1: new |
| C-000122 | Check and protect the opposite side of walls, floors and ceilings before starting hot work. | H-HW-002 | — | OSHA-C 1926.352(f) — verified (Engineer, osha.gov text of (f) end clause; NC DOL quotation, r1) | P002 r1: new |
| C-000123 | Cover or protect openings, cracks and penetrations where sparks or slag could travel. | H-HW-002 | — | OSHA-GI 1910.252(a)(2)(iii)(A)(3) context — verified (Engineer, official CFR text (GPO / eCFR), r1); P-000006 | P002 r1: new |
| C-000124 | Inspect and protect concealed combustibles in walls, floors, cavities and insulation. | H-HW-002 | — | P-000006; OSHA-GI 1910.252(a)(2)(iii)(A)(3) — verified (Engineer, official CFR text (GPO / eCFR), r1) | P002 r1: new |
| C-000125 | Before releasing the fire watch, check all affected areas for smoke, heat and smoldering material. | H-HW-003 | — | P-000007; BP | P002 r1: new |
| C-000126 | Assign a designated fire watch trained in the expected fire hazards and in the extinguishing equipment provided. | H-HW-001 [fire watch duties]; H-HW-003 | — | OSHA-GI 1910.252(a)(2)(iii)(B) — verified (Engineer, official CFR text (GPO / eCFR), r1); OSHA-C 1926.352(e) — verified (Engineer, official CFR text (GPO archive), r1) | P002 r1: new |
| C-000127 | Make sure the fire watch can see all affected areas; add fire watch personnel where one person cannot. | H-HW-002 | — | OSHA-GI 1910.252(a)(2)(iii)(B) 'watch for fires in all exposed areas' — verified (Engineer, official CFR text (GPO / eCFR), r1) | P002 r1: new |
| C-000128 | Keep communication between the fire watch and the hot work crew; the fire watch can stop the work. | H-HW-001 [fire watch duties] | — | BP; NFPA 51B (unverified) | P002 r1: new |
| C-000129 | Do not give the fire watch other duties that interfere with watching. | H-HW-001 [fire watch duties] | — | BP; NFPA 51B (unverified) | P002 r1: new |
| C-000130 | Make sure the fire watch knows how to raise the alarm and start the site emergency response. | H-HW-001 [fire watch duties] | — | OSHA-GI 1910.252(a)(2)(iii)(B) 'familiar with facilities for sounding an alarm' — verified (Engineer, official CFR text (GPO / eCFR), r1) | P002 r1: new |
| C-000131 | Fight a fire only if it is within your training, the equipment available and a safe escape — otherwise raise the alarm. | H-HW-001 [fire watch duties] | — | OSHA-GI 1910.252(a)(2)(iii)(B) — verified (Engineer, official CFR text (GPO / eCFR), r1) | P002 r1: new |
| C-000132 | Identify flammable gas, vapor and fuel sources before hot work, and isolate or remove them. | H-HW-004 | — | BP | P002 r1: new |
| C-000133 | Test the atmosphere with calibrated equipment where required, and keep monitoring where the exposure or permit requires. | H-HW-004; H-HW-019; H-HW-020; H-HW-034 | C13 "Test atmosphere for oxygen, combustible gases, and toxic substances before and continuously during entry" (related; confined-space scope) | Permit; OSHA-C Subpart AA / OSHA-GI 1910.146 where applicable (unverified) | P002 r1: new |
| C-000134 | Stop work and leave the area if atmospheric conditions become unsafe. | H-HW-004; H-HW-019; H-HW-020 | — | BP | P002 r1: new |
| C-000135 | Never perform ordinary hot work in a flammable or explosive atmosphere. | H-HW-004 | — | OSHA-C 1926.352(c) — verified (Engineer, osha.gov, r1) | P002 r1: new |
| C-000136 | Determine whether dust in the area is combustible before hot work. | H-HW-005 | — | OSHA-C 1926.352(c) 'heavy dust concentrations' — verified (Engineer, osha.gov, r1); NFPA 652 (unverified) | P002 r1: new |
| C-000137 | Remove combustible dust accumulations by an approved cleaning method. | H-HW-005 | — | BP; NFPA 652 (unverified) | P002 r1: new |
| C-000138 | Isolate dust collectors and dust-producing equipment as required, and keep sparks out of ducts and collectors. | H-HW-005 | — | BP | P002 r1: new |
| C-000139 | Do not start hot work until combustible dust hazards are controlled. | H-HW-005 | — | OSHA-C 1926.352(c) — verified (Engineer, osha.gov, r1) | P002 r1: new |
| C-000140 | Wear heat-resistant gloves suited to the welding, cutting or grinding task. | H-HW-006; H-BT-002 (P002: Weld / Cut / Grind) [if hot work (cumulative)] | — | OSHA-C 1926.95 (unverified); cumulative with P-000001 / P-000002 (PO Decision 003 §6) | P002 r1: new |
| C-000141 | Wear flame-resistant protective clothing suited to the heat and spark exposure; avoid garments that can melt or ignite. | H-HW-006; H-HW-038 | — | OSHA-C 1926.95 (unverified); ANSI Z49.1 (unverified) | P002 r1: new |
| C-000142 | Cover exposed skin against sparks, molten metal and arc radiation. | H-HW-006; H-HW-009 | — | BP; ANSI Z49.1 (unverified) | P002 r1: new |
| C-000143 | Arrange clothing so sparks and slag cannot get trapped — close pockets, collars and cuffs. | H-HW-006; H-HW-038 | — | BP | P002 r1: new |
| C-000144 | Position your body out of the spark and slag path. | H-HW-006 | — | BP | P002 r1: new |
| C-000145 | Keep hands and body out of the flame path, and point the torch away from people and equipment. | H-HW-007 | — | BP | P002 r1: new |
| C-000146 | Shut the torch down by the manufacturer's procedure when work stops; never leave a lit torch unattended. | H-HW-007 | — | Mfr | P002 r1: new |
| C-000147 | Let heated material cool, or handle it with tools or heat-resistant gloves. | H-HW-008 | — | BP | P002 r1: new |
| C-000148 | Mark or isolate recently heated material so others do not touch it. | H-HW-008 | — | BP | P002 r1: new |
| C-000149 | Use a welding helmet or filtered eye protection with the correct shade for the process and conditions. | H-HW-009 | — | OSHA-C 1926.102 shade table (unverified); ANSI Z49.1 / Z87.1 (unverified) | P002 r1: new |
| C-000150 | Inspect helmets, filter lenses and cover lenses before use; replace damaged parts. | H-HW-009 | — | Mfr | P002 r1: new |
| C-000151 | Set welding screens or curtains to shield nearby workers from direct and reflected radiation, without blocking ventilation. | H-HW-010 | — | OSHA-C 1926.351 shielding provision ('noncombustible or flameproof screens') — text verified (Engineer, osha.gov, r1); paragraph letter to confirm | P002 r1: new |
| C-000152 | Keep unprotected people out of the welding and cutting area. | H-HW-010 | — | BP | P002 r1: new |
| C-000153 | Inspect welding leads, electrode holders, connectors and insulation before use; remove damaged equipment from service. | H-HW-011 | — | OSHA-C 1926.351(a)–(b) (unverified paragraph detail) | P002 r1: new |
| C-000154 | Keep gloves and clothing dry, and do not touch the electrode or live parts with skin or wet gloves. | H-HW-011 | — | BP; ANSI Z49.1 (unverified) | P002 r1: new |
| C-000155 | Insulate yourself from the work and from ground in wet or conductive locations. | H-HW-011 [if wet or conductive location] | — | BP; ANSI Z49.1 (unverified) | P002 r1: new |
| C-000156 | Attach the work clamp to the workpiece as close to the weld as practical. | H-HW-011 | — | BP; Mfr | P002 r1: new |
| C-000157 | Never use pipelines carrying gas or flammable liquid, or electrical conduit, as the welding return. | H-HW-011 | — | OSHA-C 1926.351(c)(2) — verified (Engineer, official CFR text (GPO archive); osha.gov, r1) | P002 r1: new |
| C-000158 | Keep welding current out of bearings, rigging, hoists and fall protection — they must not become part of the circuit. | H-HW-011; H-HW-036; H-HW-037 | — | BP; ANSI Z49.1 (unverified) | P002 r1: new |
| C-000159 | When leaving an electrode holder, remove the electrode and place the holder where it cannot contact people or conductive objects. | H-HW-011 | — | OSHA-C 1926.351(d)(1) (subject confirmed by OSHA interpretation index; text unverified) | P002 r1: new |
| C-000160 | Shut off and disconnect the welding machine before servicing or adjusting it. | H-HW-011 | — | Mfr; BP | P002 r1: new |
| C-000161 | Identify base metals, coatings and consumables before hot work, and review the SDS. | H-HW-012; H-HW-013; H-HW-014; H-HW-015; H-HW-016; H-HW-017; H-HW-018 | — | BP; ANSI Z49.1 (unverified) | P002 r1: new |
| C-000162 | Keep your head out of the fume plume. | H-HW-012 | — | BP | P002 r1: new |
| C-000163 | Use local exhaust or other effective ventilation placed to capture fume at the source. | H-HW-012; H-HW-013; H-HW-014; H-HW-015; H-HW-017 | C20 "Ensure ventilation when welding inside bucket or confined areas" (related; narrower) | OSHA-C 1926.353 (unverified); OSHA-GI 1910.252(c) (unverified) | P002 r1: new |
| C-000164 | Where ventilation alone is not enough, use respiratory protection selected from an exposure assessment, under the respiratory protection program. | H-HW-012; H-HW-013; H-HW-014; H-HW-015; H-HW-016; H-HW-017 | C5 "Wear appropriate respirator (N95 minimum, P100 for high exposure)" (NOT equivalent — universal N95 conflicts with exposure-based selection; finding E-9) | OSHA-C 1926.103 / OSHA-GI 1910.134 (unverified) | P002 r1: new |
| C-000165 | Evaluate exposure to the specific contaminant (e.g. hexavalent chromium, lead, cadmium, manganese) as required. | H-HW-013; H-HW-015; H-HW-016; H-HW-018 | — | OSHA-C 1926.1126, 1926.62, 1926.1127; OSHA-GI 1910.1026, 1910.1025, 1910.1027 (all unverified) | P002 r1: new |
| C-000166 | Follow the hygiene and contamination controls the exposure requires — wash before eating, and keep work clothing separate. | H-HW-013; H-HW-016; H-HW-017 | — | Substance-specific standards (unverified) | P002 r1: new |
| C-000167 | Remove coatings only where the procedure allows, with controls for the removal exposure. | H-HW-014; H-HW-016 | — | BP; OSHA-C 1926.354 (unverified) | P002 r1: new |
| C-000168 | Stop and report symptoms such as fever, chills or a metallic taste after hot work on galvanized metal. | H-HW-014 | — | BP | P002 r1: new |
| C-000169 | Follow the lead exposure-control procedure, including protective clothing, before cutting, welding or grinding lead-coated surfaces. | H-HW-016 | — | OSHA-C 1926.62 / OSHA-GI 1910.1025 (unverified) | P002 r1: new |
| C-000170 | Do not begin thermal work on cadmium-containing material until an exposure-control procedure is in place. | H-HW-017 | — | OSHA-C 1926.1127 / OSHA-GI 1910.1027 (unverified) | P002 r1: new |
| C-000171 | Remove residues, solvents and adhesives by an approved method before heating. | H-HW-018 | — | BP | P002 r1: new |
| C-000172 | Keep chlorinated solvent vapors away from welding and other arc or flame operations. | H-HW-018 | — | BP; ANSI Z49.1 (unverified) | P002 r1: new |
| C-000173 | Do not proceed on unidentified coatings where the exposure cannot be assessed. | H-HW-018 | — | BP | P002 r1: new |
| C-000174 | Provide ventilation adequate for the gases and fume in enclosed or poorly ventilated areas. | H-HW-019; H-HW-020; H-HW-041 | C6 "Provide adequate ventilation — forced air if in enclosed space" (related) | OSHA-C 1926.353 (unverified) | P002 r1: new |
| C-000175 | Direct purge gas discharge away from occupied areas, and shut off gas when not in use. | H-HW-019 | — | BP | P002 r1: new |
| C-000176 | Follow the confined-space entry and rescue procedure where it applies. | H-HW-019 [if confined space] | — | OSHA-C Subpart AA / OSHA-GI 1910.146 (unverified) | P002 r1: new |
| C-000177 | Remove torches and gas hoses from confined spaces during breaks and at shift end; keep cylinders and welding machines outside. | H-HW-004 [if confined space]; H-HW-019 [if confined space]; H-HW-020 [if confined space] | — | OSHA-C 1926.353(b) (unverified); BP | P002 r1: new |
| C-000178 | Check oxygen equipment for leaks before use. | H-HW-020 | — | BP | P002 r1: new |
| C-000179 | Never use oxygen for ventilation, cooling or blowing off clothing. | H-HW-020 | — | BP; ANSI Z49.1 (unverified) | P002 r1: new |
| C-000180 | Place engine-driven welders and generators outdoors, with exhaust directed away from work areas, openings and air intakes. | H-HW-041 | — | BP | P002 r1: new |
| C-000181 | Monitor for carbon monoxide where fuel-burning equipment runs in or near enclosed areas. | H-HW-041 | — | BP | P002 r1: new |
| C-000182 | Provide drinking water, rest breaks and shade or cooling for recovery. | H-HW-021 | — | BP | P002 r1: new |
| C-000183 | Adjust work and rest periods to the heat, workload and protective clothing. | H-HW-021 | C17 "Adjust work scheduling to avoid peak heat hours where possible" (related) | BP | P002 r1: new |
| C-000184 | Watch workers for signs of heat illness; stop work at the first signs. | H-HW-021 | C17 "Monitor workers for signs of heat illness (confusion, nausea, stopping sweating)" (equivalent) | BP | P002 r1: new |
| C-000185 | For suspected heat stroke, cool the person rapidly and call for emergency help. | H-HW-021 | C17 "Know site first aid response for heat stroke — cool rapidly and call 911" (equivalent) | BP; Response 002 §8 (hazard-specific response) | P002 r1: new |
| C-000186 | Secure cylinders upright against falling or displacement. | H-HW-022 | — | OSHA-C 1926.350(a)(7), (a)(9) — (a)(7) verified (Engineer, official CFR text (GPO archive), r1); (a)(9) unverified | P002 r1: new |
| C-000187 | Keep valve protection caps in place on cylinders in storage or transport. | H-HW-022 [if storage or transport] | — | OSHA-C 1926.350(a)(1) — verified (Engineer, osha.gov, r1) | P002 r1: new |
| C-000188 | Before moving cylinders, remove regulators and install valve caps unless the cylinders are secured on a carrier designed for that purpose. | H-HW-022 [if moving] | — | OSHA-C 1926.350(a)(6) — verified (Engineer, OSHA interpretation 2004-03-30 quoting the standard, r1) | P002 r1: new |
| C-000189 | Move cylinders with a cylinder cart or approved equipment; never roll, drag or use cylinders as rollers or supports. | H-HW-022 [if moving] | — | OSHA-C 1926.350(a)(7) — verified (Engineer, official CFR text (GPO archive), r1); BP | P002 r1: new |
| C-000190 | Never lift cylinders by their valve caps. | H-HW-022 | — | OSHA-C 1926.350(a)(5) — verified (Engineer, official CFR text (GPO archive), r1) | P002 r1: new |
| C-000191 | Keep cylinders away from flame, sparks and slag, or shield them. | H-HW-023 | — | OSHA-C 1926.350(b)(1) — verified (Engineer, osha.gov; eCFR, r1) | P002 r1: new |
| C-000192 | Protect cylinders from vehicle and equipment impact. | H-HW-023 | — | BP | P002 r1: new |
| C-000193 | Keep cylinders out of welding circuits; never strike an arc on a cylinder. | H-HW-023 | — | OSHA-C 1926.350 (paragraph unverified); BP | P002 r1: new |
| C-000194 | Separate stored oxygen cylinders from fuel-gas cylinders and combustibles as required. | H-HW-023 [if storage] | — | OSHA-C 1926.350(a)(10) — subject confirmed by OSHA interpretation index; distance and barrier values unverified. Storage only — not applied to connected cylinders in use. | P002 r1: new |
| C-000195 | Follow gas-specific cylinder orientation rules, such as acetylene valve end up. | H-HW-023 | — | OSHA-C 1926.350(b) (unverified); Mfr | P002 r1: new |
| C-000196 | Inspect hoses, regulators, connections and torches before use; shut off and remove defective equipment from service. | H-HW-024 | — | OSHA-C 1926.350(f) 'Defective hose shall be removed from service' — verified (Engineer, osha.gov, r1) | P002 r1: new |
| C-000197 | Use equipment rated for the gas and its operating pressure. | H-HW-024 | — | Mfr | P002 r1: new |
| C-000198 | Leak-test connections with an approved method — never with a flame. | H-HW-024 | — | BP; ANSI Z49.1 (unverified) | P002 r1: new |
| C-000199 | Route gas hoses away from hot surfaces, sharp edges, slag and vehicle traffic. | H-HW-024 | — | BP | P002 r1: new |
| C-000200 | Do not use acetylene above 15 psig. | H-HW-024 [if acetylene] | — | OSHA-GI 1910.253(a)(2) (unverified); ANSI Z49.1 (unverified) — numeric user-facing value pending decision P2-U7 | P002 r1: new |
| C-000201 | Use check valves and flashback arrestors compatible with the equipment, as required — they are not interchangeable. | H-HW-025 | — | Mfr; ANSI Z49.1 (unverified) | P002 r1: new |
| C-000202 | Keep torch tips clean and unobstructed. | H-HW-025 | — | Mfr | P002 r1: new |
| C-000203 | Set operating pressures to the manufacturer's settings. | H-HW-025 | — | Mfr | P002 r1: new |
| C-000204 | Purge lines and light the torch by the manufacturer's procedure, using an approved striker. | H-HW-025 | — | Mfr | P002 r1: new |
| C-000205 | If a flashback or sustained backfire occurs, shut down by the prescribed procedure and inspect the equipment before reuse. | H-HW-025 | — | Mfr; Response 002 §8 | P002 r1: new |
| C-000206 | Keep oil, grease and contaminants off oxygen cylinders, regulators, hoses and fittings; do not handle them with oily hands or gloves. | H-HW-026 | — | OSHA-C 1926.350 (paragraph unverified); OSHA-GI 1910.253 (unverified) | P002 r1: new |
| C-000207 | Use components rated for oxygen service. | H-HW-026 | — | Mfr | P002 r1: new |
| C-000208 | Remove contaminated oxygen equipment from service for cleaning or replacement. | H-HW-026 | — | Mfr | P002 r1: new |
| C-000209 | Open cylinder valves slowly and as the gas-specific instructions require. | H-HW-026 | — | Mfr | P002 r1: new |
| C-000210 | Inspect wheels for cracks, chips or damage before mounting and use; ring-test where the wheel type allows. | H-HW-027 | — | OSHA-C 1926.303(c)(7) — verified (Engineer, CFR text (2008 edition copy); NIOSH checklist citation, r1); ANSI B7.1 (unverified) | P002 r1: new |
| C-000211 | Use only wheels rated at or above the tool's maximum speed. | H-HW-027 | — | OSHA-GI 1910.215(d)(1) spindle-speed check (secondary source only — unverified); ANSI B7.1 (unverified) | P002 r1: new |
| C-000212 | Use the correct wheel type, size, arbor and mounting parts for the tool. | H-HW-027 | — | Mfr; ANSI B7.1 (unverified) | P002 r1: new |
| C-000213 | Use the manufacturer's correct guard for the operation, installed and positioned; never remove it to reach tight areas. | H-HW-027; H-HW-028 | — | OSHA-C 1926.303(b) — verified (Engineer, osha.gov, r1); 1926.300(b) (unverified) | P002 r1: new |
| C-000214 | Do not side-grind or side-load wheels not designed for it. | H-HW-027 | — | Mfr; ANSI B7.1 (unverified) | P002 r1: new |
| C-000215 | Mount and start new wheels by the manufacturer's instructions, standing out of line with the wheel during the first run. | H-HW-027 | — | Mfr; ANSI B7.1 (unverified) | P002 r1: new |
| C-000216 | Use the side handle, and keep two hands on tools designed for two-handed use. | H-HW-028 | — | Mfr | P002 r1: new |
| C-000217 | Keep hands and body clear of the spinning wheel and the cutting path. | H-HW-028; H-HW-031 | — | BP | P002 r1: new |
| C-000218 | Clamp or support the workpiece before grinding or cutting; do not hand-hold small pieces you cannot control. | H-HW-028; H-HW-031 | — | BP | P002 r1: new |
| C-000219 | Let the wheel stop before setting the tool down. | H-HW-028 | — | Mfr | P002 r1: new |
| C-000220 | Use grinders with a constant-pressure switch where required, and never lock or tape the switch on. | H-HW-028 | — | OSHA-C 1926.300(d) (unverified) — pending P2-U8 | P002 r1: new |
| C-000221 | For handheld grinding and abrasive cutting, wear a face shield over safety glasses. | H-HW-029 [if handheld grinding or abrasive cutting] | — | Classification pending P2-U2 (Mfr / BP / company policy) | P002 r1: new |
| C-000222 | Set barriers where nearby workers could be hit by particles or sparks. | H-HW-029 [if others nearby] | C4 "Barricade area below or around work if debris may affect others" (related) | BP | P002 r1: new |
| C-000223 | Inspect wire wheels and brushes for loose or broken wires before use. | H-HW-029 [if wire wheel or brush]; H-BT-010 (P002: Grinders, wire wheels) [if wire wheel or brush] | — | Mfr | P002 r1: new |
| C-000224 | Unplug the tool, remove the battery or shut off and bleed the air before changing wheels or attachments. | H-HW-030 | — | Mfr; BP | P002 r1: new |
| C-000225 | Check that the switch is off and works correctly before plugging in or returning the tool to service. | H-HW-030 | — | Mfr | P002 r1: new |
| C-000226 | Support the material so the cut does not close onto the wheel or blade. | H-HW-031; H-BT-004 (P002: Grind / abrasive Cut) | — | BP | P002 r1: new |
| C-000227 | Keep your body out of the kickback path. | H-BT-004 (P002: Grind / abrasive Cut) | — | Mfr; BP | P002 r1: new |
| C-000228 | Do not twist or pinch a cut-off wheel in the cut. | H-BT-004 (P002: Grind / abrasive Cut) [if cut-off wheel] | — | Mfr | P002 r1: new |
| C-000229 | If the wheel binds, release the switch and follow the manufacturer's restart procedure. | H-BT-004 (P002: Grind / abrasive Cut) | — | Mfr | P002 r1: new |
| C-000230 | Determine how the piece will move when cut free, and support or rig it before completing the cut. | H-HW-032 | — | BP | P002 r1: new |
| C-000231 | Set an exclusion zone around the movement and drop area, and keep everyone out of the line of fire. | H-HW-032 | — | BP | P002 r1: new |
| C-000232 | Follow the approved cutting and removal sequence, coordinating with the people controlling the load. | H-HW-032 | — | BP | P002 r1: new |
| C-000233 | Contain falling slag, sparks and cut-off pieces with blankets, pans or catch protection. | H-HW-032 [if elevated]; H-BT-018 (P002: Hot work at height) | — | BP; P-000006 | P002 r1: new |
| C-000234 | Confirm authorization and the approved sequence before cutting or removing structural members, connections, braces or welds. | H-HW-033; H-BT-013 (P002: Cutting or removing structural elements) | — | BP; erection / demolition plan (unverified) | P002 r1: new |
| C-000235 | Install required supports or bracing before cutting. | H-HW-033; H-BT-013 (P002: Cutting or removing structural elements) | — | BP | P002 r1: new |
| C-000236 | Stop work if unexpected structural movement occurs. | H-HW-033 | — | BP | P002 r1: new |
| C-000237 | Identify current and previous contents before hot work; never assume an empty container is safe. | H-HW-034 | — | OSHA-C 1926.352(i) — verified (Engineer, official CFR text (GPO archive), r1) | P002 r1: new |
| C-000238 | Isolate, drain, clean, purge or fill the container by the approved procedure before hot work. | H-HW-034 | — | OSHA-C 1926.352(i) — verified (Engineer, official CFR text (GPO archive), r1) | P002 r1: new |
| C-000239 | Vent hollow spaces and containers before heating, cutting or welding. | H-HW-034 | — | OSHA-GI 1910.252(a)(3)(ii) — verified (Engineer, eCFR, r1) | P002 r1: new |
| C-000240 | Never weld or cut sealed or unidentified containers. | H-HW-034 | — | BP | P002 r1: new |
| C-000241 | Hot tapping or welding on in-service systems needs separate qualified engineering authorization — ordinary hot work controls do not cover it. | H-HW-034; H-HW-035; H-HW-040 | — | Architect Package 002 §4; client / owner procedure | P002 r1: new |
| C-000242 | Follow the approved isolation and energy-control procedure, and verify the safe state before work. | H-HW-035 | C19 "Verify zero energy state before beginning work" (related; broader) | OSHA-GI 1910.147 (unverified); site procedure | P002 r1: new |
| C-000243 | Control residual pressure, temperature and chemical exposure before opening or heating the system. | H-HW-035 | C22 "Depressurize, drain, and verify zero pressure before breaking any flange or fitting" (related) | Site procedure | P002 r1: new |
| C-000244 | Use fall protection equipment rated for the hot work exposure — a leading-edge rating alone is not enough. | H-HW-036 | — | Mfr | P002 r1: new |
| C-000245 | Keep lanyards, SRLs, harness webbing and lifelines away from sparks, slag and hot surfaces, using manufacturer-approved protection. | H-HW-036; H-BT-017 (P002: Elevated hot work) | — | Mfr | P002 r1: new |
| C-000246 | Inspect fall protection for burns or melting after hot work exposure; remove damaged equipment from service. | H-HW-036 | — | Mfr | P002 r1: new |
| C-000247 | Keep sparks, flame and slag off slings and hoists; use approved protection or rigging rated for the temperature. | H-HW-037 | — | Mfr; ASME B30 series (unverified) | P002 r1: new |
| C-000248 | Inspect exposed rigging before further use; remove heat-damaged rigging from service. | H-HW-037 | — | Mfr; ASME B30 series (unverified) | P002 r1: new |
| C-000249 | Keep clothing free of oil, grease and flammable contamination. | H-HW-038 | — | BP | P002 r1: new |
| C-000250 | Replace burned or damaged protective clothing. | H-HW-038 | — | BP | P002 r1: new |
| C-000251 | Follow the approved drawings and welding procedure, using qualified welders where required. | H-HW-039 | — | Spec — AWS D1.1 (structural) / ASME (pressure) (unverified) | P002 r1: new |
| C-000252 | Verify joint preparation, fit-up and any required preheat before welding. | H-HW-039 | — | Spec — AWS D1.1 (unverified) | P002 r1: new |
| C-000253 | Keep required temporary supports in place until the welded connection is accepted. | H-HW-039 | — | Spec / erection plan (unverified) | P002 r1: new |
| C-000254 | Complete the required inspection before the welded connection is loaded. | H-HW-039 | — | Spec — AWS D1.1 (unverified) | P002 r1: new |
| C-000255 | Do not modify structural members without authorization. | H-HW-039 | — | BP; engineer of record | P002 r1: new |
| C-000256 | Follow the approved pressure-boundary welding or repair procedure, with qualified welders and the specified materials. | H-HW-040 | — | Spec — ASME (unverified) | P002 r1: new |
| C-000257 | Complete required examination and testing, and keep isolation in place until the equipment is accepted for service. | H-HW-040 | — | Spec — ASME (unverified) | P002 r1: new |


## Registry notes

**R-1 — Production C1 "Maintain 100% tie-off when exposed to fall hazards at 6 feet or greater."**
Equivalent to C-000039. The 6-ft trigger is company policy P-000003 (PO Decision 002), so **there is no conflict** (U-14 resolved). Any future wording improvement must keep the 6-ft trigger.

**R-2 — Production C16 "Wear hearing protection when noise levels exceed 85 dBA."**
Equivalent to C-000049. 85 dBA is company policy P-000005 (PO Decision 002), so **there is no conflict** (U-14 resolved). Boundary wording differs ("exceed" vs. "or greater"); harmonize in a future approved milestone, keeping the 85 dBA requirement.

**R-3 — Production C7 / C11 "Never … work under a suspended load."**
Equivalent to C-000033 for general crews. In steel erection, C-000034 (connectors only) accompanies it, because connectors are necessarily exposed during initial connection.

**Production control entries not yet reconciled.**
These contain no controls equivalent to Package 001 controls, or only broader ones; they are retained with all their relationships:
- C2, C5, C6, C9, C10, C12, C13, C14, C17, C18, C20, C21, C23, C24;
- the remaining lines of C1, C3, C4, C7, C8, C11, C15, C16, C19 and C22.

They will be reconciled in the packages that own those activities.

**R-4 — Production C2 fire watch duration.** C2 contains both "minimum 30 minutes after hot work" and "Monitor area 30-60 minutes after hot work for smoldering fire," which overlap and differ. Reconciled under PO Decision 003 §4:
- the canonical requirement is C-000115 (during hot work and at least 30 minutes after; P-000007);
- additional monitoring required by a project, permit or standard is the distinct conditional control C-000117.

No universal 30–60 minute requirement is created. Production is unchanged until a PO-approved milestone.

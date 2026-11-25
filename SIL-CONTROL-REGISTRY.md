> **Repository Record (AD-008 §6):** Permanent canonical control registry (Architect Response 002 §1). Entries are **candidate** content until the Product Owner approves the package that introduces them. No production control is retired by this registry.

# Safety Intelligence Library — Canonical Control Registry

**Rules (Architect Response 002 §1):**
- Identifiers use the format `C-000001` and run sequentially. They are permanent and activity-independent, are never changed, and are **never reused after retirement**.
- One canonical control may relate to many hazards. Where needed, a relationship carries its own applicability condition, shown as `[condition]`.
- Equivalent production controls (`HAZ_TO_CONTROL` entries C*n* in `A4-LIBRARY-EXPORT.md`) are mapped below. **A production control is not retired until all of its valid relationships are accounted for.** No production control is retired at this revision.
- New controls are appended at the next sequential number. Retired controls stay listed with status "Retired — do not reuse."

**Register status:** C-000001 to C-000104 assigned (SIL-PKG-001 r2). Next available: **C-000105**. Retired: none.

## Registry

| Control ID | Canonical control (user-facing) | Related hazards [relationship applicability] | Production equivalent |
|---|---|---|---|
| C-000001 | The pump operator pressurizes only on a clear signal from the person at the tool. | H-BT-022 [if pump operated by another person]; H-BT-035 | — |
| C-000002 | Never use fingers to check or align holes — use a drift pin or spud wrench. | H-BT-001 | — |
| C-000003 | Keep hands off mating surfaces while plies are drawn together. | H-BT-001 | — |
| C-000004 | Wear the hand protection required for the task and project. | H-BT-002 | C3 "Wear proper cut-resistant gloves appropriate for the task" (equivalent; no cut level per PO Decision 4) |
| C-000005 | Remove burrs only where the connection or flange requirements allow it — never on gasket seating faces. | H-BT-002 | — |
| C-000006 | Keep hands off unprotected plate, pipe and hole edges. | H-BT-002 | — |
| C-000007 | Use the correct size wrench or socket, fully seated on the nut. | H-BT-003 | — |
| C-000008 | Do not use wrenches with sprung or worn jaws. | H-BT-003 | — |
| C-000009 | Pull rather than push where possible, with knuckles clear of steel. | H-BT-003 | — |
| C-000010 | Do not extend a wrench with pipe unless it is designed for it. | H-BT-003; H-BT-006 | — |
| C-000011 | Brace for the tool's reaction before starting; use the side handle where provided. | H-BT-004 | — |
| C-000012 | Set direction and torque or speed before starting. | H-BT-004 | — |
| C-000013 | Expect the tool to twist when the nut seats or stalls. | H-BT-004 | — |
| C-000014 | Inspect wrenches, sockets, extensions and multipliers before use; tag and remove damaged tools. | H-BT-006 | — |
| C-000015 | Use only extensions and multipliers rated for the force applied. | H-BT-006 | — |
| C-000016 | Inspect puller threads, pistons, seals and bridges before use; remove damaged components. | H-BT-006 [if tensioner]; H-BT-033 | — |
| C-000017 | Choose a longer wrench, a multiplier or a powered tool based on the force needed and the access available — do not overpower a manual wrench. | H-BT-007 | — |
| C-000018 | Set up to apply force at waist-to-chest height, not overhead or twisted. | H-BT-007 | — |
| C-000019 | Move heavy tool heads, tensioners and pumps with a handling method rated for their weight, configuration and access — do not climb carrying them. | H-BT-007 [if hydraulic wrench, tensioner, large impact or pump] | — |
| C-000020 | Rotate tasks or workers on long bolting or impact runs to limit exposure. | H-BT-008; H-BT-020 | — |
| C-000021 | Keep wrists straight and use tools sized to the work. | H-BT-008 | — |
| C-000022 | Set your feet and brace before applying force — expect the nut to break free. | H-BT-009; H-BT-011 | — |
| C-000023 | Stand on the platform floor; never climb or stand on rails to reach the work. | H-BT-009 [if aerial or scissor lift] | — |
| C-000024 | Do not apply heavy wrench force from a ladder — reposition or use a lift. | H-BT-009 [if ladder] | — |
| C-000025 | Never hold the socket, extension or chuck while the tool runs. | H-BT-010 | — |
| C-000026 | Secure loose sleeves; keep lanyards and tool tethers clear of rotating parts. | H-BT-010 | — |
| C-000027 | Do not exceed the specified tightening. | H-BT-011; H-BT-031 | — |
| C-000028 | Replace and reuse fasteners only as the project requirements specify — remove bolts that have stretched, galled or been over-tightened. | H-BT-011; H-BT-031 | — |
| C-000029 | Keep hands and body out from between members until the connection is made. | H-BT-012 | C11 "Keep body parts out of all crush zones" (broader; retain) |
| C-000030 | Pull pins and loosen bolts only with the member supported — misaligned steel can spring when released. | H-BT-012 | — |
| C-000031 | Leave temporary bolts, bracing and guying in place until removal is authorized under the erection sequence and stability requirements. | H-BT-013 | — |
| C-000032 | Follow the erection plan sequence. | H-BT-013; H-BT-015 | — |
| C-000033 | Stay out from under the suspended load. | H-BT-014 | C7 "Never stand or work under a suspended load"; C11 "Never work under a suspended load" (equivalent — see registry note R-3) |
| C-000034 | Only the connectors make the initial connection. | H-BT-014 | — |
| C-000035 | Use tag lines; keep hands off the load except at the connection point. | H-BT-014 | C7 "Use tag lines to control load swing where practical" (equivalent) |
| C-000036 | Keep direct communication with the signal person. | H-BT-014 | — |
| C-000037 | Do not release the load until the connection required for that member is made and stability is verified. | H-BT-015 | C11 "Verify support is stable before releasing rigging or mechanical hold" (equivalent for steel) |
| C-000038 | At a shared connection, keep at least one bolt with its nut tight in the first member — unless a seat or approved support device holds it. | H-BT-016 | — |
| C-000039 | Use the fall protection required by company, project and equipment-manufacturer requirements for the access being used — do not start until it is in place. | H-BT-017 | C1 "Maintain 100% tie-off when exposed to fall hazards at 6 feet or greater" (NOT equivalent — conflicts with PO Decision 1; see registry note R-1) |
| C-000040 | In boom and scissor lifts, wear compatible personal fall protection attached to the manufacturer-approved anchorage point. | H-BT-017 [if boom or scissor lift] | — |
| C-000041 | Never tie off to the steel or an adjacent structure from a lift. | H-BT-017 [if boom or scissor lift] | — |
| C-000042 | Tie off to an approved anchorage rated for fall arrest before working on steel. | H-BT-017 [if on structure] | C1 "Use approved anchorage points rated for fall arrest forces" (equivalent) |
| C-000043 | Inspect harness, lanyard or SRL and connectors before use. | H-BT-017 | C1 "Inspect harness, lanyard, SRL, and all connectors before each use" (equivalent) |
| C-000044 | Have a rescue plan ready before work at height — a worker suspended in a harness must be reached promptly. | H-BT-017 | C1 "Review fall rescue plan before work begins" (equivalent; response emphasis added) |
| C-000045 | Keep bolts, nuts and washers in a secured bolt bag or bucket — never loose on flanges or beams. | H-BT-018 | — |
| C-000046 | Use rated tool tethers where required. | H-BT-018 | — |
| C-000047 | Barricade or control the area below; no one works below without protection. | H-BT-018; H-BT-028 [if elevated] | C4 "Barricade area below or around work if debris may affect others" (equivalent) |
| C-000048 | Support tensioners so they cannot fall when pullers are unthreaded. | H-BT-018 [if tensioner] | — |
| C-000049 | Wear hearing protection around noise-producing equipment and operations, including when working near others' noisy work. | H-BT-019 | C16 "Wear hearing protection when noise levels exceed 85 dBA" (NOT equivalent — threshold issue; see registry note R-2) |
| C-000050 | Keep tools maintained to reduce vibration. | H-BT-020 | — |
| C-000051 | Do not rely on anti-vibration gloves alone. | H-BT-020 | — |
| C-000052 | Use sockets rated for the tool — impact-rated sockets on impact tools. | H-BT-021 | — |
| C-000053 | Use the manufacturer-approved socket or attachment retention. | H-BT-021 | — |
| C-000054 | Wear safety glasses. | H-BT-021; H-BT-029; H-BT-032 | C4 "Wear approved safety glasses at all times in work area" (equivalent) |
| C-000055 | Add goggles or a face shield where debris or fragments can reach the face. | H-BT-029; H-BT-032 | C4 "Use face shield where flying debris or splash hazard exists" (equivalent) |
| C-000056 | Set the reaction arm against a solid surface and confirm the reaction direction before applying force. | H-BT-022 | — |
| C-000057 | Keep hands, hoses and body clear of the reaction arm and reaction point. | H-BT-022 | — |
| C-000058 | Inspect hydraulic hoses and fittings before use. | H-BT-023 | — |
| C-000059 | Never use hands to locate leaks. | H-BT-023 | — |
| C-000060 | Verify hydraulic pressure is released and address any trapped pressure or stored mechanical energy before disconnecting or removing equipment. | H-BT-023; H-BT-024; H-BT-034 | C19 "Verify zero energy state before beginning work" (broader; retain) |
| C-000061 | Do not kink, step on or drive over hoses. | H-BT-023 | — |
| C-000062 | Get immediate medical attention for any suspected injection injury, even if it looks minor. | H-BT-023 | — |
| C-000063 | Use hoses and couplers rated for the system's maximum pressure, with couplers fully engaged. | H-BT-024 | — |
| C-000064 | Do not use torque-wrench hoses or couplers on a tensioner system unless they are rated for tensioner pressure. | H-BT-024 [if tensioner] | — |
| C-000065 | Clean up spilled fluid before continuing. | H-BT-024 | C15 "Clean spills promptly and mark wet areas" (equivalent) |
| C-000066 | If hydraulic fluid gets in the eyes, flush immediately and get medical evaluation. | H-BT-024 | — |
| C-000067 | Use air tools with a positive connection to the hose that cannot come apart accidentally. | H-BT-025 | — |
| C-000068 | Install hose restraints (whip checks) at couplings. | H-BT-025 | — |
| C-000069 | Use excess-flow valves on supply lines where required — hose restraints and excess-flow valves do not replace each other. | H-BT-025 | — |
| C-000070 | Shut off and bleed the air before disconnecting. | H-BT-025 | — |
| C-000071 | Inspect cords and plugs before use. | H-BT-026 | — |
| C-000072 | Use the GFCI or other electrical protection required for the equipment and conditions. | H-BT-026 | — |
| C-000073 | Keep cords out of water and away from pinch points. | H-BT-026 | — |
| C-000074 | Route hoses and cords out of walkways. | H-BT-027 | C15 "Manage cords and hoses — route overhead or mark and protect on ground" (equivalent) |
| C-000075 | On lifts, secure hoses and cords so they cannot snag on steel as the lift moves, with enough slack for travel and without creating entanglement points. | H-BT-027 [if aerial or scissor lift] | — |
| C-000076 | Collect splines using the wrench's ejector into a bag or bucket. | H-BT-028 | — |
| C-000077 | Remove mushroomed or damaged striking tools and pins from service. | H-BT-029 | — |
| C-000078 | Keep your partner and others clear of the far side when driving pins. | H-BT-029 | — |
| C-000079 | Keep hands out of the strike zone; use a pin holder or long-handled tool to hold pins. | H-BT-030 | — |
| C-000080 | Use the bolt grade, length and washers called for on the drawings. | H-BT-031 | — |
| C-000081 | Tighten in pattern from the stiffest part of the joint outward. | H-BT-031 | — |
| C-000082 | Turn-of-nut: snug tight first, match mark, then turn the specified rotation. | H-BT-031 [if turn-of-nut] | — |
| C-000083 | Calibrated wrench: verify calibration daily with the bolts being installed. | H-BT-031 [if calibrated wrench] | — |
| C-000084 | TC bolts: the spline must be sheared off — a bolt with the spline intact is not tensioned. | H-BT-031 [if TC bolts] | — |
| C-000085 | DTI: verify gaps or indicator per manufacturer. | H-BT-031 [if DTI] | — |
| C-000086 | Complete pre-installation verification before production bolting of pretensioned joints. | H-BT-031 [if pretensioned joint] | — |
| C-000087 | Keep bolts clean, dry and lubricated as delivered. | H-BT-031 | — |
| C-000088 | Position yourself so you are not looking straight up into the work. | H-BT-032 | — |
| C-000089 | Verify the required puller thread engagement on the stud before pressurizing. | H-BT-033 | — |
| C-000090 | Confirm the tensioner and puller match the stud size and thread. | H-BT-033 | — |
| C-000091 | Seat the bridge square and flat on the flange face. | H-BT-033 | — |
| C-000092 | Keep everyone clear of the axial line of force of each tensioner or loaded stud, whatever its orientation. | H-BT-033; H-BT-034 | — |
| C-000093 | Do not exceed the tool's rated pressure or piston stroke. | H-BT-033 | — |
| C-000094 | If a nut will not turn, stop — do not raise pressure beyond the procedure. | H-BT-033 | — |
| C-000095 | Loosen tensioned studs only with the tensioner and the specified detensioning procedure. | H-BT-034 | — |
| C-000096 | Never cut, hammer or impact a tensioned nut or stud loose. | H-BT-034 | — |
| C-000097 | Turn nuts by the manufacturer-designated method; keep fingers out of nut-turning openings and the gap between tool and flange. | H-BT-035 | — |
| C-000098 | Keep hands clear of pistons and pullers while pressurized. | H-BT-035 | — |
| C-000099 | Disconnect or lock the pump control while positioning or adjusting tools. | H-BT-035 | — |
| C-000100 | Follow the specified tightening or tensioning sequence, number of passes and pressure or torque. | H-BT-036 | — |
| C-000101 | Use the specified studs, nuts and gasket; do not reuse a gasket. | H-BT-036 | — |
| C-000102 | Run nuts down fully before releasing tensioner pressure. | H-BT-036 [if tensioner] | — |
| C-000103 | Use calibrated gauges and correctly rated equipment. | H-BT-036 | — |
| C-000104 | Complete the required joint verification and records before return to service. | H-BT-036 | — |

## Registry notes

**R-1 — Production C1 "Maintain 100% tie-off when exposed to fall hazards at 6 feet or greater."**
Not equivalent to C-000039. It states a universal numeric threshold, which conflicts with PO Decision 1. Retained in production unchanged. Revision requires a PO-approved production milestone (Package 001 r2, U-14).

**R-2 — Production C16 "Wear hearing protection when noise levels exceed 85 dBA."**
Not equivalent to C-000049. Crews can't apply a dBA threshold in the field, and the figure isn't the construction standard's structure. Retained in production unchanged (U-14).

**R-3 — Production C7 / C11 "Never … work under a suspended load."**
Equivalent to C-000033 for general crews. In steel erection, C-000034 (connectors only) accompanies it, because connectors are necessarily exposed during initial connection.

**Production control entries not yet reconciled.**
These contain no controls equivalent to Package 001 controls, or only broader ones; they are retained with all their relationships:
- C2, C5, C6, C9, C10, C12, C13, C14, C17, C18, C20, C21, C23, C24;
- the remaining lines of C1, C3, C4, C7, C8, C11, C15, C16, C19 and C22.

They will be reconciled in the packages that own those activities.

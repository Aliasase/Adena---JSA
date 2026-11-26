> **Repository Record (AD-008 §6):** Architect candidate library for Package 004, received November 26, 2026. Preserved verbatim below. Candidate only — not approved; nothing in production is changed by this document.

# SIL-PKG-004 — Rigging and Hoisting

**Revision:** Candidate 1.0  
**Date:** November 26, 2026  
**Phase:** A-4 — Safety Intelligence Library Development  
**Prepared by:** Architect  
**Production baseline:** v1.4.1-p1  
**Status:** Candidate for Engineer review and reconciliation

## 1. Objective

Develop comprehensive safety intelligence for rigging, hoisting, lifting, suspended load movement and load placement across the supported industries.

The application shall recognize the operation being performed and anticipate reasonably foreseeable exposures without requiring the foreman to describe every individual hazard.

All existing application behavior and governing safety intelligence principles remain in effect.

## 2. Work Activity Recognition

Recognize the following activities independently and cumulatively:

- Planning a lift.
- Selecting lifting equipment.
- Inspecting rigging.
- Setting up lifting equipment.
- Establishing crane operating areas.
- Attaching rigging.
- Connecting lifting accessories.
- Balancing loads.
- Performing trial lifts.
- Hoisting and lowering.
- Swinging and rotating loads.
- Traveling with suspended loads.
- Tailing and upending.
- Turning or rolling loads.
- Transferring loads between lifting devices.
- Performing tandem or multiple-crane lifts.
- Guiding and controlling suspended loads.
- Receiving and landing loads.
- Positioning and aligning loads.
- Supporting and stabilizing loads.
- Releasing and removing rigging.
- Dismantling lifting equipment.
- Recovering snagged or obstructed loads.

Do not require the user to select a lifting method from a mandatory menu.

## 3. Equipment and Object Recognition

### Mobile lifting equipment

- Hydraulic mobile cranes.
- Rough-terrain cranes.
- All-terrain cranes.
- Truck-mounted cranes.
- Crawler cranes.
- Lattice-boom cranes.
- Carry-deck cranes.
- Boom trucks.
- Articulating or knuckle-boom cranes.
- Derrick cranes.
- Tower cranes.
- Telehandlers with approved lifting attachments.
- Forklifts with approved lifting attachments.
- Excavators configured and approved for lifting.

### Stationary and portable lifting equipment

- Overhead bridge cranes.
- Gantry cranes.
- Jib cranes.
- Monorail hoists.
- Electric hoists.
- Pneumatic hoists.
- Manual chain hoists.
- Chain falls.
- Lever hoists.
- Come-alongs.
- Tirfor-type wire rope pulling and lifting devices.
- Portable gantries.
- Material hoists.
- Winches configured and rated for the intended lifting operation.

### Rigging equipment

- Wire rope slings.
- Alloy steel chain slings.
- Synthetic web slings.
- Synthetic roundslings.
- Single-leg and multi-leg sling assemblies.
- Shackles.
- Hooks.
- Master links.
- Connecting links.
- Eye bolts.
- Hoist rings.
- Swivel lifting points.
- Lifting lugs.
- Padeyes.
- Trunnions.
- Spreader bars.
- Lifting beams.
- Equalizer beams.
- Plate lifting clamps.
- Beam lifting clamps.
- Pipe lifting clamps.
- Drum lifting attachments.
- Concrete lifting inserts.
- Precast lifting anchors.
- Vacuum lifting devices.
- Magnetic lifting devices.
- Below-the-hook lifting devices.
- Rigging blocks and sheaves.
- Snatch blocks.
- Tag lines.
- Push-pull tools.
- Outrigger mats and cribbing.
- Dunnage and blocking.

### Load recognition

Recognize structural steel, precast concrete, reinforcing steel, pipe spools, process equipment, pumps, motors, vessels, machinery, ride components, rockwork assemblies, containers, pallets, bundles, irregular assemblies and fabricated components.

Load-specific exposures shall be added when supported by the recognized object and activity.

## 4. Candidate Hazard Library

The following identifiers are provisional package identifiers. Reconcile each against the existing canonical hazard registry before establishing permanent records.

### Load and rigging hazards

| Candidate ID | Hazard |
|---|---|
| H-RH-001 | Suspended load striking personnel. |
| H-RH-002 | Falling load from rigging or lifting equipment failure. |
| H-RH-003 | Rigging failure from excessive loading. |
| H-RH-004 | Increased sling tension from unfavorable sling angles. |
| H-RH-005 | Unequal loading of sling legs or lifting points. |
| H-RH-006 | Load shifting or rotating from an uncontrolled center of gravity. |
| H-RH-007 | Load slipping or escaping from the rigging configuration. |
| H-RH-008 | Sling damage from sharp edges, abrasion or inadequate bearing surfaces. |
| H-RH-009 | Rigging failure from incompatible or improperly connected hardware. |
| H-RH-010 | Lifting point failure from inadequate capacity or improper loading direction. |
| H-RH-011 | Shock loading from sudden movement, snagging or abrupt load release. |
| H-RH-012 | Rigging failure from damaged, deteriorated or defective equipment. |
| H-RH-013 | Uncontrolled movement of loose components within a lifted assembly. |
| H-RH-014 | Rigging disengagement during slackening or changes in load orientation. |
| H-RH-015 | Load or rigging damage from excessive heat, chemicals or environmental exposure. |

### Personnel exposure

| Candidate ID | Hazard |
|---|---|
| H-RH-016 | Hands or fingers caught between rigging and the load. |
| H-RH-017 | Personnel crushed between a moving load and a fixed object. |
| H-RH-018 | Personnel caught between the load and its landing surface. |
| H-RH-019 | Personnel struck by swinging or rotating loads. |
| H-RH-020 | Personnel caught in crane counterweight or rotating superstructure areas. |
| H-RH-021 | Personnel struck by moving crane components or lifting equipment. |
| H-RH-022 | Entanglement in tag lines, rigging or moving ropes. |
| H-RH-023 | Personnel struck by tensioned rigging or ropes releasing stored energy. |
| H-RH-024 | Personnel pulled off balance while attempting to control a load. |
| H-RH-025 | Falls while attaching, adjusting or removing rigging at elevation. |
| H-RH-026 | Dropped rigging, tools or hardware from elevation. |
| H-RH-027 | Musculoskeletal strain from handling heavy rigging equipment. |
| H-RH-028 | Cuts and punctures from damaged wire rope, sharp hardware or load edges. |

### Crane and equipment stability

| Candidate ID | Hazard |
|---|---|
| H-RH-029 | Crane overturning from inadequate ground support or loss of stability. |
| H-RH-030 | Outrigger or support failure from unsuitable bearing conditions. |
| H-RH-031 | Ground collapse over underground utilities, voids, vaults or excavations. |
| H-RH-032 | Crane overload from incorrect load weight or operating configuration. |
| H-RH-033 | Reduced lifting capacity as operating radius increases. |
| H-RH-034 | Crane instability from improper setup, leveling or outrigger configuration. |
| H-RH-035 | Boom or structural damage from side loading. |
| H-RH-036 | Crane or equipment instability while traveling with a suspended load. |
| H-RH-037 | Uncontrolled equipment movement on slopes or unsuitable travel surfaces. |
| H-RH-038 | Collision between cranes, booms, structures or adjacent equipment. |
| H-RH-039 | Crane assembly or disassembly instability. |
| H-RH-040 | Crushing or uncontrolled movement during counterweight, outrigger or boom assembly. |
| H-RH-041 | Two-blocking or contact between the load block and upper boom components. |
| H-RH-042 | Uncontrolled load descent from brake, hoist or mechanical failure. |
| H-RH-043 | Loss of load control from hydraulic, electrical or power-system failure. |

### Environmental and operational conditions

| Candidate ID | Hazard |
|---|---|
| H-RH-044 | Electrical contact or arcing involving overhead power lines. |
| H-RH-045 | Electrical exposure from an energized crane, load or rigging system. |
| H-RH-046 | Uncontrolled load movement from wind or gusts. |
| H-RH-047 | Reduced crane stability or capacity from wind loading. |
| H-RH-048 | Lightning exposure during lifting operations. |
| H-RH-049 | Reduced visibility of personnel, loads or obstructions. |
| H-RH-050 | Loss of communication between operator, signal person and rigging personnel. |
| H-RH-051 | Conflicting or misunderstood lifting instructions. |
| H-RH-052 | Unauthorized personnel entering the lifting or landing area. |
| H-RH-053 | Load collision with structures, scaffolding, utilities or adjacent operations. |
| H-RH-054 | Uncontrolled movement caused by snagged or obstructed loads. |
| H-RH-055 | Reduced traction or equipment stability from rain, mud, ice or surface contamination. |

### Specialized lifting operations

| Candidate ID | Hazard |
|---|---|
| H-RH-056 | Unequal or changing load distribution during multiple-crane lifts. |
| H-RH-057 | Uncontrolled load transfer between lifting devices. |
| H-RH-058 | Sudden center-of-gravity changes during upending, tailing or rotation. |
| H-RH-059 | Load failure from inadequate temporary reinforcement or structural rigidity. |
| H-RH-060 | Failure of supporting structures used to suspend hoists or rigging. |
| H-RH-061 | Uncontrolled movement from improper winch or pulling-device anchorage. |
| H-RH-062 | Rope or cable failure from improper reeving, bending or sheave compatibility. |
| H-RH-063 | Load release following loss of vacuum or magnetic holding force. |
| H-RH-064 | Plate or beam slipping from an incorrectly applied lifting clamp. |
| H-RH-065 | Precast lifting insert or surrounding concrete failure. |
| H-RH-066 | Load displacement from unapproved forklift or telehandler lifting attachments. |
| H-RH-067 | Equipment overload from incorrect suspended-load configuration or attachment capacity. |
| H-RH-068 | Uncontrolled movement of a load during landing or rigging removal. |
| H-RH-069 | Load collapse from inadequate blocking, cribbing or temporary support. |
| H-RH-070 | Premature rigging release before the load is adequately secured. |
| H-RH-071 | Uncontrolled movement from residual connections, attachments or process lines during equipment removal. |
| H-RH-072 | Personnel struck by displaced blocking or cribbing under load. |
| H-RH-073 | Failure of personnel lifting equipment or its supporting system. |
| H-RH-074 | Personnel trapped, suspended or stranded during personnel lifting operations. |
| H-RH-075 | Load or rigging failure from improper use of a pulling device for overhead lifting. |

## 5. Candidate Control Library

Reconcile all proposed controls against the existing canonical control registry.

Do not create duplicate controls merely because they apply to a different activity.

### Lift planning

- Determine the load weight before lifting.
- Include applicable rigging, lifting accessories and attachments when determining total crane loading.
- Identify the load center of gravity and anticipated changes in orientation.
- Verify lifting points are suitable for the intended loading direction and configuration.
- Establish the lifting sequence, travel path and landing location before hoisting.
- Verify equipment capacity for the actual configuration, radius and operating conditions.
- Identify underground and overhead obstructions before equipment setup.
- Identify adjacent operations that could interfere with the lift.
- Establish communication methods and responsibilities before lifting.
- Confirm applicable lift-plan and approval requirements before proceeding.
- Stop and reassess when the load, equipment configuration or operating conditions change.

### Personnel qualifications

- Use personnel qualified for their assigned rigging responsibilities.
- Use operators meeting applicable equipment-specific training, qualification and certification requirements.
- Use qualified signal persons where required.
- Assign lift supervision appropriate to the complexity and requirements of the operation.
- Review specialized lifting procedures with affected personnel before beginning.
- Ensure personnel understand their assigned roles, communication methods and stop-work responsibilities.

### Rigging inspection and selection

- Inspect rigging and lifting accessories before use and remove defective equipment from service.
- Verify identification and rated capacity are legible where required.
- Select rigging suitable for the load weight, configuration and environmental conditions.
- Account for sling angle and hitch configuration when determining sling capacity.
- Account for unequal load distribution rather than assuming all sling legs carry equal loads.
- Use compatible hooks, shackles, links and connecting hardware.
- Verify hardware is loaded in the intended direction.
- Protect slings from damaging edges and bearing surfaces using suitable protection.
- Do not shorten, knot or modify rigging by unauthorized methods.
- Do not use makeshift lifting accessories.
- Use manufacturer-approved methods for connecting and securing rigging hardware.
- Verify hooks, latches and other retention devices are suitable and functioning where required.
- Protect synthetic rigging from incompatible chemicals, excessive temperatures and hot work.
- Remove damaged wire rope, chain, webbing and roundslings from service according to applicable rejection criteria.

### Rigging attachment

- Keep hands clear of pinch points while attaching and tensioning rigging.
- Verify slings are seated correctly before applying load.
- Verify shackle pins and threaded lifting accessories are properly engaged and secured.
- Use lifting points designed or approved for the intended load and direction.
- Verify lifting accessories cannot unintentionally disengage as load orientation changes.
- Use suitable hitch configurations to prevent load slippage.
- Secure loose components before lifting an assembly.
- Position rigging to maintain load balance.
- Avoid twisting or unintended bending of rigging hardware.
- Verify lifting beams and spreader bars are suitable for the intended configuration.

### Crane setup and stability

- Verify ground conditions can support the crane and anticipated support reactions.
- Identify underground utilities, voids, vaults, recently disturbed ground and adjacent excavations.
- Use suitable outrigger mats, blocking or supporting materials where required.
- Position and configure outriggers according to the applicable load chart and manufacturer instructions.
- Verify equipment is level within manufacturer requirements.
- Maintain required clearances from excavation edges and unstable ground based on assessed conditions.
- Verify counterweight, boom, jib and reeving configurations before lifting.
- Confirm the correct load chart applies to the actual crane configuration.
- Establish and maintain exclusion zones around rotating superstructures and counterweights.
- Do not exceed rated capacity for the operating configuration.
- Reassess ground and support conditions when weather or site conditions change.

### Hoisting and load control

- Take up rigging slack gradually.
- Verify rigging seating and load balance before continuing the lift.
- Perform a controlled initial lift to verify load stability where appropriate.
- Avoid sudden acceleration, abrupt stopping and shock loading.
- Keep personnel clear of suspended loads and the load fall zone except where necessary and permitted for the operation.
- Do not allow personnel beneath suspended loads.
- Use tag lines or other suitable load-control methods when necessary and safe.
- Never wrap tag lines around hands, wrists or the body.
- Keep personnel out of the line of pull and potential recoil path.
- Do not attempt to restrain an uncontrolled load using body weight.
- Maintain clearance between the load and adjacent structures.
- Stop if the load becomes snagged or obstructed.
- Determine and correct the cause of unexpected resistance before resuming.
- Avoid side loading unless the equipment and operation are specifically designed and approved for it.
- Maintain control of the load throughout lifting, movement and landing.

### Communication and exclusion zones

- Establish a designated signal person when required.
- Use recognized signals or an agreed communication system appropriate to the operation.
- Verify radio communication before lifting.
- Maintain reliable communication throughout the operation.
- Stop movement when required communication is lost.
- Accept stop or emergency-stop signals from anyone identifying an unsafe condition.
- Prevent conflicting operating instructions.
- Establish barricades or controlled access around lifting and landing areas.
- Coordinate with adjacent work crews.
- Keep personnel clear of blind spots, swing areas and load travel paths.
- Do not resume movement until the affected area is clear.

### Landing and rigging removal

- Prepare a stable landing area before moving the load into position.
- Use suitable blocking, cribbing or dunnage to support the load.
- Keep hands and feet clear of the landing interface.
- Use suitable positioning tools rather than placing body parts between the load and fixed surfaces.
- Verify the load is stable and adequately supported before slackening rigging.
- Maintain lifting support until required connections or temporary supports are established.
- Verify the load cannot roll, tip, slide or collapse after rigging removal.
- Release rigging tension gradually.
- Keep personnel clear of stored-energy release paths.
- Remove rigging without pulling against unsecured loads or obstructions.
- Inspect and store rigging appropriately after use.

### Electrical exposure

- Identify overhead power lines and other electrical sources before crane setup or movement.
- Establish required approach distances based on voltage, equipment and applicable requirements.
- Coordinate de-energization and grounding with the utility or responsible electrical authority when required.
- Establish suitable warning boundaries and dedicated monitoring where required.
- Consider the full movement envelope of the boom, load, rigging and load-control equipment.
- Treat electrical lines as energized unless their status has been properly verified.
- Stop operations if required electrical clearances cannot be maintained.
- Establish an electrical-contact emergency response procedure appropriate to the equipment and operation.
- Keep personnel away from equipment, loads and rigging that may have become energized.

### Weather and environmental conditions

- Evaluate wind speed, gusts, load surface area and manufacturer operating limitations.
- Stop lifting when environmental conditions prevent safe load control.
- Do not rely solely on a general wind-speed limit for all equipment and loads.
- Monitor changing weather conditions throughout the operation.
- Follow applicable lightning suspension and resumption procedures.
- Maintain adequate lighting and visibility.
- Stop movement when the operator or signal person cannot safely monitor the operation.
- Reassess equipment stability following heavy rain or changes in ground conditions.

### Traveling with suspended loads

- Verify the equipment is approved for traveling with a suspended load.
- Use the applicable travel or pick-and-carry capacity information.
- Assess the travel route, slope, ground support and overhead clearances.
- Maintain load position and travel speed within manufacturer requirements.
- Prevent uncontrolled load swing.
- Use spotters or signal persons where required.
- Keep personnel clear of the equipment and suspended-load travel path.

### Multiple-crane lifts and load transfers

- Establish an approved lift plan appropriate to the operation.
- Determine anticipated load distribution throughout every stage of the lift.
- Account for changes in center of gravity, operating radius and load orientation.
- Verify each lifting device remains within its applicable capacity.
- Establish coordinated operating instructions and designated lift direction.
- Prevent unintended load transfer between lifting devices.
- Stop if load distribution or movement differs from the approved plan.
- Do not release one lifting device until the receiving system is verified capable of safely supporting the load.

### Chain hoists, lever hoists and pulling devices

- Verify the supporting structure and attachment point can withstand the anticipated loading.
- Select equipment rated and approved for the intended lifting or pulling operation.
- Inspect hooks, chains, ropes, brakes and attachment points.
- Verify the load chain or rope is correctly aligned.
- Do not extend operating handles unless specifically permitted by the manufacturer.
- Do not use load chains as slings unless specifically designed for that purpose.
- Keep personnel clear of tensioned equipment and potential recoil paths.
- Prevent side loading of hooks, hoists and supporting attachments.
- Maintain control of the load during raising and lowering.
- Do not use equipment intended only for pulling to suspend loads overhead.

### Lifting clamps and specialized attachments

- Verify the attachment is designed for the material, thickness, dimensions and lifting orientation.
- Verify minimum and maximum loading requirements where applicable.
- Inspect gripping surfaces, jaws, locking mechanisms and attachment points.
- Install and engage the attachment according to manufacturer instructions.
- Prevent unintended disengagement when the load is landed or rigging tension changes.
- Do not assume a vertical lifting clamp is suitable for horizontal lifting.
- Verify material surface conditions are compatible with the gripping method.
- Verify vacuum or magnetic lifting devices are suitable for the load and surface conditions.
- Establish appropriate precautions for loss of vacuum, power or magnetic holding force.
- Verify precast lifting inserts, compatible lifting hardware and required concrete strength before lifting.

### Forklift and telehandler lifting

- Use attachments approved for the equipment and intended suspended-load operation.
- Verify applicable capacity information for the installed attachment and equipment configuration.
- Do not assume standard fork capacity applies to a suspended load.
- Prevent rigging from unintentionally sliding or disengaging from the attachment.
- Maintain stability throughout lifting, placement and travel.
- Follow equipment-specific restrictions on boom extension, load position and travel.

### Equipment removal and replacement

- Verify equipment is disconnected from structural attachments, utilities and process systems before lifting.
- Establish applicable hazardous-energy isolation and line-breaking controls.
- Identify residual contents that may affect load weight or center of gravity.
- Support equipment before removing load-bearing fasteners or connections.
- Verify the load is free before applying lifting force.
- Establish stable temporary support before releasing rigging.

### Personnel lifting

Personnel lifting shall be recognized as a separate high-consequence operation.

Do not treat personnel platforms as ordinary material loads.

Recognize and apply controls addressing:

- Applicable restrictions and authorization for personnel hoisting.
- Equipment and platform suitability.
- Qualified planning and supervision.
- Required inspections, trial lifts and proof testing.
- Applicable fall protection.
- Communication and controlled movement.
- Environmental operating restrictions.
- Emergency lowering and rescue arrangements.

Detailed numerical and jurisdiction-specific personnel-hoisting controls require independent validation before implementation.

## 6. Contextual Applicability Rules

### Rigging inspection

Inspection alone shall not automatically generate every active lifting hazard.

Recognize equipment defects, handling exposures and applicable inspection controls.

Add suspended-load exposures when inspection occurs during an active lifting operation.

### Suspended loads

Distinguish suspended loads from loads resting on stable supports.

Do not suppress suspended-load hazards merely because the foreman does not explicitly use the word suspended when the described operation reasonably establishes that condition.

### Ground support

Ground-bearing and outrigger hazards apply to relevant mobile equipment and setup conditions.

Do not apply mobile crane outrigger controls to ordinary overhead bridge crane or chain-hoist operations.

### Load charts

Recognize the actual equipment and configuration.

Do not assume all lifting equipment uses the same capacity determination method.

### Rigging versus fall protection

Maintain the distinction between:

- Material lifting beam clamps.
- Temporary fall protection beam anchors.
- Material handling beam trolleys.
- Fall protection sliding anchorage connectors.
- Structural fastening clamps.

When a task involves multiple devices for different purposes, retain all applicable exposures.

### Process equipment

Do not assume that lifting new fabricated pipe spools involves existing process contents or hazardous-energy isolation.

Apply process isolation, residual pressure and chemical exposure controls when supported by the described equipment condition or operation.

### Personnel hoisting

Do not infer personnel hoisting from ordinary crane use.

Recognize explicit personnel platforms, crane baskets, man baskets and equivalent terminology in the appropriate context.

Distinguish crane-suspended personnel platforms from MEWPs and forklift-mounted work platforms.

### Critical and complex lifts

Recognize explicit critical-lift terminology and complex lifting conditions.

Do not establish a universal percentage-of-capacity threshold or assume all employers and clients use the same critical-lift definition.

Where applicable, suggest verifying project-specific lift classification, planning and approval requirements.

### Tag lines

Do not automatically require tag lines for every lift.

Recognize circumstances where tag lines provide useful load control and circumstances where their use introduces entanglement, electrical, recoil or personnel-positioning hazards.

### Equipment terminology

Recognize common field terminology, abbreviations and brand references when context establishes the actual equipment or operation.

Brand names alone shall not establish a specific lifting method.

### Independent hazards

Do not suppress electrical, fall, chemical, hot work, excavation or other independently applicable hazards merely because rigging is the primary recognized activity.

## 7. Ranking Requirements

Prioritize applicable high-consequence exposures.

Examples:

- Crane setup near an excavation: ground failure and overturning.
- Hoisting near overhead power lines: electrical contact.
- Lifting with synthetic slings over sharp steel: sling damage and load failure.
- Upending a vessel: changing center of gravity and load distribution.
- Landing structural steel: crushing, stability and premature rigging release.
- Lifting with a chain hoist from a beam: supporting structure and attachment failure.
- Tandem crane lifting: unequal load distribution and coordination.
- Lifting a personnel platform: personnel lifting-specific exposures.
- Lifting a large panel in gusty conditions: wind loading and uncontrolled movement.

Continue to present only the highest applicable suggestions initially, with additional applicable suggestions available through Show More.

No padding, automatic selection or irrelevant suggestion expansion.

## 8. Product Owner Policy Decisions

The following company-specific requirements must be confirmed before establishing new policy records:

1. Critical-lift classification and approval thresholds.
2. Written lift-plan requirements.
3. Company wind and lightning restrictions.
4. Rigging inspection and identification requirements beyond applicable regulatory and manufacturer requirements.
5. Tag-line requirements or exceptions.
6. Lift Director assignment requirements.
7. Restrictions on crane-suspended personnel platforms.
8. Company requirements for lifting with telehandlers, forklifts and excavators.

Existing approved company policies remain applicable.

Do not infer new Adena policy requirements from industry practice.

## 9. Internal Technical Validation

Review applicable requirements and technical guidance from:

- OSHA construction crane and derrick requirements.
- OSHA construction material handling and rigging requirements.
- OSHA steel erection hoisting and rigging requirements.
- Applicable overhead crane, hoist and sling requirements.
- Applicable surface-mining requirements.
- Relevant ASME B30 standards.
- Manufacturer operating instructions and load charts.
- Manufacturer rigging and lifting accessory instructions.
- Applicable precast lifting-system instructions.

Distinguish regulatory requirements, consensus standards, manufacturer requirements, recognized practices and company policy.

Do not present unverified numerical thresholds or jurisdiction-specific requirements as universal rules.

All references remain internal. No regulatory citations shall appear in the user-facing application or generated JSA.

## 10. Required Regression Scenarios

At minimum, evaluate:

1. Inspect slings and shackles.
2. Rig structural steel.
3. Lift beam with two synthetic slings.
4. Lift sharp-edged steel with roundslings.
5. Hoist unbalanced fabricated assembly.
6. Set up crane beside excavation.
7. Set crane outriggers over underground vault.
8. Lift near overhead power lines.
9. Swing steel into building.
10. Land beam on columns.
11. Remove rigging after securing steel.
12. Lift pipe spool fabricated in shop.
13. Remove existing process pump with crane.
14. Lift vessel using two cranes.
15. Tail and upend vessel.
16. Transfer load between chain hoists.
17. Lift motor with overhead bridge crane.
18. Install chain fall on existing beam.
19. Pull equipment with come-along.
20. Hoist equipment with lever hoist.
21. Lift plate using vertical plate clamp.
22. Lift steel using beam lifting clamps.
23. Install beamers for fall protection.
24. Use beam trolley to move material.
25. Lift precast panel using embedded lifting inserts.
26. Lift sheet material using vacuum lifter.
27. Lift steel plate with magnetic lifter.
28. Travel with suspended load on telehandler.
29. Lift equipment using approved excavator lifting point.
30. Guide suspended load with tag line.
31. Recover snagged load.
32. Lift large panel during gusty winds.
33. Perform blind lift using radio communication.
34. Assemble crane counterweights.
35. Dismantle lattice-boom crane.
36. Hoist personnel using crane-suspended platform.
37. Move materials using forklift forks.
38. Lift suspended load using approved forklift attachment.
39. Remove pump after isolating process lines.
40. Install structural steel while using sliding fall protection anchors.
41. Land machinery on cribbing.
42. Remove rigging from unstable load.
43. Inspect crane without operating it.
44. Move unloaded crane through site.
45. Lift steel while welding occurs nearby.
46. Lift ride component through restricted opening.
47. Lift load with changing center of gravity.
48. Use winch to pull equipment horizontally.
49. Use pulling-only winch for proposed overhead lift.
50. Perform critical lift.

Include negative applicability assertions and mixed-operation scenarios.

## 11. Scheduled Corrections

The following accepted defects shall accompany the next authorized implementation:

- A3-U1 — Legacy signed JSA document integrity.
- P3-U17 — Pipe-spool fabrication recognition.
- P3-U18 — Sharp-metal control applicability.
- P3-U19 — Non-torch roofing recognition.

Preserve their previously approved architectural requirements.

## 12. Engineer Review Requirements

Before implementation:

- Reconcile all 75 candidate hazard records against the existing canonical registry.
- Identify duplicates, generalizations and genuinely new hazard mechanisms.
- Reconcile all candidate controls against the 418 registered controls.
- Preserve immutable canonical identifiers.
- Identify existing production suggestions requiring replacement or contextual correction.
- Develop activity, equipment, condition and context relationships.
- Identify regulatory and manufacturer validation requirements.
- Identify company-policy decisions requiring Product Owner approval.
- Develop positive, negative and mixed-operation regression scenarios.
- Preserve the six withheld RCSC controls.
- Preserve all existing unresolved validation items.
- Identify any proposed changes to previously approved records.

Return the reconciled package and Engineer review for Architect validation.

Do not implement, deploy or release Package 004 until separately authorized.
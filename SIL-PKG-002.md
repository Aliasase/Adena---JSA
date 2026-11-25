> **Repository Record (AD-008 §6):** Architect candidate package, retained verbatim. Candidate content — not approved. Reconciled version: `SIL-PKG-002-RECONCILED.md`.

---

# SIL-PKG-002 — WELDING, CUTTING AND GRINDING

**Phase:** A-4 — Safety Intelligence Library Development  
**Baseline:** c630be6 — revision-a4  
**Status:** Architect candidate — independent engineering review required  
**Activities:** Weld (0015), Cut (0016), Grind (0018)

## 1. Architectural Dispositions

### B-12 — Hot Work Classification

Classify operations producing flame, sparks or sufficient heat to create an ignition hazard as hot work.

Include conventional metal welding, thermal cutting, spark-producing metal grinding, abrasive metal cutting, brazing, soldering and carbon arc gouging.

Apply P-000006, P-000007 and P-000008.

Do not automatically classify non-ignition-producing grinding or cutting operations as hot work.

This classification is an architectural interpretation pending Product Owner confirmation.

### B-13 — Cutting Recognition

Cut remains a general activity. Package 002 develops its thermal and abrasive work methods without restricting the underlying activity definition.

An unspecified cutting method shall not automatically establish knife use, thermal cutting or abrasive cutting.

Use recognized objects, materials, tools and surrounding context to determine method applicability.

Present plausible but unconfirmed method-specific hazards conditionally. Do not automatically select them or introduce unrelated alternatives.

## 2. Recognition Library

### Weld — ACT-0015

High-confidence recognition:

- Weld, welding, welded connection
- Tack weld, stitch weld, fillet weld, groove weld
- Field weld, shop weld, structural weld
- Pipe weld, root pass, fill pass, cap pass
- Weld repair, weld buildup, hardfacing
- Stick welding, SMAW
- MIG welding, GMAW
- TIG welding, GTAW
- Flux-core welding, FCAW
- Submerged arc welding, SAW when supported by welding context
- Resistance welding, spot welding
- Brazing and soldering as related joining methods

Work means:

- Welding machine, welder
- Electrode holder, stinger
- Welding leads, work clamp
- Welding gun, MIG gun, TIG torch
- Wire feeder, welding wire
- Welding rods, electrodes
- Shielding gas, purge gas
- Welding positioner
- Welding blanket, welding screen

### Cut — ACT-0016

Thermal methods:

- Torch cutting
- Oxy-fuel cutting
- Oxy-acetylene cutting
- Plasma cutting
- Carbon arc gouging
- Air carbon arc cutting
- Exothermic cutting
- Burning steel, burning bolts, burning off metal

Abrasive methods:

- Abrasive cutting
- Cut-off wheel
- Cut-off disc
- Abrasive chop saw
- Abrasive cut-off saw
- Grinder with cutting wheel

Work means:

- Cutting torch
- Plasma cutter
- Gouging torch
- Carbon electrode
- Oxygen cylinder
- Fuel gas cylinder
- Regulators
- Gas hoses
- Abrasive wheel
- Cut-off wheel
- Chop saw

### Grind — ACT-0018

Recognition:

- Grind, grinding
- Angle grinding
- Surface grinding
- Grind welds
- Grind flush
- Grind smooth
- Grind bevel
- Weld preparation
- Weld finishing
- Abrasive surface preparation
- Deburring with a grinder

Work means:

- Angle grinder
- Handheld grinder
- Die grinder
- Bench grinder
- Pedestal grinder
- Grinding wheel
- Flap disc
- Abrasive disc
- Wire wheel
- Wire cup brush

### Recognition Collision Rules

- TIG shall not match inside tight or tightening.
- Arc flash alone shall not establish welding.
- Saw alone shall not establish submerged arc welding.
- Torch alone requires contextual interpretation.
- Roofing torch establishes hot work without establishing metal cutting.
- Burning alone does not establish thermal cutting.
- Grinding concrete does not establish metal grinding.
- Cut alone does not establish a cutting method.
- Knife use triggers P-000002 independently of Package 002.
- Stainless steel alone does not establish the stainless steel lath glove requirement.
- Welding and grinding methods may coexist within the same task description.

## 3. Objects and Conditions

Recognize cumulatively where supported.

**Objects and materials**

- Structural steel
- Stainless steel
- Stainless steel lath
- Galvanized steel
- Aluminum
- Carbon steel
- Painted or coated metal
- Lead-containing coatings
- Cadmium-containing materials
- Chromium-containing alloys
- Welding consumables
- Tanks, drums and vessels
- Process piping
- Flanges
- Gas cylinders
- Abrasive wheels
- Rigging equipment
- Fall protection equipment

**Conditions**

- Elevated work
- Overhead work
- Confined space
- Enclosed or poorly ventilated area
- Combustible materials
- Flammable atmosphere
- Combustible dust
- Wet or conductive surroundings
- Unknown coatings
- Residual process contents
- Stored energy
- Pressurized systems
- Concealed spaces
- Simultaneous operations
- Occupied adjacent work areas
- Restricted access
- Load-bearing structural components

Do not classify confined space as an activity.

## 4. Candidate Hazard and Control Records

Candidate hazard identifiers H-HW-001 through H-HW-040 are proposed. Preserve them through reconciliation, including retired identifiers.

Control wording below is candidate content. Reuse equivalent existing canonical controls before assigning new identifiers. New control identifiers begin at C-000118.

### H-HW-001 — Fire from hot work ignition sources

Applicability: All recognized hot work.

Controls:

- Reuse C-000114 — minimum 35-foot combustible clearance or protection.
- Reuse C-000115 — fire watch.
- Reuse C-000116 — hot work permit.
- Keep a suitable, inspected and charged fire extinguisher immediately accessible.
- Use suitable fire-resistant blankets, curtains or barriers to contain sparks and slag.
- Direct sparks and slag away from personnel, equipment and combustible materials.
- Stop hot work when required fire protection measures cannot be maintained.

### H-HW-002 — Fire in concealed or adjacent spaces

Applicability: Hot work near walls, floors, penetrations, cavities, insulated assemblies or concealed combustibles.

Controls:

- Inspect the opposite side of surfaces before starting hot work.
- Protect openings through which sparks or slag could travel.
- Inspect and protect concealed combustible materials.
- Assign additional fire watch personnel where one person cannot observe all exposed areas.
- Stop work if concealed ignition hazards cannot be adequately assessed or controlled.

### H-HW-003 — Delayed ignition or smoldering fire

Applicability: All hot work; elevated priority where concealed or combustible materials are present.

Controls:

- Reuse C-000115.
- Reuse C-000117 where extended monitoring is required.
- Inspect affected areas for smoke, heat, smoldering material and signs of ignition before releasing fire watch.
- Do not leave the affected area unattended until required fire watch and monitoring obligations are complete.

### H-HW-004 — Explosion or fire from flammable atmospheres

Applicability: Hot work near flammable gases, vapors, fuels or potentially hazardous atmospheres.

Controls:

- Identify potential flammable atmosphere sources before beginning hot work.
- Isolate or remove flammable material sources.
- Perform required atmospheric testing using suitable calibrated equipment.
- Maintain atmospheric monitoring where required by the exposure or permit.
- Stop work if atmospheric conditions become unsafe.
- Do not perform ordinary hot work in an explosive atmosphere.

### H-HW-005 — Combustible dust ignition or explosion

Applicability: Hot work near combustible dust, dust collectors, enclosed process equipment or dust-producing operations.

Controls:

- Determine whether accumulated or airborne dust is combustible.
- Remove combustible dust using an approved cleaning method.
- Isolate affected dust-producing and dust-collection equipment as required.
- Prevent sparks from entering ducts, collectors or enclosed process equipment.
- Do not begin hot work until combustible dust hazards have been controlled.

### H-HW-006 — Burns from sparks, molten metal and slag

Applicability: Welding, thermal cutting, gouging and spark-producing grinding.

Controls:

- Wear task-appropriate heat-resistant gloves.
- Wear suitable flame-resistant protective clothing for the thermal exposure.
- Protect exposed skin from sparks and molten material.
- Keep clothing arranged to prevent hot material from becoming trapped.
- Position the body outside the expected path of sparks and slag.
- Protect personnel below elevated hot work.

### H-HW-007 — Direct flame burns

Applicability: Oxy-fuel, brazing, soldering and other flame-producing methods.

Controls:

- Keep hands and body clear of the flame path.
- Direct the torch away from personnel and equipment.
- Shut down the torch using the manufacturer's procedure when work is interrupted or completed.
- Never leave a lit torch unattended.

### H-HW-008 — Contact burns from heated materials

Applicability: Welding, thermal cutting, brazing, soldering and heated workpieces.

Controls:

- Allow heated materials to cool before handling.
- Use suitable tools or heat-resistant gloves when handling hot materials.
- Identify or isolate recently heated material so others do not contact it unknowingly.

### H-HW-009 — Eye and skin injury from welding radiation

Applicability: Electric arc welding, plasma cutting and carbon arc gouging.

Controls:

- Use a welding helmet or appropriate filtered eye protection with the shade selected for the process and operating conditions.
- Wear primary safety glasses beneath welding helmets where required.
- Cover exposed skin against ultraviolet and infrared radiation.
- Inspect welding helmets, filter lenses and protective equipment before use.

Flame-based operations require suitable process-specific filtered eye protection; do not automatically prescribe an arc-welding helmet.

### H-HW-010 — Radiation exposure to nearby personnel

Applicability: Welding and other radiation-producing operations near personnel.

Controls:

- Install suitable welding screens or curtains to protect nearby personnel.
- Position screens to prevent direct and reflected radiation exposure.
- Restrict access to unprotected personnel.
- Maintain adequate ventilation when installing screens.

### H-HW-011 — Electrical shock from the welding circuit

Applicability: Electric welding, plasma cutting and electrical gouging.

Distinct from H-BT-026 electrical supply hazards.

Controls:

- Inspect welding leads, electrode holders, connectors and insulation before use.
- Remove damaged electrical welding equipment from service.
- Keep gloves and protective clothing dry.
- Avoid contact with energized electrodes and conductive work surfaces.
- Use suitable insulating protection when working in wet or conductive environments.
- Attach the work-return clamp to a suitable location on the workpiece or approved welding circuit.
- Prevent welding current from passing through bearings, rigging, fall protection components or unintended conductive paths.
- De-energize equipment before servicing or making adjustments requiring isolation.

### H-HW-012 — Welding and thermal cutting fume inhalation

Applicability: Welding, thermal cutting, gouging, brazing and soldering.

Controls:

- Identify base metals, consumables and coatings before work.
- Position the breathing zone away from the fume plume.
- Use suitable local exhaust ventilation or other effective ventilation.
- Position extraction equipment to capture fumes near their source.
- Evaluate exposure and use required respiratory protection where ventilation alone is insufficient.
- Use respirators only under the applicable respiratory protection program.

Do not universally prescribe an N95 or any other respirator without evaluating contaminants and exposure.

### H-HW-013 — Hexavalent chromium exposure

Applicability: Welding or thermal processing of stainless steel, chromium-containing alloys or applicable coatings and consumables.

Controls:

- Identify chromium-containing materials and consumables.
- Use effective source-capture ventilation.
- Evaluate exposure to hexavalent chromium.
- Use respiratory protection selected for the assessed exposure.
- Follow applicable hygiene and contamination-control requirements.

Reuse H-HW-012 controls where equivalent.

### H-HW-014 — Zinc oxide fume exposure

Applicability: Thermal work on galvanized or zinc-containing materials.

Controls:

- Identify galvanized and zinc-coated surfaces before thermal work.
- Remove coatings where the approved procedure permits, using appropriate exposure controls.
- Provide effective fume extraction or ventilation.
- Use respiratory protection where required by exposure assessment.
- Stop exposure and report symptoms consistent with metal fume fever.

### H-HW-015 — Manganese exposure

Applicability: Welding or thermal processes involving manganese-containing consumables or materials.

Controls:

- Review consumable and material safety information.
- Control welding fumes using suitable ventilation.
- Evaluate manganese exposure and respiratory protection requirements.

Do not establish manganese exposure solely from the presence of a grinder.

### H-HW-016 — Lead exposure

Applicability: Thermal or abrasive work involving lead-containing coatings or materials.

Controls:

- Identify lead-containing coatings before disturbing them.
- Follow the applicable lead exposure-control procedure.
- Use approved coating removal and ventilation methods.
- Use required respiratory protection and protective clothing.
- Prevent contamination of eating areas and personal clothing.
- Follow required hygiene and decontamination procedures.

### H-HW-017 — Cadmium exposure

Applicability: Thermal work on cadmium-containing or cadmium-plated materials.

Controls:

- Identify cadmium-containing materials before hot work.
- Do not begin thermal work until an appropriate exposure-control procedure is established.
- Use effective ventilation and required respiratory protection.
- Follow applicable hygiene and contamination controls.

### H-HW-018 — Toxic decomposition products from coatings or chemicals

Applicability: Thermal work near coatings, solvents, adhesives, residues or contaminated surfaces.

Controls:

- Identify coatings, cleaning agents and residues before heating.
- Review applicable SDS information.
- Remove hazardous residues using an approved method.
- Keep chlorinated solvent vapors away from welding and other applicable thermal operations.
- Evaluate decomposition products and required exposure controls.
- Do not proceed on unidentified coatings where hazardous exposure cannot be adequately assessed.

### H-HW-019 — Oxygen deficiency from shielding or purge gases

Applicability: Shielding gas, purge gas or inert gas use in enclosed or poorly ventilated areas.

Controls:

- Assess oxygen displacement potential.
- Provide adequate ventilation.
- Perform atmospheric testing and monitoring where required.
- Control purge gas discharge away from occupied areas.
- Shut off gas supplies when no longer required.
- Follow applicable confined-space entry and rescue procedures.

### H-HW-020 — Oxygen enrichment

Applicability: Oxygen equipment or oxygen use in enclosed or poorly ventilated areas.

Controls:

- Inspect oxygen equipment for leakage.
- Never use oxygen for ventilation, cooling or cleaning clothing.
- Maintain adequate ventilation.
- Monitor atmospheric oxygen where enrichment is reasonably foreseeable.
- Stop work when oxygen concentrations become unsafe.

### H-HW-021 — Heat stress

Applicability: Hot environments, prolonged thermal work, restrictive protective clothing or enclosed work areas.

Controls:

- Provide drinking water and appropriate recovery breaks.
- Provide ventilation, cooling or shaded recovery areas as appropriate.
- Adjust work and recovery periods for environmental conditions and workload.
- Monitor workers for heat-related illness.
- Stop work and initiate the appropriate response when symptoms occur.

Reconcile against existing production heat-stress controls.

### H-HW-022 — Compressed gas cylinder rupture or projectile

Applicability: Compressed gas cylinder handling, transport, storage or use.

Controls:

- Secure cylinders against falling or displacement.
- Protect cylinder valves against damage.
- Install valve protection caps when required for transport or storage.
- Move cylinders using suitable cylinder carts or approved handling equipment.
- Do not lift cylinders by valve protection caps.
- Do not use cylinders as rollers or structural supports.

### H-HW-023 — Cylinder damage from heat, impact or electrical contact

Applicability: Gas cylinders near hot work, moving equipment or electrical welding circuits.

Controls:

- Position cylinders away from flame, sparks, slag and excessive heat.
- Protect cylinders against vehicle and equipment impact.
- Keep cylinders out of electrical welding circuits.
- Maintain required separation of oxygen and fuel gas cylinders in storage.
- Follow gas-specific cylinder orientation and handling requirements.

Storage separation requirements must not be applied indiscriminately to connected cylinders in use.

### H-HW-024 — Fuel gas leakage and ignition

Applicability: Fuel gas torches and related equipment.

Controls:

- Inspect gas hoses, regulators, connections and torches before use.
- Use equipment compatible with the gas and operating pressure.
- Check connections for leakage using an approved leak-detection method.
- Never check for gas leaks with a flame.
- Shut off gas supplies and remove defective equipment from service.
- Route hoses away from hot surfaces, sharp edges and vehicle traffic.

### H-HW-025 — Flashback or sustained backfire

Applicability: Oxy-fuel and other applicable fuel gas systems.

Controls:

- Use compatible check valves and flashback arrestors as required by the equipment and applicable procedures.
- Inspect torch tips and keep them free of obstruction.
- Set operating pressures according to manufacturer instructions.
- Purge and ignite equipment using the manufacturer's procedure.
- Use an approved torch igniter.
- Shut down equipment following the prescribed procedure if a flashback or sustained backfire occurs.
- Inspect affected equipment before returning it to service.

Do not treat check valves and flashback arrestors as interchangeable.

### H-HW-026 — Oxygen-system ignition from contamination

Applicability: Oxygen cylinders, regulators, hoses and fittings.

Controls:

- Keep oil, grease and incompatible contaminants away from oxygen equipment.
- Use components specifically suitable for oxygen service.
- Handle oxygen fittings with clean hands or suitable clean gloves.
- Remove contaminated equipment from service for approved cleaning or replacement.
- Open and operate cylinder valves according to gas-specific manufacturer instructions.

### H-HW-027 — Abrasive wheel rupture

Applicability: Bonded abrasive grinding wheels and cut-off wheels.

Retain as a distinct hazard because high-speed wheel fragmentation requires specialized controls.

Controls:

- Inspect abrasive wheels for damage before installation and use.
- Verify the wheel's rated speed is at least the tool's maximum operating speed.
- Use the correct wheel type, size, arbor and mounting components.
- Install the correct manufacturer-approved guard for the operation.
- Perform a ring test where applicable to the wheel type.
- Do not use damaged or incompatible wheels.
- Do not side-load cut-off wheels not designed for side loading.
- Follow manufacturer instructions for wheel mounting and initial operation.

### H-HW-028 — Contact with rotating abrasive wheels

Applicability: Grinding and abrasive cutting.

Controls:

- Keep guards installed and correctly positioned.
- Use the side handle and maintain two-handed control where designed for two-handed operation.
- Keep hands and body clear of the rotating wheel.
- Secure the workpiece before grinding or cutting.
- Allow the wheel to stop before setting the tool down.
- Do not remove guards to gain access to restricted work areas.

### H-HW-029 — Flying particles, sparks and fragments

Applicability: Grinding, abrasive cutting, gouging and other particle-producing work.

Controls:

- Reuse C-000054 — safety glasses.
- Reuse C-000055 — supplemental face shield.
- For handheld grinding and abrasive cutting, require safety glasses and a suitable face shield.
- Use goggles where the exposure can bypass safety glasses.
- Direct sparks and particles away from personnel.
- Install barriers where nearby personnel may be exposed.
- Inspect wire wheels and brushes for damage and loose wires.

Reconcile equivalent existing particle hazards without losing grinding-specific controls.

### H-HW-030 — Unexpected startup during wheel changes or adjustment

Applicability: Abrasive tools during servicing, adjustment or attachment changes.

Controls:

- Disconnect the power source or remove the battery before changing wheels or attachments.
- Isolate pneumatic energy before servicing air-powered tools.
- Prevent unintended activation during adjustment.
- Verify the operating switch functions correctly before returning the tool to service.

### H-HW-031 — Uncontrolled workpiece movement

Applicability: Cutting or grinding unsupported or unsecured materials.

Controls:

- Secure the workpiece using suitable clamps, fixtures or supports.
- Keep hands out of the cutting path.
- Support material to prevent binding, rolling or unexpected movement.
- Position supports so the cut does not close onto the wheel.
- Do not hold small workpieces by hand where safe control cannot be maintained.

### H-HW-032 — Falling or uncontrolled movement of severed material

Applicability: Cutting structural members, piping, attachments or elevated materials.

Controls:

- Determine how the material will move when severed.
- Support or rig the material before completing the cut.
- Establish an exclusion zone around the anticipated movement and drop area.
- Keep personnel out of the line of fire.
- Use an approved cutting and removal sequence.
- Coordinate cutting with personnel controlling the supported load.

Reuse applicable dropped-object and suspended-load controls without merging distinct severed-member hazards.

### H-HW-033 — Structural instability following cutting or weld removal

Applicability: Cutting or removing load-bearing members, connections, braces or structural welds.

Controls:

- Confirm authorization and the approved structural removal or modification sequence.
- Identify load-bearing members and temporary stability requirements.
- Install required supports or bracing before cutting.
- Do not remove structural connections or bracing without authorization.
- Stop work if unexpected structural movement occurs.

### H-HW-034 — Explosion during hot work on containers or process equipment

Applicability: Tanks, drums, vessels, piping or equipment that contains or previously contained hazardous materials.

Controls:

- Identify previous and current contents before hot work.
- Isolate equipment from hazardous material and energy sources.
- Drain, clean, purge or otherwise prepare equipment using the approved procedure.
- Verify atmospheric conditions before and during work as required.
- Provide suitable venting to prevent pressure buildup.
- Do not weld or cut sealed or unidentified containers.
- Do not assume an empty container is safe for hot work.

Hot tapping, welding on in-service pressure systems and specialized live-system procedures require separate qualified engineering authorization. Ordinary hot work controls do not authorize those activities.

### H-HW-035 — Release of hazardous process contents or stored energy

Applicability: Thermal cutting or welding involving process piping, vessels or connected equipment.

Controls:

- Identify process contents and hazardous energy sources.
- Follow the approved isolation and hazardous energy-control procedure.
- Verify the required isolation and safe energy state before work.
- Control residual pressure, temperature and chemical exposure.
- Apply line-breaking requirements where opening the system is involved.

Reuse existing process piping and hazardous energy records wherever equivalent.

### H-HW-036 — Thermal damage to personal fall protection equipment

Applicability: Elevated welding, cutting or grinding where sparks, heat or slag may contact fall protection equipment.

Controls:

- Select personal fall protection equipment suitable for the thermal exposure.
- Position lanyards, SRLs, harness components and lifelines away from sparks and hot surfaces.
- Use manufacturer-approved protection methods where necessary.
- Inspect equipment for burns, melting or other thermal damage.
- Remove damaged equipment from service.

Do not assume that leading-edge-rated equipment is automatically suitable for hot work.

### H-HW-037 — Thermal damage to rigging and lifting equipment

Applicability: Hot work near slings, hoists, lifting devices or suspended loads.

Controls:

- Keep sparks, flame and hot slag away from rigging.
- Select rigging suitable for the expected temperature and exposure.
- Protect rigging using approved methods.
- Prevent welding current from passing through lifting equipment.
- Inspect exposed rigging before continued use.
- Remove heat-damaged equipment from service.

### H-HW-038 — Ignition of clothing or protective equipment

Applicability: Welding, thermal cutting, gouging and spark-producing grinding.

Controls:

- Wear protective clothing suitable for the expected flame, heat and spark exposure.
- Keep clothing free of flammable contamination.
- Avoid garments that can melt or ignite under the anticipated exposure.
- Keep sleeves, collars and other openings arranged to prevent entry of sparks and slag.
- Replace damaged protective clothing.

### H-HW-039 — Structural weld failure

Applicability: Load-bearing structural welding and structural weld repair.

Controls:

- Follow the approved drawings and welding procedure.
- Use qualified welding personnel where required.
- Verify joint preparation, fit-up and applicable preheat requirements.
- Maintain required temporary supports until the connection is accepted.
- Complete required inspection before loading the connection.
- Do not make unauthorized modifications to structural members.

### H-HW-040 — Pressure-boundary weld failure

Applicability: Welding or repair of pressure-containing piping, vessels and equipment.

Controls:

- Follow the approved pressure-boundary welding or repair procedure.
- Use qualified welding personnel and specified materials.
- Complete required inspection, examination and testing.
- Maintain required isolation until the equipment is approved for return to service.
- Do not return equipment to service before required acceptance and authorization.

## 5. Fire Watch Control Relationships

Develop reusable canonical controls for the following responsibilities.

- Assign a designated fire watch trained for the anticipated fire hazards and available extinguishing equipment.
- Ensure the fire watch can observe all affected areas.
- Provide additional fire watch personnel where necessary.
- Maintain communication between the fire watch and hot work personnel.
- Ensure the fire watch can stop hot work when unsafe conditions arise.
- Do not assign duties that interfere with effective fire watch responsibilities.
- Maintain immediate access to suitable fire extinguishing equipment.
- Ensure the fire watch knows how to initiate the site emergency response.
- Attempt extinguishment only when the fire is within the person's training, equipment capability and safe escape conditions.
- Maintain fire watch during work and for the required post-work duration.
- Complete additional monitoring where required.

Reuse C-000115 and C-000117 rather than creating duplicate duration controls.

## 6. Existing Canonical Hazard Relationships

Reuse the following Package 001 records.

| Record | Package 002 relationship |
|---|---|
| H-BT-002 | Sharp metal, cut edges and burrs |
| H-BT-004 | Grinder and cut-off wheel binding or kickback |
| H-BT-006 | Tool and attachment failure outside specialized wheel rupture |
| H-BT-007 | Heavy equipment handling and awkward working positions |
| H-BT-008 | Repetitive hand and wrist strain |
| H-BT-009 | Loss of balance during tool operation |
| H-BT-010 | Entanglement with rotating tools |
| H-BT-012 | Caught-between shifting steel |
| H-BT-013 | Structural instability where equivalent |
| H-BT-014 | Suspended steel exposure |
| H-BT-017 | Elevated work and fall exposure |
| H-BT-018 | Dropped tools, equipment and materials |
| H-BT-019 | Noise exposure |
| H-BT-020 | Hand-arm vibration |
| H-BT-025 | Pressurized hose separation |
| H-BT-026 | Electrical supply shock |
| H-BT-027 | Trips from hoses, cords and welding leads |
| H-BT-032 | Overhead debris entering eyes |

Generalize canonical wording only where necessary and preserve all existing relationships.

Additional relationship-specific grinder controls:

- Maintain a stable stance and anticipate wheel binding.
- Keep the body out of the anticipated kickback path.
- Do not twist a cut-off wheel within the cut.
- Stop the tool if the wheel binds.
- Follow the manufacturer's safe restart procedure.
- Use appropriate supports to prevent the cut from closing.

## 7. Company Policy Relationships

Link existing controls rather than duplicating policy requirements.

- P-000001 / C-000004: Work gloves for steel work.
- P-000002 / C-000112: A4 gloves for demolition, knife use and stainless steel lath.
- P-000003 / C-000039 and C-000113: Fall protection thresholds.
- P-000004 / C-000040 and C-000041: MEWP tie-off.
- P-000005 / C-000049: Hearing protection.
- P-000006 / C-000114: Combustible clearance.
- P-000007 / C-000115 and C-000117: Fire watch and additional monitoring.
- P-000008 / C-000116: Hot work permit.

Thermal and cut protection requirements are cumulative where both exposures exist.

Select compatible hand protection meeting all applicable requirements. Do not universally prescribe wearing two pairs of gloves simultaneously.

## 8. Contextual Ranking

Applicability remains the primary ranking criterion.

High-consequence reasonably foreseeable exposures include:

- Hot work on tanks, vessels and piping.
- Flammable atmospheres.
- Combustible dust.
- Oxygen displacement.
- Structural instability.
- Severed material movement.
- Elevated hot work.
- Thermal damage to fall protection equipment.
- Welding circuit electrical shock.

Recognize these exposures even when the crew does not explicitly name the resulting hazard.

Do not allow unrelated high-consequence records to displace applicable suggestions.

Present approximately 15–20 highly applicable suggestions where sufficient content exists. Provide additional applicable records through Show More.

Do not pad lists, automatically select hazards or automatically insert controls.

## 9. Internal Reference Validation

The following are candidate reference families, not verified citations.

**OSHA Construction**

- 1926 Subpart J — Welding and Cutting
- 1926.300–304 — Applicable tool requirements
- 1926.95–103 — PPE and respiratory protection
- 1926.52 and 1926.101 — Noise
- 1926 Subpart M — Fall Protection
- 1926 Subpart AA — Confined Spaces
- 1926.62 — Lead
- 1926.1126 — Hexavalent chromium
- 1926.1127 — Cadmium
- 1926 Subpart R — Structural steel erection

**OSHA General Industry**

- 1910 Subpart Q — Welding, Cutting and Brazing
- 1910.215 — Abrasive wheel machinery
- 1910.242–243 — Applicable tool requirements
- 1910.132–138 — Applicable PPE
- 1910.95 — Noise
- 1910.146 — Permit-required confined spaces
- 1910.147 — Hazardous energy control
- 1910.1025 — Lead
- 1910.1026 — Hexavalent chromium
- 1910.1027 — Cadmium

**MSHA**

Identify applicable provisions of 30 CFR Parts 56 and 62 for surface metal and nonmetal mining operations, including welding, compressed gases, fire prevention, equipment, atmospheric contaminants, PPE and noise.

**Consensus and technical references**

- NFPA 51B — Hot work fire prevention
- ANSI Z49.1 — Welding, cutting and allied processes
- ANSI B7.1 — Abrasive wheel safety
- ANSI/ISEA Z87.1 — Eye and face protection
- Applicable AWS structural welding codes
- Applicable ASME pressure-boundary welding and repair requirements
- Equipment manufacturer instructions
- Applicable SDS information

Verify exact provisions, editions and applicability before marking references validated.

Company policy thresholds remain independently identified as company requirements.

## 10. Regression Scenarios

1. Weld structural steel connections at ground level using a stick welder.
   - Welding circuit, fumes, radiation, thermal and hot work controls.

2. Grind welds smooth using an angle grinder.
   - Wheel rupture, rotating wheel contact, kickback, face protection, noise and hot work.

3. Cut steel plate with a cut-off wheel.
   - Abrasive cutting and hot work; no fuel gas controls.

4. Torch cut structural steel from a boom lift.
   - Thermal cutting, hot work, fall protection, overhead crushing, dropped material and thermal damage to fall protection.

5. Weld stainless steel pipe using TIG.
   - Chromium exposure; no automatic stainless steel lath A4 requirement.

6. Weld galvanized steel brackets.
   - Zinc oxide exposure and applicable welding controls.

7. Grind concrete using a wet grinder.
   - Concrete grinding, silica and applicable mechanical hazards; no automatic hot work permit.

8. Cut cardboard with a utility knife.
   - A4 gloves; no automatic hot work.

9. Cut steel.
   - Cut recognized; method remains undetermined.

10. Work in a tight space while tightening bolts.
    - No TIG recognition.

11. Perform electrical arc flash assessment.
    - No automatic welding recognition.

12. Weld inside a vessel using shielding gas.
    - Atmospheric hazards, ventilation, welding circuit, applicable confined-space relationships and hot work.

13. Weld on an empty fuel tank.
    - Residual contents and explosion hazards; empty does not establish safe conditions.

14. Torch cut and remove an existing structural platform during demolition.
    - A4 and thermal hand protection, structural stability, severed material movement and hot work.

15. Weld steel and grind the welds.
    - Cumulative welding and grinding relationships without duplicate controls.

16. Cut stainless steel lath using hand snips.
    - A4 gloves; no automatic hot work.

17. Cut galvanized lath using hand snips.
    - Appropriate hand protection; no lath-specific A4 requirement unless another trigger applies.

18. Weld overhead near a synthetic sling.
    - Thermal damage to rigging and applicable dropped-object exposure.

19. Weld near combustible dust collection equipment.
    - Combustible dust ignition and applicable isolation controls.

20. Grind steel in a designated fabrication shop.
    - Hot work policies apply; no automatic shop exemption.

21. Braze copper tubing in an enclosed room.
    - Flame burns, fumes, ventilation and hot work.

22. Remove a pump and cut a seized flange bolt with a torch.
    - Thermal cutting and applicable process hazards; ordinary pump removal alone does not establish demolition.

23. Use a roofing torch.
    - Hot work and applicable roofing hazards; no automatic metal cutting or electric welding.

24. Grind a weld and change the grinding wheel.
    - Grinding hazards plus unexpected startup during wheel change.

25. Weld on a pressurized process line.
    - Specialized high-consequence work requiring qualified engineering authorization; ordinary hot work controls are insufficient.

26. Grind painted steel with an unknown coating.
    - Coating identification and exposure assessment; no unsupported assumption that the coating contains lead.

27. Cut steel using a non-sparking cold-cutting method.
    - Mechanical cutting hazards; no automatic hot work classification where ignition-producing conditions are absent.

28. Weld steel while another crew grinds concrete nearby.
    - Clause-specific cumulative relationships; welding hot work and concrete silica controls remain independently applicable.

## 11. Independent Engineering Review

The Engineer shall:

- Review all 40 candidate hazard records.
- Identify equivalent canonical hazards and controls.
- Preserve distinct exposure mechanisms where different controls are required.
- Assign new canonical control identifiers beginning at C-000118.
- Preserve retired identifiers.
- Reconcile against production T1, C2 and related production entries.
- Preserve existing production relationships during supersession.
- Identify missing technical controls and recognition collisions.
- Verify regulatory and technical references against authoritative sources.
- Review the regression scenarios and identify additional necessary scenarios.
- Maintain a consolidated unresolved-item register.
- Return the reconciled candidate package, updated control registry and production crosswalk for Architect review.

Do not initiate another general readiness assessment.

Preserve this original candidate package in permanent version-controlled documentation.

No application implementation or production release is authorized.
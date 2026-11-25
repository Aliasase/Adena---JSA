# A4-LIBRARY-EXPORT.md
## Adena JSA App — Phase A-4 Safety Intelligence Library
### Complete Production Library Extract — AD-008 §2 Deliverable

**Extracted:** 2026-11-25  
**Source:** `adena-jsa.html` — v1.3.0-p1, commit 8318ddb (production baseline)  
**Purpose:** Transfer to ChatGPT (Architect) for Phase A-4 library development  
**Authority:** Architectural Directive 008 — Phase A-4 Safety Intelligence Library Development  
**Extracted by:** Claude (Engineer role)

---

## GOVERNING DIRECTIVE: AD-008 (Archived Permanent Record)

Per AD-008 §6 — retained here as permanent project record.

```
ARCHITECTURAL DIRECTIVE 008
Phase A-4 — Safety Intelligence Library Development
Date: November 25, 2026

§1 Production Baseline: A-3 accepted as complete. v1.3.0-p1, commit 8318ddb.
Preserve this baseline; establish isolated A-4 dev branch.

§2 Immediate Deliverables: Provide ChatGPT with complete production task-to-hazard
library (all keywords + hazards), complete production hazard-to-control library
(all keywords + controls), current suggestion-ranking and matching rules, permanent
library inventory and any previously recovered Construction Reasoning Framework records.
Full content — not category counts, summaries, or representative examples. Preserve
existing identifiers. Extract directly from GitHub repo. Consolidate into downloadable
Markdown or small set of clearly identified files.

§3 Development Responsibilities: ChatGPT leads — hazard identification/classification,
control measure development, contextual applicability, activity/object/condition/
work-context relationships, terminology/language recognition, elimination of semantic
duplication, internal regulatory and technical validation. Claude — independently reviews,
identifies gaps/inconsistencies, maintains permanent project records, performs authorized
technical implementation. Product Owner retains final approval.

§4 Governing Requirements:
- Maintain extensive underlying repository without overwhelming field personnel
- Present highest-ranking applicable suggestions first (normally 15–20 when sufficient
  relevant suggestions exist)
- Retain progressive disclosure through Show More
- Prioritize applicability before severity and relevance
- Never populate suggestions merely to reach a predetermined quantity
- Retain manual entry and individual tap-to-add and tap-to-remove functionality
- Keep user-facing content practical, specific, and free of regulatory citations
- Preserve internal technical references for validation
- Maintain all approved library records in permanent, version-controlled files

§5 Immediate Development Priority: Structural steel erection, rigging and hoisting,
bolting, torquing, welding, cutting, drilling, and grinding. Do not recreate previously
frozen Construction Reasoning Framework records without first checking recovered materials.

§6 Permanent Project Record Retention: Retain this directive in GitHub repo. All approved
Architectural Directives, PO Decision Records, Construction Reasoning Framework records,
and approved safety intelligence library records shall be maintained in version-controlled
project files. Conversation history and AI session memory shall NOT serve as the sole
repository for approved project work. Future sessions shall retrieve governing documents
and approved library content directly from the repository.

§7 Scope: No additional application redesign, governance framework, or extended readiness
report. Deliver existing library materials so substantive safety intelligence development
can begin immediately. No unvalidated library content shall be incorporated into production.
```

---

## SECTION 1: PERMANENT LIBRARY INVENTORY

### 1A — HAZARDS Checklist Array (30 items)
*Source: `var HAZARDS` — line 825*

| Key | Label | High-Risk |
|-----|-------|-----------|
| fall | Fall Potential | ✓ |
| pinchCrush | Pinch / Crush / Struck-By | ✓ |
| caughtBetween | Caught In / Between | ✓ |
| electrical | Electrical Shock / Energized Equipment | ✓ |
| slipsTrips | Slips, Trips & Falls (Same Level) | |
| manualLifting | Manual Lifting / Ergonomic Strain | |
| fallingObjects | Falling Objects / Overhead Hazards | |
| hotWork | Hot Work / Fire Hazard | |
| chemicalExposure | Chemical Exposure | |
| respiratory | Respiratory Hazard / Dust / Silica | |
| noise | Noise Exposure | |
| heatStress | Heat Stress | |
| coldStress | Cold Stress | |
| confinedSpace | Confined Space | |
| excavation | Excavation / Trenching | |
| vehicleTraffic | Vehicle / Mobile Equipment Traffic | |
| vibration | Vibration Exposure | |
| weather | Adverse Weather Conditions | |
| biological | Biological Hazard (Insects, Snakes, Mold) | |
| sharpEdges | Sharp Edges / Lacerations | |
| rigging | Rigging / Hoisting Hazard | |
| craneOps | Crane / Lifting Operations | |
| scaffold | Scaffold Hazard | |
| ladder | Ladder Use Hazard | |
| compressedGas | Compressed Gas Hazard | |
| radiation | Radiation Exposure (X-Ray / NDT) | |
| water | Water Hazard / Drowning | |
| fatigue | Fatigue / Extended Duration Shift | |
| housekeeping | Housekeeping / Debris | |
| workingAlone | Working Alone / Remote Location | |

### 1B — PPE_ITEMS Array (15 items)
*Source: `var PPE_ITEMS` — line 858*

| Key | Label |
|-----|-------|
| hardHat | Hard Hat |
| safetyGlasses | Safety Glasses |
| faceShield | Face Shield |
| hearingProtection | Hearing Protection |
| hiVizVest | Hi-Viz Vest |
| gloves | Gloves |
| respirator | Respirator |
| tyvekSuit | Tyvek Suit |
| kevlarSleeves | Kevlar Sleeves |
| fallHarness | Fall Protection Harness |
| steelToe | Steel Toe Footwear |
| weldingHood | Welding Hood |
| chemGloves | Chemical-Resistant Gloves |
| fullFaceSplash | Full Face Shield / Splash |
| suppliedAir | Supplied Air / SCBA |

### 1C — PERMITS Array (14 items)
*Source: `var PERMITS` — line 876*

| Key | Label | High-Risk |
|-----|-------|-----------|
| hotWorkPermit | Hot Work Permit | ✓ |
| confinedSpacePermit | Confined Space Permit | ✓ |
| loto | Lockout / Tagout (LOTO) | ✓ |
| liftPlan | Lift Plan / Crane / Critical Lift | ✓ |
| lineBreak | Line Break / Pipe Break Permit | ✓ |
| confinedSpaceEntry | Confined Space Entry Permit | ✓ |
| energizedElectrical | Energized Electrical Work Permit | ✓ |
| excavationPermit | Excavation / Trenching Permit | |
| heightPermit | Working at Height Permit | |
| scaffoldTag | Scaffold Permit / Tag | |
| ndtPermit | Radiography / NDT Permit | |
| envPlan | Environmental / Spill Prevention Plan | |
| trafficControl | Traffic Control Plan | |
| dailyPermit | Daily General Work Permit | |

---

## SECTION 2: TASK-TO-HAZARD LIBRARY

**Source:** `const TASK_TO_HAZARD` — lines 896–1064  
**Total entries:** 42  
**Format:** Each entry = `{cat, keys[], haz[]}`  
**Engine use:** `getSuggestions('hazard', taskDescription)` → returns ranked `haz[]` strings

---

### Entry 1 — Hot Work / Welding / Cutting / Grinding

**Keywords:**
weld, welding, torch, torching, cutting torch, burning, hot work, plasma, oxy fuel, grinding, grinder, sparks, slag, molten, cut metal, cut steel, carbon arc, gouging, flux core, fcaw, gmaw, smaw, stick weld, mig, tig, brazing, soldering, weld fume, backing bar, purge weld, pipe weld, field weld, weld pad eye, weld lug, weld bracket, structural weld, weld bucket, weld tooth

**Hazards:**
- Fire hazard / ignition source exposure
- Thermal burns from hot metal, slag, or torch
- Weld fume / smoke inhalation
- Arc flash / eye injury from UV exposure
- Flying particles and sparks
- Compressed gas hazard (cylinders)
- Electrical shock from welding equipment
- Noise exposure
- Combustible material nearby
- Heat stress in enclosed or hot work area

---

### Entry 2 — Carpentry / Saw Cutting / General Trades

**Keywords:**
cut plywood, cut lumber, circular saw, skill saw, table saw, miter saw, chop saw, reciprocating saw, sawzall, jigsaw, band saw, router, planer, carpentry, wood cutting, framing saw, cut wood

**Hazards:**
- Cuts and lacerations
- Amputation hazard from saw blade
- Blade kickback
- Flying debris / wood chips
- Eye injury
- Noise exposure
- Dust inhalation
- Electrical cord trip hazard
- Hand placement hazard near blade

---

### Entry 3 — Drilling / Fastening / Anchoring

**Keywords:**
drill, drilling, impact driver, hammer drill, mag drill, magnetic drill, core drill, anchor, tapcon, screw gun, fastener, bolt installation, drill concrete, drill steel

**Hazards:**
- Puncture hazard
- Flying debris / chips
- Eye injury
- Hand injury
- Rotating equipment entanglement
- Kickback / torque reaction
- Noise exposure
- Silica exposure when drilling concrete
- Electrical shock

---

### Entry 4 — Powder-Actuated / Nail Guns / Deck Guns

**Keywords:**
powder-actuated, hilti gun, ramset, deck gun, nail gun, pneumatic nailer, gas nailer, fastener gun, powder actuated, shot pin, drive pin

**Hazards:**
- Puncture hazard from misfire or ricochet
- Embedded fastener hazard
- Flying debris
- Struck-by from projectile
- Noise exposure
- Hand and foot injury

---

### Entry 5 — Rigging / Hoisting / Chain Falls

**Keywords:**
rigging, hoist, chain fall, come-along, sling, shackle, choker, beam clamp, lifting, pick, suspended load, load transfer, overhead lift, rig, hoist load, lift material, chain block, lever hoist

**Hazards:**
- Suspended load / dropped load
- Struck-by from swinging load
- Crushing / caught-between from load
- Pinch points in rigging components
- Stored energy in rigging under tension
- Rigging failure from overload or damage
- Line of fire during rigging operations
- Overhead work hazard
- Swing radius exposure

---

### Entry 6 — Crane Operations

**Keywords:**
crane, mobile crane, tower crane, pick, lift plan, critical lift, boom, load chart, outrigger, signal person, crane mat, rigger, load line, headache ball, tandem lift, below-the-hook, crane inspection, anti-two-block, crane assembly, crane disassembly, pick and carry

**Hazards:**
- Suspended load / struck-by
- Crane swing radius exposure
- Equipment tip-over from overload or soft ground
- Power line contact
- Rigging failure
- Dropped load
- Crushed-by from crane movement
- Communication failure between operator and rigger
- Ground bearing failure under outriggers

---

### Entry 7 — Steel Erection / Structural Steel / Decking

**Keywords:**
steel erection, install steel, set steel, beam, column, joist, decking, metal deck, bolt-up, connecting steel, ironwork, bridging, plumbing up, temporary bracing, spud wrench, drift pin, erection bolt, safety cable, perimeter cable, leading edge, connector, shear stud, ironworker, connect up, structural steel, set beam, set column

**Hazards:**
- Fall exposure at leading edge and open sides
- Struck-by from overhead steel
- Caught-between from steel components
- Pinch points during bolt-up and alignment
- Dropped objects
- Suspended load during picks
- Sharp edges on steel
- Unstable temporary structure condition
- Crushing from shifting steel
- Overhead work exposure

---

### Entry 8 — Aerial Lift / Scissor Lift / Boom Lift

**Keywords:**
aerial lift, boom lift, scissor lift, manlift, lift basket, elevated platform, work from lift, JLG, genie, personnel lift, work platform

**Hazards:**
- Fall from aerial lift platform
- Dropped objects from elevated platform
- Tip-over on uneven or soft ground
- Crushing / caught-between at overhead obstructions
- Electrical contact from boom
- Equipment movement / unexpected travel
- Struck-by from lift movement
- Overloading platform

---

### Entry 9 — Ladders / Portable Access

**Keywords:**
ladder, extension ladder, step ladder, platform ladder, climb, access ladder, portable ladder, ladder setup

**Hazards:**
- Fall from ladder
- Improper access / egress
- Overreaching and loss of balance
- Unstable ladder setup
- Slip or trip on ladder rungs
- Falling objects from ladder user
- Contact with electrical sources
- Ladder shifting or kick-out

---

### Entry 10 — Scaffold Erection / Use / Dismantling

**Keywords:**
scaffold, scaffolding, rolling scaffold, baker scaffold, frame scaffold, system scaffold, layher, scaffold plank, scaffold tag, dismantle scaffold, erect scaffold, mast climber, suspended scaffold, swing stage, pump jack, cantilever scaffold, scaffold tie-in, scaffold inspection

**Hazards:**
- Fall from scaffold platform
- Falling objects from scaffold
- Scaffold collapse from overload or improper erection
- Improper access / egress to scaffold
- Unstable platform or plank
- Pinch points during erection and dismantling
- Struck-by from scaffold components
- Overloading platform
- Inadequate tie-in to structure

---

### Entry 11 — Concrete / Masonry / Grout / Silica / Footers

**Keywords:**
concrete, grout, plaster, mortar, masonry, block, brick, cement, mixing grout, saw cut concrete, grind concrete, chipping, jackhammer, core drilling, dry sweep, concrete pump, pour concrete, flatwork, flat work, footer, footing, foundation, slab, concrete slab, dig footer, footing excavation, grade beam

**Hazards:**
- Respirable silica exposure
- Dust inhalation
- Eye injury from concrete splash or debris
- Skin irritation and chemical burns from cement
- Noise exposure
- Flying debris
- Vibration exposure from jackhammer
- Musculoskeletal strain
- Slurry slip hazard
- Struck-by from concrete pump hose
- Fall into form or excavation

---

### Entry 12 — Painting / Epoxy / Coatings / Solvents

**Keywords:**
paint, painting, epoxy, coating, primer, urethane, sealant, adhesive, solvent, chemical application, spray coating, mixing epoxy, industrial coating, tank lining, vessel lining, apply coating

**Hazards:**
- Chemical exposure from coating materials
- Respiratory exposure from fumes and vapors
- Skin irritation and sensitization
- Eye injury from splashing
- Flammable vapor and fire hazard
- Ventilation deficiency
- Slip hazard from spilled coating
- Confined space entry for interior coating

---

### Entry 13 — Excavation / Trenching / Footings / Utilities

**Keywords:**
excavate, excavation, trench, trenching, digging, dig, underground, shoring, sloping, benching, hydrovac, backfill, footer, footing, dig footer, pier excavation, slab prep, pothole, utility locate, 811, call before you dig, trench box, trench shield, hydraulic shoring, slide rail, sheet pile, spoil pile, open excavation, hand dig

**Hazards:**
- Cave-in / trench collapse
- Underground utility strike (gas, electric, water, communications)
- Falls into open excavation
- Equipment struck-by near excavation edge
- Hazardous atmosphere in deep excavation
- Water accumulation and hydrostatic pressure
- Spoil pile surcharge causing wall failure
- Inadequate access and egress
- Engulfment from soil collapse
- Soil type misclassification
- Undermining adjacent structures

---

### Entry 14 — Confined Space

**Keywords:**
confined space, permit space, tank, vault, pit, manhole, vessel, tunnel, restricted access, limited entry, confined, enter vessel, enter tank, tank entry, vessel entry, confined area

**Hazards:**
- Oxygen deficiency or enrichment
- Toxic / hazardous atmosphere (H2S, CO, ammonia, methane)
- Engulfment from bulk material
- Entrapment from converging walls
- Limited access and egress
- Rescue difficulty
- Communication failure in confined space
- Heat stress inside vessel or tank
- Flammable atmosphere / ignition risk

---

### Entry 15 — Electrical / Energized Work / LOTO

**Keywords:**
electrical, energized, live power, panel, breaker, disconnect, loto, lockout, tagout, troubleshoot, temporary power, extension cord, gfci, ground fault, temporary lighting, generator, spider box, 480v, voltage, electrical testing, de-energize, electrical work

**Hazards:**
- Electrical shock
- Arc flash and arc blast
- Stored energy release
- Unexpected energization
- Burns from electrical contact
- Fire from electrical fault
- Trip hazard from cords and cables
- Improper grounding

---

### Entry 16 — Heavy Equipment / Mobile Equipment

**Keywords:**
forklift, telehandler, skid steer, excavator, loader, backhoe, dozer, dump truck, lull, equipment operation, mobile equipment, heavy equipment, operate equipment

**Hazards:**
- Struck-by from equipment
- Caught-between equipment and fixed object
- Blind spots around equipment
- Crushing from equipment movement
- Tip-over
- Pedestrian interaction in equipment zones
- Backing hazard
- Uneven ground instability
- Dropped load from equipment

---

### Entry 17 — Material Handling / Manual Lifting

**Keywords:**
carry, lift by hand, move material, unload, load material, stage material, push, pull, drag, manual handling, hand carry, material placement

**Hazards:**
- Strains and sprains from improper lifting
- Pinch points from material handling
- Crush hazard from dropped material
- Hand injury
- Slip and trip from material in path
- Struck-by from shifting material
- Poor body mechanics

---

### Entry 18 — Demolition / Removal Work

**Keywords:**
demo, demolition, remove, tear out, saw cut removal, break out, dismantle, strip out, structural demo, selective demo, wall removal, load-bearing removal, deconstruction, tear down

**Hazards:**
- Falling debris from demolition
- Struck-by from collapsing material
- Hidden utilities in walls and floors
- Sharp edges and exposed rebar
- Silica and dust exposure
- Unstable structure during phased demo
- Noise and vibration
- Manual handling injuries from heavy debris
- Lead or asbestos in older structures

---

### Entry 19 — Housekeeping / Walking Working Surfaces

**Keywords:**
debris, material storage, cords, hoses, clutter, housekeeping, access path, walkway, slip, trip, clean up, spill

**Hazards:**
- Slips from wet or contaminated surfaces
- Trips from debris and cords
- Falls from elevated unprotected surfaces
- Blocked access and egress
- Impalement from protruding objects
- Fire load from combustible storage
- Poor emergency access

---

### Entry 20 — Chemical Use / SDS Materials

**Keywords:**
chemical, cleaner, solvent, adhesive, epoxy, fuel, oil, grease, acid, caustic, resin, hardener, chemical handling, chemical transfer, sds, hazmat

**Hazards:**
- Chemical exposure through skin or inhalation
- Skin and chemical burns
- Eye injury from splash
- Respiratory exposure from vapor or mist
- Flammable liquid and vapor hazard
- Spill and slip hazard
- Incompatible chemical reaction
- Inadequate ventilation during use

---

### Entry 21 — Weather / Environmental Conditions

**Keywords:**
heat, hot weather, cold, rain, lightning, wind, storm, humidity, sun exposure, outdoor work, weather

**Hazards:**
- Heat stress and heat stroke
- Cold stress and hypothermia
- Dehydration from heat exposure
- Lightning strike exposure
- Wind-blown materials and debris
- Slippery surfaces from rain or ice
- Reduced visibility from weather
- Sun exposure and UV damage

---

### Entry 22 — Noise / Vibration-Producing Work

**Keywords:**
jackhammer, chipping gun, grinder, saw, impact tool, hammer drill, compactor, pneumatic tool, air tool, vibration, loud, noise producing

**Hazards:**
- Noise-induced hearing damage
- Vibration exposure (hand-arm)
- Flying debris from vibrating tool
- Fatigue from prolonged vibration
- Reduced communication in noisy areas

---

### Entry 23 — Pressurized Systems / Pneumatic / Hydraulic

**Keywords:**
hydraulic, pneumatic, air hose, pressure washer, compressed air, pressure line, hose whip, pump, valve, pressurized, air pressure, hydraulic line

**Hazards:**
- Stored pressure release injury
- Hose whip from disconnected line
- Injection injury from high-pressure fluid
- Struck-by from sudden release
- Noise from pneumatic tools
- Eye injury from pressure spray

---

### Entry 24 — Traffic / Work Near Vehicles

**Keywords:**
traffic, roadway, parking lot, delivery truck, flagging, spotter, pedestrian, vehicle access, work zone, near traffic, road work

**Hazards:**
- Struck-by from vehicle
- Backing hazard in work zones
- Blind spots of large vehicles
- Pedestrian exposure in vehicle areas
- Poor visibility conditions
- Traffic control failure

---

### Entry 25 — Overhead Work / Dropped Object Exposure

**Keywords:**
overhead, work above, elevated work, tools overhead, material overhead, work below, overhead exposure, dropped object

**Hazards:**
- Dropped objects striking workers below
- Struck-by from falling materials and tools
- Overhead load exposure
- Falling tools from elevated workers
- Materials stored at height

---

### Entry 26 — Conveyor Systems — Installation, Maintenance, Repair

**Keywords:**
conveyor, belt conveyor, conveyor belt, conveyor repair, conveyor maintenance, replace belt, belt splice, belt vulcanize, conveyor roller, replace roller, idler roller, return roller, impact roller, conveyor pulley, head pulley, tail pulley, snub pulley, take-up, conveyor frame, conveyor gallery, belt tracking, belt tensioning, conveyor cleaning, conveyor nip, transfer point, conveyor chute, load zone, skirt board, belt scraper, conveyor drive, conveyor gearbox, belt change, conveyor shutdown, running conveyor

**Hazards:**
- Caught-in / entanglement in moving belt or rollers
- Pinch points at nip points and pulleys
- Struck-by from belt snap or stored tension release
- Fall from elevated conveyor gallery or structure
- Conveyor starting without warning
- Electrical shock from conveyor drive
- Dust and silica from bulk material
- Chemical exposure from process material or slurry
- Confined space in conveyor tunnels or transfer houses
- Fire from belt friction or hot bearing
- Ergonomic strain from roller and component handling
- Material spillage slip hazard

---

### Entry 27 — Crusher / Mill / Size Reduction Equipment

**Keywords:**
crusher, jaw crusher, cone crusher, gyratory crusher, impact crusher, hammer mill, ball mill, rod mill, SAG mill, roll crusher, sizer, vibrating screen, shaker screen, grizzly, scalping screen, screen deck, screen media, screen panel, crusher liner, crusher bowl, crusher mantle, crusher concave, crusher clearing, clear crusher, unjam crusher, crusher maintenance, crusher rebuild

**Hazards:**
- Struck-by from material ejection during crushing
- Caught-in from rotating crusher or mill
- Fall into open crusher or mill opening
- Pinch points during liner and bowl change
- Stored energy in crusher drive and flywheel
- Silica and dust from crushing operations
- Noise from crusher operation
- Heat from crusher bearings and motors
- Confined space conditions inside crusher housing
- Unexpected material release or cave-in

---

### Entry 28 — Dragline — Bucket Repair, Teeth, Rigging

**Keywords:**
dragline, dragline bucket, bucket repair, bucket teeth, bucket tooth, bucket lip, lip shroud, drag chain, lift chain, spreader bar, bucket arch, dump rope, drag rope, hoist rope, dragline boom, dragline walking, dragline swing, bucket change, bucket rebuild, weld bucket, weld tooth, pad eye, weld pad eye, bucket lug, drag link, chain repair, dragline maintenance, dragline shutdown, dragline inspection, walking mechanism, rigging gear, dragline rigging

**Hazards:**
- Struck-by from swinging bucket or boom
- Caught-between from rigging under tension
- Pinch points during chain and rigging handling
- Fall from dragline boom or structure
- Stored energy in dragline ropes and chains
- Hot work burns and fume from welding bucket
- Confined space inside dragline housing or bucket
- Heat stress during welding in enclosure
- Noise from bucket impact and grinding
- Heavy component handling strain
- Unexpected bucket or boom movement

---

### Entry 29 — Industrial Chutes, Hoppers, Bins, Transfer Points

**Keywords:**
chute, chute lining, chute repair, chute liner, wear liner, chute blockage, clear chute, unjam chute, chute modification, hopper, bin, surge bin, feed hopper, loading hopper, bin liner, bin entry, transfer chute, transfer point, spillway, diverter gate, slide gate, plug gate, flow control gate, chute inspection, chute cleaning, plugged chute, rodding chute

**Hazards:**
- Engulfment from material flow if chute or bin is not isolated
- Confined space conditions inside chute, hopper, or bin
- Struck-by from material falling through chute
- Fall into open chute or hopper
- Pinch from gate and flow control mechanisms
- Chemical exposure from process material
- Stored material above that could release during entry
- Heat from process material
- Structural collapse if chute is modified under load
- Poor access and egress in confined chute areas

---

### Entry 30 — Vessels, Tanks, Reactors, Process Equipment

**Keywords:**
vessel, pressure vessel, reactor, agitator, clarifier, thickener, settler, digester, evaporator, crystallizer, flotation cell, flotation tank, conditioning tank, slurry tank, mixing tank, storage tank, acid tank, process vessel, vessel entry, tank entry, vessel cleaning, tank cleaning, vessel inspection, vessel repair, tank repair, vessel lining, manway, vessel internals, agitator blade, vessel coating, enter vessel, enter tank

**Hazards:**
- Oxygen deficiency or toxic atmosphere inside vessel
- Engulfment from residual process material
- Chemical exposure from phosphoric acid, sulfuric acid, ammonia, or fluoride residue
- Explosion or fire from flammable residue
- Fall from vessel entry point or manway
- Stored pressure or thermal energy
- Agitator or mechanical hazard if not locked out
- Heat stress inside vessel
- Rescue difficulty in permit-required confined space
- Chemical burns from contact with process residue

---

### Entry 31 — Process Piping — Industrial

**Keywords:**
process pipe, pipe repair, pipe replacement, pipe modification, pipe spool, pipe fitting, flange, gasket, pipe insulation, pipe support, pipe rack, pipe welding, pipe tie-in, hot tap, valve replacement, valve repair, valve packing, control valve, isolation valve, drain line, vent line, slurry pipe, acid pipe, process line, chemical line, pump suction, pump discharge, break flange, open flange, line break, pipe break, piping

**Hazards:**
- Chemical exposure from process fluid release (phosphoric acid, sulfuric acid, ammonia, fluoride, slurry)
- Thermal burns from hot process piping or steam
- Stored pressure release injury
- Struck-by from pressurized line failure
- Cuts from pipe ends and flanges
- Fall from elevated pipe racks
- Toxic atmosphere from process fluid vapor
- Fire from flammable process fluids
- Pinch during flange assembly

---

### Entry 32 — Pumps — Industrial Process

**Keywords:**
pump, pump repair, pump replacement, pump rebuild, pump maintenance, impeller, pump casing, seal, mechanical seal, seal replacement, pump bearing, pump shaft, pump alignment, pump coupling, slurry pump, centrifugal pump, submersible pump, sump pump, vacuum pump, pump priming, pump inspection, change pump

**Hazards:**
- Stored pressure and process fluid release during disassembly
- Chemical exposure from process fluid residue
- Pinch from pump coupling and rotating shaft
- Heat from pump motor and bearings
- Electrical shock from pump motor
- Chemical burns from acid or slurry residue
- Ergonomic strain from heavy pump components

---

### Entry 33 — Shakers, Screens, Filters, Separation Equipment

**Keywords:**
shaker, vibrating shaker, screen shaker, filter, filter press, belt filter, rotary filter, vacuum filter, drum filter, filter cloth, filter media, filter pan, filter pan maintenance, filter pan replacement, pan filter, tilting pan, disc filter, horizontal filter, filter cake, filter inspection, filter cleaning, screen media change, screen panel change, dewatering screen, classification screen

**Hazards:**
- Pinch from vibrating shaker components
- Caught-in from rotating drum or disc filter
- Chemical exposure from process material and filter aids
- Silica from filtrate material
- Fall from elevated filter structure
- Heat from process material
- Ergonomic strain from filter pan and media handling
- Confined space in filter building or pit
- Noise from shaker operation
- Electrical shock from filter drive systems

---

### Entry 34 — Chemical Plant / Process Plant — Industrial Maintenance

**Keywords:**
chemical plant, process plant, plant maintenance, plant turnaround, plant shutdown, plant startup, heat exchanger, tube bundle, heat exchanger cleaning, chemical exposure, acid handling, sulfuric acid, phosphoric acid, ammonia, fluoride, fluorosilicic acid, hydrogen fluoride, hydrogen sulfide, H2S, process chemical, chemical line, chemical transfer, chemical injection, chemical storage, acid spill, chemical spill, neutralization, acid sump, scrubber, plant inspection

**Hazards:**
- Chemical burns from phosphoric acid, sulfuric acid, or ammonia contact
- Toxic atmosphere from H2S, ammonia, fluoride, or chemical vapor
- Asphyxiation from nitrogen or inert gas purging
- Confined space in vessels, tanks, pits, and tunnels
- Heat stress from process heat and steam
- Electrical from process equipment
- Fall from elevated plant structure
- Struck-by from pressurized line failure
- Fire or explosion from flammable process streams
- Ergonomic strain from plant maintenance work

---

### Entry 35 — Roofing / Waterproofing / Membrane

**Keywords:**
roofing, roof, membrane, tpo, epdm, built-up roof, modified bitumen, torch-applied, kettle, hot tar, hot asphalt, flashing, parapet, roof deck, waterproofing, cap sheet, torch down

**Hazards:**
- Fall exposure at leading edge and roof perimeter
- Thermal burns from torch and hot kettle
- Fire from torch application near combustibles
- Heat stress on open roof
- Slips on membrane or wet surface
- Fume inhalation from asphalt and torch
- Dropped objects to floors and personnel below
- Unstable or wet substrate

---

### Entry 36 — Drywall / Framing / Interior Buildout

**Keywords:**
drywall, sheetrock, gypsum board, framing, metal stud, track, furring, acoustical, drop ceiling, grid, t-bar, suspended ceiling, hang drywall, tape, finish, texturing, spray texture, interior buildout, light gauge framing

**Hazards:**
- Cuts and lacerations from metal stud edges
- Dust exposure during cutting and sanding
- Silica from joint compound sanding
- Fall from stilts or aerial lift
- Eye injury from debris
- Noise from screw gun and framing operations
- Ergonomic strain from overhead work

---

### Entry 37 — Themed Entertainment / Special Construction

**Keywords:**
themed, animatronic, show set, ride system, dark ride, attraction, theatrical, stage rigging, fly system, counterweight, theatrical lighting, special effect, pyrotechnic, fog machine, show control, audio visual, AV, truss, chain motor, entertainment rigging, show power, load-in, load-out, theme park, attraction installation

**Hazards:**
- Fall from rigging and truss systems
- Dropped rigging hardware onto workers below
- Electrical shock from show power systems
- Crush from counterweight or fly system
- Pyrotechnic and fire hazard
- Noise during show system testing
- Pinch from mechanical ride systems
- Struck-by during load-in and load-out
- Unauthorized access during live system testing
- Simultaneous operations with show systems active

---

### Entry 38 — Solar / Steel Support Work

**Keywords:**
solar, solar farm, solar array, solar field, panel frame, racking, tracker, torque tube, solar structure, ground mount, pile driving, helical pile, driven pile, ballast, module frame, steel solar structure, solar racking

**Hazards:**
- Fall from elevated racking structure
- Cuts and lacerations from racking components
- Pinch during racking assembly
- Struck-by from panel frames and components
- Heat stress in open field environment
- Electrical from DC current if panels are connected
- Glare from reflective panels
- Uneven terrain on solar field

---

### Entry 39 — Demolition — Structural / Selective

**Keywords:**
demo, demolition, structural demo, selective demo, wall removal, load-bearing removal, building demolition, tear out, strip out, saw cut removal, break out, dismantle structure, deconstruction, remove structure

**Hazards:**
- Structural collapse from removal of load-bearing elements
- Falling debris from demolition
- Struck-by from collapsing structure or material
- Hidden utilities in walls and slabs
- Sharp edges and exposed rebar
- Silica and dust exposure
- Noise and vibration
- Unstable structure during phased demolition
- Lead or asbestos exposure in older structures

---

### Entry 40 — Surface Mining / Quarry Operations

**Keywords:**
surface mine, quarry, open pit, overburden, blast, blasting, explosives, drill and blast, rock drilling, aggregate, haul road, bench, berm, pit, gravel pit, limestone, sandstone, rock face, dragline walking, mining equipment, overburden removal, mine site

**Hazards:**
- Blast flyrock exposure
- Haul road struck-by from mining equipment
- Equipment close proximity to personnel
- Rock face instability and rockfall
- Silica and dust from drilling and blasting
- Noise from drilling, blasting, and crushing
- Slip on haul roads
- Berm failure and vehicle rollover
- Personnel exposure near crusher and conveyor

---

### Entry 41 — Maintenance / Repair / Inspection

**Keywords:**
maintenance, repair, inspection, PM, preventive maintenance, troubleshoot, service, replace part, change out, inspect equipment, lubrication, oil change, filter change, alignment, calibration, fix, maintain, overhaul, rebuild, recondition

**Hazards:**
- Unexpected energization during maintenance
- Stored energy release (hydraulic, pneumatic, gravity, spring)
- Pinch points from rotating or moving parts
- Confined space conditions at maintenance location
- Slip and trip in maintenance work areas
- Chemical exposure from lubricants and process fluids
- Fall if working on elevated equipment
- Ergonomic strain from awkward access positions
- Fire from hot surfaces or ignition near flammable fluids

---

### Entry 42 — Surveying / Layout / Grade Work

**Keywords:**
survey, surveying, layout, grade, grade check, shoot grade, laser level, total station, GPS layout, benchmark, staking, grade stake, elevations, layout crew

**Hazards:**
- Struck-by from traffic or moving equipment
- Trip from grade stakes and uneven terrain
- Heat stress in open exposed work areas
- Working in active equipment zones without adequate protection
- Sun and UV exposure

---

## SECTION 3: HAZARD-TO-CONTROL LIBRARY

**Source:** `const HAZ_TO_CONTROL` — lines 1066–1138  
**Total entries:** 24  
**Format:** Each entry = `{keys[], controls[]}`  
**Engine use:** `getSuggestions('control', hazardDescription)` → returns ranked `controls[]` strings

---

### Entry 1 — Fall Hazards

**Keywords:**
fall, fall exposure, fall potential, working at height, leading edge, elevated, roof, scaffold, aerial lift, ladder, boom lift, scissor lift

**Controls:**
- Maintain 100% tie-off when exposed to fall hazards at 6 feet or greater
- Use approved anchorage points rated for fall arrest forces
- Inspect harness, lanyard, SRL, and all connectors before each use
- Use guardrails, covers, or barricades at open sides and holes
- Review fall rescue plan before work begins
- Protect floor holes and openings with secured and marked covers
- Use aerial lift or scaffold for extended overhead or elevated work
- Ensure ladder is at proper angle and secured at top and bottom

---

### Entry 2 — Fire / Hot Work

**Keywords:**
fire, hot work, spark, slag, torch, welding, burning, flammable, combustible, ignition

**Controls:**
- Complete hot work permit before beginning any hot work operations
- Remove or protect all combustibles within 35 feet of hot work
- Maintain charged fire extinguisher in the work area at all times
- Assign fire watch during and for minimum 30 minutes after hot work
- Use fire blankets and screens to contain sparks and slag
- Monitor area 30-60 minutes after hot work for smoldering fire
- Control all sparks and slag direction away from personnel and materials

---

### Entry 3 — Cuts / Lacerations / Sharp Edges

**Keywords:**
cut, laceration, blade, sharp, metal stud, sheet metal, glass, rebar, edge, knife

**Controls:**
- Wear proper cut-resistant gloves appropriate for the task
- Keep hands out of line of cut at all times
- Use all tool guards as designed — never remove or bypass
- Secure material before cutting to prevent movement
- Maintain sharp and properly seated blades
- Do not bypass or defeat safety devices on cutting tools
- Keep bystanders out of the cutting zone

---

### Entry 4 — Flying Debris / Eye Injury

**Keywords:**
flying debris, eye injury, debris, projectile, chip, grind, blast, ricochet, overhead material

**Controls:**
- Wear approved safety glasses at all times in work area
- Use face shield where flying debris or splash hazard exists
- Ensure tool guards are in place before operation
- Barricade area below or around work if debris may affect others
- Position body out of the direct line of fire
- Warn nearby workers before starting debris-producing operations

---

### Entry 5 — Silica / Dust

**Keywords:**
silica, dust, concrete dust, grinding concrete, cutting concrete, silica exposure, respirable, masonry dust

**Controls:**
- Use wet cutting or grinding methods where feasible
- Use HEPA vacuum attachment on grinders and saws
- Wear appropriate respirator (N95 minimum, P100 for high exposure)
- Follow site silica exposure control plan
- Avoid dry sweeping — use wet methods or HEPA vacuum
- Maintain good housekeeping to prevent dust accumulation
- Review SDS for silica content of material before work

---

### Entry 6 — Chemical / Respiratory / Fume Hazards

**Keywords:**
chemical, respiratory, fume, vapor, acid, caustic, solvent, coating, epoxy, H2S, ammonia, fluoride, phosphoric, sulfuric, process chemical, toxic

**Controls:**
- Review SDS before handling any chemical or process material
- Provide adequate ventilation — forced air if in enclosed space
- Use correct respiratory protection as specified in SDS or site plan
- Wear chemical-resistant gloves appropriate for the chemical
- Wear eye and face protection for splash or mist exposure
- Control all ignition sources if working with flammable chemicals
- Have spill containment and cleanup materials immediately available
- Never enter areas with potential H2S, ammonia, or toxic vapor without air monitoring

---

### Entry 7 — Suspended Load / Rigging / Overhead Lift

**Keywords:**
suspended load, rigging, crane, hoist, overhead lift, sling, shackle, choker, dropped load

**Controls:**
- Never stand or work under a suspended load
- Inspect all rigging components before each lift
- Use properly rated slings, shackles, and lifting hardware for the load
- Do not side-load hooks or shackles not designed for angular loading
- Use tag lines to control load swing where practical
- Establish and enforce exclusion zone under and around overhead lifts
- Use only qualified riggers and qualified signal persons
- Verify load weight and select rigging per load chart or engineer approval

---

### Entry 8 — Pinch / Caught-Between / Nip Points

**Keywords:**
pinch, caught-between, caught in, nip point, roller, conveyor, rotating, machinery, moving parts

**Controls:**
- Keep hands and body clear of all pinch points and nip points
- Use tag lines, push sticks, or tools instead of hands where practical
- Maintain clear communication during load or equipment movement
- Do not place any body part between a moving load and a fixed object
- Control stored energy before adjustment or maintenance
- Never reach into operating or coasting equipment
- Ensure all guarding is in place before restarting equipment

---

### Entry 9 — Electrical / Arc Flash / Stored Energy

**Keywords:**
electrical, arc flash, shock, energized, loto, lockout, tagout, stored energy, voltage

**Controls:**
- De-energize equipment before work whenever possible
- Apply LOTO per site energy control procedure
- Verify absence of energy with calibrated tester before starting work
- Use only qualified and authorized electrical workers for energized work
- Maintain required approach distances from energized conductors
- Use appropriate PPE including arc-rated clothing for electrical exposure
- Inspect all cords and tools for damage before use
- Test before touch — assume all circuits are energized until verified

---

### Entry 10 — Struck-By / Vehicle / Equipment

**Keywords:**
struck-by, vehicle, equipment, traffic, swing radius, moving equipment, backing, blind spot

**Controls:**
- Establish barricades and exclusion zones around equipment and work areas
- Use spotters when equipment is operating near workers
- Maintain clear and constant communication between operators and ground crew
- Keep workers out of equipment swing radius at all times
- Secure tools, materials, and loads to prevent falling or shifting
- Wear high-visibility clothing in all equipment and traffic areas
- Never assume equipment operator can see you — make eye contact before approaching

---

### Entry 11 — Crushing / Caught Under / Load Shifts

**Keywords:**
crushing, crush, caught under, load shifts, work under, counterweight

**Controls:**
- Keep body parts out of all crush zones
- Block and support loads before working under or near them
- Never work under a suspended load — always use mechanical support
- Maintain equipment exclusion zones during operation
- Use proper cribbing, blocks, and mechanical supports for heavy components
- Verify support is stable before releasing rigging or mechanical hold

---

### Entry 12 — Cave-In / Excavation / Trenching

**Keywords:**
cave-in, excavation, trench, collapse, shoring, sloping, benching, soil, footer, footing

**Controls:**
- Inspect excavation at start of each shift and after any rain or change in conditions
- Use sloping, shoring, benching, or trench shielding per competent person determination
- Keep spoil piles minimum 2 feet from the edge of excavation
- Provide safe access and egress every 25 linear feet of trench
- Do not enter any unprotected excavation 5 feet or deeper
- Call 811 and verify all utilities located before any digging
- Hand dig or hydrovac within 18 inches of marked utilities
- Competent person must classify soil and determine protection method

---

### Entry 13 — Confined Space

**Keywords:**
confined space, permit space, vessel, tank, pit, manhole, limited egress, oxygen deficiency, toxic atmosphere

**Controls:**
- Evaluate space and classify before entry
- Test atmosphere for oxygen, combustible gases, and toxic substances before and continuously during entry
- Use full confined space entry permit when required
- Provide trained attendant at entry point at all times during entry
- Establish and document rescue plan before anyone enters
- Have rescue equipment immediately available at entry point
- Maintain continuous communication with entrant
- Blind and blank all inlets and outlets before entry into process equipment
- Force ventilate continuously during manned entry

---

### Entry 14 — Heavy Equipment / Mobile Equipment

**Keywords:**
heavy equipment, forklift, excavator, loader, dozer, backhoe, telehandler, mobile equipment

**Controls:**
- Use only trained and authorized equipment operators
- Maintain physical separation between pedestrians and operating equipment
- Use spotters for blind moves, tight areas, and near personnel
- Ensure backup alarms and cameras are functioning before operation
- Inspect equipment per pre-shift inspection checklist before use
- Follow rated load and lift capacity limits
- Establish and communicate equipment travel routes and exclusion zones

---

### Entry 15 — Slip / Trip / Housekeeping

**Keywords:**
slip, trip, housekeeping, wet surface, uneven, cord, hose, debris, clutter

**Controls:**
- Maintain active housekeeping throughout the work shift
- Keep all walkways and access routes clear of debris, cords, and materials
- Manage cords and hoses — route overhead or mark and protect on ground
- Clean spills promptly and mark wet areas
- Maintain adequate lighting in all work areas
- Wear proper slip-resistant footwear for conditions

---

### Entry 16 — Noise / Hearing

**Keywords:**
noise, hearing, loud, hearing damage, decibel, ear

**Controls:**
- Wear hearing protection when noise levels exceed 85 dBA
- Limit duration of exposure to high noise where feasible
- Maintain equipment to reduce unnecessary noise output
- Warn nearby workers before starting high-noise operations
- Communicate with hand signals or radios in high-noise areas

---

### Entry 17 — Heat Stress

**Keywords:**
heat stress, heat stroke, dehydration, hot weather, heat index, high temperature, sun

**Controls:**
- Provide water, rest, and shade — enforce regular hydration breaks
- Monitor workers for signs of heat illness (confusion, nausea, stopping sweating)
- Acclimatize new workers gradually to hot environments over 7-14 days
- Adjust work scheduling to avoid peak heat hours where possible
- Use buddy system in high-heat conditions
- Know site first aid response for heat stroke — cool rapidly and call 911

---

### Entry 18 — Cold Stress

**Keywords:**
cold stress, cold, hypothermia, freezing, frost, ice, cold weather

**Controls:**
- Wear appropriate layered clothing for cold conditions
- Take warm-up breaks in heated shelter at regular intervals
- Monitor workers for signs of cold stress (shivering, slurred speech, confusion)
- Keep walking surfaces free of ice and slip hazards
- Use buddy system in cold conditions

---

### Entry 19 — Stored Energy / LOTO

**Keywords:**
stored energy, hydraulic, pneumatic, spring, gravity, tension, energy control, loto, lockout

**Controls:**
- Identify ALL energy sources before starting work — electrical, hydraulic, pneumatic, spring, gravity
- Release or control all forms of stored energy before work
- Apply LOTO per site energy control program
- Block, support, or restrain equipment and materials against gravity
- Verify zero energy state before beginning work
- Never assume equipment is de-energized — verify with instruments

---

### Entry 20 — Dragline / Bucket Operations

**Keywords:**
dragline, bucket repair, bucket teeth, drag chain, weld bucket, weld tooth, dragline rigging, pad eye

**Controls:**
- Coordinate with dragline operator and apply LOTO before approaching bucket
- Establish exclusion zone around full swing radius of dragline
- Block and support bucket fully on stable ground before working on or under it
- Use proper rigging rated for component weight when changing bucket or components
- Hot work permit required for welding on bucket
- Ensure ventilation when welding inside bucket or confined areas
- Use fire watch during all hot work on bucket
- Inspect all rigging gear before bucket change operations

---

### Entry 21 — Conveyor Systems

**Keywords:**
conveyor, belt, roller, nip point, conveyor belt, conveyor maintenance

**Controls:**
- LOTO conveyor system completely before any contact with belt, rollers, or structure
- Verify zero energy state including any stored belt tension
- Block and support conveyor components before working under them
- Never attempt to clear a jam or walk a belt without full LOTO
- Use guarding for all nip points and pinch points — never operate unguarded
- Coordinate with operations before shutdown and restart
- Never ride or step over a running conveyor

---

### Entry 22 — Process Piping / Line Break

**Keywords:**
process piping, flange, line break, pipe break, acid pipe, chemical line, pipe repair

**Controls:**
- Depressurize, drain, and verify zero pressure before breaking any flange or fitting
- Double block and bleed or blind/blank lines before breaking into process piping
- Verify process fluid is purged and safe before opening any flange
- Wear chemical-resistant PPE including face shield for acid and chemical lines
- Have eyewash station immediately accessible when working on acid or chemical lines
- Obtain line break permit as required by site procedure
- Have fire watch present when welding on or near piping

---

### Entry 23 — Vessel / Tank Entry

**Keywords:**
vessel entry, tank entry, process vessel, agitator, manway, vessel cleaning

**Controls:**
- Confined space permit required before any vessel entry
- Test atmosphere for oxygen, H2S, ammonia, combustible gas, and fluoride before entry
- Flush and purge vessel thoroughly before entry
- Blind and blank all inlets, outlets, and connected lines
- LOTO agitator and all mechanical components before entry
- Establish and maintain attendant at entry point for entire duration
- Have rescue equipment ready at entry point
- Force ventilate continuously during manned entry

---

### Entry 24 — Chemical Plant / Process Plant Maintenance

**Keywords:**
chemical plant, phosphoric acid, sulfuric acid, H2S, hydrogen sulfide, ammonia, fluoride, process plant maintenance

**Controls:**
- Review SDS and chemical hazard information before starting work
- Wear full chemical-resistant PPE including face shield or supplied air as required
- Have eyewash and safety shower immediately accessible in chemical work areas
- LOTO all energy sources and isolate process before maintenance
- Confined space permit required for vessel, tank, pit, or tunnel entry
- Monitor continuously for H2S, ammonia, oxygen level, and combustible gas
- Use buddy system when working with highly hazardous chemicals
- Never work alone in chemical plant environments

---

## SECTION 4: SUGGESTION ENGINE — MATCHING AND RANKING RULES

**Source:** `var A2_PAGE_SIZE`, `var A2_HIGH_CONSEQUENCE`, `function getSuggestions` — lines 2246–2310

### 4A — Engine Constants

```javascript
var A2_PAGE_SIZE = 15;
// First batch displayed, and each subsequent Show More batch

var A2_HIGH_CONSEQUENCE = [
  'fall','struck-by','caught-between','crush','electr','arc flash',
  'suspended load','cave-in','engulf','oxygen defici','toxic atmosphere',
  'h2s','hydrogen sulfide','ammonia','fluoride','explosion','fire hazard',
  'tip-over','structural collapse','dropped load','stored energy'
];
// Substring matches against suggestion text (case-insensitive)
// High-consequence items are floated to top of ranked results
```

### 4B — getSuggestions Function

```javascript
/**
 * getSuggestions — Suggestion engine interface (Track A / Track B boundary)
 *
 * A-2 behavior: results ranked — contextual applicability first (match score),
 * high-consequence hazards prioritized within matched set, then library order.
 *
 * @param {string} kind   'hazard' | 'control'
 * @param {string} text   User-entered task or hazard description
 * @param {Object} [context]  Reserved for Track B. Ignored in A-2.
 * @returns {string[]}  Ranked, deduplicated suggestion strings.
 */
function getSuggestions(kind, text, context){ // context reserved for Track B
  var t = (text || '').toLowerCase();
  if(!t.trim()) return [];
  var lib = kind === 'hazard' ? TASK_TO_HAZARD : HAZ_TO_CONTROL;

  /* Score each library entry by how many keywords match the input */
  var scored = [];
  lib.forEach(function(entry){
    var matchCount = 0;
    entry.keys.forEach(function(k){
      if(t.indexOf(k.toLowerCase()) !== -1) matchCount++;
    });
    if(matchCount > 0){
      scored.push({ entry: entry, score: matchCount });
    }
  });

  /* Sort: higher match count first; stable within same score */
  scored.sort(function(a, b){ return b.score - a.score; });

  /* Collect suggestions in ranked order, deduplicating */
  var seen = {};
  var out = [];
  scored.forEach(function(s){
    var items = kind === 'hazard' ? s.entry.haz : s.entry.controls;
    items.forEach(function(item){
      if(!seen[item]){
        seen[item] = true;
        out.push(item);
      }
    });
  });

  /* Within the full ranked list, float high-consequence items to the top */
  var hi = [];
  var lo = [];
  out.forEach(function(item){
    var lower = item.toLowerCase();
    var isHi = A2_HIGH_CONSEQUENCE.some(function(hc){ return lower.indexOf(hc) !== -1; });
    if(isHi) hi.push(item); else lo.push(item);
  });

  return hi.concat(lo);
}
```

### 4C — Ranking Logic Summary

1. **Input:** Plain-text task description (for hazard suggestions) or hazard description (for control suggestions)
2. **Keyword matching:** Each library entry is scored by count of its `keys[]` terms found (substring) in the input text
3. **Score sort:** Higher match count = ranked higher; ties preserve library order
4. **Deduplication:** Identical suggestion strings are shown only once (first occurrence kept)
5. **High-consequence float:** Any suggestion whose text substring-matches an `A2_HIGH_CONSEQUENCE` term is promoted to the top of the result set, above all other ranked results
6. **Page size:** First 15 suggestions displayed; each "Show More" reveals 15 additional
7. **`context` parameter:** Currently ignored; reserved for Track B (CRF semantic engine)

---

## SECTION 5: CONSTRUCTION REASONING FRAMEWORK — STATUS

**AD-008 §5:** "Do not recreate previously frozen Construction Reasoning Framework records without first checking recovered materials."

**Status as of 2026-11-25:** No CRF records exist in the production repository. The following files are present in the repo:

- `BASELINE.md` — A-3 baseline documentation
- `LIBRARY-SNAPSHOT.md` — Category inventory (counts and descriptions only; not full library content)
- `ENGINEERING-REPORT-A1.md` — A-1 engineering report
- `ADENA_JSA_PO-003.md`, `ADENA_JSA_PO-004.md`, `ADENA_JSA_PO-005.md` — PO decision records

No files named CRF, Construction Reasoning Framework, or Track B were found. Track B development has not begun; the `context` parameter in `getSuggestions` is reserved but unused. There are no previously frozen CRF records to recover or reference.

---

## SECTION 6: LIBRARY COUNTS SUMMARY

| Library | Entries | Notes |
|---------|---------|-------|
| TASK_TO_HAZARD | 42 categories | Full keyword + hazard arrays |
| HAZ_TO_CONTROL | 24 entries | Full keyword + control arrays |
| HAZARDS (checklist) | 30 items | 4 flagged hi-risk |
| PPE_ITEMS | 15 items | |
| PERMITS | 14 items | 7 flagged hi-risk |
| A2_HIGH_CONSEQUENCE | 20 terms | Substring match for priority float |

---

## SECTION 7: AD-008 §5 IMMEDIATE DEVELOPMENT PRIORITIES

Per AD-008 §5, the Architect (ChatGPT) should focus initial library development on:

1. **Structural steel erection** — Entry 7 exists; expand keyword coverage and hazard depth
2. **Rigging and hoisting** — Entry 5 exists; expand for structural steel context
3. **Bolting and torquing** — Not a standalone category; currently covered under Entry 7 keywords (`bolt-up`, `spud wrench`, `drift pin`); likely needs dedicated entry
4. **Welding, cutting, drilling, grinding** — Covered across Entries 1, 2, 3; review for steel erection context gaps
5. **Structural steel HAZ_TO_CONTROL coverage** — Review which control entries apply and whether steel-specific controls are adequately represented

---

*End of A4-LIBRARY-EXPORT.md*  
*Extracted by Claude (Engineer) per AD-008 §2 — 2026-11-25*  
*Ready for transfer to ChatGPT (Architect) for Phase A-4 library development*

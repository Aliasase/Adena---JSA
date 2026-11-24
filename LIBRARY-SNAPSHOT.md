# Adena JSA — Suggestion Library Snapshot
**Branch:** revision-a1  
**Commit:** 8ad26bd  
**Date:** 2026-11-24  
**Purpose:** Permanent version-controlled record of all suggestion library content as of Revision A-1 completion. Authoritative baseline for A-2 development and Construction Universe library expansion.

---

## Architecture Note

The suggestion engine uses two parallel keyword arrays:

| Variable | Location | Purpose |
|---|---|---|
| `TASK_TO_HAZARD` | Lines 871–1039 | Task keywords → hazard suggestions |
| `HAZ_TO_CONTROL` | Lines 1041–1113 | Hazard keywords → control measure suggestions |

Entry interface:
```js
{ cat: string, keys: string[], haz: string[] }   // TASK_TO_HAZARD
{ keys: string[], controls: string[] }             // HAZ_TO_CONTROL
```

`getSuggestions(kind, text, context)` — sole entry point. Track A/Track B boundary function (lines 1824–1840).  
`context` parameter reserved for Track B (CU reasoning engine). Currently ignored.

---

## TASK_TO_HAZARD — 29 Entries

| # | Category | Key Count | Hazard Count |
|---|---|---|---|
| 1 | Hot Work / Welding / Cutting / Grinding | 44 | 10 |
| 2 | Carpentry / Saw Cutting / General Trades | 16 | 9 |
| 3 | Drilling / Fastening / Anchoring | 14 | 9 |
| 4 | Powder-Actuated / Nail Guns / Deck Guns | 11 | 6 |
| 5 | Rigging / Hoisting / Chain Falls | 17 | 9 |
| 6 | Crane Operations | 20 | 9 |
| 7 | Steel Erection / Structural Steel / Decking | 29 | 10 |
| 8 | Aerial Lift / Scissor Lift / Boom Lift | 11 | 8 |
| 9 | Ladders / Portable Access | 8 | 8 |
| 10 | Scaffold Erection / Use / Dismantling | 19 | 9 |
| 11 | Concrete / Masonry / Grout / Silica / Footers | 29 | 11 |
| 12 | Painting / Epoxy / Coatings / Solvents | 17 | 8 |
| 13 | Excavation / Trenching / Footings / Utilities | 28 | 11 |
| 14 | Confined Space | 18 | 9 |
| 15 | Electrical / Energized Work / LOTO | 21 | 8 |
| 16 | Heavy Equipment / Mobile Equipment | 13 | 9 |
| 17 | Material Handling / Manual Lifting | 12 | 7 |
| 18 | Demolition / Removal Work | 14 | 9 |
| 19 | Housekeeping / Walking Working Surfaces | 11 | 7 |
| 20 | Chemical Use / SDS Materials | 15 | 8 |
| 21 | Weather / Environmental Conditions | 9 | 8 |
| 22 | Noise / Vibration-Producing Work | 11 | 5 |
| 23 | Pressurized Systems / Pneumatic / Hydraulic | 11 | 6 |
| 24 | Traffic / Work Near Vehicles | 11 | 6 |
| 25 | Overhead Work / Dropped Object Exposure | 9 | 5 |
| 26 | Conveyor Systems — Installation, Maintenance, Repair | 39 | 12 |
| 27 | Crusher / Mill / Size Reduction Equipment | 32 | 10 |
| 28 | Dragline — Bucket Repair, Teeth, Rigging | 38 | 11 |
| 29 | Industrial Chutes, Hoppers, Bins, Transfer Points | 29 | 10 |
| 30 | Vessels, Tanks, Reactors, Process Equipment | 36 | 10 |
| 31 | Process Piping — Industrial | 36 | 9 |
| 32 | Pumps — Industrial Process | 26 | 7 |
| 33 | Shakers, Screens, Filters, Separation Equipment | 35 | 10 |
| 34 | Chemical Plant / Process Plant — Industrial Maintenance | 32 | 10 |
| 35 | Roofing / Waterproofing / Membrane | 16 | 8 |
| 36 | Drywall / Framing / Interior Buildout | 15 | 7 |
| 37 | Themed Entertainment / Special Construction | 18 | 10 |
| 38 | Solar / Steel Support Work | 13 | 8 |
| 39 | Demolition — Structural / Selective | 15 | 9 |
| 40 | Surface Mining / Quarry Operations | 18 | 9 |
| 41 | Maintenance / Repair / Inspection | 20 | 9 |
| 42 | Surveying / Layout / Grade Work | 10 | 5 |

**Total TASK_TO_HAZARD entries: 42**

---

## HAZ_TO_CONTROL — 23 Entries

| # | Hazard Category | Key Count | Control Count |
|---|---|---|---|
| 1 | Fall / Height Exposure | 12 | 8 |
| 2 | Fire / Hot Work / Ignition | 10 | 7 |
| 3 | Cut / Laceration / Blade | 9 | 7 |
| 4 | Flying Debris / Eye Injury | 8 | 6 |
| 5 | Silica / Concrete Dust / Respirable | 8 | 7 |
| 6 | Chemical / Fume / Vapor / Toxic | 15 | 8 |
| 7 | Suspended Load / Rigging / Crane | 9 | 8 |
| 8 | Pinch / Caught-Between / Rotating | 9 | 7 |
| 9 | Electrical / Arc Flash / LOTO / Stored Energy | 9 | 8 |
| 10 | Struck-By / Vehicle / Equipment | 9 | 7 |
| 11 | Crushing / Caught Under / Load Shift | 6 | 6 |
| 12 | Cave-In / Excavation / Trench | 11 | 8 |
| 13 | Confined Space / Vessel / Tank | 10 | 9 |
| 14 | Heavy Equipment / Mobile Equipment | 8 | 7 |
| 15 | Slip / Trip / Housekeeping | 9 | 6 |
| 16 | Noise / Hearing | 7 | 5 |
| 17 | Heat Stress / Sun / Dehydration | 8 | 6 |
| 18 | Cold Stress / Ice / Hypothermia | 6 | 5 |
| 19 | Stored Energy / Hydraulic / Pneumatic / LOTO | 11 | 6 |
| 20 | Dragline / Bucket / Dragline Rigging | 10 | 8 |
| 21 | Conveyor / Belt / Nip Point | 6 | 7 |
| 22 | Process Piping / Flange / Line Break | 8 | 7 |
| 23 | Vessel Entry / Tank Entry / Agitator | 8 | 8 |
| 24 | Chemical Plant / Process Plant / Acids | 8 | 8 |

**Total HAZ_TO_CONTROL entries: 24**

---

## Supporting Arrays

### HAZARDS (Checklist Picker) — 30 items
High-risk flagged (hi:true): fall, pinchCrush, caughtBetween, electrical

Includes: slipsTrips, manualLifting, fallingObjects, hotWork, chemicalExposure, respiratory, noise, heatStress, coldStress, confinedSpace, excavation, vehicleTraffic, vibration, weather, biological, sharpEdges, rigging, craneOps, scaffold, ladder, compressedGas, radiation, water, fatigue, housekeeping, workingAlone

### PPE_ITEMS — 15 items
hardHat, safetyGlasses, faceShield, hearingProtection, hiVizVest, gloves, respirator, tyvekSuit, kevlarSleeves, fallHarness, steelToe, weldingHood, chemGloves, fullFaceSplash, suppliedAir

### PERMITS — 14 items
High-risk (hi:true): hotWorkPermit, confinedSpacePermit, loto, liftPlan, lineBreak, confinedSpaceEntry, energizedElectrical

Includes: excavationPermit, heightPermit, scaffoldTag, ndtPermit, envPlan, trafficControl, dailyPermit

---

## A-2 Development Gap Analysis

### What Track A does NOT have yet (priority gaps):
- **Bolt / torque / structural bolt tightening** — no dedicated entry (keywords partially covered under Steel Erection and Drilling)
- **Grinding as standalone task** — keywords present in Hot Work entry but no dedicated control entry
- **Working near water / water hazard** — HAZARDS list has entry, no TASK_TO_HAZARD or HAZ_TO_CONTROL entry
- **Radiation / NDT / radiography** — HAZARDS list has entry, no suggestion library entry
- **Working alone / remote location** — HAZARDS list has entry, no suggestion library entry
- **Biological hazards (insects, snakes, mold)** — HAZARDS list has entry, no suggestion library entry
- **Fatigue / extended shift** — HAZARDS list has entry, no suggestion library entry
- **Compressed gas handling** — HAZARDS list has entry; gas cylinder hazards mentioned in Hot Work entry keys but no dedicated entry

### Construction Universe Track B prerequisite:
- Activity records 0001–0012: status unknown — not visible in this HTML file (may be in prior session work not committed to repo)
- Activity records 0013–0018 (Bolt, Torque, Weld, Cut, Drill, Grind): frozen, complete individual definitions not yet recovered in current context
- Track B architecture requires: Construction Universe hierarchy, Concept Library, Work Context recognition, Natural-language recognition, Unique concept identifiers, Composable reasoning

---

## A-1 Validation Status (as of 2026-11-24)

| Test | Description | Status |
|---|---|---|
| AT-01 | Add to Home Screen on iPad | NOT YET EXECUTED |
| AT-02 | App loads from home screen icon | NOT YET EXECUTED |
| AT-03 | Suggestion engine returns results | NOT YET EXECUTED |
| AT-04 | Offline reopen from icon (Airplane Mode) | NOT YET EXECUTED — CRITICAL |
| AT-05 | Portrait/landscape orientation | NOT YET EXECUTED |
| AT-06 | PDF generation | NOT YET EXECUTED |
| AT-07 | Signature capture | NOT YET EXECUTED |
| AT-08 | Crew member add/remove | NOT YET EXECUTED |
| AT-09 | JSA data preserved after update | NOT YET EXECUTED |

**Test URL:** `https://adena-jsa.netlify.app/adena-jsa.html`  
**Branch:** revision-a1 → deploys to `adena-jsa.netlify.app` automatically on push

---

## Version History

| Version | Branch | Key Changes |
|---|---|---|
| 1.0.0 | main | Original production release |
| 1.1.0 | revision-a1 | PO-003 Ten Corrections applied; pagination removed; local PWA icons; SW scope restricted; orientation:any |

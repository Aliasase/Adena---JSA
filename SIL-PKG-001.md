# Safety Intelligence Library — Package 001
## Bolt (0013) and Torque (0014)
Status: Candidate content, pending independent review, technical validation and Product Owner approval. Original candidate package consolidated for transfer; not a replacement for historical frozen activity definitions. Read alongside SIL-PKG-001-ADDENDUM-01.md.

## Activity recognition
**Bolt:** Work involving installation or assembly of bolted connections.
High-confidence terms: bolting, bolt-up, install bolts, insert bolts, bolted connection, field bolting, bolt installation, install connection bolts.
Context-dependent terms: fasten, connect, secure, assemble, splice, anchor.
Objects: structural beams, columns, connection plates, gusset plates, splice plates, base plates, flanges, structural bolts, nuts and washers.

**Torque:** Work involving controlled application of rotational force to a fastener.
High-confidence terms: torque bolts, torquing, torque wrench, torque tightening, torque nuts, re-torque, check bolt torque.
Context-dependent terms: tighten, final tightening, snug-tight, pretension, tension-control bolts.
Objects/work means: structural bolts, anchor bolts, threaded fasteners, flange bolts, mechanical connections, manual and powered torque wrenches.
Pretensioning is not necessarily conventional torque-wrench tightening; specified installation method determines equipment, sequence and hazards.

## Core candidate records
| ID | Hazard | Associated candidate controls |
|---|---|---|
| H-BT-001 | Pinch points during bolt installation | Keep fingers clear of connection holes and mating surfaces. Use suitable alignment tools instead of fingers. |
| H-BT-002 | Cuts from sharp metal edges or burrs | Wear task-appropriate cut-resistant gloves. Avoid contact with sharp edges and burrs. |
| H-BT-003 | Wrench or socket slippage | Verify correct wrench and socket size. Fully engage the fastener before applying force. |
| H-BT-004 | Sudden tool movement from torque reaction | Maintain stable footing. Position body clear of anticipated tool reaction path. |
| H-BT-005 | Hand impact against adjacent steel | Maintain adequate hand clearance from fixed surfaces when applying force. |
| H-BT-006 | Tool or socket failure under load | Inspect tools and sockets before use. Remove damaged or defective equipment from service. |
| H-BT-007 | Musculoskeletal strain from excessive force | Use suitable mechanical assistance. Avoid excessive force and awkward body positioning. |
| H-BT-008 | Repetitive hand and wrist strain | Alternate tasks where practical. Maintain neutral wrist positioning and use suitable tools. |
| H-BT-009 | Loss of balance during tightening | Establish stable footing and avoid overreaching or applying force from an unstable position. |
| H-BT-010 | Finger injury from rotating fasteners | Keep fingers and loose clothing clear of rotating sockets, extensions and fasteners. |
| H-BT-011 | Unexpected release of mechanical force | Keep personnel clear of anticipated release path. Relieve applied force in a controlled manner. |

## Conditional candidate records
| ID | Required context | Hazard | Associated candidate controls |
|---|---|---|---|
| H-BT-012 | Unsecured structural components | Crushing from shifting steel | Support and restrain components against unexpected movement. |
| H-BT-013 | Temporary structural connections | Structural instability or collapse | Maintain required temporary connections and bracing. Follow approved erection sequence. |
| H-BT-014 | Suspended structural member | Struck-by or caught-between suspended steel | Remain outside load travel path. Coordinate movement with operator and signal person. |
| H-BT-015 | Releasing hoisting equipment | Structural member movement or collapse | Verify required erection connections and structural stability before releasing rigging. |
| H-BT-016 | Shared-bolt double connection | Collapse from removal of existing connection bolts | Maintain required supporting connection or approved support device during assembly. |
| H-BT-017 | Work at elevation | Fall from elevated work position | Establish safe access and appropriate fall protection before beginning work. |
| H-BT-018 | Elevated tools or materials | Dropped bolts, sockets and tools | Secure loose hardware and tether tools where appropriate. Protect personnel below. |
| H-BT-019 | Impact wrench | Noise exposure | Wear appropriate hearing protection and manage exposure duration. |
| H-BT-020 | Impact wrench | Hand-arm vibration | Use suitable low-vibration equipment where practical and manage exposure duration. |
| H-BT-021 | Impact wrench | Socket or attachment ejection | Use impact-rated sockets and verify attachment retention. |
| H-BT-022 | Powered wrench with reaction arm | Crushing at torque reaction point | Position reaction arm against suitable reaction surface. Keep hands and body clear during operation. |
| H-BT-023 | Hydraulic torque wrench | High-pressure fluid injection | Inspect hoses and fittings. Never use hands to locate hydraulic leaks. Depressurize before disconnecting. |
| H-BT-024 | Hydraulic or pneumatic wrench | Hose rupture or fitting separation | Use compatible, properly rated hoses and fittings. Verify connections before pressurizing. |
| H-BT-025 | Pneumatic wrench | Compressed-air hose whip | Secure hose connections against accidental separation. Isolate air supply before disconnecting. |
| H-BT-026 | Corded electric wrench | Electrical shock | Inspect cords and plugs. Use suitable electrical protection for work environment. |
| H-BT-027 | External power hoses or cords | Trips from hoses and electrical cords | Route and secure hoses and cords away from access paths. |
| H-BT-028 | Tension-control bolt installation | Falling or ejected bolt splines | Control and collect separated splines. Keep personnel clear of potential drop or ejection paths. |
| H-BT-029 | Hammering or using drift pins | Flying metal fragments | Inspect striking and alignment tools. Remove mushroomed or damaged tools from service. Wear appropriate eye and face protection. |
| H-BT-030 | Hammering or using drift pins | Hand injury from missed hammer strikes | Keep hands clear of striking zone. Use suitable holding tools where practical. |
| H-BT-031 | Improper structural bolt installation | Connection failure | Verify specified fasteners, installation method and required tightening sequence. Complete required connection inspection. |

## Representative regression scenarios
- Install bolts in steel connections at ground level using hand wrenches: applicable hand-tool and connection hazards; no confirmed elevation or hydraulic exposure.
- Install connection bolts on a suspended structural beam while working from an aerial lift: combine connection, suspended-load, elevation and aerial-lift records.
- Torque structural connection bolts at ground level using a hydraulic torque wrench: combine torque, reaction arm where present, hydraulic and connection hazards; no confirmed elevation exposure.
- Install structural connection bolts using hand tools, impact wrenches and hydraulic torque wrenches while working from aerial lifts: cumulative recognition, not exclusive selection.
- Torque structural bolts; Install TC bolts with shear wrench; Snug tight and turn of nut on beam connections: meaningful short-input recognition; no TIG welding match inside tight.
These are illustrative tests, not fixed output lists. Resolve cross-library references into actual records. No mandatory selection UI.

## Internal references for validation
- OSHA 1926.301: https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.301
- OSHA 1926.302: https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.302
- OSHA 1926.756: https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.756
- Additional references proposed by Engineer: 1926.404, 1926.759, applicable structural bolting specifications and manufacturer instructions.
These are reference targets, not a completed citation audit. Verify applicable provisions, manufacturer requirements, company/client policy and industrial/MSHA applicability before approval. Do not apply a universal two-bolt rule to all connections.

## Architect response to preliminary Engineer review
Accept complete-term recognition with legitimate variants and contextual disambiguation; AD-008 ranking supersedes historical CRF ranking decision. Apply consequence within applicability groups. Separate Recognition Confidence (language-to-concept relationship) from Hazard Applicability (concept/context-to-hazard relationship). Conditional suggestions may rank lower and use Show More; use clear conditional wording where needed, not new badges or menus. Resolve aerial-lift references into actual hazards. Retain distinct injury mechanisms and consolidate equivalent records. Brand names may be recognition aliases only. Include installation integrity controls where failure creates safety exposure. Compare proposed additions against all 31 existing candidates before assigning new IDs. Review tool handling strain, drift-pin ejection, hydraulic pump power, exposure of workers below, and specific installation verification methods. Review whether core records need additional applicability constraints. No engine implementation authorized.

## Engineer action
Review every candidate record against the addendum and preliminary findings. Identify technical inaccuracies, missing hazards, control effectiveness, applicability, recognition aliases and semantic duplication. Propose record-level corrections and additions, with internal references. Preserve historical activity IDs and candidate hazard IDs; do not overwrite frozen definitions. Archive package and review on revision-a4 as candidate content. Return substantive findings to Architect. No application changes or production release authorized.

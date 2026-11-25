> **Repository Record (AD-008 §6):** Reconciled **candidate** package with the Engineer independent review. Not approved. Citations not marked "verified" are not validated. No application implementation or production release is authorized.

# Safety Intelligence Library — Package 002 (Reconciled Candidate r1)
## Weld (ACT-0015) · Cut (ACT-0016, thermal and abrasive) · Grind (ACT-0018)

**Source:** `SIL-PKG-002.md` (Architect candidate, baseline `c630be6`; original preserved verbatim)
**Reviewed by:** Claude (Engineer), November 25, 2026 · **Branch:** `revision-a4`
**Companion files:**
- `SIL-CONTROL-REGISTRY.md` — C-000118 to C-000257 added
- `SIL-PKG-002-PRODUCTION-CROSSWALK.md`
- `SIL-POLICY-REGISTRY.md` — no changes

**Labels:**
- References: OSHA-C, OSHA-GI, MSHA, Spec, Mfr, BP, company policy P-*nnnnnn*.
- "verified (Engineer, *source*, r1)" means I checked the text against the named authoritative source and confirmed applicability (Response 003 §9; PO Decision 003 §7).
- Everything else is unverified.

---

## 0. Review summary

| Disposition | Count | Records |
|---|---|---|
| Accept | 22 | H-HW-004, 005, 007, 008, 012–018, 023, 025–027, 031, 032, 034–038 |
| Accept with corrections | 15 | H-HW-001, 002, 003, 006, 009, 010, 011, 019, 020, 021, 022, 024, 028, 029, 030 |
| Proposed consolidation into a Package 001 canonical record (Architect decision) | 3 | H-HW-033 → H-BT-013; H-HW-039 → H-BT-031; H-HW-040 → H-BT-036 |
| New Engineer proposal | 1 | H-HW-041 Carbon monoxide from fuel-burning equipment |

**Totals:**
- **41** hazard records (H-HW-001 to H-HW-041). No identifier was retired.
- **140** new canonical controls, **C-000118 to C-000257**. Next available: **C-000258**.
- **27** existing controls reused across **18** Package 001 hazards (§4). That includes C-000114 to C-000117 for the hot work policies, and C-000054, C-000055 and C-000111 for eye and face protection.
- Every Architect control line is either a canonical control or merged into an equivalent one. Merges are noted under each record's "Review."

**Production crosswalk:**
- 12 production strings superseded, all relationships preserved.
- 7 more heat-stress strings proposed for supersession.
- All 7 C2 lines mapped.
- Details in the crosswalk file.

**Citations:** 18 provisions verified against authoritative text, plus 2 confirmed by subject only (§7). Two items corrected (E-1, E-2).

---

## 1. Engineering findings

| # | Finding | Effect |
|---|---|---|
| E-1 | **The construction standard has no 35 ft or 30-minute numbers.** 1926.352(e) requires additional fire watch personnel when normal precautions are insufficient, both during the work and for a sufficient period of time after completion. The 35 ft distance and the half-hour fire watch are general-industry text: 1910.252(a)(2)(iii)(A)–(B) requires fire watchers when combustible material is closer than 35 feet, and requires the watch to continue for at least a half hour after completion. | C-000114 and C-000115 rest on company policy P-000006 and P-000007, with 1910.252 as the general-industry basis. The library must not attribute 35 ft or 30 minutes to 1926 Subpart J. |
| E-2 | **Missing welding-circuit controls.** Under 1926.351(c)(2), pipelines containing gases or flammable liquids, and conduits containing electrical circuits, must not be used as a ground return. OSHA has issued an interpretation of "unattended" under 1926.351(d)(1) for electrode holders. | Added C-000157 (no pipeline or conduit return) and C-000159 (unattended electrode holder) to H-HW-011. |
| E-3 | **Missing cylinder transport control.** OSHA's interpretation of 1926.350(a)(6) states that regulators must be removed and valve protection caps put on before cylinders are moved, unless the cylinders are on a special carrier intended for that purpose. This applies when cylinders are hoisted. | Added C-000188 to H-HW-022 — relevant to crane-hoisting welding carts. |
| E-4 | **Missing confined-space gas control.** Torches and hoses left in tanks or vessels during breaks are a known source of oxygen enrichment and fuel accumulation. | Added C-000177 to H-HW-004, H-HW-019 and H-HW-020 (basis 1926.353(b), unverified). |
| E-5 | **Missing hazard: carbon monoxide** from engine-driven welders, generators and fuel-fired preheating indoors. | Proposed H-HW-041. |
| E-6 | **Recognition gap: heating is hot work.** Subpart J covers welding, cutting *and heating*. Preheat, rosebud heating, heat or flame straightening and torch thawing don't appear in the Architect's recognition library. | Added to §2. They establish hot work (P-000006 to P-000008) and the flame-method relationships (H-HW-007, H-HW-024, H-HW-025) without establishing welding. |
| E-7 | **Collision: "welding leads" vs. lead exposure.** "Lead(s)" must not establish H-HW-016. | Collision rule added (§2). |
| E-8 | **Duplicate mechanisms with Package 001 canonical records:** H-HW-033 duplicates H-BT-013 (structural instability); H-HW-039 duplicates H-BT-031 (connection integrity); H-HW-040 duplicates H-BT-036 (pressure-boundary integrity). Under Response 001 Decision 2, canonical records should be generalized rather than duplicated. | Proposed consolidations (P2-U3). Records stay active until the Architect decides. If accepted, the H-HW identifiers are retired and never reused, and their controls become relationship-specific controls on the H-BT records. |
| E-9 | **Production control conflicts with H-HW-012.** Production C5 says "Wear appropriate respirator (N95 minimum, P100 for high exposure)." The Architect correctly directs that no N95 or other respirator be prescribed universally without evaluating contaminants and exposure. | C-000164 is not equivalent to C5. Production unchanged; flagged for a future approved milestone (P2-U12). |
| E-10 | **Handheld grinder face shield (H-HW-029).** The Architect's control makes a face shield mandatory for all handheld grinding and abrasive cutting. Abrasive wheel regulations address eye protection; a universal face shield is usually a manufacturer instruction or company rule. | Kept as C-000221 with its basis **pending** (P2-U2). |
| E-11 | **Grinding as hot work (B-12).** Under P-000008 (permit for all hot work, no shop exemption), classifying spark-producing metal grinding as hot work puts permit, 35 ft clearance and 30-minute fire watch on every metal grinding step. That's consistent with the production library, where T1 already includes grinding. It's a significant operational commitment. | **PO confirmation required (P2-U1).** |
| E-12 | **H-BT-032 wording is bolting-specific** ("during overhead bolting"). Package 002 reuses it for overhead welding, cutting and grinding, where slag also enters the ears. | Proposed generalization: "Debris or slag falling into eyes or ears during overhead work" (P2-U4). |
| E-13 | **Heat stress is not a hot-work-specific hazard.** Nine production strings across T1, T14, T21, T28, T30, T34, T35, T38 and T42 describe the same mechanism. | H-HW-021 is written as a neutral canonical "Heat stress" record. Supersession of all nine proposed (P2-U5). |
| E-14 | **Acetylene pressure limit missing.** An acetylene limit of 15 psig is a long-standing requirement in general industry and consensus standards (unverified here). | Proposed C-000200 with a numeric value. This needs a decision on numeric user-facing text (P2-U7). |
| E-15 | **Constant-pressure switch on hand-held grinders.** This may be a construction requirement (1926.300(d), unverified). | Proposed C-000220 (P2-U8). |
| E-16 | **Production C2 keywords are broader than hot work** (fire, flammable, combustible, ignition), so production shows the permit and fire watch for non-hot-work steps such as applying a flammable coating. | Hot work policy controls inherit C2's relationship only for hot work recognition (Crosswalk §C). An intended behavior change. |

---

## 2. Recognition review

The Architect recognition library (Package 002 §2) is accepted, with these additions. All matching is whole-term (Package 001 §1).

**Added recognition terms (proposed)**

| Group | Terms | Establishes |
|---|---|---|
| Heating (E-6) | preheat, pre-heat, postheat, rosebud, heat straighten, flame straighten, torch heat, thaw with torch | Hot work and flame-method records. **Not** welding or cutting. |
| Weld | run rod, run 7018, 6010, 6011, 7018, 7024, E70 (electrode classifications, only with weld context), hot pass, tack up, stinger, slag chipping, chipping hammer | Weld (ACT-0015); chipping → H-HW-029 |
| Thermal cut | arc-air, air arc, scarf, wash (bolts) with torch, burn out (bolt), plasma gouge, thermal lance, burning bar | Cut (ACT-0016, thermal) |
| Abrasive cut / grind | zip wheel, zip cut, cut-off zip, 4-1/2 grinder, 7 inch grinder, 9 inch grinder, hand grinder, flap wheel, knot wheel, strip paint with grinder | Cut (abrasive) / Grind |
| Brand aliases (recognition only; PO to confirm usage — P2-U14) | Lincoln, Miller, Hypertherm, Arcair, Broco | Work means only; never in user-facing controls |

**Added collision rules**
- **"Lead" / "leads"** in a welding context (welding leads, stinger lead, ground lead, run leads) does **not** establish lead exposure (E-7).
- **"Spot"** establishes welding only as "spot weld(ing)." "Spotter" never does. This matters because Adena uses spotters for telehandlers and trucks.
- **"Tack," "cap," "root," "fill," "bead"** establish welding only in weld phrases (tack weld, cap pass, root pass, fill pass, weld bead).
- **"Rod"** establishes welding only with weld context (weld rod, welding rod, electrode, run rod). Threaded rod, rebar and rod rigging don't.
- **"Gun"** establishes welding only as MIG gun or welding gun. Impact gun, nail gun and grease gun don't.
- **"Wire"** establishes welding only as welding wire or wire feed. Wire rope, electrical wire and wire brush are handled separately (wire brush → H-HW-029 and H-BT-010).
- **"Chop saw"** establishes abrasive cutting only with an abrasive cue. Cold saws, dry-cut saws and carbide-blade chop saws are mechanical cutting with no default hot work, as in Architect scenario 27.
- **"Heat"** alone does not establish hot work; "heat stress" is a separate concept.
- **"Arc"** alone establishes nothing; "arc flash" refers to electrical work (Architect rule).

---

## 3. Reconciled hazard records

Each control shows its canonical ID. `[condition]` marks a relationship-specific condition. The Architect's original wording is preserved in `SIL-PKG-002.md`.

**H-HW-001 — Fire from hot work ignition sources**
- Applicability: Explicit for all recognized hot work (B-12 classification, pending PO confirmation P2-U1)
- Hazard: Fire from hot work sparks, slag, flame or heat.
- Controls:
  - `C-000114` Remove combustible materials within 35 feet of hot work. Where removal is not possible, protect them with suitable fire-resistant barriers. Increase the protected area where required.
  - `C-000115` Maintain fire watch during hot work and for at least 30 minutes after completion, or longer where required.
  - `C-000116` Obtain and review the required hot work permit before beginning hot work. Comply with all permit conditions.
  - `C-000118` Keep a charged, inspected fire extinguisher suited to the hazard within immediate reach of the hot work.
  - `C-000119` Use fire-resistant blankets, curtains or shields to contain sparks and slag.
  - `C-000120` Direct sparks, slag and particles away from people, equipment and combustibles.
  - `C-000121` Stop hot work if the required fire protection cannot be maintained, or if concealed ignition hazards cannot be assessed and controlled.
  - `C-000126` `[fire watch duties]` Assign a designated fire watch trained in the expected fire hazards and in the extinguishing equipment provided.
  - `C-000128` `[fire watch duties]` Keep communication between the fire watch and the hot work crew; the fire watch can stop the work.
  - `C-000129` `[fire watch duties]` Do not give the fire watch other duties that interfere with watching.
  - `C-000130` `[fire watch duties]` Make sure the fire watch knows how to raise the alarm and start the site emergency response.
  - `C-000131` `[fire watch duties]` Fight a fire only if it is within your training, the equipment available and a safe escape — otherwise raise the alarm.
- Refs: P-000006 to P-000008; OSHA-C 1926.352(a)–(e); OSHA-GI 1910.252(a)
- Review: Accept. Supersedes T1 'Fire hazard / ignition source exposure', T1 'Combustible material nearby', T35 'Fire from torch application near combustibles'.

**H-HW-002 — Fire in concealed or adjacent spaces**
- Applicability: Conditional: walls, floors, penetrations, cavities, insulated assemblies, concealed combustibles; elevated hot work
- Hazard: Fire spreading to concealed or adjacent spaces.
- Controls:
  - `C-000122` Check and protect the opposite side of walls, floors and ceilings before starting hot work.
  - `C-000123` Cover or protect openings, cracks and penetrations where sparks or slag could travel.
  - `C-000124` Inspect and protect concealed combustibles in walls, floors, cavities and insulation.
  - `C-000127` Make sure the fire watch can see all affected areas; add fire watch personnel where one person cannot.
  - `C-000121` Stop hot work if the required fire protection cannot be maintained, or if concealed ignition hazards cannot be assessed and controlled.
- Refs: P-000006; OSHA-C 1926.352(f)
- Review: Accept with corrections: 'additional fire watch' and 'stop' controls merged into canonical fire-watch and stop controls.

**H-HW-003 — Delayed ignition or smoldering fire**
- Applicability: Explicit for all hot work; ranks higher with concealed or combustible materials
- Hazard: Delayed ignition or smoldering fire after hot work.
- Controls:
  - `C-000115` Maintain fire watch during hot work and for at least 30 minutes after completion, or longer where required.
  - `C-000117` `[if required by project, permit or standard]` Continue fire monitoring for any additional period required by the project, permit or applicable standard.
  - `C-000125` Before releasing the fire watch, check all affected areas for smoke, heat and smoldering material.
  - `C-000126` Assign a designated fire watch trained in the expected fire hazards and in the extinguishing equipment provided.
- Refs: P-000007; OSHA-GI 1910.252(a)(2)(iii)(B)
- Review: Accept with corrections: 'do not leave unattended until obligations are complete' duplicates C-000115 and is dropped.

**H-HW-004 — Explosion or fire from flammable atmospheres**
- Applicability: Conditional: flammable gases, vapors, fuels or hazardous atmospheres
- Hazard: Explosion or fire when hot work ignites a flammable atmosphere.
- Controls:
  - `C-000132` Identify flammable gas, vapor and fuel sources before hot work, and isolate or remove them.
  - `C-000133` Test the atmosphere with calibrated equipment where required, and keep monitoring where the exposure or permit requires.
  - `C-000134` Stop work and leave the area if atmospheric conditions become unsafe.
  - `C-000135` Never perform ordinary hot work in a flammable or explosive atmosphere.
  - `C-000177` `[if confined space]` Remove torches and gas hoses from confined spaces during breaks and at shift end; keep cylinders and welding machines outside.
- Refs: OSHA-C 1926.352(c)
- Review: Accept.

**H-HW-005 — Combustible dust ignition or explosion**
- Applicability: Conditional: combustible dust, dust collectors, enclosed process equipment
- Hazard: Combustible dust ignition or explosion.
- Controls:
  - `C-000136` Determine whether dust in the area is combustible before hot work.
  - `C-000137` Remove combustible dust accumulations by an approved cleaning method.
  - `C-000138` Isolate dust collectors and dust-producing equipment as required, and keep sparks out of ducts and collectors.
  - `C-000139` Do not start hot work until combustible dust hazards are controlled.
- Refs: OSHA-C 1926.352(c); NFPA 652 (unverified)
- Review: Accept.

**H-HW-006 — Burns from sparks, molten metal and slag**
- Applicability: Explicit for welding, thermal cutting, gouging and spark-producing grinding
- Hazard: Burns from sparks, molten metal and slag.
- Controls:
  - `C-000140` Wear heat-resistant gloves suited to the welding, cutting or grinding task.
  - `C-000141` Wear flame-resistant protective clothing suited to the heat and spark exposure; avoid garments that can melt or ignite.
  - `C-000142` Cover exposed skin against sparks, molten metal and arc radiation.
  - `C-000143` Arrange clothing so sparks and slag cannot get trapped — close pockets, collars and cuffs.
  - `C-000144` Position your body out of the spark and slag path.
  - `C-000047` `[if elevated]` Barricade or control the area below; no one works below without protection.
- Refs: OSHA-C 1926.95 (unverified)
- Review: Accept with corrections: clothing controls shared with H-HW-038. Supersedes T1 'Thermal burns…' (split with H-HW-007, H-HW-008).

**H-HW-007 — Direct flame burns**
- Applicability: Conditional: oxy-fuel, brazing, soldering, preheating, heat straightening and other flame methods
- Hazard: Burns from direct torch flame.
- Controls:
  - `C-000145` Keep hands and body out of the flame path, and point the torch away from people and equipment.
  - `C-000146` Shut the torch down by the manufacturer's procedure when work stops; never leave a lit torch unattended.
- Refs: Mfr
- Review: Accept.

**H-HW-008 — Contact burns from heated materials**
- Applicability: Explicit for welding, thermal cutting, brazing, soldering and heated workpieces
- Hazard: Burns from touching recently heated material.
- Controls:
  - `C-000147` Let heated material cool, or handle it with tools or heat-resistant gloves.
  - `C-000148` Mark or isolate recently heated material so others do not touch it.
- Refs: BP
- Review: Accept.

**H-HW-009 — Eye and skin injury from welding radiation**
- Applicability: Conditional: arc welding, plasma cutting, carbon arc gouging; filtered protection also for flame methods
- Hazard: Eye and skin injury from arc or flame radiation (welder's flash).
- Controls:
  - `C-000149` Use a welding helmet or filtered eye protection with the correct shade for the process and conditions.
  - `C-000054` `[under welding helmet where required]` Wear safety glasses.
  - `C-000142` Cover exposed skin against sparks, molten metal and arc radiation.
  - `C-000150` Inspect helmets, filter lenses and cover lenses before use; replace damaged parts.
- Refs: OSHA-C 1926.102 (unverified)
- Review: Accept. Supersedes T1 'Arc flash / eye injury from UV exposure' — production wording collides with electrical arc flash (P2-U13).

**H-HW-010 — Radiation exposure to nearby personnel**
- Applicability: Conditional: radiation-producing work near others
- Hazard: Arc radiation reaching nearby workers.
- Controls:
  - `C-000151` Set welding screens or curtains to shield nearby workers from direct and reflected radiation, without blocking ventilation.
  - `C-000152` Keep unprotected people out of the welding and cutting area.
- Refs: OSHA-C 1926.351 shielding provision
- Review: Accept with corrections: screen placement and ventilation combined into one control.

**H-HW-011 — Electrical shock from the welding circuit**
- Applicability: Conditional: electric arc welding, plasma cutting, arc gouging (distinct from H-BT-026 supply-side shock)
- Hazard: Electrical shock from the welding circuit.
- Controls:
  - `C-000153` Inspect welding leads, electrode holders, connectors and insulation before use; remove damaged equipment from service.
  - `C-000154` Keep gloves and clothing dry, and do not touch the electrode or live parts with skin or wet gloves.
  - `C-000155` `[if wet or conductive location]` Insulate yourself from the work and from ground in wet or conductive locations.
  - `C-000156` Attach the work clamp to the workpiece as close to the weld as practical.
  - `C-000157` Never use pipelines carrying gas or flammable liquid, or electrical conduit, as the welding return.
  - `C-000158` Keep welding current out of bearings, rigging, hoists and fall protection — they must not become part of the circuit.
  - `C-000159` When leaving an electrode holder, remove the electrode and place the holder where it cannot contact people or conductive objects.
  - `C-000160` Shut off and disconnect the welding machine before servicing or adjusting it.
- Refs: OSHA-C 1926.351
- Review: Accept with corrections: added no-pipeline/conduit return (1926.351(c)(2)) and unattended-holder controls. Supersedes T1 'Electrical shock from welding equipment' (split with H-BT-026).

**H-HW-012 — Welding and thermal cutting fume inhalation**
- Applicability: Explicit for welding, thermal cutting, gouging, brazing, soldering
- Hazard: Inhalation of welding or cutting fume.
- Controls:
  - `C-000161` Identify base metals, coatings and consumables before hot work, and review the SDS.
  - `C-000162` Keep your head out of the fume plume.
  - `C-000163` Use local exhaust or other effective ventilation placed to capture fume at the source.
  - `C-000164` Where ventilation alone is not enough, use respiratory protection selected from an exposure assessment, under the respiratory protection program.
- Refs: OSHA-C 1926.353 (unverified); 1926.103
- Review: Accept. Supersedes T1 'Weld fume / smoke inhalation'. No universal respirator prescribed (production C5 conflict, E-9).

**H-HW-013 — Hexavalent chromium exposure**
- Applicability: Conditional: thermal work on stainless steel, chromium alloys or chromium-containing coatings/consumables
- Hazard: Hexavalent chromium exposure.
- Controls:
  - `C-000161` Identify base metals, coatings and consumables before hot work, and review the SDS.
  - `C-000163` Use local exhaust or other effective ventilation placed to capture fume at the source.
  - `C-000165` Evaluate exposure to the specific contaminant (e.g. hexavalent chromium, lead, cadmium, manganese) as required.
  - `C-000164` Where ventilation alone is not enough, use respiratory protection selected from an exposure assessment, under the respiratory protection program.
  - `C-000166` Follow the hygiene and contamination controls the exposure requires — wash before eating, and keep work clothing separate.
- Refs: OSHA-C 1926.1126; OSHA-GI 1910.1026 (unverified)
- Review: Accept.

**H-HW-014 — Zinc oxide fume exposure**
- Applicability: Conditional: thermal work on galvanized or zinc-coated material
- Hazard: Zinc oxide fume exposure (metal fume fever).
- Controls:
  - `C-000161` Identify base metals, coatings and consumables before hot work, and review the SDS.
  - `C-000167` Remove coatings only where the procedure allows, with controls for the removal exposure.
  - `C-000163` Use local exhaust or other effective ventilation placed to capture fume at the source.
  - `C-000164` Where ventilation alone is not enough, use respiratory protection selected from an exposure assessment, under the respiratory protection program.
  - `C-000168` Stop and report symptoms such as fever, chills or a metallic taste after hot work on galvanized metal.
- Refs: BP
- Review: Accept.

**H-HW-015 — Manganese exposure**
- Applicability: Conditional: manganese-containing consumables or materials (not established by a grinder alone)
- Hazard: Manganese fume exposure.
- Controls:
  - `C-000161` Identify base metals, coatings and consumables before hot work, and review the SDS.
  - `C-000163` Use local exhaust or other effective ventilation placed to capture fume at the source.
  - `C-000165` Evaluate exposure to the specific contaminant (e.g. hexavalent chromium, lead, cadmium, manganese) as required.
  - `C-000164` Where ventilation alone is not enough, use respiratory protection selected from an exposure assessment, under the respiratory protection program.
- Refs: BP (unverified exposure limits)
- Review: Accept.

**H-HW-016 — Lead exposure**
- Applicability: Conditional: thermal or abrasive work on lead-containing coatings or materials
- Hazard: Lead exposure from cutting, welding or grinding lead-coated surfaces.
- Controls:
  - `C-000161` Identify base metals, coatings and consumables before hot work, and review the SDS.
  - `C-000169` Follow the lead exposure-control procedure, including protective clothing, before cutting, welding or grinding lead-coated surfaces.
  - `C-000167` Remove coatings only where the procedure allows, with controls for the removal exposure.
  - `C-000165` Evaluate exposure to the specific contaminant (e.g. hexavalent chromium, lead, cadmium, manganese) as required.
  - `C-000164` Where ventilation alone is not enough, use respiratory protection selected from an exposure assessment, under the respiratory protection program.
  - `C-000166` Follow the hygiene and contamination controls the exposure requires — wash before eating, and keep work clothing separate.
- Refs: OSHA-C 1926.62; OSHA-GI 1910.1025 (unverified)
- Review: Accept. Production T18 / T39 'Lead or asbestos…' retained (combined string).

**H-HW-017 — Cadmium exposure**
- Applicability: Conditional: cadmium-containing or cadmium-plated material
- Hazard: Cadmium fume exposure.
- Controls:
  - `C-000161` Identify base metals, coatings and consumables before hot work, and review the SDS.
  - `C-000170` Do not begin thermal work on cadmium-containing material until an exposure-control procedure is in place.
  - `C-000163` Use local exhaust or other effective ventilation placed to capture fume at the source.
  - `C-000164` Where ventilation alone is not enough, use respiratory protection selected from an exposure assessment, under the respiratory protection program.
  - `C-000166` Follow the hygiene and contamination controls the exposure requires — wash before eating, and keep work clothing separate.
- Refs: OSHA-C 1926.1127; OSHA-GI 1910.1027 (unverified)
- Review: Accept.

**H-HW-018 — Toxic decomposition products from coatings or chemicals**
- Applicability: Conditional: coatings, solvents, adhesives, residues
- Hazard: Toxic gases from heating coatings, residues or solvents.
- Controls:
  - `C-000161` Identify base metals, coatings and consumables before hot work, and review the SDS.
  - `C-000171` Remove residues, solvents and adhesives by an approved method before heating.
  - `C-000172` Keep chlorinated solvent vapors away from welding and other arc or flame operations.
  - `C-000165` Evaluate exposure to the specific contaminant (e.g. hexavalent chromium, lead, cadmium, manganese) as required.
  - `C-000173` Do not proceed on unidentified coatings where the exposure cannot be assessed.
- Refs: OSHA-C 1926.354 (unverified)
- Review: Accept.

**H-HW-019 — Oxygen deficiency from shielding or purge gases**
- Applicability: Conditional: shielding, purge or inert gas in enclosed or poorly ventilated areas
- Hazard: Oxygen deficiency from shielding or purge gas.
- Controls:
  - `C-000133` Test the atmosphere with calibrated equipment where required, and keep monitoring where the exposure or permit requires.
  - `C-000174` Provide ventilation adequate for the gases and fume in enclosed or poorly ventilated areas.
  - `C-000175` Direct purge gas discharge away from occupied areas, and shut off gas when not in use.
  - `C-000176` `[if confined space]` Follow the confined-space entry and rescue procedure where it applies.
  - `C-000177` `[if confined space]` Remove torches and gas hoses from confined spaces during breaks and at shift end; keep cylinders and welding machines outside.
  - `C-000134` Stop work and leave the area if atmospheric conditions become unsafe.
- Refs: OSHA-C Subpart AA (unverified)
- Review: Accept with corrections: added removal of hoses and torches from confined spaces during breaks.

**H-HW-020 — Oxygen enrichment**
- Applicability: Conditional: oxygen equipment in enclosed or poorly ventilated areas
- Hazard: Oxygen enrichment increasing fire intensity.
- Controls:
  - `C-000178` Check oxygen equipment for leaks before use.
  - `C-000179` Never use oxygen for ventilation, cooling or blowing off clothing.
  - `C-000174` Provide ventilation adequate for the gases and fume in enclosed or poorly ventilated areas.
  - `C-000133` Test the atmosphere with calibrated equipment where required, and keep monitoring where the exposure or permit requires.
  - `C-000177` `[if confined space]` Remove torches and gas hoses from confined spaces during breaks and at shift end; keep cylinders and welding machines outside.
  - `C-000134` Stop work and leave the area if atmospheric conditions become unsafe.
- Refs: BP; ANSI Z49.1 (unverified)
- Review: Accept with corrections: added hose and torch removal from confined spaces.

**H-HW-021 — Heat stress**
- Applicability: Conditional: hot environments, prolonged thermal work, restrictive protective clothing, enclosed areas
- Hazard: Heat stress and heat illness.
- Controls:
  - `C-000182` Provide drinking water, rest breaks and shade or cooling for recovery.
  - `C-000183` Adjust work and rest periods to the heat, workload and protective clothing.
  - `C-000184` Watch workers for signs of heat illness; stop work at the first signs.
  - `C-000185` For suspected heat stroke, cool the person rapidly and call for emergency help.
- Refs: BP
- Review: Accept with corrections: neutral canonical text; heat-stroke response added (Response 002 §8). Proposed canonical for all production heat-stress strings (P2-U5).

**H-HW-022 — Compressed gas cylinder rupture or projectile**
- Applicability: Conditional: cylinder handling, transport, storage or use
- Hazard: Cylinder rupture or valve break-off turning the cylinder into a projectile.
- Controls:
  - `C-000186` Secure cylinders upright against falling or displacement.
  - `C-000187` `[if storage or transport]` Keep valve protection caps in place on cylinders in storage or transport.
  - `C-000188` `[if moving]` Before moving cylinders, remove regulators and install valve caps unless the cylinders are secured on a carrier designed for that purpose.
  - `C-000189` `[if moving]` Move cylinders with a cylinder cart or approved equipment; never roll, drag or use cylinders as rollers or supports.
  - `C-000190` Never lift cylinders by their valve caps.
- Refs: OSHA-C 1926.350(a)
- Review: Accept with corrections: regulator-removal-before-moving (1926.350(a)(6)) added. Supersedes T1 'Compressed gas hazard (cylinders)' (split with H-HW-023, H-HW-024).

**H-HW-023 — Cylinder damage from heat, impact or electrical contact**
- Applicability: Conditional: cylinders near hot work, moving equipment or welding circuits
- Hazard: Cylinder damage from heat, impact or an arc strike.
- Controls:
  - `C-000191` Keep cylinders away from flame, sparks and slag, or shield them.
  - `C-000192` Protect cylinders from vehicle and equipment impact.
  - `C-000193` Keep cylinders out of welding circuits; never strike an arc on a cylinder.
  - `C-000194` `[if storage]` Separate stored oxygen cylinders from fuel-gas cylinders and combustibles as required.
  - `C-000195` Follow gas-specific cylinder orientation rules, such as acetylene valve end up.
- Refs: OSHA-C 1926.350(a)(10), (b)(1)
- Review: Accept. Storage separation applies to storage only, as the Architect noted.

**H-HW-024 — Fuel gas leakage and ignition**
- Applicability: Conditional: fuel gas torches and equipment
- Hazard: Fuel gas leak and ignition.
- Controls:
  - `C-000196` Inspect hoses, regulators, connections and torches before use; shut off and remove defective equipment from service.
  - `C-000197` Use equipment rated for the gas and its operating pressure.
  - `C-000198` Leak-test connections with an approved method — never with a flame.
  - `C-000199` Route gas hoses away from hot surfaces, sharp edges, slag and vehicle traffic.
  - `C-000200` `[if acetylene]` Do not use acetylene above 15 psig.
- Refs: OSHA-C 1926.350(f)
- Review: Accept with corrections: acetylene pressure limit proposed (P2-U7).

**H-HW-025 — Flashback or sustained backfire**
- Applicability: Conditional: oxy-fuel and other fuel gas systems
- Hazard: Flashback or sustained backfire into the torch, hoses or regulators.
- Controls:
  - `C-000201` Use check valves and flashback arrestors compatible with the equipment, as required — they are not interchangeable.
  - `C-000202` Keep torch tips clean and unobstructed.
  - `C-000203` Set operating pressures to the manufacturer's settings.
  - `C-000204` Purge lines and light the torch by the manufacturer's procedure, using an approved striker.
  - `C-000205` If a flashback or sustained backfire occurs, shut down by the prescribed procedure and inspect the equipment before reuse.
- Refs: Mfr; ANSI Z49.1 (unverified)
- Review: Accept.

**H-HW-026 — Oxygen-system ignition from contamination**
- Applicability: Conditional: oxygen cylinders, regulators, hoses and fittings
- Hazard: Fire in oxygen equipment from oil, grease or contamination.
- Controls:
  - `C-000206` Keep oil, grease and contaminants off oxygen cylinders, regulators, hoses and fittings; do not handle them with oily hands or gloves.
  - `C-000207` Use components rated for oxygen service.
  - `C-000208` Remove contaminated oxygen equipment from service for cleaning or replacement.
  - `C-000209` Open cylinder valves slowly and as the gas-specific instructions require.
- Refs: OSHA-C 1926.350 (unverified paragraph)
- Review: Accept.

**H-HW-027 — Abrasive wheel rupture**
- Applicability: Conditional: bonded grinding and cut-off wheels
- Hazard: Grinding or cut-off wheel breaking apart at speed.
- Controls:
  - `C-000210` Inspect wheels for cracks, chips or damage before mounting and use; ring-test where the wheel type allows.
  - `C-000211` Use only wheels rated at or above the tool's maximum speed.
  - `C-000212` Use the correct wheel type, size, arbor and mounting parts for the tool.
  - `C-000213` Use the manufacturer's correct guard for the operation, installed and positioned; never remove it to reach tight areas.
  - `C-000214` Do not side-grind or side-load wheels not designed for it.
  - `C-000215` Mount and start new wheels by the manufacturer's instructions, standing out of line with the wheel during the first run.
- Refs: OSHA-C 1926.303(b), (c)(7); ANSI B7.1 (unverified)
- Review: Accept; kept distinct from H-BT-006 as the Architect proposed.

**H-HW-028 — Contact with rotating abrasive wheels**
- Applicability: Explicit for grinding and abrasive cutting
- Hazard: Cuts from contact with a spinning wheel.
- Controls:
  - `C-000213` Use the manufacturer's correct guard for the operation, installed and positioned; never remove it to reach tight areas.
  - `C-000216` Use the side handle, and keep two hands on tools designed for two-handed use.
  - `C-000217` Keep hands and body clear of the spinning wheel and the cutting path.
  - `C-000218` Clamp or support the workpiece before grinding or cutting; do not hand-hold small pieces you cannot control.
  - `C-000219` Let the wheel stop before setting the tool down.
  - `C-000220` Use grinders with a constant-pressure switch where required, and never lock or tape the switch on.
- Refs: OSHA-C 1926.303(b); 1926.300(d) (unverified)
- Review: Accept with corrections: constant-pressure switch control proposed (P2-U8).

**H-HW-029 — Flying particles, sparks and fragments**
- Applicability: Explicit for grinding, abrasive cutting, gouging, slag chipping and other particle-producing work
- Hazard: Flying particles, sparks and fragments.
- Controls:
  - `C-000054` Wear safety glasses.
  - `C-000055` Add a face shield over safety glasses or goggles where debris or fragments can reach the face — a face shield does not replace eye protection.
  - `C-000221` `[if handheld grinding or abrasive cutting]` For handheld grinding and abrasive cutting, wear a face shield over safety glasses.
  - `C-000111` `[if particles can get around glasses]` Wear goggles instead of safety glasses where falling or airborne debris can get around glasses.
  - `C-000120` Direct sparks, slag and particles away from people, equipment and combustibles.
  - `C-000222` `[if others nearby]` Set barriers where nearby workers could be hit by particles or sparks.
  - `C-000223` `[if wire wheel or brush]` Inspect wire wheels and brushes for loose or broken wires before use.
- Refs: OSHA-C 1926.102; 1926.303(c) eye protection (unverified)
- Review: Accept with corrections: the handheld face-shield requirement needs a basis (P2-U2). Supersedes T1 'Flying particles and sparks'.

**H-HW-030 — Unexpected startup during wheel changes or adjustment**
- Applicability: Conditional: servicing, adjusting or changing attachments on abrasive tools
- Hazard: Tool starting unexpectedly during a wheel change or adjustment.
- Controls:
  - `C-000224` Unplug the tool, remove the battery or shut off and bleed the air before changing wheels or attachments.
  - `C-000225` Check that the switch is off and works correctly before plugging in or returning the tool to service.
- Refs: Mfr
- Review: Accept with corrections: the three isolation lines combined into one control.

**H-HW-031 — Uncontrolled workpiece movement**
- Applicability: Conditional: cutting or grinding unsecured material
- Hazard: Workpiece moving, rolling or binding during cutting or grinding.
- Controls:
  - `C-000218` Clamp or support the workpiece before grinding or cutting; do not hand-hold small pieces you cannot control.
  - `C-000217` Keep hands and body clear of the spinning wheel and the cutting path.
  - `C-000226` Support the material so the cut does not close onto the wheel or blade.
- Refs: BP
- Review: Accept.

**H-HW-032 — Falling or uncontrolled movement of severed material**
- Applicability: Conditional: cutting structural members, piping, attachments or elevated material
- Hazard: Cut-free material falling, swinging or springing.
- Controls:
  - `C-000230` Determine how the piece will move when cut free, and support or rig it before completing the cut.
  - `C-000231` Set an exclusion zone around the movement and drop area, and keep everyone out of the line of fire.
  - `C-000232` Follow the approved cutting and removal sequence, coordinating with the people controlling the load.
  - `C-000233` `[if elevated]` Contain falling slag, sparks and cut-off pieces with blankets, pans or catch protection.
- Refs: BP
- Review: Accept; kept distinct from H-BT-018 and H-BT-014, as the Architect proposed.

**H-HW-033 — Structural instability following cutting or weld removal**
- Applicability: Conditional: cutting or removing load-bearing members, connections, braces or structural welds
- Hazard: Structural instability or collapse after cutting or removing structural elements.
- Controls:
  - `C-000234` Confirm authorization and the approved sequence before cutting or removing structural members, connections, braces or welds.
  - `C-000235` Install required supports or bracing before cutting.
  - `C-000236` Stop work if unexpected structural movement occurs.
- Refs: BP
- Review: **Proposed consolidation into H-BT-013** (same mechanism; P2-U3). Kept active until the Architect decides.

**H-HW-034 — Explosion during hot work on containers or process equipment**
- Applicability: Conditional: tanks, drums, vessels, piping or equipment that contains or contained hazardous material
- Hazard: Explosion when heating, cutting or welding a container or equipment with residual contents.
- Controls:
  - `C-000237` Identify current and previous contents before hot work; never assume an empty container is safe.
  - `C-000238` Isolate, drain, clean, purge or fill the container by the approved procedure before hot work.
  - `C-000133` Test the atmosphere with calibrated equipment where required, and keep monitoring where the exposure or permit requires.
  - `C-000239` Vent hollow spaces and containers before heating, cutting or welding.
  - `C-000240` Never weld or cut sealed or unidentified containers.
  - `C-000241` Hot tapping or welding on in-service systems needs separate qualified engineering authorization — ordinary hot work controls do not cover it.
- Refs: OSHA-C 1926.352(i); OSHA-GI 1910.252(a)(3)(ii)
- Review: Accept. Production T30 'Explosion or fire from flammable residue' retained (vessel scope beyond hot work).

**H-HW-035 — Release of hazardous process contents or stored energy**
- Applicability: Conditional: thermal cutting or welding on process piping, vessels or connected equipment
- Hazard: Release of process contents or stored energy during hot work.
- Controls:
  - `C-000242` Follow the approved isolation and energy-control procedure, and verify the safe state before work.
  - `C-000243` Control residual pressure, temperature and chemical exposure before opening or heating the system.
  - `C-000241` Hot tapping or welding on in-service systems needs separate qualified engineering authorization — ordinary hot work controls do not cover it.
- Refs: Site procedure; flange / line-break cross-reference (Package 001 §2 rule 6)
- Review: Accept. Line-break requirements resolve through the cross-reference rule; no duplicate records.

**H-HW-036 — Thermal damage to personal fall protection equipment**
- Applicability: Conditional: elevated hot work
- Hazard: Fall protection equipment burned, melted or weakened by hot work.
- Controls:
  - `C-000244` Use fall protection equipment rated for the hot work exposure — a leading-edge rating alone is not enough.
  - `C-000245` Keep lanyards, SRLs, harness webbing and lifelines away from sparks, slag and hot surfaces, using manufacturer-approved protection.
  - `C-000246` Inspect fall protection for burns or melting after hot work exposure; remove damaged equipment from service.
  - `C-000158` Keep welding current out of bearings, rigging, hoists and fall protection — they must not become part of the circuit.
- Refs: Mfr
- Review: Accept.

**H-HW-037 — Thermal damage to rigging and lifting equipment**
- Applicability: Conditional: hot work near slings, hoists or suspended loads
- Hazard: Rigging or lifting equipment weakened by heat or welding current.
- Controls:
  - `C-000247` Keep sparks, flame and slag off slings and hoists; use approved protection or rigging rated for the temperature.
  - `C-000248` Inspect exposed rigging before further use; remove heat-damaged rigging from service.
  - `C-000158` Keep welding current out of bearings, rigging, hoists and fall protection — they must not become part of the circuit.
- Refs: Mfr; ASME B30 (unverified)
- Review: Accept.

**H-HW-038 — Ignition of clothing or protective equipment**
- Applicability: Explicit for welding, thermal cutting, gouging, spark-producing grinding
- Hazard: Clothing or protective equipment catching fire.
- Controls:
  - `C-000141` Wear flame-resistant protective clothing suited to the heat and spark exposure; avoid garments that can melt or ignite.
  - `C-000249` Keep clothing free of oil, grease and flammable contamination.
  - `C-000143` Arrange clothing so sparks and slag cannot get trapped — close pockets, collars and cuffs.
  - `C-000250` Replace burned or damaged protective clothing.
- Refs: BP
- Review: Accept; shares canonical clothing controls with H-HW-006.

**H-HW-039 — Structural weld failure**
- Applicability: Inferred: load-bearing structural welding and weld repair
- Hazard: Structural welded connection failing from incorrect procedure, fit-up or inspection.
- Controls:
  - `C-000251` Follow the approved drawings and welding procedure, using qualified welders where required.
  - `C-000252` Verify joint preparation, fit-up and any required preheat before welding.
  - `C-000253` Keep required temporary supports in place until the welded connection is accepted.
  - `C-000254` Complete the required inspection before the welded connection is loaded.
  - `C-000255` Do not modify structural members without authorization.
- Refs: Spec — AWS D1.1 (unverified)
- Review: **Proposed consolidation into a generalized H-BT-031** ('Structural connection failure from incorrect installation', bolted or welded; P2-U3).

**H-HW-040 — Pressure-boundary weld failure**
- Applicability: Inferred: welding or repair of pressure-containing piping, vessels and equipment
- Hazard: Pressure-boundary weld failing or leaking.
- Controls:
  - `C-000256` Follow the approved pressure-boundary welding or repair procedure, with qualified welders and the specified materials.
  - `C-000257` Complete required examination and testing, and keep isolation in place until the equipment is accepted for service.
  - `C-000241` Hot tapping or welding on in-service systems needs separate qualified engineering authorization — ordinary hot work controls do not cover it.
- Refs: Spec — ASME (unverified)
- Review: **Proposed consolidation into a generalized H-BT-036** ('Pressure-boundary joint failure or leak', bolted or welded; P2-U3).

**H-HW-041 — Carbon monoxide from fuel-burning equipment**
- Applicability: Conditional: engine-driven welders, generators, or fuel-fired preheating in enclosed or poorly ventilated areas
- Hazard: Carbon monoxide build-up from fuel-burning equipment.
- Controls:
  - `C-000180` Place engine-driven welders and generators outdoors, with exhaust directed away from work areas, openings and air intakes.
  - `C-000181` Monitor for carbon monoxide where fuel-burning equipment runs in or near enclosed areas.
  - `C-000174` Provide ventilation adequate for the gases and fume in enclosed or poorly ventilated areas.
- Refs: BP
- Review: **New — Engineer proposal** (P2-U6).


---

## 4. Reuse of Package 001 canonical hazards

Under Package 002 §6, these Package 001 records gain relationships to Weld, Cut and Grind. Their existing relationships are unchanged. Hazard text is unchanged, except for the H-BT-032 proposal (P2-U4).

| Canonical hazard | Package 002 relationship | Controls [relationship condition] |
|---|---|---|
| H-BT-002 | Weld / Cut / Grind — sharp edges, cut-offs, burrs | C-000004; C-000112 [if demolition, knife use or stainless steel lath]; C-000140 [if hot work (cumulative)]; C-000006 |
| H-BT-004 | Grind / abrasive Cut — wheel binding and kickback | C-000011; C-000227; C-000228 [if cut-off wheel]; C-000229; C-000226 |
| H-BT-006 | Tool and attachment failure outside wheel rupture | C-000014 |
| H-BT-007 | Handling cylinders, welding machines, heavy grinders | C-000019; C-000018 |
| H-BT-008 | Repetitive grinding | C-000020; C-000021 |
| H-BT-009 | Loss of balance when a grinder kicks | C-000022 |
| H-BT-010 | Grinders, wire wheels — entanglement | C-000025; C-000026; C-000223 [if wire wheel or brush] |
| H-BT-012 | Cutting structural steel — shifting members | C-000029; C-000030 |
| H-BT-013 | Cutting or removing structural elements | C-000031; C-000234; C-000235 |
| H-BT-014 | Cutting members that are rigged or suspended | C-000033; C-000036 |
| H-BT-017 | Elevated hot work | C-000039; C-000040 [if boom or scissor lift]; C-000041 [if boom or scissor lift]; C-000245 |
| H-BT-018 | Hot work at height — slag, cut-offs, tools | C-000047; C-000233; C-000046 [if tools at height]; C-000108 |
| H-BT-019 | Grinding, gouging, plasma, chipping | C-000049 |
| H-BT-020 | Grinders and chipping hammers | C-000020; C-000050; C-000051 |
| H-BT-025 | Air carbon arc gouging — compressed air | C-000067 [if pneumatic]; C-000068 [if pneumatic]; C-000070 [if pneumatic] |
| H-BT-026 | Welding machine and grinder supply power | C-000071; C-000072; C-000073 |
| H-BT-027 | Welding leads, gas hoses, grinder cords | C-000074; C-000075 [if aerial or scissor lift] |
| H-BT-032 | Overhead welding, cutting and grinding — debris and slag (generalization pending P2-U4) | C-000054; C-000111; C-000055; C-000088 |


The six grinder-specific controls from Package 002 §6 are:

| Architect control | Canonical control |
|---|---|
| Stable stance | C-000011 (reused) |
| Body out of the kickback path | C-000227 |
| Don't twist the wheel in the cut | C-000228 |
| Stop if the wheel binds, then follow the restart procedure | C-000229 |
| Support material so the cut doesn't close | C-000226, shared with H-HW-031 |

---

## 5. Company policy relationships

| Policy | Control | Package 002 relationships |
|---|---|---|
| P-000001 work gloves (steel) | C-000004 | H-BT-002 |
| P-000002 A4 cut gloves | C-000112 | H-BT-002 `[demolition, knife use, stainless steel lath]` |
| P-000003 / P-000004 fall protection, MEWP tie-off | C-000039 to C-000041 | H-BT-017 (elevated hot work) |
| P-000005 hearing | C-000049 | H-BT-019 |
| P-000006 combustible clearance | C-000114 | H-HW-001 |
| P-000007 fire watch | C-000115, C-000117 | H-HW-001, H-HW-003 |
| P-000008 hot work permit | C-000116 | H-HW-001 |

**Cumulative hand protection** (PO Decision 003 §6). Thermal gloves (C-000140) and cut protection (C-000004 / C-000112) are separate exposure mechanisms, so both apply where both exposures exist. Under the Architect's direction, the user-facing presentation must not tell crews to wear two pairs of gloves; it calls for hand protection that meets every requirement. Example: "Torch cut and remove an existing platform during demolition" shows C-000112 **and** C-000140.

---

## 6. Regression scenarios

Architect scenarios 1–28 are accepted unchanged (`SIL-PKG-002.md` §10).

**Engineer additions (proposed)**

| # | Scenario | Expected |
|---|---|---|
| 29 | Run 7018 on beam connections | Weld recognized from the electrode classification; welding circuit, fume, radiation and hot work |
| 30 | Preheat column splice with rosebud | Hot work, flame burns, fuel gas, flashback. **No** electric welding circuit. |
| 31 | Heat straighten bent beam flange | Hot work; flame methods |
| 32 | Hoist welding cylinders to second floor with crane | H-HW-022 with C-000188 (remove regulators and cap, unless on a carrier designed for it); H-BT-014 suspended load |
| 33 | Air arc gouge out bad weld | Gouging; H-BT-025 pneumatic controls; noise; radiation; fume; hot work |
| 34 | Run welding leads across walkway | H-BT-027 trip; **no** lead (metal) exposure |
| 35 | Grind paint off galvanized handrail before welding | H-HW-014 zinc, coating removal, grinding, hot work; no lead assumption |
| 36 | Torch cut lead-painted steel during demolition | H-HW-016 lead + C-000112 (A4) + C-000140 thermal + hot work + H-HW-032 severed material |
| 37 | Weld inside tank, break for lunch | C-000177 (remove torches and hoses); H-HW-019 / H-HW-020; confined-space procedure |
| 38 | Run engine-driven welder inside building | H-HW-041 carbon monoxide |
| 39 | Weld near spotter guiding telehandler | **No** spot-welding recognition from "spotter" |
| 40 | Cut threaded rod with bandsaw | **No** welding from "rod"; no default hot work |
| 41 | Change cut-off wheel on 4-1/2 grinder | H-HW-030 + C-000211 wheel speed + wheel match |
| 42 | Weld beam from boom lift with lanyard near the weld | H-HW-036 thermal PFAS damage + C-000158 stray current + C-000041 no tie-off to structure |
| 43 | Weld on natural gas pipeline | High-consequence specialized work (C-000241); no pipeline return (C-000157) |

---

## 7. Citation verification

Checked against authoritative text in this review. Every other reference in the package stays **unverified**.

| Provision | What it says (paraphrased) | Source checked | Used by |
|---|---|---|---|
| 1926.350(a)(1) | Valve protection caps in place and secured | osha.gov | C-000187 |
| 1926.350(a)(5) | Caps not used to lift cylinders | Official CFR text (GPO archive) | C-000190 |
| 1926.350(a)(6) | Remove regulators and cap before moving unless on a special carrier | OSHA interpretation 2004-03-30 | C-000188 |
| 1926.350(a)(7) | Cylinder truck, chain or steadying device | Official CFR text (GPO archive) | C-000186, C-000189 |
| 1926.350(a)(10) | Oxygen / fuel-gas storage separation | **Subject only** (OSHA interpretation index); values unverified | C-000194 |
| 1926.350(b)(1) | Cylinders kept clear of sparks, slag and flame, or shielded | osha.gov; eCFR | C-000191 |
| 1926.350(f) | Defective hose removed from service | osha.gov | C-000196 |
| 1926.351(c)(2) | No pipeline or conduit ground return | Official CFR text (GPO archive); osha.gov | C-000157 |
| 1926.351 shielding provision | Noncombustible or flameproof screens where practicable | osha.gov (paragraph letter to confirm) | C-000151 |
| 1926.351(d)(1) | Unattended electrode holders | **Subject only** (OSHA interpretation index) | C-000159 |
| 1926.352(b) | Confine heat, sparks and slag where hazards can't be removed | osha.gov | C-000119 |
| 1926.352(c) | No hot work where flammable compounds or heavy dust create a hazard | osha.gov | C-000135, C-000136, C-000139 |
| 1926.352(e) | Additional fire watch; "sufficient period" after (no fixed minutes) | Official CFR text (GPO archive) | E-1; C-000126 |
| 1926.352(f) | Precautions on the opposite side of walls and floors | osha.gov (end clause); NC DOL quotation | C-000122 |
| 1926.352(i) | Containers that held toxic or flammable substances filled with water or cleaned first | Official CFR text (GPO archive) | C-000237, C-000238 |
| 1910.252(a)(2)(iii)(A) | Fire watch where combustibles within 35 ft, among other conditions | eCFR; govinfo | E-1; C-000123, C-000124 |
| 1910.252(a)(2)(iii)(B) | Fire watcher equipment, training, alarm, "within capacity," half hour after | eCFR; govinfo | E-1; C-000126 to C-000131 |
| 1910.252(a)(3)(ii) | Vent hollow spaces before heating, cutting or welding | eCFR | C-000239 |
| 1926.303(b) | Abrasive wheel guards | osha.gov | C-000213 |
| 1926.303(c)(7) | Wheels inspected and ring-tested before mounting | CFR text (2008 edition copy); NIOSH checklist | C-000210 |

**Not verified and needing attention:**
- 1926.353 (ventilation; confined-space torch and hose removal)
- 1926.354 (preservative coatings)
- 1926.102 shade table
- 1926.300(d) switches
- 1926.62 / .1126 / .1127
- 1910.215(d)(1) (secondary source only)
- 1910.253(a)(2) (acetylene limit)
- all MSHA Part 56 welding and fire provisions
- NFPA 51B, ANSI Z49.1, ANSI B7.1, AWS, ASME

---

## 8. Unresolved items — Package 002

| # | Item | Owner |
|---|---|---|
| P2-U1 | **Confirm B-12:** spark-producing metal grinding and abrasive cutting are hot work, so permit, 35 ft and fire watch apply to every such step with no shop exemption (E-11) | PO |
| P2-U2 | Basis for the universal handheld grinder face shield (C-000221): manufacturer instruction, best practice, or company policy (E-10) | PO |
| P2-U3 | Consolidate H-HW-033 → H-BT-013, H-HW-039 → H-BT-031 (generalized), H-HW-040 → H-BT-036 (generalized) (E-8) | Architect |
| P2-U4 | Generalize H-BT-032 to overhead work, covering eyes and ears (E-12) | Architect |
| P2-U5 | H-HW-021 as the canonical heat-stress record; supersede nine production heat-stress strings (E-13) | Architect |
| P2-U6 | Accept new H-HW-041 carbon monoxide (E-5) | Architect |
| P2-U7 | Numeric user-facing acetylene limit (C-000200) — include the number, or "maximum safe pressure" only (E-14) | Architect / PO |
| P2-U8 | Constant-pressure switch control (C-000220) — verify the 1926.300(d) basis (E-15) | Architect |
| P2-U9 | Thoriated tungsten electrode grinding (TIG) — include a radioactive dust control, or leave out of scope | Architect |
| P2-U10 | Unverified citations listed in §7 | Architect |
| P2-U11 | MSHA Part 56 equivalents for welding, compressed gas, fire prevention and PPE | Architect |
| P2-U12 | Production C5 "N95 minimum" conflicts with exposure-based respirator selection (E-9) — future approved milestone | PO |
| P2-U13 | Production T1 "Arc flash / eye injury from UV exposure" — wording collides with electrical arc flash; resolved by supersession to H-HW-009 | — (resolved by crosswalk) |
| P2-U14 | Welding brand aliases (Lincoln, Miller, Hypertherm, Arcair, Broco) as Adena usage | PO |
| P2-U15 | Electrode classification recognition (7018, 6010, etc.) with weld context | Architect |

Package 001 items U-4, U-5, U-9 and U-10 remain open in `SIL-PKG-001-RECONCILED.md`.

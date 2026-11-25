> **Repository Record (AD-008 §6):** Candidate crosswalk, revision r1. Not approved. Nothing in production is changed by this document. It records which production records would be superseded if Package 002 is approved.

# SIL-PKG-002 — Production Record Crosswalk (r1)

**Production baseline:** v1.3.0-p1, commit `8318ddb` (`A4-LIBRARY-EXPORT.md`)
**Rules carried from Package 001:**
- A supersession stands only if the canonical record is at least as broad as the production string.
- The canonical record inherits every production relationship (task-entry keywords), with that relationship's own applicability.

**Split supersession.** Where one production string combines several mechanisms, it is superseded by **all** the listed canonical records, and each inherits the relationship.

---

## A. Superseded (12)

| # | Production string | Entry | Superseded by | Inherited relationship | Note |
|---|---|---|---|---|---|
| 1 | Fire hazard / ignition source exposure | T1 | H-HW-001 | T1 | — |
| 2 | Combustible material nearby | T1 | H-HW-001 | T1 | Production lists a condition as a hazard; it becomes the applicability cue for H-HW-001 and C-000114 |
| 3 | Fire from torch application near combustibles | T35 | H-HW-001 | T35 Roofing | Roofing torch = hot work without metal cutting (Architect collision rule) |
| 4 | Thermal burns from hot metal, slag, or torch | T1 | H-HW-006, H-HW-007, H-HW-008 | T1 | Split: slag and sparks / flame / contact |
| 5 | Hot work burns and fume from welding bucket | T28 | H-HW-006, H-HW-012 | T28 Dragline | Split: burns / fume |
| 6 | Weld fume / smoke inhalation | T1 | H-HW-012 | T1 | Substance-specific records H-HW-013 to H-HW-018 attach by material cues |
| 7 | Arc flash / eye injury from UV exposure | T1 | H-HW-009 | T1 | Retires the "arc flash" wording collision with electrical work (T15 "Arc flash and arc blast" is retained and distinct) |
| 8 | Flying particles and sparks | T1 | H-HW-029 | T1 | — |
| 9 | Compressed gas hazard (cylinders) | T1 | H-HW-022, H-HW-023, H-HW-024 | T1 | Split: rupture and projectile / damage / fuel gas leak |
| 10 | Electrical shock from welding equipment | T1 | H-HW-011, H-BT-026 | T1 | Split: welding circuit / supply side |
| 11 | Heat stress in enclosed or hot work area | T1 | H-HW-021 | T1 | Neutral canonical heat-stress record |
| 12 | Heat stress during welding in enclosure | T28 | H-HW-021 | T28 | As #11 |

T1 "Noise exposure" was already superseded by H-BT-019 (Package 001).

## A2. Proposed — heat stress (P2-U5, pending Architect)

| Production string | Entry | Proposed target |
|---|---|---|
| Heat stress inside vessel or tank | T14 | H-HW-021 |
| Heat stress and heat stroke | T21 | H-HW-021 |
| Heat stress inside vessel | T30 | H-HW-021 |
| Heat stress from process heat and steam | T34 | H-HW-021 |
| Heat stress on open roof | T35 | H-HW-021 |
| Heat stress in open field environment | T38 | H-HW-021 |
| Heat stress in open exposed work areas | T42 | H-HW-021 |

---

## B. Retained — related but distinct

| Production string | Entry | Related | Reason retained |
|---|---|---|---|
| Arc flash and arc blast | T15 | — | Electrical arc flash; must never establish welding |
| Flammable vapor and fire hazard | T12 | H-HW-004 | Painting scope: ignition from any source, not only hot work |
| Flammable atmosphere / ignition risk | T14 | H-HW-004 | Confined-space scope |
| Oxygen deficiency or enrichment | T14 | H-HW-019, H-HW-020 | Confined-space scope; any cause |
| Explosion or fire from flammable residue | T30 | H-HW-034 | Vessel work generally, not only hot work |
| Oxygen deficiency or toxic atmosphere inside vessel | T30 | H-HW-019 | Any cause |
| Lead or asbestos in older structures / exposure in older structures | T18, T39 | H-HW-016 | Combined string; asbestos is out of scope |
| Thermal burns from torch and hot kettle | T35 | H-HW-007 | Includes the asphalt kettle |
| Fume inhalation from asphalt and torch | T35 | H-HW-012 | Asphalt fume |
| Thermal burns from hot process piping or steam | T31 | H-HW-008 | Process heat, not hot work |
| Fire from hot surfaces or ignition near flammable fluids | T41 | H-HW-001 | Maintenance, any ignition source |
| Flying debris / wood chips; Flying debris / chips; Flying debris; Flying debris from vibrating tool | T2, T3, T4, T11, T22 | H-HW-029 | Other activity packages; candidates for later generalization of H-HW-029 |

---

## C. Control entry C2 — Fire / Hot Work (all 7 lines mapped)

| C2 line | Canonical control | Status |
|---|---|---|
| Complete hot work permit before beginning any hot work operations | C-000116 (P-000008) | Equivalent |
| Remove or protect all combustibles within 35 feet of hot work | C-000114 (P-000006) | Equivalent |
| Maintain charged fire extinguisher in the work area at all times | C-000118 | Equivalent |
| Assign fire watch during and for minimum 30 minutes after hot work | C-000115 (P-000007) | Equivalent |
| Use fire blankets and screens to contain sparks and slag | C-000119 | Equivalent |
| Monitor area 30-60 minutes after hot work for smoldering fire | C-000115 + conditional C-000117 | Reconciled (registry note R-4) |
| Control all sparks and slag direction away from personnel and materials | C-000120 | Equivalent |

**Relationship applicability finding (E-16).** C2 is triggered by broad keywords: fire, flammable, combustible, ignition, spark, slag, torch, welding, burning, hot work. In production, a step like "apply flammable coating" surfaces the hot work permit and fire watch lines. After supersession:
- C-000114 to C-000116 and C-000118 to C-000120 inherit C2's relationship **only for hot work recognition**;
- generic "flammable" or "fire" cues relate to H-HW-004 and production T12 / T14 without asserting hot work.

This is an intended behavior change from production.

---

## D. Other control entries

| Entry | Line | Canonical | Status |
|---|---|---|---|
| C17 Heat Stress | Monitor workers for signs of heat illness… | C-000184 | Equivalent |
| C17 | Adjust work scheduling to avoid peak heat hours where possible | C-000183 | Related (canonical is broader) |
| C17 | Know site first aid response for heat stroke — cool rapidly and call 911 | C-000185 | Equivalent |
| C17 | Use buddy system in high-heat conditions | — | Retained; no canonical equivalent yet. Candidate for H-HW-021. |
| C5 Silica / Dust | Wear appropriate respirator (N95 minimum, P100 for high exposure) | C-000164 | **Not equivalent** (E-9, P2-U12) |
| C6 Chemical / Respiratory | Provide adequate ventilation — forced air if in enclosed space | C-000174 | Related |
| C13 Confined Space | Test atmosphere … before and continuously during entry | C-000133 | Related (confined-space scope retained) |
| C20 Dragline | Ensure ventilation when welding inside bucket or confined areas | C-000163, C-000174 | Related (dragline context retained) |

No production control is retired until all of its relationships are accounted for.

---

## E. Production keyword relationships to retain

Production T1 keywords stay recognition terms, with Package 002 rules applied:

| Keywords | Track B treatment |
|---|---|
| weld, welding, mig, tig, smaw, gmaw, fcaw, flux core, stick weld, brazing, soldering, pipe weld, field weld, structural weld, weld pad eye, weld lug, weld bracket, weld bucket, weld tooth, backing bar, purge weld, weld fume | Weld (whole-term matching; `tig` never inside "tight") |
| torch, torching, cutting torch, burning | Context-dependent (Architect collision rules) |
| plasma, oxy fuel, carbon arc, gouging | Cut (thermal) |
| grinding, grinder | Grind (metal unless a concrete cue applies) |
| sparks, slag, molten, hot work | Hot work |
| cut metal, cut steel | Cut, **method undetermined** (Architect scenario 9). An intended change from production, where these phrases always surfaced hot work hazards. Method-specific records appear as conditional. |

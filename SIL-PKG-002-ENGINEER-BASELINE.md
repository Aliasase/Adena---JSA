> **Repository Record (AD-008 §6):** Engineer pre-package baseline for Package 002, Welding and Hot Work. **Not candidate safety content.** Under AD-008 §3 the Architect leads hazard and control development. This document gives the production baseline, the canonical records available for reuse, and the technical issues the package must resolve, so that Package 002 starts from the registries instead of duplicating them.

# SIL Package 002 — Welding and Hot Work: Engineer Baseline

**Prepared:** November 25, 2026 · **Branch:** `revision-a4`
**Governing:** AD-008 §4–§5; Architect Response 003 §10 (reuse canonical hazards and controls); PO Decision 002 (company policy records)

---

## 1. Production baseline (v1.3.0-p1, `A4-LIBRARY-EXPORT.md`)

**Task Entry T1 — Hot Work / Welding / Cutting / Grinding**

*Keywords (verbatim):* weld, welding, torch, torching, cutting torch, burning, hot work, plasma, oxy fuel, grinding, grinder, sparks, slag, molten, cut metal, cut steel, carbon arc, gouging, flux core, fcaw, gmaw, smaw, stick weld, mig, tig, brazing, soldering, weld fume, backing bar, purge weld, pipe weld, field weld, weld pad eye, weld lug, weld bracket, structural weld, weld bucket, weld tooth

*Hazards (10):*
- Fire hazard / ignition source exposure
- Thermal burns from hot metal, slag, or torch
- Weld fume / smoke inhalation
- Arc flash / eye injury from UV exposure
- Flying particles and sparks
- Compressed gas hazard (cylinders)
- Electrical shock from welding equipment
- Noise exposure *(already superseded by H-BT-019)*
- Combustible material nearby
- Heat stress in enclosed or hot work area

**Control Entry C2 — Fire / Hot Work** (keywords: fire, hot work, spark, slag, torch, welding, burning, flammable, combustible, ignition)
- Complete hot work permit before beginning any hot work operations
- Remove or protect all combustibles within 35 feet of hot work
- Maintain charged fire extinguisher in the work area at all times
- Assign fire watch during and for minimum 30 minutes after hot work
- Use fire blankets and screens to contain sparks and slag
- Monitor area 30-60 minutes after hot work for smoldering fire
- Control all sparks and slag direction away from personnel and materials

**Related production items:**
- HAZARDS checklist: `hotWork` (Hot Work / Fire Hazard)
- PERMITS: `hotWorkPermit` (Hot Work Permit), `confinedSpacePermit`, `confinedSpaceEntry`
- PPE_ITEMS: `weldingHood`, `faceShield`, `gloves`, `respirator`, `fullFaceSplash`, `chemGloves`
- Other task entries that surface hot work hazards: T31 Process Piping ("Have fire watch present when welding on or near piping," C22); T37 Themed; T38 Solar / Steel Support; T28 Dragline ("Heat stress during welding in enclosure")

---

## 2. Canonical records available for reuse (do not duplicate)

| Exposure in welding / hot work | Reuse | Note |
|---|---|---|
| Noise (grinding, gouging, plasma) | H-BT-019 / C-000049 (P-000005) | Production T1 noise already superseded |
| Hand-arm vibration (grinders) | H-BT-020 / C-000020, C-000050, C-000051 | — |
| Electrical shock from powered tools (grinders, plasma units) | H-BT-026 / C-000071–C-000073 | Welding-circuit shock (open-circuit voltage, wet conditions, electrode handling) is a **distinct mechanism**. Architect to decide: new record, or relationship-specific controls on H-BT-026. |
| Cuts from sharp metal | H-BT-002 / C-000004 (P-000001), C-000112 (P-000002 where knife or demolition), C-000005, C-000006 | Welding gloves are *thermal* task-specific hand protection, a new control that links to P-000001 precedence |
| Fall from elevation | H-BT-017 / C-000039 (P-000003), C-000040–C-000044, C-000113 | Note the interaction of fire-resistant PFAS and sparks with lanyards (new controls) |
| Dropped objects (slag, tools, cut-offs) | H-BT-018 / C-000046, C-000047, C-000108 | Falling cut-off pieces from torch cutting at height is a key exposure |
| Debris into eyes / face protection | C-000054 safety glasses, C-000055 face shield, C-000111 goggles | Arc radiation filter-shade protection is a new control family |
| Hose whip (oxy-fuel and compressed air) | H-BT-025 / C-000109, C-000110; pneumatic controls C-000067–C-000070 | Fuel-gas hose integrity, flashback arrestors and check valves are new, specific controls |
| Trips from hoses, leads and cords | H-BT-027 / C-000074, C-000075 | Welding leads added to cues |
| Caught in rotating tool (grinders) | H-BT-010 / C-000025, C-000026 | — |
| Kickback / binding (grinders, cut-off wheels) | H-BT-004 / C-000011 | Wheel binding and kickback controls are new, specific to the relationship |
| Tool / component failure (wheel burst) | H-BT-006 | Wheel rating and RPM match, guard in place: new controls on H-BT-006 or a distinct record — Architect decision |
| Line break / process energy (welding on piping) | Flange / line-break cross-reference rule (§2 rule 6) | Hot tapping is a separate high-consequence scope question |

---

## 3. Issues Package 002 must resolve

| # | Issue | Why it matters |
|---|---|---|
| B-1 | **Recognition collisions** | `tig` currently matches inside "tight" (production defect A-1; needs whole-term matching). "Cut" is used for saw, knife, torch and plasma cutting, and knife use triggers P-000002. "Burning" means torch cutting in field usage. "Arc" collides with arc flash in electrical work. "Grind" includes concrete grinding (silica, a different package). "Torch" includes roofing torches (T35). |
| B-2 | **Production C2 numeric values** | "35 feet" and "30 minutes" fire watch need source classification. Possible bases (all unverified): OSHA-C 1926.352; OSHA-GI 1910.252(a)(2); NFPA 51B; company policy; client permit. Unless the PO confirms company policy, they need to be stated by source. |
| B-3 | **Internal inconsistency in C2** | "Fire watch … minimum 30 minutes after" and "Monitor area 30–60 minutes after" overlap and differ. These should be one canonical control with a confirmed duration source. |
| B-4 | **Hot work permit** | Company, client or site requirement? Production treats it as universal. PO confirmation is needed for the policy registry. |
| B-5 | **Fume exposure specificity** | Generic "weld fume" vs. specific agents: hexavalent chromium (stainless), manganese, zinc oxide from galvanized metal (metal fume fever), lead coatings, cadmium. Cumulative recognition: Weld + Object material (CRF §3.1). Jurisdiction-dependent internal references, e.g. OSHA-C 1926.1126 Cr(VI) (unverified). |
| B-6 | **Confined and enclosed spaces** | Oxygen enrichment or deficiency from gas leaks; ventilation. Relationship to existing permits. |
| B-7 | **Cylinders** | Storage, securing, separation, transport, regulator and valve handling. Production has one generic string. |
| B-8 | **Hot work on containers, tanks and coated surfaces** | Residual flammables or toxic coatings. High consequence. Cross-reference to line-break and process records. |
| B-9 | **Fire watch duties and extinguisher** | Canonical control set reused by grinding, torch, plasma and gouging alike. |
| B-10 | **Thermal hand protection vs. P-000001** | Welding gloves satisfy general steel-handling glove use while welding. Where welding overlaps knife use or demolition, P-000002 (A4) governs. Policy precedence decides presentation. |
| B-11 | **AD-008 §5 scope boundaries** | Welding, cutting and grinding are in T1 together. Drilling (T3) is also on the priority list. The Architect should decide whether Package 002 includes grinding and abrasive cutting, or leaves them for a separate package. |

---

## 4. Engineer readiness

- Canonical control IDs continue from **C-000114**; policy IDs from **P-000006**; hazard IDs to follow the Architect's naming for Package 002.
- The same generator-based process will keep the control registry, the package and the crosswalk consistent.
- Independent review will follow the Package 001 method: record-by-record review, a reuse check against the registries, a crosswalk against T1 and C2, regression scenarios, and citation verification against primary sources.

No application implementation or production release is authorized.

> **Repository Record (AD-008 §6):** Reconciled Package 003 with the Engineer independent review, Architect Response 005 and AD-010. Approved for the isolated test release v1.4.1-dev1 only (AD-010); not approved for production. Citations not marked "verified" are not validated; Engineer verification is not Architect validation.

# Safety Intelligence Library — Package 003 (Reconciled r2.1 — implemented in test release v1.4.1-dev1)
## Drill (ACT-0017) · Mechanical Fastening (activity relationship; no new Activity ID)

**Source:** `SIL-PKG-003.md` (Architect candidate, November 26, 2026; original preserved verbatim)
**Decision record:** `SIL-PO-DECISION-005.md` (preserved verbatim), incorporated here
**Reviewed by:** Claude (Engineer), November 26, 2026 · **Revisions:** r1 `52ce59d` · r1.1 SIL PO Decision 006 `7c6ddc6` · r2 Architect Response 005 `e2f768b` · **r2.1 — AD-010 incorporated; implemented in v1.4.1-dev1** · **Branch:** `revision-a4` · **Baselines:** production v1.4.0-p1 `76ac7c7`, development `edab953`

**Companion files:**
- `SIL-CONTROL-REGISTRY.md` — C-000273 to C-000418 added; relationships appended to 46 existing controls; 5 accepted text revisions of approved controls
- `SIL-POLICY-REGISTRY.md` — P-000010 added; Package 003 policy relationships; induction/resistance heating scope
- `SIL-HAZARD-REGISTRY.md` — **new**: every hazard identifier across Packages 001–003, with status
- `SIL-PKG-003-PRODUCTION-CROSSWALK.md` — production entries, supersession proposals and v1.4.0-p1 defects found
- `SIL-PKG-003-REGRESSION.md` — 82 regression scenarios (Architect candidate 40, PO 8, Engineer 20, Architect Response 005 14)
- `SIL-UNRESOLVED-REGISTER.md` — **new**: consolidated open items, Packages 001–003
- `SIL-PO-DECISION-006.md` — PO decisions on P3-U1, P3-U5 and P3-U6 (r1.1)
- `SIL-PKG-003-ARCHITECT-RESPONSE-005.md` — Architect review (preserved verbatim), incorporated in r2
- `ADENA_JSA_AD-010.md` — implementation authorization (preserved verbatim), incorporated in r2.1

**Labels:**
- References: OSHA-C, OSHA-GI, MSHA, Spec, Mfr, BP, SDS, company policy P-*nnnnnn*.
- "verified (Engineer, *source*, P003 r1)" means I checked the text against the named source and confirmed applicability (Response 003 §9; PO Decision 003 §7). Everything else is unverified.
- No numeric anchor embedment, spacing, edge distance, torque, cure time, misfire waiting period, substrate thickness, magnetic or vacuum mounting value, or respiratory exposure duration is introduced (candidate §9). Two verified regulatory numbers are recorded internally only; one regulatory number (30 psi, 1926.302(b)(4)) is user-facing by PO decision (SIL PO Decision 006 §2).

---

## AD-010 — implementation authorization (r2.1, implemented in v1.4.1-dev1)

`ADENA_JSA_AD-010.md` (preserved verbatim) approves r2 for implementation in the isolated test release v1.4.1-dev1.

| AD-010 | Applied |
|---|---|
| §1 P3-U14 | **Approved** — C-000395 states the 99% filter-efficiency requirement, scoped to prescribed silica dust-collection methods; manufacturer airflow and filter-cleaning requirements kept. **Closed.** |
| §1 P3-U15 | **Approved** — revised C-000164 wording implemented on every relationship. **Closed.** |
| §3.1 C-000395 | Numeric requirement limited to prescribed dust-collection methods and stated as separate from HEPA-filtered hole cleaning (C-000317). |
| §3.2 Unknown materials | Where composition is unknown or may contain silica, the app presents H-DF-017 in its **assessment form** — "Possible respirable crystalline silica exposure — material composition not established" — with only the identification and assessment controls (C-000314, C-000397). Established exposure keeps the full record. |
| §3.3 Induction / resistance heating | C-000393 is presented for every induction or resistance heating task (also related to H-HW-008). A statement of no ignition hazard never overrides a contradictory ignition cue. Combustible clearance never removes the hot work classification. §3.2 updated. |
| §3.4 C-000218 | Drill-press workpieces are secured in a vise, clamp or fixture whatever their size (T-9). |
| §3.5 C-000106 | Side handle used wherever the drill has one or the manufacturer requires it — new text revision **T-14**. |
| §3.6 H-DF-018 | Record title no longer says "non-silica"; H-DF-018 makes no silica classification of any material. |
| §3.7 E-13 | Standalone "Ramset" wording corrected: Hilti gun, Ramset gun and shoot / shot pins establish PAT work; standalone brand names do not. |
| §3.8 C-000164 | T-13 wording keeps contaminant-based selection, assigned protection factor, the respiratory protection program and the oxygen-deficient / IDLH restriction. |

**Text revisions of approved records:** 14 (8 hazards, 6 controls) — the 13 accepted by AR-005 plus T-14. Implemented in the v1.4.1 test builds; production v1.4.0-p1 keeps the earlier wording until a production release is authorized.

---

## r2 — Architect Response 005 reconciliation

`SIL-PKG-003-ARCHITECT-RESPONSE-005.md` (preserved verbatim) accepts Package 003 in principle, with corrections. Every correction is applied below; r1 / r1.1 text is in the repository history (`52ce59d`, `7c6ddc6`).

| AR-005 | Disposition | Where applied |
|---|---|---|
| §1 P3-U2 generalizations | **Accepted** — 12, with refinements to H-BT-010, H-BT-002, H-BT-021, H-HW-031, C-000218, C-000224; plus C-000164 (§12) as T-13 | §1.2 table; registries. Applied to user-facing text at implementation. **P3-U2 closed.** |
| §2 P3-U3 consolidations | **Accepted** — all 18; method-specific controls kept as conditional relationships | §4. **P3-U3 closed.** |
| §3 P3-U4 crosswalk | **Accepted with conditions** — consequence strings retained; eye injury superseded only within T2; concrete dust retained; contradictory or weaker legacy controls not shown beside replacements; duplicate flying-debris resolved | Crosswalk r2. **P3-U4 closed.** |
| §4 Glove precedence | **Applied** — the no-gloves control covers the exposed rotating-machinery operation only; handling steps keep P-000001 / P-000002 | C-000276 condition; policy registry; regression D-1, D-2 |
| §5 PAT recognition and controls | **Applied** — "Ramset gun", not standalone "Ramset"; C-000356 powder-actuated only + new C-000394; C-000358, C-000363, C-000365 revised; gas-actuated fuel-cell isolation on nailer jams (C-000289 → H-DF-032) | §2; §4 |
| §6 Silica | **Applied** — conditional assessment for unknown composition; drywall and composites not silica-free; Table 1 task- and jurisdiction-specific; dust-collector airflow and filter (C-000395), (c)(2) exhaust and water (C-000396), exposure assessment outside a specified method (C-000397) | H-DF-017, H-DF-018; E-6; §8 |
| §7 P3-U7 adhesive anchors | **Applied** — conditional C-000398 (Architect wording); validation stays open | H-DF-024. P3-U7 open. |
| §8 P3-U8 hot riveting | **Accepted** — hot riveting establishes hot work, thermal contact, hot-material handling and striking | §2. **P3-U8 closed.** |
| §9 P3-U9 EMF | **Applied** — new **H-DF-041** with C-000399 to C-000402 | §4. **P3-U9 closed.** |
| §10 Induction logic | **Corrected** — combustible clearance never suppresses hot work; only genuinely absent ignition potential does | §3.2 rewritten |
| §11 Compressed-air cleaning | **Applied** — C-000392 reworded; 30 psi kept | §4 |
| §12 Additional corrections | **Applied** — H-DF-015, H-DF-026, H-DF-029, H-DF-039, H-BT-028 (C-000373), C-000287, C-000164 (T-13) | §4; §1.2 |
| §13 Validation | P3-U10 to P3-U12 **open**; Engineer verifications stay labeled as Engineer verifications; equipment-specific instruction kept (C-000405) | §8; register |
| §14 P3-U13 defects | **Accepted** — collision rules are phrase-scoped, contextual and cumulative; no global keyword exclusions | §2.3 |
| §15 Regression | **14 scenarios added** (§D); existing scenarios kept, 4 expectations revised | `SIL-PKG-003-REGRESSION.md` |

**Points for Architect attention (no disagreement):**
1. **C-000395 carries a regulatory number** (99% filter efficiency, Table 1 row (vii), verified). It was held for PO confirmation (P3-U14) — **approved by AD-010 §1**.
2. **C-000164 is in production** (the PO-approved respirator correction, v1.4.0-p1). T-13 changes production wording (P3-U15) — **approved by AD-010 §1**, implemented in v1.4.1-dev1.
3. **Unknown material and candidate scenario 31.** §6 allows a conditional assessment where composition is unknown; the candidate's scenario 31 said "no unsupported material exposure." Reconciled as: an explicit unknown-material cue establishes H-DF-017 **conditionally** (assessment only, never explicit); a task naming no material establishes nothing. A-31 updated accordingly.
4. **"No ignition hazard" statements.** The app cannot verify the crew's statement that ignition potential is absent. C-000393 is therefore shown for every induction or resistance heating task, including B-6.

---
## 0. Review summary

| Disposition | Count | Records |
|---|---|---|
| New canonical record (candidate identifier kept) | 26 | H-DF-010, H-DF-011, H-DF-012, H-DF-013, H-DF-014, H-DF-015, H-DF-017, H-DF-018, H-DF-019, H-DF-021, H-DF-022, H-DF-023, H-DF-024, H-DF-026, H-DF-027, H-DF-028, H-DF-029, H-DF-030, H-DF-031, H-DF-032, H-DF-039, H-DF-040, H-DF-041, H-DF-042, H-DF-043, H-DF-044 |
| Consolidated into an existing Package 001–002 record (16) or another Package 003 record (2) — identifier retired, never reused | 18 | H-DF-001 → H-BT-010; H-DF-002 → H-BT-010; H-DF-003 → H-BT-004; H-DF-004 → H-BT-021; H-DF-005 → H-BT-021; H-DF-006 → H-HW-029; H-DF-007 → H-BT-002, H-HW-008; H-DF-008 → H-HW-031; H-DF-009 → H-HW-030; H-DF-016 → H-BT-013; H-DF-020 → H-BT-026; H-DF-025 → H-DF-024; H-DF-033 → H-DF-028; H-DF-034 → H-BT-028; H-DF-035 → H-BT-001; H-DF-036 → H-BT-029, H-BT-030; H-DF-037 → H-BT-007, H-BT-008; H-DF-038 → H-BT-020 |

**Totals (approved by AD-010 for the isolated test release):**
- **Hazard identifiers:** 78 → **122** registered; active **74 → 100**; retired 4 → 22.
- **Controls:** **146** new canonical controls, **C-000273 to C-000418**. Next available: **C-000419**. 46 existing controls reused across 22 existing records (§5).
- **Policies:** **10** confirmed (P-000010 added by SIL PO Decision 005 §1).
- **Implemented in v1.4.1-dev4:** 146 of 146 new controls — 133 approved by AD-010; C-000406 (Architect wording) and C-000407 from PO field testing (ED-1); C-000408 to C-000418 from the Architect supplemental directive on temporary fall protection anchorage connectors. The six RCSC controls stay withheld (U-5, U-20).
- **Text revisions** of approved records: 14 (8 hazards, 6 controls — §1.2): 13 accepted by Architect Response 005 §1 and §12, plus T-14 (AD-010 §3.5). Implemented in the v1.4.1 test builds; none changes an identifier.

**Citations:** 5 provisions verified against authoritative text — 1926.302(b), 1926.302(e), 1926.1153 (Table 1 rows (vi)–(ix), (f), (g)(1)), 1926.416(a)(3), 1926.502(d)(15). Two candidate assumptions are corrected by them (E-6, E-8).

**Production review:** running the candidate's 40 scenarios through v1.4.0-p1 found **16 production behaviors** to correct at implementation (Crosswalk §C). Two scenarios return **no suggestions at all** today (battery brad nailer; blind rivets).

---
## 1. Engineering findings

| # | Finding | Effect |
|---|---|---|
| E-1 | **Many candidate records duplicate an existing mechanism.** 16 of 40 candidates describe a mechanism already held by a Package 001 or 002 canonical record, and 2 more duplicate another Package 003 candidate (E-2, E-3). The 16 cover rotating contact and entanglement, kickback, attachment failure, flying particles, sharp edges, workpiece movement, unexpected startup, shock, pinch, striking, strain, vibration, ejected parts. Under Response 001 Decision 2, canonical records are generalized rather than duplicated. | Consolidated into the existing record; drilling detail kept as relationship-specific controls. 8 hazard texts proposed for generalization (§1.2). |
| E-2 | **H-DF-024 and H-DF-025 are one consequence** (anchor fails under load) with method-specific controls. | H-DF-025 consolidated into H-DF-024; adhesive controls conditional `[if adhesive]`. |
| E-3 | **H-DF-033 (nail deflection) is the H-DF-028 mechanism at lower energy.** | Consolidated into H-DF-028, renamed "ricochet, deflection, fragmentation or rebound"; method conditions keep PAT substrate, power and shield controls off nailers. |
| E-4 | **Glove conflict at rotating machinery.** H-DF-002 says not to wear gloves where they can be caught at exposed rotating machinery. P-000001 requires work gloves for all steel work. At a drill press drilling steel brackets (scenario 7), the app would show both — contradictory guidance, which the candidate's scenario 7 forbids ("no unsafe blanket glove instruction"). The candidate says to resolve the conflict through a safe work method; only the PO can scope a company policy. | **Decided — SIL PO Decision 006 §1; scoped by AR-005 §4** to the exposed rotating-machinery operation only. At an exposed rotating spindle, chuck or bit, C-000276 presents in place of C-000004, and P-000001 applies to handling the steel before and after drilling. |
| E-5 | **H-DF-004 belongs with H-BT-021, not H-BT-006.** H-BT-006 is failure of a force-multiplying tool under load (wrenches, multipliers, tensioners). A bit or cutter breaking or coming loose is the H-BT-021 mechanism (attachment coming off or shattering). | Consolidated into H-BT-021 (generalized, T-5). Deviation from the candidate's pointer — Architect to confirm (P3-U3). |
| E-6 | **Silica Table 1 verified, and it changes two assumptions.** (a) Row (vii), handheld and stand-mounted drills including impact and rotary hammer drills: shroud or cowling with dust collection, HEPA-filtered vacuum for hole cleaning, **no respirator required** at any duration. Row (vi), rig-mounted core saws or drills: integrated water delivery, **no respirator**. Row (viii), dowel drilling rigs (outdoors only): APF 10. (b) **Handheld core drilling is not a Table 1 task** — it needs the exposure-assessment route under (d). The candidate's "wet drilling does not necessarily eliminate respirator requirements" is correct for dowel rigs and non-Table-1 tasks, but a universal respirator line would contradict Table 1 for handheld drills. | r2 (AR-005 §6): Table 1 is task- and jurisdiction-specific; wet drilling does not by itself remove a respirator requirement. C-000315 names the specified method; C-000271 (respirator only where the method specifies one) gets its first active relationship; C-000164 covers exposure-assessed tasks. Production T2 shows silica for **all** drilling, including steel and wood (defect F-1). |
| E-7 | **The production library mis-recognizes drilling and fastening tasks.** Running the 40 scenarios through v1.4.0-p1: "rotary hammer" and "hammer drill" trigger the drift-pin and missed-hammer-blow records; "beam flange" triggers process piping; "boom lift" triggers crane operations; "SDS Max" and "adhesive" trigger chemical and coating categories (including "Confined space entry for interior coating"); "steel track" triggers drywall joint-compound silica; "heating" triggers weather hazards (lightning); "inspect existing fall protection anchor" triggers drilling hazards. A battery brad nailer and blind riveting return **zero** suggestions. | 16 defects recorded (Crosswalk §C) with collision rules (§2.3). For implementation; not fixed now (SIL PO Decision 005 §6). |
| E-8 | **1926.302(e) contains no misfire waiting period (verified).** Any waiting period comes from ANSI A10.3 (incorporated by (e)(12), text not reviewed) or the manufacturer. | C-000365 names no number — consistent with the candidate. |
| E-9 | **Missing: wet-coring runoff.** Water and slurry from coring through a slab run through the hole to the floor below, onto electrical equipment and onto people. | C-000328 added to H-DF-021 `[if drilling through a floor, slab or wall]`. |
| E-10 | **Verified regulatory controls missing from the candidate.** 1926.302(b)(2) safety clip or retainer on pneumatic percussion tools; (b)(5) manufacturer's safe operating pressure for hoses and fittings; (e)(11) shield, guard or attachment recommended by the manufacturer; (b)(4) compressed air for cleaning reduced below 30 psi, with exceptions. | C-000285, C-000390, C-000359 added. C-000392 (30 psi) user-facing — **SIL PO Decision 006 §2**. |
| E-11 | **"Structural riveting" is ambiguous for hot work.** Historic structural riveting heats rivets (hot work); modern structural "riveting" with lockbolts or blind fasteners is cold. Themed-entertainment renovation can involve either. | **Accepted (AR-005 §8).** Hot riveting, heated rivets and rivet forges establish hot work plus thermal-contact, hot-material handling and striking hazards; cold, blind and modern mechanical structural fastening do not. |
| E-12 | **Induction and resistance heating (SIL PO Decision 005 §2).** v1.4.0-p1 also shows H-HW-006 "Burns from sparks, molten metal and slag" for induction preheating — neither process produces sparks, molten metal or slag (defect F-11). The library has no record for the strong magnetic fields near induction coils, which manufacturers warn about for workers with implanted medical devices. | §3 sets the implementation rule. Induction and resistance heating do not establish H-HW-006, H-HW-024 or H-HW-025. **AR-005 §9:** new H-DF-041 (electromagnetic fields from induction heating equipment). |
| E-13 | **Field vocabulary for powder-actuated tools.** "Hilti gun", "Ramset gun", "shoot pins" and "shot pins" are common field terms for a PAT, but Hilti and Ramset also make drills, anchors and gas tools. Production T3 already uses "hilti gun" and "ramset" as keys. "Deck gun" can mean a PAT, a screw gun for decking, or a fire monitor. | **Decided — SIL PO Decision 006 §3, as clarified by AR-005 §5 and AD-010 §3.7:** "Hilti gun", "Ramset gun", "shoot pins" and "shot pins" establish powder-actuated work; standalone brand names (Hilti, Ramset) do not. "Deck gun" stays ambiguous — PAT only alongside other PAT cues. |
| E-14 | **Fall protection anchorage capacity verified** — 1926.502(d)(15): 5,000 lb per employee attached, or designed as part of a complete system with a safety factor of at least two under a qualified person's supervision. | Recorded internally only. H-DF-026 controls state the approval route, not the number (candidate §9). |
| E-15 | **Gas-actuated tools.** 1926.302(e) is titled for powder-actuated tools. An OSHA interpretation addresses whether gas-actuated tools need the same model-specific training (title seen; letter not reviewed). | Training control kept PAT-only. Architect to review the interpretation (P3-U12). |
| E-16 | **"Drill" and "bore" collisions outside the package's scope:** fire, evacuation, emergency and rescue drills; drill rigs, blast-hole and rock drilling (surface mining, production T39); horizontal directional drilling, jack-and-bore and tunnel boring (excavation). | Collision rules §2.3. |

### 1.2 Text generalizations of approved canonical records — accepted (AR-005 §1, §12)

Each keeps its identifier and every existing relationship. The new wording covers the drilling and fastening mechanism without losing the original meaning. **Accepted by Architect Response 005** (with the §1 refinements shown, and T-13 from §12). Until implementation is authorized, the current wording stays in the registry's user-facing column and in the app.

| # | Record | Current wording | Accepted wording | Absorbs |
|---|---|---|---|---|
| T-1 | H-BT-010 | Fingers, gloves, clothing or lanyards caught in a rotating tool, bit, socket or extension | Contact with or entanglement in rotating tools, bits, cutters, chucks, sockets or extensions | H-DF-001, H-DF-002 |
| T-1b | H-BT-001 | Pinch points while fitting and bolting connections | Pinch points while fitting, bolting, anchoring or fastening | H-DF-035 |
| T-2 | H-BT-002 | Cuts from sharp metal surfaces, burrs, pipe ends and flanges | Cuts and punctures from sharp metal surfaces, burrs, swarf, pipe ends and flanges | H-DF-007 |
| T-3 | H-BT-007 | Strain from applying force or from handling heavy torque or tensioning equipment | Strain from applying force or from handling heavy torque, tensioning, drilling or fastening equipment | H-DF-037 |
| T-5 | H-BT-021 | Socket or attachment coming off or shattering | Socket, bit, cutter or other attachment coming off, breaking or shattering, including an ejected chuck key or unsecured attachment | H-DF-004, H-DF-005 |
| T-6 | H-HW-030 | Tool starting unexpectedly during a wheel change or adjustment | Tool starting or discharging unexpectedly during an attachment change, jam clearing, adjustment or servicing | H-DF-009 |
| T-7 | H-HW-031 | Workpiece moving, rolling or binding during cutting or grinding | Workpiece moving, rotating, rolling or binding during drilling, cutting or grinding | H-DF-008 |
| T-8 | H-BT-028 | Falling or ejected TC bolt splines | Falling or ejected TC bolt splines, rivet mandrels or other spent fastener parts | H-DF-034 |
| T-9 | C-000218 | Clamp or support the workpiece before grinding or cutting; do not hand-hold small pieces you cannot control | Clamp or support the workpiece before drilling, fastening, grinding or cutting, and do not hand-hold small pieces you cannot control. At a drill press, always secure the workpiece in a vise, clamp or fixture, whatever its size — never hold it by hand | H-DF-001, 008, 028, 035 |
| T-10 | C-000224 | Unplug the tool, remove the battery or shut off and bleed the air before changing wheels or attachments | Unplug the tool, remove the battery or shut off and bleed the air before changing wheels, bits or attachments, clearing jams or making adjustments. For stationary machinery, also control stored energy and apply the required lockout/tagout before servicing | H-DF-009, 032, 035 |
| T-11 | C-000019 | Move heavy tool heads, tensioners and pumps with a handling method rated for their weight, configuration and access — do not climb carrying them | Move heavy tool heads, tensioners, pumps and core drill rigs with a handling method rated for their weight, configuration and access — do not climb carrying them | H-DF-037 |
| T-12 | C-000020 | Rotate tasks or workers on long bolting or impact runs to limit exposure | Rotate tasks or workers on long bolting, impact, drilling or fastening runs to limit exposure | H-DF-037, 038 |
| T-13 | C-000164 | Where ventilation alone is not enough, use respiratory protection selected from an exposure assessment, under the respiratory protection program | Use respiratory protection where the exposure assessment, a specified control method or the atmospheric conditions require it — selected for the contaminant and conditions, with an assigned protection factor adequate for the exposure, under the respiratory protection program. Never use an air-purifying respirator in an oxygen-deficient or IDLH atmosphere | AR-005 §12; AD-010 §1 (P3-U15) and §3.8 (all respiratory relationships) |
| T-14 | C-000106 | Expect the bit to bind as it breaks through — hold the drill firmly with the side handle and ease off the trigger | Expect the bit to bind as it breaks through — hold the drill firmly, use the side handle wherever the drill has one or the manufacturer requires it, and ease off the trigger | AD-010 §3.5 |

---

## 2. Recognition review

The Architect recognition library (candidate §2–§3) is accepted, with these additions and rules. All matching is whole-term (Package 001 §1). Conditions are recognized cumulatively (candidate §3).

### 2.1 Activity relationships

| Recognized | Establishes | Notes |
|---|---|---|
| Drill (ACT-0017) terms, candidate §2 | Drilling: H-BT-010, H-BT-004, H-BT-021, H-HW-029, H-BT-026 (corded), H-BT-019 | Material, method and condition cues add the rest. Drilling alone never establishes silica, concealed services or structural records. |
| Mechanical anchors (wedge, sleeve, drop-in, expansion, concrete screw, Tapcon) | Anchor installation: H-DF-024, plus drilling | "Tapcon" is a concrete-screw brand: recognized as concrete screw installation only. |
| Adhesive / epoxy anchors, bonded threaded rod | H-DF-024 `[if adhesive]`, H-DF-023, plus drilling | Adhesive alone does not establish anchor installation. |
| Fall protection, lifting, davit or suspended-access anchor | Install / set / drill: H-DF-026 (installation controls), H-DF-024, plus drilling. Inspect / test / use an existing anchor: H-DF-026 with inspection and use controls only (AR-005 §12) | Inspection or use establishes no drilling or installation controls. |
| Powder-actuated (PAT, powder-actuated, powder-driven, Hilti gun, Ramset gun, shoot / shot pins — SIL PO Decision 006 §3 as clarified by AR-005 §5; standalone "Hilti" or "Ramset" needs PAT fastening context) | H-DF-027, H-DF-028, H-DF-029, H-DF-030, H-DF-031 (conditional), H-BT-019 | P-000010 applies. PAT requires fastening context where ambiguous. |
| Gas-actuated fastening (gas-actuated tool, fuel cell, gas nailer) | H-DF-028, H-DF-029, H-DF-031, H-DF-032 (nailer form) | Not oxy-fuel; not hot work; P-000010 does not apply. |
| Nailers and staplers (pneumatic, framing, finish, brad, roofing, staple gun, battery nail gun) | H-DF-032, H-DF-028 `[if nailer or stapler]`, H-DF-029 | Pneumatic establishes H-BT-025 and H-DF-040 only with an air cue (pneumatic, air, compressor, hose). |
| Riveting (rivet gun, blind riveter, pop rivet) | H-BT-028 `[if riveting]`, H-BT-001, H-BT-002 | Mandrel collector only where the tool has one. |
| Hot riveting (hot rivet, heated rivets, rivet forge, heat rivets) | Hot work (H-HW-001 to H-HW-003, P-000006 to P-000008), H-HW-008 thermal contact and hot-material handling, H-BT-029 / H-BT-030 striking (AR-005 §8) | Cold, blind and modern mechanical structural fastening establish none of these. |
| Induction / high-frequency electromagnetic heating | H-DF-041, plus §3.2 heating rules | H-DF-041 also where the manufacturer identifies EMF exposure. |
| Magnetic drilling (mag drill, magnetic drill, magnetic-base drill, annular cutter) | H-DF-010, plus drilling | Not magnetic lifting. |
| Core drilling (core drill, coring, diamond core) | H-DF-012 (through-drilling), H-DF-011 (stand / rig), H-DF-021, H-DF-022 (wet + cementitious) | Handheld core drill → H-BT-004, not H-DF-011. |
| Self-drilling / self-tapping screws, impact driver | Fastening: H-BT-010, H-BT-004, H-BT-021 | Impact driver does not establish impact wrench (Package 001). |
| Thread tapping (tap threads, tap and die, pilot drill and tap) | Drilling | Not hot tap, not water tap. |

### 2.2 Material and condition cues

| Cue | Establishes |
|---|---|
| Concrete, masonry, CMU, brick, stone, cement board, precast (known or reasonably foreseeable silica) | H-DF-017 explicit. With wet drilling: H-DF-021, H-DF-022. |
| Wood, plywood | H-DF-018. |
| Drywall, composite | H-DF-018 explicit and H-DF-017 **conditional** (assessment) — not classified as silica-free (AR-005 §6). |
| "Unknown", "unidentified" or "unspecified" material | H-DF-017 **conditional** (assessment only). A task naming no material establishes no material record. |
| Painted, coated, existing (unknown) | H-DF-019 conditional. Lead / asbestos cues: explicit. |
| Post-tensioned, PT slab / PT tendons (concrete context) | H-DF-015 explicit. Prestressed / precast strands: H-DF-015 conditional, H-BT-013 explicit. |
| Through a wall, floor, slab or ceiling; occupied room; below; opposite side | H-DF-012, H-DF-029; opening left → H-BT-017 / C-000113. |
| Existing wall / slab / equipment; conduit, cable, pipe, process enclosure | H-DF-013, H-DF-014 (explicit with a service cue, conditional otherwise). |
| Structural / load-bearing member, beam, column, girder, rebar | H-BT-013 `[if drilling, coring or anchoring into structural members]`. |
| Wet drilling, water-fed, slurry | H-DF-021; electrical: H-BT-026 `[if wet drilling]`. |
| Battery damaged, swollen, smoking, charging | H-DF-039 explicit. Cordless alone: conditional, low rank. |
| Overhead, elevated, lift, ladder | Existing elevated relationships (H-BT-017, H-BT-018, H-BT-032), H-BT-007 overhead controls. |
| Flammable vapors / gases near PAT or gas tool | H-DF-031 explicit. |

### 2.3 Collision rules

The candidate's 18 rules (§7) are accepted unchanged. The Engineer adds these — most from defects found in v1.4.0-p1 (E-7).

**Scope of every rule (AR-005 §14):** a collision rule is **phrase-scoped, contextual and cumulative**. It removes only the false reading of the specific phrase; it never removes a keyword globally from the task description. Example: "drill a beam flange and torque a process pipe flange" establishes both drilling into structural steel **and** process-flange bolting (regression D-10).

| Term | Rule |
|---|---|
| hammer | "Rotary hammer", "hammer drill", "SDS hammer" do **not** establish striking-tool records (H-BT-029, H-BT-030). Only a hammer used to strike does. (F-2) |
| flange | "Beam flange", "column flange", "flange of the beam / girder" do **not** establish process piping. (F-3) |
| boom | "Boom lift" does **not** establish crane operations. (F-4) |
| SDS | "SDS Plus", "SDS Max", "SDS drill / bit / chuck / hammer" are drill systems; "SDS" alone, or "review / read / check the SDS", is a safety data sheet. (F-5) |
| track | "Steel track", "metal track", "bottom track" (framing) does **not** establish drywall finishing or joint-compound silica. (F-14) |
| heat / heating | "Heating", "preheating", "induction heating" do **not** establish weather heat stress (Package 002 rule "heat alone does not establish hot work" extended). (F-10) |
| anchor | Inspect / check / verify / test an existing anchor establishes neither drilling nor installation. "Anchor bolt / anchor rod" keeps its Package 001 meaning. (F-7) |
| drill | "Fire drill", "evacuation drill", "emergency drill", "rescue drill", "drill rig", "rock drill", "blast hole", "drill and blast" do **not** establish ACT-0017 handheld drilling. (E-16) |
| bore | "Directional bore", "HDD", "jack and bore", "tunnel boring" do **not** establish ACT-0017. (E-16) |
| core | "Flux core" (welding) and "core sample" review do **not** establish core drilling. |
| bit | "Bit" establishes drilling only as drill / hole-saw / core / SDS bit, or with drill context. |
| pin | "Shot pin", "drive pin" → powder-actuated with fastening context; "drift pin" keeps H-BT-029; "pinch" is never "pin". |
| shot / shoot | "Shoot pins / shot pins" → PAT; "shot blast", "shotcrete" do not. |
| gun | Nail gun → nailer; powder gun, Hilti gun, Ramset gun → powder-actuated (SIL PO Decision 006 §3; AR-005 §5). Standalone Hilti or Ramset needs PAT fastening context — "Ramset adhesive anchor" is not PAT (D-3); impact gun, screw gun, MIG gun keep their meanings. |
| deck gun | Ambiguous (PAT, decking screw gun, fire monitor) — establishes nothing alone; PAT only alongside other PAT cues such as shoot, pins, powder or loads (SIL PO Decision 006 §3). |
| mag | "Mag drill" → magnetic drilling; nailer "magazine" and lifting magnet do not. |
| PT | Post-tensioned only with concrete, slab or tendon context. |
| rivet | "Hot rivet(ing)", "heated rivets", "heat rivets", "rivet forge" → hot work; other riveting does not (AR-005 §8). |
| induction / resistance heating | Hot work only per §3; never fuel gas, flashback, sparks, molten metal or slag. |

---

## 3. SIL PO Decision 005 — incorporation

### 3.1 §1 Powder-actuated tool face protection → P-000010
- **P-000010** registered: "Safety glasses and a face shield are mandatory for all powder-actuated tool operation." Linked control **C-000354** — PO wording: "Wear safety glasses and a face shield when operating powder-actuated fastening tools."
- Related to H-DF-027 and H-DF-028 `[if powder-actuated]` (all applicable PAT relationships).
- **Precedence** (same pattern as P-000009): for powder-actuated work, C-000354 presents in place of the general face-shield control C-000055. C-000054 (safety glasses) and C-000111 (goggles where required) remain; the face shield supplements primary eye protection and never replaces it. Manufacturer, project and exposure requirements are preserved.
- **Not extended** to pneumatic, battery-powered or gas-actuated tools. Those use exposure-based C-000054 / C-000055 / C-000111 (regression B-2, B-3).
- Basis recorded as company policy. OSHA 1926.302(e)(4) requires PPE per Subpart E (verified); the face shield is not attributed to OSHA.

### 3.2 §2 Induction and resistance heating — P2-U16 closed
Implementation rule (for the future authorized implementation; v1.4.0-p1 unchanged):

| Task description | Classification | Records |
|---|---|---|
| Induction or resistance heating **with an ignition cue** — combustibles, flammables, insulation, wood, cardboard, near / adjacent to combustible material, "fire" or "ignition hazard" | **Hot work** (Explicit) | H-HW-001 to H-HW-003 with P-000006, P-000007, P-000008 (C-000114, C-000115, C-000116); C-000393 |
| Induction or resistance heating where the task states the ignition potential is **genuinely absent** — "no ignition hazard", "no ignition potential", existing exclHotWork terms ("no hot work", "cold work only") | **Hot work not established** | Thermal and electrical; C-000393 still shown. **A contradictory ignition cue in the same task governs** — the statement does not override it (AD-010 §3.3) |
| Induction or resistance heating, **ignition potential uncertain or not stated** — including "area cleared of combustibles", "no combustibles", "combustibles removed" | **Conditional** hot work (rank C), with C-000393. **Combustible clearance is a hot work control, not proof that the process is no longer hot work** (AR-005 §10) — it never suppresses the permit, clearance or fire watch | Hot work records conditional |

In every row: H-HW-008 (contact burns), H-BT-026 (equipment electrical), heat stress where cued, and equipment-specific hazards apply independently of the hot work classification. **Not established** by induction or resistance heating (AR-005 §10): H-HW-012 welding fume, H-HW-011 welding-circuit shock, H-HW-009 / H-HW-010 arc radiation, H-HW-024 fuel gas, H-HW-025 flashback, H-HW-006 sparks / molten metal / slag. Induction heating also establishes H-DF-041 (electromagnetic fields).

No new policy record. P-000006 to P-000008 scope note updated in `SIL-POLICY-REGISTRY.md`. **P2-U16 closed** as a resolved PO decision.

### 3.3 §3 Regression requirements
All eight PO scenarios are in `SIL-PKG-003-REGRESSION.md` §B, with expected records.

### 3.4 §5 Open items
U-9 stays open. Package 001 and 002 validation continues in parallel. The six RCSC controls stay withheld. All carried into `SIL-UNRESOLVED-REGISTER.md`.

---

## 4. Reconciled hazard records (r1)

Each control shows its canonical ID. `[condition]` marks a relationship-specific condition. *(new)* marks a control added by this package. The Architect's original wording is preserved in `SIL-PKG-003.md`; where a candidate line was merged into an equivalent control, the review notes it.

**H-DF-001 — Contact with rotating drill bits and cutting tools** · *Consolidated into H-BT-010 — identifier retired, never reused*
- Applicability: Explicit: drilling, reaming, countersinking, powered thread tapping (via H-BT-010)
- Canonical hazard: H-BT-010 — Contact with or entanglement in rotating tools, bits, cutters, chucks, sockets or extensions. *(proposed generalization; current: "Fingers, gloves, clothing or lanyards caught in a rotating tool, bit, socket or extension")*
- Controls:
  - `C-000273` `[if drill]` *(new)* Keep hands off turning bits, cutters and chucks — never guide or steady a turning bit by hand.
  - `C-000274` `[if drill]` *(new)* Let the bit or cutter stop turning before touching it, the chuck or the workpiece.
  - `C-000025` Never hold the socket, extension or chuck while the tool runs.
  - `C-000277` `[if drill press or machine]` *(new)* Keep drill press and machine guards in place and adjusted as the manufacturer requires.
  - `C-000218` `[if small workpiece]` Clamp or support the workpiece before drilling, fastening, grinding or cutting, and do not hand-hold small pieces you cannot control. At a drill press, always secure the workpiece in a vise, clamp or fixture, whatever its size — never hold it by hand. *(proposed generalization T-9)*
- Review: Consolidated into H-BT-010 (generalized, see T-1). Contact and entanglement with a turning bit are controlled by the same means; a separate record would duplicate. 'Use fixtures rather than holding small pieces' → C-000218 (generalized, T-9).

**H-DF-002 — Entanglement with rotating drilling equipment** · *Consolidated into H-BT-010 — identifier retired, never reused*
- Applicability: Explicit: handheld drills, drill presses, magnetic drills (via H-BT-010)
- Canonical hazard: H-BT-010 — Contact with or entanglement in rotating tools, bits, cutters, chucks, sockets or extensions. *(proposed generalization; current: "Fingers, gloves, clothing or lanyards caught in a rotating tool, bit, socket or extension")*
- Controls:
  - `C-000026` Secure loose sleeves; keep lanyards and tool tethers clear of rotating parts.
  - `C-000275` `[if drill]` *(new)* Remove jewelry and secure long hair before using a drill or other rotating tool.
  - `C-000276` `[if exposed rotating-machinery operation (drill press or stationary machine)]` *(new)* Do not wear gloves at an exposed rotating spindle, chuck or bit, such as at a drill press — use a work method that keeps hands away from the rotation.
  - `C-000277` `[if drill press or machine]` *(new)* Keep drill press and machine guards in place and adjusted as the manufacturer requires.
  - `C-000278` `[if drill]` *(new)* Stop the tool before clearing chips or swarf, and clear them with a brush, hook or magnet — never with bare hands.
- Review: Consolidated into H-BT-010 as the Architect directed. The glove control conflicts with P-000001 (steel work gloves) at a drill press (E-4) — resolved by SIL PO Decision 006 §1: the no-gloves control takes precedence at the spindle. AR-005 §4: applies to the exposed rotating-machinery operation only — not to every step involving steel, and not to handheld powered tools.

**H-DF-003 — Sudden drill movement from binding or breakthrough** · *Consolidated into H-BT-004 — identifier retired, never reused*
- Applicability: Explicit: handheld drills, rotary hammers, hole saws, large-diameter drilling (via H-BT-004)
- Canonical hazard: H-BT-004 — Sudden tool movement from torque reaction, kickback or binding.
- Controls:
  - `C-000106` `[if drill]` Expect the bit to bind as it breaks through — hold the drill firmly, use the side handle wherever the drill has one or the manufacturer requires it, and ease off the trigger. *(proposed generalization T-14)*
  - `C-000011` Brace for the tool's reaction before starting; use the side handle where provided.
  - `C-000227` `[if large-diameter drilling or hole saw]` Keep your body out of the kickback path.
  - `C-000279` `[if drill]` *(new)* If the bit binds, release the trigger and let the drill stop before freeing it.
  - `C-000280` `[if drill]` *(new)* Where the drill has a clutch or kickback control, keep it enabled and set for the work.
- Review: Consolidated into H-BT-004 (already carries C-000106 [if drill]). 'Anticipate movement' and 'reduce feed approaching breakthrough' are already C-000106. 'Stable stance' merged into C-000011.

**H-DF-004 — Drill bit, cutter or attachment failure** · *Consolidated into H-BT-021 — identifier retired, never reused*
- Applicability: Explicit: powered drilling and boring (via H-BT-021)
- Canonical hazard: H-BT-021 — Socket, bit, cutter or other attachment coming off, breaking or shattering, including an ejected chuck key or unsecured attachment. *(proposed generalization; current: "Socket or attachment coming off or shattering")*
- Controls:
  - `C-000281` `[if drill]` *(new)* Inspect bits, cutters, hole saws and chucks before use; remove bent, cracked, dull or damaged ones from service.
  - `C-000282` `[if drill]` *(new)* Use a bit or cutter made for the material and method, in the correct size and shank for the tool.
  - `C-000053` Use the manufacturer-approved socket or attachment retention.
  - `C-000283` `[if drill]` *(new)* Run bits and cutters within the manufacturer's speed and feed ratings, and do not force the tool beyond its capacity.
  - `C-000285` `[if pneumatic percussion tool]` *(new)* Keep the safety clip or retainer installed on pneumatic percussion tools so attachments cannot be expelled.
  - `C-000054` Wear safety glasses.
- Review: Consolidated into **H-BT-021** (generalized, T-5), not H-BT-006 as the candidate suggested: H-BT-006 is failure of force-multiplying tools under load; H-BT-021 is an attachment coming off or shattering, which matches. Added 1926.302(b)(2) retainer control (verified).

**H-DF-005 — Ejected drill chuck key or unsecured attachment** · *Consolidated into H-BT-021 — identifier retired, never reused*
- Applicability: Conditional: keyed chucks; drill presses (keyed chuck common, not assumed) (via H-BT-021)
- Canonical hazard: H-BT-021 — Socket, bit, cutter or other attachment coming off, breaking or shattering, including an ejected chuck key or unsecured attachment. *(proposed generalization; current: "Socket or attachment coming off or shattering")*
- Controls:
  - `C-000284` `[if keyed chuck or drill press]` *(new)* Remove the chuck key before starting the drill — never leave a key or adjustment tool in the chuck.
  - `C-000053` Use the manufacturer-approved socket or attachment retention.
- Review: Consolidated into H-BT-021. Chuck-key control is conditional and never applied to keyless chucks; 'verify secure installation' and 'approved retention' = C-000053.

**H-DF-006 — Flying chips, fragments and drilling debris** · *Consolidated into H-HW-029 — identifier retired, never reused*
- Applicability: Explicit: drilling, reaming, anchor installation, mechanical fastening (via H-HW-029)
- Canonical hazard: H-HW-029 — Flying particles, sparks and fragments.
- Controls:
  - `C-000054` Wear safety glasses.
  - `C-000055` `[if debris can reach the face]` Add a face shield over safety glasses or goggles where debris or fragments can reach the face — a face shield does not replace eye protection.
  - `C-000111` `[if particles can get around glasses]` Wear goggles instead of safety glasses where falling or airborne debris can get around glasses.
  - `C-000120` Direct sparks, slag and particles away from people, equipment and combustibles.
  - `C-000222` `[if others nearby]` Set barriers where nearby workers could be hit by particles or sparks.
  - `C-000278` `[if drill]` *(new)* Stop the tool before clearing chips or swarf, and clear them with a brush, hook or magnet — never with bare hands.
- Review: Consolidated into H-HW-029. The grinding face-shield policy (C-000221 / P-000009) is **not** extended to drilling (candidate §6). Resolves the AD-009 known limitation 'Flying debris from vibrating tool' alongside H-HW-029 (Crosswalk).

**H-DF-007 — Cuts and punctures from sharp bits, swarf and drilled edges** · *Consolidated into H-BT-002, H-HW-008 — identifier retired, never reused*
- Applicability: Explicit: metal drilling, sheet-metal fastening, handling cuttings (via H-BT-002; hot chips via H-HW-008)
- Canonical hazard: H-BT-002 — Cuts and punctures from sharp metal surfaces, burrs, swarf, pipe ends and flanges. *(proposed generalization; current: "Cuts from sharp metal surfaces, burrs, pipe ends and flanges")*
- Canonical hazard: H-HW-008 — Burns from touching recently heated material.
- Controls:
  - `C-000006` Keep hands off unprotected plate, pipe and hole edges.
  - `C-000278` `[if drill]` *(new)* Stop the tool before clearing chips or swarf, and clear them with a brush, hook or magnet — never with bare hands.
  - `C-000005` Remove burrs only where the connection or flange requirements allow it — never on gasket seating faces.
  - `C-000004` `[if steel]` Wear work gloves when working with steel.
  - `C-000286` `[if non-steel sheet metal, chips or swarf]` *(new)* Wear gloves suited to the cut hazard when handling sharp sheet metal, chips or swarf — but never at an exposed rotating spindle or bit.
  - `C-000147` `[if drilling metal]` Let heated material cool, or handle it with tools or heat-resistant gloves.
- Review: Consolidated into H-BT-002 (generalized, T-2) and H-HW-008 (hot chips and cutters → C-000147).

**H-DF-008 — Uncontrolled rotation or movement of workpiece** · *Consolidated into H-HW-031 — identifier retired, never reused*
- Applicability: Explicit: drill presses, handheld drilling, unsecured material (via H-HW-031)
- Canonical hazard: H-HW-031 — Workpiece moving, rotating, rolling or binding during drilling, cutting or grinding. *(proposed generalization; current: "Workpiece moving, rolling or binding during cutting or grinding")*
- Controls:
  - `C-000218` Clamp or support the workpiece before drilling, fastening, grinding or cutting, and do not hand-hold small pieces you cannot control. At a drill press, always secure the workpiece in a vise, clamp or fixture, whatever its size — never hold it by hand. *(proposed generalization T-9)*
  - `C-000287` *(new)* If the workpiece shifts or starts to spin, release the switch, stop the tool and isolate it as needed before trying to regain control of the work.
- Review: Consolidated into H-HW-031 (generalized, T-7). Clamp / fixture / vise and 'no hand-holding small pieces' = C-000218 (generalized, T-9).

**H-DF-009 — Unexpected startup during attachment changes or servicing** · *Consolidated into H-HW-030 — identifier retired, never reused*
- Applicability: Explicit: powered drilling and fastening (via H-HW-030)
- Canonical hazard: H-HW-030 — Tool starting or discharging unexpectedly during an attachment change, jam clearing, adjustment or servicing. *(proposed generalization; current: "Tool starting unexpectedly during a wheel change or adjustment")*
- Controls:
  - `C-000224` Unplug the tool, remove the battery or shut off and bleed the air before changing wheels, bits or attachments, clearing jams or making adjustments. For stationary machinery, also control stored energy and apply the required lockout/tagout before servicing. *(proposed generalization T-10)*
  - `C-000225` Check that the switch is off and works correctly before plugging in or returning the tool to service.
  - `C-000288` `[if powder-actuated]` *(new)* Unload a powder-actuated tool before cleaning, servicing, clearing a jam or putting it away.
  - `C-000289` `[if gas-actuated]` *(new)* Remove the fuel cell and battery from a gas-actuated tool before servicing or clearing a jam, as the manufacturer instructs.
- Review: Consolidated into H-HW-030 (generalized, T-6). Disconnect / battery / air isolation = C-000224 (generalized, T-10).

**H-DF-010 — Loss of magnetic drill holding force** · *New canonical record*
- Applicability: Explicit: magnetic-base drilling (mag drill, magnetic drill, magnetic-base drill, annular cutter on a mag base). Ranks higher when vertical, overhead or elevated.
- Hazard: Magnetic drill shifting, detaching or falling when its holding force is lost.
- Controls:
  - `C-000107` Seat a magnetic drill fully on clean, flat steel and use its safety strap or chain as the manufacturer requires.
  - `C-000290` *(new)* Check that the steel's thickness, shape and surface allow full magnetic holding force, as the manufacturer specifies — do not drill where they don't.
  - `C-000291` *(new)* Attach the safety strap or chain to a point that will hold the drill if the magnet releases.
  - `C-000292` *(new)* Stop drilling if the base shifts or the holding-force indicator shows a problem.
  - `C-000293` `[if electromagnetic base]` *(new)* An electromagnetic base can release if power is lost — keep the safety strap or chain in place and stay out of the drill's fall path.
- Related canonical records: H-BT-018 [if elevated or overhead]; H-BT-004
- Review: New canonical record, as the candidate directs. C-000107 is reused as the primary control and stays on H-BT-004 [if magnetic drill]. No numeric thickness or holding-force values.

**H-DF-011 — Movement or detachment of core drilling equipment** · *New canonical record*
- Applicability: Explicit: stand-mounted and rig-mounted core drills. Handheld core drills → H-BT-004.
- Hazard: Core drill or stand moving, rotating or detaching during drilling.
- Controls:
  - `C-000294` *(new)* Anchor or mount the core drill stand by a method the manufacturer approves for the surface and drilling direction.
  - `C-000295` *(new)* Inspect the core drill stand, column, carriage and mounting hardware before use.
  - `C-000296` `[if vacuum mount]` *(new)* Use vacuum mounting only where the manufacturer permits it for the surface and drilling direction, with any secondary restraint required.
  - `C-000297` *(new)* Stop drilling if the stand moves, rocks or loses its mounting.
- Related canonical records: H-BT-004
- Review: New canonical record. No universal mounting method; no vacuum limits.

**H-DF-012 — Falling drill cores and breakthrough material** · *New canonical record*
- Applicability: Explicit: through-drilling walls, floors, slabs and overhead structures. Ranks high when the opposite side is occupied or below.
- Hazard: Bit, core or breakthrough material coming through or falling on the opposite side or below.
- Controls:
  - `C-000298` *(new)* Before drilling or fastening through a wall, floor or slab, find out what and who is on the opposite side, and where the bit, core or fastener will come through.
  - `C-000047` `[if elevated or through a floor or slab]` Barricade or control the area below; no one works below without protection.
  - `C-000231` Set an exclusion zone around the movement and drop area, and keep everyone out of the line of fire.
  - `C-000299` *(new)* Coordinate with anyone on the opposite side before starting and again at breakthrough.
  - `C-000300` `[if core drilling]` *(new)* Use a core retention method, and support heavy cores before they break free.
  - `C-000113` `[if an opening is left]` Protect against falls at any height into or onto dangerous equipment, and guard or cover holes and openings regardless of height.
- Related canonical records: H-BT-017 [if an opening is left]; H-BT-018
- Review: New canonical record. Generalized from cores to all through-drilling so it also covers candidate scenario 33 (drill into an occupied room). Reuses dropped-object (C-000047), line-of-fire (C-000231) and opening-protection (C-000113, P-000003) controls.

**H-DF-013 — Contact with concealed energized electrical systems** · *New canonical record*
- Applicability: Explicit: drilling or fastening into existing walls, floors, slabs, ceilings or equipment; conduit, cable or electrical cues. Conditional: other drilling into existing construction.
- Hazard: Contact with concealed energized conductors when drilling or fastening into walls, floors, slabs, ceilings or equipment.
- Controls:
  - `C-000301` *(new)* Identify concealed electrical, piping, process and other services from drawings, as-builts and site information before drilling or fastening into walls, floors, slabs, ceilings or equipment.
  - `C-000302` *(new)* Scan or locate concealed services where they may be present, using a method suited to the material — treat scan results as limited, not as proof the area is clear.
  - `C-000303` *(new)* Confirm the drilling or fastening location and depth are approved and clear before starting.
  - `C-000242` `[where isolation is required]` Follow the approved isolation and energy-control procedure, and verify the safe state before work.
  - `C-000304` *(new)* Stop at any unidentified obstruction, conduit, pipe, cable, tendon or reinforcement and get it evaluated before continuing.
- Review: New canonical record, distinct from H-BT-026 (tool supply shock). 1926.416(a)(3) verified: before work, the employer must determine whether any energized circuit, exposed or concealed, could be contacted.

**H-DF-014 — Release from concealed piping or process systems** · *New canonical record*
- Applicability: Explicit: drilling or fastening near embedded piping, process equipment or utilities; process-plant cues. Conditional: other drilling into existing construction.
- Hazard: Release of contents from concealed or adjacent piping, process lines or equipment damaged by drilling or fastening.
- Controls:
  - `C-000301` *(new)* Identify concealed electrical, piping, process and other services from drawings, as-builts and site information before drilling or fastening into walls, floors, slabs, ceilings or equipment.
  - `C-000302` *(new)* Scan or locate concealed services where they may be present, using a method suited to the material — treat scan results as limited, not as proof the area is clear.
  - `C-000303` *(new)* Confirm the drilling or fastening location and depth are approved and clear before starting.
  - `C-000242` `[where isolation is required]` Follow the approved isolation and energy-control procedure, and verify the safe state before work.
  - `C-000304` *(new)* Stop at any unidentified obstruction, conduit, pipe, cable, tendon or reinforcement and get it evaluated before continuing.
  - `C-000305` *(new)* If a pipe, line or vessel is struck, stop, clear the area and follow the site emergency procedure for its contents.
- Review: New canonical record. H-HW-035 covers release during hot work on a system and stays separate.

**H-DF-015 — Sudden release of stored energy from post-tensioning tendons** · *New canonical record*
- Applicability: Explicit: post-tensioned or PT slab / tendon cues only. Conditional: elevated slabs and prestressed members where post-tensioning is not established. Prestressed (pretensioned strand) members establish H-BT-013 structural weakening — a different failure mechanism (AR-005 §12).
- Hazard: Sudden release of post-tensioning tendon energy when drilling, coring, cutting or fastening into post-tensioned concrete.
- Controls:
  - `C-000306` *(new)* Find out whether the slab or member is post-tensioned or prestressed before drilling, coring or fastening into it.
  - `C-000307` *(new)* Drill, core or fasten into post-tensioned concrete only with the authorization the owner or engineer of record requires.
  - `C-000308` *(new)* Locate tendons by an approved method, and drill only at the approved locations and depths.
  - `C-000309` *(new)* Do not drill, core or fasten where tendon locations cannot be reliably established.
  - `C-000310` *(new)* If a tendon is struck or damaged, stop, keep everyone clear of the area and notify the responsible personnel.
- Related canonical records: H-BT-013
- Review: New canonical record, separate from ordinary reinforcement contact. 'PT' alone requires concrete or slab context (collision rule).

**H-DF-016 — Structural weakening from unauthorized drilling or reinforcement damage** · *Consolidated into H-BT-013 — identifier retired, never reused*
- Applicability: Explicit [if drilling, coring or anchoring into structural members] (via H-BT-013)
- Canonical hazard: H-BT-013 — Structural instability or collapse during erection, modification or removal.
- Controls:
  - `C-000255` Do not modify structural members without authorization.
  - `C-000311` *(new)* Drill, core or anchor into structural members only at the locations and sizes on the approved drawings, or as the engineer of record authorizes.
  - `C-000312` *(new)* Do not cut reinforcing steel, strands or tendons, or enlarge structural holes, without engineering authorization.
  - `C-000304` *(new)* Stop at any unidentified obstruction, conduit, pipe, cable, tendon or reinforcement and get it evaluated before continuing.
  - `C-000313` *(new)* Report misplaced or unauthorized holes for evaluation.
- Review: Consolidated into H-BT-013 ('modification' already in its text). Relationship-specific controls carry the drilling detail.

**H-DF-017 — Respirable crystalline silica exposure** · *New canonical record*
- Applicability: Explicit with a known or reasonably foreseeable silica-containing material (concrete, masonry, CMU, brick, stone, cement board, precast). Conditional — an assessment requirement only — where the material's composition is stated as unknown or is drywall, composite or another material that may contain silica. In that case the app presents the assessment form of the record, "Possible respirable crystalline silica exposure — material composition not established", with the identification and assessment controls only, so the exposure is never shown as confirmed (AD-010 §3.2). Drilling alone never establishes it (AR-005 §6).
- Hazard: Respirable crystalline silica exposure.
- Controls:
  - `C-000314` *(new)* Identify silica-containing materials, such as concrete, masonry and stone, before drilling, cutting or grinding them.
  - `C-000315` *(new)* Use the silica control method specified for the tool and task — for example, a shroud with a dust collector on handheld drills, or integrated water delivery on rig-mounted core drills.
  - `C-000395` `[if the prescribed method uses a dust collector]` *(new)* Where the prescribed silica control method uses a dust collector, it must provide at least the airflow the tool manufacturer recommends and have a filter of 99% or greater efficiency with a filter-cleaning mechanism — this is separate from the HEPA-filtered vacuum used for hole cleaning.
  - `C-000316` *(new)* Keep shrouds, hoses, filters and dust collectors maintained and working as the manufacturer specifies.
  - `C-000396` *(new)* Indoors or in enclosed areas, provide exhaust as needed; with wet methods, apply enough water to minimize visible dust.
  - `C-000317` `[if drilling]` *(new)* Clean drilled holes with a HEPA-filtered vacuum where the control method requires it.
  - `C-000318` *(new)* Clean up dust with a HEPA-filtered vacuum or wet method — do not dry sweep or use compressed air where it would raise dust.
  - `C-000319` *(new)* Follow the site's written silica exposure control plan.
  - `C-000397` `[if the task is not covered by a specified method]` *(new)* Where the task, tool or jurisdiction is not covered by a specified control method, assess the silica exposure as the applicable standard requires before starting.
  - `C-000271` Where the task's silica control method specifies a respirator, wear the respirator it specifies.
  - `C-000164` Use respiratory protection where the exposure assessment, a specified control method or the atmospheric conditions require it — selected for the contaminant and conditions, with an assigned protection factor adequate for the exposure, under the respiratory protection program. Never use an air-purifying respirator in an oxygen-deficient or IDLH atmosphere. *(proposed generalization T-13)*
- Review: New **generic** canonical record, reusable for future concrete packages. Table 1 verified (E-6): handheld and stand-mounted drills including rotary hammers — shroud with dust collection and HEPA hole cleaning, **no respirator required**; rig-mounted core drills — integrated water, no respirator; dowel drilling rigs — APF 10. Handheld core drilling is **not** a Table 1 task. C-000271 gains its first active relationship. r2 (AR-005 §6): Table 1 is task- and jurisdiction-specific; wet drilling does not by itself remove a respirator requirement; where a specified method requires a respirator it is kept (C-000271); outside a specified method, exposure assessment applies (C-000164, C-000397); no universal N95 or P100. Row (vii) dust-collector airflow and filter requirements added (verified).

**H-DF-018 — Inhalation of drilling, cutting and sanding dust** · *New canonical record*
- Applicability: Explicit with a non-silica material cue (wood, plywood, drywall, composite). Never establishes silica.
- Hazard: Inhalation of dust from drilling, cutting or sanding wood, drywall, metal or composite materials.
- Controls:
  - `C-000320` *(new)* Identify the material and its dust hazards, and review the SDS where one applies.
  - `C-000321` *(new)* Use dust extraction at the tool to capture dust at the source.
  - `C-000318` *(new)* Clean up dust with a HEPA-filtered vacuum or wet method — do not dry sweep or use compressed air where it would raise dust.
  - `C-000164` Use respiratory protection where the exposure assessment, a specified control method or the atmospheric conditions require it — selected for the contaminant and conditions, with an assigned protection factor adequate for the exposure, under the respiratory protection program. Never use an air-purifying respirator in an oxygen-deficient or IDLH atmosphere. *(proposed generalization T-13)*
- Review: New generic canonical record. r2 (AR-005 §6): drywall and composites are not classified as silica-free — they also establish the H-DF-017 assessment, and the SDS decides. AD-010 §3.6: the record title no longer describes this dust as non-silica; H-DF-018 makes no silica classification of any material.

**H-DF-019 — Exposure to hazardous coatings or existing building materials** · *New canonical record*
- Applicability: Explicit: lead, asbestos or a regulated-material cue. Conditional: painted, coated or existing materials whose composition is unknown. Age or paint alone never establishes lead or asbestos.
- Hazard: Exposure to lead, asbestos or other hazardous materials disturbed by drilling, cutting or fastening into existing coatings or building materials.
- Controls:
  - `C-000322` *(new)* Identify existing coatings and building materials before disturbing them, using the site's hazardous material surveys and test results.
  - `C-000173` Do not proceed on unidentified coatings where the exposure cannot be assessed.
  - `C-000323` *(new)* Do not drill, cut or fasten into suspect building materials, such as insulation, flooring, ceiling or wall materials, until they have been evaluated.
  - `C-000324` *(new)* Where lead, asbestos or another regulated material is confirmed, follow the required exposure-control procedure before disturbing it.
- Review: New canonical record for mechanical disturbance. Thermal disturbance stays with H-HW-016 and H-HW-018. Reuses C-000173.

**H-DF-020 — Electrical shock during wet drilling** · *Consolidated into H-BT-026 — identifier retired, never reused*
- Applicability: Explicit [if wet drilling or conductive location] (via H-BT-026)
- Canonical hazard: H-BT-026 — Electrical shock from powered tools and equipment.
- Controls:
  - `C-000072` Use the GFCI or other electrical protection required for the equipment and conditions.
  - `C-000071` Inspect cords and plugs before use.
  - `C-000073` Keep cords out of water and away from pinch points.
  - `C-000325` `[if wet drilling]` *(new)* Use drilling equipment rated for wet use, as the manufacturer specifies.
  - `C-000326` `[if wet drilling]` *(new)* Keep the motor, switches and connections protected from water and slurry; stop if water enters equipment not designed for it.
- Review: Consolidated into H-BT-026 as the Architect directed. GFCI and other protection = C-000072.

**H-DF-021 — Slips from drilling water and slurry** · *New canonical record*
- Applicability: Explicit: wet drilling, core drilling, slurry. Generic record, reusable beyond drilling.
- Hazard: Slips on water, slurry or other wet material on walking and working surfaces.
- Controls:
  - `C-000327` `[if drilling]` *(new)* Contain drilling water and slurry at the hole with a vacuum, collection ring or dams.
  - `C-000065` Clean up spilled fluid before continuing.
  - `C-000328` `[if drilling through a floor, slab or wall]` *(new)* Keep water and slurry from running through the hole, onto electrical equipment or into areas below.
  - `C-000329` *(new)* Collect and dispose of slurry as the project's environmental requirements specify.
- Review: New generic canonical record. Supersedes production T10 'Slurry slip hazard'. Runoff through the hole onto electrical equipment or areas below is added (E-9).

**H-DF-022 — Chemical irritation or burns from wet cement slurry** · *New canonical record*
- Applicability: Explicit: wet drilling or coring in cementitious material. Never applied to other drilling fluids by default.
- Hazard: Skin and eye burns from wet cement, concrete slurry or other alkaline material.
- Controls:
  - `C-000330` *(new)* Wear gloves and clothing that keep wet cement and slurry off the skin, as the SDS specifies.
  - `C-000331` *(new)* Wear goggles where liquids or slurry can splash into the eyes, and add a face shield where the face can be splashed.
  - `C-000332` *(new)* Remove slurry-soaked clothing and wash affected skin with clean water promptly.
  - `C-000333` *(new)* Follow the SDS first-aid instructions, and get medical attention for cement burns or eye contact.
- Review: New generic canonical record. Supersedes production T10 'Skin irritation and chemical burns from cement' (Crosswalk).

**H-DF-023 — Skin or respiratory exposure to anchor adhesives** · *New canonical record*
- Applicability: Explicit: adhesive or epoxy anchor installation. Adhesive alone does not establish anchor installation.
- Hazard: Skin, eye or respiratory exposure to anchor adhesives and their components.
- Controls:
  - `C-000334` *(new)* Review the SDS before using the product.
  - `C-000335` *(new)* Wear gloves compatible with the product, as the SDS specifies.
  - `C-000336` *(new)* Provide the ventilation the SDS requires, especially in enclosed areas.
  - `C-000331` *(new)* Wear goggles where liquids or slurry can splash into the eyes, and add a face shield where the face can be splashed.
  - `C-000337` *(new)* Handle, store, clean up and dispose of the product as the manufacturer and SDS specify.
  - `C-000164` Use respiratory protection where the exposure assessment, a specified control method or the atmospheric conditions require it — selected for the contaminant and conditions, with an assigned protection factor adequate for the exposure, under the respiratory protection program. Never use an air-purifying respirator in an oxygen-deficient or IDLH atmosphere. *(proposed generalization T-13)*
- Review: New canonical record.

**H-DF-024 — Mechanical anchor failure or pullout** · *New canonical record*
- Applicability: Explicit: mechanical, expansion, wedge, sleeve, drop-in, concrete screw and adhesive anchor installation. Adhesive-specific controls are conditional.
- Hazard: Anchor failure or pullout from incorrect selection, installation, curing or substrate.
- Controls:
  - `C-000338` *(new)* Install only the anchor type, size and system specified for the application and substrate — no substitutions without approval.
  - `C-000339` *(new)* Drill, clean and set each anchor by the approved installation instructions, including hole diameter, depth, embedment, edge distance and spacing.
  - `C-000340` `[if mechanical anchor]` *(new)* Use the specified setting tool, and tighten to the specified installation torque where one is given.
  - `C-000341` *(new)* Complete the required inspection, testing and acceptance before loading the anchor.
  - `C-000342` `[if adhesive]` *(new)* Check the adhesive system's approval, expiration date and storage conditions before use.
  - `C-000343` `[if adhesive]` *(new)* Confirm the adhesive system is approved for the substrate and the installation orientation, including overhead.
  - `C-000344` `[if adhesive]` *(new)* Use the specified dispensing and mixing nozzle, and discard the initial adhesive as the manufacturer instructs.
  - `C-000345` `[if adhesive]` *(new)* Observe the manufacturer's temperature limits and cure time — do not disturb or load the anchor before it has cured.
  - `C-000398` `[if adhesive, overhead or upwardly inclined, under sustained tension]` *(new)* For adhesive anchors installed overhead or upwardly inclined under sustained tension, verify the applicable design, installer qualification and inspection requirements before installation.
- Review: New canonical record that **absorbs H-DF-025** (E-2): both are the same consequence — anchor fails under load — and differ only in method controls. No numeric embedment, spacing, edge distance, torque, cure time or temperature.

**H-DF-025 — Adhesive anchor failure from incorrect installation or curing** · *Consolidated into H-DF-024 — identifier retired, never reused*
- Applicability: Conditional [if adhesive] (via H-DF-024)
- Canonical hazard: H-DF-024 — Anchor failure or pullout from incorrect selection, installation, curing or substrate.
- Controls:
  - `C-000342` *(new)* Check the adhesive system's approval, expiration date and storage conditions before use.
  - `C-000343` *(new)* Confirm the adhesive system is approved for the substrate and the installation orientation, including overhead.
  - `C-000339` *(new)* Drill, clean and set each anchor by the approved installation instructions, including hole diameter, depth, embedment, edge distance and spacing.
  - `C-000344` *(new)* Use the specified dispensing and mixing nozzle, and discard the initial adhesive as the manufacturer instructs.
  - `C-000345` *(new)* Observe the manufacturer's temperature limits and cure time — do not disturb or load the anchor before it has cured.
  - `C-000341` *(new)* Complete the required inspection, testing and acceptance before loading the anchor.
- Review: Consolidated into H-DF-024 with adhesive-specific conditional controls. Overhead adhesive anchors under sustained tension may have additional design and installer requirements (P3-U7, unverified).

**H-DF-026 — Failure of anchors used for life safety or lifting** · *New canonical record*
- Applicability: Explicit: installing, inspecting, testing or using fall protection, suspended access, lifting or life-safety anchors. Installation controls apply only when an anchor is being installed (AR-005 §12).
- Hazard: Failure of an anchor used for fall protection, suspended access or lifting.
- Controls:
  - `C-000346` `[if not a temporary beam anchorage connector]` *(new)* Use only anchors approved for fall protection, suspended access or lifting, as the application requires — never an ordinary construction anchor without that approval.
  - `C-000347` `[if installing]` *(new)* Install life-safety and lifting anchors to a design or approval by a qualified person or engineer.
  - `C-000339` `[if installing a drilled-in or post-installed anchor]` *(new)* Drill, clean and set each anchor by the approved installation instructions, including hole diameter, depth, embedment, edge distance and spacing.
  - `C-000341` `[if installing an anchor other than a temporary beam anchorage connector]` *(new)* Complete the required inspection, testing and acceptance before loading the anchor.
  - `C-000403` `[if inspecting, testing or using an existing anchor]` *(new)* Before using an existing anchor, confirm it is approved and identified for the application, and inspect it for damage, corrosion, deformation or movement.
  - `C-000404` `[if inspecting, testing or using an existing anchor or anchorage connector]` *(new)* Remove from service any anchor that is damaged, has arrested a fall or cannot be verified, until a qualified person evaluates it.
  - `C-000408` `[if temporary beam anchorage connector]` *(new)* Use an approved fall protection anchorage connector compatible with the beam dimensions, flange configuration and intended application.
  - `C-000417` `[if temporary beam anchorage connector]` *(new)* Inspect the anchorage connector before each use and remove defective equipment from service.
- Related canonical records: H-BT-017 [if fall protection]
- Review: New canonical record. 1926.502(d)(15) verified: 5,000 lb per employee attached, or designed as part of a complete system with a safety factor of at least two under a qualified person's supervision. **No numeric capacity is placed in user-facing text** (candidate §9).

**H-DF-027 — Unintended discharge of powder-actuated fastening tool** · *New canonical record*
- Applicability: Explicit: powder-actuated fastening (PAT requires fastening context where ambiguous).
- Hazard: Unintended discharge of a powder-actuated tool.
- Controls:
  - `C-000348` *(new)* Only workers trained on the specific powder-actuated tool in use may operate it.
  - `C-000349` *(new)* Test the tool's safety devices each day before loading, by the manufacturer's procedure.
  - `C-000350` *(new)* Load the tool only just before firing, and never leave a loaded tool unattended.
  - `C-000351` *(new)* Never point a fastening tool at yourself or anyone else, loaded or not.
  - `C-000355` *(new)* Keep your finger off the trigger until the tool is positioned to fasten, and never carry or pass a tool with a finger on the trigger.
  - `C-000352` *(new)* Never bypass, tie down or disable a fastening tool's safety or contact mechanism.
  - `C-000353` *(new)* Remove a damaged or malfunctioning tool from service until it is repaired.
  - `C-000288` *(new)* Unload a powder-actuated tool before cleaning, servicing, clearing a jam or putting it away.
  - `C-000354` *(new)* Wear safety glasses and a face shield when operating powder-actuated fastening tools.
- Related canonical records: H-BT-019
- Review: New canonical record. 1926.302(e)(1)–(6) verified. 'Hands clear of the open barrel end' (e)(5) → the hand-placement control on H-DF-028 and H-DF-029. P-000010 control attached (SIL PO Decision 005 §1).

**H-DF-028 — Fastener ricochet, fragmentation or rebound** · *New canonical record*
- Applicability: Explicit: powder- and gas-actuated fastening. Conditional [if nailer or stapler] for deflection (absorbs H-DF-033).
- Hazard: Fastener ricochet, deflection, fragmentation or rebound.
- Controls:
  - `C-000356` `[if powder-actuated]` *(new)* Never drive powder-actuated fasteners into very hard or brittle materials such as cast iron, glazed tile, surface-hardened steel, glass block, live rock, face brick or hollow tile, and fasten only into base materials the manufacturer approves.
  - `C-000394` `[if gas-actuated]` *(new)* Fasten with a gas-actuated tool only into the base materials and conditions its manufacturer approves.
  - `C-000405` `[if gas-actuated]` *(new)* Operate a nailer, stapler or gas-actuated tool only after instruction on that tool and its manufacturer's instructions.
  - `C-000357` `[if powder- or gas-actuated]` *(new)* Use the fasteners and the load or power setting the manufacturer specifies for the base material.
  - `C-000358` `[if powder- or gas-actuated]` *(new)* Keep the edge distance and spacing the manufacturer specifies. Never fasten into a spalled area left by an unsatisfactory fastening, and do not fasten into an existing hole unless the manufacturer permits it.
  - `C-000359` `[if powder-actuated]` *(new)* Use the shield, guard or attachment the manufacturer recommends for the work.
  - `C-000360` *(new)* Keep others out of the line of fire around and behind the fastening point.
  - `C-000354` `[if powder-actuated]` *(new)* Wear safety glasses and a face shield when operating powder-actuated fastening tools.
  - `C-000054` Wear safety glasses.
  - `C-000055` `[if gas-actuated or debris can reach the face]` Add a face shield over safety glasses or goggles where debris or fragments can reach the face — a face shield does not replace eye protection.
  - `C-000361` `[if nailer or stapler]` *(new)* Avoid knots, existing fasteners and hard spots that can deflect a nail or staple.
  - `C-000362` `[if nailer or stapler]` *(new)* Hold the tool's nose firmly and square against the work, and use the fastener length and depth setting suited to the material.
  - `C-000363` *(new)* Keep hands clear of the muzzle, the fastener path and any path the fastener could take through or off the material — never place a hand behind or beside the point being fastened.
  - `C-000218` `[if small workpiece]` Clamp or support the workpiece before drilling, fastening, grinding or cutting, and do not hand-hold small pieces you cannot control. At a drill press, always secure the workpiece in a vise, clamp or fixture, whatever its size — never hold it by hand. *(proposed generalization T-9)*
- Review: New canonical record that **absorbs H-DF-033** (E-3): deflection into the hand is the same mechanism at lower energy; method conditions keep PAT controls off nailers. 1926.302(e)(7), (e)(9), (e)(11) verified. Substrate list is regulatory text, not a universal restriction for nailers.

**H-DF-029 — Fastener penetration through substrate** · *New canonical record*
- Applicability: Explicit: powder-actuated, gas-actuated, nailing and stapling into thin or easily penetrated material, or with occupied space behind; and fastening into existing walls, floors, slabs or ceilings where concealed services may be present, **whatever the material thickness** (AR-005 §12).
- Hazard: Fastener passing through the material and striking people, services or equipment behind it.
- Controls:
  - `C-000298` *(new)* Before drilling or fastening through a wall, floor or slab, find out what and who is on the opposite side, and where the bit, core or fastener will come through.
  - `C-000364` `[if thin or easily penetrated material]` *(new)* Check that the material is thick or backed enough for the fastener, and use the fastening method specified for it.
  - `C-000363` *(new)* Keep hands clear of the muzzle, the fastener path and any path the fastener could take through or off the material — never place a hand behind or beside the point being fastened.
  - `C-000360` *(new)* Keep others out of the line of fire around and behind the fastening point.
  - `C-000301` `[if fastening into existing construction]` *(new)* Identify concealed electrical, piping, process and other services from drawings, as-builts and site information before drilling or fastening into walls, floors, slabs, ceilings or equipment.
- Review: New canonical record. 1926.302(e)(8) verified (easily penetrated material must be backed).

**H-DF-030 — Delayed discharge following PAT misfire** · *New canonical record*
- Applicability: Explicit: powder-actuated tools; misfire cue ranks it first.
- Hazard: Delayed discharge after a powder-actuated tool misfire.
- Controls:
  - `C-000365` *(new)* After a misfire, follow the manufacturer's complete misfire procedure — keep the tool in the firing position against the work surface for the time it specifies, and unload only as it directs.
  - `C-000366` *(new)* Handle and dispose of misfired loads as the manufacturer specifies.
  - `C-000353` *(new)* Remove a damaged or malfunctioning tool from service until it is repaired.
- Review: New canonical record. **1926.302(e) contains no misfire waiting period (verified).** Any period comes from ANSI A10.3 (incorporated by (e)(12), text not reviewed) or the manufacturer — none introduced (candidate §9).

**H-DF-031 — Fire or explosion from powder loads or gas-actuated fastening** · *New canonical record*
- Applicability: Explicit: powder- and gas-actuated fastening with a flammable-atmosphere cue; conditional otherwise (storage, fuel cells). Not hot work unless an ignition exposure or project requirement exists.
- Hazard: Fire or explosion from powder loads, fuel cells or fastening tools in a flammable atmosphere or near heat.
- Controls:
  - `C-000367` *(new)* Do not use powder-actuated or gas-actuated fastening tools in a flammable or explosive atmosphere.
  - `C-000133` `[if flammable vapors or gases may be present]` Test the atmosphere with calibrated equipment where required, and keep monitoring where the exposure or permit requires.
  - `C-000134` Stop work and leave the area if atmospheric conditions become unsafe.
  - `C-000368` *(new)* Store powder loads and fuel cells as the manufacturer specifies, away from heat, flame and other ignition sources.
  - `C-000369` *(new)* Use only the loads and fuel cells the manufacturer specifies for the tool.
  - `C-000370` *(new)* Remove damaged or leaking fuel cells from service, and dispose of loads and fuel cells by the approved procedure.
- Review: New canonical record. 1926.302(e)(10) verified. Reuses the generic atmosphere controls C-000133 and C-000134; the hot-work-worded C-000132 and C-000135 are not reused.

**H-DF-032 — Unintended nail or staple discharge** · *New canonical record*
- Applicability: Explicit: pneumatic, electric, battery and gas nailers and staplers. Nail gun alone does not establish pneumatic operation.
- Hazard: Unintended discharge of a nail or staple from a powered nailer or stapler.
- Controls:
  - `C-000405` *(new)* Operate a nailer, stapler or gas-actuated tool only after instruction on that tool and its manufacturer's instructions.
  - `C-000371` *(new)* Inspect the trigger and work-contact safety before use.
  - `C-000355` *(new)* Keep your finger off the trigger until the tool is positioned to fasten, and never carry or pass a tool with a finger on the trigger.
  - `C-000351` *(new)* Never point a fastening tool at yourself or anyone else, loaded or not.
  - `C-000352` *(new)* Never bypass, tie down or disable a fastening tool's safety or contact mechanism.
  - `C-000372` *(new)* Use the trigger or actuation mode the manufacturer and site specify for the task.
  - `C-000224` Unplug the tool, remove the battery or shut off and bleed the air before changing wheels, bits or attachments, clearing jams or making adjustments. For stationary machinery, also control stored energy and apply the required lockout/tagout before servicing. *(proposed generalization T-10)*
  - `C-000289` `[if gas-actuated]` *(new)* Remove the fuel cell and battery from a gas-actuated tool before servicing or clearing a jam, as the manufacturer instructs.
  - `C-000353` *(new)* Remove a damaged or malfunctioning tool from service until it is repaired.
- Review: New canonical record. 1926.302(b)(3) verified: pneumatic nailers and staplers with automatic feed above 100 psi must have a muzzle safety device. Trigger-mode wording names no mode (the PO or site decides).

**H-DF-033 — Nail or staple deflection into hands or body** · *Consolidated into H-DF-028 — identifier retired, never reused*
- Applicability: Conditional [if nailer or stapler] (via H-DF-028)
- Canonical hazard: H-DF-028 — Fastener ricochet, deflection, fragmentation or rebound.
- Controls:
  - `C-000363` *(new)* Keep hands clear of the muzzle, the fastener path and any path the fastener could take through or off the material — never place a hand behind or beside the point being fastened.
  - `C-000218` `[if small workpiece]` Clamp or support the workpiece before drilling, fastening, grinding or cutting, and do not hand-hold small pieces you cannot control. At a drill press, always secure the workpiece in a vise, clamp or fixture, whatever its size — never hold it by hand. *(proposed generalization T-9)*
  - `C-000361` *(new)* Avoid knots, existing fasteners and hard spots that can deflect a nail or staple.
  - `C-000362` *(new)* Hold the tool's nose firmly and square against the work, and use the fastener length and depth setting suited to the material.
- Review: Consolidated into H-DF-028.

**H-DF-034 — Ejected rivet mandrels and fastening components** · *Consolidated into H-BT-028 — identifier retired, never reused*
- Applicability: Explicit [if riveting] (via H-BT-028)
- Canonical hazard: H-BT-028 — Falling or ejected TC bolt splines, rivet mandrels or other spent fastener parts. *(proposed generalization; current: "Falling or ejected TC bolt splines")*
- Controls:
  - `C-000373` `[if riveting]` *(new)* Where the riveter has a mandrel collector, use it and empty it before it overfills.
  - `C-000374` `[if riveting]` *(new)* Use the nosepiece and rivets specified for the tool, and point the mandrel discharge away from people.
  - `C-000054` Wear safety glasses.
  - `C-000055` `[if debris can reach the face]` Add a face shield over safety glasses or goggles where debris or fragments can reach the face — a face shield does not replace eye protection.
  - `C-000353` `[if riveting]` *(new)* Remove a damaged or malfunctioning tool from service until it is repaired.
- Review: Consolidated into H-BT-028 (generalized, T-8). A spent spline and a spent mandrel are the same mechanism.

**H-DF-035 — Pinch and crush injuries during anchor setting or riveting** · *Consolidated into H-BT-001 — identifier retired, never reused*
- Applicability: Explicit: anchor setting, riveting, powered fastening (via H-BT-001)
- Canonical hazard: H-BT-001 — Pinch points while fitting, bolting, anchoring or fastening. *(proposed generalization; current: "Pinch points while fitting and bolting connections")*
- Controls:
  - `C-000375` `[if riveting or anchor setting]` *(new)* Keep fingers clear of riveter jaws, setting tools and the fastener head while setting.
  - `C-000003` Keep hands off mating surfaces while plies are drawn together.
  - `C-000376` *(new)* Agree on hand placement with anyone holding the material being fastened.
  - `C-000218` `[if small workpiece]` Clamp or support the workpiece before drilling, fastening, grinding or cutting, and do not hand-hold small pieces you cannot control. At a drill press, always secure the workpiece in a vise, clamp or fixture, whatever its size — never hold it by hand. *(proposed generalization T-9)*
  - `C-000224` `[if powered or tool-driven fastening]` Unplug the tool, remove the battery or shut off and bleed the air before changing wheels, bits or attachments, clearing jams or making adjustments. For stationary machinery, also control stored energy and apply the required lockout/tagout before servicing. *(proposed generalization T-10)*
- Review: Consolidated into H-BT-001 (generalized, T-1b).

**H-DF-036 — Impact injuries from hammer-driven anchor setting** · *Consolidated into H-BT-029, H-BT-030 — identifier retired, never reused*
- Applicability: Explicit [if hammer-set anchors or pins] (via H-BT-029 and H-BT-030)
- Canonical hazard: H-BT-029 — Flying fragments, or a drift pin ejected when struck.
- Canonical hazard: H-BT-030 — Hand struck by a missed hammer blow.
- Controls:
  - `C-000377` *(new)* Set anchors and pins with the specified setting tool — not a substitute punch, bolt or bar.
  - `C-000077` Remove mushroomed or damaged striking tools and pins from service.
  - `C-000079` Keep hands out of the strike zone; use a pin holder or long-handled tool to hold pins.
  - `C-000054` Wear safety glasses.
- Review: Consolidated into H-BT-029 and H-BT-030 as directed. 'Hammer' in rotary hammer or hammer drill must not establish these records (E-7).

**H-DF-037 — Musculoskeletal strain from sustained drilling force** · *Consolidated into H-BT-007, H-BT-008 — identifier retired, never reused*
- Applicability: Explicit: large-diameter, overhead, repetitive drilling and heavy fastening equipment (via H-BT-007 and H-BT-008)
- Canonical hazard: H-BT-007 — Strain from applying force or from handling heavy torque, tensioning, drilling or fastening equipment. *(proposed generalization; current: "Strain from applying force or from handling heavy torque or tensioning equipment")*
- Canonical hazard: H-BT-008 — Repetitive hand and wrist strain.
- Controls:
  - `C-000378` *(new)* Choose a drill sized for the hole and material, and use a stand or rig for large or repetitive holes where practical.
  - `C-000018` Set up to apply force at waist-to-chest height, not overhead or twisted.
  - `C-000379` `[if overhead drilling]` *(new)* Use an overhead drilling stand or extension where practical for repetitive overhead drilling.
  - `C-000020` Rotate tasks or workers on long bolting, impact, drilling or fastening runs to limit exposure. *(proposed generalization T-12)*
  - `C-000019` `[if heavy drill or core rig]` Move heavy tool heads, tensioners, pumps and core drill rigs with a handling method rated for their weight, configuration and access — do not climb carrying them. *(proposed generalization T-11)*
  - `C-000021` Keep wrists straight and use tools sized to the work.
- Review: Consolidated into H-BT-007 (generalized, T-3) and H-BT-008. C-000019 and C-000020 generalized (T-11, T-12).

**H-DF-038 — Hand-arm vibration from percussion drilling and fastening** · *Consolidated into H-BT-020 — identifier retired, never reused*
- Applicability: Explicit: hammer drills, rotary hammers, impact drivers (via H-BT-020)
- Canonical hazard: H-BT-020 — Hand-arm vibration.
- Controls:
  - `C-000380` *(new)* Select lower-vibration tools and bits suited to the material.
  - `C-000050` Keep tools maintained to reduce vibration.
  - `C-000381` *(new)* Use only the grip and feed force the work needs — a tighter grip passes more vibration to the hands.
  - `C-000382` *(new)* Limit vibration exposure time as the task's exposure assessment requires.
  - `C-000020` Rotate tasks or workers on long bolting, impact, drilling or fastening runs to limit exposure. *(proposed generalization T-12)*
  - `C-000383` *(new)* Report numbness, tingling, whitening or loss of feeling in the fingers.
  - `C-000051` Do not rely on anti-vibration gloves alone.
- Review: Consolidated into H-BT-020. No numeric exposure limits.

**H-DF-039 — Battery damage, overheating or thermal runaway** · *New canonical record*
- Applicability: Explicit: damaged, swollen, overheating or charging-battery cues. Conditional (low rank): cordless tools generally. Lithium-ion-specific content only where the chemistry is stated or established by the manufacturer (AR-005 §12); the controls are chemistry-neutral and manufacturer-based. Reusable for future battery equipment.
- Hazard: Rechargeable battery overheating, fire or thermal runaway.
- Controls:
  - `C-000384` *(new)* Inspect batteries for damage, swelling, leaks or unusual heat before use and before charging.
  - `C-000385` *(new)* Use only batteries and chargers the tool manufacturer approves.
  - `C-000386` *(new)* Protect batteries from impact, water and high heat, and keep their terminals from contacting metal objects.
  - `C-000387` *(new)* Remove damaged, swollen or overheating batteries from service — never charge them.
  - `C-000388` *(new)* If a battery smokes, hisses, swells or catches fire, move people away and follow the site emergency procedure.
- Review: New generic canonical record.

**H-DF-040 — Compressed-air injection or hose-related injury** · *New canonical record*
- Applicability: Explicit: pneumatic drills, nailers, staplers, riveters and compressed-air cleaning.
- Hazard: Compressed air entering the skin, eyes or body.
- Controls:
  - `C-000391` *(new)* Never point compressed air at yourself or anyone else, or use it to clean skin or clothing.
  - `C-000392` `[if compressed-air cleaning]` *(new)* Use compressed air for cleaning only when it is reduced to less than 30 psi, with effective chip guarding and the required PPE. This is a cleaning limit, not an air-tool operating pressure. On construction work, the limit does not apply to cleaning concrete forms, mill scale and similar.
- Related canonical records: H-BT-025 [if pneumatic]
- Review: Split, as the candidate allows: **injection** → new canonical H-DF-040; **hose whip and coupling** → H-BT-025 [if pneumatic], with C-000067 to C-000070 plus the new air-hose inspection and operating-pressure controls added there. 1926.302(b)(4)–(5) verified; the 30 psi value is user-facing per SIL PO Decision 006 §2.

**H-DF-041 — Exposure to electromagnetic fields from induction heating equipment** · *New canonical record*
- Applicability: Explicit: induction heating; high-frequency electromagnetic heating equipment; other equipment where the manufacturer's instructions identify electromagnetic-field exposure (AR-005 §9).
- Hazard: Exposure to electromagnetic fields from induction heating equipment.
- Controls:
  - `C-000399` *(new)* Follow the manufacturer's electromagnetic-field precautions and restricted areas for the induction heating equipment.
  - `C-000400` *(new)* Before exposure, check the restrictions that apply to anyone with an implanted or body-worn medical device.
  - `C-000401` *(new)* Keep the separation the manufacturer requires from energized induction coils and associated equipment.
  - `C-000402` *(new)* Do not bypass protective barriers or equipment safeguards.
- Review: New canonical record added by Architect Response 005 §9 (closes P3-U9). No universal separation distance or medical-device exclusion is introduced without equipment-specific validation.

**H-DF-042 — Unintended travel or disengagement of a beam anchorage connector** · *New canonical record*
- Applicability: Explicit: installing, using or repositioning a temporary fall protection anchorage connector that clamps onto or travels along a beam flange (beamers, sliding beam anchors and clamps, pivot D-ring beam anchors, fall protection beam clamps, beam glide anchors). Covers travel beyond the beam end or through a flange gap, splice, connection or other discontinuity, jaws not fully engaged, an incompatible flange and loosening or unintentional release. Not for lifting clamps, material-handling trolleys or clamp hardware for hangers and supports.
- Hazard: Beam anchorage connector traveling off the beam end or through a flange gap or discontinuity, or disengaging from the flange.
- Controls:
  - `C-000408` *(new)* Use an approved fall protection anchorage connector compatible with the beam dimensions, flange configuration and intended application.
  - `C-000409` `[if jaw-type connector]` *(new)* Verify both jaws are fully engaged on the beam flange and the locking mechanism is secured according to the manufacturer's instructions before connecting.
  - `C-000410` `[if sliding beam anchor]` *(new)* Before using a sliding beam anchor, inspect the entire intended travel path.
  - `C-000411` `[if sliding beam anchor]` *(new)* Identify beam ends, flange discontinuities, gaps, connection tabs and other locations where the anchor could disengage.
  - `C-000412` `[if sliding beam anchor]` *(new)* Do not allow a sliding beam anchor to travel beyond the usable beam flange.
  - `C-000413` `[if sliding beam anchor]` *(new)* Do not rely on connection tabs, bolts or adjacent structural members as travel stops unless they have been specifically verified as suitable for that purpose.
  - `C-000414` `[if sliding beam anchor]` *(new)* Where required, use manufacturer-approved travel stops or another approved method to prevent unintended disengagement. Do not improvise travel stops or modify the equipment.
- Review: New canonical record (Architect supplemental directive — temporary fall protection anchorage connectors): unintended travel and disengagement, which H-DF-026 (anchor failure) does not adequately describe. Improper jaw engagement, incompatible flange dimensions or configuration and unintentional release or loosening are disengagement mechanisms of this record.

**H-DF-043 — Swing fall** · *New canonical record*
- Applicability: Explicit: using, installing or repositioning a temporary fall protection anchorage connector.
- Hazard: Swing fall — striking structure or a lower level after a fall from an offset anchorage.
- Controls:
  - `C-000416` *(new)* Evaluate swing fall exposure and available fall clearance before use.
- Review: New canonical record (Architect supplemental directive): no existing canonical record describes swing fall exposure.

**H-DF-044 — Insufficient fall clearance** · *New canonical record*
- Applicability: Explicit: using, installing or repositioning a temporary fall protection anchorage connector.
- Hazard: Insufficient fall clearance — striking a lower level or obstruction before the fall is arrested.
- Controls:
  - `C-000416` *(new)* Evaluate swing fall exposure and available fall clearance before use.
- Review: New canonical record (Architect supplemental directive): no existing canonical record describes fall clearance. No clearance distance is placed in user-facing text.

---

## 5. Reuse of existing canonical controls

46 existing controls gain Package 003 relationships. Each appears in the registry's Related hazards column, tagged "P003".

| Control | Text (current) | New Package 003 relationships |
|---|---|---|
| C-000003 | Keep hands off mating surfaces while plies are drawn together. | H-BT-001 (P003: H-DF-035) |
| C-000004 | Wear work gloves when working with steel. | H-BT-002 (P003: H-DF-007) [if steel] |
| C-000005 | Remove burrs only where the connection or flange requirements allow it — never on gasket seating faces. | H-BT-002 (P003: H-DF-007) |
| C-000006 | Keep hands off unprotected plate, pipe and hole edges. | H-BT-002 (P003: H-DF-007) |
| C-000011 | Brace for the tool's reaction before starting; use the side handle where provided. | H-BT-004 (P003: H-DF-003) |
| C-000018 | Set up to apply force at waist-to-chest height, not overhead or twisted. | H-BT-007 (P003: H-DF-037) |
| C-000019 | Move heavy tool heads, tensioners and pumps with a handling method rated for their weight, configuration and access — do not climb carrying them. | H-BT-007 (P003: H-DF-037) [if heavy drill or core rig] |
| C-000020 | Rotate tasks or workers on long bolting or impact runs to limit exposure. | H-BT-007 (P003: H-DF-037); H-BT-008 (P003: H-DF-037); H-BT-020 (P003: H-DF-038) |
| C-000021 | Keep wrists straight and use tools sized to the work. | H-BT-008 (P003: H-DF-037) |
| C-000025 | Never hold the socket, extension or chuck while the tool runs. | H-BT-010 (P003: H-DF-001) |
| C-000026 | Secure loose sleeves; keep lanyards and tool tethers clear of rotating parts. | H-BT-010 (P003: H-DF-002) |
| C-000047 | Barricade or control the area below; no one works below without protection. | H-DF-012 (P003) [if elevated or through a floor or slab] |
| C-000050 | Keep tools maintained to reduce vibration. | H-BT-020 (P003: H-DF-038) |
| C-000051 | Do not rely on anti-vibration gloves alone. | H-BT-020 (P003: H-DF-038) |
| C-000053 | Use the manufacturer-approved socket or attachment retention. | H-BT-021 (P003: H-DF-004); H-BT-021 (P003: H-DF-005) |
| C-000054 | Wear safety glasses. | H-BT-021 (P003: H-DF-004); H-HW-029 (P003: H-DF-006); H-DF-028 (P003); H-BT-028 (P003: H-DF-034); H-BT-029 (P003: H-DF-036) |
| C-000055 | Add a face shield over safety glasses or goggles where debris or fragments can reach the face — a face shield does not replace eye protection. | H-HW-029 (P003: H-DF-006) [if debris can reach the face]; H-DF-028 (P003) [if gas-actuated or debris can reach the face]; H-BT-028 (P003: H-DF-034) [if debris can reach the face] |
| C-000065 | Clean up spilled fluid before continuing. | H-DF-021 (P003) |
| C-000067 | Use air tools with a positive connection to the hose that cannot come apart accidentally. | H-BT-025 (P003: from H-DF-040 (hose items)) [if pneumatic tool] |
| C-000068 | Install hose restraints (whip checks) at couplings. | H-BT-025 (P003: from H-DF-040 (hose items)) [if pneumatic hose] |
| C-000069 | Use excess-flow valves on supply lines where required — hose restraints and excess-flow valves do not replace each other. | H-BT-025 (P003: from H-DF-040 (hose items)) [if pneumatic supply line] |
| C-000070 | Shut off and bleed the air before disconnecting. | H-BT-025 (P003: from H-DF-040 (hose items)) [if pneumatic] |
| C-000071 | Inspect cords and plugs before use. | H-BT-026 (P003: H-DF-020) |
| C-000072 | Use the GFCI or other electrical protection required for the equipment and conditions. | H-BT-026 (P003: H-DF-020) |
| C-000073 | Keep cords out of water and away from pinch points. | H-BT-026 (P003: H-DF-020) |
| C-000077 | Remove mushroomed or damaged striking tools and pins from service. | H-BT-029 (P003: H-DF-036) |
| C-000079 | Keep hands out of the strike zone; use a pin holder or long-handled tool to hold pins. | H-BT-029 (P003: H-DF-036); H-BT-030 (P003: H-DF-036) |
| C-000106 | Expect the bit to bind as it breaks through — hold the drill firmly with the side handle and ease off the trigger. | H-BT-004 (P003: H-DF-003) [if drill] |
| C-000107 | Seat a magnetic drill fully on clean, flat steel and use its safety strap or chain as the manufacturer requires. | H-DF-010 (P003) |
| C-000111 | Wear goggles instead of safety glasses where falling or airborne debris can get around glasses. | H-HW-029 (P003: H-DF-006) [if particles can get around glasses] |
| C-000113 | Protect against falls at any height into or onto dangerous equipment, and guard or cover holes and openings regardless of height. | H-DF-012 (P003) [if an opening is left] |
| C-000120 | Direct sparks, slag and particles away from people, equipment and combustibles. | H-HW-029 (P003: H-DF-006) |
| C-000133 | Test the atmosphere with calibrated equipment where required, and keep monitoring where the exposure or permit requires. | H-DF-031 (P003) [if flammable vapors or gases may be present] |
| C-000134 | Stop work and leave the area if atmospheric conditions become unsafe. | H-DF-031 (P003) |
| C-000147 | Let heated material cool, or handle it with tools or heat-resistant gloves. | H-HW-008 (P003: H-DF-007) [if drilling metal] |
| C-000164 | Where ventilation alone is not enough, use respiratory protection selected from an exposure assessment, under the respiratory protection program. | H-DF-017 (P003); H-DF-018 (P003); H-DF-023 (P003) |
| C-000173 | Do not proceed on unidentified coatings where the exposure cannot be assessed. | H-DF-019 (P003) |
| C-000218 | Clamp or support the workpiece before grinding or cutting; do not hand-hold small pieces you cannot control. | H-BT-010 (P003: H-DF-001) [if small workpiece]; H-HW-031 (P003: H-DF-008); H-DF-028 (P003) [if small workpiece]; H-DF-028 (P003: H-DF-033) [if small workpiece]; H-BT-001 (P003: H-DF-035) [if small workpiece] |
| C-000222 | Set barriers where nearby workers could be hit by particles or sparks. | H-HW-029 (P003: H-DF-006) [if others nearby] |
| C-000224 | Unplug the tool, remove the battery or shut off and bleed the air before changing wheels or attachments. | H-HW-030 (P003: H-DF-009); H-DF-032 (P003); H-BT-001 (P003: H-DF-035) [if powered or tool-driven fastening] |
| C-000225 | Check that the switch is off and works correctly before plugging in or returning the tool to service. | H-HW-030 (P003: H-DF-009) |
| C-000227 | Keep your body out of the kickback path. | H-BT-004 (P003: H-DF-003) [if large-diameter drilling or hole saw] |
| C-000231 | Set an exclusion zone around the movement and drop area, and keep everyone out of the line of fire. | H-DF-012 (P003) |
| C-000242 | Follow the approved isolation and energy-control procedure, and verify the safe state before work. | H-DF-013 (P003) [where isolation is required]; H-DF-014 (P003) [where isolation is required] |
| C-000255 | Do not modify structural members without authorization. | H-BT-013 (P003: H-DF-016) |
| C-000271 | Where the task's silica control method specifies a respirator, wear the respirator it specifies. | H-DF-017 (P003) |

---

## 6. Company policy relationships

| Policy | Package 003 relationship |
|---|---|
| P-000001 Steel work gloves | Applies to handling steel before and after drilling or fastening, and to handheld powered tools. **Only** for the exposed rotating-machinery operation (drill press or stationary machine) does C-000276 present in place of C-000004 (SIL PO Decision 006 §1; AR-005 §4). No contradictory glove instruction for the same operation. |
| P-000002 A4 cut gloves | Applies to drilling or fastening during demolition, knife use and stainless steel lath (scenario 23). Stainless steel alone does not establish lath (scenario 22). Where it coincides with an exposed rotating-machinery operation, the safe work method separates material handling (A4 applies) from the machine operation (C-000276 applies) (AR-005 §4; D-1). |
| P-000003 Fall protection | Elevated drilling and fastening via H-BT-017. C-000113 for openings left by coring (H-DF-012). |
| P-000004 Boom / scissor tie-off | Unchanged; applies to drilling from lifts (scenario 27). |
| P-000005 Hearing protection | Rotary hammers, PAT, nailers via H-BT-019. |
| P-000006 to P-000008 Hot work | Drilling and mechanical fastening are not hot work (candidate §7). Induction / resistance heating per §3.2. Cumulative when a task also welds, cuts or grinds (scenarios 22, 29). PAT is not hot work absent an ignition exposure or project requirement (H-DF-031). |
| P-000009 Grinding face shield | **Not extended** to drilling or fastening (candidate §6). Applies to the grinding part of a cumulative task (scenario 22). |
| **P-000010** PAT face shield | New — §3.1. Not extended to pneumatic, battery or gas-actuated tools. |

---

## 7. Contextual ranking

Accepted as written (candidate §8). Applicability first, then consequence within a class (v1.4.0 engine: Explicit → Inferred → Legacy → Conditional). High-consequence records added to `SIL_CONSEQ` for ordering within a class: H-DF-013, H-DF-014, H-DF-015, H-BT-013 `[structural drilling]`, H-DF-012, H-DF-010, H-DF-011, H-DF-027, H-DF-028, H-DF-029, H-DF-026, H-DF-017, H-BT-017. The 15-per-page display with Show More (A2_PAGE_SIZE = 15) already meets the 15–20 target. No padding and no automatic selection.

---

## 8. Citation verification

| Provision | Result | Used by |
|---|---|---|
| OSHA-C 1926.302(b)(1)–(10) | **Verified** (osha.gov). (b)(2) retainers on pneumatic percussion tools; (b)(3) muzzle safety device on automatic-feed nailers and staplers above 100 psi; (b)(4) cleaning air below 30 psi with chip guarding and PPE, except concrete form, mill scale and similar cleaning; (b)(5) manufacturer's safe operating pressure. | C-000285, C-000371, C-000352, C-000392, C-000391, C-000390; C-000067, C-000069 |
| OSHA-C 1926.302(e)(1)–(12) | **Verified** (osha.gov). Training on the particular tool; daily test of safety devices; defective tools removed; PPE per Subpart E; load just before firing, never point, hands clear of barrel; never unattended loaded; no very hard or brittle materials (listed); back easily penetrated materials; no spalled areas; not in explosive or flammable atmospheres; manufacturer's shield / guard; ANSI A10.3-1970. **No misfire waiting period** (E-8). | H-DF-027 to H-DF-031 |
| OSHA-C 1926.1153 Table 1 (vi)–(ix), (c)(1)–(2), (f)(1)–(2), (g)(1) | **Verified** (osha.gov). See E-6. r2: row (vii) dust collector — airflow recommended by the tool manufacturer or greater, filter of 99% or greater efficiency with a filter-cleaning mechanism; (c)(2) exhaust indoors or in enclosed areas, and water at flow rates sufficient to minimize visible dust. Table 1 is task-specific and applies under federal OSHA construction jurisdiction; state plans and MSHA may differ. | H-DF-017 (C-000395, C-000396, C-000397) |
| OSHA-C 1926.416(a)(1)–(3) | **Verified** (Cornell LII — reliable secondary reproduction; official source preferred for final verification). (a)(3): before work, determine whether any energized circuit, exposed or concealed, may be contacted; post signs and inform employees. | H-DF-013 |
| OSHA-C 1926.502(d)(15) | **Verified** (osha.gov). See E-14. | H-DF-026 |
| OSHA-C 1926.300, 1926.95, 1926.102, 1926.62, 1926.1101, 1926.59; OSHA-GI 1910.212, 1910.242(b), 1910.243, 1910.132–138, 1910.1053, 1910.1200; MSHA Parts 56 and 62; ANSI A10.3; ACI 318 Ch. 17; AISC; PTI | **Unverified** — P3-U10, P3-U11 | Noted per control |

No citation appears in user-facing text (candidate §9).

**Verification status (AR-005 §13):** "verified (Engineer, …)" records the Engineer's check of the named source. It is **not** Architect validation; independent Architect validation of OSHA-C, OSHA-GI and MSHA provisions remains open under P3-U10 to P3-U12.

---

## 9. Unresolved items — Package 003 (r2)

Full text and owners: `SIL-UNRESOLVED-REGISTER.md`.

| # | Item | Status | Owner |
|---|---|---|---|
| P3-U7 | Adhesive anchors overhead or upwardly inclined under sustained tension — validate ACI 318, adopted code and project requirements before specific certification or inspection requirements are presented as mandatory (C-000398 added as a verification control) | **Open** — technical validation | Architect |
| P3-U10 | Unverified citations (§8); independent Architect validation of OSHA-C, OSHA-GI and MSHA | **Open** | Architect |
| P3-U11 | OSHA-GI and MSHA (Parts 56, 62) equivalents | **Open** | Architect |
| P3-U12 | Retrieve and review the OSHA gas-actuated tool training interpretation | **Open** | Architect |
| P3-U13 | v1.4.0-p1 defects F-1 to F-16 | **Accepted** (AR-005 §14) — correct at the authorized implementation | Engineer, on PO authorization |

**Closed by SIL PO Decision 005:** P2-U16.
**Closed by SIL PO Decision 006:** P3-U1, P3-U5, P3-U6.
**Closed by Architect Response 005:** P3-U2 (§1), P3-U3 (§2), P3-U4 (§3), P3-U8 (§8), P3-U9 (§9).
**Closed by AD-010 §1:** P3-U14 (99% filter efficiency in C-000395), P3-U15 (C-000164 rewording).

> **Repository Record (AD-008 §6):** Candidate crosswalk for Package 003, revision r1. Not approved. Nothing in production is changed by this document (SIL PO Decision 005 §6).

# SIL-PKG-003 — Production Record Crosswalk (r1)

**Production baseline:** v1.4.0-p1, commit `76ac7c7` (legacy library `TASK_TO_HAZARD` T*n* / `HAZ_TO_CONTROL` H*n* / controls C*n*, as exported in `A4-LIBRARY-EXPORT.md`).
**Rules carried from Packages 001–002:**
- A supersession stands only if the canonical record is at least as broad as the production string.
- The canonical record inherits every production relationship (task-entry keywords), with that relationship's own applicability, except where a collision rule (§B) removes a false relationship.
- **Split supersession:** where one production string combines several mechanisms, every listed canonical record supersedes it and inherits the relationship.
- A production string that names a **consequence** rather than a mechanism ("Hand injury") is not superseded by a single record. It is retained until the Architect decides.

---

## A. Production hazard strings — supersession proposals (P3-U4)

| # | Production entry | Production string | Proposed canonical | Applicability correction | Disposition |
|---|---|---|---|---|---|
| 1 | T2 Drilling / Fastening / Anchoring | Puncture hazard | — | — | **Retain** — ambiguous (bit, swarf or fastener). Architect to decide. |
| 2 | T2 | Flying debris / chips | H-HW-029 | — | Supersede |
| 3 | T2 | Eye injury | H-HW-029 | — | Supersede — consequence string, but T2's only eye mechanism is flying chips |
| 4 | T2 | Hand injury | — | — | **Retain** — consequence, several mechanisms |
| 5 | T2 | Rotating equipment entanglement | H-BT-010 | — | Supersede |
| 6 | T2 | Kickback / torque reaction | H-BT-004 | — | Supersede |
| 7 | T2 | Noise exposure | H-BT-019 | — | Supersede (identical text) |
| 8 | T2 | Silica exposure when drilling concrete | H-DF-017 | **Only with a silica-material cue** (F-1) | Supersede |
| 9 | T2 | Electrical shock | H-BT-026 + H-DF-013 (split) | H-DF-013 explicit only with an existing-construction or service cue | Supersede |
| 10 | T3 Powder-Actuated / Nail Guns / Deck Guns | Puncture hazard from misfire or ricochet | H-DF-028 + H-DF-030 (split) | H-DF-030 powder-actuated only | Supersede |
| 11 | T3 | Embedded fastener hazard | H-DF-032 + H-DF-028 (split) | — | Supersede — Architect to confirm the reading (fastener driven into the body) |
| 12 | T3 | Flying debris | H-HW-029 | — | Supersede |
| 13 | T3 | Struck-by from projectile | H-DF-028 + H-DF-029 (split) | — | Supersede |
| 14 | T3 | Noise exposure | H-BT-019 | — | Supersede |
| 15 | T3 | Hand and foot injury | — | — | **Retain** — consequence |
| 16 | T10 Concrete / Masonry | Respirable silica exposure | H-DF-017 | — | Supersede |
| 17 | T10 | Skin irritation and chemical burns from cement | H-DF-022 | Wet cementitious work | Supersede |
| 18 | T10 | Slurry slip hazard | H-DF-021 | — | Supersede |
| 19 | T10 | Dust inhalation | — | — | **Retain** — for concrete this is silica (row 16); not H-DF-018 |
| 20 | T21 Noise / Vibration | Flying debris from vibrating tool | H-HW-029 | — | Supersede — **resolves the AD-009 known limitation** (near-duplicate beside H-HW-029) |
| 21 | T21 | Vibration exposure (hand-arm) | H-BT-020 | — | Supersede |
| 22 | T21 | Noise-induced hearing damage | H-BT-019 | — | Supersede |
| 23 | T35 Drywall / Framing | Noise from screw gun and framing operations | H-BT-019 | — | Supersede |

T10 "Vibration exposure from jackhammer", T17 / T38 "Silica and dust exposure" and "Lead or asbestos in older structures" are outside this package's activities and are left for the packages that own them. (H-DF-017 and H-DF-019 are generic and can absorb them then.)

---

## B. Production keys — recognition corrections

| Production entry | Key | Correction |
|---|---|---|
| T2 | anchor | Inspect / check an existing anchor must not establish drilling (F-7). |
| T2 | fastener, bolt installation | Overlap with Package 001 bolting kept; no change. |
| T2 | tapcon | Brand → concrete screw installation only. |
| T3 | hilti gun, ramset, deck gun | Brand and ambiguous terms — P3-U6. |
| T3 | nail gun | Does not establish pneumatic operation. |
| T3 | gas nailer | Gas-actuated: not oxy-fuel, not hot work. |
| T5 Crane Operations | boom | "Boom lift" must not establish crane operations (F-4). |
| T10 | core drilling | Also establishes ACT-0017 core drilling (H-DF-011, H-DF-012). |
| T11 Painting / Coatings, T19 Chemical Use | adhesive | Anchor adhesive must not establish coating-application records such as "Confined space entry for interior coating" (F-6). |
| T19 | sds | "SDS Plus / SDS Max" must not establish chemical use (F-5). |
| T20 Weather | heat | "Heating", "preheating", "induction heating" must not establish weather records (F-10). |
| T21 | hammer drill | Keep for noise and vibration; must not establish striking records (F-2). |
| T30 Process Piping | flange | "Beam / column flange" must not establish process piping (F-3). |
| T35 Drywall | track | "Steel / metal track" must not establish joint-compound silica (F-14). |

---

## C. v1.4.0-p1 behaviors found by the candidate scenarios (P3-U13)

Each was observed by running the scenario text through the production engine (`getSuggestions('hazard', …)`, November 26, 2026). For correction at implementation only.

| # | Scenario | Observed in v1.4.0-p1 | Correct behavior |
|---|---|---|---|
| F-1 | Cordless drill structural steel; drill press brackets; tap threads; unspecified material | "Silica exposure when drilling concrete" for **every** drilling task | Silica only with a silica-material cue |
| F-2 | Rotary hammer; SDS Max rotary hammer | "Flying fragments, or a drift pin ejected when struck"; "Hand struck by a missed hammer blow" | No striking records |
| F-3 | Mag drill overhead in beam flange | 9 process-piping hazards (acid release, steam burns, line failure) | None |
| F-4 | Self-drilling screws from boom lift | Crane hazards (swing radius, power line, rigging failure, outriggers) | Lift hazards only |
| F-5 | SDS Max rotary hammer | Chemical-use hazards | None |
| F-6 | Adhesive anchors; review SDS for anchor adhesive; load adhesive anchor | Coating-application hazards incl. "Confined space entry for interior coating", "Slip hazard from spilled coating" | H-DF-023, H-DF-024 |
| F-7 | Inspect existing fall protection anchor | Drilling hazards (kickback, entanglement, silica) | No drilling or installation records |
| F-8 | Battery brad nailer wood trim; blind rivets sheet metal | **No suggestions** | H-DF-032 / H-DF-028; H-BT-028 / H-BT-001 / H-BT-002 |
| F-9 | Pneumatic framing nailer; pneumatic drill confined space | "High-pressure hydraulic fluid injection", "Eye injury from pressure spray" (source not traced) | H-BT-025, H-DF-040; no hydraulic records |
| F-10 | Resistance heating PWHT; induction heating with combustibles | Weather records (lightning, cold stress, reduced visibility) | None |
| F-11 | Induction preheating structural steel | H-HW-006 "Burns from sparks, molten metal and slag" | Not established (E-12) |
| F-12 | Resistance heating PWHT **on pipe weld** | Welding-process records (welding circuit, arc radiation, weld fume) — the weld is the object | Package 002 object rule extended to "on a weld" |
| F-13 | Concrete drilling and anchoring tasks | "Struck-by from concrete pump hose", "Fall into form or excavation" | Concrete-placement records need a placement cue |
| F-14 | PAT steel track | Drywall records incl. "Silica from joint compound sanding" | PAT records |
| F-15 | Drill wall containing electrical conduits | Electrical-work category (arc flash, LOTO); concealed-conductor contact missing | H-DF-013 first; electrical-work records only with electrical-work cues |
| F-16 | Core drill post-tensioned slab; drill prestressed beam | No tendon or structural-authorization hazard | H-DF-015, H-BT-013 |

---

## D. Production controls

| Production control | Line | Canonical | Disposition |
|---|---|---|---|
| C5 (silica) | "Follow site silica exposure control plan" | C-000319 | Equivalent — supersede |
| C5 | "Avoid dry sweeping — use wet methods or HEPA vacuum" | C-000318 | Equivalent — supersede |
| C5 | "Use wet cutting or grinding methods where feasible" | C-000315 | Related, **not** equivalent ("where feasible" is weaker than a specified Table 1 method) — retain for non-drilling tasks |
| C5 | "Use HEPA vacuum attachment on grinders and saws" | C-000315, C-000317 | Related — retain for grinders and saws |
| C5 | "Review SDS for silica content of material before work" | C-000314 | Related — retain |
| C5 | "Maintain good housekeeping to prevent dust accumulation" | C-000318 | Related — retain |
| C4 (debris) | "Wear approved safety glasses…", "Use face shield…" | C-000054, C-000055 | Already equivalent (Package 001) |
| C6 (chemical) | "Review SDS…", "Wear chemical-resistant gloves…", "Wear eye and face protection for splash or mist exposure" | C-000334, C-000335, C-000331 | Equivalent **for anchor adhesives only** — C6 lines stay for other chemicals |
| C15 (slip) | "Clean spills promptly and mark wet areas" | C-000065 | Already equivalent |

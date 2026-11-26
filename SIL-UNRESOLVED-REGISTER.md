> **Repository Record (AD-008 §6):** Consolidated register of unresolved items across Safety Intelligence Library Packages 001–003, created with Package 003 r1 (SIL PO Decision 005 §5; candidate §11). Not approved. Nothing in production is changed by this document (SIL PO Decision 005 §6).

# Safety Intelligence Library — Consolidated Unresolved Register

**Status at P003 r1 (November 26, 2026):** 9 carried open (Packages 001–002) · 13 new (Package 003) · 1 closed this revision (P2-U16).
Resolved items from earlier packages stay recorded in their package files.

## Open — carried from Packages 001 and 002

| # | Item | Owner | Source |
|---|---|---|---|
| U-4 | Unverified citations: 1926.754(a), 1926.752(e), 1926.753(d), 1926.755, 1926.757, 1926.760(a)–(b), 1926.300–.302 except Architect-checked items, 1926.404(b)(1), 1926.502(d)/(j), 1926.1053(b)(22), 1926.52/.101/.102, 1926.95/.28, 1926.64; all OSHA-GI and MSHA references not marked verified; MSHA 56.13021 100-psi definition. *P003 note:* 1926.302(b) and (e) and 1926.502(d)(15) are now verified. | Architect | P001 §9 |
| U-5 | RCSC provisions other than §2.11; AISC 303/360; ASME PCC-1; whether client procedures govern | Architect | P001 §9 |
| U-9 | Company vs. client requirements beyond hand protection | PO | P001 §9; SIL PO Decision 005 §5 |
| U-10 | OSHA-GI and MSHA equivalents marked "To be identified" | Architect | P001 §9 |
| U-20 | The six withheld RCSC controls (C-000081, -082, -083, -085, -086, -087) return to the app once U-5 is validated | Architect | P001 §9; PO-008 §3 |
| P2-U10 | Unverified citations (Package 002 §7 list) | Architect | P002 §8 |
| P2-U11 | MSHA Part 56 equivalent of 57.14116 (constant hand pressure on hand-held grinders) | Architect | P002 §8 |
| P2-U17 | C-000259 basis (welding machines outside confined spaces) | Architect | P002 §8 |
| — | Remote push of `production-baseline-v1.2.0` and `production-baseline-v1.3.0` tags deferred (tags exist locally) | — | BASELINE.md; PO-008 report |

## Open — new in Package 003

| # | Item | Owner |
|---|---|---|
| P3-U1 | **Gloves at exposed rotating spindles vs. P-000001.** C-000276 ("Do not wear gloves at an exposed rotating spindle…") conflicts with C-000004 for steel work at a drill press. Proposed precedence in `SIL-POLICY-REGISTRY.md`. Held until decided. | PO |
| P3-U2 | Accept the 12 proposed text generalizations (T-1 to T-12): 8 hazards, 4 controls | Architect |
| P3-U3 | Accept the 18 consolidations — notably H-DF-004 → H-BT-021 (not H-BT-006), H-DF-025 → H-DF-024, H-DF-033 → H-DF-028, H-DF-040 split | Architect |
| P3-U4 | Production supersession proposals (Crosswalk §A rows 1–23, §D) — including the retained consequence strings ("Puncture hazard", "Hand injury", "Hand and foot injury") | Architect |
| P3-U5 | **Numeric user-facing text:** C-000392 — compressed air for cleaning reduced below 30 psi (1926.302(b)(4), verified). Include as written, or withhold the number. | PO |
| P3-U6 | PAT field vocabulary: "Hilti gun", "Ramset", "shoot / shot pins" (PAT recognition?) and "deck gun" (currently ambiguous) | PO |
| P3-U7 | Adhesive anchors installed overhead or upwardly inclined under sustained tension — additional design and installer requirements (ACI 318, unverified) | Architect |
| P3-U8 | Hot structural riveting as hot work (heated rivets) vs. cold structural fasteners | Architect |
| P3-U9 | Electromagnetic-field exposure near induction heating equipment (implanted medical devices) — scope for a record | Architect |
| P3-U10 | Unverified citations: 1926.300, .95, .102, .62, .1101, .59; 1910.212, .242(b), .243, .132–.138, .1053, .1200; ANSI A10.3; ACI 318 Ch. 17; AISC; PTI | Architect |
| P3-U11 | OSHA-GI and MSHA (Parts 56, 62) equivalents for drilling, PAT and nailers | Architect |
| P3-U12 | OSHA interpretation: do gas-actuated tools require the same model-specific training as powder-actuated tools under 1926.302(e)? (title seen, letter not reviewed) | Architect |
| P3-U13 | v1.4.0-p1 defects F-1 to F-16 (Crosswalk §C) — correct at the authorized implementation | Engineer, on PO authorization |

## Closed this revision

| # | Item | Resolution |
|---|---|---|
| P2-U16 | Induction and resistance heating as hot work | **Closed** — SIL PO Decision 005 §2: hot work when the process creates an ignition hazard; conditional when ignition potential can't be established; thermal, electrical and equipment hazards independent. Implementation rule: `SIL-PKG-003-RECONCILED.md` §3.2. |

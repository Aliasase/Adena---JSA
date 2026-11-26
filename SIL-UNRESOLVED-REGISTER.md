> **Repository Record (AD-008 §6):** Consolidated register of unresolved items across Safety Intelligence Library Packages 001–003, created with Package 003 r1; updated in r2 (Architect Response 005) and r2.1 (AD-010). Not approved. Nothing in production is changed by this document (SIL PO Decision 005 §6).

# Safety Intelligence Library — Consolidated Unresolved Register

**Status at the v1.4.1-p1 production release (November 26, 2026, PO-009):** 9 carried open (Packages 001–002) · 4 open and 1 deferred (P3-U16) from Package 003 · 3 recognition defects recorded for the next authorized development cycle (P3-U17 to P3-U19, Architect disposition of the PO-009 release closure) · closed in Package 003: 13 (P2-U16; P3-U1, U2, U3, U4, U5, U6, U8, U9, U13, U14, U15). Package 003 implementation and field acceptance are complete (PO-009); Phase A-4 remains open.
**Correction rule for P3-U17 to P3-U19:** preserve cumulative applicability — where the task establishes several work methods or exposures (e.g. fabricating a spool and then breaking an existing process flange; cutting steel; torch-applied and adhered roofing in one task), every applicable relationship still applies.
Resolved items from earlier packages stay recorded in their package files. "Verified (Engineer, …)" records the Engineer's check of a source; it is not Architect validation (Architect Response 005 §13).

## Open — carried from Packages 001 and 002

| # | Item | Owner | Source |
|---|---|---|---|
| U-4 | Unverified citations: 1926.754(a), 1926.752(e), 1926.753(d), 1926.755, 1926.757, 1926.760(a)–(b), 1926.300–.302 except Architect-checked items, 1926.404(b)(1), 1926.502(d)/(j), 1926.1053(b)(22), 1926.52/.101/.102, 1926.95/.28, 1926.64; all OSHA-GI and MSHA references not marked verified; MSHA 56.13021 100-psi definition. *P003 note:* 1926.302(b), 1926.302(e) and 1926.502(d)(15) have Engineer verification; Architect validation pending. | Architect | P001 §9 |
| U-5 | RCSC provisions other than §2.11; AISC 303/360; ASME PCC-1; whether client procedures govern | Architect | P001 §9 |
| U-9 | Company vs. client requirements beyond hand protection | PO | P001 §9; SIL PO Decision 005 §5 |
| U-10 | OSHA-GI and MSHA equivalents marked "To be identified" | Architect | P001 §9 |
| U-20 | The six withheld RCSC controls (C-000081, -082, -083, -085, -086, -087) return to the app once U-5 is validated | Architect | P001 §9; PO-008 §3; AR-005 §13 |
| P2-U10 | Unverified citations (Package 002 §7 list) | Architect | P002 §8 |
| P2-U11 | MSHA Part 56 equivalent of 57.14116 (constant hand pressure on hand-held grinders) | Architect | P002 §8 |
| P2-U17 | C-000259 basis (welding machines outside confined spaces) | Architect | P002 §8 |
| — | Remote push of `production-baseline-v1.2.0` and `production-baseline-v1.3.0` tags deferred (tags exist locally) | — | BASELINE.md; PO-008 report |

## Open — Package 003

| # | Item | Owner |
|---|---|---|
| P3-U7 | Adhesive anchors installed overhead or upwardly inclined under sustained tension — validate ACI 318, adopted code and project requirements before specific certification or inspection requirements are presented as mandatory. C-000398 added as a conditional verification control (AR-005 §7). | Architect — technical validation |
| P3-U10 | Unverified citations: 1926.300, .95, .102, .62, .1101, .59; 1910.212, .242(b), .243, .132–.138, .1053, .1200; ANSI A10.3; ACI 318 Ch. 17; AISC; PTI. Independent Architect validation of OSHA-C, OSHA-GI and MSHA provisions, including those with Engineer verification. | Architect |
| P3-U11 | OSHA-GI and MSHA (Parts 56, 62) equivalents for drilling, PAT and nailers | Architect |
| P3-U12 | Retrieve and review the OSHA interpretation on gas-actuated tool training under 1926.302(e). Equipment-specific instruction is kept regardless (C-000405). | Architect |
| P3-U16 | **Deferred library expansion** (Architect disposition of ED-6, November 26, 2026): foundation, geotechnical and surface-mining drill-rig operations. A bare "drill rig" step returns no hazards in v1.4.1; existing production drilling and mining coverage is preserved. Recorded only — not authorization to develop the package. | Architect / PO |
| P3-U17 | **Recognition defect** (Architect disposition, PO-009 release closure): distinguish pipe-spool fabrication from existing process-piping work. Shop or field fabrication of new spools ("pipe spool", flange fit-up on new pipe) must not establish in-service process hazards or line-break / depressurization controls without process-system context. | Engineer (next authorized development cycle) |
| P3-U18 | **Recognition defect** (Architect disposition, PO-009 release closure): sharp-metal exposure (H-BT-002, "Sharp edges on steel") must not independently trigger cutting-tool controls (line of cut, blades, cutting zone). Cutting-tool controls require a cutting activity in the task. | Engineer (next authorized development cycle) |
| P3-U19 | **Recognition defect** (Architect disposition, PO-009 release closure): non-torch roofing methods (e.g. TPO, EPDM, mechanically fastened or adhered systems) must not automatically trigger torch and hot-kettle hazards. Torch and kettle hazards require torch-applied, hot-mopped, built-up or kettle work in the task. | Engineer (next authorized development cycle) |

## Closed

| # | Item | Resolution |
|---|---|---|
| P2-U16 | Induction and resistance heating as hot work | **Closed** — SIL PO Decision 005 §2; classification logic corrected by AR-005 §10 (combustible clearance never suppresses hot work). Rule: `SIL-PKG-003-RECONCILED.md` §3.2. |
| P3-U1 | Gloves at exposed rotating spindles vs. P-000001 | **Closed** — SIL PO Decision 006 §1; scoped by AR-005 §4 to the exposed rotating-machinery operation. C-000276 presents in place of C-000004 there only; P-000001 and P-000002 apply to handling steps. |
| P3-U2 | Text generalizations T-1 to T-12 | **Closed** — accepted with refinements (AR-005 §1); T-13 (C-000164) added (§12). Applied at implementation. |
| P3-U3 | 18 consolidations | **Closed** — accepted (AR-005 §2). Retired identifiers never reused. |
| P3-U4 | Production supersession | **Closed** — accepted with conditions (AR-005 §3); Crosswalk r2. |
| P3-U5 | 30 psi cleaning air in user-facing text | **Closed** — SIL PO Decision 006 §2; wording clarified by AR-005 §11 (cleaning limit, not tool pressure; construction-specific exception labeled). |
| P3-U6 | PAT field vocabulary | **Closed** — SIL PO Decision 006 §3 as clarified by AR-005 §5: Hilti gun, Ramset gun, shoot / shot pins → PAT; standalone Hilti or Ramset needs PAT fastening context; deck gun ambiguous. The PO record is preserved unchanged. |
| P3-U8 | Hot structural riveting | **Closed** — accepted (AR-005 §8). |
| P3-U9 | Electromagnetic fields near induction heating | **Closed** — new canonical H-DF-041 (AR-005 §9). |
| P3-U14 | 99% filter efficiency in C-000395 | **Closed** — approved, AD-010 §1; scoped to prescribed dust-collection methods (§3.1). |
| P3-U15 | C-000164 rewording | **Closed** — approved, AD-010 §1; wording per §3.8. |
| P3-U13 | v1.4.0-p1 defects F-1 to F-16 (Crosswalk §C) | **Closed** — corrected in v1.4.1-dev1, accepted after PO physical testing of v1.4.1-dev4, and released to production in v1.4.1-p1 (PO-009). |

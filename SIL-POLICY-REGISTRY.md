> **Repository Record (AD-008 §6):** Permanent registry of Product Owner-confirmed Adena Corporation company safety policy records for the Safety Intelligence Library (PO Decision Record 002 §5). Applies across all current and future packages.

# Safety Intelligence Library — Company Policy Registry

**Rules:**
- Identifiers use the format `P-000001` and run sequentially. They are permanent, are never changed, and are never reused after retirement.
- A policy record states a **company requirement**. It is kept distinct from regulatory requirements, client requirements, technical specifications, manufacturer instructions and best practices.
- A policy record is never attributed to a regulation, and a regulation is never presented as company policy.
- Policy records do not duplicate controls. They **link to canonical controls** in `SIL-CONTROL-REGISTRY.md`, and those controls cite the policy record in their internal basis.
- **More protective governs.** Where a client, project or regulatory requirement is more protective than a policy record, the more protective requirement applies. Where overlapping activities trigger more than one requirement in the same family (for example, work gloves and A4 cut-resistant gloves), the more protective requirement governs. The less protective control is not presented as an alternative.
- Only the Product Owner adds, changes or retires a policy record.

**Register status:** P-000001 to P-000005. Next available: **P-000006**. Retired: none.

---

| Policy ID | Requirement (company-wide) | Scope / triggers | Linked controls | Source | Notes |
|---|---|---|---|---|---|
| P-000001 | General-purpose work gloves are required when working with steel. | Any work with steel, unless P-000002 or a more specific task requirement governs | C-000004 | PO Decision 002 §1 | Not an A4 requirement. Task-specific chemical, thermal, electrical and mechanical hand protection still applies. |
| P-000002 | Minimum ANSI A4 cut-resistant gloves are required for all demolition activities, knife use, and working with stainless steel lath (expanded metal). | Demolition; knife use; stainless steel lath | C-000112 | PO Decision 002 §1 | Governs over P-000001 where both apply. Not applied universally to steel work. Scope questions: U-18, U-19. |
| P-000003 | Fall protection is required when exposed to a fall hazard of 6 feet or greater, or at a lower height where client, project or regulatory requirements set one. Fall protection is also required where it applies regardless of height. | All work at elevation | C-000039, C-000113 | PO Decision 002 §2 (supersedes PO Decision 001 §1) | No less protective steel-erection exception is introduced. |
| P-000004 | Personal fall protection and tie-off are required in both boom lifts and scissor lifts, using manufacturer-approved anchorage points and compatible equipment. Guardrails alone are not sufficient in scissor lifts. | Boom and scissor lifts | C-000040, C-000041 | PO Decision 001 §2; retained by PO Decision 002 §2 | — |
| P-000005 | Hearing protection is required at noise exposure levels of 85 dBA or greater, in designated hearing protection areas, or when required for the task. | Noise exposure | C-000049 | PO Decision 002 §3 | Company requirement, not attributed universally to a regulation. Employees are not required to measure sound levels; task-based triggers apply when levels aren't measured. |

---

## Policy relationships to production (`A4-LIBRARY-EXPORT.md`)

| Production control | Policy | Status |
|---|---|---|
| C1 "Maintain 100% tie-off when exposed to fall hazards at 6 feet or greater" | P-000003 | Consistent with company policy. Retained. |
| C16 "Wear hearing protection when noise levels exceed 85 dBA" | P-000005 | Consistent in threshold. Wording note: production says "exceed 85," policy says "85 or greater." A boundary difference only, to be harmonized in a future approved production milestone. |
| C3 "Wear proper cut-resistant gloves appropriate for the task" | P-000001, P-000002 | Related. Production does not state the A4 requirement for demolition, knife use or stainless steel lath. Candidate improvement for a future milestone. |

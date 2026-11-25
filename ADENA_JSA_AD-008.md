# ARCHITECTURAL DIRECTIVE 008
## Phase A-4 — Safety Intelligence Library Development

**Date:** November 25, 2026  
**Status:** Active  
**Authority:** Andrew S. Elliott, Product Owner  
**Retained per AD-008 §6**

---

## Directive Text

### §1 Production Baseline

A-3 accepted as complete. v1.3.0-p1, commit 8318ddb. Preserve this baseline; establish isolated A-4 dev branch.

### §2 Immediate Deliverables

Provide ChatGPT with complete production task-to-hazard library (all keywords + hazards), complete production hazard-to-control library (all keywords + controls), current suggestion-ranking and matching rules, permanent library inventory and any previously recovered Construction Reasoning Framework records. Full content — not category counts, summaries, or representative examples. Preserve existing identifiers. Extract directly from GitHub repo. Consolidate into downloadable Markdown or small set of clearly identified files.

**Delivery document:** `A4-LIBRARY-EXPORT.md`

### §3 Development Responsibilities

- **ChatGPT (Architect):** Leads — hazard identification/classification, control measure development, contextual applicability, activity/object/condition/work-context relationships, terminology/language recognition, elimination of semantic duplication, internal regulatory and technical validation.
- **Claude (Engineer):** Independently reviews, identifies gaps/inconsistencies, maintains permanent project records, performs authorized technical implementation.
- **Product Owner:** Andrew S. Elliott — retains final approval.

### §4 Governing Requirements

- Maintain extensive underlying repository without overwhelming field personnel
- Present highest-ranking applicable suggestions first (normally 15–20 when sufficient relevant suggestions exist)
- Retain progressive disclosure through Show More
- Prioritize applicability before severity and relevance
- Never populate suggestions merely to reach a predetermined quantity
- Retain manual entry and individual tap-to-add and tap-to-remove functionality
- Keep user-facing content practical, specific, and free of regulatory citations
- Preserve internal technical references for validation
- Maintain all approved library records in permanent, version-controlled files

### §5 Immediate Development Priority

Structural steel erection, rigging and hoisting, bolting, torquing, welding, cutting, drilling, and grinding. Do not recreate previously frozen Construction Reasoning Framework records without first checking recovered materials.

**CRF Status (confirmed 2026-11-25):** No CRF records exist in the repository. Track B development has not begun.

### §6 Permanent Project Record Retention

Retain this directive in GitHub repo. All approved Architectural Directives, PO Decision Records, Construction Reasoning Framework records, and approved safety intelligence library records shall be maintained in version-controlled project files. Conversation history and AI session memory shall NOT serve as the sole repository for approved project work. Future sessions shall retrieve governing documents and approved library content directly from the repository.

### §7 Scope

No additional application redesign, governance framework, or extended readiness report. Deliver existing library materials so substantive safety intelligence development can begin immediately. No unvalidated library content shall be incorporated into production.

---

## Implementation Record

| Item | Status | Date |
|------|--------|------|
| AD-008 issued | Complete | 2026-11-25 |
| Library extraction from v1.3.0-p1 | Complete | 2026-11-25 |
| A4-LIBRARY-EXPORT.md written | Complete | 2026-11-25 |
| CRF records check | Complete — none found | 2026-11-25 |
| AD-008 stored in repo (this file) | Complete | 2026-11-25 |
| revision-a4 branch established | Pending | — |
| Architect (ChatGPT) library review begins | Pending | — |
| Phase A-4 library submissions | Pending | — |
| PO review and approval | Pending | — |
| Production library update | Pending | — |

---

*Document retained per AD-008 §6*  
*Adena Corporation — JSA App Project*

> **Repository Record (AD-008 §6):** Product Owner directive, retained verbatim.

---

# AD-009 — PHASE A-4 INTERIM IMPLEMENTATION AND TEST RELEASE

**Project:** Adena JSA Intelligence Platform  
**Authority:** Product Owner  
**Development branch:** revision-a4  
**Proposed release:** v1.4.0  
**Deployment target:** Netlify testing environment

## 1. Objective

Establish an interim operational release of the Safety Intelligence Library developed through Packages 001 and 002.

The Product Owner wishes to establish a functional stopping point before continuing development of subsequent library packages.

This directive supersedes previous restrictions against application implementation solely for the scope authorized below.

## 2. Complete Current Reconciliation

Complete Architect Response 004 and incorporate all confirmed Product Owner decisions.

Finalize the current candidate versions of:

- Package 001 — Bolt, Torque and Hydraulic Bolt Tensioning.
- Package 002 — Welding, Cutting and Grinding.
- Canonical hazard registry.
- Canonical control registry.
- Company policy registry.
- Recognition and applicability relationships.
- Production crosswalks.
- Regression scenario library.

Preserve all permanent development records and revision history.

## 3. Authorized Application Implementation

Integrate the developed safety intelligence into the application on revision-a4.

Implement the approved architectural principles:

- Activity, Object, Condition and Context recognition.
- Cumulative recognition of multiple activities and work methods.
- Contextual hazard and control applicability.
- Canonical hazard and control reuse.
- Semantic deduplication.
- Method-specific control relationships.
- Company policy relationships.
- Applicability-first ranking.
- Recognition of reasonably foreseeable high-consequence exposures.
- Initial suggestion batches of 15–20 highly applicable records where sufficient records exist.
- Additional applicable suggestions through Show More.
- No artificial padding.
- No automatic selection or insertion.
- Unrestricted manual entry.

Preserve existing suggestion interaction behavior.

Do not introduce mandatory activity, equipment or work-method selection menus.

## 4. Preserve Existing Library Coverage

Packages 001 and 002 represent an expansion of the existing application, not a replacement of its entire safety library.

Retain all existing production hazard and control coverage outside the approved supersession scope.

Ensure that activities not yet developed under Phase A-4 continue to generate their existing applicable suggestions.

Do not remove valid legacy relationships when introducing canonical records.

Implement the Product Owner-approved respiratory protection correction without removing mandatory task-specific respiratory protection requirements.

## 5. Technical Validation Boundary

Outstanding regulatory and technical validation shall remain documented.

Distinguish verified requirements, confirmed company policies and unverified technical assertions.

Do not introduce unverified safety-critical numeric limits or potentially incorrect technical instructions into the operational test release.

Retain affected candidate records in the permanent library for subsequent validation.

Report any records withheld from implementation and the specific reason.

Do not allow unresolved citation housekeeping alone to prevent testing otherwise supportable content.

## 6. Preserve Existing Application Functionality

All Phase A-1 through A-3 functionality shall remain intact, including:

- Offline operation.
- PWA installation.
- Same-day JSA restoration.
- Stale JSA rejection.
- Native PDF generation and sharing.
- Original signature preservation.
- Material-change detection.
- Individual revision acknowledgment.
- Revision history.
- Existing mobile and iPad layouts.
- Manual entry and native device dictation.

Do not introduce unrelated functionality, redesigns or architectural changes.

## 7. Testing

Execute the Package 001 and Package 002 regression scenarios against the implemented application.

Validate:

- Recognition accuracy.
- Hazard applicability.
- Control applicability.
- Suggestion ranking.
- Semantic deduplication.
- Multiple simultaneous activities.
- Company policy enforcement within suggestions.
- Recognition collision prevention.
- Preservation of legacy library coverage.
- Show More behavior.
- Manual entry preservation.
- Offline functionality.
- Signature and revision integrity.
- PDF generation.

Testing shall evaluate actual application behavior, not merely the presence of records in the repository.

Correct identified regressions before requesting Product Owner testing.

## 8. Netlify Deployment

Deploy the completed interim test build to the existing isolated Netlify testing environment.

Proposed version: v1.4.0-dev1.

Update the application build identifier and service worker cache version appropriately.

Preserve the existing production GitHub Pages deployment at v1.3.0-p1.

Do not merge revision-a4 into main or deploy to production without subsequent explicit Product Owner approval.

## 9. Completion Report

Provide a concise report containing:

- Application version.
- Commit identifier.
- Netlify testing URL.
- Implemented hazard, control and policy counts.
- Regression test results.
- Existing functionality verification results.
- Records withheld pending technical validation.
- Known limitations or unresolved defects.

Stop after Netlify deployment and the completion report.

Await Product Owner physical testing and explicit production release authorization.

## 10. Development Stopping Point

Do not begin Package 003.

Following successful Product Owner testing and authorized production deployment, establish v1.4.0 as the interim Phase A-4 production baseline.

Subsequent development will resume with Package 003 — Drill and Mechanical Fastening.

Phase A-4 remains open.
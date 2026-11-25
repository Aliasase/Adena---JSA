> **Repository Record (AD-008 §6):** Architect addendum to Safety Intelligence Library Package 001, received November 25, 2026. Retained verbatim. Candidate content — not approved. Package 001 itself has not yet been received by the Engineer or committed to this repository.

---

# SAFETY INTELLIGENCE LIBRARY — PACKAGE 001 ADDENDUM 01

**Subject:** Cumulative Activity Recognition and Contextual Applicability  
**Applicable Activities:** 0013 — Bolt; 0014 — Torque  
**Authority:** Product Owner clarification and Architectural direction

## 1. Product Owner Clarification

The Product Owner has confirmed that Adena performs all of the bolting and torquing processes identified in Package 001.

These processes are not mutually exclusive and may occur individually, sequentially, or simultaneously within a single JSA task step.

All identified processes shall remain represented within the safety intelligence library.

## 2. Governing Intelligence Requirement

Activity recognition and contextual applicability shall be cumulative, not exclusive.

The intelligence must accommodate multiple recognized activities, objects, work means, conditions, and work contexts within a single task description.

Recognizing one activity or work method shall not suppress another applicable activity or work method.

For bolting and torquing, this includes, but is not limited to:

- Manual bolt installation.
- Manual wrench tightening.
- Manual torque wrench operation.
- Powered impact wrench operation.
- Electric and battery-powered torque wrench operation.
- Hydraulic torque wrench operation.
- Pneumatic torque wrench operation.
- Tension-control bolt installation.
- Structural bolt pretensioning using the specified installation method.
- Ground-level operations.
- Elevated operations.
- Operations involving suspended structural components.
- Operations involving temporary structural connections.

The library shall accommodate combinations of these processes and conditions.

## 3. Field User Experience

No additional mandatory selections, equipment menus, radio buttons, checkboxes, or activity-selection screens shall be introduced to establish these relationships.

The crew shall continue to write or dictate its task steps naturally.

The intelligence shall recognize the applicable elements from the entered information and generate a combined list of relevant hazard suggestions.

The existing individual tap-to-add and tap-to-remove functionality shall remain unchanged.

## 4. Representative Reasoning Scenario

**Crew-entered task step:**

"Install structural connection bolts using hand tools, impact wrenches and hydraulic torque wrenches while working from aerial lifts."

**Recognized elements:**

- Activities: Install, Bolt, Torque.
- Objects: Structural connections and bolts.
- Work means: Hand tools, impact wrenches, hydraulic torque wrenches and aerial lifts.
- Conditions: Work at elevation.
- Work context: Structural steel construction.

**Combined applicable hazard candidates:**

- Fall from elevated work position.
- Dropped bolts, sockets and tools.
- Crushing at torque reaction point.
- High-pressure hydraulic fluid injection.
- Hose rupture or fitting separation.
- Unexpected release of mechanical force.
- Sudden tool movement from torque reaction.
- Pinch points during bolt installation.
- Wrench or socket slippage.
- Socket or attachment ejection.
- Tool or socket failure under load.
- Cuts from sharp metal edges or burrs.
- Hand impact against adjacent steel.
- Musculoskeletal strain from applied force.
- Repetitive hand and wrist strain.
- Noise exposure.
- Hand-arm vibration.
- Contact with rotating sockets or fasteners.
- Trip hazards from hoses or cords.
- Applicable aerial lift hazards.

These are illustrative candidate results, not an exhaustive or predetermined output list.

The intelligence shall combine applicable records from all recognized elements, eliminate unnecessary duplication, and rank the resulting suggestions according to established applicability, consequence and relevance requirements.

## 5. Incomplete Task Descriptions

The intelligence must remain useful when the crew provides a short or incomplete task description.

For example:

"Torque structural bolts."

This description shall produce meaningful general torquing hazard suggestions without requiring the user to identify a specific torque wrench type.

Equipment-specific hazards shall remain discoverable through additional suggestions where reasonably applicable, without implying that a particular equipment type or condition has been confirmed.

Distinguish between:

- Explicitly recognized applicability.
- Reasonably inferred applicability.
- Conditional applicability.
- Non-applicability.

Do not automatically suppress potentially relevant high-consequence hazards merely because the task description is brief.

Conversely, do not prioritize unrelated hazards solely because their potential consequences are severe.

## 6. Suggestion Presentation

Retain the previously approved presentation requirements:

- Present the highest-ranking applicable suggestions first.
- Normally display 15–20 suggestions when sufficient applicable content exists.
- Provide additional suggestions through Show More.
- Do not pad suggestion lists with irrelevant content.
- Do not impose an artificial limit on the underlying repository.
- Preserve manual hazard and control entry.
- Preserve individual suggestion selection and deselection.
- Do not automatically insert suggestions into the JSA.

## 7. Hazard and Control Relationships

A single hazard record may be associated with multiple activities, objects, work means, conditions, and work contexts.

A single control record may address multiple hazards where technically appropriate.

Maintain reusable relationships rather than unnecessarily duplicating equivalent hazard or control records.

Preserve meaningful distinctions between similar hazards and controls where those distinctions affect worker safety.

## 8. Permanent Architectural Requirement

This cumulative reasoning requirement applies to all subsequent safety intelligence library packages, not exclusively bolting and torquing.

It reinforces the previously developed Construction Reasoning Framework principle that construction work is understood through the combination of its contributing elements.

Do not develop isolated activity templates that prevent recognition of overlapping or simultaneous work processes.

## 9. Engineer Action

Incorporate this addendum into the independent review of Safety Intelligence Library Package 001.

Review all 31 candidate hazard records and associated controls against these cumulative applicability requirements.

Identify any additional hazards, controls, recognition terms, or relationships needed to support the confirmed bolting and torquing processes.

Retain this addendum in the permanent version-controlled project documentation alongside Package 001.

Return substantive review findings and proposed corrections to the Architect.

No application implementation, production modification, or additional architectural planning is authorized by this addendum.

All candidate safety intelligence content remains subject to technical validation, independent review, and Product Owner approval.

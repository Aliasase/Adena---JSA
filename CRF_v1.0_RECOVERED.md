> **Repository Record (AD-008 §6):** Retained as historical development record. Status: Draft for review — not classified as approved or frozen. Original document content is preserved unchanged below. Historical development occurred outside the GitHub repository prior to A-4; this file establishes version-controlled retention of that work per AD-008 §6.

---

# Construction Reasoning Framework v1.0

**Status:** Draft for review — compiled by Claude Code from the full architecture discussion, for ChatGPT and Andrew to review, correct, and approve before it becomes the authoritative specification.
**Governs:** the future Construction Reasoning Engine that will power hazard/control suggestions in the Adena JSA application (and, per the long-term vision, other tools beyond the JSA).
**Supersedes:** none of this is implemented yet. The live application (see `BASELINE.md`) still runs the original simple keyword-matching engine. This document does not change that — it is the specification the *next* engine will be built against, once approved.

---

## 1. Purpose & Mission

The purpose of this application is not to build the most sophisticated construction knowledge model possible. The purpose is to help construction professionals recognize hazards they might otherwise overlook and recommend practical control measures based on the actual work they are performing.

**Mission sentence (the one to hold above everything else):**

> This application should understand construction the way experienced construction professionals understand construction — not the way regulations categorize it.

**Best description of the engine itself, arrived at after extensive iteration:**

> The Construction Reasoning Engine does not search for hazards. It progressively develops an understanding of the work until the hazards and practical controls become apparent.

**What is actually being built**, per the analogy that stuck: not AI, not JSA software, not a database — the equivalent of asking your best Superintendent, Ironworker, Millwright, Welder, Carpenter, Equipment Operator, Safety Leader, Rigger, Scaffold Builder, and Concrete Foreman all the same question — *"how do you mentally evaluate the work before your hands touch it?"* — and encoding that, not OSHA standards or company policy.

**The standing evaluation filter for every decision, content or engineering:**

> Will this help the foreman complete a better JSA, or are we just making ourselves feel smarter?

If the answer doesn't directly improve the crew's experience or the quality of the JSA, it probably doesn't belong in Version 1.

---

## 2. Core Philosophy

### The JSA is a thinking exercise

If the application tells the user exactly what work steps to perform, the user simply clicks through predefined tasks without analyzing the work. That defeats the purpose of a JSA. Instead:

- The crew independently develops the work steps.
- The application analyzes those work steps.
- The application identifies concepts contained within those work steps.
- Those concepts generate intelligent hazard suggestions.
- Those hazards generate intelligent control-measure suggestions.
- The user determines which suggestions actually apply.

The software assists judgment. It never replaces judgment.

### The Application Shall Never

- Provide selectable work steps.
- Encourage copy-and-paste JSAs.
- Allow users to complete JSAs without thinking.
- Become an OSHA checklist.
- Become a compliance exercise.
- Assume all work of a similar type contains identical hazards.
- Automatically select hazards or controls without allowing supervisor/crew review.
- Imply that completing the form alone makes the work safe.

### The Application Shall Always

- Require the user to define the work being performed.
- Preserve independent hazard recognition.
- Encourage planning and pre-task-briefing discussion.
- Suggest realistic hazards and practical control measures.
- Continuously improve through experience (see §10, deliberately deferred).

### The engine is built to understand the language of construction

Phrases like "get pipe up," "hang that beam," or "fly deck" are not regional slang the engine merely tolerates — they are fluent, compressed construction communication. A foreman saying "get that pipe up" is not ambiguous to another construction professional; it's a complete instruction implying whatever sequence (rig, lift, position, possibly align and install) is necessary to get that pipe into its working location. The goal is native understanding, not tolerance of variation.

> The engine is built to understand the language of construction — not require construction to adapt to the language of the software.

---

## 3. Architecture — The Seven Layers

The framework is a set of seven connected layers. This structure is considered **frozen** — future work should extend it, not restructure it, unless a genuine flaw is discovered through real use.

1. **Language Recognition** — how people describe the work (synonyms, phrasing, compressed construction expressions).
2. **Work Context** — the broader environment/discipline (Industrial, Theme Park, Commercial, Power Generation, Existing Facility, New Construction, Shutdown, Outage, Greenfield, Brownfield...). Context *ranks and modifies relevance* of what's recognized — it does not gate, filter, or duplicate concepts per sector. (Ranking itself was deliberately dropped — see §7.)
3. **Activities** — what is being done (Install, Weld, Grind, Lift, Inspect, Position...). Generic, reusable units of work — see §8.
4. **Objects** — what is being worked on or with (Beam, Wall, Pipe, Valve, Grinder, Scaffold, Crane, Pump...), including **material as an attribute**, not a separate library (Pipe → material attribute of Carbon Steel / Stainless / PVC / Copper / HDPE / FRP). Objects also carry **Roles** — see §6.
5. **Conditions** — state/environment affecting the work (Elevated, Confined Space, Night Work, Energized, Wet, Public Exposure, Existing Facility, Shutdown, Outage...).
6. **Hazards** — inferred from the relationships among the above, not hard-coded per exact combination.
7. **Controls** — inferred from Hazards plus the same concept relationships, so they stay context-aware.

**Guiding principle for why this works:**

> Hazards and controls become the natural outcome of those dimensions rather than isolated checklist items.

E.g., Grind + Pipe(Stainless) + Confined Space + Industrial Outage should surface noise, flying particles, hot sparks, fire, atmospheric contamination, hex-chromium exposure, and hot-work-permit considerations — without anyone hard-coding a rule for that exact combination. This is the core differentiator from a traditional checklist-style JSA tool.

### 3.1 Materials are an Object attribute, not a library

A foreman thinks "I'm core-drilling a wall," not "I'm working on concrete." Material is a property of the object, not an independent concept. This was deliberately decided against promoting Material to a fifth top-level library — the rule applied: *"easier to add a library later than remove one."* "Object" as a name was briefly considered for renaming to "Assets" but kept as-is until a real limitation appears.

### 3.2 Confined Space, Themed work, and the Scope Map (§4) resolve the same way

Confined Space is not a trade or category — it's a **Condition** (you can weld, paint, rig, inspect, or do mechanical work *in* a confined space). Themed work is not a separate discipline duplicating Finish Trades — it's **Context** (Paint/Carve/Seal stay generic Activities; Rockwork/GFRC/Steel stay generic Objects; "Themed Entertainment" as Context is what introduces show-quality/texture-matching/color-matching considerations). General principle: things that look like they need a new category are often really Context or Condition modifiers instead.

---

## 4. Construction Scope Map v1.0

A coverage checklist (not a permanent hierarchy) confirming the Activity/Object/Condition libraries are being built to support every major type of work Adena performs — not just the easiest-to-remember work. Self-test: for any type of work, you should be able to point to exactly one of these 17 categories. Zero means a gap; two or more means the scope needs refining (this test already caught and resolved the Confined Space and Themed-duplication issues above).

1. **Structural Construction** — steel erection/modification, misc metals, deck, stairs/railings, architectural metals, connections, bolting, welding, field fab, temp bracing, reinforcement
2. **Rigging & Hoisting** — crane ops, critical lifts, hoisting, rigging, jacking, equipment setting, heavy picks, specialty rigging, load securement, material handling
3. **Concrete** — excavation support, formwork, rebar, placement, finishing, saw cutting, core drilling, anchoring, grouting, repair
4. **Industrial Mechanical** — pipe/equipment install, pumps, valves, heat exchangers, rotating equipment, conveyors, mechanical repairs, shutdown maintenance, outage work
5. **Industrial Process** — LOTO, line breaking, pressure/steam/chemical systems, process piping, commissioning, startup, shutdown, decommissioning
6. **Electrical** — temp/permanent power, cable, conduit, panels, switchgear, energized testing, grounding, instrumentation, controls
7. **Scaffolding & Access** — system/tube & coupler/frame/baker scaffold, stair towers, suspended scaffold, temp platforms, mobile access, ladders
8. **Fall Protection & Specialty Access** — PFAS, positioning, travel restraint, horizontal/vertical lifelines, anchor installation, leading edge, rope access, rescue, temp guardrails
9. **Heavy Equipment** — aerial lifts, telehandlers, forklifts, cranes, excavators, skid steers, loaders, compact equipment, utility vehicles
10. **Demolition** — structural/selective/concrete/interior demo, equipment removal, torch cutting, mechanical demolition
11. **Earthwork** — excavation, trenching, shoring, sloping, backfilling, compaction, dewatering
12. **Finish Trades** — carpentry, finish carpentry, drywall, painting, coatings, waterproofing, sealants, flooring, ceilings
13. **Themed Construction** — themed rockwork, artificial trees, scenic carpentry/painting/coatings, sculpting, GFRC, carving, faux finishes, scenic steel, specialty fab, show sets
14. **Attractions & Ride Systems** — ride steel, envelope work, maintenance, component install, access systems, mechanical systems, commissioning, alignment, track installation, utilities, structural modifications
15. **Survey & Layout** — laser scanning/survey, control layout, total station, as-built verification, dimensional control
16. **General Construction** — material receiving/deliveries, housekeeping, temp protection, barricades, traffic control, public protection, environmental controls, waste, punch work
17. **Temporary Works** — temp bracing/shoring, falsework, temp platforms/stairs/guardrails/electrical/weather protection, equipment support frames, pipe supports, rigging frames, custom fabricated temp structures. (Flagged as often-overlooked and high-risk, deserving dedicated attention for design/loading/inspection/removal considerations even though it interacts constantly with steel/concrete/rigging/access work.)

**Order of construction:** Scope Map → Activity/Object/Condition Libraries → Hazard/Control relationships.

---

## 5. The Construction Reasoning Layer

This is the actual engine — not a separate "relationship database," but the mechanism by which Activities, Objects, Conditions, and Context combine to produce understanding.

### 5.1 The pipeline

```
Crew writes naturally
  ↓
Language Recognition
  ↓
Interpret the intended work (Intent)
  ↓
Recognize Activities
  ↓
Recognize Objects
  ↓
Recognize Conditions
  ↓
Recognize Context
  ↓
Understand how an experienced professional would view this work
  ↓
Suggest hazards to consider
  ↓
Suggest practical controls to consider
  ↓
Crew completes the JSA
```

Deliberately contains no step that says "look up OSHA subpart" or "match against a rule." The engine's job is to interpret the work, not to enforce a regulation.

### 5.2 The reasoning key: Activity + Object + Conditions + Context

Nobody thinks "I'm installing a beam." They think "I'm installing a beam, 50 feet in the air, over an active walkway, during night shift, with two cranes working." All four dimensions change the reasoning, not just Activity + Object.

**Critical implementation constraint:** this must be additive/composable, not a lookup table requiring a pre-authored record for every full (Activity, Object, Condition, Context) combination. That combination space is intractable to author by hand and would become exactly the over-engineered "academic model of construction" this project has repeatedly steered away from. Instead: Activity contributes its baseline, Object refines it, each *present* Condition contributes its own hazards independently, Context adjusts relevance — composed together at the moment a step is reasoned about. This is not a new or unproven pattern for this project: it is exactly how the currently shipped engine already works (`TASK_TO_HAZARD` / `HAZ_TO_CONTROL` in `adena-jsa.html` merge and deduplicate hazard lists from every keyword category a written step matches, rather than requiring one pre-authored entry per exact phrase). The new model extends that same composition principle from one matching dimension (task text) to four. Authoring effort stays roughly linear in the number of concepts defined, not exponential in their combinations.

### 5.3 Progressive Understanding

> The engine never jumps to conclusions. It progressively builds an understanding of the work as each recognized concept contributes additional information. Each recognized concept must increase understanding without contradicting or replacing the understanding already established.

Worked example:

```
"Install beam" recognized → Install: "a component will be placed"
+ Beam (Object)             → "a structural member is being placed"
+ Elevated (Condition)      → "...at height"
+ Night Work (Condition)    → "...at height with reduced visibility"
+ Occupied Theme Park (Ctx) → "...above or adjacent to the public"
→ Suggestions generated only after understanding has accumulated.
```

The engine never "switches" its interpretation — it only learns more. This is what makes additive composition (§5.2) the correct implementation, not just a convenient one: contributions that only accumulate and never overwrite each other are non-contradictory by construction.

### 5.4 One concept, one contribution

Generalizes the schema-level "one field, one question" rule (§9) up to the reasoning-dimension level:

- **Activity** contributes: what is being done.
- **Object** contributes: what is being worked on or with.
- **Condition** contributes: under what circumstances.
- **Context** contributes: what larger environment influences the work.

Each answers exactly one question.

### 5.5 Objects have Roles, not fixed identities

An Object's identity doesn't change based on how it's used; its **role** does. A Crane can be a *Work Means* (used to perform a lift) or a *Work Object* (the thing being inspected/repaired). A Harness can be *PPE* or an *Inspection Object*. A Beam can be a *Work Object* or *Temporary Support*.

This resolved a real ambiguity: "Lift beam with crane" needs the engine to know Beam is what's being acted on and Crane is what's performing the action — but this does **not** require the engine to correctly parse *which* role a mentioned Object is playing in every sentence (that's a harder, sentence-structure-parsing problem than presence-detection). The practical v1 answer: recognize that both Objects are present in the step and combine their associated hazards (falling object / pinch points / load stability from Beam; swing radius / crane setup / load chart / operator qualifications from Crane) — no role-resolution required for useful output. Full role-aware parsing is explicitly deferred to a later version.

### 5.6 Task vs. Activity

> The user writes Tasks. The engine recognizes Activities.

A **Task** is how a crew naturally phrases work ("Install beam," "Hang pipe," "Set equipment," "Build scaffold"). A Task often contains or implies one or more **Activities** (the reusable, recognized units of work). Every Activity is defined by a **boundary** — where does this specific unit of work begin and end? (Lift begins when the load is intentionally raised, ends when set down/supported — rigging, signaling, installing, and inspecting are separate Activities that commonly accompany a lift but are not part of it.)

When a Task implies additional Activities beyond the one explicitly written, the engine surfaces them as a prompt, never an assumption:

> "Installation of structural members commonly involves lifting, positioning, alignment, and connection. Consider whether hazards associated with those activities apply to this task."

The wording discipline here is load-bearing, not stylistic: "consider whether... apply" preserves judgment; a flat "the following hazards apply" would cross into deciding for the crew. This is the one place in the system where it is easiest to slip from assisting into assuming, since the engine is inferring activities the user didn't explicitly write.

### 5.7 Intent → Means & Methods → Activities → Hazards → Controls

A refinement of "means and methods drive recognition." A compressed phrase like "get pipe up" does not reliably resolve to one fixed terminal Activity — different real crews might stop at Position (temporary secure, another trade finishes tomorrow) or continue through Install, depending on circumstances the words alone don't specify. The phrase expresses an **Intent** ("get the pipe where it needs to be"), not a committed endpoint.

**Explicitly: do not model Intent as its own data layer** — that would overcomplicate the engine. The practical implementation is that a compressed expression maps to the **cluster** of Activities it commonly implies (Rig / Lift / Position / Align / Install all surfaced together for consideration), with no claim about which one is the actual endpoint — the same "surface for consideration, never assert" pattern already used for Related Activities and for context-dependent single words (§9.3). This requires no new architecture; it is the existing composition mechanism applied to a whole phrase instead of one word.

### 5.8 Construction Sequence Principle

> Activities exist within a normal sequence of work. While users describe the work in their own words, the engine recognizes where that work typically fits within the construction process and may suggest consideration of closely related Activities that commonly precede or follow it.

Implemented on each Activity record as **Usually Preceded By** / **Usually Followed By** (see §9). Explicitly "suggest consideration," not "automatically apply" — same judgment-preserving discipline as everything else. This is, in effect, documenting the craft sequence of construction, not just Activities in isolation.

### 5.9 Construction Expressions (future, not yet built)

Compressed idiomatic phrases — "Get ___ up," "Put ___ in," "Fly ___," "Hang ___," "Tie ___," "Make up ___," "Stand ___" — that each imply not just one Activity but a predictable sequence of construction reasoning. Explicitly future work. When it is built, it likely does not need a new library or mechanism: a compressed expression probably just needs a Language Recognition entry, and §5.7's cluster-of-implied-Activities mechanism does the rest.

---

## 6. Object Roles Reference

As established in §5.5, Objects carry one or more Roles rather than a single fixed identity:

- **Work Object** — the thing being acted upon (Beam, Pipe, Wall).
- **Work Means** — the tool/equipment/system used to perform the activity (Crane, Grinder, Welding Machine).
- An Object can hold both roles depending on context (a Crane is usually a Work Means, but can itself be a Work Object when it's being inspected or repaired).
- PPE and Inspection-Object roles also apply (a Harness is PPE when worn, an Inspection Object when being checked).

---

## 7. Work Context

Work Context (Business Sector / Trade / Work Category / optional Project-Client context) **ranks and modifies relevance** — it does not gate, filter, or duplicate concepts per sector or trade. Example: the word "anchor" in a themed-entertainment structural-steel context should raise the relevance of structural/epoxy/ride anchors and lower (never eliminate) the relevance of fall-protection/scaffold/rock anchors.

**Ranking was deliberately dropped as a v1 requirement** — "it's subjective anyway." Work Context still influences which concepts are recognized, but the engine does not need to produce an ordered/scored suggestion list; suggestions are shown as matches, same interaction model as the current suggestion drawer.

**Known future UI requirement, not yet scoped:** Work Context needs an actual field somewhere in the application (most likely Job Info) for the user to select Sector/Trade/Work Category. This is a genuine new-field addition, not just an algorithm change, and will need to be explicitly scoped in whatever revision package introduces it, since every revision to date has protected the Job Information fields as unchanged.

---

## 8. Governing Definition of a Construction Activity

> A Construction Activity is a distinct unit of work performed by a worker or crew that has a specific purpose, recognizable beginning and end, and predictable relationships to equipment, materials, conditions, hazards, and controls. A Construction Activity is not merely a verb. It represents a standardized work function that can occur repeatedly across one or more trades and work environments.

Each Activity exists exactly once in the engine, reusable across all contexts, defined by what the worker accomplishes — not by object, material, trade, or project.

### 8.1 Creation criteria (all must hold before a new Activity is added)

1. **Represents a meaningful unit of work** — "Lift," not "Crane Lift."
2. **Can occur across multiple trades** — "Install" applies to structural, mechanical, electrical, concrete, and themed work alike.
3. **Has a distinct hazard profile** from neighboring Activities — Grinding ≠ Cutting; different hazards and controls mean separate Activities.
4. **Independent of the Object** — "Install" stays one Activity; Beam/Pipe/Valve/Door become Objects. Sharper test: if a word names a tool, equipment, or mechanism, it's an Object; if it names the action's purpose, it's the Activity.
5. **Independent of the work environment/context** — "Weld" is one Activity whether Industrial, Theme Park, Commercial, or Ride Installation.
6. **Recognizable from multiple ways of speaking** — Inspect/Check/Look over/Verify/Examine/Walk down/Pre-use inspection all map to one Activity.

### 8.2 What should NOT become an Activity

- **Objects:** Beam, Pipe, Valve, Scaffold, Grinder, Harness, Forklift
- **Materials (Object attributes):** Steel, Concrete, PVC, Copper, Wood, FRP
- **Conditions:** Confined Space, Elevated, Night Work, Wet, Hot, Cold, Public Exposure, Energized
- **Context:** Industrial, Commercial, Theme Park, Shutdown, Outage, Occupied Facility, Greenfield, Brownfield
- **Hazards:** Pinch Point, Silica, Struck-By, Electrical Shock, Caught Between
- **Controls:** LOTO, Barricades, PPE, Fire Watch, Atmospheric Monitoring

### 8.3 Standing rule

> When in doubt, make the concept more generic — not more specific. Specificity should come from the combination of Activity + Object + Condition + Context — not from creating increasingly narrow Activities.

This is the discipline that keeps the library from growing into thousands of overlapping entries, and it's the filter to apply every time a "should this be a new Activity?" question comes up.

### 8.4 Activities describe intended action, not the means of accomplishing it

Lift (Activity) vs. Crane/Forklift/Chainfall/Person (Objects — the means). Install (Activity) vs. Impact Driver (Object). Inspect (Activity) vs. Harness (Object being inspected).

---

## 9. Activity Record Schema

Every Activity record uses this template. Every field must answer exactly one question — if two fields answer the same question, that's overlap, and it will produce inconsistency as the library grows to hundreds or thousands of entries.

| Field | Answers |
|---|---|
| **ID** | Permanent identifier (e.g. `ACT-0001`) |
| **Name** | The Activity's name (e.g. `Inspect`) |
| **Definition** | What is this activity? (Must be understandable by an experienced craft professional in under 10 seconds — see §9.1) |
| **Intent** | Why is it performed? |
| **Includes** | Which words/phrases count as this Activity, directly |
| **Does NOT Include** | Which adjacent Activities this must not be confused with |
| **Language Recognition** | How do people describe it? (Three confidence tiers — see §9.2) |
| **Typical Objects** | What is this Activity commonly worked on or with? (Must be genuine objects/equipment/materials — never Activities, Conditions, or Context) |
| **Typical Conditions** | Under what circumstances does this Activity commonly occur? (When/environment — not to be confused with Classification) |
| **Activity Classification** | *(only where applicable)* What kind of instance of this Activity is it, by authority, purpose, formality, or risk-tier? (How the operation is performed/classified — never what object/system is involved, and never a restatement of a Condition) |
| **Expected Outcomes** | What exists when this Activity is successfully completed? |
| **Common Mistakes / Misconceptions** | Where do experienced people commonly see this Activity go wrong? (Not Hazards, not Controls — recurring misunderstandings about the Activity itself. Explicitly *not* user-visible in the initial application; captured as institutional knowledge for future contextual coaching.) |
| **Usually Preceded By / Usually Followed By** | Where does this Activity typically sit in the construction sequence? (See §5.8. Also serves as the coarse-grained default that an Activity+Object-specific relationship overrides where one has been authored — see §9.3.) |
| **Notes** | Anything else worth recording |

Explicitly **not** on the Activity record: Hazards, Controls. Those live in their own libraries, linked through the reasoning layer (§5), not hard-coded onto the Activity itself.

### 9.1 Definitions must be radically simple

> Every Activity definition should be understandable by an experienced craft professional in under 10 seconds. If it requires explanation, it's too complicated.

Examples: Move → "Relocate something from one place to another." Lift → "Raise or lower something by overcoming gravity." Install → "Put something into its final working location." Align → "Put something exactly where it needs to be." Inspect → "Check something to determine if it's acceptable."

This costs nothing technically — Definition does not drive matching (Includes/Does NOT Include/Language Recognition do), so compressing it is a pure readability improvement. One thing worth preserving even in a short definition: a brief one-clause contrast with the Activity's nearest neighbor (e.g. Align's "Unlike Position, which places an object generally where it belongs, Align achieves the exact relationship required...") so the boundary is legible from the Definition alone, not just from the fuller Includes/Does NOT Include lists.

### 9.2 Language Recognition: three confidence tiers

- **High Confidence** — the word/phrase almost always means this Activity.
- **Medium Confidence** — the word/phrase usually means this Activity.
- **Conditional Recognition** — context determines which Activity this word/phrase actually means (e.g. "Roll" can mean Lift, Position, or Move depending on whether gravity/hoisting was actually involved; resolved by looking at what else was mentioned in the same step — presence of a lifting-related Object/Means leans Lift, absence leans Position/Move — and when no disambiguating cue exists, the engine surfaces both possibilities rather than guessing).

**Hard rule:** a recognition term must exist in exactly one tier. A word cannot honestly be both "almost always means this" and "needs context to know if it means this" at the same time.

A further category, not yet built, was named for completeness: **Non-Recognition** — words that by themselves should never trigger anything (Work, Do, Complete, Finish, Handle, Process), explicit defensive design against over-eager matching on generic verbs with no construction-specific meaning.

### 9.3 The relationship layer overrides the baseline

An Activity's `Usually Preceded By` / `Usually Followed By` fields are the coarse-grained default. Once a specific **Activity + Object** relationship has been authored (e.g. "Install + Beam" implies a different supporting-Activity set than "Install + Ladder" or "Install + Pipe"), that precise relationship overrides the coarse default for that combination — refinement, not replacement. Coverage of these pairs should be authored incrementally, starting with the highest-value/most common combinations, not exhaustively (see §5.2's combinatorics note — the same "collect continuously, improve deliberately" discipline applies here as everywhere else, §10).

---

## 10. Continuous Learning (explicitly deferred, not v1)

Continuous learning will **not** be automatic or ML-style. The model, as resolved:

- Field data (written steps, suggestions shown/accepted/rejected, manually added items, the final JSA, project/trade context, and which library version was in effect) is captured locally, offline-first — no different from how the app already behaves — and opportunistically synced when connectivity appears.
- A human (safety/app administrator) reviews collected interaction data centrally, looking for unrecognized phrases, commonly missed concepts, low-acceptance suggestions, and frequently manually-added hazards/controls — and only then approves changes into a new library version.
- Libraries are explicitly **versioned** (e.g. "Concept Library 1.0"), devices check for and download approved updates, and each completed JSA records which library version it was created against for traceability.
- Production suggestions must never change automatically from field submissions — only through this validate → approve → publish pipeline.
- Two knowledge layers stay separate: core construction knowledge (broadly applicable) vs. Adena-specific knowledge (internal permit names, approved equipment, company thresholds, recurring internal phrasing) — so core intelligence stays stable while company rules can update independently.
- Privacy/opt-in/legal questions are explicitly out of scope until a deployment model (internal app vs. commercial/SaaS/enterprise) is actually chosen — deliberately not to be revisited until then.

**Practical implication for implementation, even now:** design the data shape for concepts/hazards/controls so it *could* later carry a library-version tag and *could* later distinguish core vs. company-specific entries, without building any sync/versioning/admin-review tooling yet. Keep the matching engine itself simple and local.

---

## 11. Validation Process

### 11.1 Original five checks (Phase 1 — framework proving itself)

1. **Boundary Check** — is this Activity clearly different from every other Activity?
2. **Classification Check** — does Classification describe the operation, not the object/equipment (and not a Condition restated)?
3. **Recognition Tier Check** — does every recognition term exist in exactly one confidence tier?
4. **Object Check** — are Typical Objects actually objects, not Activities, Conditions, or Context?
5. **One Question Rule** — does every field answer only one question?

### 11.2 Simplified four tests (Phase 2 — framework presumed correct, library being populated)

From ACT-0010 onward, the framework is presumed correct; a new Activity must justify changing it, not the other way around. Review shifts from "does this fit the architecture" to:

1. **Reality Test** — would an experienced superintendent, foreman, or craft professional immediately recognize this?
2. **Boundary Test** — is this one Activity? Not two, not three.
3. **Reasoning Test** — does this Activity naturally produce the hazards and controls we'd expect?
4. **Recognition Test** — would the engine recognize how crews actually describe this work? Not how OSHA writes it, not how textbooks describe it — how crews actually talk.

The finer-grained mechanics from §11.1 (tier-consistency, Classification-vs-Object-vs-Condition, Object-list correctness) are not retired — they remain the concrete way Boundary Test and Recognition Test actually get verified; the four-test framing is just the right altitude for a "does this pass, yes or no" review once the underlying schema has proven itself.

If a future Activity reveals a genuine architectural flaw, that gets addressed deliberately — that should be rare from here forward.

---

## 12. Activity Library Status

Nine Activities have been drafted against the schema in §9. **The exact field-by-field wording for each (full Includes lists, Language Recognition tiers, Typical Objects, etc.) lives in the original authoring conversation and should be compiled directly from those source drafts by Andrew/ChatGPT when "Activities v0.1" is finalized as its own versioned artifact** — this framework document intentionally does not attempt to reproduce that content from paraphrased summary, to avoid introducing transcription drift into what becomes production data. What follows is status only.

| ID | Name | Status | Notes |
|---|---|---|---|
| ACT-0001 | Inspect | ✅ Frozen | First Activity; established the full template, including Expected Outcomes and Activity Classification (Conditions-vs-Classification distinction resolved here) |
| ACT-0002 | Lift | ✅ Frozen | Established Work Object vs. Work Means and Object Roles (§5.5, §6) |
| ACT-0003 | Install | ✅ Frozen | Established the Activity boundary concept (§5.6) and Task vs. Activity |
| ACT-0004 | Position | ✅ Frozen | Established Conditional Recognition tiering (§9.2) and the "means & methods, not words" principle |
| ACT-0005 | Align | ✅ Frozen | First Activity to use the three-tier Language Recognition system; established Usually Preceded By/Followed By (§5.8) |
| ACT-0006 | Move | Drafted, near-final | Open items: whether the 10-second Definition standard (§9.1) should be applied; whether "Manual Movement"/"Mechanical Movement" in Classification restates Object/Means rather than describing the operation |
| ACT-0007 | Remove | Drafted, near-final | Open item: whether "Hazardous Material Removal" in Classification is a legitimate regulatory/procedural tier or an object-category restatement |
| ACT-0008 | Connect | Drafted, under review | Open items: two same-word-in-two-recognition-tiers conflicts; whether Mechanical/Electrical/Hydraulic/Pneumatic/Structural/Process/Utility Connection restate system category rather than describing the operation |
| ACT-0009 | Secure | Drafted, under review | Open items: Load/Equipment Securement and Structural Stabilization restate Object category; Weather Securement restates an existing Condition; a tier conflict on "Retain"; "support" appearing in Secure's own recognition ahead of Support (ACT-0010) becoming its own Activity |

**Revised build order (dependency-driven, not the original numeric list):**
✅ Inspect → ✅ Lift → ✅ Install → ✅ Position → ✅ Align → Move → Remove → Connect → Secure → **Support (next)** → Rig → Hoist → Bolt → Torque → Weld → Cut → Drill → Test → Energize → De-energize/Lock Out.

**Observation worth preserving:** the five frozen Activities map to actual phases of construction work — Inspect (readiness), Lift (overcome gravity), Position (roughly placed), Align (precisely placed), Install (made part of the finished work) — consistent across every trade Adena performs. Treated as evidence the model is tracking real construction, not producing an arbitrary taxonomy.

**Expected future pattern (not yet observed, a stated prediction, not a decision):** as the library grows past roughly 30–50 Activities, they may naturally cluster into families (Movement, Assembly, Verification, Removal, Material Modification, Access, Protection...). If this happens, it should be allowed to emerge from the data rather than be designed in advance — consistent with keeping Material from becoming a premature fifth library (§3.1).

---

## 13. Development & Engineering Process

This section governs how this framework becomes application code. It is a standing process, not a one-time instruction.

### 13.1 Roles

- **Andrew** — Product Owner / SME. Final approval on everything.
- **ChatGPT** — Architect: workflow design, safety content, Activity/Object/Condition/Hazard/Control authoring, requirements, acceptance criteria.
- **Claude Code (me)** — Engineer: implementation, regression testing, technical recommendations — strictly within approved, completed milestones. Do not implement directly from chat history or from knowledge that has not yet been consolidated into an approved milestone of this framework.

### 13.2 Framework drives software, never the reverse

The Construction Reasoning Framework is the source of truth. If the framework changes, the application evolves to match. If the application reveals a technical limitation, the framework is not modified simply to accommodate the software — that gets raised as a flagged discussion, the same discipline already used throughout this document's own development (e.g. §5.2, §5.5).

**One addition to this rule:** if, when implementing an approved milestone, a demonstrably better technical approach exists — one that improves maintainability, scalability, performance, or future extensibility *without changing what the framework requires the system to understand or accomplish* — stop and present that recommendation before implementing it. Do not silently redesign the application, and do not feel constrained to preserve an inferior implementation if a better one exists. The framework defines *what* the system must do; the engineering judgment for *how* to build it well is mine to exercise and recommend, not to default away from.

### 13.3 Implementation follows completed milestones, not the whole roadmap at once

As each phase of the framework is completed and approved, only that phase gets implemented:

`Framework v1.0 → Activities v0.1 → Objects v0.1 → Conditions v0.1 → Hazard Relationships v0.1 → Control Suggestion Engine v0.1 → ...`

There is no requirement to wait for the entire Construction Knowledge Library before the application benefits from what already exists. Each completed, approved milestone should make the application measurably more capable.

### 13.4 Engineering discipline for every milestone

For every approved milestone, before any production code changes:

1. Review the framework changes/additions being implemented.
2. Identify all areas of the application affected.
3. Evaluate downstream impacts.
4. Verify architectural consistency with this document.
5. Check for logic conflicts with existing functionality.
6. Check for duplicate functionality.
7. Review performance implications.
8. Execute regression testing against current, working functionality (see `BASELINE.md` for what's currently protected).
9. Resolve all identified issues.
10. Only after validation passes should production code be updated and committed.

Knowledge approval does not automatically authorize code changes. Validated implementation does. The application should never be modified simply because new knowledge exists — only after confidence is established that the implementation is technically correct and does not regress existing, working functionality.

### 13.5 Branching and versioning

- All Construction Reasoning Engine development happens on a **dedicated development branch**. The production branch (the one the live, daily-used application deploys from — see `BASELINE.md`) stays stable until an entire milestone has been implemented, validated, and approved, and is merged only then.
- Every completed milestone is an **independently versioned, independently committed rollback point** (Framework v1.0, Activities v0.1, Activities v0.2, Objects v0.1, Conditions v0.1, Hazards v0.1, Control Engine v0.1...). If a later milestone introduces a regression, the project can roll back to the previous milestone without losing completed, validated work.
- This produces many small, validated improvements rather than one large integration effort at the end — the same "plan, review, validate, execute, verify, improve" cycle construction projects themselves use.

---

## 14. Long-Term Vision (context, not a current commitment)

The JSA is the first application of this engine, not the only one. The underlying Construction Reasoning Engine is intended, over time, to potentially support Activity Hazard Analyses, Lift Planning, Rigging Reviews, Method Statements, Pre-Task Planning, Supervisor Coaching, Training Development, Incident Investigation, Near Miss Analysis, and future construction planning tools — a reusable construction reasoning platform, not a JSA-specific application. This does not change anything about current scope or priorities; it's recorded here as the reason the framework itself (§3–§9) is being held to a higher, more general standard than a single feature would need.

**One guiding question for everything built from here forward, at any layer:**

> Does this help the engine understand the work the way an experienced construction professional understands the work?

If yes, it belongs. If not, it probably belongs somewhere else — or not at all.

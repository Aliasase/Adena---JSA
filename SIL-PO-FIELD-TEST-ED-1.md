> **Repository Record (AD-008 §6):** Product Owner field-testing direction for v1.4.1-dev1, November 26, 2026. Preserved verbatim below. Implemented in v1.4.1-dev2 (`SIL-ENGINE-v1.4.1.md` §7).

Product Owner Field Testing — Final Corrections and Test Deployment Authorization
ED-4 is accepted and closed.
ED-1 requires the following additional recognition scenario:
Task description: "Install clamp anchors"
The current v1.4.1-dev1 build does not suggest pinch-point hazards. It also produces drilling and powered-tool hazards without sufficient contextual support.
Ensure the pending ED-1 correction covers common terminology, including:

* Clamp anchors
* Beam clamps
* Clamp-on anchors
* Beam anchors
* Beam trolleys
* Sliding beam anchors

Recognition must not depend on the foreman explicitly entering "fall protection."
Expected behavior:

* Recognize applicable pinch-point and caught-between exposures.
* Recognize anchor failure, slipping or detachment.
* Provide appropriate clamp selection, compatibility, installation, securing and inspection controls.
* Do not assume drilling, adhesive anchoring, curing, powered tools or elevated work without supporting context.
* Preserve additional applicable hazards when supporting context is present.
* Reuse canonical records wherever appropriate.

Add these scenarios to the regression suite.
ED-3 corrections remain accepted as previously directed.
Complete the corrections, rerun all regression suites, commit the changes and deploy v1.4.1-dev2 to the isolated Netlify preview with the corresponding service worker cache update.
Production release is not authorized.
Provide the completion report and stop. Do not begin Package 004.

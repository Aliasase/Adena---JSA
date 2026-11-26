> **Repository Record (AD-008 §6):** Product Owner authorization to repoint the primary Netlify site, November 26, 2026. Preserved verbatim below. Completed November 26, 2026 — see `BASELINE.md`, "Environments".

PO-010 — Netlify Training Environment Authorization
Approved. Proceed.
The Product Owner authorizes repointing the primary Netlify site from revision-a2 to revision-a4.
The permanent training/testing address shall be:
https://adena-jsa.netlify.app/adena-jsa.html
Requirements:

1. Validate the same-day JSA update path from v1.2.0-p1 to v1.4.1-p1 before changing the branch configuration.
2. Confirm preservation of existing JSA data and signature integrity without falsely establishing historical revision acknowledgment.
3. If validation fails, stop and report the findings before changing the configuration.
4. Leave revision-a2 intact.
5. Maintain complete separation from GitHub production.
6. Confirm the primary Netlify address serves v1.4.1-p1 following the change.
7. Record the permanent training/testing URL in the governing project records.
8. Make no unrelated application changes.

Going forward, the primary Netlify address shall serve the current development build, while GitHub Pages shall serve only the approved production release.
Report completion and stop.
Package 004 remains pending the Architect's SIL-PKG-004 candidate library.

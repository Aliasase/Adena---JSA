/* PO-010 §1–2: same-day JSA update path v1.2.0-p1 → current build. Serve the revision-a2 files on :8770 (e.g. git archive origin/revision-a2 adena-jsa.html sw.js manifest.json icons into /tmp/a2srv, touch the files, python3 -m http.server 8770); the test copies the current adena-jsa.html and sw.js over them mid-run. */
const { chromium } = require('playwright');
const fs = require('fs');
const R = []; function ok(n, c, i){ R.push((c ? 'PASS ' : 'FAIL ') + n + (i ? ' — ' + i : '')); }
async function draw(p, sel){
  const box = await (await p.$(sel)).boundingBox();
  await p.mouse.move(box.x + 20, box.y + 20); await p.mouse.down();
  for(let i = 0; i < 12; i++){ await p.mouse.move(box.x + 30 + i * 15, box.y + 30 + (i % 3) * 10); }
  await p.mouse.up();
}
(async()=>{
  const b = await chromium.launch({executablePath:'/usr/bin/google-chrome', args:['--no-sandbox']});
  const ctx = await b.newContext({viewport:{width:1024,height:1366}});
  const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message));
  /* 1. v1.2.0-p1: same-day JSA with job info, a task step, supervisor and crew signatures (real signature pads) */
  await p.goto('http://localhost:8770/adena-jsa.html'); await p.waitForTimeout(1500);
  ok('baseline version', true, await p.evaluate(() => APP_VERSION + '-' + APP_BUILD));
  await p.evaluate(() => { state.job.project = 'PO-010 update-path check'; state.job.location = 'Bay 3'; addStep(); var s = state.steps[state.steps.length-1]; s.desc = 'Torch cut steel from boom lift'; s.hazard = 'Fire hazard / ignition source exposure'; s.control = 'Hot work permit'; onStateChanged({}); });
  await p.evaluate(() => openSupervisorModal()); await p.waitForTimeout(300);
  await p.fill('#supName', 'Test Supervisor'); await p.fill('#supPhone', '8635550100');
  await draw(p, '#supCanvas'); await p.evaluate(() => { doneSupSig(); checkSupervisorReady(); lockSupervisor(); });
  await p.evaluate(() => openCrewModal()); await p.fill('#crewName', 'Test Crew'); await p.dispatchEvent('#crewName', 'input'); await p.waitForTimeout(300);
  await draw(p, '#crewCanvas'); await p.evaluate(() => { doneCrewSig(); addCrewMember(); });
  const before = JSON.parse(await p.evaluate(() => localStorage.getItem('adena_jsa_current')));
  ok('v1.2 JSA signed (supervisor + crew)', before.supervisor && /^data:image\/png/.test(before.supervisor.sig) && before.crew.length === 1 && /^data:image\/png/.test(before.crew[0].sig), JSON.stringify({sup: !!before.supervisor, crew: before.crew.length}));
  ok('v1.2 record has no acknowledgment history', !('snapshots' in before), Object.keys(before).join(','));
  /* 2. deploy v1.4.1-p1 to the same origin (simulates repointing the primary Netlify site) */
  for(const f of ['adena-jsa.html', 'sw.js']) fs.copyFileSync('/home/claude/aliasase/adena---jsa/' + f, '/tmp/a2srv/' + f);
  await p.evaluate(async () => { const r = await navigator.serviceWorker.getRegistration(); if(r) await r.update(); });
  await p.waitForTimeout(3000); await p.reload(); await p.waitForTimeout(1500); await p.reload(); await p.waitForTimeout(1500);
  const v = await p.evaluate(() => APP_VERSION + '-' + APP_BUILD);
  ok('v1.4.1-p1 served after update', v === '1.4.1-p1', v);
  const caches_ = await p.evaluate(async () => (await caches.keys()).join(','));
  ok('v1.2.0 cache replaced by v1.4.1-p1 cache only', caches_ === 'adena-jsa-v1.4.1-p1', caches_);
  /* 3. data and signature integrity */
  const after = await p.evaluate(() => JSON.parse(JSON.stringify(state)));
  ok('job information preserved', after.job.project === before.job.project && after.job.location === before.job.location && after.job.date === before.job.date && after.id === before.id);
  ok('task steps preserved', JSON.stringify(after.steps) === JSON.stringify(before.steps));
  ok('supervisor signature, name and timestamp unchanged', JSON.stringify(after.supervisor) === JSON.stringify(before.supervisor));
  ok('crew signature, name and timestamp unchanged', JSON.stringify(after.crew) === JSON.stringify(before.crew));
  ok('original created timestamp unchanged', after.created === before.created);
  /* 4. no historical revision acknowledgment is established */
  ok('no acknowledgment history created (snapshots empty)', Array.isArray(after.snapshots) && after.snapshots.length === 0, JSON.stringify(after.snapshots));
  ok('no ack / re-ack fields added to signers', !Object.keys(after.supervisor).some(k => /ack/i.test(k)) && !after.crew.some(c => Object.keys(c).some(k => /ack/i.test(k))), Object.keys(after.supervisor).join(',') + ' / ' + Object.keys(after.crew[0]).join(','));
  ok('no false revision banner on load', after.materialChangedSinceLastSig === false && await p.evaluate(() => { const el = document.getElementById('revisionBanner'); return !el || getComputedStyle(el).display === 'none' || !el.offsetParent; }));
  const stored = JSON.parse(await p.evaluate(() => localStorage.getItem('adena_jsa_current')));
  ok('stored record not rewritten with acknowledgment history', !stored.snapshots || stored.snapshots.length === 0);
  /* 5. revision control works going forward on the migrated JSA */
  const rev = await p.evaluate(() => { state.steps[0].control = 'Hot work permit; fire watch'; onFieldChanged(); return {flag: state.materialChangedSinceLastSig, snaps: state.snapshots.length}; });
  ok('a later material change raises re-acknowledgment', rev.flag === true, JSON.stringify(rev));
  ok('signatures still unchanged after the material change', JSON.stringify((await p.evaluate(() => state.crew))) === JSON.stringify(before.crew) && JSON.stringify(await p.evaluate(() => state.supervisor)) === JSON.stringify(before.supervisor));
  const pdf = await p.evaluate(async () => { const bl = await generatePdfBlob(); return {size: bl.size, head: await bl.slice(0,5).text()}; });
  ok('PDF generates for the migrated JSA', pdf.head === '%PDF-' && pdf.size > 10000, JSON.stringify(pdf));
  ok('no page errors', errs.length === 0, errs.join(' | '));
  console.log(R.join('\n'));
  await b.close();
})();

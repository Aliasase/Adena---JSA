const { chromium } = require('playwright');
const fs = require('fs');
const R = []; function ok(n, c, i){ R.push((c ? 'PASS ' : 'FAIL ') + n + (i ? ' — ' + i : '')); }
(async()=>{
  const b = await chromium.launch({executablePath:'/usr/bin/google-chrome', args:['--no-sandbox']});
  const ctx = await b.newContext({viewport:{width:1024,height:1366}});
  const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message));
  /* 1. start on production v1.3.0-p1, create a JSA with a signed crew member */
  await p.goto('http://localhost:8767/adena-jsa.html'); await p.waitForTimeout(1500);
  ok('baseline version', true, await p.evaluate(() => APP_VERSION + '-' + APP_BUILD));
  await p.evaluate(() => { showTab('steps'); addStep(); var s = state.steps[state.steps.length-1]; s.desc = 'Upgrade test step'; s.hazard = 'Fire hazard / ignition source exposure'; onStateChanged({}); });
  const before = await p.evaluate(() => localStorage.getItem('adena_jsa_current'));
  /* 2. deploy v1.4.0-dev1 to the same origin (simulates Netlify update) */
  fs.copyFileSync('/home/claude/aliasase/adena---jsa/adena-jsa.html', '/tmp/upg/adena-jsa.html');
  fs.copyFileSync('/home/claude/aliasase/adena---jsa/sw.js', '/tmp/upg/sw.js');
  await p.evaluate(async () => { const r = await navigator.serviceWorker.getRegistration(); if(r) await r.update(); });
  await p.waitForTimeout(2500);
  await p.reload(); await p.waitForTimeout(1500);
  await p.reload(); await p.waitForTimeout(1500);
  const v = await p.evaluate(() => APP_VERSION + '-' + APP_BUILD);
  ok('updated build served after deploy', v === '1.4.0-dev1', v);
  const caches_ = await p.evaluate(async () => (await caches.keys()).join(','));
  ok('old cache replaced', /v1\.4\.0-dev1/.test(caches_) && !/v1\.3\.0-p1/.test(caches_), caches_);
  const after = await p.evaluate(() => state.steps.map(s => s.desc + '|' + s.hazard).join(';'));
  ok('active JSA data preserved across update', after.includes('Upgrade test step|Fire hazard / ignition source exposure'), after);
  /* 3. legacy hazard text from an existing JSA still gets control suggestions */
  const ctl = await p.evaluate(() => getSuggestions('control', 'Fire hazard / ignition source exposure', {task: 'Upgrade test step'}));
  ok('existing JSA legacy hazard still receives controls', ctl.length > 0, ctl.length + ' controls');
  /* 4. individual crew re-acknowledgment after a material change */
  const re = await p.evaluate(() => {
    state.crew.push({id: 99, name: 'Reack Tester', sig: 'data:image/png;base64,AAAA', timestamp: new Date().toISOString()});
    state.snapshots.push({event: 'crew', signerName: 'Reack Tester', timestamp: new Date().toISOString(), revIndex: state.snapshots.length, content: snapshotMaterialContent(), crewMemberId: 99});
    persist();
    state.steps[0].control = 'Changed control'; onFieldChanged();
    openCrewReackModal(99); confirmCrewReack();
    var last = state.snapshots[state.snapshots.length - 1];
    return {event: last.event, member: last.crewMemberId, sigKept: state.crew.find(c => c.id === 99).sig === 'data:image/png;base64,AAAA'};
  });
  ok('individual crew re-acknowledgment recorded', re.event === 'crew_reack' && re.member === 99, JSON.stringify(re));
  ok('original crew signature unchanged by re-acknowledgment', re.sigKept);
  /* 5. stale JSA rejection */
  await p.evaluate(() => { var s = JSON.parse(localStorage.getItem('adena_jsa_current')); s.job.date = '2026-11-24'; localStorage.setItem('adena_jsa_current', JSON.stringify(s)); });
  await p.reload(); await p.waitForTimeout(1000);
  const fresh = await p.evaluate(() => ({date: state.job.date, steps: state.steps.length, desc: (state.steps[0]||{}).desc || ''}));
  ok('stale (prior-day) JSA rejected on load', fresh.date !== '2026-11-24' && !fresh.desc.includes('Upgrade test step'), JSON.stringify(fresh));
  ok('no page errors', errs.length === 0, errs.join(' | '));
  console.log(R.join('\n')); await b.close();
})();

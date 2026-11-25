const { chromium } = require('playwright');
const port = process.argv[2] || '8765';
const URL = 'http://localhost:' + port + '/adena-jsa.html';
const R = []; function ok(name, cond, info){ R.push((cond ? 'PASS ' : 'FAIL ') + name + (info ? ' — ' + info : '')); }
async function draw(p, sel){
  const box = await (await p.$(sel)).boundingBox();
  await p.mouse.move(box.x + 20, box.y + 20); await p.mouse.down();
  for(let i = 0; i < 12; i++){ await p.mouse.move(box.x + 30 + i * 15, box.y + 30 + (i % 3) * 10); }
  await p.mouse.up();
}
(async()=>{
  const b = await chromium.launch({executablePath:'/usr/bin/google-chrome', args:['--no-sandbox']});
  const ctx = await b.newContext({viewport:{width:1024,height:1366}, hasTouch:false});
  const p = await ctx.newPage(); const errs = [];
  p.on('pageerror', e => errs.push(e.message));
  p.on('console', m => { if(m.type() === 'error' && !/404/.test(m.text())) errs.push(m.text()); });
  await p.goto(URL); await p.waitForTimeout(1200);
  ok('app loads', (await p.title()) === 'Adena JSA / PTP');
  const ver = await p.evaluate(() => APP_VERSION + '-' + APP_BUILD); ok('version', true, ver);
  const sw = await p.evaluate(async () => { const r = await navigator.serviceWorker.getRegistration(); return !!r; }); ok('service worker registered', sw);
  /* Job info: fill text inputs so signatures are possible */
  await p.evaluate(() => showTab('jobinfo'));
  const inputs = await p.$$('#tab-jobinfo input[type=text], #jobinfo input[type=text], .tab-panel input[type=text]');
  /* task step + suggestions */
  await p.evaluate(() => showTab('steps'));
  await p.click('text=+ Add Task Step');
  const sid = await p.evaluate(() => state.steps[state.steps.length - 1].id);
  await p.fill('#step-desc-' + sid, 'Torch cut structural steel from a boom lift');
  await p.dispatchEvent('#step-desc-' + sid, 'input');
  await p.evaluate(id => toggleDrawer(id, 'hazard'), sid);
  await p.waitForTimeout(300);
  let items = await p.$$eval('#drawer-hazard-' + sid + ' .drawer-item', els => els.map(e => e.textContent));
  const more = await p.$('#drawer-hazard-' + sid + ' .drawer-show-more');
  ok('hazard drawer shows first batch', items.length > 0 && items.length <= 15, items.length + ' shown; first: ' + items[0]);
  ok('Show More present when more exist', !!more);
  if(more){ await more.click(); await p.waitForTimeout(200); const n2 = (await p.$$('#drawer-hazard-' + sid + ' .drawer-item')).length; ok('Show More adds next batch', n2 > items.length, n2 + ' shown'); }
  /* tap to add, tap to remove */
  await p.click('#drawer-hazard-' + sid + ' .drawer-item[data-idx="0"]'); await p.waitForTimeout(150);
  let hz = await p.inputValue('#step-hazard-' + sid);
  ok('tap adds suggestion', hz.trim() === items[0].trim(), hz);
  await p.click('#drawer-hazard-' + sid + ' .drawer-item[data-idx="0"]'); await p.waitForTimeout(150);
  hz = await p.inputValue('#step-hazard-' + sid); ok('tap again removes suggestion', hz.trim() === '');
  await p.click('#drawer-hazard-' + sid + ' .drawer-item[data-idx="0"]');
  await p.click('#drawer-hazard-' + sid + ' .drawer-item[data-idx="1"]'); await p.waitForTimeout(150);
  /* manual entry preserved alongside suggestions */
  await p.evaluate(id => { const t = document.getElementById('step-hazard-' + id); t.value = t.value + '\nMy own hazard typed in'; t.dispatchEvent(new Event('input')); }, sid);
  await p.evaluate(() => closeAllDrawers());
  await p.evaluate(id => toggleDrawer(id, 'control'), sid); await p.waitForTimeout(300);
  const ctl = await p.$$eval('#drawer-control-' + sid + ' .drawer-item', els => els.map(e => e.textContent));
  ok('control drawer populated', ctl.length > 0, ctl.length + ' shown; first: ' + ctl[0]);
  ok('control drawer ≤ first batch', ctl.length <= 15);
  await p.click('#drawer-control-' + sid + ' .drawer-item[data-idx="0"]'); await p.waitForTimeout(150);
  const cv = await p.inputValue('#step-control-' + sid); ok('control tap adds', cv.trim().length > 0, cv.split('\n')[0]);
  hz = await p.inputValue('#step-hazard-' + sid); ok('manual hazard text preserved', hz.includes('My own hazard typed in'));
  await p.evaluate(() => closeAllDrawers());
  /* persistence across reload (same-day restoration) */
  await p.reload(); await p.waitForTimeout(1000);
  const restored = await p.evaluate(() => state.steps.map(s => s.desc + '|' + s.hazard));
  ok('same-day restoration after reload', restored.some(s => s.includes('Torch cut structural steel') && s.includes('My own hazard typed in')));
  /* offline operation */
  await p.waitForTimeout(500);
  await ctx.setOffline(true);
  let offlineOk = false; try { await p.reload(); await p.waitForTimeout(800); offlineOk = (await p.title()) === 'Adena JSA / PTP'; } catch(e){ offlineOk = false; }
  ok('offline reload (service worker cache)', offlineOk);
  await ctx.setOffline(false);
  /* supervisor signature and lock */
  await p.evaluate(() => showTab('supervisor'));
  await p.evaluate(() => openSupervisorModal());
  await p.fill('#supName', 'Test Supervisor'); await p.dispatchEvent('#supName', 'input');
  if(await p.$('#supPhone')){ await p.fill('#supPhone', '8635550100'); await p.dispatchEvent('#supPhone','input'); }
  await draw(p, '#supCanvas');
  await p.evaluate(() => doneSupSig()); await p.waitForTimeout(200);
  const lockable = await p.evaluate(() => { const b = document.getElementById('supLockBtn'); return b && !b.disabled; });
  if(lockable){ await p.evaluate(() => lockSupervisor()); }
  await p.waitForTimeout(300);
  const supState = await p.evaluate(() => JSON.stringify(state.supervisor || state.sup || {}).slice(0, 200));
  ok('supervisor signature captured', /data:image|sig/.test(supState), supState.slice(0, 80));
  /* crew signature */
  await p.evaluate(() => showTab('crew')); await p.evaluate(() => openCrewModal());
  await p.fill('#crewName', 'Test Crew'); await p.dispatchEvent('#crewName', 'input'); await p.waitForTimeout(300);
  await draw(p, '#crewCanvas');
  await p.evaluate(() => doneCrewSig()); await p.waitForTimeout(150);
  await p.evaluate(() => { const b = document.getElementById('crewAddBtn'); if(b && !b.disabled) addCrewMember(); });
  await p.waitForTimeout(300);
  const crew = await p.evaluate(() => state.crew.map(c => c.name + ':' + (c.sig ? c.sig.slice(0, 22) : 'none')));
  ok('crew signature captured', crew.length > 0 && /data:image/.test(crew[0]), crew.join(','));
  const sigBefore = await p.evaluate(() => state.crew[0] && state.crew[0].sig);
  /* material change → revision acknowledgment required, original signature preserved */
  await p.evaluate(() => showTab('steps'));
  await p.evaluate(id => { const t = document.getElementById('step-control-' + id); t.value = t.value + '\nAdded control after signing'; t.dispatchEvent(new Event('input')); t.dispatchEvent(new Event('blur')); }, sid);
  await p.waitForTimeout(500);
  const banner = await p.evaluate(() => { const b = document.getElementById('revisionBanner'); return b && getComputedStyle(b).display !== 'none'; });
  ok('material change raises revision banner', banner);
  const sigAfter = await p.evaluate(() => state.crew[0] && state.crew[0].sig);
  ok('original signature preserved after change', !!sigBefore && sigBefore === sigAfter);
  const hist = await p.evaluate(() => JSON.stringify(state).match(/revision|snapshot|history/gi) || []);
  ok('revision history present in state', hist.length > 0, hist.length + ' refs');
  /* native PDF generation */
  const pdf = await p.evaluate(async () => { try { const blob = await generatePdfBlob(); const buf = new Uint8Array(await blob.slice(0, 5).arrayBuffer()); return {size: blob.size, head: String.fromCharCode.apply(null, buf)}; } catch(e){ return {err: e.message}; } });
  ok('PDF generation', pdf.head === '%PDF-' && pdf.size > 1000, JSON.stringify(pdf));
  const fname = await p.evaluate(() => buildPdfFilename()); ok('PDF filename', /\.pdf$/.test(fname), fname);
  ok('no page errors', errs.length === 0, errs.slice(0, 3).join(' | '));
  console.log(R.join('\n'));
  await b.close();
})();

/* SIL regression suite — Packages 001 and 002 (AD-009 §7).
   Runs against the engine embedded in ../adena-jsa.html (no copy of the engine is kept here).
   Usage: node tests/sil-regression.js */
const fs = require('fs'), path = require('path'), vm = require('vm');
const html = fs.readFileSync(path.join(__dirname, '..', 'adena-jsa.html'), 'utf8');
const a = html.indexOf('const TASK_TO_HAZARD = [');
const b = html.indexOf('];', html.indexOf('const HAZ_TO_CONTROL = [')) + 2;
const e1 = html.indexOf('/* ============================================================\n   SAFETY INTELLIGENCE LIBRARY (SIL)');
const e2 = html.indexOf('/* Track how many suggestions are currently visible per drawer');
const code = html.slice(a, b).replace('const TASK', 'var TASK').replace('const HAZ', 'var HAZ') + '\n' + html.slice(e1, e2);
const sandbox = {}; vm.createContext(sandbox); vm.runInContext(code, sandbox);
const e = { getSuggestions: sandbox.getSuggestions, SIL_DATA: sandbox.SIL_DATA };
const T = {}; e.SIL_DATA.hazards.forEach(h => T[h.id] = h.t);
const C = e.SIL_DATA.controls;
let pass = 0, fail = 0; const fails = [];
function hz(text){ return e.getSuggestions('hazard', text); }
function ct(hazLines, task){ return e.getSuggestions('control', hazLines.join('\n'), {task}); }
function check(name, cond, detail){ if(cond){ pass++; } else { fail++; fails.push(name + (detail ? ' :: ' + detail : '')); } }
function S(id, text, o){
  const out = hz(text); const top = out.slice(0, 15);
  (o.inc || []).forEach(h => check(id + ' includes ' + h, out.includes(T[h]), text));
  (o.top || []).forEach(h => check(id + ' first-page ' + h, top.includes(T[h]), text + ' | pos=' + out.indexOf(T[h])));
  (o.exc || []).forEach(h => check(id + ' excludes ' + h, !out.includes(T[h]), text));
  (o.incText || []).forEach(s => check(id + ' includes legacy "' + s + '"', out.includes(s), text));
  (o.excText || []).forEach(s => check(id + ' excludes "' + s + '"', !out.some(x => x.toLowerCase().includes(s.toLowerCase())), text));
  if(o.before) o.before.forEach(([a, b]) => check(id + ' ' + a + ' ranks before ' + b, out.indexOf(T[a]) > -1 && (out.indexOf(T[b]) === -1 || out.indexOf(T[a]) < out.indexOf(T[b])), text));
  check(id + ' no duplicates', new Set(out.map(x => x.toLowerCase())).size === out.length, text);
  return out;
}
function K(id, task, hazIds, o){
  const lines = hazIds.map(h => T[h] || h);
  const out = ct(lines, task);
  (o.inc || []).forEach(c => check(id + ' control ' + c, out.includes(C[c]), task));
  (o.exc || []).forEach(c => check(id + ' no control ' + c, !out.includes(C[c]), task));
  (o.excText || []).forEach(s => check(id + ' control excludes "' + s + '"', !out.some(x => x.includes(s)), task));
  (o.incText || []).forEach(s => check(id + ' control includes "' + s + '"', out.includes(s), task));
  check(id + ' controls no duplicates', new Set(out.map(x => x.toLowerCase())).size === out.length, task);
  return out;
}

/* ===== Package 001 ===== */
S('R-1', 'Install bolts in steel connections at ground level using hand wrenches', {inc:['H-BT-001','H-BT-003','H-BT-012','H-BT-031'], exc:['H-BT-017','H-BT-023','H-BT-024','H-BT-014']});
S('R-2', 'Install connection bolts on a suspended structural beam while working from an aerial lift', {inc:['H-BT-014','H-BT-017','H-BT-018','H-BT-001'], incText:['Fall from aerial lift platform','Crushing / caught-between at overhead obstructions']});
S('R-3', 'Torque structural connection bolts at ground level using a hydraulic torque wrench', {inc:['H-BT-022','H-BT-023','H-BT-024','H-BT-031'], exc:['H-BT-017','H-BT-001']});
S('R-4 / Add01 §4', 'Install structural connection bolts using hand tools, impact wrenches and hydraulic torque wrenches while working from aerial lifts.', {top:['H-BT-017','H-BT-023'], inc:['H-BT-022','H-BT-021','H-BT-019','H-BT-020','H-BT-018','H-BT-001','H-BT-003','H-BT-004','H-BT-024'], incText:['Fall from aerial lift platform']});
S('R-5', 'Torque structural bolts', {inc:['H-BT-003','H-BT-011','H-BT-022','H-BT-023'], exc:['H-BT-001','H-BT-014']});
S('R-6', 'Install TC bolts with shear wrench', {inc:['H-BT-028','H-BT-031','H-BT-021']});
S('R-7 / A-1 tig', 'Snug tight and turn of nut on beam connections', {inc:['H-BT-011','H-BT-031'], exc:['H-HW-009','H-HW-011','H-HW-012','H-HW-001'], excText:['weld fume','arc flash']});
S('R-8', 'Install fall protection anchor', {exc:['H-BT-001','H-BT-003','H-BT-011']});
S('R-9', 'Splice conveyor belt', {exc:['H-BT-001','H-BT-003']});
S('R-10', 'Tighten ratchet straps on load', {exc:['H-BT-011','H-BT-003','H-BT-022']});
S('R-11', 'Work in tight space', {exc:['H-HW-011','H-HW-012','H-BT-011'], excText:['weld fume']});
S('R-12', 'Check torque on pump flange bolts', {inc:['H-BT-036','H-BT-003'], exc:['H-BT-001','H-BT-012','H-BT-014','H-BT-015','H-BT-016','H-BT-029']});
S('R-13', 'Break flange and re-torque bolts on acid line', {inc:['H-BT-036'], exc:['H-BT-012','H-BT-014']});
S('R-14', 'Bolt up beam connections from boom lift', {top:['H-BT-017'], inc:['H-BT-018','H-BT-032'], incText:['Crushing / caught-between at overhead obstructions']});
S('R-15', 'Hydraulically tension studs on pump flange', {inc:['H-BT-033','H-BT-035','H-BT-023','H-BT-036']});
S('R-16', 'Install hydraulic bolt tensioners and tension vessel flange studs', {inc:['H-BT-033','H-BT-035','H-BT-036']});
S('R-17', 'Simultaneously tension multiple flange studs using hydraulic pump', {inc:['H-BT-033','H-BT-023','H-BT-024']});
S('R-18', 'Remove hydraulic tensioners after completing stud tensioning', {inc:['H-BT-023','H-BT-033'], exc:['H-BT-034']});
S('R-18a', 'Torque and hydraulically tension flange bolts during plant maintenance', {inc:['H-BT-033','H-BT-022','H-BT-036']});
S('R-18b', 'Tension conveyor belt', {exc:['H-BT-033','H-BT-034','H-BT-035']});
S('R-19', 'Pretension TC bolts on beam splice', {inc:['H-BT-028'], exc:['H-BT-033','H-BT-035']});
S('R-20', 'Install tension control bolts', {inc:['H-BT-028'], exc:['H-BT-033']});
S('R-21', 'Stress post-tension tendons', {exc:['H-BT-033','H-BT-035','H-BT-001']});
S('R-22', 'Pump maintenance, replace coupling', {exc:['H-BT-033','H-BT-035']});
S('R-23', 'Detension studs and remove heat exchanger channel cover', {inc:['H-BT-034']});
S('R-24', 'Re-torque anchor bolts on column base plates', {inc:['H-BT-011'], exc:['H-BT-001','H-BT-012','H-BT-014','H-BT-015']});
S('R-25', 'Check torque on existing column connections and install bolts on the next suspended beam', {inc:['H-BT-014','H-BT-013','H-BT-001','H-BT-011']});
S('R-26', 'Check torque on flange bolts — no line break', {inc:['H-BT-036'], excText:['Stored pressure release injury','Chemical exposure from process','Fire from flammable process fluids']});
S('R-27', 'Remove spool piece and replace gaskets on acid line', {});
S('R-29 (P1)', 'Drill holes in beam flange with mag drill', {inc:['H-BT-004','H-BT-010']});
S('R-30 (P1)', 'Blow down air hose and disconnect impact gun', {inc:['H-BT-025']});
S('R-32 (P1)', 'Stage deck bundles and tools on upper level', {});
S('R-33', 'Bolt up beam splice at ground level', {exc:['H-BT-017']});
/* ===== Package 002 (Architect 1-28) ===== */
S('P2-1', 'Weld structural steel connections at ground level using a stick welder', {top:['H-HW-001','H-HW-011','H-HW-012','H-HW-009'], inc:['H-HW-006','H-HW-003'], exc:['H-BT-017']});
S('P2-2', 'Grind welds smooth using an angle grinder', {top:['H-HW-027','H-HW-028','H-BT-004','H-HW-029','H-HW-001'], inc:['H-BT-019']});
S('P2-3', 'Cut steel plate with a cut-off wheel', {inc:['H-HW-027','H-HW-001'], exc:['H-HW-024','H-HW-025','H-HW-007']});
S('P2-4', 'Torch cut structural steel from a boom lift', {top:['H-BT-017','H-HW-001','H-HW-032','H-HW-036'], inc:['H-HW-024','H-HW-025','H-BT-018'], incText:['Crushing / caught-between at overhead obstructions']});
S('P2-5', 'Weld stainless steel pipe using TIG', {inc:['H-HW-013','H-HW-011']});
S('P2-6', 'Weld galvanized steel brackets', {inc:['H-HW-014','H-HW-011']});
S('P2-7', 'Grind concrete using a wet grinder', {inc:['H-HW-027','H-HW-028'], exc:['H-HW-001','H-HW-003','H-HW-006','H-HW-038']});
S('P2-8', 'Cut cardboard with a utility knife', {exc:['H-HW-001','H-HW-027']});
S('P2-9', 'Cut steel', {inc:['H-HW-001','H-HW-032'], exc:['H-HW-024','H-HW-025','H-HW-027']});
S('P2-10', 'Work in a tight space while tightening bolts', {exc:['H-HW-011','H-HW-009','H-HW-012']});
S('P2-11', 'Perform electrical arc flash assessment', {exc:['H-HW-009','H-HW-011','H-HW-012','H-HW-001']});
S('P2-12', 'Weld inside a vessel using shielding gas', {inc:['H-HW-019','H-HW-011','H-HW-001']});
S('P2-13', 'Weld on an empty fuel tank', {top:['H-HW-034'], inc:['H-HW-004']});
S('P2-14', 'Torch cut and remove an existing structural platform during demolition', {inc:['H-HW-001','H-HW-032','H-BT-013']});
S('P2-15', 'Weld steel and grind the welds', {inc:['H-HW-011','H-HW-027','H-HW-029']});
S('P2-16', 'Cut stainless steel lath using hand snips', {exc:['H-HW-001','H-HW-027']});
S('P2-17', 'Cut galvanized lath using hand snips', {exc:['H-HW-001']});
S('P2-18', 'Weld overhead near a synthetic sling', {inc:['H-HW-037','H-BT-032','H-BT-018']});
S('P2-19', 'Weld near combustible dust collection equipment', {inc:['H-HW-005']});
S('P2-20', 'Grind steel in a designated fabrication shop', {inc:['H-HW-001','H-HW-003']});
S('P2-21', 'Braze copper tubing in an enclosed room', {inc:['H-HW-007','H-HW-012','H-HW-001']});
S('P2-22', 'Remove a pump and cut a seized flange bolt with a torch', {inc:['H-HW-001','H-HW-024']});
S('P2-23', 'Use a roofing torch', {inc:['H-HW-001'], exc:['H-HW-011','H-HW-032']});
S('P2-24', 'Grind a weld and change the grinding wheel', {inc:['H-HW-030','H-HW-027']});
S('P2-25', 'Weld on a pressurized process line', {top:['H-HW-035']});
S('P2-26', 'Grind painted steel with an unknown coating', {inc:['H-HW-018'], exc:['H-HW-016']});
S('P2-27', 'Cut steel using a non-sparking cold-cutting method', {exc:['H-HW-001','H-HW-003','H-HW-027']});
S('P2-28', 'Weld steel while another crew grinds concrete nearby', {inc:['H-HW-011','H-HW-001']});
/* ===== Engineer additions 29-43 ===== */
S('P2-29', 'Run 7018 on beam connections', {inc:['H-HW-011','H-HW-012']});
S('P2-30', 'Preheat column splice with rosebud', {inc:['H-HW-007','H-HW-024','H-HW-025','H-HW-001'], exc:['H-HW-011']});
S('P2-31', 'Heat straighten bent beam flange', {inc:['H-HW-008'], exc:['H-HW-011']});
S('P2-32', 'Hoist welding cylinders to second floor with crane', {inc:['H-HW-022']});
S('P2-33', 'Air arc gouge out bad weld', {inc:['H-HW-009','H-HW-012','H-BT-025','H-BT-019','H-HW-001']});
S('P2-34', 'Run welding leads across walkway', {exc:['H-HW-016']});
S('P2-35', 'Grind paint off galvanized handrail before welding', {inc:['H-HW-014','H-HW-027','H-HW-001'], exc:['H-HW-016']});
S('P2-36', 'Torch cut lead-painted steel during demolition', {inc:['H-HW-016','H-HW-001','H-HW-032']});
S('P2-37', 'Weld inside tank, break for lunch', {inc:['H-HW-019','H-HW-011']});
S('P2-38', 'Run engine-driven welder inside building', {top:['H-HW-041']});
S('P2-39', 'Weld near spotter guiding telehandler', {inc:['H-HW-011']});
S('P2-40', 'Cut threaded rod with bandsaw', {exc:['H-HW-011','H-HW-001','H-HW-012']});
S('P2-41', 'Change cut-off wheel on 4-1/2 grinder', {inc:['H-HW-030','H-HW-027']});
S('P2-42', 'Weld beam from boom lift with lanyard near the weld', {inc:['H-HW-036','H-BT-017']});
S('P2-43', 'Weld on natural gas pipeline', {inc:['H-HW-035']});
/* ===== Response 004 ===== */
S('R4-1', 'Grind steel brackets in fabrication shop', {inc:['H-HW-001','H-HW-029']});
S('R4-2', 'Grind concrete floor', {exc:['H-HW-001','H-HW-003']});
S('R4-3', 'Grind thoriated tungsten electrode', {inc:['H-HW-042']});
S('R4-4', 'Grind non-thoriated tungsten electrode', {exc:['H-HW-042']});
S('R4-5', 'Induction preheat structural connection', {inc:['H-HW-008'], exc:['H-HW-024','H-HW-025','H-HW-007']});
S('R4-6', 'Rosebud preheat structural connection', {inc:['H-HW-007','H-HW-024','H-HW-001']});
S('R4-7', 'Apply flammable coating', {exc:['H-HW-001','H-HW-003']});
S('R4-8', 'Weld using engine-driven welder inside building', {top:['H-HW-041']});
S('R4-9', 'Overhead welding beneath structural connection', {inc:['H-BT-032','H-HW-006','H-BT-018']});
S('R4-10', 'Check bolt torque and weld adjacent connection', {inc:['H-HW-011','H-BT-011']});
/* ===== Legacy coverage (activities not yet in Phase A-4) ===== */
S('L-1 excavation', 'Excavate trench for underground utilities', {incText:['Cave-in / trench collapse']});
S('L-2 scaffold', 'Erect scaffold on the north wall', {incText:['Fall from scaffold platform']});
S('L-3 crane', 'Crane pick of HVAC unit', {incText:['Dropped load']});
S('L-4 confined', 'Confined space entry into wet well', {incText:['Oxygen deficiency or enrichment']});
S('L-5 painting', 'Paint handrail with epoxy coating', {incText:['Flammable vapor and fire hazard']});
S('L-6 ear/near', 'Clean up near the gate', {excText:['Noise-induced hearing damage']});
/* ===== Controls (method-specific, policy, legacy) ===== */
K('K-1 face shield policy P-000009', 'Grind welds smooth using an angle grinder', ['H-HW-029'], {inc:['C-000221','C-000054'], exc:['C-000055']});
K('K-2 A4 + thermal combined', 'Torch cut and remove an existing structural platform during demolition', ['H-BT-002','H-HW-006'], {inc:['C-000272'], exc:['C-000004','C-000112','C-000140']});
K('K-3 work gloves steel', 'Bolt up beam splice', ['H-BT-002'], {inc:['C-000004'], exc:['C-000112','C-000272']});
K('K-4 A4 knife', 'Cut stainless steel lath with a knife', ['H-BT-002'], {inc:['C-000112'], exc:['C-000004']});
K('K-5 hot work policies', 'Grind steel brackets in fabrication shop', ['H-HW-001'], {inc:['C-000114','C-000115','C-000116','C-000118']});
K('K-6 bolted vs welded 031', 'Check bolt torque and weld adjacent connection', ['H-BT-031'], {inc:['C-000251','C-000027']});
K('K-7 welded-only 031', 'Weld beam to column', ['H-BT-031'], {inc:['C-000251'], exc:['C-000084']});
K('K-8 bolted-only 031', 'Install TC bolts on beam splice', ['H-BT-031'], {inc:['C-000084'], exc:['C-000251','C-000252']});
K('K-9 acetylene', 'Cut with oxy-acetylene torch', ['H-HW-024'], {inc:['C-000200']});
K('K-10 propane no acetylene ctrl', 'Cut with oxy-propane torch', ['H-HW-024'], {exc:['C-000200']});
K('K-11 pneumatic only', 'Air arc gouge out bad weld', ['H-BT-025'], {inc:['C-000068'], exc:['C-000109','C-000110']});
K('K-12 other hose', 'Disconnect water blast hose', ['H-BT-025'], {inc:['C-000109','C-000110'], exc:['C-000067','C-000068']});
K('K-13 confined gas split', 'Weld inside tank, break for lunch', ['H-HW-019'], {inc:['C-000177','C-000258','C-000259','C-000260']});
K('K-14 CO no indoor authorization', 'Run engine-driven welder inside building', ['H-HW-041'], {inc:['C-000180','C-000181']});
K('K-15 ear slag', 'Overhead welding beneath structural connection', ['H-BT-032'], {inc:['C-000261']});
K('K-16 withheld RCSC', 'Turn of nut on beam splice with calibrated wrench', ['H-BT-031'], {});
K('K-17 legacy respirator replaced', 'Grind concrete', ['Silica exposure from concrete dust'], {excText:['N95 minimum'], inc:['C-000164','C-000271']});
K('K-18 flammable coating, no hot work permit', 'Apply flammable coating', ['Flammable vapor and fire hazard'], {exc:['C-000116','C-000115','C-000114'], incText:['Maintain charged fire extinguisher in the work area at all times']});
K('K-19 legacy coverage (excavation)', 'Excavate trench', ['Cave-in / trench collapse'], {});
K('K-20 fall equivalence', 'Bolt up beam from boom lift', ['H-BT-017'], {inc:['C-000039','C-000040','C-000041']});
K('K-21 heat stress expanded', 'Weld inside tank in summer heat', ['H-HW-021'], {inc:['C-000262','C-000263','C-000185']});
K('K-22 thoriated', 'Grind thoriated tungsten electrode', ['H-HW-042'], {inc:['C-000265','C-000267']});

/* withheld controls must not appear anywhere in the app data */
['turn_of_nut','calib','dti','preinstall','pattern','bolt_storage'];
const withheldText = ['match mark', 'calibration daily', 'DTI:', 'pre-installation verification', 'stiffest part', 'clean, dry and lubricated'];
withheldText.forEach(w => check('withheld absent: ' + w, !Object.values(C).some(t => t.includes(w))));

console.log('PASS', pass, 'FAIL', fail);
fails.forEach(f => console.log('  ✗', f));
if(process.argv[2] === 'show'){ console.log(hz(process.argv[3])); }

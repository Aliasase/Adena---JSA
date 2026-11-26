/* SIL Package 003 regression suite (AD-010 §7) — the 82 scenarios of SIL-PKG-003-REGRESSION.md (r2.1)
   plus defect-correction and acceptance checks. Runs against the engine embedded in ../adena-jsa.html.
   Usage: node tests/sil-pkg003.js */
const fs = require('fs'), path = require('path'), vm = require('vm');
const html = fs.readFileSync(path.join(__dirname, '..', 'adena-jsa.html'), 'utf8');
const a = html.indexOf('const TASK_TO_HAZARD = [');
const b = html.indexOf('];', html.indexOf('const HAZ_TO_CONTROL = [')) + 2;
const e1 = html.indexOf('/* ============================================================\n   SAFETY INTELLIGENCE LIBRARY (SIL)');
const e2 = html.indexOf('/* Track how many suggestions are currently visible per drawer');
const code = html.slice(a, b).replace('const TASK', 'var TASK').replace('const HAZ', 'var HAZ') + '\n' + html.slice(e1, e2);
const E = {}; vm.createContext(E); vm.runInContext(code, E);
const IDS = {"bit_contact": "C-000273", "bit_stop": "C-000274", "hair_jewelry": "C-000275", "no_gloves_spindle": "C-000276", "machine_guards": "C-000277", "swarf": "C-000278", "bind_stop": "C-000279", "clutch": "C-000280", "bit_inspect": "C-000281", "bit_select": "C-000282", "bit_speed": "C-000283", "chuck_key": "C-000284", "retainer": "C-000285", "sheet_gloves": "C-000286", "workpiece_stop": "C-000287", "pat_unload": "C-000288", "gas_isolate": "C-000289", "mag_surface": "C-000290", "mag_chain": "C-000291", "mag_stop": "C-000292", "mag_power": "C-000293", "core_mount": "C-000294", "core_inspect": "C-000295", "core_vacuum": "C-000296", "core_stop": "C-000297", "opposite_side": "C-000298", "opposite_coord": "C-000299", "core_retain": "C-000300", "svc_identify": "C-000301", "svc_scan": "C-000302", "svc_confirm": "C-000303", "svc_stop": "C-000304", "pipe_strike": "C-000305", "pt_identify": "C-000306", "pt_authorize": "C-000307", "pt_locate": "C-000308", "pt_unknown": "C-000309", "pt_strike": "C-000310", "struct_location": "C-000311", "struct_rebar": "C-000312", "struct_report": "C-000313", "silica_identify": "C-000314", "silica_method": "C-000315", "silica_maintain": "C-000316", "silica_holes": "C-000317", "dust_cleanup": "C-000318", "silica_plan": "C-000319", "dust_identify": "C-000320", "dust_capture": "C-000321", "coat_identify": "C-000322", "suspect_material": "C-000323", "regulated_proc": "C-000324", "wet_rated": "C-000325", "wet_protect": "C-000326", "slurry_contain": "C-000327", "slurry_runoff": "C-000328", "slurry_dispose": "C-000329", "cement_ppe": "C-000330", "splash": "C-000331", "cement_wash": "C-000332", "cement_firstaid": "C-000333", "sds_review": "C-000334", "chem_gloves": "C-000335", "chem_vent": "C-000336", "chem_handle": "C-000337", "anchor_spec": "C-000338", "anchor_install": "C-000339", "anchor_tool": "C-000340", "anchor_accept": "C-000341", "adh_approval": "C-000342", "adh_orientation": "C-000343", "adh_dispense": "C-000344", "adh_cure": "C-000345", "ls_anchor": "C-000346", "ls_design": "C-000347", "pat_trained": "C-000348", "pat_test": "C-000349", "pat_load": "C-000350", "never_point": "C-000351", "no_bypass": "C-000352", "remove_defective": "C-000353", "pat_faceshield": "C-000354", "trigger": "C-000355", "pat_substrate": "C-000356", "pat_power": "C-000357", "pat_edge": "C-000358", "pat_shield": "C-000359", "line_of_fire": "C-000360", "nail_knots": "C-000361", "nail_nose": "C-000362", "hand_behind": "C-000363", "backing": "C-000364", "misfire_hold": "C-000365", "misfire_loads": "C-000366", "pat_atmos": "C-000367", "load_store": "C-000368", "load_compat": "C-000369", "fuel_damaged": "C-000370", "nail_inspect": "C-000371", "nail_mode": "C-000372", "mandrel_collect": "C-000373", "mandrel_nose": "C-000374", "rivet_fingers": "C-000375", "hand_agree": "C-000376", "set_tool": "C-000377", "drill_size": "C-000378", "overhead_support": "C-000379", "vib_select": "C-000380", "vib_grip": "C-000381", "vib_time": "C-000382", "vib_report": "C-000383", "batt_inspect": "C-000384", "batt_compat": "C-000385", "batt_protect": "C-000386", "batt_remove": "C-000387", "batt_emerg": "C-000388", "air_inspect": "C-000389", "air_pressure": "C-000390", "air_body": "C-000391", "air_clean_30": "C-000392", "induction_ignition": "C-000393", "gas_substrate": "C-000394", "silica_collector": "C-000395", "silica_c2": "C-000396", "silica_assess": "C-000397", "adh_sustained": "C-000398", "emf_mfr": "C-000399", "emf_device": "C-000400", "emf_separation": "C-000401", "emf_barriers": "C-000402", "ls_inspect": "C-000403", "ls_remove": "C-000404", "tool_instruction": "C-000405", "clamp_install": "C-000406", "clamp_inspect": "C-000407"};
const norm = s => (s || '').trim().replace(/\.\s*$/, '').toLowerCase();
const hzId = {}; E.SIL_DATA.hazards.forEach(h => { hzId[norm(h.t)] = h.id; });
const variantText = norm(E.SIL_HZ['H-DF-017'].tc);
const ctlId = {}; Object.keys(E.SIL_DATA.controls).forEach(k => { ctlId[norm(E.SIL_DATA.controls[k])] = k; });
let pass = 0, fail = 0; const fails = [];
function check(name, cond, info){ if(cond) pass++; else { fail++; fails.push('  ✗ ' + name + (info ? ' :: ' + info : '')); } }
function run(task){
  const hz = E.getSuggestions('hazard', task, {});
  const ids = hz.map(h => norm(h) === variantText ? 'H-DF-017*' : hzId[norm(h)]).filter(Boolean);
  const ctl = E.getSuggestions('control', hz.join('\n'), {task});
  const cids = ctl.map(c => ctlId[norm(c)]).filter(Boolean);
  return {hz, ids, ctl, cids, c: E.silConcepts(task)};
}
const CASES = [
[
"A-1",
"Drill holes in structural steel with a cordless drill",
{
"inc": [
"H-BT-010",
"H-BT-004",
"H-HW-029",
"H-BT-002",
"H-BT-021"
],
"incC": [
"C-000004"
],
"exc": [
"H-DF-017",
"H-BT-029",
"H-BT-030"
],
"excT": [
"Silica exposure when drilling concrete"
]
}
],
[
"A-2",
"Drill anchor holes in concrete with a rotary hammer",
{
"inc": [
"H-DF-017",
"H-BT-020",
"H-BT-019",
"H-BT-010",
"H-HW-029"
],
"incC": [
"C-000315",
"C-000317",
"C-000395"
],
"exc": [
"H-BT-029",
"H-BT-030"
],
"excCT": [
"Wear appropriate respirator (N95 minimum, P100 for high exposure)"
]
}
],
[
"A-3",
"Wet core drill through elevated slab",
{
"inc": [
"H-DF-012",
"H-DF-021",
"H-DF-022",
"H-BT-026",
"H-DF-017",
"H-BT-017"
],
"incC": [
"C-000328",
"C-000113"
],
"excT": [
"Struck-by from concrete pump hose",
"Fall into form or excavation"
]
}
],
[
"A-4",
"Core drill post-tensioned slab",
{
"inc": [
"H-DF-015",
"H-DF-012",
"H-DF-017"
],
"incC": [
"C-000306",
"C-000307"
],
"cls": {
"H-DF-015": "E"
}
}
],
[
"A-5",
"Mag drill holes in vertical column",
{
"inc": [
"H-DF-010",
"H-BT-018"
],
"incC": [
"C-000107",
"C-000291"
],
"exc": [
"H-DF-017"
]
}
],
[
"A-6",
"Mag drill holes overhead in beam flange",
{
"first": "H-DF-010",
"inc": [
"H-DF-010",
"H-BT-032",
"H-BT-018"
],
"excT": [
"Chemical exposure from process fluid release (phosphoric acid, sulfuric acid, ammonia, fluoride, slurry)",
"Struck-by from pressurized line failure"
]
}
],
[
"A-7",
"Drill press small steel brackets",
{
"inc": [
"H-BT-010",
"H-HW-031",
"H-BT-021"
],
"incC": [
"C-000218",
"C-000276",
"C-000284"
],
"excC": [
"C-000004"
],
"excCT": [
"Wear proper cut-resistant gloves appropriate for the task"
]
}
],
[
"A-8",
"Install wedge anchors in concrete",
{
"inc": [
"H-DF-024",
"H-DF-017",
"H-BT-010"
],
"exc": [
"H-DF-023"
]
}
],
[
"A-9",
"Install adhesive anchors overhead",
{
"inc": [
"H-DF-023",
"H-DF-024",
"H-BT-032"
],
"variant": true,
"incC": [
"C-000343",
"C-000345",
"C-000398"
],
"excT": [
"Confined space entry for interior coating",
"Slip hazard from spilled coating"
]
}
],
[
"A-10",
"Install fall protection anchor in structural concrete",
{
"inc": [
"H-DF-026",
"H-DF-024",
"H-BT-013",
"H-DF-017"
],
"incC": [
"C-000346",
"C-000347",
"C-000339"
]
}
],
[
"A-11",
"Inspect existing fall protection anchor",
{
"inc": [
"H-DF-026"
],
"incC": [
"C-000403",
"C-000404"
],
"excC": [
"C-000347",
"C-000339",
"C-000341"
],
"exc": [
"H-DF-024",
"H-BT-010",
"H-BT-004"
],
"excT": [
"Puncture hazard",
"Silica exposure when drilling concrete"
]
}
],
[
"A-12",
"Drill wall containing electrical conduits",
{
"first": "H-DF-013",
"incC": [
"C-000301",
"C-000302",
"C-000304"
],
"excT": [
"Arc flash and arc blast"
]
}
],
[
"A-13",
"Drill process enclosure",
{
"inc": [
"H-DF-014",
"H-DF-013"
],
"cls": {
"H-DF-014": "E",
"H-DF-013": "C"
}
}
],
[
"A-14",
"Fasten steel track with powder-actuated tool",
{
"inc": [
"H-DF-027",
"H-DF-028",
"H-DF-029"
],
"incC": [
"C-000348",
"C-000356",
"C-000354"
],
"excC": [
"C-000055"
],
"excT": [
"Silica from joint compound sanding"
],
"excCT": [
"Use face shield where flying debris or splash hazard exists"
]
}
],
[
"A-15",
"Powder-actuated tool misfire",
{
"first": "H-DF-030",
"incC": [
"C-000365"
]
}
],
[
"A-16",
"Install wood trim with battery brad nailer",
{
"inc": [
"H-DF-032",
"H-DF-028",
"H-DF-018"
],
"incC": [
"C-000361"
],
"exc": [
"H-DF-027",
"H-DF-030",
"H-BT-025",
"H-DF-040"
],
"excC": [
"C-000354"
]
}
],
[
"A-17",
"Frame walls with pneumatic framing nailer",
{
"inc": [
"H-DF-032",
"H-DF-028",
"H-BT-025",
"H-DF-040",
"H-BT-019"
],
"excC": [
"C-000354"
],
"exc": [
"H-BT-023"
],
"excT": [
"Eye injury from pressure spray"
]
}
],
[
"A-18",
"Gas-actuated fastening of track to concrete",
{
"inc": [
"H-DF-028",
"H-DF-031",
"H-DF-029"
],
"incC": [
"C-000368",
"C-000394"
],
"exc": [
"H-HW-024",
"H-HW-025",
"H-HW-001"
],
"excC": [
"C-000354"
]
}
],
[
"A-19",
"Install blind rivets in sheet metal",
{
"inc": [
"H-BT-028",
"H-BT-002",
"H-BT-001"
],
"incC": [
"C-000373",
"C-000375"
]
}
],
[
"A-20",
"Cut holes in wood with hole saw",
{
"inc": [
"H-BT-004",
"H-HW-031",
"H-DF-018"
],
"incC": [
"C-000227"
],
"exc": [
"H-DF-017"
]
}
],
[
"A-21",
"Drill painted steel with unknown coating",
{
"inc": [
"H-DF-019"
],
"cls": {
"H-DF-019": "C"
},
"incC": [
"C-000322",
"C-000173"
],
"exc": [
"H-HW-016"
]
}
],
[
"A-22",
"Drill and grind stainless steel",
{
"inc": [
"H-BT-010",
"H-HW-027",
"H-HW-001"
],
"incC": [
"C-000221"
],
"excC": [
"C-000112"
]
}
],
[
"A-23",
"Drill stainless lath during demolition",
{
"inc": [
"H-BT-002"
],
"incC": [
"C-000112"
]
}
],
[
"A-24",
"Review SDS for anchor adhesive",
{
"inc": [
"H-DF-023"
],
"incC": [
"C-000334"
],
"exc": [
"H-BT-020",
"H-BT-004"
]
}
],
[
"A-25",
"Drill holes with SDS Max rotary hammer",
{
"inc": [
"H-BT-020",
"H-BT-010"
],
"excT": [
"Chemical exposure through skin or inhalation",
"Skin and chemical burns"
]
}
],
[
"A-26",
"Pilot drill and tap steel threads",
{
"inc": [
"H-BT-010"
],
"excC": [
"C-000241"
],
"exc": [
"H-HW-001"
]
}
],
[
"A-27",
"Install self-drilling screws from boom lift",
{
"inc": [
"H-BT-017",
"H-BT-018"
],
"incC": [
"C-000040",
"C-000041"
],
"excT": [
"Crane swing radius exposure",
"Power line contact"
]
}
],
[
"A-28",
"Drill concrete and torque steel connections",
{
"inc": [
"H-BT-003",
"H-BT-011",
"H-DF-017",
"H-BT-010"
]
}
],
[
"A-29",
"Weld bracket, drill anchor holes and install mechanical anchors",
{
"inc": [
"H-HW-001",
"H-HW-011",
"H-DF-024",
"H-BT-010"
]
}
],
[
"A-30",
"Change drill bit and clear jammed nailer",
{
"inc": [
"H-HW-030",
"H-DF-032"
],
"incC": [
"C-000224"
]
}
],
[
"A-31",
"Drill unspecified material",
{
"inc": [
"H-BT-010"
],
"variant": true,
"cls": {
"H-DF-017": "C"
},
"exc": [
"H-DF-018",
"H-DF-019"
],
"excT": [
"Respirable crystalline silica exposure"
]
}
],
[
"A-32",
"Powder coat steel",
{
"exc": [
"H-DF-027",
"H-DF-028",
"H-DF-029",
"H-DF-030",
"H-DF-031"
]
}
],
[
"A-33",
"Drill through wall into occupied room",
{
"inc": [
"H-DF-012"
],
"incC": [
"C-000298",
"C-000299"
],
"cls": {
"H-DF-013": "C"
}
}
],
[
"A-34",
"Load adhesive anchor before cure",
{
"first": "H-DF-024",
"incC": [
"C-000345"
]
}
],
[
"A-35",
"Damaged lithium-ion drill battery",
{
"inc": [
"H-DF-039"
],
"cls": {
"H-DF-039": "E"
},
"incC": [
"C-000387",
"C-000388"
]
}
],
[
"A-36",
"Pneumatic drill inside confined space",
{
"inc": [
"H-BT-025",
"H-DF-040",
"H-BT-010"
],
"exc": [
"H-BT-023"
],
"incT": [
"Oxygen deficiency or enrichment"
]
}
],
[
"A-37",
"Drill elevated slab leaving hole",
{
"inc": [
"H-DF-012",
"H-BT-017"
],
"incC": [
"C-000113"
]
}
],
[
"A-38",
"Drill and fasten excavation support",
{
"inc": [
"H-BT-010"
],
"incT": [
"Cave-in / trench collapse"
]
}
],
[
"A-39",
"Drill prestressed beam",
{
"inc": [
"H-BT-013"
],
"cls": {
"H-BT-013": "E",
"H-DF-015": "C"
},
"incC": [
"C-000311",
"C-000312"
]
}
],
[
"A-40",
"Powder-actuated fastening of steel to concrete near flammable vapors",
{
"first": "H-DF-031",
"incC": [
"C-000367",
"C-000133",
"C-000134"
],
"exc": [
"H-HW-001"
]
}
],
[
"B-1",
"Operate powder-actuated fastening tool",
{
"incC": [
"C-000354",
"C-000054"
],
"excC": [
"C-000055"
]
}
],
[
"B-2",
"Operate battery-powered brad nailer",
{
"incC": [
"C-000054"
],
"excC": [
"C-000354"
]
}
],
[
"B-3",
"Operate pneumatic framing nailer",
{
"incC": [
"C-000054"
],
"excC": [
"C-000354"
]
}
],
[
"B-4",
"Induction heating with combustibles nearby",
{
"cls": {
"H-HW-001": "E"
},
"incC": [
"C-000114",
"C-000115",
"C-000116",
"C-000393"
],
"inc": [
"H-HW-008"
]
}
],
[
"B-5",
"Resistance heating PWHT with insulation and combustibles nearby",
{
"cls": {
"H-HW-001": "E"
},
"incC": [
"C-000114",
"C-000115",
"C-000116"
],
"inc": [
"H-HW-008",
"H-BT-026"
],
"exc": [
"H-HW-011",
"H-HW-012",
"H-HW-009"
]
}
],
[
"B-6",
"Induction heating, area cleared — no ignition hazard",
{
"inc": [
"H-HW-008",
"H-BT-026",
"H-DF-041"
],
"incC": [
"C-000393"
],
"exc": [
"H-HW-001",
"H-HW-003"
],
"excC": [
"C-000114",
"C-000115",
"C-000116"
]
}
],
[
"B-7",
"Induction heating pipe",
{
"cls": {
"H-HW-001": "C"
},
"inc": [
"H-DF-041"
],
"incC": [
"C-000393"
]
}
],
[
"B-8",
"Induction preheating structural steel",
{
"inc": [
"H-HW-008"
],
"cls": {
"H-HW-001": "C"
},
"exc": [
"H-HW-024",
"H-HW-025",
"H-HW-006"
]
}
],
[
"C-1",
"Conduct fire drill for the crew",
{
"exc": [
"H-BT-010",
"H-BT-004",
"H-HW-029"
],
"excT": [
"Puncture hazard"
]
}
],
[
"C-2",
"Run flux core welds on column splice",
{
"inc": [
"H-HW-011"
],
"exc": [
"H-DF-011",
"H-DF-012",
"H-DF-021"
]
}
],
[
"C-3",
"Directional bore under road for conduit",
{
"exc": [
"H-BT-010",
"H-BT-004"
]
}
],
[
"C-4",
"Drill blast holes with drill rig",
{
"exc": [
"H-BT-010",
"H-BT-004"
],
"incT": [
"Blast flyrock exposure"
],
"excT": [
"Suspended load / dropped load",
"Struck-by from swinging load"
]
}
],
[
"C-5",
"Hot tap process line",
{
"incC": [
"C-000241"
]
}
],
[
"C-6",
"Shoot pins into deck with Hilti gun",
{
"inc": [
"H-DF-027",
"H-DF-028",
"H-DF-029"
],
"incC": [
"C-000354"
]
}
],
[
"C-7",
"Deck gun",
{
"exc": [
"H-DF-027",
"H-DF-028",
"H-DF-029",
"H-DF-030",
"H-DF-031"
]
}
],
[
"C-8",
"Drill holes in beam flange from boom lift",
{
"inc": [
"H-BT-010",
"H-BT-017"
],
"excT": [
"Chemical exposure from process fluid release (phosphoric acid, sulfuric acid, ammonia, fluoride, slurry)",
"Struck-by from pressurized line failure",
"Crane swing radius exposure",
"Power line contact"
]
}
],
[
"C-9",
"Drill concrete with hammer drill",
{
"inc": [
"H-DF-017",
"H-BT-020"
],
"exc": [
"H-BT-029",
"H-BT-030"
]
}
],
[
"C-10",
"Core drill PT slab",
{
"cls": {
"H-DF-015": "E"
}
}
],
[
"C-11",
"PT session after shift",
{
"exc": [
"H-DF-015"
]
}
],
[
"C-12",
"Hot rivet structural connection",
{
"cls": {
"H-HW-001": "E"
},
"inc": [
"H-HW-008",
"H-BT-029",
"H-BT-030"
]
}
],
[
"C-13",
"Install structural rivets with lockbolt tool",
{
"exc": [
"H-HW-001"
],
"inc": [
"H-BT-001"
]
}
],
[
"C-14",
"Drill press steel brackets wearing gloves",
{
"incC": [
"C-000276"
],
"excC": [
"C-000004"
],
"excCT": [
"Wear proper cut-resistant gloves appropriate for the task"
]
}
],
[
"C-15",
"Fasten metal track with screw gun",
{
"inc": [
"H-BT-010"
],
"excT": [
"Silica from joint compound sanding"
]
}
],
[
"C-16",
"Clean drilled holes with compressed air",
{
"inc": [
"H-DF-040"
],
"incC": [
"C-000391",
"C-000392"
]
}
],
[
"C-17",
"Wet core through slab above occupied office",
{
"inc": [
"H-DF-012",
"H-DF-021"
],
"incC": [
"C-000328"
]
}
],
[
"C-18",
"Charge cordless drill batteries",
{
"inc": [
"H-DF-039"
],
"incC": [
"C-000384"
]
}
],
[
"C-19",
"Annular cutter on mag base drilling plate",
{
"inc": [
"H-DF-010"
]
}
],
[
"C-20",
"Inspect anchors installed yesterday before loading",
{
"incC": [
"C-000341"
],
"exc": [
"H-BT-010",
"H-BT-004"
]
}
],
[
"D-1",
"Drill-press steel brackets during demolition, then stack the sharp steel",
{
"incC": [
"C-000276",
"C-000218",
"C-000112"
],
"excC": [
"C-000004"
],
"excCT": [
"Wear proper cut-resistant gloves appropriate for the task"
]
}
],
[
"D-2",
"Drill steel angle with a cordless drill",
{
"inc": [
"H-BT-010",
"H-BT-004"
],
"incC": [
"C-000004"
],
"excC": [
"C-000276"
]
}
],
[
"D-3",
"Install Ramset adhesive anchors",
{
"inc": [
"H-DF-024",
"H-DF-023"
],
"exc": [
"H-DF-027",
"H-DF-028",
"H-DF-029",
"H-DF-030",
"H-DF-031"
],
"excC": [
"C-000354"
]
}
],
[
"D-4",
"Clear jam in gas-actuated nailer",
{
"inc": [
"H-DF-032"
],
"incC": [
"C-000289",
"C-000224"
]
}
],
[
"D-5",
"Induction heating after clearing combustibles from the area",
{
"cls": {
"H-HW-001": "C"
},
"incC": [
"C-000114",
"C-000115",
"C-000116",
"C-000393"
],
"inc": [
"H-HW-008",
"H-DF-041"
]
}
],
[
"D-6",
"Induction heating near worker with a pacemaker",
{
"inc": [
"H-DF-041"
],
"incC": [
"C-000400",
"C-000401"
]
}
],
[
"D-7",
"Install adhesive anchors overhead to support a sustained load",
{
"inc": [
"H-DF-024"
],
"incC": [
"C-000398"
]
}
],
[
"D-8",
"Inspect and use existing fall protection anchor",
{
"inc": [
"H-DF-026"
],
"incC": [
"C-000346",
"C-000403",
"C-000404"
],
"excC": [
"C-000347",
"C-000339"
],
"exc": [
"H-BT-010",
"H-BT-004"
]
}
],
[
"D-9",
"Blow off work surface with compressed air; run pneumatic impact wrench",
{
"incC": [
"C-000392",
"C-000391",
"C-000390"
]
}
],
[
"D-10",
"Drill beam flange and torque process pipe flange",
{
"inc": [
"H-BT-010",
"H-BT-036"
],
"incT": [
"Struck-by from pressurized line failure"
]
}
],
[
"D-11",
"Drill unknown composite panel",
{
"inc": [
"H-DF-018"
],
"variant": true,
"cls": {
"H-DF-017": "C"
},
"excT": [
"Respirable crystalline silica exposure"
]
}
],
[
"D-12",
"Hot rivet bridge connection",
{
"cls": {
"H-HW-001": "E"
},
"inc": [
"H-HW-008",
"H-BT-029"
]
}
],
[
"D-12b",
"Install lockbolts on bridge connection",
{
"exc": [
"H-HW-001"
]
}
],
[
"D-13",
"Drill press — workpiece starts spinning",
{
"inc": [
"H-HW-031"
],
"cls": {
"H-HW-031": "E"
},
"incC": [
"C-000287",
"C-000218"
]
}
],
[
"D-14",
"Through-drill wall into occupied office with conduit in the wall",
{
"inc": [
"H-DF-012",
"H-DF-013"
],
"incC": [
"C-000298",
"C-000299",
"C-000301",
"C-000302",
"C-000304"
]
}
],
[
"ED-1a",
"Install wedge anchor for fall protection anchorage",
{
"inc": [
"H-BT-001",
"H-DF-026"
]
}
],
[
"ED-1b",
"Install beam clamp fall protection anchor on steel beam",
{
"inc": [
"H-BT-001",
"H-DF-026"
]
}
],
[
"ED-1c",
"Inspect existing fall protection anchor",
{
"exc": [
"H-BT-001"
]
}
],
[
"ED-3a",
"Hot tap process line",
{
"cls": {
"H-HW-001": "E"
},
"inc": [
"H-HW-035"
],
"incT": [
"Struck-by from pressurized line failure",
"Stored pressure release injury"
]
}
],
[
"ED-3b",
"Hot tap with mechanical saddle, no welding",
{
"cls": {
"H-HW-001": "C"
},
"exc": [
"H-HW-009"
],
"incT": [
"Struck-by from pressurized line failure",
"Stored pressure release injury"
]
}
],
[
"ED-3c",
"Cold tap process line with mechanical tapping machine",
{
"exc": [
"H-HW-001"
],
"incT": [
"Struck-by from pressurized line failure",
"Stored pressure release injury"
]
}
],
[
"ED-3d",
"Weld hot tap fitting on live gas line",
{
"cls": {
"H-HW-001": "E"
},
"inc": [
"H-HW-004",
"H-HW-035"
]
}
],
[
"ED-1-1",
"Install clamp anchors",
{
"inc": [
"H-BT-001",
"H-DF-026"
],
"incC": [
"C-000346",
"C-000406",
"C-000407"
],
"exc": [
"H-DF-024",
"H-DF-023",
"H-DF-017",
"H-BT-010",
"H-BT-004",
"H-BT-026",
"H-BT-021",
"H-HW-029",
"H-BT-019",
"H-BT-018",
"H-BT-013"
],
"excC": [
"C-000339",
"C-000345",
"C-000224",
"C-000002"
],
"excT": [
"Fall exposure at leading edge and open sides",
"Suspended load / dropped load",
"Puncture hazard",
"Overhead work exposure"
]
}
],
[
"ED-1-2",
"Install beam clamps",
{
"inc": [
"H-BT-001",
"H-DF-026"
],
"incC": [
"C-000346",
"C-000406",
"C-000407"
],
"exc": [
"H-DF-024",
"H-DF-023",
"H-DF-017",
"H-BT-010",
"H-BT-004",
"H-BT-026",
"H-BT-021",
"H-HW-029",
"H-BT-019",
"H-BT-018",
"H-BT-013"
],
"excC": [
"C-000339",
"C-000345",
"C-000224",
"C-000002"
],
"excT": [
"Fall exposure at leading edge and open sides",
"Suspended load / dropped load",
"Puncture hazard",
"Overhead work exposure"
]
}
],
[
"ED-1-3",
"Install clamp-on anchor",
{
"inc": [
"H-BT-001",
"H-DF-026"
],
"incC": [
"C-000346",
"C-000406",
"C-000407"
],
"exc": [
"H-DF-024",
"H-DF-023",
"H-DF-017",
"H-BT-010",
"H-BT-004",
"H-BT-026",
"H-BT-021",
"H-HW-029",
"H-BT-019",
"H-BT-018",
"H-BT-013"
],
"excC": [
"C-000339",
"C-000345",
"C-000224",
"C-000002"
],
"excT": [
"Fall exposure at leading edge and open sides",
"Suspended load / dropped load",
"Puncture hazard",
"Overhead work exposure"
]
}
],
[
"ED-1-4",
"Install beam anchor",
{
"inc": [
"H-BT-001",
"H-DF-026"
],
"incC": [
"C-000346",
"C-000406",
"C-000407"
],
"exc": [
"H-DF-024",
"H-DF-023",
"H-DF-017",
"H-BT-010",
"H-BT-004",
"H-BT-026",
"H-BT-021",
"H-HW-029",
"H-BT-019",
"H-BT-018",
"H-BT-013"
],
"excC": [
"C-000339",
"C-000345",
"C-000224",
"C-000002"
],
"excT": [
"Fall exposure at leading edge and open sides",
"Suspended load / dropped load",
"Puncture hazard",
"Overhead work exposure"
]
}
],
[
"ED-1-5",
"Install beam trolley",
{
"inc": [
"H-BT-001",
"H-DF-026"
],
"incC": [
"C-000346",
"C-000406",
"C-000407"
],
"exc": [
"H-DF-024",
"H-DF-023",
"H-DF-017",
"H-BT-010",
"H-BT-004",
"H-BT-026",
"H-BT-021",
"H-HW-029",
"H-BT-019",
"H-BT-018",
"H-BT-013"
],
"excC": [
"C-000339",
"C-000345",
"C-000224",
"C-000002"
],
"excT": [
"Fall exposure at leading edge and open sides",
"Suspended load / dropped load",
"Puncture hazard",
"Overhead work exposure"
]
}
],
[
"ED-1-6",
"Install sliding beam anchor",
{
"inc": [
"H-BT-001",
"H-DF-026"
],
"incC": [
"C-000346",
"C-000406",
"C-000407"
],
"exc": [
"H-DF-024",
"H-DF-023",
"H-DF-017",
"H-BT-010",
"H-BT-004",
"H-BT-026",
"H-BT-021",
"H-HW-029",
"H-BT-019",
"H-BT-018",
"H-BT-013"
],
"excC": [
"C-000339",
"C-000345",
"C-000224",
"C-000002"
],
"excT": [
"Fall exposure at leading edge and open sides",
"Suspended load / dropped load",
"Puncture hazard",
"Overhead work exposure"
]
}
],
[
"ED-1-7",
"Install beam clamp at leading edge",
{
"inc": [
"H-BT-001",
"H-DF-026",
"H-BT-018"
],
"incC": [
"C-000406",
"C-000039"
],
"incT": [
"Fall exposure at leading edge and open sides"
],
"exc": [
"H-DF-024",
"H-BT-010"
]
}
],
[
"ED-1-8",
"Install beam clamp and drill holes for wedge anchors in concrete",
{
"inc": [
"H-BT-001",
"H-DF-026",
"H-DF-024",
"H-BT-010",
"H-DF-017"
],
"incC": [
"C-000406",
"C-000339"
]
}
],
[
"ED-1-9",
"Hang chain hoist from beam clamp and rig the load",
{
"inc": [
"H-DF-026",
"H-BT-001"
],
"incC": [
"C-000406"
],
"incT": [
"Suspended load / dropped load",
"Struck-by from swinging load"
],
"exc": [
"H-BT-010",
"H-DF-024"
]
}
],
[
"ED-1-10",
"Inspect existing beam clamp before use",
{
"inc": [
"H-DF-026"
],
"incC": [
"C-000403",
"C-000404",
"C-000407"
],
"excC": [
"C-000406",
"C-000339"
],
"exc": [
"H-BT-001",
"H-DF-024",
"H-BT-010"
]
}
],
[
"ED-6a",
"Drill blast holes with drill rig",
{
"incT": [
"Blast flyrock exposure",
"Rock face instability and rockfall"
]
}
]
];
CASES.forEach(([id, task, sp]) => {
  const r = run(task);
  const has = h => r.ids.includes(h) || (h === 'H-DF-017' && r.ids.includes('H-DF-017*'));
  (sp.inc || []).forEach(h => check(id + ' includes ' + h, has(h), task));
  (sp.exc || []).forEach(h => check(id + ' excludes ' + h, !has(h), task));
  (sp.incC || []).forEach(x => check(id + ' control ' + x, r.cids.includes(x), task));
  (sp.excC || []).forEach(x => check(id + ' no control ' + x, !r.cids.includes(x), task));
  (sp.incT || []).forEach(s => check(id + ' keeps "' + s + '"', r.hz.some(h => norm(h) === norm(s)), task));
  (sp.excT || []).forEach(s => check(id + ' drops "' + s + '"', !r.hz.some(h => norm(h) === norm(s)), task));
  (sp.excCT || []).forEach(s => check(id + ' drops control "' + s + '"', !r.ctl.some(h => norm(h) === norm(s)), task));
  if(sp.first) check(id + ' first ' + sp.first, r.ids[0] === sp.first, r.ids.slice(0, 3).join(','));
  if(sp.variant) check(id + ' assessment form of H-DF-017', r.ids.includes('H-DF-017*') && !r.ids.includes('H-DF-017'), r.ids.join(','));
  Object.keys(sp.cls || {}).forEach(h => check(id + ' class ' + h + ' = ' + sp.cls[h], E.SIL_RULES[h](r.c) === sp.cls[h], String(E.SIL_RULES[h](r.c))));
  check(id + ' no duplicate suggestions', new Set(r.hz.map(norm)).size === r.hz.length && new Set(r.ctl.map(norm)).size === r.ctl.length);
});
/* ---- acceptance checks (AD-010 §3, §4, §7) ---- */
const I = k => IDS[k];
// §3.2 assessment form carries only the identification and assessment controls
{ const ctl = E.getSuggestions('control', E.SIL_HZ['H-DF-017'].tc, {task: 'Drill unspecified material'}).map(c => ctlId[norm(c)]);
  check('assessment form controls = identify + assess', ctl.length === 2 && ctl.includes(I('silica_identify')) && ctl.includes(I('silica_assess')), ctl.join(',')); }
// §3.3 a contradictory ignition cue governs over a "no ignition hazard" statement
{ const c = E.silConcepts('Induction heating near wood framing — no ignition hazard');
  check('contradictory ignition cue → hot work', c.hotWork === true && E.SIL_RULES['H-HW-001'](c) === 'E'); }
{ const c = E.silConcepts('Resistance heating, combustibles removed');
  check('combustible clearance keeps hot work conditional', c.hotWorkPossible === true && c.hotWork === false); }
// §3.3 C-000393 for every induction / resistance heating task, via H-HW-008 even when hot work is not established
['Induction heating, no ignition hazard', 'Resistance heating PWHT', 'Induction preheat of flange'].forEach(t => {
  const r = run(t); check('C-000393 presented: ' + t, r.cids.includes(I('induction_ignition')), r.cids.join(',')); });
// §3.1 numeric filter efficiency only with a prescribed dust-collection method (dry handheld drilling), not with wet coring
{ const wet = run('Wet core drill concrete slab'); check('C-000395 not for wet core drilling', !wet.cids.includes(I('silica_collector'))); }
// §3.4 / §3.5 / §3.8 approved wording in the app
check('C-000218 drill press regardless of size', /whatever its size/.test(E.SIL_DATA.controls['C-000218']));
check('C-000106 side handle where provided or required', /wherever the drill has one or the manufacturer requires it/.test(E.SIL_DATA.controls['C-000106']));
check('C-000164 keeps APF, program and IDLH restriction', /assigned protection factor/.test(E.SIL_DATA.controls['C-000164']) && /oxygen-deficient or IDLH/.test(E.SIL_DATA.controls['C-000164']));
check('C-000395 states 99% and separates HEPA hole cleaning', /99% or greater/.test(E.SIL_DATA.controls[I('silica_collector')]) && /separate from the HEPA-filtered vacuum/.test(E.SIL_DATA.controls[I('silica_collector')]));
// §3.7 standalone brand names establish nothing
['Ramset', 'Hilti drill', 'Install Ramset adhesive anchors', 'Deck gun'].forEach(t => check('no PAT from brand alone: ' + t, !E.silConcepts(t).patTool));
['Ramset gun on steel track', 'Hilti gun to shoot pins'].forEach(t => check('PAT from field term: ' + t, E.silConcepts(t).patTool));
// §4 no user-facing regulatory citations
{ const rx = /\b19(26|10)\.\d|\bCFR\b|\bOSHA\b|\bMSHA\b|\bTable 1\b/;
  const bad = E.SIL_DATA.hazards.map(h => h.t).concat(Object.values(E.SIL_DATA.controls)).filter(s => rx.test(s));
  check('no regulatory citation in user-facing text', bad.length === 0, bad.slice(0, 2).join(' | ')); }
// §5 withheld RCSC controls remain withheld; registry counts implemented
['C-000081','C-000082','C-000083','C-000085','C-000086','C-000087'].forEach(x => check('withheld ' + x, !E.SIL_DATA.controls[x]));
check('97 active hazards implemented', E.SIL_DATA.hazards.length === 97, String(E.SIL_DATA.hazards.length));
check('401 controls implemented (407 − 6 withheld)', Object.keys(E.SIL_DATA.controls).length === 401, String(Object.keys(E.SIL_DATA.controls).length));
// semantic deduplication: the AD-009 near-duplicate flying-debris line is gone where H-HW-029 applies; jackhammer coverage kept
{ const r = run('Break out slab with jackhammer');
  check('jackhammer keeps flying-particle coverage', r.ids.includes('H-HW-029'));
  check('no "Flying debris from vibrating tool" beside H-HW-029', !r.hz.some(h => /flying debris from vibrating tool/i.test(h))); }
// JSAs saved before v1.4.1 keep their controls (prior canonical wording → same record)
Object.keys(E.SIL_DATA.prior).forEach(old => {
  const ctl = E.getSuggestions('control', old, {task: 'Drill steel'});
  check('prior wording still maps: ' + old.slice(0, 40), ctl.length > 0); });
// v1.4.0-p1 defect corrections F-1 … F-16 (Crosswalk §C)
const F = [
 ['F-1', 'Drill holes in wood studs', r => !r.hz.some(h => /silica exposure when drilling concrete/i.test(h)) && !r.ids.includes('H-DF-017')],
 ['F-2', 'Drill with rotary hammer', r => !r.ids.includes('H-BT-029') && !r.ids.includes('H-BT-030')],
 ['F-3', 'Mag drill holes in beam flange', r => !r.hz.some(h => /process fluid release|pressurized line failure/i.test(h))],
 ['F-4', 'Drill from boom lift', r => !r.hz.some(h => /crane swing|outriggers/i.test(h))],
 ['F-5', 'Drill holes with SDS Plus bit', r => !r.hz.some(h => /chemical exposure through skin/i.test(h))],
 ['F-6', 'Install adhesive anchors', r => r.ids.includes('H-DF-023') && !r.hz.some(h => /interior coating|spilled coating/i.test(h))],
 ['F-7', 'Inspect existing fall protection anchor', r => !r.ids.includes('H-BT-010') && !r.hz.some(h => /^puncture hazard$/i.test(h))],
 ['F-8', 'Install blind rivets in sheet metal', r => r.hz.length > 0 && r.ids.includes('H-BT-028')],
 ['F-8b', 'Install wood trim with battery brad nailer', r => r.hz.length > 0 && r.ids.includes('H-DF-032')],
 ['F-9', 'Frame walls with pneumatic framing nailer', r => !r.ids.includes('H-BT-023') && !r.hz.some(h => /pressure spray/i.test(h))],
 ['F-10', 'Resistance heating PWHT with combustibles nearby', r => !r.hz.some(h => /lightning|cold stress|reduced visibility/i.test(h))],
 ['F-11', 'Induction preheating structural steel', r => !r.ids.includes('H-HW-006')],
 ['F-12', 'Resistance heating PWHT on pipe weld', r => !r.ids.includes('H-HW-011') && !r.ids.includes('H-HW-012') && !r.ids.includes('H-HW-009')],
 ['F-13', 'Core drill concrete slab', r => !r.hz.some(h => /concrete pump hose|fall into form/i.test(h))],
 ['F-13b', 'Pour concrete footing', r => r.hz.some(h => /concrete pump hose/i.test(h))],
 ['F-14', 'Fasten steel track with powder-actuated tool', r => !r.hz.some(h => /joint compound/i.test(h))],
 ['F-15', 'Drill wall containing electrical conduits', r => r.ids[0] === 'H-DF-013' && !r.hz.some(h => /arc flash and arc blast/i.test(h))],
 ['F-15b', 'Troubleshoot energized panel', r => r.hz.some(h => /arc flash and arc blast/i.test(h))],
 ['F-16', 'Core drill post-tensioned slab', r => r.ids.includes('H-DF-015')],
];
F.forEach(([id, t, fn]) => { const r = run(t); check('defect ' + id + ' corrected: ' + t, fn(r), r.ids.slice(0, 6).join(',')); });
console.log('PASS ' + pass + ' FAIL ' + fail);
fails.forEach(f => console.log(f));
process.exitCode = fail ? 1 : 0;

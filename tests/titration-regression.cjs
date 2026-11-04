'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const {test}=require('node:test');

const html=fs.readFileSync('index.html','utf8');
const start=html.lastIndexOf('<script>');
const end=html.lastIndexOf('</script>');
assert(start>=0&&end>start,'Inline-Simulationsskript nicht gefunden');
const js=html.slice(start+'<script>'.length,end);
const sandbox={
  window:{location:{search:''},addEventListener(){}},
  URLSearchParams,Math,console,Map,Number,Date,Error
};
vm.createContext(sandbox);
new vm.Script(js,{filename:'TITRATIONSTOOL inline script'});
vm.runInContext(js,sandbox,{timeout:10000});

function evaluate(code){return vm.runInContext(code,sandbox,{timeout:10000});}
function params(id,overrides={}){
  const preset=evaluate('SUBSTANCE_PRESETS['+JSON.stringify(id)+']');
  return {
    strength:'weak',type:'weak_acid',role:'acid',poly:preset.poly,
    pk1:preset.pk1,pk2:preset.pk2,pk3:preset.pk3,
    c0:0.030,v0:10,cTit:0.100,cAsc:0,cNaVor:0,matrix:false,
    ...overrides
  };
}
function ph(v,p){return evaluate('calculatePH') (v,p);}
function near(actual,expected,tol,message){
  assert.ok(Number.isFinite(actual)&&Math.abs(actual-expected)<tol,message+': '+actual+' vs '+expected);
}

test('Citronensäure: drei Stufen und End-ÄP nach 3 Äquivalenten',()=>{
  const acid=evaluate("SUBSTANCE_PRESETS.citric");
  assert.equal(acid.poly,3);
  near(acid.pk1,3.13,1e-9,'pKs1');
  near(acid.pk2,4.76,1e-9,'pKs2');
  near(acid.pk3,6.40,1e-9,'pKs3');
  const p=params('citric');
  const v=3*p.c0*p.v0/p.cTit;
  near(v,9,1e-8,'Äquivalenzvolumen');
  near(ph(0,p),2.36,0.04,'Start-pH');
  assert(ph(v-0.1,p)<8.1,'pH vor dem End-ÄP');
  assert(ph(v+0.1,p)>10.0,'pH nach dem End-ÄP');
  assert(ph(v,p)>8.5&&ph(v,p)<9.8,'pH am End-ÄP ist konzentrationsabhängig');
});

test('CO2-freie Matrix: natriumvorneutralisiert, Ascorbinsäure beteiligt',()=>{
  const p=params('brausetablette',{cAsc:0.0100,cNaVor:0.04105,matrix:true});
  const v=(3*p.c0+p.cAsc-p.cNaVor)*p.v0/p.cTit;
  near(v,5.895,1e-9,'verbleibende Acidität als mL');
  near(ph(0,p),4.25,0.08,'Start-pH');
  assert(ph(v-0.1,p)<8.2,'pH vor Rest-ÄP');
  assert(ph(v+0.1,p)>10.1,'pH nach Rest-ÄP');
});

test('Bestandsstoffe bleiben im pH-Rechenkern funktionsfähig',()=>{
  const acetic=params('acetic',{poly:1,pk1:4.76,pk2:null,pk3:null,c0:0.08,v0:20});
  assert(ph(0,acetic)>2.5&&ph(0,acetic)<3.6);
  assert(ph(16,acetic)>8&&ph(16,acetic)<10);
  const oxalic=params('oxalic',{poly:2,pk1:1.25,pk2:4.28,pk3:null,c0:0.05,v0:20});
  assert(Number.isFinite(ph(0,oxalic)));
  assert(Number.isFinite(ph(20,oxalic)));
});

test('Hub-Varianten: Alias-Parameter und reiner Citratmodus',()=>{
  const variant=evaluate("generateCitricBridgeVariant(taskById('TITR_A12'))");
  near(variant.quantContext.veq,9,1e-9,'Standard Citronensäure');
  const matrix=evaluate("generateCitricBridgeVariant(taskById('TITR_A13'))");
  near(matrix.quantContext.veq,5.895,1e-9,'Standard Matrix');
  evaluate("bridgeMode=true; bridgeInput={c_Cit:0.025,c_Asc:0.015,c_Na_vor:0.050,aliquot_ml:10,stock_volume_ml:100,titrant_concentration_mol_l:0.100}");
  const custom=evaluate("generateCitricBridgeVariant(taskById('TITR_A13'))");
  near(custom.quantContext.veq,4,1e-9,'übergebene Matrix-Parameter');
  evaluate('bridgeMode=false; bridgeInput=null;');
});

test('Hub-Rückgabe hält Run-ID, Sample-ID, Messpunkte und Modellparameter',()=>{
  evaluate("bridgeMode=true;bridgeTaskCorrect=true;bridgeRun={run_id:'RUN_TEST',case_id:'CASE_TEST',sample_id:'SAMPLE_TEST'};bridgeInput={};activeTaskId='TITR_A13';activeTaskRuntime=generateCitricBridgeVariant(taskById('TITR_A13'));titrationData=[{x:0,y:4.25},{x:5.9,y:9.34}];");
  sandbox.document={getElementById(id){return id==='taskResult_veq'?{value:'5,895'}:null;}};
  let result;
  sandbox.window.AnalytikBridge={
    completeRun(runId,payload){assert.equal(runId,'RUN_TEST');result=payload;return {run_id:runId};},
    returnToHub(){}
  };
  evaluate('sendBridgeResult()');
  assert.equal(result?.run_id,'RUN_TEST');
  assert.equal(result?.sample_id,'SAMPLE_TEST');
  assert.equal(result?.analysis_type,'ACID_BASE_TITRATION_QUANT');
  assert.equal(result?.measurement?.preset,'brausetablette');
  assert.equal(result?.measurement?.raw_points?.length,2);
  near(result?.measurement?.model_parameters?.c_Na_vor,0.04105,1e-10,'Natriumbilanz');
  near(result?.measurement?.equivalence_volume_ml,5.895,1e-8,'Schüler-Messwert');
});

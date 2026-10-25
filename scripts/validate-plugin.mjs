import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const read = p => fs.readFileSync(p, 'utf8');
const m = JSON.parse(read('.cursor-plugin/plugin.json'));
assert.equal(m.name, 'adspirer-retail-ads');
assert.equal(m.displayName, 'Adspirer Retail Ads');
assert.equal(m.repository, 'https://github.com/Adspirer/adspirer-retail-ads-cursor-plugin');
assert.match(m.version, /^\d+\.\d+\.\d+$/);
assert.equal(m.homepage, 'https://www.adspirer.com/retail-media');
assert.ok(read('README.md').split('\n\n').includes(m.description), 'README introduction must match manifest');
assert.ok(m.description.startsWith('Retail ads agent for Amazon and Walmart.'));
for (const term of ['retail ads', 'Amazon Ads', 'Amazon PPC', 'Walmart Connect', 'Walmart Ads']) assert.ok(m.keywords.includes(term), term);
assert.notEqual(m.minClientVersions?.cursor, 'never', 'Do not hide this Cursor plugin');
for (const p of [m.logo, m.skills, m.agents, m.rules, m.mcpServers]) {
  assert.ok(typeof p === 'string' && !path.isAbsolute(p) && !p.split('/').includes('..'), 'Unsafe package path');
}
assert.deepEqual(JSON.parse(read('mcp.json')), {mcpServers:{'adspirer-retail-ads':{type:'http',url:'https://mcp.adspirer.com/retail-ads'}}});
for (const p of [m.logo, m.skills, m.agents, m.rules, 'README.md','LICENSE','SECURITY.md','REVIEW.md','SKILL-MAPPING.md','TOOL-COVERAGE.md']) assert.ok(fs.existsSync(p),p);
const skills = fs.readdirSync('skills').filter(n=>fs.existsSync(path.join('skills',n,'SKILL.md')));
assert.equal(skills.length,11);
for(const n of skills) {
  assert.match(n,/^adspirer-retail-ads-[a-z-]+$/);
  assert.ok(n.length<=64);
  const c=read(path.join('skills',n,'SKILL.md'));
  assert.ok(c.includes('name: '+n+'\n'));
  for(const r of c.matchAll(/references\/[a-z-]+\.md/g)) assert.ok(fs.existsSync(path.join('skills',n,r[0])), r[0]);
}
const files=skills.map(n=>path.join('skills',n,'SKILL.md'));
for(const dir of ['agents','rules']) for(const n of fs.readdirSync(dir)) files.push(path.join(dir,n));
const index=JSON.parse(read('docs/operation-index.json'));
assert.deepEqual(Object.fromEntries(Object.entries(index.routers).map(([k,v])=>[k,v.length])), {amazon_ads_read:55,amazon_ads_write:61,walmart_ads_read:31,walmart_ads_write:25});
const operations=new Set(Object.values(index.routers).flat());
assert.equal(operations.size,172);
for(const p of files) {
  const c=read(p),body=c.replace(/^---\n[\s\S]*?\n---\n/,'');
  assert.ok(!/https:\/\/mcp\.adspirer\.com\/(?:mcp|social-ads|search-ads)\b/.test(c),p);
  for(const x of body.matchAll(/\badspirer-retail-ads-[a-z-]+\b/g)) assert.ok(skills.includes(x[0]),p+': '+x[0]);
  for(const x of body.matchAll(/\b(?:list|create|update|delete|get|add|set|analyze|optimize|find|extract|track|compare|check|search|upload|attach|complete|submit|cancel|pause|resume|preview)_(?:amazon|walmart)_[a-z_]+\b/g)) assert.ok(operations.has(x[0]),p+': undiscovered '+x[0]);
}
for(const file of ['README.md','SKILL-MAPPING.md','TOOL-COVERAGE.md','REVIEW.md']) {
  for(const match of read(file).matchAll(/\]\(([^)]+)\)/g)) {
    const target=match[1].split('#')[0];
    if(target && !/^https?:/.test(target)) assert.ok(fs.existsSync(path.resolve(path.dirname(file),target)),file+': broken link '+target);
  }
}
const logo=fs.readFileSync(m.logo);
assert.equal(logo.subarray(1,4).toString(),'PNG');
assert.equal(logo.readUInt32BE(16),logo.readUInt32BE(20),'Logo must be square');
assert.ok(logo.readUInt32BE(16)>=256);
assert.match(read('rules/use-adspirer-retail-ads.mdc'), /alwaysApply: false/);
assert.ok(!fs.existsSync('.github/workflows/sync-from-ads-mcp.yml'));
console.log('PASS: manifest, endpoint, 11 retail-ads skills, references, 172 discovered operations, scope and assets');

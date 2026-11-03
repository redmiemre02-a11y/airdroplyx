import fs from 'fs';

const airdropsText = fs.readFileSync('src/data/airdrops.ts', 'utf8');

const candidateRelatedIds = [
  'babylon-chain',
  'berachain',
  'story-protocol',
  'monad',
  'symbiotic',
  'karak',
  'fuel-network',
  'eclipse',
  'initia',
  'grass'
];

for (const id of candidateRelatedIds) {
  const exists = airdropsText.includes(`"id": "${id}"`);
  console.log(id.padEnd(20), exists ? 'EXISTS ✅' : 'NOT FOUND ❌');
  if (!exists) {
    // Find closest match
    const matches = [...airdropsText.matchAll(new RegExp(`"id":\\s*"([^"]*${id}[^"]*)"`, 'g'))].map(m => m[1]);
    console.log('   Closest:', matches);
  }
}

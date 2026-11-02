import fs from 'fs';
import path from 'path';

const content = fs.readFileSync(path.resolve('src/data/airdrops.ts'), 'utf8');
const idMatches = [...content.matchAll(/"id":\s*"([^"]+)"/g)].map(m => m[1]);
const ids = new Set(idMatches);

const candidates = [
  'kura-protocol',
  'spire-based-rollup',
  'dill-da-network',
  'fairblock-confidential',
  'fhenix-coprocessor',
  'astria-shared-network',
  'citrea-bitcoin-testnet',
  'mind-network-restaking'
];

for (const c of candidates) {
  console.log(c, ids.has(c) ? 'EXISTS' : 'AVAILABLE');
}

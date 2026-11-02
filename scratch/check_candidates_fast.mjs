import fs from 'fs';
import path from 'path';

const content = fs.readFileSync(path.resolve('src/data/airdrops.ts'), 'utf8');
const idMatches = [...content.matchAll(/"id":\s*"([^"]+)"/g)].map(m => m[1]);
const ids = new Set(idMatches);
console.log('Total airdrop IDs found in text:', ids.size);

const candidates = [
  'althea-l1',
  'tea-protocol',
  'kura-protocol',
  'spire-based-rollup',
  'astria-shared-sequencer',
  'mind-network-fhe',
  'citrea-bitcoin-zkevm',
  'botanix-spiderchain',
  'corn-super-yield',
  'hyperbolic-cloud',
  'sentient-agi-network',
  'almanak-agentic-defi',
  'vanar-gaming-l1',
  'dill-modular-da',
  'kakarot-zkevm-starknet',
  'side-mesh-bridge',
  'fairblock-confidential',
  'fhenix-co-processor'
];

for (const c of candidates) {
  console.log(c.padEnd(25), ids.has(c) ? 'EXISTS' : 'AVAILABLE - OK');
}

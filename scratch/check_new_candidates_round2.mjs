import { airdrops } from '../src/data/airdrops';

const ids = new Set(airdrops.map(a => a.id));

const candidates = [
  'althea-l1',
  'tea-protocol',
  'kura-protocol',
  'spire-based-rollup',
  'ambient-finance',
  'astria-shared-sequencer',
  'mind-network-fhe',
  'citrea-bitcoin-zkevm',
  'botanix-spiderchain',
  'corn-super-yield',
  'hyperbolic-cloud',
  'sentient-agi-network',
  'almanak-agentic-defi',
  'vanar-gaming-l1'
];

for (const c of candidates) {
  console.log(c.padEnd(25), ids.has(c) ? 'EXISTS' : 'AVAILABLE - OK');
}

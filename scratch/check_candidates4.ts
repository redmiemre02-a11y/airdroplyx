import { airdrops } from '../src/data/airdrops';

const ids = new Set(airdrops.map(a => a.id));
console.log('Total airdrops currently:', airdrops.length);
console.log('Latest 5 ids:', airdrops.slice(-5).map(a => a.id));

const candidates = [
  'reya-network', 'plume-network', 'initia-network', 'satlayer', 'hemi-network',
  'superposition', 'zerolend', 'ambient-finance', 'hyperlane', 'particle-network',
  'derive-protocol', 'mezo-network', 'swell-network', 'kinto-network', 'abstract-chain',
  'zeno-exchange', 'gondola-finance', 'sonic-svm', 'penumbra-zone', 'avantis-finance'
];

for (const c of candidates) {
  console.log(c, ids.has(c) ? 'EXISTS' : 'AVAILABLE');
}

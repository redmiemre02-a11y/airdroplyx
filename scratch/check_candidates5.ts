import { airdrops } from '../src/data/airdrops';

const ids = new Set(airdrops.map(a => a.id));

const candidates = [
  'satlayer',
  'superposition',
  'mezo-network',
  'swell-network',
  'abstract-chain',
  'avantis-finance',
  'althea-network',
  'tea-protocol',
  'zerobase',
  'hyperbolic-network',
  'hyperliquid-perps',
  'curvance',
  'valence-protocol',
  'openvm',
  'succinct-labs',
  'ritual-net',
  'ambient-finance',
  'movement-network',
  'berachain-bArtio'
];

for (const c of candidates) {
  if (!ids.has(c)) {
    console.log('AVAILABLE:', c);
  }
}

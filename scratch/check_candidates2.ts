import { airdrops } from '../src/data/airdrops';

const newCandidates = [
  'hyperbeat',
  'monadpad',
  'monadswap',
  'beraswap',
  'infrared-finance',
  'kodiak-finance',
  'thala-movement',
  'storyhunt',
  'hyperlend',
  'superstate',
  'solayer-season-2',
  'sanctum-season-2',
  'kamino-season-3',
  'drift-season-2',
  'tensor-season-2',
  'etherfi-season-4',
  'renzoprotocol-season-3',
  'kelp-gain-season-2',
  'mitosis-defi',
  'side-protocol',
  'nexus-zkvm',
  'succinct-sp1',
  'aligned-layer',
  'avalon-finance',
  'curvance-monad',
  'ambient-monad',
  'shogun-fi',
  'zeno-exchange',
  'valhalla-movement',
  'goplus-secware',
  'openledger-ai',
  'allora-network',
  'hyperbolic-ai',
  'ritual-ai',
  'myshell-ai',
  'sahara-ai'
];

for (const c of newCandidates) {
  const match = airdrops.find(a => a.id.toLowerCase().includes(c) || a.name.toLowerCase().includes(c));
  if (!match) {
    console.log(`AVAILABLE: ${c}`);
  } else {
    console.log(`EXISTS: ${c} -> ${match.id}`);
  }
}

import { airdrops } from '../src/data/airdrops';

const existingIds = new Set(airdrops.map(a => a.id));

const candidates = [
  'megaeth-labs',
  'curvance-protocol',
  'redstone-oracles',
  'espresso-sequencer',
  'morph-l2',
  'creator-bid',
  'sonic-svm',
  'kinto-kyc-l2',
  'nexus-zk-network',
  'zerion-dna',
  'zesty-market',
  'hyperlane-interchain',
  'symbiotic-fi',
  'movement-labs',
  'initia-network',
  'avail-da',
  'solayer-network',
  'berachain-artio',
  'story-protocol',
  'succinct-sp1',
  'astria-org',
  'nubit-da',
  'ritual-net',
  'privasea-ai',
  'side-protocol',
  'layr-labs',
  'fuel-network'
];

const available = candidates.filter(id => !existingIds.has(id));
console.log('Available candidates:', available);

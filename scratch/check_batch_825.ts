import { airdrops } from '../src/data/airdrops';

const candidates = [
  'reya-network-trading',
  'tars-ai-solana',
  'swell-l2-restaking',
  'initia-network',
  'kinto-network',
  'nubit-bitcoin-da',
  'espresso-sequencer',
  'succinct-labs',
  'redstone-oracles-network',
  'superstate-tokenized-tbills',
  'ondo-finance-rwa',
  'dinari-securities-dshares',
  'morph-l2-consumer',
  'megaeth-realtime-evm',
  'zero-network-zksync',
  'hyperlane-modular-interop',
  'astria-shared-sequencer',
  'berachain-boyco',
  'monad-madness',
  'chainbase-omnichain-ai',
  'talus-network-move',
  'almanak-ai-defi',
  'fluence-serverless-cloud',
  'curvance-modular-lending',
  'renegade-dark-pool'
];

const existingIds = new Set(airdrops.map(a => a.id));
console.log('--- Checking Candidate IDs ---');
const available: string[] = [];
for (const id of candidates) {
  if (!existingIds.has(id)) {
    available.push(id);
    console.log(`✅ AVAILABLE: ${id}`);
  } else {
    console.log(`❌ EXISTS: ${id}`);
  }
}
console.log(`Total Available: ${available.length}`);

import { airdrops } from '../src/data/airdrops';

const candidates = [
  'bouncebit-cefi-defi',
  'mezo-network-btc',
  'plume-network-rwa',
  'sonic-labs-svm',
  'hemi-network-pop',
  'story-foundation-ip',
  'swell-network-dao',
  'mitosis-expedition',
  'avalon-finance-btc',
  'zeno-exchange-dex',
  'swell-l2-restaking',
  'reya-network-trading',
  'superform-safari-yield',
  'kinza-finance-bnb',
  'kernel-dao-restaking',
  'dill-network-da',
  'hyperbridge-coprocessor',
  'privasea-ai-fhe',
  'alvara-protocol-etf',
  'tars-ai-solana'
];

const existingIds = new Set(airdrops.map(a => a.id));
console.log('--- Candidate IDs Availability ---');
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

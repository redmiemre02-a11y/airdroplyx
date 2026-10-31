import { airdrops } from '../src/data/airdrops';

const newCandidates = [
  'zkpass-protocol',
  'ritual-ai',
  'hyperbolic-ai',
  'kakarot-zk-evm',
  't3rn-network',
  'sovereign-sdk',
  'goplus-security',
  'satlayer-btc',
  'lagrange-zk',
  'tea-protocol-oss',
  'lumia-network-l2',
  'allora-network-ai',
  'redstone-oracles-protocol',
  'open-ledger-ai',
  'swell-network-dao',
  'mezo-network-btc',
  'bouncebit-cefi-defi',
  'huma-finance-payfi',
  'plume-network-rwa',
  'hemi-network-pop',
  'solayer-sol-restaking',
  'sonic-labs-svm',
  'movement-aptos-evm',
  'story-foundation-ip'
];

const existingIds = new Set(airdrops.map(a => a.id));
const available: string[] = [];
for (const id of newCandidates) {
  if (!existingIds.has(id)) {
    available.push(id);
    console.log(`✅ AVAILABLE: ${id}`);
  } else {
    console.log(`❌ EXISTS: ${id}`);
  }
}
console.log(`Total Available: ${available.length}`);

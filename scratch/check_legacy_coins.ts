import { airdrops } from '../src/data/airdrops';

const legacyCoins = [
  'cardano-foundation',
  'polkadot-network',
  'avalanche-network',
  'monero-project',
  'dash-network',
  'zcash-network',
  'waves-blockchain',
  'ontology-network',
  'qtum-chain',
  'ravencoin-blockchain',
  'decred-network'
];

for (const a of airdrops) {
  if (legacyCoins.includes(a.id)) {
    console.log('Legacy coin found in airdrops:', a.id, a.name);
  }
}

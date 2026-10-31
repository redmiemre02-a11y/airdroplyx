import { airdrops } from '../src/data/airdrops';

const existingIds = new Set(airdrops.map(a => a.id));

const candidates = [
  'phoenix-orderbook-dex',
  'lombard-finance-btc',
  'bedrock-uni-btc',
  'solv-protocol-btc',
  'corn-kernel-points',
  'movement-parthenon',
  'initia-public-testnet',
  'curvance-cve-vaults',
  'swell-rsweth-l2'
];

candidates.forEach(id => {
  console.log(`${id}: ${existingIds.has(id) ? 'EXISTS ❌' : 'AVAILABLE ✅'}`);
});

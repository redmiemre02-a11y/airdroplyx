import { airdrops } from '../src/data/airdrops';

const existingIds = new Set(airdrops.map(a => a.id));

const batch15 = [
  'sanctum-lst',
  'degen-chain-l3',
  'phoenix-orderbook-dex',
  'elixir-deusd-network',
  'parcl-rwa',
  'ambient-finance-protocol',
  'blasterswap-protocol',
  'derive-protocol',
  'resolv-protocol',
  'lombard-finance-btc',
  'solv-protocol-btc',
  'bedrock-uni-btc',
  'corn-kernel-points',
  'movement-parthenon',
  'curvance-cve-vaults'
];

let allUnique = true;
batch15.forEach(id => {
  if (existingIds.has(id)) {
    console.error(`Already exists: ${id}`);
    allUnique = false;
  }
});

if (allUnique) {
  console.log('✅ ALL 15 ARE 100% UNIQUE!');
}

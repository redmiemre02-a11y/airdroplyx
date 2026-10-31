import { airdrops } from '../src/data/airdrops';

const existingIds = new Set(airdrops.map(a => a.id));

const checkList = [
  'sanctum-cloud',
  'degen-l3',
  'phoenix-orderbook',
  'tensor-foundation',
  'kamino-liquidity',
  'elixir-network',
  'drift-perps',
  'marginfi-mrgn',
  'zeta-exchange',
  'parcl-real-estate',
  'ambient-dex',
  'blasterswap-dex',
  'bob-hybrid-l2',
  'bouncebit-btc',
  'taraxa-chain',
  'carv-protocol',
  'sanctum-solana',
  'elixir-deusd',
  'kamino-finance',
  'parcl-protocol',
  'zeta-markets'
];

checkList.forEach(id => {
  console.log(`${id}: ${existingIds.has(id) ? 'EXISTS ❌' : 'AVAILABLE ✅'}`);
});

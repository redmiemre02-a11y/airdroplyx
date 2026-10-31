import { airdrops } from '../src/data/airdrops';

const existingIds = new Set(airdrops.map(a => a.id));
console.log(`Current airdrops count: ${existingIds.size}`);

const candidates = [
  'ambient-dex-swap',
  'boba-network-hybrid',
  'avantis-base-perps',
  'corn-btc-yield',
  'solayer-restake-sol',
  'symbiotic-vaults-defi',
  'initia-omni-rollup',
  'movement-m2-testnet',
  'privasea-depin-nodes',
  'dill-sharding-da',
  'creator-bid-social',
  'hyperbeat-vaults',
  'hyperlend-hyperliquid',
  'tac-ton-telegram',
  'chainbase-theia-ai',
  'degen-chain-base',
  'sanctum-lst-solana',
  'zeta-markets-perps',
  'drift-v2-perps',
  'phoenix-dex-solana',
  'parcl-v3-real-estate',
  'kamino-finance-lend',
  'marginfi-solana-lend',
  'jup-perps-solana',
  'tensor-nft-solana',
  'blasterswap-dex',
  'ambient-finance-dex',
  'elixir-deusd-yield',
  'eigenlayer-avs-restake',
  'babylon-bitcoin-staking'
];

candidates.forEach(id => {
  console.log(`${id}: ${existingIds.has(id) ? 'EXISTS ❌' : 'AVAILABLE ✅'}`);
});

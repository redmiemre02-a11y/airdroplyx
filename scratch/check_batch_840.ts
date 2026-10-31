import { airdrops } from '../src/data/airdrops';
import { newsArticles } from '../src/data/news';

console.log('Current Airdrops:', airdrops.length);
console.log('Current News:', newsArticles.length);

const existingIds = new Set(airdrops.map(a => a.id));

const candidateIds = [
  'infinex-patron-account',
  'avantis-base-perp',
  'resolv-labs-stablecoin',
  'curvance-cross-chain-lending',
  'tea-protocol-oss',
  'particle-network-modular-l1',
  'stride-cosmos-liquid-staking',
  'rubic-cross-chain-aggregator',
  'alchemix-self-repaying-loans',
  'syndicate-io-communities',
  'corn-btc-l2-kernel',
  'polynomial-chain-l2',
  'zenith-cross-margin-perp',
  'zerolend-linea-liquidity',
  'ambient-finance-modular-dex',
  'drift-protocol-solana-perp',
  'hyperlane-modular-interop',
  'orderly-network-omnichain-dex',
  'fuel-ignition-mainnet',
  'karak-restaking-v2'
];

const available = candidateIds.filter(id => !existingIds.has(id));
const used = candidateIds.filter(id => existingIds.has(id));

console.log(`Available (${available.length}):`, available);
console.log(`Already used (${used.length}):`, used);

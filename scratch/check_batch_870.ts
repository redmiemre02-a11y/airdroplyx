import { airdrops } from '../src/data/airdrops';
import { newsArticles } from '../src/data/news';

console.log('Current Airdrops:', airdrops.length);
console.log('Current News:', newsArticles.length);

const existingIds = new Set(airdrops.map(a => a.id));

const candidateIds = [
  'blast-gold-incentives',
  'dinari-dshares-rwa',
  'valantis-modular-amm',
  'fluence-serverless-cloud',
  'spacemesh-post-mining',
  'zenith-cross-margin-perp',
  'mitosis-liquidity-vaults',
  'hyperbeat-auto-compounder',
  'vanar-chain-ai-gaming',
  'gasp-cross-chain-dex',
  'vultisig-mpc-vault',
  'hyperlend-hyperliquid-lending',
  'superposition-stylus-l3',
  'karrat-protocol-gaming',
  'monadpad-ido-launchpad',
  'swellchain-l2-polygon',
  'kuru-orderbook-monad',
  'hyperliquid-purr-meme',
  'etherfi-cash-card',
  'symbiotic-core-restaking',
  'babylon-btc-staking-cap2',
  'story-odyssey-incentivized',
  'berachain-btr-governance'
];

const available = candidateIds.filter(id => !existingIds.has(id));
const used = candidateIds.filter(id => existingIds.has(id));

console.log(`Available (${available.length}):`, available);
console.log(`Already used (${used.length}):`, used);

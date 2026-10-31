import { airdrops } from '../src/data/airdrops';
import { newsArticles } from '../src/data/news';

console.log('Current Airdrops:', airdrops.length);
console.log('Current News:', newsArticles.length);

const existingIds = new Set(airdrops.map(a => a.id));

const candidateIds = [
  'dill-network-da',
  'monad-ecosystem-fund',
  'debridge-finance-cross-chain',
  'dmail-network-web3',
  'biconomy-dan-account',
  'syndicate-io-communities',
  'zenith-cross-margin-perp',
  'zerolend-linea-liquidity',
  'drift-protocol-solana-perp',
  'blast-gold-incentives',
  'movement-parthenon-testnet',
  'kakarot-zkevm-cairo',
  'allora-network-ml-intelligence',
  'solayer-solana-restaking',
  'mitosis-liquidity-vaults',
  't3rn-cross-chain-finality',
  'satlayer-bitcoin-restaking',
  'huma-finance-payfi-credit',
  'hyperbolic-decentralized-gpu',
  'privasea-fhe-ai-identity',
  'dinari-dshares-rwa',
  'valantis-modular-amm',
  'fluence-serverless-cloud',
  'spacemesh-post-mining'
];

const available = candidateIds.filter(id => !existingIds.has(id));
const used = candidateIds.filter(id => existingIds.has(id));

console.log(`Available (${available.length}):`, available);
console.log(`Already used (${used.length}):`, used);

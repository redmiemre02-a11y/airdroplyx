import fs from 'fs';

const newsText = fs.readFileSync('src/data/news.ts', 'utf8');

const elevenSlugs = [
  'web3-modular-ai-infrastructure-supercycle-2026-analysis',
  'cysic-hardware-accelerated-zk-prover-network-launch',
  'rise-chain-gigagas-parallel-evm-testnet-milestone',
  'termina-svm-solana-rollup-as-a-service-revolution',
  'rome-protocol-solana-shared-sequencer-ethereum-l2',
  'radius-encrypted-mempool-shared-sequencer-mainnet',
  'mira-network-decentralized-ai-output-verification-testnet',
  'pond-graph-neural-network-foundation-models-web3',
  'sapien-decentralized-gamified-ai-data-labeling-incentives',
  'echo-protocol-aptos-move-bitcoin-liquid-restaking-surge',
  'kintsu-liquid-staking-protocol-monad-aleph-zero-expansion'
];

const banned = ['uniswap', 'metamask', 'binance', 'coinbase', 'okx', 'opensea'];

for (const slug of elevenSlugs) {
  const start = newsText.indexOf(`"slug": "${slug}"`);
  if (start === -1) {
    console.log(`SLUG NOT FOUND: ${slug}`);
    continue;
  }
  // Find the end of this object
  const nextSlug = newsText.indexOf('"slug":', start + 10);
  const chunk = nextSlug !== -1 ? newsText.substring(start, nextSlug) : newsText.substring(start, start + 3000);
  
  for (const b of banned) {
    if (chunk.toLowerCase().includes(b)) {
      console.log(`❌ VIOLATION in ${slug}: found ${b}`);
    }
  }
}
console.log('Finished checking all 11 new news articles.');

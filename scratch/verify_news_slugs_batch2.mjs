import fs from 'fs';

const newsText = fs.readFileSync('src/data/news.ts', 'utf8');

const slugs = [
  'babylon-bitcoin-staking-cap-3-mainnet-launch',
  'berachain-proof-of-liquidity-v2-mainnet-genesis-readiness',
  'story-protocol-programmable-ip-odyssey-creator-economy',
  'monad-parallel-evm-ecosystem-fund-developer-growth',
  'symbiotic-permissionless-restaking-surpasses-record-deposits',
  'karak-network-universal-security-layer-multi-asset-scaling',
  'fuel-network-ignition-mainnet-launch-sway-parallel-vm',
  'eclipse-svm-ethereum-l2-mainnet-ecosystem-surge',
  'initia-interwoven-rollups-public-testnet-milestone',
  'grass-depin-ai-data-scraping-network-surpasses-3-million-nodes'
];

for (const slug of slugs) {
  const exists = newsText.includes(`"slug": "${slug}"`);
  console.log(slug.padEnd(65), exists ? 'ALREADY EXISTS ❌' : 'UNIQUE & CLEAN ✅');
}

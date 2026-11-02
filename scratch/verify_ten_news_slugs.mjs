import fs from 'fs';

const newsText = fs.readFileSync('src/data/news.ts', 'utf8');

const newsSlugs = [
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

for (const slug of newsSlugs) {
  console.log(slug.padEnd(60), newsText.includes(`"slug": "${slug}"`) ? 'EXISTS ❌' : 'CLEAN & UNIQUE ✅');
}

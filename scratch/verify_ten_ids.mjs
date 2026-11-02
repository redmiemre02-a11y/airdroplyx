import fs from 'fs';

const airdropsText = fs.readFileSync('src/data/airdrops.ts', 'utf8');

const ten = [
  'cysic-zk-network',
  'rise-chain-parallel-evm',
  'termina-svm-solana',
  'rome-protocol-shared-sequencer',
  'radius-shared-sequencer',
  'mira-network-ai',
  'pond-ai-crypto',
  'sapien-gamified-ai',
  'echo-protocol-btc',
  'kintsu-liquid-staking'
];

for (const id of ten) {
  console.log(id.padEnd(35), airdropsText.includes(`"id": "${id}"`) ? 'ALREADY EXISTS ❌' : 'CLEAN & UNIQUE ✅');
}

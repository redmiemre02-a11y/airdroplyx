import fs from 'fs';
const c = fs.readFileSync('src/data/airdrops.ts', 'utf8');
const list = [
  'alpen-labs-zk',
  'hyle-zk-settlement',
  'nexus-zkvm-network',
  'avantis-perps-dex',
  'hyperlane-nexus-bridge',
  'reya-network-dex',
  'side-protocol-mesh',
  'corn-network-btcn',
  'symbiosis-omnichain',
  'morpho-isolated-lending'
];
let dups = 0;
for (const id of list) {
  if (c.includes(`"id": "${id}"`)) {
    console.log('DUPLICATE:', id);
    dups++;
  }
}
if (dups === 0) console.log('✓ All 10 airdrop IDs are 100% unique and fresh!');

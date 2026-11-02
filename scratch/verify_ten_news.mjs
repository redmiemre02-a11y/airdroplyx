import fs from 'fs';
const c = fs.readFileSync('src/data/news.ts', 'utf8');
const slugs = [
  'alpen-labs-bitcoin-zk-rollup-scaling-milestone',
  'hyle-modular-zk-proof-settlement-mainnet-testnet',
  'nexus-planetary-zkvm-distributed-supercomputer-beta',
  'avantis-protocol-surpasses-record-perpetuals-volume-base',
  'hyperlane-permissionless-interoperability-expansion-modular',
  'reya-network-high-throughput-dex-rollup-liquidity',
  'side-protocol-bitcoin-liquidity-mesh-cross-chain-swap',
  'corn-network-ethereum-l2-btcn-gas-adoption-record',
  'symbiosis-omnichain-cross-chain-amm-routing-breakthrough',
  'morpho-isolated-risk-markets-surpass-record-defi-tvl'
];
let dups = 0;
for (const s of slugs) {
  if (c.includes(`"slug": "${s}"`)) {
    console.log('DUPLICATE NEWS SLUG:', s);
    dups++;
  }
}
if (dups === 0) console.log('✓ All 10 news slugs are 100% unique and fresh!');

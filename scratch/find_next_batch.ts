import { airdrops } from '../src/data/airdrops';

const candidates = [
  { id: 'zeno-dex-monad', name: 'Zeno DEX Monad', cat: 'DeFi / Monad / Perps' },
  { id: 'valantis-modular-amm', name: 'Valantis AMM', cat: 'DeFi / Modular Liquidity' },
  { id: 'gasp-eigenlayer-crosschain', name: 'Gasp Network', cat: 'EigenLayer / Cross-Chain Rollup' },
  { id: 'side-protocol-mesh', name: 'Side Protocol', cat: 'Cosmos / Bitcoin Mesh Liquidity' },
  { id: 'ambient-concentrated-dex', name: 'Ambient Finance', cat: 'DeFi / Zero-Fee AMM' },
  { id: 'lumia-rwa-liquidity', name: 'Lumia Network', cat: 'Layer 2 / RWA Liquidity' },
  { id: 'bouncebit-cefi-defi', name: 'BounceBit Prime', cat: 'Bitcoin Staking / CeDeFi' },
  { id: 'solayer-labs-solana', name: 'Solayer Restaking', cat: 'Solana / Restaking / Polychain' },
  { id: 'citrea-bitcoin-zk', name: 'Citrea ZK Rollup', cat: 'Bitcoin / ZK Rollup' },
  { id: 'allora-network-ai', name: 'Allora Network', cat: 'AI / Self-Improving Machine Learning' },
  { id: 'curvance-yield-market', name: 'Curvance Money Market', cat: 'DeFi / Cross-Chain Yield' },
  { id: 'mitosis-matrix-assets', name: 'Mitosis Liquidity', cat: 'Modular Rollups / Matrix Liquidity' },
  { id: 'espresso-shared-sequencer', name: 'Espresso Shared Sequencer', cat: 'Sequencing / Rollups' },
  { id: 'talus-network-agents', name: 'Talus Network', cat: 'AI / Move / Autonomous Agents' },
  { id: 'hyperlane-permissionless', name: 'Hyperlane Interop', cat: 'Interoperability / Modular' },
  { id: 'hemi-network-pop', name: 'Hemi PoP Engine', cat: 'Bitcoin L2 / PoP' },
  { id: 'fractal-bitcoin-virtual', name: 'Fractal Bitcoin Core', cat: 'Bitcoin / Recursive Virtualization' },
  { id: 'corn-kernels-yield', name: 'Corn BTCN Network', cat: 'Layer 2 / Bitcoin Gas' },
  { id: 'union-zk-ibc', name: 'Union Zero Knowledge', cat: 'Interoperability / ZK-IBC' },
  { id: 'alpen-labs-btc-zk', name: 'Alpen Labs ZK', cat: 'Bitcoin / Zero Knowledge' },
  { id: 'plume-rwa-modular', name: 'Plume RWA Modular', cat: 'Layer 2 / RWA Infrastructure' },
  { id: 'open-league-ton', name: 'TON Open League Seasons', cat: 'Telegram / TON Rewards' },
  { id: 'monad-pad-ecosystem', name: 'MonadPad Launchpad', cat: 'Monad / Launchpad' },
  { id: 'nexus-zk-vm-cloud', name: 'Nexus zkVM Network', cat: 'Zero-Knowledge / Distributed Compute' },
  { id: 'megaeth-realtime-evm', name: 'MegaETH Realtime EVM', cat: 'Layer 2 / 100k TPS' },
  { id: 'soneium-sony-labs', name: 'Soneium Sony Labs', cat: 'Layer 2 / Sony / Gaming' }
];

const takenIds = new Set(airdrops.map(a => a.id.toLowerCase()));
const takenNames = new Set(airdrops.map(a => a.name.toLowerCase()));

const eligible = candidates.filter(c => !takenIds.has(c.id.toLowerCase()) && !takenNames.has(c.name.toLowerCase()));
console.log(`Eligible fresh items: ${eligible.length}`);
eligible.forEach(e => console.log(`- ${e.id}: ${e.name} (${e.cat})`));

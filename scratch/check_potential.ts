import { airdrops } from '../src/data/airdrops';

const potential = [
  { id: 'tac-ton-evm', name: 'TAC TON EVM', cat: 'Layer 2 / Telegram / TON' },
  { id: 'creator-bid-agents', name: 'Creator.Bid', cat: 'AI / SocialFi / Base' },
  { id: 'succinct-sp1', name: 'Succinct Labs', cat: 'Zero-Knowledge / zkVM / Paradigm' },
  { id: 'din-data-intelligence', name: 'DIN Network', cat: 'AI / Data / Binance Labs' },
  { id: 'openmesh-cloud', name: 'Openmesh Network', cat: 'DePIN / Decentralized Cloud' },
  { id: 'layer-n-rollup', name: 'Layer N StateNet', cat: 'Layer 2 / High-Speed Rollup / Peter Thiel' },
  { id: 'kroma-network', name: 'Kroma L2', cat: 'Modular Layer 2 / ZK Rollup' },
  { id: 'solayer-labs', name: 'Solayer Restaking', cat: 'Solana / Restaking / Polychain' },
  { id: 'hemi-modular-l2', name: 'Hemi Network L2', cat: 'Bitcoin-Ethereum L2 / Binance Labs' },
  { id: 'dora-factory-v2', name: 'Dora Vota Governance', cat: 'Cosmos / DAO Governance / Voting' },
  { id: 'avantis-perps', name: 'Avantis Perpetual DEX', cat: 'Base / Perpetual DEX / Pantera' },
  { id: 'superstate-rwa-yield', name: 'Superstate RWA', cat: 'DeFi / Real-World Assets' },
  { id: 'fountain-platform', name: 'Fountain Protocol', cat: 'DeFi / Bitcoin Lending / Polychain' },
  { id: 'alys-bitcoin-evm', name: 'Alys Network', cat: 'Bitcoin Layer 2 / Fast EVM' },
  { id: 'swan-chain-ai', name: 'Swan Chain Compute', cat: 'AI / DePIN / Zero-Knowledge' },
  { id: 'term-finance-fixed', name: 'Term Finance', cat: 'DeFi / Fixed-Rate Lending' },
  { id: 'silo-v2-lending', name: 'Silo Finance v2', cat: 'DeFi / Isolated Lending' },
  { id: 'hyperbolic-ai-cloud', name: 'Hyperbolic AI Compute', cat: 'AI / DePIN / GPU Cloud' },
  { id: 'kakarot-zk-layer2', name: 'Kakarot zkEVM L2', cat: 'Zero-Knowledge / Starknet EVM' },
  { id: 'zero-network-layer2', name: 'Zerion Zero Network', cat: 'Layer 2 / Zero-Gas / EVM' },
  { id: 'symbiosis-cross-chain', name: 'Symbiosis Cross-Chain', cat: 'DeFi / Cross-Chain DEX' },
  { id: 'valantis-defi-modular', name: 'Valantis Modular DEX', cat: 'DeFi / Sovereign AMM' },
  { id: 'ambient-concentrated-amm', name: 'Ambient AMM', cat: 'DeFi / Zero-Fee AMM' },
  { id: 'gasp-cross-chain-rollup', name: 'Gasp Network', cat: 'EigenLayer / Cross-Chain Rollup' },
  { id: 'reddio-parallel-zk', name: 'Reddio Parallel ZK', cat: 'Layer 2 / Parallel EVM / ZK' }
];

const takenIds = new Set(airdrops.map(a => a.id.toLowerCase()));
const takenNames = new Set(airdrops.map(a => a.name.toLowerCase()));

const results = potential.filter(p => {
  const idCollision = takenIds.has(p.id.toLowerCase());
  const nameCollision = takenNames.has(p.name.toLowerCase());
  return !idCollision && !nameCollision;
});

console.log(`Eligible fresh items: ${results.length}`);
results.forEach(r => console.log(`- ${r.id}: ${r.name} (${r.cat})`));

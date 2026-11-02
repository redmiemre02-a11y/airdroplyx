import fs from 'fs';

const airdropsText = fs.readFileSync('src/data/airdrops.ts', 'utf8');
const idMatches = [...airdropsText.matchAll(/"id":\s*"([^"]+)"/g)].map(m => m[1]);
const ids = new Set(idMatches);

const candidateList = [
  // High profile recent launches, testnets, L1s, L2s, AI, DePIN, Bitcoin L2s, SVM, Bera/Monad/Aptos ecosystem:
  'valida-zkvm', // Lita Valida ZKVM
  'hyperbolic-ai-cloud', // Hyperbolic DePIN AI compute
  'goplus-network', // GoPlus user security network
  'ritual-net', // Ritual AI coprocessor
  'plume-network', // Plume RWA L2
  'superstate-tokenized', // Robert Leshner Superstate
  'ondo-finance', // Ondo tokenized treasuries
  'openledger-ai', // OpenLedger high-performance data blockchain for AI
  'din-data-intelligence', // DIN (formerly Web3Go) AI data intelligence
  'fraction-ai', // Fraction AI data curation
  'sahara-ai', // Sahara AI decentralized collaborative AI
  'vana-network', // Vana user-owned data EVM network ($25M Paradigm, Polychain)
  'espresso-sequencer', // Espresso Systems
  'union-ibc', // Union build modular interoperability zk-IBC
  'kakarot-zkevm', // Kakarot Cairo EVM
  'nubit-da', // Nubit Bitcoin DA layer
  'boba-network', // Boba Network
  'hemi-network', // Hemi Network ($15M Breyer Capital, Bitcoin & Ethereum modular L2)
  'satlayer-bitcoin', // SatLayer Bitcoin restaking on Babylon
  'solv-protocol', // Solv Protocol SolvBTC
  'bedrock-btc', // Bedrock uniBTC
  'lombard-finance', // Lombard LBTC
  'pump-fun-perps', // no wait
  'zeno-exchange', // Zeno on Metis
  'curvance-protocol', // Curvance
  'redbelly-network', // Redbelly Network
  'camp-network', // Camp Network IP & fan engagement modular L2
  'reya-cronos', // 
  'zero-network-zerion', // ZERO Network (Zerion's gasless L2 powered by Gelato)
  'sophon-entertainment', // Sophon entertainment hyperchain
  'movement-labs', //
  'althea-l1', // Althea telecom L1
  'privy-wallet-network', //
  'privasea-ai', // Privasea FHE AI DePIN network
  'cysic-zk-hardware', // Cysic ZK hardware compute proving network
  'succinct-sp1', // Succinct SP1 zkVM
  'lagrange-zk-coprocessor', // Lagrange State Committees
  'brevis-network', // Brevis ZK coprocessor
  'aligned-layer', // Aligned Layer ZK proof verification on EigenLayer
  'particle-network' // Particle Network chain abstraction
];

console.log('Testing candidates against existing IDs:');
for (const c of candidateList) {
  const match = [...ids].filter(id => id.includes(c) || c.includes(id));
  console.log(c.padEnd(30), match.length > 0 ? `EXISTS: ${match.join(', ')}` : 'AVAILABLE! ★');
}

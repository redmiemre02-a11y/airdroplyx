import fs from 'fs';

const airdropsText = fs.readFileSync('src/data/airdrops.ts', 'utf8');
const idMatches = [...airdropsText.matchAll(/"id":\s*"([^"]+)"/g)].map(m => m[1]);
const ids = new Set(idMatches);

const testList = [
  'union-build',
  'cysic',
  'althea',
  'termina',
  'rise-chain',
  'caldera',
  'radius',
  'rome-protocol',
  'conduit',
  'gelato',
  'mira-network',
  'pond-ai',
  'bagel-network',
  'nevermined',
  'gaianet',
  'flock-io',
  'nimble-network',
  'sapien-ai',
  'echo-protocol',
  'pell-network',
  'lorenzo-protocol',
  'chakra',
  'mezo',
  'logx',
  'kintsu',
  'magma',
  'shogun'
];

for (const t of testList) {
  const match = [...ids].filter(id => id.includes(t) || t.includes(id));
  console.log(t.padEnd(20), match.length > 0 ? `EXISTS: ${match.join(', ')}` : 'AVAILABLE! ★');
}

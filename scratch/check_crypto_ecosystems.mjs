import fs from 'fs';
import path from 'path';

const content = fs.readFileSync(path.resolve('src/data/airdrops.ts'), 'utf8');
const idMatches = [...content.matchAll(/"id":\s*"([^"]+)"/g)].map(m => m[1]);

const candidates = [
  'kura',
  'tea',
  'ambient',
  'hyperbeat',
  'subsquid',
  'the-graph',
  'pocket-network',
  'livepeer',
  'render',
  'akash',
  'nosana',
  'io-net',
  'spheron',
  'aethir',
  'kroma',
  'movement',
  'sui',
  'aptos',
  'sei',
  'celestia',
  'dydx',
  'jupiter',
  'raydium',
  'orca',
  'marinade',
  'jito',
  'kamino',
  'drift',
  'zeta',
  'parcl',
  'marginfi',
  'tensor',
  'sanctum',
  'blaze',
  'wen',
  'pyth',
  'wormhole',
  'layerzero'
];

for (const c of candidates) {
  const matches = idMatches.filter(id => id.includes(c));
  console.log(c.padEnd(16), matches.length > 0 ? `FOUND (${matches.length}): ${matches.slice(0, 2).join(', ')}` : 'CLEAN');
}

import fs from 'fs';
import path from 'path';

const projectRoot = 'C:\\Users\\cigo\\.gemini\\antigravity\\scratch\\airdroplyx';
const airdropsPath = path.join(projectRoot, 'src', 'data', 'airdrops.ts');
const newsPath = path.join(projectRoot, 'src', 'data', 'news.ts');

const airdropsContent = fs.readFileSync(airdropsPath, 'utf8');
const newsContent = fs.readFileSync(newsPath, 'utf8');

const candidateAirdrops = [
  'alpen-labs-zk',
  'hyle-zk-settlement',
  'avantis-perps-dex',
  'solv-protocol-btc',
  'reya-network-dex',
  'side-protocol-mesh',
  'corn-network-btcn',
  'symbiosis-omnichain',
  'morpho-isolated-lending',
  'hemi-sequencer-pop'
];

console.log('--- Checking Candidate Airdrops ---');
for (const id of candidateAirdrops) {
  const exists = airdropsContent.includes(`"id": "${id}"`) || airdropsContent.includes(`id: '${id}'`);
  console.log(`${id}: ${exists ? 'ALREADY EXISTS ❌' : 'FRESH & AVAILABLE ✅'}`);
}

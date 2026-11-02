import fs from 'fs';

const airdropsText = fs.readFileSync('src/data/airdrops.ts', 'utf8');
const newsText = fs.readFileSync('src/data/news.ts', 'utf8');

const airdropIds = new Set([...airdropsText.matchAll(/"id":\s*"([^"]+)"/g)].map(m => m[1]));
const relatedIds = [...newsText.matchAll(/"relatedAirdropId":\s*"([^"]+)"/g)].map(m => m[1]);

console.log('Total airdrops:', airdropIds.size);
console.log('Total relatedAirdropId links in news:', relatedIds.length);

let missingCount = 0;
for (const rel of relatedIds) {
  if (!airdropIds.has(rel)) {
    console.log('MISSING AIRDROP ID referenced in news:', rel);
    missingCount++;
  }
}

if (missingCount === 0) {
  console.log('✓ All relatedAirdropId references match valid airdrops!');
} else {
  console.log(`❌ Found ${missingCount} invalid references.`);
}

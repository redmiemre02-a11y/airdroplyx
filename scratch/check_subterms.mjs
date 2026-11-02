import fs from 'fs';
import path from 'path';

const content = fs.readFileSync(path.resolve('src/data/airdrops.ts'), 'utf8');
const idMatches = [...content.matchAll(/"id":\s*"([^"]+)"/g)].map(m => m[1]);

const terms = ['althea', 'kura', 'spire', 'mind', 'fairblock', 'fhenix', 'astria', 'citrea'];
for (const t of terms) {
  const matches = idMatches.filter(id => id.includes(t));
  console.log(t, matches);
}

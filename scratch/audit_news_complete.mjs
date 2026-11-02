import fs from 'fs';
import path from 'path';

const projectRoot = 'C:\\Users\\cigo\\.gemini\\antigravity\\scratch\\airdroplyx';
const newsPath = path.join(projectRoot, 'src', 'data', 'news.ts');

const content = fs.readFileSync(newsPath, 'utf8');

const imgMatches = [...content.matchAll(/"image":\s*"([^"]+)"/g)].map(m => m[1]);
console.log('Total news stories found:', imgMatches.length);

let nonStandard = 0;
for (const img of imgMatches) {
  if (!img.includes('w=1200') || !img.includes('h=675')) {
    console.log(`Non standard image: ${img}`);
    nonStandard++;
  }
}

if (nonStandard === 0) {
  console.log(`✓ All ${imgMatches.length} news images strictly conform to 16:9 Google News standard (1200x675)!`);
} else {
  console.log(`Found ${nonStandard} non-standard images!`);
}

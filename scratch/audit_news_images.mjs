import fs from 'fs';
import path from 'path';

const newsPath = path.resolve('src/data/news.ts');
const content = fs.readFileSync(newsPath, 'utf8');

const imageRegex = /"image":\s*"([^"]+)"/g;
let match;
let nonCompliant = 0;
let total = 0;

while ((match = imageRegex.exec(content)) !== null) {
  total++;
  const url = match[1];
  if (!url.includes('1200') || !url.includes('675')) {
    console.log('Non-standard image URL:', url);
    nonCompliant++;
  }
}

console.log(`Audited ${total} news images. Non-standard: ${nonCompliant}`);

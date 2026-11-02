import fs from 'fs';
import path from 'path';

const airdrops = fs.readFileSync(path.resolve('src/data/airdrops.ts'), 'utf8');
const news = fs.readFileSync(path.resolve('src/data/news.ts'), 'utf8');
const academy = fs.readFileSync(path.resolve('src/data/academy.ts'), 'utf8');

const airdropIds = [...airdrops.matchAll(/"id":\s*"([^"]+)"/g)].map(m => m[1]);
const newsSlugs = [...news.matchAll(/"slug":\s*"([^"]+)"/g)].map(m => m[1]);
const academySlugs = [...academy.matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1]);

console.log('Total Airdrops:', airdropIds.length);
console.log('Total News Articles:', newsSlugs.length);
console.log('Total Academy Articles:', academySlugs.length);

const airdropIdSet = new Set(airdropIds);
if (airdropIdSet.size !== airdropIds.length) {
  console.error('ERROR: Duplicate airdrop IDs detected!');
} else {
  console.log('All airdrop IDs are 100% unique.');
}

const newsSlugSet = new Set(newsSlugs);
if (newsSlugSet.size !== newsSlugs.length) {
  console.error('ERROR: Duplicate news slugs detected!');
} else {
  console.log('All news slugs are 100% unique.');
}

const academySlugSet = new Set(academySlugs);
if (academySlugSet.size !== academySlugs.length) {
  console.error('ERROR: Duplicate academy slugs detected!');
} else {
  console.log('All academy slugs are 100% unique.');
}

// Check news images for Google News 16:9 compliance
const images = [...news.matchAll(/"image":\s*"([^"]+)"/g)].map(m => m[1]);
const nonCompliant = images.filter(url => !url.includes('1200') || !url.includes('675'));
console.log(`Audited ${images.length} news images. Non-compliant: ${nonCompliant.length}`);

import fs from 'fs';

const airdropsContent = fs.readFileSync('src/data/airdrops.ts', 'utf8');
const airdropIds = [...airdropsContent.matchAll(/"id":\s*"([^"]+)"/g)].map(m => m[1]);

const newsContent = fs.readFileSync('src/data/news.ts', 'utf8');
const newsSlugs = [...newsContent.matchAll(/"slug":\s*"([^"]+)"/g)].map(m => m[1]);

console.log('--- CONTENT STATS ---');
console.log('Total Airdrops:', airdropIds.length);
console.log('Top 10 Airdrops:', airdropIds.slice(0, 10));
console.log('Total News Articles:', newsSlugs.length);
console.log('Top 10 News Slugs:', newsSlugs.slice(0, 10));

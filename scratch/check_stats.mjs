import fs from 'fs';

const airdropsText = fs.readFileSync('src/data/airdrops.ts', 'utf8');
const newsText = fs.readFileSync('src/data/news.ts', 'utf8');

const airdropIds = [...airdropsText.matchAll(/"id":\s*"([^"]+)"/g)].map(m => m[1]);
const newsSlugs = [...newsText.matchAll(/"slug":\s*"([^"]+)"/g)].map(m => m[1]);

console.log('Total airdrops:', airdropIds.length);
console.log('Total news articles:', newsSlugs.length);
console.log('Last 10 airdrops:', airdropIds.slice(-10));
console.log('Last 10 news slugs:', newsSlugs.slice(-10));

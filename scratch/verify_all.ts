import fs from 'fs';
import path from 'path';
import { airdrops } from '../src/data/airdrops';
import { newsArticles } from '../src/data/news';

console.log('================ VERIFICATION REPORT ================');
console.log(`Total Airdrops: ${airdrops.length}`);
console.log(`Total News Articles: ${newsArticles.length}`);

// Check unique airdrop IDs
const airdropIds = new Set<string>();
let duplicateAirdropIds = 0;
for (const a of airdrops) {
  if (airdropIds.has(a.id)) {
    console.error(`Duplicate airdrop ID found: ${a.id}`);
    duplicateAirdropIds++;
  }
  airdropIds.add(a.id);
}
console.log(`Unique Airdrops: ${airdropIds.size} (Duplicates: ${duplicateAirdropIds})`);

// Check unique news slugs
const newsSlugs = new Set<string>();
let duplicateNewsSlugs = 0;
for (const n of newsArticles) {
  if (newsSlugs.has(n.slug)) {
    console.error(`Duplicate news slug found: ${n.slug}`);
    duplicateNewsSlugs++;
  }
  newsSlugs.add(n.slug);
}
console.log(`Unique News Articles: ${newsSlugs.size} (Duplicates: ${duplicateNewsSlugs})`);

// Check news word counts for the latest 10
console.log('\n--- Checking Latest 10 News Articles (Word Count & Structure) ---');
const latest10News = newsArticles.slice(-10);
let shortArticles = 0;
for (const article of latest10News) {
  const wordCount = article.content.trim().split(/\s+/).length;
  const hasHeadings = article.content.includes('##');
  const hasQuotes = article.content.includes('>');
  const hasValidAirdrop = article.relatedAirdropId ? airdropIds.has(article.relatedAirdropId) : true;
  
  console.log(`- [${article.category}] "${article.title.slice(0, 45)}..." | Words: ${wordCount} | Headings: ${hasHeadings} | Quote: ${hasQuotes} | Airdrop: ${article.relatedAirdropId} (Valid: ${hasValidAirdrop})`);
  
  if (wordCount < 350) {
    shortArticles++;
  }
}

// Check logos in public/
console.log('\n--- Checking Logos for All Airdrops in public/ ---');
let missingLogos = 0;
for (const a of airdrops) {
  const cleanPath = a.logo.replace(/^\//, '');
  const logoFullPath = path.resolve('public', cleanPath);
  if (!fs.existsSync(logoFullPath)) {
    console.error(`Missing logo for ${a.id}: ${a.logo}`);
    missingLogos++;
  }
}
console.log(`Missing logos count: ${missingLogos}`);

if (duplicateAirdropIds === 0 && duplicateNewsSlugs === 0 && shortArticles === 0 && missingLogos === 0) {
  console.log('\n✅ ALL VERIFICATIONS PASSED WITH 100% PERFECTION!');
} else {
  console.error('\n❌ ISSUES DETECTED!');
}

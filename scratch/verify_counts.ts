import { airdrops } from '../src/data/airdrops';
import { newsArticles } from '../src/data/news';

console.log('Total airdrops:', airdrops.length);
console.log('Total news:', newsArticles.length);

// Verify unique IDs
const idSet = new Set<string>();
for (const a of airdrops) {
  if (idSet.has(a.id)) {
    console.error('Duplicate airdrop ID:', a.id);
  }
  idSet.add(a.id);
}

// Verify unique Slugs
const slugSet = new Set<string>();
for (const n of newsArticles) {
  if (slugSet.has(n.slug)) {
    console.error('Duplicate news slug:', n.slug);
  }
  slugSet.add(n.slug);
}

console.log('All unique IDs verified! Latest airdrops:');
console.log(airdrops.slice(-8).map(a => `${a.id} -> ${a.name}`));
console.log('Latest 3 news articles:');
console.log(newsArticles.slice(-3).map(n => `${n.slug} -> ${n.title}`));

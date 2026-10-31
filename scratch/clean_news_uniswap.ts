import { newsArticles } from '../src/data/news';
import fs from 'fs';
import path from 'path';

console.log('Total news before:', newsArticles.length);
let changed = false;

for (const n of newsArticles) {
  if (n.relatedAirdropId === 'uniswap-protocol') {
    console.log('Found news linking to uniswap-protocol:', n.slug);
    delete n.relatedAirdropId;
    changed = true;
  }
}

if (changed) {
  const newsPath = path.resolve('src/data/news.ts');
  const content = `export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
  relatedAirdropId?: string;
  content: string;
}

export const newsArticles: NewsArticle[] = ${JSON.stringify(newsArticles, null, 2)};
`;
  fs.writeFileSync(newsPath, content, 'utf8');
  console.log('Updated news.ts with relatedAirdropId cleaned!');
} else {
  console.log('No news articles linked to uniswap-protocol.');
}

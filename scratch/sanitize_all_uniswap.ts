import { newsArticles } from '../src/data/news';
import fs from 'fs';
import path from 'path';

console.log('Total news before:', newsArticles.length);

// 1. Remove the news article completely
const filteredNews = newsArticles.filter(n => n.slug !== 'uniswap-unichain-flashbots-superchain-activation');

console.log('Total news after:', filteredNews.length);

// 2. Sanitize any remaining content in news
for (const n of filteredNews) {
  if (n.content && n.content.includes('Uniswap')) {
    n.content = n.content.replace(/Uniswap V4/g, 'V4 hooks').replace(/Uniswap V3/g, 'concentrated liquidity AMM').replace(/Uniswap/g, 'decentralized AMM');
  }
  if (n.excerpt && n.excerpt.includes('Uniswap')) {
    n.excerpt = n.excerpt.replace(/Uniswap/g, 'decentralized AMM');
  }
}

const newsPath = path.resolve('src/data/news.ts');
const newsContent = `export interface NewsArticle {
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

export const newsArticles: NewsArticle[] = ${JSON.stringify(filteredNews, null, 2)};
`;
fs.writeFileSync(newsPath, newsContent, 'utf8');
console.log('Successfully updated src/data/news.ts with zero Uniswap articles!');

// 3. Sanitize academy.ts
const academyPath = path.resolve('src/data/academy.ts');
if (fs.existsSync(academyPath)) {
  let academyRaw = fs.readFileSync(academyPath, 'utf8');
  academyRaw = academyRaw.replace(/Uniswap/g, 'decentralized AMM');
  fs.writeFileSync(academyPath, academyRaw, 'utf8');
  console.log('Successfully sanitized academy.ts!');
}

// 4. Sanitize airdrops.ts
const airdropsPath = path.resolve('src/data/airdrops.ts');
if (fs.existsSync(airdropsPath)) {
  let airdropsRaw = fs.readFileSync(airdropsPath, 'utf8');
  airdropsRaw = airdropsRaw.replace(/Uniswap/g, 'decentralized AMM');
  fs.writeFileSync(airdropsPath, airdropsRaw, 'utf8');
  console.log('Successfully sanitized airdrops.ts!');
}

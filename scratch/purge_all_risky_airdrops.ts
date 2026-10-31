import { airdrops } from '../src/data/airdrops';
import { newsArticles } from '../src/data/news';
import fs from 'fs';
import path from 'path';

const purgeIds = new Set([
  // High-risk brand enforcement & wallets
  'binance-moonbix',
  'okx-racer',
  'bitget-wallet',
  'mexc',
  'bingx',
  'metamask-snaps',
  'phantom',
  'phantom-wallet',
  'opensea',
  'rainbow-swap',
  'rainbow-wallet',
  'rabby-wallet',
  'argent-wallet',
  'braavos-wallet',

  // Legacy DeFi blue chips (already traded for years, no airdrop)
  'aave-protocol',
  'compound-finance',
  'makerdao-sky',
  'curve-finance',
  'yearn-finance',
  'sushiswap',
  '1inch-network',
  'dydx',
  'pancakeswap-dex',
  'synthetix',
  'balancer',
  'bancor-network',
  'loopring-l2',

  // Legacy ancient coins
  'cardano-foundation',
  'polkadot-network',
  'avalanche-network',
  'zcash-network',
  'monero-project',
  'dash-network',
  'waves-blockchain',
  'ontology-network',
  'qtum-chain',
  'ravencoin-blockchain',
  'decred-network',
  'symbol-blockchain',
  'ergo-platform',
  'beam-privacy',
  'grin-mimblewimble',
  'komodo-platform',
  'horizen-eon',
  'kusama-network'
]);

console.log('Total airdrops before purge:', airdrops.length);

const cleanedAirdrops = airdrops.filter(a => !purgeIds.has(a.id));

console.log('Total airdrops after purge:', cleanedAirdrops.length);
console.log('Purged count:', airdrops.length - cleanedAirdrops.length);

// Save updated airdrops.ts
const airdropsPath = path.resolve('src/data/airdrops.ts');
const airdropsContent = `export interface Airdrop {
  id: string;
  name: string;
  logo: string;
  description: string;
  reward: string;
  category: string;
  featured: boolean;
  status: 'active' | 'upcoming' | 'ended';
  publishDate?: string;
  endTime?: string;
  funding: string;
  investors?: string | string[];
  refLink?: string;
  overview: string;
  strategy: string;
  tokenomics?: string;
  sybilSafety?: string;
  steps: string[];
  faqs?: { question: string; answer: string }[];
  tier?: string;
  cost?: string;
  stage?: string;
  timeCommitment?: string;
  snapshot?: string;
  estDate?: string;
  socials?: {
    twitter?: string;
    discord?: string;
    website?: string;
  };
  isHot?: boolean;
  isFeatured?: boolean;
}

export const airdrops: Airdrop[] = ${JSON.stringify(cleanedAirdrops, null, 2)};
`;

fs.writeFileSync(airdropsPath, airdropsContent, 'utf8');
console.log('Successfully written clean airdrops.ts!');

// Clean any news articles referencing purged airdrops
console.log('Checking newsArticles for references to purged airdrops...');
let newsChanged = false;
for (const n of newsArticles) {
  if (n.relatedAirdropId && purgeIds.has(n.relatedAirdropId)) {
    console.log(`Cleaned relatedAirdropId '${n.relatedAirdropId}' from news article: ${n.slug}`);
    delete n.relatedAirdropId;
    newsChanged = true;
  }
}

if (newsChanged) {
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

export const newsArticles: NewsArticle[] = ${JSON.stringify(newsArticles, null, 2)};
`;
  fs.writeFileSync(newsPath, newsContent, 'utf8');
  console.log('Successfully updated news.ts without references to purged airdrops!');
} else {
  console.log('No news articles referenced purged airdrops.');
}

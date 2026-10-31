import { airdrops } from '../src/data/airdrops';
import fs from 'fs';
import path from 'path';

console.log('Total airdrops before:', airdrops.length);
const matching = airdrops.filter(a => a.id.includes('uniswap') || a.name.toLowerCase() === 'uniswap');
console.log('Matching Uniswap airdrops:', matching.map(m => ({ id: m.id, name: m.name })));

// Filter out any airdrop with id 'uniswap-protocol' or matching Uniswap
const filtered = airdrops.filter(a => a.id !== 'uniswap-protocol' && a.id !== 'uniswap');
console.log('Total airdrops after removal:', filtered.length);

const airdropsPath = path.resolve('src/data/airdrops.ts');
const content = `export interface Airdrop {
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

export const airdrops: Airdrop[] = ${JSON.stringify(filtered, null, 2)};
`;

fs.writeFileSync(airdropsPath, content, 'utf8');
console.log('Successfully updated src/data/airdrops.ts without uniswap-protocol!');

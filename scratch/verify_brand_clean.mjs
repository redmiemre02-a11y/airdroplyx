import fs from 'fs';

const airdropsText = fs.readFileSync('src/data/airdrops.ts', 'utf8');
const newsText = fs.readFileSync('src/data/news.ts', 'utf8');

const last10Airdrops = airdropsText.substring(airdropsText.lastIndexOf('"id": "cysic-zk-network"'));
const first11News = newsText.substring(0, newsText.indexOf('"slug": "alpen-labs-bitcoin-zk-rollup-scaling-milestone"'));

const banned = ['uniswap', 'metamask', 'binance', 'coinbase', 'okx', 'opensea'];
console.log('--- Brand Verification for New Batch ---');
for (const b of banned) {
  const inAirdrops = (last10Airdrops.toLowerCase().match(new RegExp(b, 'g')) || []).length;
  const inNews = (first11News.toLowerCase().match(new RegExp(b, 'g')) || []).length;
  console.log(b.padEnd(12), 'In new airdrops:', inAirdrops, 'In new news:', inNews);
}

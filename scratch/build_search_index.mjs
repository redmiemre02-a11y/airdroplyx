import fs from 'fs';
import path from 'path';

const projectRoot = 'C:\\Users\\cigo\\.gemini\\antigravity\\scratch\\airdroplyx';

const airdropsText = fs.readFileSync(path.join(projectRoot, 'src/data/airdrops.ts'), 'utf8');
const newsText = fs.readFileSync(path.join(projectRoot, 'src/data/news.ts'), 'utf8');
const academyText = fs.readFileSync(path.join(projectRoot, 'src/data/academy.ts'), 'utf8');

// Clean extraction using regex for airdrops
const airdropBlocks = airdropsText.split(/(?=\n\s*{\s*["']?id["']?:)/g).filter(b => b.includes('"id":') || b.includes('id:'));

const airdrops = [];
for (const block of airdropBlocks) {
  const idM = block.match(/["']?id["']?:\s*["']([^"']+)["']/);
  const nameM = block.match(/["']?name["']?:\s*["']([^"']+)["']/);
  const logoM = block.match(/["']?logo["']?:\s*["']([^"']+)["']/);
  const rewardM = block.match(/["']?reward["']?:\s*["']([^"']+)["']/);
  const categoryM = block.match(/["']?category["']?:\s*["']([^"']+)["']/);

  if (idM && nameM) {
    airdrops.push({
      type: 'airdrop',
      id: idM[1],
      title: nameM[1],
      subtitle: rewardM ? `${rewardM[1]}` : (categoryM ? `${categoryM[1]}` : 'Verified Airdrop'),
      url: `/airdrop/${idM[1]}`,
      badge: categoryM ? categoryM[1] : 'Airdrop',
      icon: logoM ? logoM[1] : '/images/airdrops/default.svg'
    });
  }
}

// Clean extraction for news
const newsBlocks = newsText.split(/(?=\n\s*{\s*["']?slug["']?:)/g).filter(b => b.includes('"slug":') || b.includes('slug:'));
const news = [];
for (const block of newsBlocks) {
  const slugM = block.match(/["']?slug["']?:\s*["']([^"']+)["']/);
  const titleM = block.match(/["']?title["']?:\s*["']([^"']+)["']/);
  const catM = block.match(/["']?category["']?:\s*["']([^"']+)["']/);

  if (slugM && titleM) {
    news.push({
      type: 'news',
      id: slugM[1],
      title: titleM[1],
      subtitle: catM ? `${catM[1]} • News` : 'News',
      url: `/news/${slugM[1]}`,
      badge: catM ? catM[1] : 'News',
      icon: '📰'
    });
  }
}

// Clean extraction for academy
const academyBlocks = academyText.split(/(?=\n\s*{\s*["']?slug["']?:)/g).filter(b => b.includes('"slug":') || b.includes('slug:'));
const academy = [];
for (const block of academyBlocks) {
  const slugM = block.match(/["']?slug["']?:\s*["']([^"']+)["']/);
  const titleM = block.match(/["']?title["']?:\s*["']([^"']+)["']/);

  if (slugM && titleM) {
    academy.push({
      type: 'academy',
      id: slugM[1],
      title: titleM[1],
      subtitle: 'Academy Masterclass',
      url: `/academy/${slugM[1]}`,
      badge: 'Masterclass',
      icon: '🎓'
    });
  }
}

const pages = [
  { type: 'page', id: 'home', title: `Home (All ${airdrops.length} Airdrops)`, subtitle: 'Full Database & Search', icon: '⚡', url: '/', badge: 'Explorer' },
  { type: 'page', id: 'watchlist', title: 'My Airdrop Watchlist & Tracker', subtitle: 'Personal Farming Checklist', icon: '⭐', url: '/watchlist', badge: 'Tracker' },
  { type: 'page', id: 'planner', title: 'Airdrop Farming Routine Planner', subtitle: 'Personalized Weekly Schedule', icon: '📅', url: '/farming-planner', badge: 'Tool' },
  { type: 'page', id: 'sybil', title: 'Sybil Risk & Wallet Diagnostic', subtitle: 'Anti-Sybil Clustering Audit', icon: '🛡️', url: '/sybil-checker', badge: 'Security' },
  { type: 'page', id: 'faucets', title: 'Verified Testnet Faucets Hub', subtitle: 'Free MON, BERA, Sepolia ETH', icon: '🚰', url: '/faucets', badge: 'Faucets' },
  { type: 'page', id: 'investors', title: 'VC Portfolios & Institutional Radar', subtitle: 'Top Tier Institutional Web3 Funds', icon: '🏛️', url: '/investors', badge: 'VCs' },
  { type: 'page', id: 'unlocks', title: 'Token Unlocks & Vesting Radar', subtitle: 'Cliff Dates & Sell-Pressure Intel', icon: '🔓', url: '/unlocks', badge: 'Unlocks' },
  { type: 'page', id: 'gas', title: 'Real-Time Gas Tracker & Heatmap', subtitle: 'Multi-Chain Gas Fees & Cheap Hours', icon: '⛽', url: '/gas-tracker', badge: 'Gas' },
  { type: 'page', id: 'compare', title: 'Protocol Comparison Matrix', subtitle: 'Side-by-Side Airdrop Analysis', icon: '⚖️', url: '/compare', badge: 'Analysis' },
  { type: 'page', id: 'calendar', title: 'Airdrop Calendar', subtitle: 'Upcoming Deadlines & TGEs', icon: '📆', url: '/calendar', badge: 'Calendar' },
  { type: 'page', id: 'calculator', title: 'Points ROI Calculator', subtitle: 'Valuation & Yield Modeling', icon: '🧮', url: '/calculator', badge: 'Finance' },
  { type: 'page', id: 'quiz', title: 'Airdrop Hunter Certification Quiz', subtitle: 'Official Web3 Knowledge Test', icon: '🏆', url: '/academy/quiz', badge: 'Quiz' },
  { type: 'page', id: 'glossary', title: 'Web3 & Airdrop Glossary', subtitle: 'Encyclopedia of 50+ Terms', icon: '📚', url: '/glossary', badge: 'Glossary' },
  { type: 'page', id: 'ecosystems', title: 'Ecosystem Hubs', subtitle: 'Ethereum, Solana, Cosmos, L2s', icon: '🌐', url: '/ecosystems', badge: 'Hubs' },
  { type: 'page', id: 'news', title: `Crypto News & Alpha (${news.length})`, subtitle: 'Breaking News & Deep Dives', icon: '📰', url: '/news', badge: 'News' },
  { type: 'page', id: 'academy', title: `Airdrop Academy (${academy.length})`, subtitle: 'Web3 Masterclasses', icon: '🎓', url: '/academy', badge: 'Academy' }
];

console.log('Result counts:');
console.log('Total Airdrops indexed:', airdrops.length);
console.log('Total News indexed:', news.length);
console.log('Total Academy indexed:', academy.length);
console.log('Total Pages indexed:', pages.length);

const fullIndex = {
  pages,
  airdrops,
  news,
  academy
};

const outputPath = path.join(projectRoot, 'public/search-index.json');
fs.writeFileSync(outputPath, JSON.stringify(fullIndex), 'utf8');
console.log(`✅ Universal Search Index compiled: ${airdrops.length + news.length + academy.length + pages.length} total searchable items!`);

import { airdrops } from '../data/airdrops';
import { academyArticles } from '../data/academy';
import { newsArticles } from '../data/news';

export async function GET() {
  const searchIndex = {
    airdrops: airdrops.map(a => ({
      type: 'airdrop',
      id: a.id,
      title: a.name,
      subtitle: `${a.category} • ${a.reward}`,
      logo: a.logo,
      url: `/airdrop/${a.id}`
    })),
    academy: academyArticles.map(a => ({
      type: 'academy',
      id: a.slug,
      title: a.title,
      subtitle: 'Academy Masterclass',
      icon: '🎓',
      url: `/academy/${a.slug}`
    })),
    news: newsArticles.map(n => ({
      type: 'news',
      id: n.slug,
      title: n.title,
      subtitle: `${n.category} • News`,
      icon: '📰',
      url: `/news/${n.slug}`
    })),
    pages: [
      { type: 'page', id: 'home', title: 'Home (All 735+ Airdrops)', subtitle: 'Full Database & Filters', icon: '⚡', url: '/' },
      { type: 'page', id: 'watchlist', title: 'My Airdrop Watchlist & Tracker', subtitle: 'Personal Farming Checklist', icon: '⭐', url: '/watchlist' },
      { type: 'page', id: 'planner', title: 'Airdrop Farming Routine Planner', subtitle: 'Personalized Weekly Schedule', icon: '📅', url: '/farming-planner' },
      { type: 'page', id: 'sybil', title: 'Sybil Risk & Wallet Diagnostic', subtitle: 'Anti-Sybil Clustering Audit', icon: '🛡️', url: '/sybil-checker' },
      { type: 'page', id: 'faucets', title: 'Verified Testnet Faucets Directory', subtitle: 'Free MON, BERA, Sepolia ETH', icon: '🚰', url: '/faucets' },
      { type: 'page', id: 'investors', title: 'VC Portfolios & Institutional Radar', subtitle: 'Paradigm, a16z, Binance Labs', icon: '🏛️', url: '/investors' },
      { type: 'page', id: 'unlocks', title: 'Token Unlocks & Vesting Radar', subtitle: 'Cliff Dates & Sell-Pressure Intel', icon: '🔓', url: '/unlocks' },
      { type: 'page', id: 'gas', title: 'Real-Time Gas Tracker & Heatmap', subtitle: 'Multi-Chain Gas Fees & Cheap Hours', icon: '⛽', url: '/gas-tracker' },
      { type: 'page', id: 'compare', title: 'Protocol Comparison Matrix', subtitle: 'Side-by-Side Airdrop Kıyaslama', icon: '⚖️', url: '/compare' },
      { type: 'page', id: 'calendar', title: 'Airdrop Calendar', subtitle: 'Upcoming Deadlines & TGEs', icon: '📆', url: '/calendar' },
      { type: 'page', id: 'calculator', title: 'Points ROI Calculator', subtitle: 'Valuation & Yield Modeling', icon: '🧮', url: '/calculator' },
      { type: 'page', id: 'quiz', title: 'Airdrop Hunter Certification Quiz', subtitle: 'Official Web3 Knowledge Test', icon: '🏆', url: '/academy/quiz' },
      { type: 'page', id: 'glossary', title: 'Web3 & Airdrop Glossary', subtitle: 'Encyclopedia of 50+ Terms', icon: '📚', url: '/glossary' },
      { type: 'page', id: 'ecosystems', title: 'Ecosystem Hubs', subtitle: 'Ethereum, Solana, Cosmos, L2s', icon: '🌐', url: '/ecosystems' },
      { type: 'page', id: 'news', title: 'News Hub', subtitle: 'Verified Market Alpha', icon: '📰', url: '/news' },
      { type: 'page', id: 'academy', title: 'Airdrop Academy', subtitle: '90 Web3 Masterclasses', icon: '🎓', url: '/academy' }
    ]
  };

  return new Response(JSON.stringify(searchIndex), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400'
    }
  });
}

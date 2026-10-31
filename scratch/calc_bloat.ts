import { airdrops } from '../src/data/airdrops';
import { newsArticles } from '../src/data/news';
import { academyArticles } from '../src/data/academy';

const searchIndex = {
  airdrops: airdrops.map(a => ({ type: 'airdrop', id: a.id, title: a.name, subtitle: a.category + ' • ' + a.reward, logo: a.logo, url: '/airdrop/' + a.id })),
  academy: academyArticles.map(a => ({ type: 'academy', id: a.slug, title: a.title, subtitle: 'Academy Masterclass', icon: '🎓', url: '/academy/' + a.slug })),
  news: newsArticles.map(n => ({ type: 'news', id: n.slug, title: n.title, subtitle: n.category + ' • News', icon: '📰', url: '/news/' + n.slug })),
};

const json = JSON.stringify(searchIndex);
console.log('Search index size:', Math.round(json.length / 1024), 'KB');
console.log('Multiplied by 987 pages:', Math.round((json.length * 987) / (1024 * 1024)), 'MB!');

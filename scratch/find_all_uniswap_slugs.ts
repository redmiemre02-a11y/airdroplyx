import { airdrops } from '../src/data/airdrops';
import { newsArticles } from '../src/data/news';

console.log('Airdrops with uniswap in id or name:');
airdrops.filter(a => a.id.includes('uniswap') || a.name.toLowerCase().includes('uniswap')).forEach(a => console.log(a.id, a.name));

console.log('News with uniswap in slug or title:');
newsArticles.filter(n => n.slug.includes('uniswap') || n.title.toLowerCase().includes('uniswap')).forEach(n => console.log(n.slug, n.title));

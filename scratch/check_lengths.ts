import { airdrops } from '../src/data/airdrops';
import { newsArticles } from '../src/data/news';

console.log('Total Airdrops Count:', airdrops.length);
console.log('Total News Articles Count:', newsArticles.length);

const lastAirdrops = airdrops.slice(-7);
console.log('Newly added airdrops:');
lastAirdrops.forEach((a, i) => {
  console.log(`${i + 1}. [${a.id}] ${a.name} (${a.category}) - ${a.steps.length} steps`);
});

const lastNews = newsArticles.slice(-15);
console.log('Newly added news count:', lastNews.length);
console.log('Latest news title:', lastNews[lastNews.length - 1].title);

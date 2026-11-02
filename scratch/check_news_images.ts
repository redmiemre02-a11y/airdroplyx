import { newsArticles } from '../src/data/news';

console.log('Total articles:', newsArticles.length);
const sample = newsArticles.slice(-5);
for (const s of sample) {
  console.log(s.slug, '->', s.image);
}

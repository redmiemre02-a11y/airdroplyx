import { newsArticles } from '../src/data/news';

console.log('Total news:', newsArticles.length);
console.log('Last 3 news:', newsArticles.slice(-3).map(n => ({ id: n.id, title: n.title, date: n.date })));

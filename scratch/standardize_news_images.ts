import fs from 'fs';
import path from 'path';

const newsPath = path.resolve('src/data/news.ts');
let content = fs.readFileSync(newsPath, 'utf8');

// Replace Unsplash URLs that have ?w=1200&q=80 (without h=675&fit=crop) with ?w=1200&h=675&fit=crop&q=80
const countBefore = (content.match(/\?w=1200&q=80/g) || []).length;
console.log('Unsplash images with ?w=1200&q=80:', countBefore);

content = content.replace(/\?w=1200&q=80/g, '?w=1200&h=675&fit=crop&q=80');

fs.writeFileSync(newsPath, content, 'utf8');
console.log('Updated news.ts! Standardized to ?w=1200&h=675&fit=crop&q=80 (Google News 16:9 compliant)');

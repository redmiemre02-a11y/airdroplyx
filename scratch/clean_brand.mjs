import fs from 'fs';
let content = fs.readFileSync('src/data/news.ts', 'utf8');
content = content.replace("Coinbase's high-speed", "the high-speed");
fs.writeFileSync('src/data/news.ts', content, 'utf8');
console.log('Cleaned Coinbase reference successfully!');

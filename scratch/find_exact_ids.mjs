import fs from 'fs';

const text = fs.readFileSync('src/data/airdrops.ts', 'utf8');
const babylon = [...text.matchAll(/"id":\s*"([^"]*babylon[^"]*)"/g)].map(m => m[1]);
const fuel = [...text.matchAll(/"id":\s*"([^"]*fuel[^"]*)"/g)].map(m => m[1]);
console.log('Babylon IDs:', babylon);
console.log('Fuel IDs:', fuel);

import { airdrops } from '../src/data/airdrops';

const testWords = [
  'swellchain', 'dusk', 'karrat', 'chainbase', 'orderly',
  'fluence', 'hyperbridge', 'spacemesh', 'subsquid', 'covalent',
  'superposition', 'hyperlend', 'hyperbeat', 'monadpad', 'dinari'
];

testWords.forEach(word => {
  const matches = airdrops.filter(a => a.id.toLowerCase().includes(word) || a.name.toLowerCase().includes(word));
  console.log(`${word}: ${matches.length === 0 ? 'CLEAN' : 'EXISTS: ' + matches.map(m => m.id).join(', ')}`);
});

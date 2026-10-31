import { airdrops } from '../src/data/airdrops';

const testWords = [
  'valantis', 'gasp', 'vanar', 'vultisig', 'dinari', 'hyperlend',
  'superposition', 'derive', 'kinto', 'astria', 'movement',
  'hyperbeat', 'ambient', 'monadpad', 'boba', 'talus',
  'tea', 'ritual', 'autonolas', 'gensyn', 'hyperlane'
];

testWords.forEach(word => {
  const matches = airdrops.filter(a => a.id.toLowerCase().includes(word) || a.name.toLowerCase().includes(word));
  console.log(`${word}: ${matches.length === 0 ? 'CLEAN' : 'EXISTS: ' + matches.map(m => m.id).join(', ')}`);
});

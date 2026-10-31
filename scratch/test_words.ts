import { airdrops } from '../src/data/airdrops';

const testWords = [
  'valantis', 'gasp', 'reya', 'towns', 'shardeum',
  'taraxa', 'vanar', 'vultisig', 'usual', 'dinari',
  'sentient', 'hyperlend', 'zeno'
];

testWords.forEach(word => {
  const matches = airdrops.filter(a => a.id.toLowerCase().includes(word) || a.name.toLowerCase().includes(word));
  console.log(`${word}: ${matches.length === 0 ? 'CLEAN' : 'EXISTS: ' + matches.map(m => m.id).join(', ')}`);
});

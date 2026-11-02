import { airdrops } from '../src/data/airdrops';

const terms = [
  'almanak',
  'sentient',
  'gaianet',
  'sahara',
  'vana',
  'nebra',
  'brevis',
  'heurist',
  'flock',
  'allora',
  'gensyn',
  'zero-gravity',
  '0g',
  'hyperbeat',
  'shardeum'
];

for (const t of terms) {
  const matches = airdrops.filter(a => a.id.toLowerCase().includes(t) || (a.name && a.name.toLowerCase().includes(t)));
  console.log(t.padEnd(16), matches.length > 0 ? `FOUND (${matches.length}): ` + matches.map(m => m.id).slice(0, 3).join(', ') : 'CLEAN');
}

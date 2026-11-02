import { airdrops } from '../src/data/airdrops';

const terms = [
  'zerobase',
  'valence',
  'althea',
  'succinct',
  'openvm',
  'espresso',
  'spire',
  'hylé',
  'hyle',
  'union',
  'ritual',
  'kroma',
  'morph',
  'pell',
  'vlayer',
  'lagrange',
  'eigenlayer',
  'hyperlane',
  'mitosis',
  'kura',
  'beraborrow',
  'smilee',
  'solayer',
  'nubit',
  'avail'
];

for (const t of terms) {
  const matches = airdrops.filter(a => a.id.toLowerCase().includes(t) || (a.name && a.name.toLowerCase().includes(t)));
  console.log(t.padEnd(15), matches.length > 0 ? `FOUND (${matches.length}): ` + matches.map(m => m.id).slice(0, 3).join(', ') : 'NONE - CLEAN');
}

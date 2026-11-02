import { airdrops } from '../src/data/airdrops';

const terms = [
  'zerobase',
  'valence',
  'openvm',
  'nexus',
  'fluent',
  'inco',
  'fairblock',
  'fhenix',
  'astria',
  'dill',
  'kakarot',
  'term-structure',
  'side-protocol',
  'lumia',
  'hypernative',
  'mind-network',
  'corn',
  'kura'
];

for (const t of terms) {
  const matches = airdrops.filter(a => a.id.toLowerCase().includes(t) || (a.name && a.name.toLowerCase().includes(t)));
  console.log(t.padEnd(16), matches.length > 0 ? `FOUND (${matches.length}): ` + matches.map(m => m.id).slice(0, 3).join(', ') : 'CLEAN');
}

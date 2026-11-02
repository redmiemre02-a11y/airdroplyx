import { airdrops } from '../src/data/airdrops';

const terms = [
  'alpen',
  'citrea',
  'botanix',
  'arch-network',
  'rooch',
  'tadle',
  'resolv',
  'usual',
  'stakestone',
  'kelp',
  'swell',
  'etherfi',
  'renzo',
  'puffer'
];

for (const t of terms) {
  const matches = airdrops.filter(a => a.id.toLowerCase().includes(t) || (a.name && a.name.toLowerCase().includes(t)));
  console.log(t.padEnd(16), matches.length > 0 ? `FOUND (${matches.length}): ` + matches.map(m => m.id).slice(0, 3).join(', ') : 'CLEAN');
}

import { airdrops } from '../src/data/airdrops';

const terms = ['satlayer', 'superposition', 'mezo', 'swell', 'abstract', 'avantis', 'zerobase', 'valence', 'hyperbolic', 'curvance'];
for (const t of terms) {
  const matches = airdrops.filter(a => a.id.includes(t) || (a.name && a.name.toLowerCase().includes(t)));
  console.log(t, 'matches:', matches.map(m => m.id));
}

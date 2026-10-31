import { airdrops } from '../src/data/airdrops';

const candidates = [
  'megaeth',
  'plume',
  'initia',
  'story',
  'corn',
  'nodepay',
  'swell',
  'movement',
  'babylon',
  'soneium',
  'redstone',
  'kakarot',
  'espresso',
  'fuel',
  'morph',
  'hemi',
  'abstract'
];

for (const c of candidates) {
  const match = airdrops.find(a => a.id.toLowerCase().includes(c) || a.name.toLowerCase().includes(c));
  console.log(`${c}: ${match ? match.id : 'AVAILABLE'}`);
}

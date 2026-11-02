import fs from 'fs';

const airdropsText = fs.readFileSync('src/data/airdrops.ts', 'utf8').toLowerCase();

const candidates = [
  'vanar',
  'fhenix',
  'astria',
  'fairblock',
  'citrea',
  'spire',
  'mind-network',
  'botanix',
  'tea-protocol',
  'almanak',
  'sentient',
  'dill',
  'solayer',
  'suilend',
  'kura',
  'fluent',
  'movement',
  'berachain',
  'monad',
  'story'
];

for (const c of candidates) {
  const found = airdropsText.includes(`"id": "${c}`) || airdropsText.includes(`"id": "${c}-`) || airdropsText.includes(`id: "${c}`);
  const mentions = (airdropsText.match(new RegExp(c, 'g')) || []).length;
  console.log(c.padEnd(20), 'Found ID?:', found, 'Mentions:', mentions);
}

import { airdrops } from '../src/data/airdrops';

const candidates = [
  'honeypot-finance',
  'smilee-finance',
  'lorenzo-protocol',
  'talent-protocol',
  'magma-story',
  'towns-protocol',
  'relay-bridge',
  'degen-distillery',
  'beraborrow',
  'aquabera',
  'yeet-berachain',
  'privy-protocol'
];

for (const c of candidates) {
  const match = airdrops.find(a => a.id.toLowerCase().includes(c) || a.name.toLowerCase().includes(c));
  if (!match) {
    console.log(`AVAILABLE: ${c}`);
  } else {
    console.log(`EXISTS: ${c} -> ${match.id}`);
  }
}

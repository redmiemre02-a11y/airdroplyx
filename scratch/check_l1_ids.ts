import { airdrops } from '../src/data/airdrops';

const riskyDirectIds = [
  'bitcoin',
  'ethereum',
  'solana',
  'tether',
  'usdt',
  'usdc',
  'ripple',
  'xrp',
  'cardano',
  'dogecoin'
];

for (const a of airdrops) {
  const id = a.id.toLowerCase();
  for (const r of riskyDirectIds) {
    if (id === r) {
      console.log('EXACT MATCH RISKY ID:', a.id, a.name);
    }
  }
}

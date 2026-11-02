import { airdrops } from '../src/data/airdrops';

const last7 = airdrops.slice(-7);
for (const a of last7) {
  console.log(a.id, a.logo);
}

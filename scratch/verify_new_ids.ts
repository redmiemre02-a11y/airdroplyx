import { airdrops } from '../src/data/airdrops';

const newIds = [
  '0g-labs',
  'zerobase-prover',
  'valence-protocol',
  'openvm-network',
  'nebra-zk',
  'rooch-network',
  'term-structure-protocol',
  'tadle-market'
];

for (const id of newIds) {
  const match = airdrops.find(a => a.id === id);
  console.log(id, match ? 'DUPLICATE' : 'UNIQUE - OK');
}

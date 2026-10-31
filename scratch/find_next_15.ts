import { airdrops } from '../src/data/airdrops';

const existingIds = new Set(airdrops.map(a => a.id));

const selected15 = [
  'space-and-time-db',
  'talus-network',
  'astria-sequencer',
  'almanak-ai',
  'renegade-fi',
  'hyperlane-interchain-l3',
  'tars-ai-protocol',
  'alvara-protocol',
  'zeno-exchange-perps',
  'reya-network-perps',
  'etherfi-cash',
  'dill-network-da',
  'hemi-network-miner',
  'superform-safari-yield',
  'zerolend-airdrop'
];

let allGood = true;
for (const id of selected15) {
  if (existingIds.has(id)) {
    console.error(`ID already exists: ${id}`);
    allGood = false;
  }
}

if (allGood) {
  console.log('✅ ALL 15 SELECTED IDS ARE 100% UNIQUE AND AVAILABLE!');
}

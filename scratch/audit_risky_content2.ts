import { airdrops } from '../src/data/airdrops';

const moreBrands = [
  'coinbase',
  'kraken',
  'bybit',
  'okx',
  'kucoin',
  'gateio',
  'bitget',
  'mexc',
  'bingx',
  'rabby',
  'rainbow',
  'argent',
  'braavos',
  'uniswap',
  'pancakeswap',
  'balancer',
  'synthetix',
  'chainlink'
];

const flagged = [];

for (const a of airdrops) {
  const idLower = a.id.toLowerCase();
  const nameLower = a.name.toLowerCase();
  
  for (const b of moreBrands) {
    if (idLower === b || idLower.startsWith(b + '-') || idLower.endsWith('-' + b) || nameLower === b) {
      flagged.push({ id: a.id, name: a.name, matchedBrand: b });
      break;
    }
  }
}

console.log(`Found ${flagged.length} more branded airdrops:`);
console.log(JSON.stringify(flagged, null, 2));

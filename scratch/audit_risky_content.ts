import { airdrops } from '../src/data/airdrops';

const highRiskBrands = [
  'metamask',
  'binance',
  'coinbase',
  'opensea',
  'phantom',
  'aave',
  'compound',
  'makerdao',
  'curve',
  'sushiswap',
  'yearn',
  '1inch',
  'dydx',
  'ledger',
  'trezor',
  'paypal',
  'trust-wallet',
  'trustwallet',
  'tether',
  'circle',
  'apple',
  'google',
  'microsoft',
  'amazon',
  'x-corp',
  'twitter',
  'revolut'
];

console.log('Auditing', airdrops.length, 'airdrops for brand protection triggers...');

const flagged = [];

for (const a of airdrops) {
  const idLower = a.id.toLowerCase();
  const nameLower = a.name.toLowerCase();
  
  for (const b of highRiskBrands) {
    if (idLower === b || idLower.startsWith(b + '-') || idLower.endsWith('-' + b) || nameLower === b) {
      flagged.push({ id: a.id, name: a.name, matchedBrand: b, category: a.category });
      break;
    }
  }
}

console.log(`Found ${flagged.length} high-risk branded airdrops:`);
console.log(JSON.stringify(flagged, null, 2));

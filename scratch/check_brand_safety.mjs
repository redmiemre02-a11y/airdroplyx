import fs from 'fs';
import path from 'path';

const content = fs.readFileSync(path.resolve('src/data/airdrops.ts'), 'utf8');
const idMatches = [...content.matchAll(/"id":\s*"([^"]+)"/g)].map(m => m[1]);

const terms = [
  'ambient',
  'hyperbeat',
  'kura',
  'dmail',
  'bouncebit',
  'layerzero',
  'wormhole',
  'axelar',
  'celer',
  'connext',
  'debridge',
  'everclear',
  'symbiosis',
  'stargate',
  'across',
  'synapse',
  'squid',
  'hop',
  'hyphen',
  'biconomy',
  'gelato',
  'safe',
  'zerion',
  'rabby',
  'phantom',
  'backpack',
  'solflare',
  'rainbow',
  'glow',
  'okx',
  'binance',
  'coinbase',
  'bybit',
  'bitget',
  'gate',
  'mexc',
  'kucoin',
  'kraken',
  'bitfinex',
  'gemini'
];

for (const t of terms) {
  const matches = idMatches.filter(id => id.includes(t));
  console.log(t.padEnd(15), matches.length > 0 ? `EXISTS (${matches.length})` : 'CLEAN - AVAILABLE');
}

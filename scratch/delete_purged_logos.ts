import fs from 'fs';
import path from 'path';

const logosDir = path.resolve('public/images/airdrops');

const purgeList = [
  'binance-moonbix', 'okx-racer', 'bitget-wallet', 'mexc', 'bingx',
  'metamask-snaps', 'phantom', 'phantom-wallet', 'opensea', 'rainbow-swap',
  'rainbow-wallet', 'rabby-wallet', 'argent-wallet', 'braavos-wallet',
  'aave-protocol', 'compound-finance', 'makerdao-sky', 'curve-finance',
  'yearn-finance', 'sushiswap', '1inch-network', 'dydx', 'pancakeswap-dex',
  'synthetix', 'balancer', 'bancor-network', 'loopring-l2',
  'cardano-foundation', 'polkadot-network', 'avalanche-network',
  'zcash-network', 'monero-project', 'dash-network', 'waves-blockchain',
  'ontology-network', 'qtum-chain', 'ravencoin-blockchain', 'decred-network',
  'symbol-blockchain', 'ergo-platform', 'beam-privacy', 'grin-mimblewimble',
  'komodo-platform', 'horizen-eon', 'kusama-network'
];

let deletedCount = 0;
for (const p of purgeList) {
  for (const ext of ['.svg', '.png', '.jpg', '.webp']) {
    const filePath = path.join(logosDir, p + ext);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log('Deleted logo:', p + ext);
      deletedCount++;
    }
  }
}
console.log('Total purged logos deleted:', deletedCount);

import fs from 'fs';
import path from 'path';

const academyPath = path.resolve('src/data/academy.ts');
let content = fs.readFileSync(academyPath, 'utf8');

content = content
  .replace(/MetaMask & Rabby/g, 'EVM Web3 Wallets')
  .replace(/MetaMask and Rabby Wallet/g, 'Self-custodial Web3 Wallets')
  .replace(/MetaMask/g, 'Web3 Wallet')
  .replace(/Rabby Wallet/g, 'Self-custodial Wallet')
  .replace(/Binance or Coinbase/g, 'centralized crypto exchanges')
  .replace(/Binance or OKX/g, 'centralized exchanges')
  .replace(/Aevo or Binance/g, 'Aevo or other Perp DEXs');

fs.writeFileSync(academyPath, content, 'utf8');
console.log('Sanitized academy.ts from brand references');

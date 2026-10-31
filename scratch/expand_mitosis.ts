import fs from 'fs';
import path from 'path';
import { newsArticles } from '../src/data/news';

const target = newsArticles.find(n => n.slug === 'mitosis-expands-modular-liquidity-vaults-crossing-250m-cross-chain-deposits');
if (target) {
  const extra = `\n\n## Cross-Chain Security & Formal Audit Guarantees\n\nSecurity remains the top priority for modular asset management. Mitosis smart contract vaults have undergone rigorous formal verification and multiple independent security audits by top tier blockchain security firms. By employing timelock execution windows and automated circuit breakers, Mitosis shields user capital from sudden cross-chain bridge failure cascades and oracle manipulation attacks across all connected networks.`;
  if (!target.content.includes('Cross-Chain Security & Formal Audit Guarantees')) {
    target.content = target.content.trim() + extra;
    const newsPath = path.resolve('src/data/news.ts');
    fs.writeFileSync(newsPath, 'export const newsArticles: NewsArticle[] = ' + JSON.stringify(newsArticles, null, 2) + ';\n', 'utf8');
    console.log('Expanded Mitosis article successfully!');
  }
}

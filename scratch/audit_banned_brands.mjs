import fs from 'fs';
import path from 'path';

const projectRoot = 'C:\\Users\\cigo\\.gemini\\antigravity\\scratch\\airdroplyx';
const srcDir = path.join(projectRoot, 'src');

const bannedTerms = [
  'uniswap',
  'metamask',
  'coinbase',
  'binance',
  'opensea',
  'trust wallet'
];

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      scanDir(fullPath);
    } else if (file.endsWith('.ts') || file.endsWith('.astro') || file.endsWith('.js') || file.endsWith('.json')) {
      const content = fs.readFileSync(fullPath, 'utf8').toLowerCase();
      for (const term of bannedTerms) {
        if (content.includes(term)) {
          // Check context
          const lines = content.split('\n');
          lines.forEach((line, idx) => {
            if (line.includes(term)) {
              console.log(`[ALERT] ${term.toUpperCase()} in ${path.relative(projectRoot, fullPath)}:${idx + 1}`);
              console.log(`   Line: ${line.trim().substring(0, 120)}`);
            }
          });
        }
      }
    }
  }
}

console.log('--- Scanning src/ for banned brand trademarks ---');
scanDir(srcDir);
console.log('--- Scan finished ---');

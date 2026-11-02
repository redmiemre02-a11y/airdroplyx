import fs from 'fs';
import path from 'path';

const projectRoot = 'C:\\Users\\cigo\\.gemini\\antigravity\\scratch\\airdroplyx';
const airdropsPath = path.join(projectRoot, 'src', 'data', 'airdrops.ts');

const content = fs.readFileSync(airdropsPath, 'utf8');

const logoMatches = [...content.matchAll(/"logo":\s*"([^"]+)"/g)].map(m => m[1]);
console.log('Total airdrops found:', logoMatches.length);

let missing = 0;
for (const logo of logoMatches) {
  const logoRel = logo.replace(/^\//, '');
  const full = path.join(projectRoot, 'public', logoRel);
  if (!fs.existsSync(full)) {
    console.log(`Missing logo file: ${logoRel}`);
    missing++;
  }
}

if (missing === 0) {
  console.log(`✓ All ${logoMatches.length} airdrops have a verified logo file in public/!`);
} else {
  console.log(`Found ${missing} missing logos!`);
}

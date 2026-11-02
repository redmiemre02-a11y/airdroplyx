import fs from 'fs';
import path from 'path';

const projectRoot = 'C:\\Users\\cigo\\.gemini\\antigravity\\scratch\\airdroplyx';
const airdropsDir = path.join(projectRoot, 'public', 'images', 'airdrops');

// Copy aliases
const copies = [
  ['infrared.svg', 'infrared-finance.svg'],
  ['mitosis.svg', 'mitosis-defi.svg'],
  ['curvance.svg', 'curvance-monad.svg'],
  ['ambient.svg', 'ambient-monad.svg'],
  ['goplus-security.svg', 'goplus-secware.svg'],
  ['myshell.svg', 'myshell-ai.svg']
];

for (const [src, dest] of copies) {
  const srcPath = path.join(airdropsDir, src);
  const destPath = path.join(airdropsDir, dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${src} -> ${dest}`);
  }
}

// Generate shogun-fi.svg
const shogunSvg = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" rx="24" fill="#0E0F14"/>
  <circle cx="50" cy="50" r="36" fill="url(#shogun_glow)" fill-opacity="0.3"/>
  <!-- Stylized Shogun Helmet / Blade Crest -->
  <path d="M50 18L32 38L38 48L50 36L62 48L68 38L50 18Z" fill="url(#shogun_gold)"/>
  <path d="M26 46L50 78L74 46L64 46L50 64L36 46L26 46Z" fill="url(#shogun_red)"/>
  <circle cx="50" cy="48" r="6" fill="#FFF"/>
  <defs>
    <linearGradient id="shogun_gold" x1="32" y1="18" x2="68" y2="48" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FCD34D"/>
      <stop offset="1" stop-color="#D97706"/>
    </linearGradient>
    <linearGradient id="shogun_red" x1="26" y1="46" x2="74" y2="78" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EF4444"/>
      <stop offset="1" stop-color="#991B1B"/>
    </linearGradient>
    <radialGradient id="shogun_glow" cx="50" cy="50" r="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EF4444"/>
      <stop offset="1" stop-color="#0E0F14" stop-opacity="0"/>
    </radialGradient>
  </defs>
</svg>`;

fs.writeFileSync(path.join(airdropsDir, 'shogun-fi.svg'), shogunSvg, 'utf8');
console.log('Created shogun-fi.svg');

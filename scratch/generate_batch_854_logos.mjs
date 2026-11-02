import fs from 'fs';
import path from 'path';

const svgOutputDir = path.resolve('public/images/airdrops');
if (!fs.existsSync(svgOutputDir)) {
  fs.mkdirSync(svgOutputDir, { recursive: true });
}

const svgIcons = {
  'kura-protocol': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <defs>
    <linearGradient id="kuraGrad" x1="20" y1="20" x2="108" y2="108" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#06B6D4" />
      <stop offset="50%" stop-color="#3B82F6" />
      <stop offset="100%" stop-color="#1D4ED8" />
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="#061224" />
  <circle cx="64" cy="64" r="42" stroke="url(#kuraGrad)" stroke-width="3" stroke-dasharray="6 4" />
  <!-- Kura Liquid Knot / Cross-Rollup Infinity Ring -->
  <path d="M46 50C46 42 54 36 64 36C74 36 82 42 82 50C82 62 46 66 46 78C46 86 54 92 64 92C74 92 82 86 82 78" stroke="url(#kuraGrad)" stroke-width="8" stroke-linecap="round" />
  <circle cx="64" cy="64" r="5" fill="#38BDF8" />
</svg>`,

  'spire-based-rollup': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <defs>
    <linearGradient id="spireGrad" x1="20" y1="20" x2="108" y2="108" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#F43F5E" />
      <stop offset="50%" stop-color="#E11D48" />
      <stop offset="100%" stop-color="#9F1239" />
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="#1A060E" />
  <!-- Spire Tower / Ethereum L1 Based Tower -->
  <circle cx="64" cy="64" r="42" stroke="url(#spireGrad)" stroke-width="3" />
  <polygon points="64,28 78,88 50,88" fill="url(#spireGrad)" />
  <polygon points="64,36 73,88 55,88" fill="#FDA4AF" />
  <line x1="36" y1="94" x2="92" y2="94" stroke="#FB7185" stroke-width="4" stroke-linecap="round" />
  <circle cx="64" cy="28" r="4" fill="#FFFFFF" />
</svg>`,

  'dill-da-network': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <defs>
    <linearGradient id="dillGrad" x1="20" y1="20" x2="108" y2="108" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#10B981" />
      <stop offset="50%" stop-color="#059669" />
      <stop offset="100%" stop-color="#047857" />
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="#041A13" />
  <!-- Dill Data Grid / Sampling Cubes -->
  <circle cx="64" cy="64" r="42" stroke="url(#dillGrad)" stroke-width="3" stroke-dasharray="6 6" />
  <rect x="42" y="42" width="18" height="18" rx="4" fill="url(#dillGrad)" />
  <rect x="68" y="42" width="18" height="18" rx="4" fill="#34D399" />
  <rect x="42" y="68" width="18" height="18" rx="4" fill="#34D399" />
  <rect x="68" y="68" width="18" height="18" rx="4" fill="url(#dillGrad)" />
  <circle cx="64" cy="64" r="6" fill="#A7F3D0" />
</svg>`,

  'fairblock-confidential': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <defs>
    <linearGradient id="fairGrad" x1="20" y1="20" x2="108" y2="108" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#8B5CF6" />
      <stop offset="50%" stop-color="#7C3AED" />
      <stop offset="100%" stop-color="#5B21B6" />
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="#120A24" />
  <!-- Fairblock Shield & Encrypted Lock Core -->
  <circle cx="64" cy="64" r="42" stroke="url(#fairGrad)" stroke-width="3" />
  <path d="M64 34L88 46V66C88 80 78 92 64 96C50 92 40 80 40 66V46L64 34Z" fill="url(#fairGrad)" />
  <circle cx="64" cy="62" r="7" fill="#C4B5FD" />
  <rect x="61" y="62" width="6" height="12" rx="2" fill="#C4B5FD" />
</svg>`,

  'fhenix-coprocessor': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <defs>
    <linearGradient id="fheGrad" x1="20" y1="20" x2="108" y2="108" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#F59E0B" />
      <stop offset="50%" stop-color="#EA580C" />
      <stop offset="100%" stop-color="#C2410C" />
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="#1C0F05" />
  <!-- Fhenix Fire Bird / Coprocessor Wings -->
  <circle cx="64" cy="64" r="42" stroke="url(#fheGrad)" stroke-width="3" stroke-dasharray="8 4" />
  <path d="M64 36L74 58L96 64L80 78L84 96L64 86L44 96L48 78L32 64L54 58L64 36Z" fill="url(#fheGrad)" />
  <circle cx="64" cy="66" r="8" fill="#FEF3C7" />
</svg>`,

  'astria-shared-network': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <defs>
    <linearGradient id="astriaGrad" x1="20" y1="20" x2="108" y2="108" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#6366F1" />
      <stop offset="50%" stop-color="#4F46E5" />
      <stop offset="100%" stop-color="#3730A3" />
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="#0C0E22" />
  <!-- Astria Constellation Nodes / Sequencer Core -->
  <circle cx="64" cy="64" r="42" stroke="url(#astriaGrad)" stroke-width="3" />
  <circle cx="64" cy="38" r="8" fill="#A5B4FC" />
  <circle cx="42" cy="76" r="8" fill="#A5B4FC" />
  <circle cx="86" cy="76" r="8" fill="#A5B4FC" />
  <line x1="64" y1="38" x2="42" y2="76" stroke="url(#astriaGrad)" stroke-width="4" />
  <line x1="64" y1="38" x2="86" y2="76" stroke="url(#astriaGrad)" stroke-width="4" />
  <line x1="42" y1="76" x2="86" y2="76" stroke="url(#astriaGrad)" stroke-width="4" />
  <circle cx="64" cy="64" r="12" fill="url(#astriaGrad)" />
  <circle cx="64" cy="64" r="6" fill="#FFFFFF" />
</svg>`,

  'citrea-bitcoin-testnet': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <defs>
    <linearGradient id="citreaGrad" x1="20" y1="20" x2="108" y2="108" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#F97316" />
      <stop offset="50%" stop-color="#EA580C" />
      <stop offset="100%" stop-color="#D97706" />
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="#1C1103" />
  <!-- Citrea Bitcoin Orange Citrus / ZK Geometric Slice -->
  <circle cx="64" cy="64" r="42" stroke="url(#citreaGrad)" stroke-width="4" />
  <circle cx="64" cy="64" r="28" fill="url(#citreaGrad)" />
  <path d="M64 40V88M40 64H88M48 48L80 80M48 80L80 48" stroke="#1C1103" stroke-width="3" />
  <circle cx="64" cy="64" r="10" fill="#FEF08A" />
</svg>`,

  'mind-network-restaking': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <defs>
    <linearGradient id="mindGrad" x1="20" y1="20" x2="108" y2="108" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0EA5E9" />
      <stop offset="50%" stop-color="#0284C7" />
      <stop offset="100%" stop-color="#0369A1" />
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="#031522" />
  <!-- Mind Brain Waves / Synaptic Neural Core -->
  <circle cx="64" cy="64" r="42" stroke="url(#mindGrad)" stroke-width="3" stroke-dasharray="6 4" />
  <path d="M42 64C42 50 52 40 64 40C76 40 86 50 86 64C86 78 76 88 64 88C52 88 42 78 42 64Z" stroke="url(#mindGrad)" stroke-width="4" />
  <path d="M52 64C52 56 58 50 64 50C70 50 76 56 76 64C76 72 70 78 64 78C58 78 52 72 52 64Z" fill="url(#mindGrad)" />
  <circle cx="64" cy="64" r="5" fill="#BAE6FD" />
</svg>`
};

for (const [filename, content] of Object.entries(svgIcons)) {
  const filePath = path.join(svgOutputDir, `${filename}.svg`);
  fs.writeFileSync(filePath, content.trim(), 'utf8');
}
console.log(`Generated ${Object.keys(svgIcons).length} new SVG logos in ${svgOutputDir}`);

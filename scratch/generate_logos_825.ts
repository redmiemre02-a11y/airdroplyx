import fs from 'fs';
import path from 'path';

const logos: Record<string, string> = {
  'initia-network.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="ini-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F43F5E"/>
      <stop offset="50%" stop-color="#FB7185"/>
      <stop offset="100%" stop-color="#FDA4AF"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#09090B"/>
  <!-- Interwoven Ribbon Node -->
  <path d="M25 50 C25 32 45 32 50 50 C55 68 75 68 75 50 C75 32 55 32 50 50 C45 68 25 68 25 50 Z" fill="none" stroke="url(#ini-grad)" stroke-width="6" stroke-linecap="round"/>
  <circle cx="50" cy="50" r="5" fill="#ffffff"/>
</svg>`,

  'megaeth-realtime-evm.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="meg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#A855F7"/>
      <stop offset="50%" stop-color="#EC4899"/>
      <stop offset="100%" stop-color="#3B82F6"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#030712"/>
  <!-- MegaETH Speed Diamond -->
  <polygon points="50,16 78,50 50,84 22,50" fill="url(#meg-grad)"/>
  <polygon points="50,26 70,50 50,74 30,50" fill="#030712"/>
  <polygon points="50,36 60,50 50,64 40,50" fill="#ffffff"/>
</svg>`,

  'morph-l2-consumer.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="mor-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10B981"/>
      <stop offset="100%" stop-color="#059669"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#022C22"/>
  <!-- Morph M-Loop -->
  <path d="M26 68 V36 C26 26 40 26 50 42 C60 26 74 26 74 36 V68" fill="none" stroke="url(#mor-grad)" stroke-width="7" stroke-linecap="round"/>
  <circle cx="50" cy="52" r="5" fill="#34D399"/>
</svg>`,

  'kinto-network.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="kin-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3B82F6"/>
      <stop offset="100%" stop-color="#1D4ED8"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#0F172A"/>
  <!-- Insured Institutional Shield -->
  <path d="M50 18 L76 28 V52 C76 68 50 82 50 82 C50 82 24 68 24 52 V28 Z" fill="none" stroke="url(#kin-grad)" stroke-width="4.5"/>
  <path d="M42 48 L48 54 L60 40" stroke="#60A5FA" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`,

  'nubit-bitcoin-da.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="nub-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#D97706"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#1C1917"/>
  <!-- Nubit DA Matrix Blocks -->
  <rect x="25" y="25" width="20" height="20" rx="4" fill="url(#nub-grad)"/>
  <rect x="55" y="25" width="20" height="20" rx="4" fill="#78350F"/>
  <rect x="25" y="55" width="20" height="20" rx="4" fill="#78350F"/>
  <rect x="55" y="55" width="20" height="20" rx="4" fill="url(#nub-grad)"/>
  <circle cx="50" cy="50" r="5" fill="#FDE68A"/>
</svg>`,

  'superstate-tokenized-tbills.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="sup-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#0369A1"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#082F49"/>
  <!-- Superstate Pillars of Capital -->
  <rect x="25" y="42" width="10" height="32" rx="2" fill="url(#sup-grad)"/>
  <rect x="45" y="32" width="10" height="42" rx="2" fill="#38BDF8"/>
  <rect x="65" y="24" width="10" height="50" rx="2" fill="#BAE6FD"/>
</svg>`,

  'ondo-finance-rwa.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="ond-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#1E40AF"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#0B132B"/>
  <!-- Ondo Concentric Vault Arcs -->
  <circle cx="50" cy="50" r="28" stroke="url(#ond-grad)" stroke-width="4" fill="none"/>
  <circle cx="50" cy="50" r="18" stroke="#60A5FA" stroke-width="3" fill="none"/>
  <circle cx="50" cy="50" r="8" fill="#ffffff"/>
</svg>`,

  'succinct-labs.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="suc-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8B5CF6"/>
      <stop offset="100%" stop-color="#6D28D9"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#1E1B4B"/>
  <!-- SP1 zkVM Recursive Prover Cube -->
  <polygon points="50,22 76,37 76,67 50,82 24,67 24,37" fill="url(#suc-grad)"/>
  <circle cx="50" cy="52" r="9" fill="#EDE9FE"/>
</svg>`,

  'redstone-oracles-network.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="red-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EF4444"/>
      <stop offset="100%" stop-color="#B91C1C"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#450A0A"/>
  <!-- RedStone Crystal Gem -->
  <polygon points="50,18 78,38 68,82 32,82 22,38" fill="url(#red-grad)"/>
  <polygon points="50,24 72,40 64,76 36,76 28,40" fill="#DC2626"/>
  <circle cx="50" cy="50" r="7" fill="#FCA5A5"/>
</svg>`,

  'zero-network-zksync.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="zer-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00D2FF"/>
      <stop offset="100%" stop-color="#0066FF"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#020617"/>
  <!-- Zerion Zero Ring -->
  <circle cx="50" cy="50" r="30" stroke="url(#zer-grad)" stroke-width="6" fill="none"/>
  <circle cx="50" cy="50" r="14" fill="url(#zer-grad)"/>
</svg>`,

  'reya-network-trading.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="rey-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14B8A6"/>
      <stop offset="100%" stop-color="#0F766E"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#042F2E"/>
  <!-- Reya Trading Pulse Wave -->
  <path d="M22 62 L40 38 L54 52 L78 28" stroke="url(#rey-grad)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="78" cy="28" r="6" fill="#5EEAD4"/>
</svg>`,

  'tars-ai-solana.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="tar-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#9945FF"/>
      <stop offset="100%" stop-color="#14F195"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#18181B"/>
  <!-- Tars AI Monolith Blocks -->
  <rect x="26" y="24" width="12" height="52" rx="3" fill="#9945FF"/>
  <rect x="44" y="24" width="12" height="52" rx="3" fill="url(#tar-grad)"/>
  <rect x="62" y="24" width="12" height="52" rx="3" fill="#14F195"/>
</svg>`,

  'chainbase-omnichain-ai.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="cha-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06B6D4"/>
      <stop offset="100%" stop-color="#3B82F6"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#0B132B"/>
  <!-- Chainbase Interlinked Data Cylinders -->
  <ellipse cx="50" cy="30" rx="26" ry="10" fill="url(#cha-grad)"/>
  <ellipse cx="50" cy="50" rx="26" ry="10" fill="#2563EB"/>
  <ellipse cx="50" cy="70" rx="26" ry="10" fill="#1D4ED8"/>
</svg>`,

  'talus-network-move.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="tal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E11D48"/>
      <stop offset="100%" stop-color="#BE123C"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#1C1917"/>
  <!-- Move Autonomous Agent Core -->
  <polygon points="50,20 74,38 64,74 36,74 26,38" fill="url(#tal-grad)"/>
  <circle cx="50" cy="48" r="8" fill="#ffffff"/>
</svg>`,

  'almanak-ai-defi.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="alm-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#EA580C"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#18181B"/>
  <!-- Quant Financial Curve -->
  <path d="M24 72 Q50 65 50 48 T76 24" stroke="url(#alm-grad)" stroke-width="5" stroke-linecap="round" fill="none"/>
  <circle cx="24" cy="72" r="5" fill="#F59E0B"/>
  <circle cx="50" cy="48" r="5" fill="#F97316"/>
  <circle cx="76" cy="24" r="6" fill="#FDE68A"/>
</svg>`
};

const outputDir = path.resolve('public/images/airdrops');
for (const [filename, svg] of Object.entries(logos)) {
  const filePath = path.join(outputDir, filename);
  fs.writeFileSync(filePath, svg.trim(), 'utf8');
  console.log(`Generated: ${filePath}`);
}
console.log('All 15 SVG logos generated successfully!');

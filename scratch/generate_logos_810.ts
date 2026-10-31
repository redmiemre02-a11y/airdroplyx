import fs from 'fs';
import path from 'path';

const logos: Record<string, string> = {
  'bouncebit-cefi-defi.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="bb-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F59E0B"/>
      <stop offset="50%" stop-color="#EA580C"/>
      <stop offset="100%" stop-color="#B45309"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#1C1917"/>
  <!-- Bouncing Bitcoin Ring -->
  <circle cx="50" cy="50" r="32" stroke="url(#bb-grad)" stroke-width="5" fill="none"/>
  <circle cx="50" cy="50" r="16" fill="url(#bb-grad)"/>
  <path d="M42 38 H54 C58 38 61 41 61 45 C61 48 59 50 56 51 C60 52 62 55 62 59 C62 64 58 67 53 67 H42 Z" fill="#ffffff"/>
</svg>`,

  'mezo-network-btc.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="mez-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E11D48"/>
      <stop offset="100%" stop-color="#9333EA"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#0F172A"/>
  <!-- Mezo M-Monogram with Bitcoin Shield -->
  <path d="M25 72 V32 L50 54 L75 32 V72" stroke="url(#mez-grad)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="50" cy="24" r="5" fill="#F43F5E"/>
</svg>`,

  'plume-network-rwa.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="plu-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06B6D4"/>
      <stop offset="50%" stop-color="#3B82F6"/>
      <stop offset="100%" stop-color="#6366F1"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#030712"/>
  <!-- Feather Plume Vector -->
  <path d="M75 22 C45 22 25 55 25 78 C42 78 75 60 75 22 Z" fill="url(#plu-grad)"/>
  <path d="M25 78 L55 45" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
</svg>`,

  'sonic-labs-svm.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="son-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00F0FF"/>
      <stop offset="100%" stop-color="#0066FF"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#050B14"/>
  <!-- Sonic Fast Lightning Ring -->
  <path d="M52 18 L28 54 H48 L44 82 L72 44 H52 Z" fill="url(#son-grad)"/>
</svg>`,

  'hemi-network-pop.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="hem-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F97316"/>
      <stop offset="100%" stop-color="#6366F1"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#18181B"/>
  <!-- Dual Hemi-Spheres (BTC + EVM) -->
  <path d="M50 20 A30 30 0 0 0 50 80 Z" fill="#F97316"/>
  <path d="M50 20 A30 30 0 0 1 50 80 Z" fill="#6366F1"/>
  <circle cx="50" cy="50" r="10" fill="#ffffff"/>
</svg>`,

  'story-foundation-ip.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="sto-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E11D48"/>
      <stop offset="50%" stop-color="#F43F5E"/>
      <stop offset="100%" stop-color="#FDA4AF"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#18181B"/>
  <!-- Open Book & IP Quill -->
  <path d="M22 68 C35 60 45 62 50 72 C55 62 65 60 78 68 V32 C65 24 55 26 50 36 C45 26 35 24 22 32 Z" fill="url(#sto-grad)"/>
</svg>`,

  'swell-network-dao.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="swe-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#38BDF8"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#082F49"/>
  <!-- Ocean Wave Crest -->
  <path d="M20 65 Q35 40 50 65 T80 65 C80 40 65 30 50 45 C35 30 20 45 20 65 Z" fill="url(#swe-grad)"/>
  <circle cx="50" cy="28" r="6" fill="#38BDF8"/>
</svg>`,

  'mitosis-expedition.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="mit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8B5CF6"/>
      <stop offset="100%" stop-color="#EC4899"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#2E1065"/>
  <!-- Cellular Mitosis Rings -->
  <circle cx="38" cy="50" r="18" fill="none" stroke="url(#mit-grad)" stroke-width="4.5"/>
  <circle cx="62" cy="50" r="18" fill="none" stroke="url(#mit-grad)" stroke-width="4.5"/>
  <circle cx="50" cy="50" r="6" fill="#ffffff"/>
</svg>`,

  'avalon-finance-btc.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="ava-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EAB308"/>
      <stop offset="100%" stop-color="#CA8A04"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#422006"/>
  <!-- Avalon Castle Tower & Coin -->
  <path d="M30 72 V45 L50 25 L70 45 V72 Z" fill="none" stroke="url(#ava-grad)" stroke-width="4.5"/>
  <circle cx="50" cy="54" r="10" fill="url(#ava-grad)"/>
</svg>`,

  'zeno-exchange-dex.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="zen-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06B6D4"/>
      <stop offset="100%" stop-color="#0891B2"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#083344"/>
  <!-- Zeno Z-Arrow Curve -->
  <path d="M26 30 H74 L32 70 H74" stroke="url(#zen-grad)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`,

  'kinza-finance-bnb.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="kin-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FACC15"/>
      <stop offset="100%" stop-color="#EAB308"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#1E1B4B"/>
  <!-- Kinza Vault K -->
  <circle cx="50" cy="50" r="30" stroke="#FACC15" stroke-width="3" fill="none"/>
  <path d="M38 32 V68 M38 50 L58 32 M38 50 L60 68" stroke="url(#kin-grad)" stroke-width="5" stroke-linecap="round"/>
</svg>`,

  'kernel-dao-restaking.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="ker-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10B981"/>
      <stop offset="100%" stop-color="#047857"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#022C22"/>
  <!-- Kernel Shield Seed -->
  <path d="M50 20 C65 30 75 50 50 80 C25 50 35 30 50 20 Z" fill="url(#ker-grad)"/>
  <circle cx="50" cy="46" r="6" fill="#A7F3D0"/>
</svg>`,

  'hyperbridge-coprocessor.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="hyb-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E6007A"/>
      <stop offset="100%" stop-color="#7928CA"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#111827"/>
  <!-- ZK Coprocessor Hyper-Bridge -->
  <path d="M22 65 C40 35 60 35 78 65" stroke="url(#hyb-grad)" stroke-width="5" fill="none" stroke-linecap="round"/>
  <circle cx="22" cy="65" r="5" fill="#E6007A"/>
  <circle cx="50" cy="42" r="6" fill="#ffffff"/>
  <circle cx="78" cy="65" r="5" fill="#7928CA"/>
</svg>`,

  'privasea-ai-fhe.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="pri-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6366F1"/>
      <stop offset="100%" stop-color="#4F46E5"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#0F172A"/>
  <!-- FHE Iris Biometric Shield -->
  <circle cx="50" cy="50" r="26" stroke="#818CF8" stroke-width="3" fill="none"/>
  <circle cx="50" cy="50" r="14" stroke="#A5B4FC" stroke-width="2.5" stroke-dasharray="4 3" fill="none"/>
  <circle cx="50" cy="50" r="6" fill="url(#pri-grad)"/>
</svg>`,

  'alvara-protocol-etf.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="alv-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3B82F6"/>
      <stop offset="50%" stop-color="#1D4ED8"/>
      <stop offset="100%" stop-color="#1E3A8A"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#0B132B"/>
  <!-- ERC-7621 ETF Basket Cube -->
  <polygon points="50,22 76,37 76,67 50,82 24,67 24,37" fill="none" stroke="url(#alv-grad)" stroke-width="3.5"/>
  <polyline points="24,37 50,52 76,37" stroke="url(#alv-grad)" stroke-width="3.5" fill="none"/>
  <line x1="50" y1="52" x2="50" y2="82" stroke="url(#alv-grad)" stroke-width="3.5"/>
</svg>`
};

const outputDir = path.resolve('public/images/airdrops');
for (const [filename, svg] of Object.entries(logos)) {
  const filePath = path.join(outputDir, filename);
  fs.writeFileSync(filePath, svg.trim(), 'utf8');
  console.log(`Generated: ${filePath}`);
}
console.log('All 15 SVG logos generated successfully!');

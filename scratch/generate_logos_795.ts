import fs from 'fs';
import path from 'path';

const logos: Record<string, string> = {
  'zkpass-protocol.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="zkp-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4F46E5"/>
      <stop offset="50%" stop-color="#7C3AED"/>
      <stop offset="100%" stop-color="#EC4899"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="url(#zkp-grad)"/>
  <!-- Keyhole Shield / TransGate Privacy Icon -->
  <path d="M50 20 L75 32 V52 C75 68 50 80 50 80 C50 80 25 68 25 52 V32 Z" fill="#ffffff" fill-opacity="0.2" stroke="#ffffff" stroke-width="3" stroke-linejoin="round"/>
  <circle cx="50" cy="46" r="7" fill="#ffffff"/>
  <path d="M47 50 L45 64 H55 L53 50 Z" fill="#ffffff"/>
</svg>`,

  'ritual-ai.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="rit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#1E1B4B"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="url(#rit-grad)"/>
  <!-- Geometric AI Neural Mandala -->
  <polygon points="50,22 76,37 76,67 50,82 24,67 24,37" fill="none" stroke="#6366F1" stroke-width="3"/>
  <polygon points="50,32 67,42 67,62 50,72 33,62 33,42" fill="none" stroke="#A855F7" stroke-width="2.5"/>
  <circle cx="50" cy="52" r="7" fill="#38BDF8"/>
  <circle cx="50" cy="22" r="4" fill="#6366F1"/>
  <circle cx="76" cy="37" r="4" fill="#6366F1"/>
  <circle cx="76" cy="67" r="4" fill="#6366F1"/>
  <circle cx="50" cy="82" r="4" fill="#6366F1"/>
  <circle cx="24" cy="67" r="4" fill="#6366F1"/>
  <circle cx="24" cy="37" r="4" fill="#6366F1"/>
</svg>`,

  'hyperbolic-ai.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="hyp-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#06B6D4"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#0F172A"/>
  <!-- Hyperbolic Curve Grid -->
  <path d="M22 25 Q50 50 78 25" stroke="#38BDF8" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <path d="M22 75 Q50 50 78 75" stroke="#38BDF8" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <path d="M25 22 Q50 50 25 78" stroke="#06B6D4" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <path d="M75 22 Q50 50 75 78" stroke="#06B6D4" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <circle cx="50" cy="50" r="8" fill="url(#hyp-grad)"/>
</svg>`,

  'kakarot-zk-evm.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="kak-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EA580C"/>
      <stop offset="50%" stop-color="#F97316"/>
      <stop offset="100%" stop-color="#FACC15"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#1C1917"/>
  <!-- Starknet Orange Star & EVM Crystal -->
  <polygon points="50,18 61,40 85,42 66,57 73,80 50,67 27,80 34,57 15,42 39,40" fill="url(#kak-grad)"/>
  <circle cx="50" cy="52" r="10" fill="#ffffff" fill-opacity="0.9"/>
  <polygon points="50,45 56,52 50,59 44,52" fill="#EA580C"/>
</svg>`,

  't3rn-network.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="t3-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10B981"/>
      <stop offset="100%" stop-color="#059669"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#064E3B"/>
  <!-- Tri-modular Arrow Ring -->
  <circle cx="50" cy="50" r="30" stroke="#34D399" stroke-width="4" stroke-dasharray="18 10" fill="none"/>
  <path d="M50 25 L65 50 H35 Z" fill="url(#t3-grad)"/>
  <circle cx="50" cy="50" r="9" fill="#A7F3D0"/>
</svg>`,

  'sovereign-sdk.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="sov-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6366F1"/>
      <stop offset="100%" stop-color="#4338CA"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#1E1B4B"/>
  <!-- Sovereign Crown & Rollup Blocks -->
  <path d="M25 65 H75 L70 38 L50 52 L30 38 Z" fill="url(#sov-grad)" stroke="#818CF8" stroke-width="2.5"/>
  <circle cx="30" cy="36" r="4.5" fill="#C7D2FE"/>
  <circle cx="50" cy="50" r="4.5" fill="#C7D2FE"/>
  <circle cx="70" cy="36" r="4.5" fill="#C7D2FE"/>
  <rect x="25" y="69" width="50" height="8" rx="3" fill="#818CF8"/>
</svg>`,

  'goplus-security.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="gp-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#1D4ED8"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="url(#gp-grad)"/>
  <!-- Security Shield with Cross-Check -->
  <path d="M50 18 L76 28 V52 C76 68 50 82 50 82 C50 82 24 68 24 52 V28 Z" fill="#ffffff" fill-opacity="0.15" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round"/>
  <path d="M38 50 L46 58 L64 40" stroke="#60A5FA" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="50" cy="50" r="26" stroke="#93C5FD" stroke-width="2" stroke-dasharray="6 4" fill="none"/>
</svg>`,

  'satlayer-btc.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="sat-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#D97706"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#451A03"/>
  <!-- Bitcoin Restaking Layered Stack -->
  <ellipse cx="50" cy="72" rx="30" ry="10" fill="#B45309"/>
  <ellipse cx="50" cy="55" rx="30" ry="10" fill="#D97706"/>
  <ellipse cx="50" cy="38" rx="30" ry="10" fill="url(#sat-grad)"/>
  <!-- ₿ Symbol -->
  <text x="50" y="44" font-family="Inter, sans-serif" font-weight="900" font-size="20" fill="#ffffff" text-anchor="middle">₿</text>
</svg>`,

  'lagrange-zk.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="lag-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8B5CF6"/>
      <stop offset="100%" stop-color="#6D28D9"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#2E1065"/>
  <!-- Lagrange Polynomial Curve & Nodes -->
  <path d="M20 70 C35 25, 45 90, 80 30" stroke="#C4B5FD" stroke-width="4.5" fill="none" stroke-linecap="round"/>
  <circle cx="20" cy="70" r="5" fill="#A78BFA"/>
  <circle cx="36" cy="40" r="5" fill="#A78BFA"/>
  <circle cx="55" cy="72" r="5" fill="#A78BFA"/>
  <circle cx="80" cy="30" r="6" fill="#EDE9FE"/>
  <polygon points="50,18 60,32 40,32" fill="#F472B6"/>
</svg>`,

  'allora-network-ai.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="all-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EC4899"/>
      <stop offset="100%" stop-color="#8B5CF6"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#18181B"/>
  <!-- Infinite AI Brain Synapse -->
  <circle cx="38" cy="50" r="16" fill="none" stroke="url(#all-grad)" stroke-width="4.5"/>
  <circle cx="62" cy="50" r="16" fill="none" stroke="url(#all-grad)" stroke-width="4.5"/>
  <circle cx="50" cy="50" r="5" fill="#F43F5E"/>
  <path d="M50 24 V34 M50 66 V76" stroke="#A1A1AA" stroke-width="2.5" stroke-linecap="round"/>
</svg>`,

  'huma-finance-payfi.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="hum-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0EA5E9"/>
      <stop offset="100%" stop-color="#2563EB"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#0C4A6E"/>
  <!-- Huma PayFi Cross Wings -->
  <path d="M25 50 H75 M50 25 V75" stroke="#38BDF8" stroke-width="4" stroke-linecap="round"/>
  <circle cx="50" cy="50" r="22" stroke="#BAE6FD" stroke-width="3" stroke-dasharray="8 6" fill="none"/>
  <circle cx="50" cy="50" r="8" fill="url(#hum-grad)"/>
</svg>`,

  'lumia-network-l2.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="lum-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14B8A6"/>
      <stop offset="100%" stop-color="#0D9488"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#134E4A"/>
  <!-- Lumia L-Crystal Prism -->
  <polygon points="50,20 75,40 50,80 25,40" fill="url(#lum-grad)" stroke="#5EEAD4" stroke-width="3"/>
  <line x1="50" y1="20" x2="50" y2="80" stroke="#CCFBF1" stroke-width="2.5"/>
  <circle cx="50" cy="40" r="6" fill="#ffffff"/>
</svg>`,

  'open-ledger-ai.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="ol-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3B82F6"/>
      <stop offset="100%" stop-color="#6366F1"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#1E293B"/>
  <!-- Verifiable AI Data Ledger Book -->
  <rect x="25" y="30" width="50" height="42" rx="4" fill="none" stroke="#60A5FA" stroke-width="3.5"/>
  <line x1="50" y1="30" x2="50" y2="72" stroke="#60A5FA" stroke-width="3"/>
  <line x1="33" y1="42" x2="43" y2="42" stroke="#93C5FD" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="33" y1="52" x2="43" y2="52" stroke="#93C5FD" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="57" y1="42" x2="67" y2="42" stroke="#93C5FD" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="57" y1="52" x2="67" y2="52" stroke="#93C5FD" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="50" cy="24" r="5" fill="#38BDF8"/>
</svg>`,

  'tea-protocol-oss.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="tea-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#22C55E"/>
      <stop offset="100%" stop-color="#16A34A"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#052E16"/>
  <!-- Tea Leaf & Open Source Git Branch -->
  <path d="M50 22 C32 35 32 65 50 78 C68 65 68 35 50 22 Z" fill="url(#tea-grad)"/>
  <path d="M50 28 V72" stroke="#DCFCE7" stroke-width="2.5"/>
  <circle cx="50" cy="36" r="3.5" fill="#ffffff"/>
  <circle cx="42" cy="50" r="3" fill="#ffffff"/>
  <circle cx="58" cy="50" r="3" fill="#ffffff"/>
</svg>`,

  'solayer-sol-restaking.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="sol-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#9945FF"/>
      <stop offset="50%" stop-color="#14F195"/>
      <stop offset="100%" stop-color="#00C2FF"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#18181B"/>
  <!-- Solana Style Parallel Restaking Layers -->
  <path d="M22 35 L78 35 L70 45 L14 45 Z" fill="#9945FF"/>
  <path d="M28 50 L84 50 L76 60 L20 60 Z" fill="#14F195"/>
  <path d="M22 65 L78 65 L70 75 L14 75 Z" fill="#00C2FF"/>
  <circle cx="50" cy="50" r="8" fill="#ffffff" fill-opacity="0.8"/>
</svg>`
};

const outputDir = path.resolve('public/images/airdrops');
for (const [filename, svg] of Object.entries(logos)) {
  const filePath = path.join(outputDir, filename);
  fs.writeFileSync(filePath, svg.trim(), 'utf8');
  console.log(`Generated: ${filePath}`);
}
console.log('All 15 SVG logos generated successfully!');

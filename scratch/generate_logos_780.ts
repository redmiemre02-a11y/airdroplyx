import fs from 'fs';
import path from 'path';

const logosDir = path.resolve('public/images/airdrops');

interface LogoConfig {
  filename: string;
  svg: string;
}

const newLogos: LogoConfig[] = [
  {
    filename: 'sanctum-lst.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="sanctumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14F195"/>
      <stop offset="100%" stop-color="#00FFA3"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#0A1C16"/>
  <circle cx="50" cy="50" r="28" fill="none" stroke="url(#sanctumGrad)" stroke-width="6"/>
  <path d="M50 26 C40 38, 40 62, 50 74 C60 62, 60 38, 50 26 Z" fill="url(#sanctumGrad)"/>
</svg>`
  },
  {
    filename: 'degen-chain-l3.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="degenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#A855F7"/>
      <stop offset="100%" stop-color="#6B21A8"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#170A26"/>
  <rect x="25" y="25" width="50" height="50" rx="14" fill="none" stroke="url(#degenGrad)" stroke-width="7"/>
  <text x="50" y="60" font-family="Arial, sans-serif" font-weight="900" font-size="30" fill="#E9D5FF" text-anchor="middle">D</text>
</svg>`
  },
  {
    filename: 'phoenix-orderbook-dex.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="phoenixGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF4500"/>
      <stop offset="100%" stop-color="#FFA500"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#1C0902"/>
  <path d="M50 22 C32 38, 30 64, 50 78 C70 64, 68 38, 50 22 Z" fill="none" stroke="url(#phoenixGrad)" stroke-width="6"/>
  <path d="M50 36 C42 46, 42 60, 50 68 C58 60, 58 46, 50 36 Z" fill="url(#phoenixGrad)"/>
</svg>`
  },
  {
    filename: 'elixir-deusd-network.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="elixirGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06B6D4"/>
      <stop offset="100%" stop-color="#3B82F6"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#041626"/>
  <circle cx="50" cy="50" r="28" fill="none" stroke="url(#elixirGrad)" stroke-width="7"/>
  <line x1="32" y1="50" x2="68" y2="50" stroke="#38BDF8" stroke-width="7" stroke-linecap="round"/>
  <circle cx="50" cy="50" r="5" fill="#FFFFFF"/>
</svg>`
  },
  {
    filename: 'parcl-rwa.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="parclGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#061829"/>
  <path d="M28 68 L28 42 L50 24 L72 42 L72 68 Z" fill="none" stroke="url(#parclGrad)" stroke-width="6" stroke-linejoin="round"/>
  <rect x="42" y="48" width="16" height="20" fill="url(#parclGrad)"/>
</svg>`
  },
  {
    filename: 'ambient-finance-protocol.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="ambientGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EC4899"/>
      <stop offset="100%" stop-color="#8B5CF6"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#190B1E"/>
  <circle cx="50" cy="50" r="26" fill="none" stroke="url(#ambientGrad)" stroke-width="6"/>
  <circle cx="50" cy="36" r="6" fill="#F472B6"/>
  <circle cx="38" cy="58" r="6" fill="#A78BFA"/>
  <circle cx="62" cy="58" r="6" fill="#A78BFA"/>
</svg>`
  },
  {
    filename: 'blasterswap-protocol.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="blastGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCFC03"/>
      <stop offset="100%" stop-color="#F59E0B"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#1C1B03"/>
  <polygon points="56,18 28,52 48,52 44,82 72,48 52,48" fill="url(#blastGrad)"/>
</svg>`
  },
  {
    filename: 'derive-protocol.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="deriveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8B5CF6"/>
      <stop offset="100%" stop-color="#3B82F6"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#0C0E24"/>
  <path d="M30 72 V28 H50 C62 28, 70 38, 70 50 C70 62, 62 72, 50 72 Z" fill="none" stroke="url(#deriveGrad)" stroke-width="7" stroke-linejoin="round"/>
  <circle cx="50" cy="50" r="6" fill="#60A5FA"/>
</svg>`
  },
  {
    filename: 'resolv-protocol.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="resolvGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10B981"/>
      <stop offset="100%" stop-color="#047857"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#061E14"/>
  <polygon points="50,20 78,36 78,68 50,84 22,68 22,36" fill="none" stroke="url(#resolvGrad)" stroke-width="6"/>
  <line x1="36" y1="50" x2="64" y2="50" stroke="#34D399" stroke-width="6" stroke-linecap="round"/>
  <circle cx="50" cy="50" r="5" fill="#FFFFFF"/>
</svg>`
  },
  {
    filename: 'lombard-finance-btc.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="lombardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F7931A"/>
      <stop offset="100%" stop-color="#B45309"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#1C1004"/>
  <circle cx="50" cy="50" r="28" fill="none" stroke="url(#lombardGrad)" stroke-width="6"/>
  <path d="M40 32 H54 C60 32, 64 36, 64 42 C64 46, 62 48, 58 50 C63 52, 65 56, 65 61 C65 67, 60 70, 54 70 H40 Z" fill="none" stroke="#FBBF24" stroke-width="5" stroke-linejoin="round"/>
</svg>`
  },
  {
    filename: 'solv-protocol-btc.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="solvGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3B82F6"/>
      <stop offset="50%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#EF4444"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#0C1224"/>
  <polygon points="50,22 76,68 24,68" fill="none" stroke="url(#solvGrad)" stroke-width="7" stroke-linejoin="round"/>
  <circle cx="50" cy="52" r="7" fill="#FBBF24"/>
</svg>`
  },
  {
    filename: 'bedrock-uni-btc.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="bedrockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F97316"/>
      <stop offset="100%" stop-color="#EA580C"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#1A0E06"/>
  <rect x="28" y="28" width="44" height="44" rx="8" fill="none" stroke="url(#bedrockGrad)" stroke-width="6"/>
  <circle cx="50" cy="50" r="10" fill="#FB923C"/>
</svg>`
  },
  {
    filename: 'corn-kernel-points.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="cornGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EAB308"/>
      <stop offset="100%" stop-color="#CA8A04"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#1C1805"/>
  <path d="M50 20 C36 34, 36 66, 50 80 C64 66, 64 34, 50 20 Z" fill="url(#cornGrad)"/>
  <circle cx="50" cy="50" r="6" fill="#FEF08A"/>
</svg>`
  },
  {
    filename: 'movement-parthenon.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="moveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EAB308"/>
      <stop offset="100%" stop-color="#F97316"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#1C1405"/>
  <path d="M26 70 L50 30 L74 70" fill="none" stroke="url(#moveGrad)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="38" y1="52" x2="62" y2="52" stroke="#FBBF24" stroke-width="6" stroke-linecap="round"/>
</svg>`
  },
  {
    filename: 'curvance-cve-vaults.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="cveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10B981"/>
      <stop offset="100%" stop-color="#3B82F6"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#061822"/>
  <circle cx="50" cy="50" r="28" fill="none" stroke="url(#cveGrad)" stroke-width="6"/>
  <path d="M36 64 C 32 46, 48 34, 64 36" fill="none" stroke="#34D399" stroke-width="6" stroke-linecap="round"/>
  <circle cx="64" cy="36" r="4" fill="#60A5FA"/>
</svg>`
  }
];

for (const logo of newLogos) {
  const targetPath = path.join(logosDir, logo.filename);
  fs.writeFileSync(targetPath, logo.svg.trim());
  console.log(`Saved logo: ${logo.filename}`);
}

console.log('All 15 new vector SVG logos generated successfully!');

import fs from 'fs';
import path from 'path';

const logosDir = path.resolve('public/images/airdrops');

interface LogoConfig {
  filename: string;
  svg: string;
}

const newLogos: LogoConfig[] = [
  {
    filename: 'megaeth-labs.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="megaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF3B30"/>
      <stop offset="50%" stop-color="#FF9500"/>
      <stop offset="100%" stop-color="#FFCC00"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#0C0D12"/>
  <path d="M26 72 L38 28 L50 56 L62 28 L74 72" fill="none" stroke="url(#megaGrad)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="50" cy="56" r="4" fill="#FFCC00"/>
</svg>`
  },
  {
    filename: 'curvance-protocol.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="curvGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3B82F6"/>
      <stop offset="100%" stop-color="#10B981"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#0F172A"/>
  <path d="M30 68 C 25 45, 45 28, 65 32 C 75 34, 78 44, 72 52 C 64 62, 42 60, 40 45" fill="none" stroke="url(#curvGrad)" stroke-width="7" stroke-linecap="round"/>
  <circle cx="65" cy="32" r="5" fill="#60A5FA"/>
</svg>`
  },
  {
    filename: 'redstone-oracles.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="redstoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EF4444"/>
      <stop offset="100%" stop-color="#B91C1C"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#18181B"/>
  <polygon points="50,20 78,36 78,68 50,84 22,68 22,36" fill="none" stroke="url(#redstoneGrad)" stroke-width="6"/>
  <polygon points="50,32 68,43 68,63 50,73 32,63 32,43" fill="url(#redstoneGrad)" opacity="0.8"/>
  <circle cx="50" cy="53" r="6" fill="#FFFFFF"/>
</svg>`
  },
  {
    filename: 'espresso-sequencer.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="espressoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D97706"/>
      <stop offset="100%" stop-color="#78350F"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#1C1917"/>
  <path d="M28 40 L72 40 L64 68 C 62 76, 38 76, 36 68 Z" fill="url(#espressoGrad)"/>
  <path d="M72 46 C 80 46, 84 54, 78 62 C 74 66, 68 64, 68 64" fill="none" stroke="#F59E0B" stroke-width="5" stroke-linecap="round"/>
  <path d="M42 26 C 42 22, 46 22, 46 18 M52 26 C 52 22, 56 22, 56 18" fill="none" stroke="#FDE68A" stroke-width="3" stroke-linecap="round"/>
</svg>`
  },
  {
    filename: 'morph-l2.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="morphGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10B981"/>
      <stop offset="100%" stop-color="#065F46"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#064E3B"/>
  <path d="M26 65 L26 35 L44 55 L62 35 L62 65" fill="none" stroke="#34D399" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="74" cy="40" r="5" fill="#6EE7B7"/>
</svg>`
  },
  {
    filename: 'creator-bid.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="creatorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8B5CF6"/>
      <stop offset="100%" stop-color="#EC4899"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#180D2B"/>
  <circle cx="50" cy="50" r="28" fill="none" stroke="url(#creatorGrad)" stroke-width="6"/>
  <polygon points="45,38 62,50 45,62" fill="#F472B6"/>
  <circle cx="50" cy="22" r="4" fill="#A78BFA"/>
  <circle cx="78" cy="50" r="4" fill="#A78BFA"/>
  <circle cx="50" cy="78" r="4" fill="#A78BFA"/>
  <circle cx="22" cy="50" r="4" fill="#A78BFA"/>
</svg>`
  },
  {
    filename: 'sonic-svm.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="sonicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F59E0B"/>
      <stop offset="50%" stop-color="#EC4899"/>
      <stop offset="100%" stop-color="#8B5CF6"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#0F0C20"/>
  <polygon points="56,20 28,54 48,54 44,80 72,46 52,46" fill="url(#sonicGrad)"/>
</svg>`
  },
  {
    filename: 'kinto-kyc-l2.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="kintoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3B82F6"/>
      <stop offset="100%" stop-color="#1E40AF"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#0B132B"/>
  <path d="M50 20 L76 32 V52 C76 68 64 78 50 84 C36 78 24 68 24 52 V32 Z" fill="none" stroke="url(#kintoGrad)" stroke-width="6"/>
  <path d="M42 50 L48 56 L60 44" fill="none" stroke="#60A5FA" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
  },
  {
    filename: 'nexus-zk-network.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="nexusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06B6D4"/>
      <stop offset="100%" stop-color="#3B82F6"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#041E2F"/>
  <circle cx="50" cy="50" r="16" fill="none" stroke="url(#nexusGrad)" stroke-width="5"/>
  <line x1="50" y1="20" x2="50" y2="34" stroke="#22D3EE" stroke-width="5" stroke-linecap="round"/>
  <line x1="50" y1="66" x2="50" y2="80" stroke="#22D3EE" stroke-width="5" stroke-linecap="round"/>
  <line x1="20" y1="50" x2="34" y2="50" stroke="#22D3EE" stroke-width="5" stroke-linecap="round"/>
  <line x1="66" y1="50" x2="80" y2="50" stroke="#22D3EE" stroke-width="5" stroke-linecap="round"/>
  <circle cx="50" cy="50" r="6" fill="#38BDF8"/>
</svg>`
  },
  {
    filename: 'zerion-dna.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="zerionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#7C3AED"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#090E24"/>
  <circle cx="50" cy="50" r="28" fill="none" stroke="url(#zerionGrad)" stroke-width="7"/>
  <line x1="30" y1="50" x2="70" y2="50" stroke="#60A5FA" stroke-width="7" stroke-linecap="round"/>
</svg>`
  },
  {
    filename: 'zesty-market.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="zestyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EAB308"/>
      <stop offset="100%" stop-color="#CA8A04"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#1C1908"/>
  <path d="M28 32 H72 L40 68 H72" fill="none" stroke="url(#zestyGrad)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="72" cy="32" r="4" fill="#FEF08A"/>
</svg>`
  },
  {
    filename: 'nubit-da.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="nubitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F97316"/>
      <stop offset="100%" stop-color="#C2410C"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#1A110B"/>
  <polygon points="50,22 75,37 75,67 50,82 25,67 25,37" fill="none" stroke="url(#nubitGrad)" stroke-width="6"/>
  <circle cx="50" cy="52" r="10" fill="#FB923C"/>
  <line x1="50" y1="22" x2="50" y2="42" stroke="#FDBA74" stroke-width="4"/>
</svg>`
  },
  {
    filename: 'ritual-net.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="ritualGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#A855F7"/>
      <stop offset="100%" stop-color="#6B21A8"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#120A21"/>
  <circle cx="50" cy="50" r="26" fill="none" stroke="url(#ritualGrad)" stroke-width="5"/>
  <circle cx="50" cy="50" r="14" fill="none" stroke="#C084FC" stroke-width="4"/>
  <circle cx="50" cy="50" r="5" fill="#E9D5FF"/>
</svg>`
  },
  {
    filename: 'privasea-ai.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="privaseaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06B6D4"/>
      <stop offset="100%" stop-color="#0E7490"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#08202B"/>
  <path d="M30 46 C30 35, 38 28, 50 28 C62 28, 70 35, 70 46 V54 H30 Z" fill="none" stroke="url(#privaseaGrad)" stroke-width="5"/>
  <rect x="26" y="54" width="48" height="26" rx="8" fill="url(#privaseaGrad)"/>
  <circle cx="50" cy="67" r="4" fill="#FFFFFF"/>
</svg>`
  },
  {
    filename: 'infinex-patron.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="infinexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EC4899"/>
      <stop offset="50%" stop-color="#8B5CF6"/>
      <stop offset="100%" stop-color="#3B82F6"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#0D091A"/>
  <path d="M30 35 L45 65 L55 35 L70 65" fill="none" stroke="url(#infinexGrad)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="50" cy="24" r="5" fill="#F472B6"/>
</svg>`
  }
];

for (const logo of newLogos) {
  const targetPath = path.join(logosDir, logo.filename);
  fs.writeFileSync(targetPath, logo.svg.trim());
  console.log(`Saved: ${logo.filename}`);
}

console.log('All 15 new SVG logos generated successfully!');

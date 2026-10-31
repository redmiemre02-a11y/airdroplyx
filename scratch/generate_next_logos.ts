import fs from 'fs';
import path from 'path';

const logosDir = path.resolve('public/images/airdrops');

interface LogoConfig {
  filename: string;
  svg: string;
}

const newLogos: LogoConfig[] = [
  {
    filename: 'space-and-time-db.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="sxtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3B82F6"/>
      <stop offset="50%" stop-color="#8B5CF6"/>
      <stop offset="100%" stop-color="#EC4899"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#0A0B1A"/>
  <circle cx="50" cy="50" r="30" fill="none" stroke="url(#sxtGrad)" stroke-width="6"/>
  <line x1="50" y1="26" x2="50" y2="50" stroke="#60A5FA" stroke-width="5" stroke-linecap="round"/>
  <line x1="50" y1="50" x2="68" y2="50" stroke="#EC4899" stroke-width="5" stroke-linecap="round"/>
  <circle cx="50" cy="50" r="5" fill="#F472B6"/>
</svg>`
  },
  {
    filename: 'talus-network.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="talusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10B981"/>
      <stop offset="100%" stop-color="#06B6D4"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#041F1E"/>
  <polygon points="50,20 80,75 20,75" fill="none" stroke="url(#talusGrad)" stroke-width="7" stroke-linejoin="round"/>
  <circle cx="50" cy="56" r="8" fill="#34D399"/>
</svg>`
  },
  {
    filename: 'astria-sequencer.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="astriaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#D97706"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#1C1405"/>
  <polygon points="50,18 82,36 82,72 50,90 18,72 18,36" fill="none" stroke="url(#astriaGrad)" stroke-width="6"/>
  <circle cx="50" cy="54" r="14" fill="#F59E0B"/>
  <circle cx="50" cy="54" r="6" fill="#1C1405"/>
</svg>`
  },
  {
    filename: 'almanak-ai.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="almanakGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6366F1"/>
      <stop offset="100%" stop-color="#A855F7"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#0E0F2B"/>
  <path d="M26 74 L50 26 L74 74 M36 56 H64" fill="none" stroke="url(#almanakGrad)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="50" cy="26" r="4" fill="#C084FC"/>
</svg>`
  },
  {
    filename: 'renegade-fi.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="renegadeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E11D48"/>
      <stop offset="100%" stop-color="#4C0519"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#120408"/>
  <circle cx="50" cy="50" r="28" fill="none" stroke="url(#renegadeGrad)" stroke-width="6"/>
  <path d="M34 50 L50 34 L66 50 L50 66 Z" fill="#E11D48"/>
  <circle cx="50" cy="50" r="4" fill="#FFFFFF"/>
</svg>`
  },
  {
    filename: 'hyperlane-interchain-l3.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="hyperlaneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="50%" stop-color="#06B6D4"/>
      <stop offset="100%" stop-color="#3B82F6"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#041829"/>
  <line x1="24" y1="35" x2="76" y2="35" stroke="url(#hyperlaneGrad)" stroke-width="7" stroke-linecap="round"/>
  <line x1="24" y1="65" x2="76" y2="65" stroke="url(#hyperlaneGrad)" stroke-width="7" stroke-linecap="round"/>
  <line x1="38" y1="35" x2="62" y2="65" stroke="#38BDF8" stroke-width="7" stroke-linecap="round"/>
  <circle cx="38" cy="35" r="5" fill="#FFFFFF"/>
  <circle cx="62" cy="65" r="5" fill="#FFFFFF"/>
</svg>`
  },
  {
    filename: 'tars-ai-protocol.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="tarsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14F195"/>
      <stop offset="100%" stop-color="#9945FF"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#0C0A1C"/>
  <path d="M26 30 H74 M50 30 V74" fill="none" stroke="url(#tarsGrad)" stroke-width="8" stroke-linecap="round"/>
  <circle cx="50" cy="74" r="5" fill="#14F195"/>
</svg>`
  },
  {
    filename: 'alvara-protocol.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="alvaraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0EA5E9"/>
      <stop offset="100%" stop-color="#2563EB"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#07152B"/>
  <circle cx="38" cy="42" r="14" fill="none" stroke="url(#alvaraGrad)" stroke-width="5"/>
  <circle cx="62" cy="42" r="14" fill="none" stroke="url(#alvaraGrad)" stroke-width="5"/>
  <circle cx="50" cy="64" r="14" fill="none" stroke="url(#alvaraGrad)" stroke-width="5"/>
  <circle cx="50" cy="49" r="4" fill="#38BDF8"/>
</svg>`
  },
  {
    filename: 'zeno-exchange-perps.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="zenoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00D2FF"/>
      <stop offset="100%" stop-color="#0066FF"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#031626"/>
  <path d="M30 30 H70 L30 70 H70" fill="none" stroke="url(#zenoGrad)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="50" cy="50" r="5" fill="#00D2FF"/>
</svg>`
  },
  {
    filename: 'reya-network-perps.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="reyaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF5E62"/>
      <stop offset="100%" stop-color="#FF9966"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#1C0E0B"/>
  <circle cx="50" cy="50" r="28" fill="none" stroke="url(#reyaGrad)" stroke-width="6"/>
  <polygon points="50,28 68,62 32,62" fill="url(#reyaGrad)"/>
</svg>`
  },
  {
    filename: 'etherfi-cash.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="ethfiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6366F1"/>
      <stop offset="50%" stop-color="#8B5CF6"/>
      <stop offset="100%" stop-color="#D946EF"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#100D24"/>
  <rect x="22" y="32" width="56" height="36" rx="8" fill="none" stroke="url(#ethfiGrad)" stroke-width="6"/>
  <line x1="22" y1="44" x2="78" y2="44" stroke="#8B5CF6" stroke-width="5"/>
  <circle cx="34" cy="56" r="4" fill="#E879F9"/>
</svg>`
  },
  {
    filename: 'dill-network-da.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="dillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#84CC16"/>
      <stop offset="100%" stop-color="#4D7C0F"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#0F1A05"/>
  <circle cx="50" cy="50" r="26" fill="none" stroke="url(#dillGrad)" stroke-width="6"/>
  <path d="M50 24 V76 M32 38 L68 62 M32 62 L68 38" stroke="#A3E635" stroke-width="4" stroke-linecap="round"/>
</svg>`
  },
  {
    filename: 'hemi-network-miner.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="hemiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F97316"/>
      <stop offset="100%" stop-color="#EC4899"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#170A14"/>
  <path d="M26 28 H42 V72 H26 Z" fill="url(#hemiGrad)"/>
  <path d="M58 28 H74 V72 H58 Z" fill="url(#hemiGrad)"/>
  <line x1="42" y1="50" x2="58" y2="50" stroke="#FB923C" stroke-width="6"/>
</svg>`
  },
  {
    filename: 'superform-safari-yield.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="superformGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10B981"/>
      <stop offset="50%" stop-color="#3B82F6"/>
      <stop offset="100%" stop-color="#6366F1"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#071927"/>
  <circle cx="50" cy="50" r="28" fill="none" stroke="url(#superformGrad)" stroke-width="6"/>
  <polygon points="50,28 66,50 50,72 34,50" fill="url(#superformGrad)"/>
</svg>`
  },
  {
    filename: 'zerolend-airdrop.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="zerolendGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#1E40AF"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#08142C"/>
  <path d="M30 32 H70 L34 68 H70" fill="none" stroke="url(#zerolendGrad)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="26" y1="50" x2="74" y2="50" stroke="#60A5FA" stroke-width="4" stroke-linecap="round"/>
</svg>`
  }
];

for (const logo of newLogos) {
  const targetPath = path.join(logosDir, logo.filename);
  fs.writeFileSync(targetPath, logo.svg.trim());
  console.log(`Saved logo: ${logo.filename}`);
}

console.log('All 15 new vector SVG logos generated successfully!');

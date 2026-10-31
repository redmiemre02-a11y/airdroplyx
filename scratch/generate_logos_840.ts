import fs from 'fs';
import path from 'path';

const logosDir = path.resolve('public/images/airdrops');
if (!fs.existsSync(logosDir)) {
  fs.mkdirSync(logosDir, { recursive: true });
}

interface LogoDef {
  filename: string;
  svg: string;
}

const logos: LogoDef[] = [
  {
    filename: 'infinex-patron-account.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="infinexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E11D48"/>
      <stop offset="50%" stop-color="#BE123C"/>
      <stop offset="100%" stop-color="#881337"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#0A0A0C"/>
  <circle cx="50" cy="50" r="38" stroke="url(#infinexGrad)" stroke-width="3" fill="none" opacity="0.3"/>
  <path d="M32 30 L50 48 L68 30 L76 38 L50 64 L24 38 Z" fill="url(#infinexGrad)"/>
  <circle cx="50" cy="72" r="6" fill="#F43F5E"/>
</svg>`
  },
  {
    filename: 'avantis-base-perp.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="avantisGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0052FF"/>
      <stop offset="100%" stop-color="#00D2FF"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#050B14"/>
  <path d="M50 20 L78 75 L62 75 L50 48 L38 75 L22 75 Z" fill="url(#avantisGrad)"/>
  <polygon points="50,32 66,66 34,66" fill="#050B14" opacity="0.8"/>
  <circle cx="50" cy="54" r="6" fill="#00D2FF"/>
</svg>`
  },
  {
    filename: 'resolv-labs-stablecoin.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="resolvGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10B981"/>
      <stop offset="100%" stop-color="#059669"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#06120E"/>
  <circle cx="50" cy="50" r="32" stroke="url(#resolvGrad)" stroke-width="6" fill="none"/>
  <path d="M38 34 L56 34 C64 34 68 38 68 44 C68 49 64 53 58 54 L69 68 L57 68 L48 56 L48 68 L38 68 Z M48 42 L48 48 L55 48 C58 48 60 46 60 45 C60 43 58 42 55 42 Z" fill="#34D399"/>
</svg>`
  },
  {
    filename: 'curvance-cross-chain-lending.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="curvanceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8B5CF6"/>
      <stop offset="100%" stop-color="#EC4899"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#0F0B18"/>
  <path d="M30 50 C30 36 40 26 55 26 C66 26 74 32 77 40 L65 44 C63 38 58 35 52 35 C42 35 37 42 37 50 C37 58 42 65 52 65 C58 65 63 62 65 56 L77 60 C74 68 66 74 55 74 C40 74 30 64 30 50 Z" fill="url(#curvanceGrad)"/>
  <circle cx="50" cy="50" r="8" fill="#EC4899"/>
</svg>`
  },
  {
    filename: 'particle-network-modular-l1.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="particleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#EF4444"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#120D08"/>
  <circle cx="50" cy="50" r="14" fill="url(#particleGrad)"/>
  <circle cx="28" cy="35" r="7" fill="#FBBF24" opacity="0.8"/>
  <circle cx="72" cy="35" r="7" fill="#F87171" opacity="0.8"/>
  <circle cx="50" cy="76" r="9" fill="#EA580C" opacity="0.8"/>
  <line x1="50" y1="50" x2="28" y2="35" stroke="#F59E0B" stroke-width="2.5" stroke-dasharray="3 3"/>
  <line x1="50" y1="50" x2="72" y2="35" stroke="#EF4444" stroke-width="2.5" stroke-dasharray="3 3"/>
  <line x1="50" y1="50" x2="50" y2="76" stroke="#EA580C" stroke-width="2.5" stroke-dasharray="3 3"/>
</svg>`
  },
  {
    filename: 'ambient-finance-modular-dex.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="ambientGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06B6D4"/>
      <stop offset="100%" stop-color="#3B82F6"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#06111C"/>
  <path d="M26 68 C36 44 48 32 50 32 C52 32 64 44 74 68 L64 68 C56 50 50 44 50 44 C50 44 44 50 36 68 Z" fill="url(#ambientGrad)"/>
  <circle cx="50" cy="28" r="8" fill="#22D3EE"/>
  <path d="M38 72 L62 72" stroke="#38BDF8" stroke-width="4" stroke-linecap="round"/>
</svg>`
  },
  {
    filename: 'polynomial-chain-l2.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="polyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6366F1"/>
      <stop offset="100%" stop-color="#A855F7"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#0C0A1A"/>
  <polygon points="50,22 76,37 76,67 50,82 24,67 24,37" stroke="url(#polyGrad)" stroke-width="4" fill="none"/>
  <polygon points="50,34 66,43 66,61 50,70 34,61 34,43" fill="url(#polyGrad)" opacity="0.6"/>
  <circle cx="50" cy="52" r="6" fill="#C084FC"/>
</svg>`
  },
  {
    filename: 'hyperlane-modular-interop.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="hyperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14B8A6"/>
      <stop offset="100%" stop-color="#06B6D4"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#061313"/>
  <path d="M25 50 L42 28 L58 28 L41 50 L75 50 L58 72 L42 72 L59 50 Z" fill="url(#hyperGrad)"/>
  <circle cx="28" cy="28" r="5" fill="#2DD4BF"/>
  <circle cx="72" cy="72" r="5" fill="#22D3EE"/>
</svg>`
  },
  {
    filename: 'orderly-network-omnichain-dex.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="orderlyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7C3AED"/>
      <stop offset="100%" stop-color="#4F46E5"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#0C0B18"/>
  <rect x="26" y="26" width="48" height="48" rx="14" stroke="url(#orderlyGrad)" stroke-width="4" fill="none"/>
  <path d="M38 40 L62 40 M38 50 L62 50 M38 60 L52 60" stroke="#A78BFA" stroke-width="4" stroke-linecap="round"/>
  <circle cx="62" cy="60" r="4" fill="#38BDF8"/>
</svg>`
  },
  {
    filename: 'corn-btc-l2-kernel.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="cornGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EAB308"/>
      <stop offset="100%" stop-color="#CA8A04"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#141106"/>
  <path d="M50 20 C62 30 72 45 68 64 C64 78 50 82 50 82 C50 82 36 78 32 64 C28 45 38 30 50 20 Z" fill="url(#cornGrad)"/>
  <path d="M44 38 C47 38 49 42 47 46 C45 50 41 50 40 46 C39 42 41 38 44 38 Z" fill="#FEF08A"/>
  <path d="M56 46 C59 46 61 50 59 54 C57 58 53 58 52 54 C51 50 53 46 56 46 Z" fill="#FEF08A"/>
  <path d="M46 56 C49 56 51 60 49 64 C47 68 43 68 42 64 C41 60 43 56 46 56 Z" fill="#FEF08A"/>
</svg>`
  },
  {
    filename: 'fuel-ignition-mainnet.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="fuelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00F58C"/>
      <stop offset="100%" stop-color="#00A859"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#04120B"/>
  <path d="M50 18 L76 40 L64 78 L36 78 L24 40 Z" stroke="url(#fuelGrad)" stroke-width="4" fill="none"/>
  <path d="M50 32 L66 46 L58 70 L42 70 L34 46 Z" fill="url(#fuelGrad)" opacity="0.6"/>
  <circle cx="50" cy="52" r="7" fill="#86EFAC"/>
</svg>`
  },
  {
    filename: 'karak-restaking-v2.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="karakGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F97316"/>
      <stop offset="100%" stop-color="#C2410C"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#140A04"/>
  <polygon points="50,18 80,35 80,70 50,87 20,70 20,35" stroke="url(#karakGrad)" stroke-width="4" fill="none"/>
  <path d="M38 34 L38 66 M50 27 L50 73 M62 34 L62 66" stroke="#FB923C" stroke-width="3" stroke-linecap="round"/>
  <circle cx="50" cy="50" r="8" fill="#F97316"/>
</svg>`
  },
  {
    filename: 'stride-cosmos-liquid-staking.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="strideGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E11D48"/>
      <stop offset="100%" stop-color="#FB7185"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#14070A"/>
  <path d="M30 72 L50 26 L70 72 L58 72 L50 48 L42 72 Z" fill="url(#strideGrad)"/>
  <circle cx="50" cy="36" r="6" fill="#FDA4AF"/>
  <path d="M26 78 L74 78" stroke="#F43F5E" stroke-width="3" stroke-linecap="round"/>
</svg>`
  },
  {
    filename: 'rubic-cross-chain-aggregator.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="rubicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#22C55E"/>
      <stop offset="100%" stop-color="#16A34A"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#061208"/>
  <rect x="28" y="28" width="44" height="44" rx="8" stroke="url(#rubicGrad)" stroke-width="4" fill="none" transform="rotate(45 50 50)"/>
  <circle cx="50" cy="50" r="10" fill="#4ADE80"/>
  <circle cx="50" cy="22" r="4" fill="#86EFAC"/>
  <circle cx="50" cy="78" r="4" fill="#86EFAC"/>
  <circle cx="22" cy="50" r="4" fill="#86EFAC"/>
  <circle cx="78" cy="50" r="4" fill="#86EFAC"/>
</svg>`
  },
  {
    filename: 'alchemix-self-repaying-loans.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="alchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#D97706"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#140E05"/>
  <polygon points="50,20 78,74 22,74" stroke="url(#alchGrad)" stroke-width="4" fill="none"/>
  <path d="M50 36 L68 70 L32 70 Z" fill="url(#alchGrad)" opacity="0.4"/>
  <circle cx="50" cy="56" r="8" fill="#FCD34D"/>
  <path d="M42 48 L58 48" stroke="#FDE68A" stroke-width="3" stroke-linecap="round"/>
</svg>`
  }
];

let created = 0;
for (const l of logos) {
  const filePath = path.join(logosDir, l.filename);
  fs.writeFileSync(filePath, l.svg.trim(), 'utf-8');
  console.log(`Created logo: ${l.filename}`);
  created++;
}

console.log(`Successfully generated ${created} SVG logos in ${logosDir}`);

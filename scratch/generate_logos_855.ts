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
    filename: 'debridge-finance-cross-chain.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="debridgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4F46E5"/>
      <stop offset="100%" stop-color="#06B6D4"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#080C1A"/>
  <path d="M26 34 L50 34 C62 34 70 42 70 50 C70 58 62 66 50 66 L26 66 Z M38 44 L38 56 L48 56 C54 56 58 53 58 50 C58 47 54 44 48 44 Z" fill="url(#debridgeGrad)"/>
  <circle cx="74" cy="50" r="6" fill="#06B6D4"/>
</svg>`
  },
  {
    filename: 'drift-protocol-solana-perp.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="driftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#67E8F9"/>
      <stop offset="100%" stop-color="#3B82F6"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#05101A"/>
  <path d="M24 70 L48 30 L64 56 L76 36" stroke="url(#driftGrad)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="76" cy="36" r="6" fill="#67E8F9"/>
  <circle cx="48" cy="30" r="5" fill="#3B82F6"/>
</svg>`
  },
  {
    filename: 'zerolend-linea-liquidity.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="zeroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10B981"/>
      <stop offset="100%" stop-color="#047857"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#04120C"/>
  <circle cx="50" cy="50" r="32" stroke="url(#zeroGrad)" stroke-width="5" fill="none"/>
  <path d="M36 36 L64 36 L36 64 L64 64" stroke="#34D399" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`
  },
  {
    filename: 'movement-parthenon-testnet.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="moveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EAB308"/>
      <stop offset="100%" stop-color="#F97316"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#140E04"/>
  <polygon points="50,20 80,72 65,72 50,46 35,72 20,72" fill="url(#moveGrad)"/>
  <circle cx="50" cy="58" r="6" fill="#FDE047"/>
</svg>`
  },
  {
    filename: 'solayer-solana-restaking.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="solayerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14F195"/>
      <stop offset="100%" stop-color="#9945FF"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#0C0617"/>
  <circle cx="50" cy="50" r="30" stroke="url(#solayerGrad)" stroke-width="4" fill="none"/>
  <circle cx="50" cy="50" r="16" fill="url(#solayerGrad)"/>
  <circle cx="50" cy="24" r="5" fill="#14F195"/>
  <circle cx="50" cy="76" r="5" fill="#9945FF"/>
</svg>`
  },
  {
    filename: 'allora-network-ml-intelligence.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="alloraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8B5CF6"/>
      <stop offset="100%" stop-color="#EC4899"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#110A1A"/>
  <circle cx="50" cy="50" r="12" fill="url(#alloraGrad)"/>
  <circle cx="28" cy="32" r="7" fill="#A78BFA"/>
  <circle cx="72" cy="32" r="7" fill="#F472B6"/>
  <circle cx="28" cy="68" r="7" fill="#F472B6"/>
  <circle cx="72" cy="68" r="7" fill="#A78BFA"/>
  <line x1="50" y1="50" x2="28" y2="32" stroke="#8B5CF6" stroke-width="2.5"/>
  <line x1="50" y1="50" x2="72" y2="32" stroke="#EC4899" stroke-width="2.5"/>
  <line x1="50" y1="50" x2="28" y2="68" stroke="#EC4899" stroke-width="2.5"/>
  <line x1="50" y1="50" x2="72" y2="68" stroke="#8B5CF6" stroke-width="2.5"/>
</svg>`
  },
  {
    filename: 'kakarot-zkevm-cairo.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="kakGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F97316"/>
      <stop offset="100%" stop-color="#EA580C"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#140904"/>
  <path d="M30 26 L46 50 L30 74 L44 74 L54 58 L64 74 L78 74 L60 48 L76 26 L62 26 L52 42 L42 26 Z" fill="url(#kakGrad)"/>
  <circle cx="52" cy="50" r="4" fill="#FED7AA"/>
</svg>`
  },
  {
    filename: 'huma-finance-payfi-credit.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="humaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#06B6D4"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#041118"/>
  <circle cx="50" cy="50" r="32" stroke="url(#humaGrad)" stroke-width="5" fill="none"/>
  <path d="M36 34 L36 66 M64 34 L64 66 M36 50 L64 50" stroke="#38BDF8" stroke-width="6" stroke-linecap="round"/>
</svg>`
  },
  {
    filename: 't3rn-cross-chain-finality.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="t3rnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EC4899"/>
      <stop offset="100%" stop-color="#A855F7"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#150814"/>
  <polygon points="50,22 78,70 22,70" stroke="url(#t3rnGrad)" stroke-width="5" fill="none"/>
  <polygon points="50,38 66,66 34,66" fill="url(#t3rnGrad)" opacity="0.6"/>
  <circle cx="50" cy="52" r="5" fill="#F472B6"/>
</svg>`
  },
  {
    filename: 'satlayer-bitcoin-restaking.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="satGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#B45309"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#140D04"/>
  <circle cx="50" cy="50" r="32" stroke="url(#satGrad)" stroke-width="5" fill="none"/>
  <path d="M42 34 L54 34 C59 34 62 37 62 41 C62 45 59 47 55 48 C60 49 63 52 63 56 C63 61 59 64 54 64 L42 64 Z M48 40 L48 46 L53 46 C55 46 57 45 57 43 C57 41 55 40 53 40 Z M48 52 L48 58 L54 58 C56 58 58 57 58 55 C58 53 56 52 54 52 Z" fill="#FBBF24"/>
  <line x1="48" y1="30" x2="48" y2="34" stroke="#FBBF24" stroke-width="3"/>
  <line x1="54" y1="30" x2="54" y2="34" stroke="#FBBF24" stroke-width="3"/>
  <line x1="48" y1="64" x2="48" y2="68" stroke="#FBBF24" stroke-width="3"/>
  <line x1="54" y1="64" x2="54" y2="68" stroke="#FBBF24" stroke-width="3"/>
</svg>`
  },
  {
    filename: 'hyperbolic-decentralized-gpu.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="hypGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06B6D4"/>
      <stop offset="100%" stop-color="#3B82F6"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#05101A"/>
  <rect x="28" y="28" width="44" height="44" rx="8" stroke="url(#hypGrad)" stroke-width="4" fill="none"/>
  <rect x="38" y="38" width="24" height="24" rx="4" fill="url(#hypGrad)" opacity="0.6"/>
  <circle cx="50" cy="50" r="4" fill="#67E8F9"/>
  <line x1="36" y1="20" x2="36" y2="28" stroke="#38BDF8" stroke-width="3"/>
  <line x1="50" y1="20" x2="50" y2="28" stroke="#38BDF8" stroke-width="3"/>
  <line x1="64" y1="20" x2="64" y2="28" stroke="#38BDF8" stroke-width="3"/>
  <line x1="36" y1="72" x2="36" y2="80" stroke="#38BDF8" stroke-width="3"/>
  <line x1="50" y1="72" x2="50" y2="80" stroke="#38BDF8" stroke-width="3"/>
  <line x1="64" y1="72" x2="64" y2="80" stroke="#38BDF8" stroke-width="3"/>
</svg>`
  },
  {
    filename: 'monad-ecosystem-fund.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="monadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8338EC"/>
      <stop offset="100%" stop-color="#3A86FF"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#0C081A"/>
  <circle cx="50" cy="50" r="32" stroke="url(#monadGrad)" stroke-width="5" fill="none"/>
  <polygon points="50,28 68,62 32,62" fill="url(#monadGrad)"/>
  <circle cx="50" cy="48" r="6" fill="#C084FC"/>
</svg>`
  },
  {
    filename: 'biconomy-dan-account.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="bicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF5B00"/>
      <stop offset="100%" stop-color="#FF9000"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#140803"/>
  <circle cx="50" cy="50" r="30" stroke="url(#bicGrad)" stroke-width="5" fill="none"/>
  <path d="M38 34 L54 34 C60 34 64 38 64 43 C64 47 61 50 56 51 C62 52 65 56 65 61 C65 66 60 70 54 70 L38 70 Z M46 41 L46 48 L53 48 C55 48 57 47 57 45 C57 43 55 41 53 41 Z M46 55 L46 63 L54 63 C56 63 58 61 58 59 C58 57 56 55 54 55 Z" fill="#FB923C"/>
</svg>`
  },
  {
    filename: 'dmail-network-web3.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="dmailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3B82F6"/>
      <stop offset="100%" stop-color="#1D4ED8"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#050B18"/>
  <rect x="24" y="32" width="52" height="36" rx="6" stroke="url(#dmailGrad)" stroke-width="4" fill="none"/>
  <path d="M26 34 L50 52 L74 34" stroke="#60A5FA" stroke-width="4" stroke-linecap="round" fill="none"/>
  <circle cx="50" cy="62" r="3" fill="#93C5FD"/>
</svg>`
  },
  {
    filename: 'syndicate-io-communities.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="synGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10B981"/>
      <stop offset="100%" stop-color="#06B6D4"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#051210"/>
  <circle cx="50" cy="38" r="12" fill="url(#synGrad)"/>
  <path d="M28 72 C28 60 38 52 50 52 C62 52 72 60 72 72 Z" fill="url(#synGrad)" opacity="0.8"/>
  <circle cx="50" cy="38" r="5" fill="#A7F3D0"/>
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

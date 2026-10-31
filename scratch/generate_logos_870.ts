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
    filename: 'blast-gold-incentives.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="blastGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCFC03"/>
      <stop offset="100%" stop-color="#FFDD00"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#000000"/>
  <path d="M30 25 L65 25 C75 25 80 32 75 42 C72 48 65 52 58 52 C68 54 72 62 67 72 C63 80 52 82 40 82 L20 82 Z M35 37 L30 50 L48 50 C54 50 58 46 59 42 C60 38 56 37 50 37 Z M28 58 L24 72 L45 72 C52 72 56 68 57 63 C58 59 54 58 48 58 Z" fill="url(#blastGrad)"/>
</svg>`
  },
  {
    filename: 'dinari-dshares-rwa.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="dinariGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#0EA5E9"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#05101A"/>
  <circle cx="50" cy="50" r="32" stroke="url(#dinariGrad)" stroke-width="5" fill="none"/>
  <path d="M38 32 L52 32 C62 32 68 39 68 50 C68 61 62 68 52 68 L38 68 Z M48 42 L48 58 L52 58 C57 58 60 55 60 50 C60 45 57 42 52 42 Z" fill="#38BDF8"/>
  <circle cx="68" cy="32" r="4" fill="#38BDF8"/>
</svg>`
  },
  {
    filename: 'valantis-modular-amm.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="valGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6366F1"/>
      <stop offset="100%" stop-color="#8B5CF6"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#0A091A"/>
  <polygon points="50,22 80,74 20,74" stroke="url(#valGrad)" stroke-width="5" fill="none"/>
  <polygon points="50,38 70,70 30,70" fill="url(#valGrad)" opacity="0.6"/>
  <circle cx="50" cy="56" r="6" fill="#C084FC"/>
</svg>`
  },
  {
    filename: 'fluence-serverless-cloud.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="fluGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F43F5E"/>
      <stop offset="100%" stop-color="#E11D48"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#14060A"/>
  <circle cx="50" cy="50" r="16" fill="url(#fluGrad)"/>
  <circle cx="30" cy="35" r="8" fill="#FB7185" opacity="0.8"/>
  <circle cx="70" cy="35" r="8" fill="#FB7185" opacity="0.8"/>
  <circle cx="50" cy="74" r="10" fill="#FDA4AF" opacity="0.8"/>
  <line x1="50" y1="50" x2="30" y2="35" stroke="#F43F5E" stroke-width="3"/>
  <line x1="50" y1="50" x2="70" y2="35" stroke="#F43F5E" stroke-width="3"/>
  <line x1="50" y1="50" x2="50" y2="74" stroke="#F43F5E" stroke-width="3"/>
</svg>`
  },
  {
    filename: 'spacemesh-post-mining.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="spaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10B981"/>
      <stop offset="100%" stop-color="#059669"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#04120C"/>
  <circle cx="50" cy="50" r="32" stroke="url(#spaceGrad)" stroke-width="4" stroke-dasharray="4 4" fill="none"/>
  <rect x="36" y="36" width="28" height="28" rx="6" fill="url(#spaceGrad)"/>
  <circle cx="50" cy="50" r="5" fill="#A7F3D0"/>
</svg>`
  },
  {
    filename: 'zenith-cross-margin-perp.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="zenithGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06B6D4"/>
      <stop offset="100%" stop-color="#3B82F6"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#05101A"/>
  <path d="M28 28 L72 28 L34 72 L72 72" stroke="url(#zenithGrad)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="50" cy="50" r="5" fill="#67E8F9"/>
</svg>`
  },
  {
    filename: 'mitosis-liquidity-vaults.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="mitoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8B5CF6"/>
      <stop offset="100%" stop-color="#D946EF"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#110A1A"/>
  <circle cx="38" cy="50" r="18" fill="url(#mitoGrad)" opacity="0.8"/>
  <circle cx="62" cy="50" r="18" fill="url(#mitoGrad)" opacity="0.8"/>
  <circle cx="50" cy="50" r="8" fill="#F472B6"/>
</svg>`
  },
  {
    filename: 'hyperbeat-auto-compounder.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="beatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EC4899"/>
      <stop offset="100%" stop-color="#F43F5E"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#150810"/>
  <path d="M22 52 L34 52 L42 30 L52 70 L62 44 L70 52 L80 52" stroke="url(#beatGrad)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="52" cy="70" r="4" fill="#FDA4AF"/>
</svg>`
  },
  {
    filename: 'vanar-chain-ai-gaming.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="vanarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#22C55E"/>
      <stop offset="100%" stop-color="#059669"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#041208"/>
  <path d="M24 30 L50 74 L76 30 L62 30 L50 56 L38 30 Z" fill="url(#vanarGrad)"/>
  <circle cx="50" cy="30" r="6" fill="#86EFAC"/>
</svg>`
  },
  {
    filename: 'gasp-cross-chain-dex.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="gaspGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F97316"/>
      <stop offset="100%" stop-color="#FB923C"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#140803"/>
  <circle cx="50" cy="50" r="30" stroke="url(#gaspGrad)" stroke-width="5" fill="none"/>
  <path d="M38 50 C38 42 44 36 52 36 C58 36 62 40 64 44 L54 44 C53 42 51 40 48 40 C44 40 42 44 42 50 C42 56 44 60 48 60 C51 60 53 58 54 56 L48 56 L48 50 L64 50 L64 64 L56 64 C53 66 48 66 44 64 C39 61 38 56 38 50 Z" fill="#FED7AA"/>
</svg>`
  },
  {
    filename: 'vultisig-mpc-vault.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="vultiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06B6D4"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#05121A"/>
  <polygon points="50,20 78,35 78,65 50,80 22,65 22,35" stroke="url(#vultiGrad)" stroke-width="4" fill="none"/>
  <circle cx="50" cy="50" r="10" fill="url(#vultiGrad)"/>
  <path d="M50 32 L50 40 M50 60 L50 68 M34 50 L40 50 M60 50 L66 50" stroke="#38BDF8" stroke-width="3" stroke-linecap="round"/>
</svg>`
  },
  {
    filename: 'hyperlend-hyperliquid-lending.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="hlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10B981"/>
      <stop offset="100%" stop-color="#06B6D4"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#041210"/>
  <path d="M32 30 L32 70 M68 30 L68 70 M32 50 L68 50" stroke="url(#hlGrad)" stroke-width="7" stroke-linecap="round"/>
  <circle cx="50" cy="32" r="5" fill="#34D399"/>
  <circle cx="50" cy="68" r="5" fill="#38BDF8"/>
</svg>`
  },
  {
    filename: 'superposition-stylus-l3.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="spGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EAB308"/>
      <stop offset="100%" stop-color="#CA8A04"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#141105"/>
  <circle cx="50" cy="38" r="18" stroke="url(#spGrad)" stroke-width="4" fill="none"/>
  <circle cx="50" cy="62" r="18" stroke="url(#spGrad)" stroke-width="4" fill="none"/>
  <circle cx="50" cy="50" r="6" fill="#FDE047"/>
</svg>`
  },
  {
    filename: 'karrat-protocol-gaming.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="karGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#D97706"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#140E04"/>
  <polygon points="50,18 78,40 68,78 32,78 22,40" stroke="url(#karGrad)" stroke-width="4" fill="none"/>
  <circle cx="50" cy="50" r="12" fill="url(#karGrad)"/>
  <circle cx="50" cy="50" r="4" fill="#FEF3C7"/>
</svg>`
  },
  {
    filename: 'kuru-orderbook-monad.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="kuruGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8338EC"/>
      <stop offset="100%" stop-color="#A855F7"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#0C071A"/>
  <rect x="28" y="28" width="44" height="44" rx="10" stroke="url(#kuruGrad)" stroke-width="4" fill="none"/>
  <path d="M40 38 L60 62 M60 38 L40 62" stroke="#C084FC" stroke-width="5" stroke-linecap="round"/>
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

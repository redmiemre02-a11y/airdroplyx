import fs from 'fs';
import path from 'path';

// 1. Generate SVGs for public/images/airdrops/
const svgOutputDir = path.resolve('public/images/airdrops');
if (!fs.existsSync(svgOutputDir)) {
  fs.mkdirSync(svgOutputDir, { recursive: true });
}

const svgIcons: Record<string, string> = {
  'honeypot-finance': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <defs>
    <linearGradient id="hpGrad" x1="20" y1="20" x2="108" y2="108" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#F59E0B" />
      <stop offset="50%" stop-color="#D97706" />
      <stop offset="100%" stop-color="#B45309" />
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="#1C1405" />
  <circle cx="64" cy="64" r="42" stroke="url(#hpGrad)" stroke-width="4" stroke-dasharray="8 6" />
  <!-- Honeycomb Pot -->
  <path d="M44 48H84L90 76C90 88 78 96 64 96C50 96 38 88 38 76L44 48Z" fill="url(#hpGrad)" />
  <path d="M40 44H88V48H40V44Z" rx="2" fill="#FCD34D" />
  <circle cx="64" cy="72" r="10" fill="#1C1405" />
  <circle cx="64" cy="72" r="6" fill="#FCD34D" />
</svg>`,

  'talent-protocol': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <defs>
    <linearGradient id="talentGrad" x1="24" y1="24" x2="104" y2="104" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#6366F1" />
      <stop offset="100%" stop-color="#4F46E5" />
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="#0B0D1B" />
  <circle cx="64" cy="64" r="44" stroke="url(#talentGrad)" stroke-width="3" />
  <!-- Talent Badge / Star Icon -->
  <path d="M64 32L72 52L94 56L78 72L82 94L64 84L46 94L50 72L34 56L56 52L64 32Z" fill="url(#talentGrad)" />
  <circle cx="64" cy="64" r="8" fill="#FFFFFF" />
</svg>`,

  'magma-story': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <defs>
    <linearGradient id="magmaGrad" x1="20" y1="20" x2="108" y2="108" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FF5722" />
      <stop offset="50%" stop-color="#E64A19" />
      <stop offset="100%" stop-color="#BF360C" />
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="#1B0A06" />
  <!-- Magma Flame / Liquid Drop -->
  <circle cx="64" cy="64" r="42" stroke="url(#magmaGrad)" stroke-width="3" stroke-dasharray="6 4" />
  <path d="M64 30C64 30 42 62 42 78C42 90.15 51.85 100 64 100C76.15 100 86 90.15 86 78C86 62 64 30 64 30Z" fill="url(#magmaGrad)" />
  <circle cx="64" cy="80" r="12" fill="#FFA726" />
</svg>`,

  'smilee-finance': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <defs>
    <linearGradient id="smileeGrad" x1="20" y1="20" x2="108" y2="108" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#10B981" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="#041B12" />
  <circle cx="64" cy="64" r="42" stroke="url(#smileeGrad)" stroke-width="4" />
  <!-- Eyes -->
  <circle cx="50" cy="52" r="6" fill="#34D399" />
  <circle cx="78" cy="52" r="6" fill="#34D399" />
  <!-- Smile Curve (Volatility arc) -->
  <path d="M42 68C48 84 80 84 86 68" stroke="url(#smileeGrad)" stroke-width="6" stroke-linecap="round" />
</svg>`,

  'towns-protocol': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <defs>
    <linearGradient id="townsGrad" x1="20" y1="20" x2="108" y2="108" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#06B6D4" />
      <stop offset="100%" stop-color="#0284C7" />
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="#081822" />
  <!-- City / Nodes Grid -->
  <circle cx="64" cy="64" r="42" stroke="url(#townsGrad)" stroke-width="3" />
  <rect x="42" y="58" width="16" height="34" rx="3" fill="url(#townsGrad)" />
  <rect x="62" y="44" width="16" height="48" rx="3" fill="#38BDF8" />
  <rect x="82" y="66" width="16" height="26" rx="3" fill="url(#townsGrad)" />
  <circle cx="70" cy="36" r="4" fill="#E0F2FE" />
</svg>`,

  'relay-bridge': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <defs>
    <linearGradient id="relayGrad" x1="20" y1="20" x2="108" y2="108" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#8B5CF6" />
      <stop offset="100%" stop-color="#6D28D9" />
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="#130C24" />
  <circle cx="64" cy="64" r="42" stroke="url(#relayGrad)" stroke-width="3" stroke-dasharray="6 4" />
  <!-- Fast Bridge Arrows / Lightning -->
  <path d="M68 34L40 68H64L60 94L88 60H64L68 34Z" fill="url(#relayGrad)" />
</svg>`,

  'beraborrow': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <defs>
    <linearGradient id="bbGrad" x1="20" y1="20" x2="108" y2="108" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FBBF24" />
      <stop offset="100%" stop-color="#D97706" />
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="#201505" />
  <!-- Shield Vault -->
  <path d="M64 30L92 42V66C92 82 80 96 64 102C48 96 36 82 36 66V42L64 30Z" fill="url(#bbGrad)" />
  <circle cx="64" cy="64" r="12" fill="#201505" />
  <circle cx="64" cy="64" r="6" fill="#FDE68A" />
</svg>`,

  '0g-labs': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <defs>
    <linearGradient id="zeroGGrad" x1="20" y1="20" x2="108" y2="108" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38BDF8" />
      <stop offset="50%" stop-color="#0284C7" />
      <stop offset="100%" stop-color="#0369A1" />
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="#04121F" />
  <!-- Orbit Zero Gravity Ring -->
  <ellipse cx="64" cy="64" rx="44" ry="20" stroke="url(#zeroGGrad)" stroke-width="4" transform="rotate(-25 64 64)" />
  <circle cx="64" cy="64" r="22" fill="url(#zeroGGrad)" />
  <circle cx="64" cy="64" r="14" fill="#04121F" />
  <circle cx="64" cy="64" r="7" fill="#38BDF8" />
  <circle cx="92" cy="52" r="5" fill="#E0F2FE" />
</svg>`,

  'zerobase-prover': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <defs>
    <linearGradient id="zbGrad" x1="20" y1="20" x2="108" y2="108" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#818CF8" />
      <stop offset="50%" stop-color="#6366F1" />
      <stop offset="100%" stop-color="#4338CA" />
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="#0C0E1E" />
  <circle cx="64" cy="64" r="42" stroke="url(#zbGrad)" stroke-width="3" stroke-dasharray="6 6" />
  <!-- ZK Monogram / Circuit Matrix -->
  <path d="M44 46H84L52 82H84" stroke="url(#zbGrad)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <circle cx="44" cy="46" r="4" fill="#C7D2FE" />
  <circle cx="84" cy="82" r="4" fill="#C7D2FE" />
</svg>`,

  'valence-protocol': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <defs>
    <linearGradient id="valGrad" x1="20" y1="20" x2="108" y2="108" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#10B981" />
      <stop offset="50%" stop-color="#06B6D4" />
      <stop offset="100%" stop-color="#0284C7" />
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="#03161A" />
  <!-- Valence Atomic Bonds -->
  <circle cx="64" cy="38" r="12" fill="url(#valGrad)" />
  <circle cx="42" cy="78" r="12" fill="url(#valGrad)" />
  <circle cx="86" cy="78" r="12" fill="url(#valGrad)" />
  <line x1="64" y1="38" x2="42" y2="78" stroke="#38BDF8" stroke-width="4" />
  <line x1="64" y1="38" x2="86" y2="78" stroke="#38BDF8" stroke-width="4" />
  <line x1="42" y1="78" x2="86" y2="78" stroke="#38BDF8" stroke-width="4" />
  <circle cx="64" cy="65" r="5" fill="#FFFFFF" />
</svg>`,

  'openvm-network': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <defs>
    <linearGradient id="ovmGrad" x1="20" y1="20" x2="108" y2="108" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#14B8A6" />
      <stop offset="100%" stop-color="#0F766E" />
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="#041A18" />
  <!-- VM Chip / Processor Core -->
  <rect x="40" y="40" width="48" height="48" rx="10" stroke="url(#ovmGrad)" stroke-width="4" />
  <path d="M40 52H28M40 64H28M40 76H28" stroke="url(#ovmGrad)" stroke-width="3" stroke-linecap="round" />
  <path d="M88 52H100M88 64H100M88 76H100" stroke="url(#ovmGrad)" stroke-width="3" stroke-linecap="round" />
  <path d="M52 40V28M64 40V28M76 40V28" stroke="url(#ovmGrad)" stroke-width="3" stroke-linecap="round" />
  <path d="M52 88V100M64 88V100M76 88V100" stroke="url(#ovmGrad)" stroke-width="3" stroke-linecap="round" />
  <circle cx="64" cy="64" r="10" fill="#5EEAD4" />
</svg>`,

  'nebra-zk': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <defs>
    <linearGradient id="nebGrad" x1="20" y1="20" x2="108" y2="108" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#EC4899" />
      <stop offset="50%" stop-color="#A855F7" />
      <stop offset="100%" stop-color="#7C3AED" />
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="#180721" />
  <!-- Universal Proof Aggregation Prism -->
  <circle cx="64" cy="64" r="44" stroke="url(#nebGrad)" stroke-width="3" stroke-dasharray="6 4" />
  <polygon points="64,32 94,84 34,84" fill="none" stroke="url(#nebGrad)" stroke-width="5" stroke-linejoin="round" />
  <circle cx="64" cy="66" r="8" fill="#F472B6" />
</svg>`,

  'rooch-network': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <defs>
    <linearGradient id="roochGrad" x1="20" y1="20" x2="108" y2="108" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#F97316" />
      <stop offset="50%" stop-color="#EA580C" />
      <stop offset="100%" stop-color="#C2410C" />
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="#1F0E04" />
  <!-- Move Execution Rocket / Pipeline -->
  <circle cx="64" cy="64" r="42" stroke="url(#roochGrad)" stroke-width="3" />
  <path d="M64 34L82 68H68V92H60V68H46L64 34Z" fill="url(#roochGrad)" />
  <circle cx="64" cy="68" r="6" fill="#FED7AA" />
</svg>`,

  'term-structure-protocol': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <defs>
    <linearGradient id="tsGrad" x1="20" y1="20" x2="108" y2="108" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#3B82F6" />
      <stop offset="50%" stop-color="#1D4ED8" />
      <stop offset="100%" stop-color="#1E3A8A" />
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="#0A1224" />
  <!-- Yield Curve / Pillars -->
  <rect x="36" y="66" width="12" height="28" rx="3" fill="url(#tsGrad)" />
  <rect x="52" y="52" width="12" height="42" rx="3" fill="#60A5FA" />
  <rect x="68" y="42" width="12" height="52" rx="3" fill="url(#tsGrad)" />
  <rect x="84" y="34" width="12" height="60" rx="3" fill="#93C5FD" />
  <path d="M36 68L52 54L68 44L84 36" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" />
</svg>`,

  'tadle-market': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <defs>
    <linearGradient id="tadleGrad" x1="20" y1="20" x2="108" y2="108" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#D946EF" />
      <stop offset="50%" stop-color="#C026D3" />
      <stop offset="100%" stop-color="#9333EA" />
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="#1B0621" />
  <circle cx="64" cy="64" r="42" stroke="url(#tadleGrad)" stroke-width="3" stroke-dasharray="6 4" />
  <!-- Pre-Market Exchange Dual Token Exchange Arrows -->
  <path d="M44 54H76L68 44M84 74H52L60 84" stroke="url(#tadleGrad)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
  <circle cx="64" cy="64" r="8" fill="#E879F9" />
</svg>`
};

for (const [filename, content] of Object.entries(svgIcons)) {
  const filePath = path.join(svgOutputDir, `${filename}.svg`);
  fs.writeFileSync(filePath, content.trim(), 'utf8');
}
console.log(`Generated ${Object.keys(svgIcons).length} SVG logos in ${svgOutputDir}`);

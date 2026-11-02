import fs from 'fs';
import path from 'path';

const projectRoot = 'C:\\Users\\cigo\\.gemini\\antigravity\\scratch\\airdroplyx';
const logosDir = path.join(projectRoot, 'public', 'images', 'airdrops');

const logos = {
  'alpen-labs-zk.svg': `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" rx="24" fill="#0D1117"/>
  <circle cx="50" cy="50" r="36" fill="url(#alpen_glow)" fill-opacity="0.3"/>
  <!-- Mountain Peaks representing Alpen / Bitcoin ZK -->
  <path d="M50 20L22 70H78L50 20Z" fill="url(#alpen_grad)"/>
  <path d="M50 20L40 38L50 44L60 38L50 20Z" fill="#FFFFFF"/>
  <path d="M62 48L78 70H46L62 48Z" fill="url(#alpen_grad2)"/>
  <defs>
    <linearGradient id="alpen_grad" x1="22" y1="20" x2="78" y2="70" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F59E0B"/>
      <stop offset="1" stop-color="#D97706"/>
    </linearGradient>
    <linearGradient id="alpen_grad2" x1="46" y1="48" x2="78" y2="70" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FBBF24"/>
      <stop offset="1" stop-color="#B45309"/>
    </linearGradient>
    <radialGradient id="alpen_glow" cx="50" cy="50" r="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F59E0B"/>
      <stop offset="1" stop-color="#0D1117" stop-opacity="0"/>
    </radialGradient>
  </defs>
</svg>`,

  'hyle-zk-settlement.svg': `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" rx="24" fill="#090A0F"/>
  <circle cx="50" cy="50" r="36" fill="url(#hyle_glow)" fill-opacity="0.25"/>
  <!-- Modular Proof Layers / Hylé Emblem -->
  <rect x="26" y="28" width="48" height="10" rx="5" fill="url(#hyle_cyan)"/>
  <rect x="22" y="45" width="56" height="10" rx="5" fill="url(#hyle_purple)"/>
  <rect x="30" y="62" width="40" height="10" rx="5" fill="url(#hyle_pink)"/>
  <circle cx="50" cy="50" r="5" fill="#FFF"/>
  <defs>
    <linearGradient id="hyle_cyan" x1="26" y1="28" x2="74" y2="38" gradientUnits="userSpaceOnUse">
      <stop stop-color="#06B6D4"/>
      <stop offset="1" stop-color="#3B82F6"/>
    </linearGradient>
    <linearGradient id="hyle_purple" x1="22" y1="45" x2="78" y2="55" gradientUnits="userSpaceOnUse">
      <stop stop-color="#8B5CF6"/>
      <stop offset="1" stop-color="#6366F1"/>
    </linearGradient>
    <linearGradient id="hyle_pink" x1="30" y1="62" x2="70" y2="72" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EC4899"/>
      <stop offset="1" stop-color="#A855F7"/>
    </linearGradient>
    <radialGradient id="hyle_glow" cx="50" cy="50" r="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#8B5CF6"/>
      <stop offset="1" stop-color="#090A0F" stop-opacity="0"/>
    </radialGradient>
  </defs>
</svg>`,

  'nexus-zkvm-network.svg': `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" rx="24" fill="#07090E"/>
  <circle cx="50" cy="50" r="36" fill="url(#nexus_glow)" fill-opacity="0.3"/>
  <!-- Interconnected Distributed Nodes (Nexus) -->
  <path d="M50 20L78 36V64L50 80L22 64V36L50 20Z" stroke="url(#nexus_grad)" stroke-width="4" fill="none"/>
  <circle cx="50" cy="20" r="6" fill="#38BDF8"/>
  <circle cx="78" cy="36" r="6" fill="#818CF8"/>
  <circle cx="78" cy="64" r="6" fill="#C084FC"/>
  <circle cx="50" cy="80" r="6" fill="#38BDF8"/>
  <circle cx="22" cy="64" r="6" fill="#818CF8"/>
  <circle cx="22" cy="36" r="6" fill="#C084FC"/>
  <circle cx="50" cy="50" r="10" fill="#FFFFFF"/>
  <defs>
    <linearGradient id="nexus_grad" x1="22" y1="20" x2="78" y2="80" gradientUnits="userSpaceOnUse">
      <stop stop-color="#38BDF8"/>
      <stop offset="0.5" stop-color="#818CF8"/>
      <stop offset="1" stop-color="#C084FC"/>
    </linearGradient>
    <radialGradient id="nexus_glow" cx="50" cy="50" r="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#818CF8"/>
      <stop offset="1" stop-color="#07090E" stop-opacity="0"/>
    </radialGradient>
  </defs>
</svg>`,

  'avantis-perps-dex.svg': `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" rx="24" fill="#0B132B"/>
  <circle cx="50" cy="50" r="36" fill="url(#avantis_glow)" fill-opacity="0.3"/>
  <!-- Dynamic Chevron Surge (Avantis Leverage) -->
  <path d="M26 68L50 26L74 68L50 54L26 68Z" fill="url(#avantis_grad)"/>
  <path d="M38 74L50 64L62 74L50 68L38 74Z" fill="#6FFFE9"/>
  <defs>
    <linearGradient id="avantis_grad" x1="26" y1="26" x2="74" y2="68" gradientUnits="userSpaceOnUse">
      <stop stop-color="#48E5C2"/>
      <stop offset="1" stop-color="#3AAFA9"/>
    </linearGradient>
    <radialGradient id="avantis_glow" cx="50" cy="50" r="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#48E5C2"/>
      <stop offset="1" stop-color="#0B132B" stop-opacity="0"/>
    </radialGradient>
  </defs>
</svg>`,

  'hyperlane-nexus-bridge.svg': `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" rx="24" fill="#0F172A"/>
  <circle cx="50" cy="50" r="36" fill="url(#hyperlane_glow)" fill-opacity="0.3"/>
  <!-- Modular Interoperability Hyper-Fast Lane -->
  <path d="M24 50H76" stroke="url(#hl_grad)" stroke-width="6" stroke-linecap="round"/>
  <path d="M36 32L50 50L36 68" stroke="url(#hl_grad)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M54 32L68 50L54 68" stroke="#38BDF8" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
  <defs>
    <linearGradient id="hl_grad" x1="24" y1="32" x2="76" y2="68" gradientUnits="userSpaceOnUse">
      <stop stop-color="#38BDF8"/>
      <stop offset="1" stop-color="#818CF8"/>
    </linearGradient>
    <radialGradient id="hyperlane_glow" cx="50" cy="50" r="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#38BDF8"/>
      <stop offset="1" stop-color="#0F172A" stop-opacity="0"/>
    </radialGradient>
  </defs>
</svg>`,

  'reya-network-dex.svg': `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" rx="24" fill="#0F0F14"/>
  <circle cx="50" cy="50" r="36" fill="url(#reya_glow)" fill-opacity="0.25"/>
  <!-- Ray of Liquidity / R Crest -->
  <path d="M30 24H54C64 24 70 30 70 38C70 46 64 52 54 52H44V76H30V24Z" fill="url(#reya_grad)"/>
  <path d="M52 52L72 76H56L42 56H52Z" fill="#F43F5E"/>
  <defs>
    <linearGradient id="reya_grad" x1="30" y1="24" x2="70" y2="76" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FB7185"/>
      <stop offset="1" stop-color="#E11D48"/>
    </linearGradient>
    <radialGradient id="reya_glow" cx="50" cy="50" r="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F43F5E"/>
      <stop offset="1" stop-color="#0F0F14" stop-opacity="0"/>
    </radialGradient>
  </defs>
</svg>`,

  'side-protocol-mesh.svg': `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" rx="24" fill="#111827"/>
  <circle cx="50" cy="50" r="36" fill="url(#side_glow)" fill-opacity="0.3"/>
  <!-- Distributed Mesh Cross-Swap (Side Protocol) -->
  <path d="M32 30H68L56 46H20L32 30Z" fill="url(#side_orange)"/>
  <path d="M68 70H32L44 54H80L68 70Z" fill="url(#side_blue)"/>
  <circle cx="50" cy="50" r="7" fill="#FFFFFF"/>
  <defs>
    <linearGradient id="side_orange" x1="20" y1="30" x2="68" y2="46" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F97316"/>
      <stop offset="1" stop-color="#EA580C"/>
    </linearGradient>
    <linearGradient id="side_blue" x1="32" y1="54" x2="80" y2="70" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0EA5E9"/>
      <stop offset="1" stop-color="#0284C7"/>
    </linearGradient>
    <radialGradient id="side_glow" cx="50" cy="50" r="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F97316"/>
      <stop offset="1" stop-color="#111827" stop-opacity="0"/>
    </radialGradient>
  </defs>
</svg>`,

  'corn-network-btcn.svg': `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" rx="24" fill="#0C140C"/>
  <circle cx="50" cy="50" r="36" fill="url(#corn_glow)" fill-opacity="0.3"/>
  <!-- Golden Corn Kernel / Bitcoin Green Leaf -->
  <ellipse cx="50" cy="50" rx="18" ry="26" fill="url(#corn_gold)"/>
  <path d="M50 24C44 32 38 42 38 54C38 64 42 70 50 74C58 70 62 64 62 54C62 42 56 32 50 24Z" fill="#FBBF24"/>
  <path d="M30 68C26 50 36 34 50 24C40 38 36 54 30 68Z" fill="#10B981"/>
  <path d="M70 68C74 50 64 34 50 24C60 38 64 54 70 68Z" fill="#059669"/>
  <defs>
    <linearGradient id="corn_gold" x1="38" y1="24" x2="62" y2="74" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FDE047"/>
      <stop offset="1" stop-color="#CA8A04"/>
    </linearGradient>
    <radialGradient id="corn_glow" cx="50" cy="50" r="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EAB308"/>
      <stop offset="1" stop-color="#0C140C" stop-opacity="0"/>
    </radialGradient>
  </defs>
</svg>`,

  'symbiosis-omnichain.svg': `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" rx="24" fill="#0A0F1D"/>
  <circle cx="50" cy="50" r="36" fill="url(#sym_glow)" fill-opacity="0.3"/>
  <!-- Symbiosis Interlocking Rings / Infinity Omnichain -->
  <circle cx="42" cy="50" r="18" stroke="url(#sym_cyan)" stroke-width="6" fill="none"/>
  <circle cx="58" cy="50" r="18" stroke="url(#sym_green)" stroke-width="6" fill="none"/>
  <circle cx="50" cy="50" r="4" fill="#FFF"/>
  <defs>
    <linearGradient id="sym_cyan" x1="24" y1="32" x2="60" y2="68" gradientUnits="userSpaceOnUse">
      <stop stop-color="#06B6D4"/>
      <stop offset="1" stop-color="#3B82F6"/>
    </linearGradient>
    <linearGradient id="sym_green" x1="40" y1="32" x2="76" y2="68" gradientUnits="userSpaceOnUse">
      <stop stop-color="#10B981"/>
      <stop offset="1" stop-color="#059669"/>
    </linearGradient>
    <radialGradient id="sym_glow" cx="50" cy="50" r="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#06B6D4"/>
      <stop offset="1" stop-color="#0A0F1D" stop-opacity="0"/>
    </radialGradient>
  </defs>
</svg>`,

  'morpho-isolated-lending.svg': `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" rx="24" fill="#0D1117"/>
  <circle cx="50" cy="50" r="36" fill="url(#morpho_glow)" fill-opacity="0.3"/>
  <!-- Morpho Butterfly Wings / Efficient Yield Vaults -->
  <path d="M50 30C42 22 26 26 24 40C22 52 38 64 50 72C62 64 78 52 76 40C74 26 58 22 50 30Z" fill="url(#morpho_grad)"/>
  <circle cx="50" cy="46" r="6" fill="#FFFFFF"/>
  <defs>
    <linearGradient id="morpho_grad" x1="24" y1="22" x2="76" y2="72" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2563EB"/>
      <stop offset="0.5" stop-color="#3B82F6"/>
      <stop offset="1" stop-color="#60A5FA"/>
    </linearGradient>
    <radialGradient id="morpho_glow" cx="50" cy="50" r="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#3B82F6"/>
      <stop offset="1" stop-color="#0D1117" stop-opacity="0"/>
    </radialGradient>
  </defs>
</svg>`
};

for (const [filename, svg] of Object.entries(logos)) {
  fs.writeFileSync(path.join(logosDir, filename), svg, 'utf8');
  console.log(`Generated logo: ${filename}`);
}
console.log('All 10 vector SVG logos successfully generated!');

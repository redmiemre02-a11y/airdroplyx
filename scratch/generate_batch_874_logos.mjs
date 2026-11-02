import fs from 'fs';
import path from 'path';

const logosDir = path.resolve('public/images/airdrops');

const logos = {
  'cysic-zk-network.svg': `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" rx="24" fill="#0A0D1A"/>
  <circle cx="50" cy="50" r="38" fill="url(#cysic_glow)" fill-opacity="0.25"/>
  <rect x="26" y="26" width="48" height="48" rx="10" stroke="url(#cysic_grad)" stroke-width="3.5"/>
  <path d="M50 20V26M50 74V80M20 50H26M74 50H80" stroke="url(#cysic_grad)" stroke-width="3" stroke-linecap="round"/>
  <circle cx="50" cy="50" r="14" fill="url(#cysic_grad)" fill-opacity="0.3"/>
  <path d="M42 50L48 56L58 44" stroke="#00F0FF" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <defs>
    <linearGradient id="cysic_grad" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
      <stop stop-color="#00F0FF"/>
      <stop offset="1" stop-color="#7000FF"/>
    </linearGradient>
    <radialGradient id="cysic_glow" cx="50" cy="50" r="38" gradientUnits="userSpaceOnUse">
      <stop stop-color="#00F0FF"/>
      <stop offset="1" stop-color="#0A0D1A" stop-opacity="0"/>
    </radialGradient>
  </defs>
</svg>`,

  'rise-chain-parallel-evm.svg': `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" rx="24" fill="#120B1A"/>
  <circle cx="50" cy="50" r="38" fill="url(#rise_glow)" fill-opacity="0.3"/>
  <!-- Parallel pipeline upward arrows -->
  <path d="M30 68L30 38L40 48" stroke="url(#rise_grad)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M50 74L50 26L62 38" stroke="url(#rise_grad)" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M70 68L70 42L62 50" stroke="url(#rise_grad)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <defs>
    <linearGradient id="rise_grad" x1="30" y1="74" x2="70" y2="26" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FF3366"/>
      <stop offset="1" stop-color="#FF9900"/>
    </linearGradient>
    <radialGradient id="rise_glow" cx="50" cy="50" r="38" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FF3366"/>
      <stop offset="1" stop-color="#120B1A" stop-opacity="0"/>
    </radialGradient>
  </defs>
</svg>`,

  'termina-svm-solana.svg': `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" rx="24" fill="#0B132B"/>
  <circle cx="50" cy="50" r="38" fill="url(#termina_glow)" fill-opacity="0.25"/>
  <!-- SVM prism chevron geometry -->
  <path d="M26 34H74L64 48H20L26 34Z" fill="url(#termina_grad1)"/>
  <path d="M36 52H80L70 66H16L36 52Z" fill="url(#termina_grad2)"/>
  <circle cx="72" cy="34" r="4" fill="#00FFA3"/>
  <defs>
    <linearGradient id="termina_grad1" x1="20" y1="34" x2="74" y2="48" gradientUnits="userSpaceOnUse">
      <stop stop-color="#00FFA3"/>
      <stop offset="1" stop-color="#00D2FF"/>
    </linearGradient>
    <linearGradient id="termina_grad2" x1="16" y1="52" x2="80" y2="66" gradientUnits="userSpaceOnUse">
      <stop stop-color="#DC1FFF"/>
      <stop offset="1" stop-color="#00FFA3"/>
    </linearGradient>
    <radialGradient id="termina_glow" cx="50" cy="50" r="38" gradientUnits="userSpaceOnUse">
      <stop stop-color="#00FFA3"/>
      <stop offset="1" stop-color="#0B132B" stop-opacity="0"/>
    </radialGradient>
  </defs>
</svg>`,

  'rome-protocol-shared-sequencer.svg': `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" rx="24" fill="#140C24"/>
  <circle cx="50" cy="50" r="36" fill="url(#rome_glow)" fill-opacity="0.3"/>
  <circle cx="50" cy="50" r="28" stroke="url(#rome_grad)" stroke-width="3.5" stroke-dasharray="6 3"/>
  <!-- Roman Arch Pillar Sequencer Symbol -->
  <path d="M38 70V46C38 39.3726 43.3726 34 50 34C56.6274 34 62 39.3726 62 46V70" stroke="url(#rome_grad)" stroke-width="4" stroke-linecap="round"/>
  <path d="M32 70H68" stroke="url(#rome_grad)" stroke-width="4" stroke-linecap="round"/>
  <circle cx="50" cy="46" r="5" fill="#FBBF24"/>
  <defs>
    <linearGradient id="rome_grad" x1="32" y1="34" x2="68" y2="70" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FBBF24"/>
      <stop offset="1" stop-color="#A855F7"/>
    </linearGradient>
    <radialGradient id="rome_glow" cx="50" cy="50" r="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#A855F7"/>
      <stop offset="1" stop-color="#140C24" stop-opacity="0"/>
    </radialGradient>
  </defs>
</svg>`,

  'radius-shared-sequencer.svg': `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" rx="24" fill="#0C1A14"/>
  <circle cx="50" cy="50" r="38" fill="url(#radius_glow)" fill-opacity="0.25"/>
  <!-- Concentric radar circles with encrypted lock core -->
  <circle cx="50" cy="50" r="32" stroke="url(#radius_grad)" stroke-width="2.5" stroke-opacity="0.6"/>
  <circle cx="50" cy="50" r="22" stroke="url(#radius_grad)" stroke-width="3"/>
  <circle cx="50" cy="50" r="10" fill="url(#radius_grad)"/>
  <path d="M50 18V26M50 74V82M18 50H26M74 50H82" stroke="#10B981" stroke-width="3" stroke-linecap="round"/>
  <defs>
    <linearGradient id="radius_grad" x1="18" y1="18" x2="82" y2="82" gradientUnits="userSpaceOnUse">
      <stop stop-color="#10B981"/>
      <stop offset="1" stop-color="#059669"/>
    </linearGradient>
    <radialGradient id="radius_glow" cx="50" cy="50" r="38" gradientUnits="userSpaceOnUse">
      <stop stop-color="#10B981"/>
      <stop offset="1" stop-color="#0C1A14" stop-opacity="0"/>
    </radialGradient>
  </defs>
</svg>`,

  'mira-network-ai.svg': `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" rx="24" fill="#130E26"/>
  <circle cx="50" cy="50" r="38" fill="url(#mira_glow)" fill-opacity="0.3"/>
  <!-- Hexagonal AI verification crystal -->
  <path d="M50 20L76 35V65L50 80L24 65V35L50 20Z" stroke="url(#mira_grad)" stroke-width="3.5" stroke-linejoin="round"/>
  <circle cx="50" cy="50" r="14" fill="url(#mira_grad)" fill-opacity="0.3"/>
  <circle cx="50" cy="50" r="7" fill="#60A5FA"/>
  <path d="M50 20V36M50 64V80M24 35L38 43M62 57L76 65M24 65L38 57M62 43L76 35" stroke="url(#mira_grad)" stroke-width="2.5"/>
  <defs>
    <linearGradient id="mira_grad" x1="24" y1="20" x2="76" y2="80" gradientUnits="userSpaceOnUse">
      <stop stop-color="#60A5FA"/>
      <stop offset="1" stop-color="#C084FC"/>
    </linearGradient>
    <radialGradient id="mira_glow" cx="50" cy="50" r="38" gradientUnits="userSpaceOnUse">
      <stop stop-color="#C084FC"/>
      <stop offset="1" stop-color="#130E26" stop-opacity="0"/>
    </radialGradient>
  </defs>
</svg>`,

  'pond-ai-crypto.svg': `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" rx="24" fill="#0A1826"/>
  <circle cx="50" cy="50" r="38" fill="url(#pond_glow)" fill-opacity="0.25"/>
  <!-- Graph neural network ripple nodes -->
  <circle cx="50" cy="50" r="30" stroke="url(#pond_grad)" stroke-width="2" stroke-dasharray="4 4"/>
  <circle cx="50" cy="50" r="18" stroke="url(#pond_grad)" stroke-width="2.5"/>
  <line x1="30" y1="36" x2="50" y2="50" stroke="#38BDF8" stroke-width="2.5"/>
  <line x1="70" y1="36" x2="50" y2="50" stroke="#38BDF8" stroke-width="2.5"/>
  <line x1="50" y1="50" x2="50" y2="72" stroke="#38BDF8" stroke-width="2.5"/>
  <circle cx="50" cy="50" r="8" fill="#38BDF8"/>
  <circle cx="30" cy="36" r="6" fill="#0284C7"/>
  <circle cx="70" cy="36" r="6" fill="#0284C7"/>
  <circle cx="50" cy="72" r="6" fill="#0284C7"/>
  <defs>
    <linearGradient id="pond_grad" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
      <stop stop-color="#38BDF8"/>
      <stop offset="1" stop-color="#0284C7"/>
    </linearGradient>
    <radialGradient id="pond_glow" cx="50" cy="50" r="38" gradientUnits="userSpaceOnUse">
      <stop stop-color="#38BDF8"/>
      <stop offset="1" stop-color="#0A1826" stop-opacity="0"/>
    </radialGradient>
  </defs>
</svg>`,

  'sapien-gamified-ai.svg': `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" rx="24" fill="#1C110A"/>
  <circle cx="50" cy="50" r="38" fill="url(#sapien_glow)" fill-opacity="0.25"/>
  <!-- Human eye + AI spark emblem -->
  <path d="M20 50C20 50 32 30 50 30C68 30 80 50 80 50C80 50 68 70 50 70C32 70 20 50 20 50Z" stroke="url(#sapien_grad)" stroke-width="3.5"/>
  <circle cx="50" cy="50" r="12" fill="url(#sapien_grad)"/>
  <circle cx="50" cy="50" r="5" fill="#FFFFFF"/>
  <path d="M50 22V26M50 74V78" stroke="#F97316" stroke-width="3" stroke-linecap="round"/>
  <defs>
    <linearGradient id="sapien_grad" x1="20" y1="30" x2="80" y2="70" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FB923C"/>
      <stop offset="1" stop-color="#EA580C"/>
    </linearGradient>
    <radialGradient id="sapien_glow" cx="50" cy="50" r="38" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FB923C"/>
      <stop offset="1" stop-color="#1C110A" stop-opacity="0"/>
    </radialGradient>
  </defs>
</svg>`,

  'echo-protocol-btc.svg': `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" rx="24" fill="#140E0A"/>
  <circle cx="50" cy="50" r="38" fill="url(#echo_glow)" fill-opacity="0.3"/>
  <!-- Aptos wave + Bitcoin B insignia -->
  <path d="M22 62C28 42 42 32 58 32C66 32 74 36 78 40" stroke="url(#echo_grad)" stroke-width="3.5" stroke-linecap="round"/>
  <path d="M22 72C34 50 50 44 68 44C74 44 80 46 82 50" stroke="url(#echo_grad)" stroke-width="3" stroke-linecap="round" stroke-opacity="0.6"/>
  <!-- Bitcoin Restaking Emblem -->
  <circle cx="48" cy="50" r="18" fill="url(#echo_grad)" fill-opacity="0.2" stroke="url(#echo_grad)" stroke-width="2.5"/>
  <path d="M44 42H52C54.2 42 56 43.8 56 46C56 48.2 54.2 50 52 50H44V42Z" fill="#F59E0B"/>
  <path d="M44 50H53C55.2 50 57 51.8 57 54C57 56.2 55.2 58 53 58H44V50Z" fill="#F59E0B"/>
  <path d="M47 38V42M52 38V42M47 58V62M52 58V62" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
  <defs>
    <linearGradient id="echo_grad" x1="22" y1="32" x2="82" y2="72" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F59E0B"/>
      <stop offset="1" stop-color="#10B981"/>
    </linearGradient>
    <radialGradient id="echo_glow" cx="50" cy="50" r="38" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F59E0B"/>
      <stop offset="1" stop-color="#140E0A" stop-opacity="0"/>
    </radialGradient>
  </defs>
</svg>`,

  'kintsu-liquid-staking.svg': `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" rx="24" fill="#150C24"/>
  <circle cx="50" cy="50" r="38" fill="url(#kintsu_glow)" fill-opacity="0.25"/>
  <!-- Liquid Staking Droplet with golden Kintsugi seam -->
  <path d="M50 22C50 22 28 46 28 60C28 72.1503 37.8497 82 50 82C62.1503 82 72 72.1503 72 60C72 46 50 22 50 22Z" fill="url(#kintsu_grad)" fill-opacity="0.3" stroke="url(#kintsu_grad)" stroke-width="3"/>
  <!-- Golden Kintsugi repair lightning seam -->
  <path d="M50 26L46 44L56 52L44 64L54 78" stroke="#FBBF24" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="50" cy="60" r="6" fill="#FBBF24"/>
  <defs>
    <linearGradient id="kintsu_grad" x1="28" y1="22" x2="72" y2="82" gradientUnits="userSpaceOnUse">
      <stop stop-color="#A855F7"/>
      <stop offset="1" stop-color="#8B5CF6"/>
    </linearGradient>
    <radialGradient id="kintsu_glow" cx="50" cy="50" r="38" gradientUnits="userSpaceOnUse">
      <stop stop-color="#8B5CF6"/>
      <stop offset="1" stop-color="#150C24" stop-opacity="0"/>
    </radialGradient>
  </defs>
</svg>`
};

for (const [filename, svg] of Object.entries(logos)) {
  const filePath = path.join(logosDir, filename);
  fs.writeFileSync(filePath, svg.trim(), 'utf8');
  console.log('Created logo:', filename);
}
console.log('All 10 logos created successfully!');

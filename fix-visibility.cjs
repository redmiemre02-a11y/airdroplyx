const fs = require('fs');

let indexPath = 'src/pages/[lang]/index.astro';
let indexCode = fs.readFileSync(indexPath, 'utf8');

const newLogic = `const drops = i18n_airdrops[lang] || i18n_airdrops.en;
const latestAirdrops = drops;
const hottestAirdrops = drops.filter(a => a.featured);
const potentialAirdrops = drops.filter(a => !a.featured || a.category.includes('L2'));`;

indexCode = indexCode.replace(/const drops = i18n_airdrops[\s\S]*?const potentialAirdrops = [^\n]+;/, newLogic);

fs.writeFileSync(indexPath, indexCode, 'utf8');

const fs = require('fs');

let indexPath = 'src/pages/[lang]/index.astro';
let indexCode = fs.readFileSync(indexPath, 'utf8');

const filterRegex = /<!-- Advanced Filter System -->[\s\S]*?<\/div>\s*<\/div>/;

if (filterRegex.test(indexCode)) {
  indexCode = indexCode.replace(filterRegex, '');
  fs.writeFileSync(indexPath, indexCode, 'utf8');
}

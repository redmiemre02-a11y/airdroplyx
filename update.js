const fs = require('fs');
let c = fs.readFileSync('src/pages/[lang]/airdrop/[id].astro', 'utf8');
c = c.replace('../../layouts/Layout.astro', '../../../layouts/Layout.astro');
c = c.replace('../../components/Header.astro', '../../../components/Header.astro');
c = c.replace('../../components/Footer.astro', '../../../components/Footer.astro');
c = c.replace('../../data/airdrops', '../../../data/i18n_airdrops');
c = c.replace('import { airdrops }', 'import { i18n_airdrops }');

const getStaticPathsOld = export function getStaticPaths() {
  return airdrops.map((airdrop) => ({
    params: { id: airdrop.id },
    props: { airdrop },
  }));
};

const getStaticPathsNew = export function getStaticPaths() {
  const langs = ['en', 'tr', 'ru', 'es', 'hi', 'id', 'vi', 'pt', 'zh', 'tl'];
  return langs.flatMap(lang => {
    const drops = i18n_airdrops[lang] || i18n_airdrops.en;
    return drops.map(airdrop => ({
      params: { lang, id: airdrop.id },
      props: { airdrop }
    }));
  });
};

c = c.replace(getStaticPathsOld, getStaticPathsNew);
c = c.replace('const { id } = Astro.params;', 'const { lang, id } = Astro.params;');
fs.writeFileSync('src/pages/[lang]/airdrop/[id].astro', c);

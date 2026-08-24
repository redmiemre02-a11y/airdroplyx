const fs = require('fs');
let c = fs.readFileSync('src/pages/[lang]/airdrop/[id].astro', 'utf8');

const uiTranslations = {
  en: {
    steps: 'Step-by-Step Airdrop Guide',
    overview: 'Project Overview & Funding',
    metric: 'Metric',
    details: 'Details',
    funding: 'Total Funding',
    investors: 'Lead Investors',
    allocation: 'Airdrop Allocation',
    blockchain: 'Blockchain',
    strategy: 'Editor\'s Airdrop Strategy',
    faq: 'Frequently Asked Questions',
    sentiment: 'What\'s your sentiment on',
    sentimentSub: 'Join 2,451 other hunters in predicting the airdrop size.',
    bullish: 'Bullish',
    bearish: 'Bearish'
  },
  tr: {
    steps: 'Adým Adým Airdrop Rehberi',
    overview: 'Proje Özeti ve Fonlama',
    metric: 'Metrik',
    details: 'Detaylar',
    funding: 'Toplanan Fon',
    investors: 'Lider Yatýrýmcýlar',
    allocation: 'Airdrop Payý',
    blockchain: 'Að (Blockchain)',
    strategy: 'Editörün Airdrop Stratejisi',
    faq: 'Sýkça Sorulan Sorular',
    sentiment: 'Hakkýndaki düþünceniz nedir?',
    sentimentSub: 'Airdrop potansiyelini tahmin eden 2.451 avcýya katýlýn.',
    bullish: 'Kazandýrýr',
    bearish: 'Zaman Kaybý'
  }
};

c = c.replace('---', '---\nconst uiTranslations = ' + JSON.stringify(uiTranslations) + ';\n');

c = c.replace('const { airdrop } = Astro.props;', 'const { airdrop } = Astro.props;\nconst ui = uiTranslations[lang] || uiTranslations.en;');

c = c.replace(/Step-by-Step Airdrop Guide/g, '{ui.steps}');
c = c.replace(/Project Overview & Funding/g, '{ui.overview}');
c = c.replace(/>Metric</g, '>{ui.metric}<');
c = c.replace(/>Details</g, '>{ui.details}<');
c = c.replace(/>Total Funding</g, '>{ui.funding}<');
c = c.replace(/>Lead Investors</g, '>{ui.investors}<');
c = c.replace(/>Airdrop Allocation</g, '>{ui.allocation}<');
c = c.replace(/>Blockchain</g, '>{ui.blockchain}<');
c = c.replace(/Editor\'s Airdrop Strategy/g, '{ui.strategy}');
c = c.replace(/Frequently Asked Questions/g, '{ui.faq}');
c = c.replace(/What\'s your sentiment on \{airdrop.name\}\?/g, '{airdrop.name} {ui.sentiment}');
c = c.replace(/Join 2,451 other hunters in predicting the airdrop size./g, '{ui.sentimentSub}');
c = c.replace(/>Bullish</g, '>{ui.bullish}<');
c = c.replace(/>Bearish</g, '>{ui.bearish}<');

fs.writeFileSync('src/pages/[lang]/airdrop/[id].astro', c);

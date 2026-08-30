const fs = require('fs');

// 1. Restore Nowa to airdrops.ts
let airdropsPath = 'src/data/airdrops.ts';
let airdropsCode = fs.readFileSync(airdropsPath, 'utf8');

if (!airdropsCode.includes('nowa-protocol')) {
  const nowaObj = `  },
  {
    id: 'nowa-protocol',
    name: 'Nowa Finance',
    logo: 'https://airdrops.io/wp-content/uploads/2026/08/Nowa-logo.jpg.webp',
    description: 'Onchain financing protocol built around Buy Now, Pay Later (BNPL) crypto trading on ZK-Rollup.',
    reward: 'Confirmed Airdrop & Points',
    category: 'DeFi / BNPL / L2',
    featured: false,
    endTime: '2026-10-30T23:59:59Z',
    funding: 'TBA',
    investors: 'Top Tier VCs',
    refLink: 'https://app.nowa.finance/?ref=NOWA_EA519B'
  }
];`;
  airdropsCode = airdropsCode.replace('  }\n];', nowaObj);
  fs.writeFileSync(airdropsPath, airdropsCode, 'utf8');
}

// 2. Fix Header links
let headerPath = 'src/components/Header.astro';
let headerCode = fs.readFileSync(headerPath, 'utf8');
headerCode = headerCode.replace(/href="#" class="flex items-center h-full px-5/g, 'href="/" class="flex items-center h-full px-5');
// Also fix the Subscribe button so it doesn't look completely broken, maybe an alert
headerCode = headerCode.replace(
  '<button class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-bold text-sm shadow-md shadow-blue-500/20 transition-all">\n        Subscribe\n      </button>',
  '<button onclick="alert(\\\'Newsletter subscription coming soon!\\\')" class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-bold text-sm shadow-md shadow-blue-500/20 transition-all">\n        Subscribe\n      </button>'
);
fs.writeFileSync(headerPath, headerCode, 'utf8');

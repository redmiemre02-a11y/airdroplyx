const fs = require('fs');

// 1. Update Layout.astro with OneSignal script
let layoutPath = 'src/layouts/Layout.astro';
let layoutContent = fs.readFileSync(layoutPath, 'utf8');

const oldOneSignal = /<!-- OneSignal Push Notifications.*?<\/script>/s;
const newOneSignal = `<!-- OneSignal Push Notifications -->
    <script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" defer></script>
    <script>
      window.OneSignalDeferred = window.OneSignalDeferred || [];
      OneSignalDeferred.push(async function(OneSignal) {
        await OneSignal.init({
          appId: "fe3434ff-e2df-4d5f-9faa-6859e830cb97",
        });
      });
    </script>`;

if (oldOneSignal.test(layoutContent)) {
  layoutContent = layoutContent.replace(oldOneSignal, newOneSignal);
} else {
  // Insert before </head>
  layoutContent = layoutContent.replace('</head>', newOneSignal + '\n  </head>');
}
fs.writeFileSync(layoutPath, layoutContent, 'utf8');


// 2. Remove NovaX from airdrops.ts
let airdropsPath = 'src/data/airdrops.ts';
let airdropsContent = fs.readFileSync(airdropsPath, 'utf8');
airdropsContent = `export const airdrops = [
  {
    id: 'dow-protocol',
    name: 'Dow Protocol',
    logo: 'https://images.unsplash.com/photo-1614064641913-6b110b9a22d9?w=128&q=80',
    description: 'RWA-backed decentralized e-commerce financing protocol.',
    reward: 'High Potential',
    category: 'Layer 0 / RWA',
    featured: true,
    endTime: '2026-12-31T23:59:59Z'
  }
];`;
fs.writeFileSync(airdropsPath, airdropsContent, 'utf8');


// 3. Add Related Airdrops to [id].astro
let idPath = 'src/pages/[lang]/airdrop/[id].astro';
let idContent = fs.readFileSync(idPath, 'utf8');

// Find where to inject Related Airdrops logic
if (!idContent.includes('const relatedAirdrops')) {
  idContent = idContent.replace(
    'const { airdrop } = Astro.props;',
    `const { airdrop } = Astro.props;\nconst allDrops = i18n_airdrops[lang] || i18n_airdrops.en;\nconst relatedAirdrops = allDrops.filter(a => a.id !== airdrop.id).slice(0, 3);`
  );
}

// Find where to inject Related Airdrops UI (before closing </main>)
if (!idContent.includes('<!-- Related Airdrops -->')) {
  const relatedUI = `
      {relatedAirdrops.length > 0 && (
        <div class="mt-20 border-t border-slate-200 pt-16">
          <h3 class="text-2xl font-extrabold text-slate-900 mb-8">Related Airdrops</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedAirdrops.map(related => (
              <a href={\`/\${lang}/airdrop/\${related.id}\`} class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all group block">
                <div class="flex items-center gap-4 mb-4">
                  <img src={related.logo} alt={related.name} class="w-12 h-12 rounded-xl object-cover" />
                  <div>
                    <h4 class="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{related.name}</h4>
                    <span class="text-xs font-bold text-slate-500 uppercase">{related.category}</span>
                  </div>
                </div>
                <p class="text-sm text-slate-600 line-clamp-2">{related.description}</p>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  </main>`;
  
  idContent = idContent.replace('</div>\n  </main>', relatedUI);
}

fs.writeFileSync(idPath, idContent, 'utf8');

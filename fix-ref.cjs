const fs = require('fs');
let content = fs.readFileSync('src/pages/[lang]/airdrop/[id].astro', 'utf8');

// 1. Fix the step rendering for HTML
content = content.replace('<span class="flex-1">{step}</span>', '<span class="flex-1" set:html={step} />');

// 2. Inject the big "Join Airdrop" button if airdrop.refLink exists
// We will place it right below the TL;DR block.

const tldrBlock = `            <div class="bg-gradient-to-r from-indigo-50 to-blue-50 border border-blue-100 rounded-2xl p-6 mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p class="text-blue-900 font-bold mb-1">TL;DR</p>
              <p class="text-blue-800 text-sm m-0">{airdrop.description}</p>
            </div>
            <div class="bg-white px-5 py-3 rounded-xl shadow-sm whitespace-nowrap text-center min-w-[140px] border border-blue-50">
              <p class="text-slate-500 text-xs font-bold mb-1 uppercase tracking-wider">Reward</p>
              <p class="text-indigo-600 font-extrabold text-lg m-0">{airdrop.reward}</p>
            </div>
          </div>`;

const buttonInjection = `            <div class="bg-gradient-to-r from-indigo-50 to-blue-50 border border-blue-100 rounded-2xl p-6 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p class="text-blue-900 font-bold mb-1">TL;DR</p>
              <p class="text-blue-800 text-sm m-0">{airdrop.description}</p>
            </div>
            <div class="flex flex-col gap-3 shrink-0">
              <div class="bg-white px-5 py-3 rounded-xl shadow-sm whitespace-nowrap text-center border border-blue-50">
                <p class="text-slate-500 text-xs font-bold mb-1 uppercase tracking-wider">Reward</p>
                <p class="text-indigo-600 font-extrabold text-lg m-0">{airdrop.reward}</p>
              </div>
              {airdrop.refLink && (
                <a href={airdrop.refLink} target="_blank" rel="nofollow noreferrer" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-black text-center py-3 px-6 rounded-xl shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                  <span>🚀</span> Join Airdrop
                </a>
              )}
            </div>
          </div>`;

content = content.replace(tldrBlock, buttonInjection);

// If the regex replacement didn't perfectly match due to whitespace differences, we can use a more robust regex.
if (content.includes('TL;DR') && !content.includes('Join Airdrop')) {
  // Regex approach
  const tldrRegex = /<div class="bg-gradient-to-r from-indigo-50[^>]*>[\s\S]*?<p class="text-indigo-600 font-extrabold text-lg m-0">\{airdrop\.reward\}<\/p>\s*<\/div>\s*<\/div>/;
  content = content.replace(tldrRegex, buttonInjection);
}

fs.writeFileSync('src/pages/[lang]/airdrop/[id].astro', content, 'utf8');

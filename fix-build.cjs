const fs = require('fs');

let indexPath = 'src/pages/[lang]/index.astro';
let indexCode = fs.readFileSync(indexPath, 'utf8');

// The exact string to replace:
const targetString = `  <div class="max-w-[1200px] mx-auto px-4 mb-20">
    
    
      
      <!-- Tags -->
      <div class="flex flex-wrap gap-2">
        <button class="px-4 py-1.5 rounded-full bg-blue-600 text-white text-sm font-bold shadow-md shadow-blue-500/20 transition-transform active:scale-95">All Airdrops</button>
        <button class="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-sm font-semibold transition-transform active:scale-95">Y" Hottest</button>
        <button class="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-sm font-semibold transition-transform active:scale-95">Solana</button>
        <button class="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-sm font-semibold transition-transform active:scale-95">Ethereum (L2)</button>
        <button class="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-sm font-semibold transition-transform active:scale-95">DeFi</button>
        <button class="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-sm font-semibold transition-transform active:scale-95">Gaming / NFT</button>
        <button class="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-sm font-semibold transition-transform active:scale-95">Cost: Free</button>
      </div>
    </div>`;

// Wait, because of weird unicode characters 'Y"', I should use regex to match from `<div class="max-w-[1200px] mx-auto px-4 mb-20">` up to `<!-- Main Grid Layout -->`
const fixRegex = /<div class="max-w-\[1200px\] mx-auto px-4 mb-20">[\s\S]*?<!-- Main Grid Layout -->/;
const replacement = `<div class="max-w-[1200px] mx-auto px-4 mb-20">
    <!-- Main Grid Layout -->`;

indexCode = indexCode.replace(fixRegex, replacement);
fs.writeFileSync(indexPath, indexCode, 'utf8');

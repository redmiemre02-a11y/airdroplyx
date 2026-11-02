import fs from 'fs';
import path from 'path';

const projectRoot = 'C:\\Users\\cigo\\.gemini\\antigravity\\scratch\\airdroplyx';
const pagesDir = path.join(projectRoot, 'src', 'pages');

// Collect all existing routes
const existingRoutes = new Set([
  '/',
  '/ecosystems',
  '/faucets',
  '/calendar',
  '/watchlist',
  '/sybil-checker',
  '/calculator',
  '/farming-planner',
  '/news',
  '/academy',
  '/about',
  '/contact',
  '/disclaimer',
  '/editorial-policy',
  '/fact-checking',
  '/privacy-policy',
  '/terms-of-service',
  '/unlocks',
  '/investors',
  '/rss.xml',
  '/news-sitemap.xml',
  '/sitemap-index.xml',
  '/sitemap-0.xml',
  '/search-index.json'
]);

// Scan pagesDir for static pages
function scanPages(dir, baseRoute = '') {
  for (const f of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, f);
    if (fs.statSync(fullPath).isDirectory()) {
      scanPages(fullPath, `${baseRoute}/${f}`);
    } else {
      let route = baseRoute;
      if (f === 'index.astro') {
        route = baseRoute || '/';
      } else if (f.endsWith('.astro')) {
        route = `${baseRoute}/${f.replace('.astro', '')}`;
      }
      if (route && !route.includes('[')) {
        existingRoutes.add(route);
      }
    }
  }
}
scanPages(pagesDir);

// Now scan all .astro files for internal href="..."
const internalLinks = [];
function findLinks(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      findLinks(full);
    } else if (f.endsWith('.astro')) {
      const content = fs.readFileSync(full, 'utf8');
      const matches = content.matchAll(/href="(\/[^"#{?]*)"/g);
      for (const m of matches) {
        const url = m[1].replace(/\/$/, '') || '/';
        internalLinks.push({ file: path.relative(projectRoot, full), url });
      }
    }
  }
}
findLinks(path.join(projectRoot, 'src'));

console.log(`Checking ${internalLinks.length} internal links...`);
const broken = [];
for (const link of internalLinks) {
  // If it's a dynamic prefix like /airdrop/, /news/, /academy/, /ecosystem/
  if (link.url.startsWith('/airdrop/') || 
      link.url.startsWith('/news/') || 
      link.url.startsWith('/academy/') || 
      link.url.startsWith('/ecosystem/')) {
    continue;
  }
  if (!existingRoutes.has(link.url)) {
    broken.push(link);
  }
}

if (broken.length === 0) {
  console.log('✓ All internal links are valid and exist in routes!');
} else {
  console.log(`Found ${broken.length} potentially broken links:`, broken);
}

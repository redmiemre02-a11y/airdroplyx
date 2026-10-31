import { execSync } from 'child_process';

console.log('Fetching old deployments for airdroplyx...');

function getDeployments(nextCursor?: string): string[] {
  const cmd = nextCursor 
    ? `npx vercel ls airdroplyx --next ${nextCursor}`
    : `npx vercel ls airdroplyx`;
  
  try {
    const output = execSync(cmd, { encoding: 'utf8' });
    const urls = output.match(/https:\/\/airdroplyx-[a-z0-9]+-et-cc53\.vercel\.app/g) || [];
    // remove duplicates while preserving order
    return Array.from(new Set(urls));
  } catch (e) {
    console.error('Error listing deployments:', e);
    return [];
  }
}

const allUrls = getDeployments();
console.log(`Discovered ${allUrls.length} deployments on current page.`);

if (allUrls.length > 2) {
  // Keep the first 2 (the current active live production ones)
  const toDelete = allUrls.slice(2);
  console.log(`Safely deleting ${toDelete.length} old inactive deployments...`);
  
  for (const url of toDelete) {
    try {
      console.log(`Removing ${url}...`);
      const res = execSync(`npx vercel rm ${url} -y`, { encoding: 'utf8' });
      console.log(`Success: ${url}`);
    } catch (err: any) {
      console.warn(`Could not remove ${url}:`, err.message);
    }
  }
} else {
  console.log('No older deployments to delete on first page.');
}

console.log('Cleanup cycle complete!');

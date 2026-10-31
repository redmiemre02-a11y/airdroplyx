import { execSync } from 'child_process';

console.log('Starting full auto-clean of all old Vercel deployments...');

let totalDeleted = 0;

while (true) {
  let output = '';
  try {
    output = execSync('npx vercel ls airdroplyx', { encoding: 'utf8' });
  } catch (err: any) {
    console.error('Failed to list deployments:', err.message);
    break;
  }

  const urls = output.match(/https:\/\/airdroplyx-[a-z0-9]+-et-cc53\.vercel\.app/g) || [];
  const uniqueUrls = Array.from(new Set(urls));

  // If 2 or fewer, we have only the live current production ones!
  if (uniqueUrls.length <= 2) {
    console.log('Only recent/active deployments remain. All old ones successfully deleted!');
    break;
  }

  // Delete everything after the first 2
  const toDelete = uniqueUrls.slice(2);
  console.log(`Deleting batch of ${toDelete.length} old deployments...`);

  for (const url of toDelete) {
    try {
      execSync(`npx vercel rm ${url} -y`, { encoding: 'utf8' });
      totalDeleted++;
      console.log(`[${totalDeleted}] Removed: ${url}`);
    } catch (e: any) {
      console.warn(`Could not remove ${url}:`, e.message);
    }
  }
}

console.log(`Done! Total old deployments deleted: ${totalDeleted}`);

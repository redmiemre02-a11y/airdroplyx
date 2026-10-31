import { execSync } from 'child_process';

const projects = [
  'stackpick',
  'guiatecnes',
  'tiktok-downloader',
  'web',
  'game-fix-pseo'
];

console.log(`Starting automated cleanup for other projects: ${projects.join(', ')}...`);

let grandTotalDeleted = 0;

for (const project of projects) {
  console.log(`\n========================================`);
  console.log(`Cleaning old deployments for project: ${project}`);
  console.log(`========================================`);

  let projectDeleted = 0;

  while (true) {
    let output = '';
    try {
      output = execSync(`npx vercel ls ${project}`, { encoding: 'utf8' });
    } catch (err: any) {
      console.error(`Failed to list deployments for ${project}:`, err.message);
      break;
    }

    const regex = new RegExp(`https:\/\/${project}-[a-z0-9]+-et-cc53\\.vercel\\.app`, 'g');
    const urls = output.match(regex) || [];
    const uniqueUrls = Array.from(new Set(urls));

    console.log(`Found ${uniqueUrls.length} deployments on current view for ${project}.`);

    // Keep the top 2 (the current live production and previous backup)
    if (uniqueUrls.length <= 2) {
      console.log(`Project ${project} is now clean (only active live deployments remain).`);
      break;
    }

    const toDelete = uniqueUrls.slice(2);
    console.log(`Deleting ${toDelete.length} old inactive deployments for ${project}...`);

    for (const url of toDelete) {
      try {
        execSync(`npx vercel rm ${url} -y`, { encoding: 'utf8' });
        projectDeleted++;
        grandTotalDeleted++;
        console.log(`[${grandTotalDeleted}] Deleted: ${url}`);
      } catch (e: any) {
        console.warn(`Could not remove ${url}:`, e.message);
      }
    }
  }

  console.log(`Finished project ${project}. Deleted ${projectDeleted} old deployments.`);
}

console.log(`\n🎉 ALL PROJECTS FULLY CLEANED! Grand total deleted: ${grandTotalDeleted}`);

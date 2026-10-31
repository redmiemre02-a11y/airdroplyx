import * as fs from 'fs';
import * as path from 'path';

function getFiles(dir: string, files: { path: string; size: number }[] = []): { path: string; size: number }[] {
  if (!fs.existsSync(dir)) return files;
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) getFiles(full, files);
    else files.push({ path: full, size: stat.size });
  }
  return files;
}

const all = getFiles('dist');
all.sort((a, b) => b.size - a.size);

console.log('Top 15 largest files in dist:');
all.slice(0, 15).forEach(f => {
  console.log(`${Math.round(f.size / 1024)} KB | ${f.path}`);
});

let totalHtml = 0, totalJs = 0, totalImg = 0, totalOther = 0;
all.forEach(f => {
  if (f.path.endsWith('.html')) totalHtml += f.size;
  else if (f.path.endsWith('.js')) totalJs += f.size;
  else if (f.path.match(/\.(png|jpg|jpeg|svg|ico)$/)) totalImg += f.size;
  else totalOther += f.size;
});

console.log('\n--- BY TYPE ---');
console.log('Total files:', all.length);
console.log('HTML total:', Math.round(totalHtml / (1024 * 1024)), 'MB (Count:', all.filter(f => f.path.endsWith('.html')).length, ')');
console.log('JS total:', Math.round(totalJs / (1024 * 1024)), 'MB');
console.log('Images total:', Math.round(totalImg / (1024 * 1024)), 'MB');
console.log('Other total:', Math.round(totalOther / (1024 * 1024)), 'MB');
console.log('Total dist size:', Math.round((totalHtml + totalJs + totalImg + totalOther) / (1024 * 1024)), 'MB');

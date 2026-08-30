const fs = require('fs');
let c = fs.readFileSync('src/pages/[lang]/airdrop/[id].astro', 'utf8');

const checklistScript = `
<script is:inline>
  document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step-item');
    const airdropId = window.location.pathname.split('/').filter(Boolean).pop();
    
    steps.forEach((step, index) => {
      const checkbox = step.querySelector('input[type="checkbox"]');
      const storageKey = \`airdroplyx_\${airdropId}_step_\${index}\`;
      
      if (localStorage.getItem(storageKey) === 'true') {
        checkbox.checked = true;
        step.classList.add('opacity-50', 'line-through');
      }
      
      checkbox.addEventListener('change', (e) => {
        localStorage.setItem(storageKey, e.target.checked);
        if (e.target.checked) {
          step.classList.add('opacity-50', 'line-through');
        } else {
          step.classList.remove('opacity-50', 'line-through');
        }
      });
    });
  });
</script>
`;

c = c.replace(/\{airdrop\.steps && airdrop\.steps\.map\(\(step\) => \(\s*<li class="pl-2">\{step\}<\/li>\s*\)\)\}/m, 
`{airdrop.steps && airdrop.steps.map((step, index) => (
  <li class="pl-2 flex items-start gap-4 step-item transition-all duration-300">
    <input type="checkbox" class="mt-1.5 w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
    <span class="flex-1">{step}</span>
  </li>
))}`);

c = c.replace('</Layout>', checklistScript + '\n</Layout>');
fs.writeFileSync('src/pages/[lang]/airdrop/[id].astro', c, 'utf8');

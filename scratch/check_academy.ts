import { academyGuides } from '../src/data/academy';
console.log('Total academy guides:', academyGuides.length);
console.log('Sample guides:', academyGuides.slice(-5).map(g => g.slug));

const fs = require('fs');
const content = fs.readFileSync('page_chunk.js', 'utf8');

// Search for hero section JSX
const heroIdx = content.indexOf('hero') !== -1 ? content.indexOf('hero') : content.indexOf('FABIAN');
console.log('Fabian text index:', heroIdx);
if (heroIdx !== -1) {
  console.log(content.slice(Math.max(0, heroIdx - 800), heroIdx + 1200));
}

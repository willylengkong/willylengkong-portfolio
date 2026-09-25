const fs = require('fs');
const content = fs.readFileSync('page_chunk.js', 'utf8');

const regex = /className:"([^"]*(?:grid-pattern|cursor-glow|bg-background|glow|radial|ambient)[^"]*)"/g;
let match;
const set = new Set();
while ((match = regex.exec(content)) !== null) {
  set.add(match[1]);
}
console.log('Classnames found:', Array.from(set));

// Also let's find any radial-gradient or ambient elements in content
const radials = content.match(/radial-gradient\([^)]+\)/g);
console.log('Radials:', radials);

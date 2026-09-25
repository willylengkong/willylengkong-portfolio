const fs = require('fs');
const content = fs.readFileSync('page_chunk.js', 'utf8');

const heroArea = content.slice(15500, 18500);
console.log(heroArea);

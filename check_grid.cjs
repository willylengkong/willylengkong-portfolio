const fs = require('fs');
const content = fs.readFileSync('page_chunk.js', 'utf8');

let pos = 0;
while ((pos = content.indexOf('grid-pattern', pos)) !== -1) {
  console.log('--- FOUND grid-pattern at', pos, '---');
  console.log(content.slice(Math.max(0, pos - 200), pos + 300));
  pos += 12;
}

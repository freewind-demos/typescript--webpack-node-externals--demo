import fs from 'fs';

console.log('------ print README.md ----------');

const content = fs.readFileSync('./README.md', 'utf-8')
console.log(content);

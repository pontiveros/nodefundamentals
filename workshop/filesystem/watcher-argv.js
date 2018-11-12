'use strict';
const fs = require('fs');
const filename = process.argv[2];

if (!filename) {
    throw Error('A file to watch must be specified...');
}

console.log('Expression: ' + process.argv[0] + ' next line\n'); // This line shows how the params are passed.
fs.watch(filename, () => console.log(`File ${filename} changed!`)); // pay attention the character ` inside console log
console.log(`Now watching ${filename} for changes...`);

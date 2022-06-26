'use strict';
const       fs = require('fs');
const    spawn = require('child_process').spawn;
const filename = process.argv[2];

if (!filename) {
    throw Error('A file to watch must be specified...');
}

console.log('Expression: ' + process.argv[0] + ' next line\n');

fs.watch(filename, () => {
    const ls = spawn('ls', ['-l', '-h', filename]);
    ls.stdout.pipe(process.stdout);
    console.log(`File ${filename} changed!`);
});

console.log(`Now watching ${filename} for changes...`);

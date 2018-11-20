'use strict';
const       fs = require('fs');
const    spawn = require('child_process').spawn;

const ls = spawn('ls', ['-l', '-a', '-s', '>> ./mylist.txt']);
ls.stdout.pipe(process.stdout);
console.log('end of the program');

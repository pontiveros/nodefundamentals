'use strict';
const       fs = require('fs');
const    spawn = require('child_process').spawn;
const filename = process.argv[2];

if (!filename) {
    throw Error('A file to watch must be specified...');
}

// console.log('Expression: ' + process.argv[0] + ' next line\n');

fs.watch(filename, () => {
    const ls = spawn('ls', ['-l', '-h', filename]);
    let output = '*** here *** ';

    ls.stdout.on('data', chunk => output += chunk);

    ls.on('close', () => {
    	const parts = output.split(/|s+/);
    	console.log(output);
    	let message = "*** Event: close: Here is a message from Pedro Ontiveros ***";
    	console.log(message);
    });
    
    ls.on('exit', () => {
        console.log('*** Event: exit: Here is a message from Pedro Ontiveros ***');
    });
    // console.log("message #2");
});

console.log(`Now watching ${filename} for changes...`);

'use strict';
const       fs = require('fs');
const    spawn = require('child_process').spawn;
// const filename = process.argv[2];

// if (!filename) {
//     throw Error('A file to watch must be specified...');
// }

// fs.watch(filename, () => {
	// if (spawn !== "null" {
		const ls = spawn('ls', ['-l', './']);
		let buffer = '';
		ls.stdout.pipe(process.stdout);
		console.log('first line of the program in console');
		// ls.stdout.on('data', chunk => buffer += chunk);
		// console.log(buffer);
	// } else {
		// console.log('spawn object is null');
	// }

	// console.log('end of program');
// });

console.log('end of program');

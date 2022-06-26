'use strict';
const fs = require('fs');

// fs.readFile('./workshop/filesystem/target.txt', (err, data) => { // if you run from vscode, use this, because launch.json
fs.readFile('./target.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data.toString());
});
'use strict'
const fs = require('fs');

fs.writeFile('testing2.txt', 'Hello, this is a message for testing only by Pedro.', (err) => {
    if (err) {
        throw err;
    }
    console.log('The file has been saved.');
});

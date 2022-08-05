'use strict';

let mysql = require('mysql');

let connection = mysql.createConnection({
        host : "localhost",
        user : "pilot02",
        password : "Pedro1234"
    });

connection.connect((err) => {
    if (err) {
        throw err;
    } else {
        console.log('Connected!');
    }
});

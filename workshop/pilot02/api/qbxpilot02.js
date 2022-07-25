'use strict';

let mysql = require('mysql');

let connection = mysql.createConnection({
        host : "localhost",
        user : "",
        password : ""
    });

connection.connect((err) => {
    if (err) {
        throw err;
    } else {
        console.log('Connected!');
    }
});

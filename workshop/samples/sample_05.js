'use strict';

const   fs = require('fs');
const http = require('http');
const port = 3000;
const mysql = require('mysql');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type' : 'text/html'});
    fs.readFile('index.html', (error, data) => {
        if (error) {
            res.writeHead(404);
            res.write('Error: File Not Found!');
        } else {
            res.write(data);
        }
        res.end();
    });
});


server.listen(port, error => {
    if (error) {
        console.log('Something went wrong: ', error);
    } else {
        console.log('Server is listening on port ' + port);
    }
});
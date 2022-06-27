'use strict';

const net = require('net');

const server = net.createServer(connection => {
    console.log("Subscriber connected...");
    connection.write('Hello, this is a message from the service.');
    connection.on('close', () => {
        console.log('Subscriber disconnected.');
    });
}).listen(62000, () => console.log('Listening for subscribers...'));

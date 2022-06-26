const   fs = require('fs');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {

    try {
        const data = fs.readFileSync('./defHomeView.js', 'utf8')
        console.log(data)
    
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(data);
        // res.end('Hello World');

    } catch (err) {
        console.error(err)
    }
  });
  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

// Create web server
// 1. Create a web server
// 2. Handle requests and send responses

// Create a web server
const http = require('http');

// Handle requests and send responses
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/comments') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000...');

const http = require('http');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

const server = http.createServer((req, res) => {
    const filePath = path.join(publicDir, req.url === '/' ? 'index.html' : req.url);
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'html/text' });
            res.end('404 Not Found');
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
});

server.listen(3000, () => {
    console.log("Server listening on port 3000");
});


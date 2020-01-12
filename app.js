const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function(request, response) {
    if(request.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), function(error, content) {
            if(error) throw error;
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(content, 'utf8');
        })
    }
    if(request.url === '/about') {
        fs.readFile(path.join(__dirname, 'about.html'), function(error, content) {
            if(error) throw error;
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(content, 'utf8');
        })
    }

    // API JSON just node 
    if(request.url === '/api/users') {
        let users = [
            { name: 'levi', age: 20},
            { name: 'mikasa', age: 18},
            { name: 'gerald', age: 26}
        ]
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(users));
    }
})

let PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on ${PORT}`));
//working with http request
const http = require('http');

//create server
const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html'); 
    response.write('<h1>Hello World!</h1>'); //render to browser -> localhost:3000 -> Hello World
    response.end();
});

server.listen(3000);
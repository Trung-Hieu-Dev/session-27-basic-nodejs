//working with http request
const http = require('http');

//create server
const server = http.createServer((request, response) => {
    response.write('Hello World!'); //render to browser -> localhost:3000 -> Hello World
    response.end();
});

server.listen(3000);
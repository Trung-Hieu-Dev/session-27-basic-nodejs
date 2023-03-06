//working with http request
const http = require('http');

//create server
const server = http.createServer((request, response) => {
    //received incoming data
    let body = [];
    request.on('data', (chunk) => {
        body.push(chunk);
    });
    request.on('end', () => {
        //parse data
        body = Buffer.concat(body).toString();
        let userName = 'Unknown User';
        if (body) {
            userName = body.split('=')[1];
        }

        //return data to render
        response.setHeader('Content-Type', 'text/html');
        response.write(`
            <h1>Hi ${userName}</h1>
            <form method="POST" action="/">
                <input name="username" type="text" />
                <button type="submit">Send</button>
            </form>`);
        response.end();
    });

    
});

server.listen(3000);
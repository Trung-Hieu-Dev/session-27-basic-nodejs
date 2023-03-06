//working with express.js
const express = require('express');

const app = express();

//middleware
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/html');
    next(); //not done ->need to continue with next middleware below
})

//middleware
app.use((req, res, next) => {
    res.send('<h1>Hello World!</h1>');
});

app.listen(3000);
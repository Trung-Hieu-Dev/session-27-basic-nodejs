//working with express.js
const express = require("express");

//import library to parse data
const bodyParser = require("body-parser");

const app = express();

//parse incoming data
app.use(bodyParser.urlencoded({ extended: false }));

//middleware to set header
app.use((req, res, next) => {
    res.setHeader("Content-Type", "text/html");
    next(); //not done -> need to continue with next middleware below
});

//middleware to render
app.use((req, res, next) => {
    const userName = req.body.username || "Unknown User";
    res.send(`
        <h1>Hi ${userName}</h1>
        <form method="POST" action="/">
            <input name="username" type="text" />
            <button type="submit">Send</button>
        </form>`);
});

//port
app.listen(3000);

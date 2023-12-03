const http = require("http");

const express = require('express');
const app = express();

//  function rqListener(req, res) {
//      console.log(req);
//  }

app.use((req, res, next) => {
    console.log('In the middleware')
        // Allow the request to contiue to the next middleware in line
    next();
});

app.use((req, res, next) => {
    console.log('In the another middleware')
});

const server = http.createServer(app);

server.listen(3000);
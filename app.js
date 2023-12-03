const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('In the middleware')
        // Allow the request to contiue to the next middleware in line
    next();
});

app.use((req, res, next) => {
    console.log('In the another middleware')
        // to send a response
    res.send('<h1>Helllo from express!</h1>')
});

app.listen(3000)
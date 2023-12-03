const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
    console.log('This allows the request to continue & it always runs for all incoming request');
    next();
})

app.use('/add-product', (req, res, next) => {
    console.log('In the another middleware');
    // to send a response
    res.send('<h1>The Add Product page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('In the another middleware');
    // to send a response
    res.send('<h1>Helllo from express!</h1>');
});

app.listen(3000)
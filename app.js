const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// app.use('/', (req, res, next) => {
// console.log('This allows the request to continue & it always runs for all incoming request');
//     next();
// })

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/add-product', (req, res, next) => {
    // to send a response
    res.send('<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">Add Product</button></form>');
});

// app.get- for all incoming get request it will get trigger
// app.post- for all incoming post request it will get trigger
// app.put,app.delete,app.patch

// Now it will only execute for incomig POST request
app.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
});

app.use('/', (req, res, next) => {
    // to send a response
    res.send('<h1>Helllo from express!</h1>');
});

app.listen(3000)
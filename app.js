const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
// It will forwards the request to public static folder
app.use(express.static(path.join(__dirname, 'public')));

// Here the order matters
app.use('/admin', adminRoutes);
app.use(shopRoutes)

// for handling all not found routes
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000)
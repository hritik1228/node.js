const path = require('path')
const express = require('express');
const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    // to send a response
    // path.join- it automatically detects the OS you are running on builds the path
    // __dirname- it points to current working directory i.e. routes folder
    console.log("From shop.js", adminData.products)
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));

});

module.exports = router
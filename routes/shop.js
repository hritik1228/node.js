const path = require('path')
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    // to send a response
    // path.join- it automatically detects the OS you are running on builds the path
    // __dirname- it points to current working directory i.e. routes folder
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router
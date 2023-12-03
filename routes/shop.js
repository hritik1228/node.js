const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    // to send a response
    res.send('<h1>Helllo from express!</h1>');
});

module.exports = router
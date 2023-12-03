const express = require('express');

const router = express.Router();

// /admin/add-product => GET Request
router.get('/add-product', (req, res, next) => {
    // to send a response
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"/><button type="submit">Add Product</button></form>');
});

// /admin/add-product => POST Request
router.post('/add-product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
});

module.exports = router
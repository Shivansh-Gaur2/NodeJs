const express = require('express');

const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');

router.get('/add-product', (req, res, next) => {
    console.log('In the middleware!');
    // res.send('<h1>The "Add Product" Page</h1>');
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    // next(); // Allows the request to continue to the next middleware in line

    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
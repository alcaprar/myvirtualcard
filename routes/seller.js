var express = require('express');
var router = express.Router();

router.get('/seller-login', function (req, res) {
    res.render('seller-login');
});

router.get('/seller-home', function (req, res) {
    res.render('seller-home');
});

module.exports = router;
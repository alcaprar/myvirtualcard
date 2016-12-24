var express = require('express');
var router = express.Router();

router.get('/seller-login', function (req, res) {
    res.render('seller-login');
});

router.get('/seller-app', function (req, res) {
    res.render('seller-app');
});

router.get('/seller-app/*', function (req, res) {
    res.redirect('/seller-app');
});

module.exports = router;
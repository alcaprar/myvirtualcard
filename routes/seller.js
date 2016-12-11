var express = require('express');
var router = express.Router();

router.get('/seller-login', function (req, res) {
    res.render('seller-login');
});

router.get('/seller-scan-qr', function (req, res) {
    
});

module.exports = router;
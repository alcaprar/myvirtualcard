var express = require('express');
var router = express.Router();

router.get('/user-login', function (req, res) {
    res.render('user-login');
});

router.get('/user-show-qr', function (req, res) {
    
});

module.exports = router;
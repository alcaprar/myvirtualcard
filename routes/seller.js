var express = require('express');
var router = express.Router();

router.get('/seller-login', function (req, res) {
    res.render('seller-login');
});

module.exports = router;
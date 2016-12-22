var express = require('express');
var router = express.Router();

router.use(require('./seller'));

router.get('/', function (req, res) {
    res.redirect('/seller-login');
});

module.exports = router;
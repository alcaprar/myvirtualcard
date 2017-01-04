var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.use(require('./seller'));
router.use(require('./customer'));

router.get('/', function (req, res) {
    res.redirect('/seller-login');
});

router.get('/reset-db', function (req, res) {
    
    mongoose.connection.dropDatabase(function () {
        res.send('Databased dropped.')
    });
    
    
});

module.exports = router;
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.use(require('./seller'));
router.use(require('./customer'));

var Customer = require('../models/customer');
var Seller = require('../models/seller');

router.get('/', function (req, res) {
    res.redirect('/seller-login');
});

router.get('/drop-db', function (req, res) {
    mongoose.connection.dropDatabase(function () {
        res.send('Databased dropped.')
    });    
});

router.get('/reset-db', function (req, res) {
    mongoose.connection.dropDatabase(function () {
        var customerjson = require('../models/customerdata.json');
        for(var i=0; i<customerjson.length; i++){
            var cust = new Customer(customerjson[i]);
            cust.save(function (err) {
                console.log(err)
            });
        }
        
        var sellerjson = require('../models/sellerdata.json');
        for(var j=0; j<sellerjson.length; j++){
            var sell = new Seller(sellerjson[j]);
            sell.save(function (err) {
                console.log(err);
            })
        }
        res.send('ok');
    });
});

module.exports = router;
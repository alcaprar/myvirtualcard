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
        var customer = new Customer({
            username: "alecapra",
            name: "Alessandro",
            surname: "Caprarelli"
        });
        customer.save(function () {
            Customer.incrementPoints('alecapra', 'birrificiolambrate', 100, function () {
                Customer.activatePromotion('alecapra', 'birrificiolambrate', 'Coffe', 10, function () {
                    
                })
            });
        });

        var customer2 = new Customer({
            username: "giovimarino",
            name: "Giovanni",
            surname: "Marino"
        });
        customer2.save(function () {
            Customer.incrementPoints('giovimarino', 'birrificiolambrate', 50, function () {
                Customer.activatePromotion('giovimarino', 'birrificiolambrate', 'Lunch', 50, function () {

                })
            });
        });

        var seller = new Seller({
            username: 'birrificiolambrate',
            name: 'Birrificio Lambrate',
            logo: 'img/birrificiolamb.png',
            promotions: [
                {
                    name: 'Coffe',
                    points: 10
                },
                {
                    name: 'Lunch',
                    points: 50
                }
            ]
        });
        seller.save();

        res.send('ok');
    });
});

module.exports = router;
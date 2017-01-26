var express = require('express');
var router = express.Router();
var Seller = require('../models/seller');
var Customer = require('../models/customer');

router.post('/sellers', function (req, res) {
    var seller = new Seller(req.body);
    seller.save(function () {
        res.send(req.body);
    });
});

router.get('/sellers', function (req, res) {
    console.log('/sellers');
    //GET list of sellers
    Seller.select(function (users) {
        res.send(users);
    })
});

router.put('/sellers/:sellerUsername', function (req, res) {
    var username = req.params.sellerUsername;
    var promotion = req.body;
    delete promotion.nrUsage;
    delete promotion.active;
    delete promotion.startingDate;
    delete promotion.stoppingDate;
    console.log(promotion);
    Seller.findOneAndUpdate(
        {username: username},
        {$push: {"promotions": promotion}},
        function (err, seller) {
            console.log('aaa');
        }
    )
});

router.delete('/sellers/:sellerUsername', function (req, res) {
    
})

router.get('/sellers/:sellerUsername', function (req, res) {
    var username = req.params.sellerUsername;
    Seller.findOne(
        {username: username},
        function (err, seller) {
            if(err) throw err;
            res.send(JSON.stringify(seller));
        }
    )
});

router.post('/sellers/:seller/customers/:customer/points/:points', function (req, res) {
    var seller = req.params.seller;
    var customer = req.params.customer;
    var points = req.params.points;
    Customer.incrementPoints(customer, seller, points, function () {
        res.send('ok')
    })
});

router.post('/sellers/:seller/customers/:customer/promotions/:promotionName', function (req, res) {
    var seller = req.params.seller;
    var customer = req.params.customer;
    var promotionName = req.params.promotionName;

    Customer.useCoupon(customer, seller, promotionName, function () {
        res.send('ok')
    })
});


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
var express = require('express');
var router = express.Router();
var Customer = require('../models/customer');

router.get('/customers', function (req, res) {
    Customer.select(function (customers) {
        res.send(customers)
    })
});

router.get('/customers/:customer/sellers/:seller', function (req, res) {
    //GET all the info of the customer in this store
});

router.post('/customers', function (req, res) {
    console.log('customers post ', req.body);
    var customer = new Customer(req.body);
    customer.save(function () {
        res.send(req.body);
    });
});

router.delete('/customers/:customer', function (req, res) {
    Customer.findOne(
        {username: req.params.customer},
        function (err, customer) {
            if(err) throw err;
            customer.remove(function (err) {
                if(err) throw err;
                res.send('ok')
            })
        }
    )
});

router.put('/customers/userId', function (req, res) {
    //UPDATE  customer
});

router.get('/customers/:customer', function (req, res) {
    Customer.findOne(
        {username: req.params.customer},
        function (err, customer) {
            if(err) throw err;
            res.send(JSON.stringify(customer));
        }
    )
});

router.post('/customers/:customer/sellers/:seller/promotions/:promotionName/:promotionPoints', function (req, res) {
    var customer = req.params.customer;
    var seller = req.params.seller;
    var promotionName = req.params.promotionName;
    var promotionPoints = req.params.promotionPoints;
    Customer.activatePromotion(customer, seller, promotionName, promotionPoints, function () {
        res.send('ok')
    })
});

module.exports = router;
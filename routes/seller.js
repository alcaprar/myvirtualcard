var express = require('express');
var router = express.Router();

router.get('/sellers', function (req, res) {
    //GET list of sellers
});

router.get('/sellers/:sellerId', function (req, res) {
    //GET seller info
});

router.post('/sellers/:sellerId/scan-user/:userId/points/:points', function (req, res) {
    //ADD points to user
});

router.post('/sellers/:sellerId/scan-coupon/:couponId/:userId', function (req, res) {
    //REMOVE a coupon from a user
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
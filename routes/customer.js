var express = require('express');
var router = express.Router();

router.get('/customers', function (req, res) {
    //GET list of customers
});

router.post('/customers', function (req, res) {
    console.log(req.query);      // your JSON
    res.send(req.query);    // echo the result back
});

router.delete('/customers/:userId', function (req, res) {
    
});

router.put('/customers/userId', function (req, res) {
    //UPDATE  customer
});

router.get('/customers/:userId', function (req, res) {
    //GET user info
});

router.post('/customers/:userId/activate-promotion/:promotionId', function (req, res) {
    //activate a promotion
});

module.exports = router;
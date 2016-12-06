var express = require('express');
var router = express.Router();

router.use(require('./seller'));
router.use(require('./client'));

router.get('/', function (req, res) {
    res.render('index');
});

module.exports = router;
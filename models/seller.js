// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sellerSchema = new Schema({
    name: {type: String, index:true},
    promotions: [
        {
            name: {type: String},
            pointsNeeded: {type: Number}
        }
    ]
});

var Seller = mongoose.model('Seller', sellerSchema);

module.exports = Seller;
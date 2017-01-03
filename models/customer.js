// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
    username: {type: String, index: true},
    name: {type: String},
    surname: {type: String},
    stores: [
        {
            sellerId: {type: String},
            points: {type: String},
            discounts: [
                {
                    //it's promotions.name in seller model
                    name: {type: String},
                    quantity : {type: Number}
                }                           
            ]
        }
    ]
});

var Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
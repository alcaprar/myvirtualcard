// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sellerSchema = new Schema({
    name: {type: String, index:true},
    logo: {type: String},
    promotions: [
        {
            name: {type: String},
            pointsNeeded: {type: Number}
        }
    ]
});

sellerSchema.statics.select = function (callback) {
    return this.find(
        {},
        function (err, users) {
            if(err) throw err;
            callback(users);
        }
    );
};

var Seller = mongoose.model('Seller', sellerSchema);

module.exports = Seller;
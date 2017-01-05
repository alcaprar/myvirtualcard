// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
    username: {type: String, index: true},
    name: {type: String},
    surname: {type: String},
    stores: [
        {
            username: {type: String},
            points: {type: Number},
            coupons: [
                {
                    //it's promotions.name in seller model
                    name: {type: String},
                    quantity : {type: Number}
                }                           
            ]
        }
    ]
});

customerSchema.statics.select = function (callback) {
    return this.find(
        {},
        function (err, customers) {
            if(err) throw err;
            callback(customers);
        }
    );
};

function storeExists(storeUsername, storesList) {
    var i;
    for (i = 0; i < storesList.length; i++) {
        if (storesList[i].username === storeUsername) {
            return i;
        }
    }

    return -1;
}

function couponExists(couponName, couponsList) {
    var i;
    for (i = 0; i < couponsList.length; i++) {
        if (couponsList[i].name === couponName) {
            return i;
        }
    }

    return -1;
}


customerSchema.statics.incrementPoints = function (customerUsername, sellerUsername, points, callback) {
    return this.findOne(
        {username: customerUsername},
        function (err, customer) {
            if (err) throw err;
            var index = storeExists(sellerUsername, customer.stores);
            if(index>-1){
                customer.stores[index].points = Number(customer.stores[index].points) + Number(points)
            }else{
                customer.stores.push({
                    "username": sellerUsername,
                    "points": points
                })
            }
            customer.save(function (err) {
                if(err) throw err;
                callback()
            })
        }
    )
};

customerSchema.statics.activatePromotion = function (customerUsername, sellerUsername, promotionName, promotionPoints, callback) {
    return this.findOne(
        {username: customerUsername},
        function (err, customer) {
            if(err) throw err;
            var storeIndex = storeExists(sellerUsername, customer.stores);
            customer.stores[storeIndex].points = Number(customer.stores[storeIndex].points) - promotionPoints;
            var couponIndex = couponExists(promotionName, customer.stores[storeIndex].coupons);
            if(couponIndex>-1){
                customer.stores[storeIndex].coupons[couponIndex].quantity = Number(customer.stores[storeIndex].coupons[couponIndex].quantity) + 1;
            }else{
                customer.stores[storeIndex].coupons.push({
                    "name": promotionName,
                    "quantity": 1
                })
            }
            customer.save(function (err) {
                if(err) throw err;
                callback()
            })
        }
    )
};

customerSchema.statics.useCoupon = function (customerUsername, sellerUsername, promotionName, callback) {
    return this.findOne(
        {username: customerUsername},
        function (err, customer) {
            if(err) throw err;
            var storeIndex = storeExists(sellerUsername, customer.stores);
            var couponIndex = couponExists(promotionName, customer.stores[storeIndex].coupons);
            customer.stores[storeIndex].coupons[couponIndex].quantity = Number(customer.stores[storeIndex].coupons[couponIndex].quantity) -1;
            if(customer.stores[storeIndex].coupons[couponIndex].quantity===0){
                customer.stores[storeIndex].coupons.splice(couponIndex,1)
            }
            customer.save(function (err) {
                if(err)throw err;
                callback()
            })
        }
    )
}

var Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
    username: {type: String, index: true},
    name: {type: String},
    surname: {type: String},
    stores: [
        {
            name: {type: String},
            points: {type: Number},
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

customerSchema.statics.select = function (callback) {
    return this.find(
        {},
        function (err, customers) {
            if(err) throw err;
            callback(customers);
        }
    );
};

function storeExists(storeName, storesList) {
    var i;
    for (i = 0; i < storesList.length; i++) {
        if (storesList[i].name === storeName) {
            return i;
        }
    }

    return -1;
}

function discountExists(discountName, discountsList) {
    var i;
    for (i = 0; i < discountsList.length; i++) {
        if (discountsList[i].name === discountName) {
            return i;
        }
    }

    return -1;
}


customerSchema.statics.incrementPoints = function (customerName, sellerName, points, callback) {
    console.log(customerName);
    return this.findOne(
        {username: customerName},
        function (err, customer) {
            if (err) throw err;
            console.log(JSON.stringify(customer));
            var index = storeExists(sellerName, customer.stores);
            if(index>-1){
                customer.stores[index].points = Number(customer.stores[index].points) + Number(points)
            }else{
                customer.stores.push({
                    "name": sellerName,
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

customerSchema.statics.activatePromotion = function (customer, seller, promotionName, promotionPoints, callback) {
    return this.findOne(
        {username: customer},
        function (err, customer) {
            if(err) throw err;
            var storeIndex = storeExists(seller, customer.stores);
            customer.stores[storeIndex].points = Number(customer.stores[storeIndex].points) - promotionPoints;
            var discountIndex = discountExists(promotionName, customer.stores[storeIndex].discounts)
            if(discountIndex>-1){
                customer.stores[storeIndex].discounts[discountIndex].quantity = Number(customer.stores[storeIndex].discounts[discountIndex].quantity) + 1;
            }else{
                customer.stores[storeIndex].discounts.push({
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

customerSchema.statics.useCoupon = function (customer, seller, promotionName, callback) {
    return this.findOne(
        {username: customer},
        function (err, customer) {
            if(err) throw err;
            var storeIndex = storeExists(seller, customer.stores);
            var discountIndex = discountExists(promotionName, customer.stores[storeIndex].discounts);
            customer.stores[storeIndex].discounts[discountIndex].quantity = Number(customer.stores[storeIndex].discounts[discountIndex].quantity) -1;
            if(customer.stores[storeIndex].discounts[discountIndex].quantity===0){
                customer.stores[storeIndex].discounts.splice(discountIndex,1)
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
# MyVirtualCard
Project for the exam "Data management for the web" @ Polimi.
Group composition:
- Alessandro Caprarelli
- Federico Gatti
- Giovanni Marino
- Amro Abd Elgawwad 

REST API url: myvirtualcard.herokuapp.com

## API documentation

### Generic use

#### GET /drop-db
To delete all the collections and documents.
After that the db is completely cleaned.

#### GET /reset-db
**+++Coming soon+++**
To reset the db to the initial state.

### Seller

#### GET /sellers
Get a list of all the sellers.

#### POST /sellers
Insert a new seller passing a JSON.
Use this JSON as example:
```
{
    "username": "supermercato1" //it's a readable ID
    "name": "Supermercato sotto casa"
    "logo": "/img/logo1.png",
    "promotions": [
        {
            "name" : "Coffe",
            "points": "10"
        },
        {
            "name" : "Beer",
            "points": "50"
        }
    ]
}
```

#### POST /sellers/:sellerUsername/customers/:customerUsername/points/:points
Use this to add points to a customer in a store. (When scanning a qr code of a user)
Example: `POST /sellers/supermercato1/customers/alecapra/points/10`

#### POST /sellers/:sellerUsername/customers/:customerUsername/:promotionName
Use this to remove a coupon to a customer in a store. (When scanning a qr code of a coupon)
Example: `/sellers/test/customers/alecapra/promotions/Coffe`

### Customer

#### GET /customers
Get a list of all the customers in DB.

#### POST /customers
Insert a new customer passing a JSON.
**N.B. use name without spaces. We use name as ID.**
Use this JSON as example:
```
{
    "username": "alecapra",
    "name" : "Alessandro",
    "surname": "Caprarelli"
}
```

#### GET /customers/:customerUsername
Get a customer info.
You get a JSON object like this:
```
{
    username: {type: String, index: true},
        name: {type: String},
        surname: {type: String},
        stores: [
            {
                username: {type: String},
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
}
```

#### DELETE /customers/:customerUsername
Remove a customer.
Example: `DELETE /customers/alecapra`

#### POST /customers/:customerUsername/sellers/:sellerUsername/promotions/:promotionName/:promotionPoints
To activate a promotion in a store and generate a coupon, decrementing point.
Example: `/customers/alecapra/sellers/supermercato1/promotions/Coffe/10`
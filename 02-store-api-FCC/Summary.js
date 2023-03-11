// * 1. Setting up the basic express server, routes, controllers, middlewares
// * 2. Connecting express server to the atlas server using mongoose in connect.js using connection string stored in .env file

// * 3. Testing and saving different routes in ThunderClient collection

// * 4. Using async wrapper package - Instead of setting up try catch, instead of setting up our own middleware, we use this package - 'express-async-wrapper' 

// * 5. Creating mongoose schema -> model
// * 6. Storing the data in mongoDB from the product.json at once using populate.js

// * 7. Playing with req.query in the controllers

// * 8. Using $regex(mongoDB query operators), why are we using regex => Earlier, in name query, we had to put the whole name of the item as stored in the database. But using $regex - all the item names having the letters passed in the name query will be received in the response.

// * 9. Adding sorting functionality(sort) in the controllers
// * 10. Adding selecting functionality(select) in the controllers - The only fields which we want to see

// * 11. Adding pagination functionality in the controllers with limit and skip functions

// * 12. Adding ranging functionality in the controllers -> 1st - converting price>40,rating>=4 to price-$gt-40,rating-$gte-4 , 2nd - Inserting the fields in the queryObject

// * 13. Total fields in this project - featured, company, name, sort, select, pagination, ranging. ' featured, company, name, ranging ' -> placed in queryObject before finding in database, ' sort, select, pagination ' -> after finding
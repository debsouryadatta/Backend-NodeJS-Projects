// * 1. Setting up the basic express server, routes, controllers
// * 2. Testing and saving different routes in postman collection
// * 3. Setting up the MongoDb Atlas.
// * 4. Connecting express server to the atlas server using mongoose in connect.js

// * 5. Using .env file to store the mongoDB connection string, we also need to install dotenv package for that

// * 6. Creating mongoose schema -> model -> importing it in tasks.js in controllers to create documents

// * 7. Handling controllers error due to schema validaion -> In the try catch block

// * 8. Create - const task = await Task.create(req.body)
// *    Read - const task = await Task.findOne({_id: taskID})
// *    Delete - const task = await Task.findOneAndDelete({_id: taskID})
// *    Update - const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, { new: true, runValidators: true})

// * 9. PUT v/s PATCH -> When we use put, the properties which are not provided in the req.body gets deleted but in patch, the new properties gets merged with the old properties(For better demonstration watch - https://youtu.be/rltfdjcXjmk 2:20:10 )

// * 10. Creating a middleware for handling route not found
// * 11. Removing the try catch blocks, using a middleware(asyncWrapper)
// * 12. Creating error handler for passing the errors of the async wrapper, controllers
// * 13. The middlwares - notFound, errorHandlerMiddleware must be below the routes middleware -> Reason mentioned in app.js

// * 14. Setting up the custom error class object in the custom-error.js for the 404 errors and handling the errors in the error-handler.js

// * 15. 404 error msg -> `No task with id : ${taskID}`
// *     500 error msg -> `Something went wrong, try again later`

// * 16. Setting the port -> process.env.PORT || 3000 , This is required since the platform where we will deploy this may not have port 3000 free
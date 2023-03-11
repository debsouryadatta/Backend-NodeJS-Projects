// * 1. Setting up the basic express server, routes, controllers, middlewares, error-handler, custom-error, express-async-errors

// * 2. Testing and saving different routes in ThunderClient collection
// * 3. Using express-async-errors to throw error from the controllers for empty name/password field

// * 4. Basic idea of JWT -> For more go to the Codedamn source code
// * 5. Creating the JWT and sending to the frontend which stores the JWT in the local storage
// * 6. Verifying the token sent by the frontend, in the controllers then showing the response on the dasboard

// * 7. Importing auth middleware in the routes and using it before the dashboard route

// * 8. Refactoring the dashboard route and taking the authentication part to the authMiddleware so that if there are many routes, we can use the auth middleware everytime when we require to authenticate the user

// * 9. Creating more classes of errors to have a better structured code, also installing the package - 'http-status-codes' for status codes

// * 10. Importing all the error classes in one file(index.js) and exporting it to use in different files as required

// * 11. We might think that all these refactoring and dividing into different components is not required, yes its true that it is not required when the projects are small but when the projects are big, the code needs to be in structured format...there it is helpful.

// * 12. One imp thing -> The package 'express-async-errors' also helps in forwarding the errors occurred in any async functions to the error handler.


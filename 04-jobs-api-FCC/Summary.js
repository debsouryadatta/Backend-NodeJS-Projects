// * 1. Pre-Coded things - dotenv,express-async-errors,all the errors,middlewares
// * 2. Setting up the basic express server, routes, controllers both for auth as well as jobs

// * 3. Setting up the DB connection and creating mongoose schema & model for the authentication part

// * 4. Testing and saving different routes in ThunderClient collection
// * 5. Creating user on the database using the model

// * 6. Hashing the password, installing the package 'bcryptjs' and storing the hashed password on the database

// * 7. Refactoring the authcontroller - hashing the password just after defining the schema(Just before the data is saved on the database, the password is hashed)

// * 8. Generating the JWT in the authcontroller and sending it to the frontend

// * 9. Refactoring the authcontroller - Generating the JWT in the mongoose models using mongoose instance methods, where we can call the methods written in the model directly from the authcontroller

// * 10. Creating the login function in the controller - Getting the email,password from the req.body -> finding the email on the database -> comparing the password,creating the JWT with help of mongoose method instances -> sending the JWT to the frontend

// * 11. Creating the authentication middleware for checking the JWT sent by the frontend -> const payload = jwt.verify(token, process.env.JWT_SECRET)

// * 12. Importing authentication middleware in the app.js and using it before the job routes so that we don't have to write before each routes

// * 13. Getting the payload of the JWT from the create job route(req.user)
// * 14. Creating the mongoose schema and the model for the jobs

// * 15. Created the createJob function in the controller -> Taking req.body.createdBy = req.user.userId, and the timestamps in the job model helps in providing the createdAt and updatedAt properties

// * 16. Created the getAllJobs function in the controller -> Finding all the jobs associated with the userId that we get from the JWT

// * 17. Created the getJob function in the controller -> Finding the job with the specific userId and jobId that we get from the req.user and req.params

// * 18. Created the updateJob function in the controller -> Finding the job with the specific userId, jobId and updating the found document with the req.body

// * 19. Created the deleteJob function in the controller -> Finding the job with the specific userId and jobId that we get from the req.user and req.params and removing it

// * 20. Working on the error handler

// token - Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2VkN2NkZmE3MDE5MzNmNWNlYzdjZGUiLCJuYW1lIjoibmVlbDIiLCJpYXQiOjE2NzY1MDgzODMsImV4cCI6MTY3OTEwMDM4M30.ovpwgBwIMu-26UYVZvP9bSlhGG98T5OPzrM96d_fP7A
// require('./db/connect') // using function without exporting, as discussed in node tutorial.
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config() // importing dotenv package
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// middlewares
app.use(express.static('./public'))
app.use(express.json()) // To get the req.body


// routes
app.use('/api/v1/tasks',tasks)
app.use(notFound) // If route doesn't exist, response will come from this middleware. This line  must be after the routes middleware or else every route shows this response
app.use(errorHandlerMiddleware) // Even this line  must be after the routes middleware or else response from this middleware doesn't works



const port = process.env.PORT || 3000 // This is required since the platform where we will deploy this may not have port 3000 free

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI) // using dotenv variable
        app.listen(port, ()=>{
            console.log(`Server is running on port: ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()



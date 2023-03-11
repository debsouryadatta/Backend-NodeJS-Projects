const {CustomAPIError} = require('../errors/custom-error')

const errorHandlerMiddleware = (err, req, res, next) =>{
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({msg: err.message})
    }
    return res.status(500).json({msg: `Something went wrong, try again later`})
}
// The error from the asyncWrapper and controllers comes here

module.exports = errorHandlerMiddleware
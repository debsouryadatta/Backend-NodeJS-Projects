// Async Wrapper setup for removing the try catch statements from the controllers
const asyncWrapper = (fn)=>{
    // we will have access to req,res,next since it is passed to asyncWrapper 
    return async (req,res,next)=>{
        try {
            await fn(req,res,next)
        } catch (error) {
            next(error) // Through this line, the error will be passed to the errorHandlerMiddleware
        }
    }
}

module.exports = asyncWrapper
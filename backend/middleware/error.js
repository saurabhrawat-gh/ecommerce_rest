const ErrorHandler = require('../utils/error-handler')

module.exports = (err, req, res,next) => {
    err.statusCode = err.statusCode
    err.message = err.message

    // Invalid mongodb _id error
    if(err.name === 'CastError') {
        const message = `Resource not found. Invalid: ${err.path}`
        err = new ErrorHandler(message, 400)
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    })
}
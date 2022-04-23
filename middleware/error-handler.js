const CustomAPIError = require('../errors/custom-error');

const errorHandlerMiddleware = (err, req, res, next) => {
    // handle custom errors
    if (err instanceof CustomAPIError) {
        return res
            .status(err.status)
            .json({
                message: err.message
            })
    }

    // all other errors
    return res.status(500).json({
        message: `Something went wrong`,
        exception: err.message
    })
}

module.exports = errorHandlerMiddleware;
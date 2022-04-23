const { CustomAPIError } = require('../errors');
const { StatusCodes } = require('http-status-codes');

const errorHandlerMiddleware = (err, req, res, next) => {
    // handle custom errors
    if (err instanceof CustomAPIError) {
        return res
            .status(err.statusCode)
            .json({
                message: err.message
            })
    }

    // all other errors
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        message: `Something went wrong`,
        exception: err.message
    })
}

module.exports = errorHandlerMiddleware;
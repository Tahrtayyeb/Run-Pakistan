import { ApiError } from "../utils/apiError.js"

export const errorHandler = (err, req, res, next) => {
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            errors: err.errors,
            stack: process.env.NODE_ENV === 'development' ? err.stack : null
        })
    }

    return res.status(500).json({
        success: false,
        message: 'Internal Server Error',
        errors: [],
        stack: process.env.NODE_ENV === 'development' ? err.stack : null
    })
}
//class can be reusable with new HandleError
class HandleError extends Error {
    constructor (message, statusCode) {
        super(message)
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor)
    }
}

export default HandleError;
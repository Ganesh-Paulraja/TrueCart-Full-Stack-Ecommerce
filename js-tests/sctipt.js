// const error = new Error("Something broke");

// // ✅ Option 1: Manual breakdown
// console.log(error)
// console.log({
//   name: error.name,
//   message: error.message,
//   stack: error.stack,
// });

class HandleError extends Error {
    constructor (message, statusCode) {
        super(message)
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor)
    }
}
// console.log(new HandleError('hello', 4040))
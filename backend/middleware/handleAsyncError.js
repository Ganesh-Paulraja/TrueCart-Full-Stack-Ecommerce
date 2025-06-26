// we are catching the error when it comes to next() it will console it
export default (myErrorFun) => (req, res, next) => {
    Promise.resolve(myErrorFun(req, res, next)).catch(next)
}

// const fun = (myErrorFun) => {
//     return (req, res, next) => {
//         Promise.resolve(myErrorFun(req, res, next))
//     }
// }
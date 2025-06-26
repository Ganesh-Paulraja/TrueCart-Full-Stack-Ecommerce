import express from 'express'
import productRouts from './routes/productRoutes.js'
import errorHandleMiddleware from './middleware/error.js'
const app = express()

//Middleware
app.use(express.json())
app.use('/api/v1', productRouts)
app.use(errorHandleMiddleware)

export default app
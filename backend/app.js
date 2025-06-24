import express from 'express'
import productRouts from './routes/productRoutes.js'
const app = express()

//Middleware
app.use(express.json())
app.use('/api/v1', productRouts)

export default app
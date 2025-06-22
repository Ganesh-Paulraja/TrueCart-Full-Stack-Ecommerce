import app from './app.js'
import dotenv from 'dotenv'

dotenv.config({path: 'backend/config/config.env'})
const PORT = process.env.PORT || 7000

app.get('/api/v1/products', (req, res) => {
    res.status(200).json({
        message: "All Products"
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
    
})

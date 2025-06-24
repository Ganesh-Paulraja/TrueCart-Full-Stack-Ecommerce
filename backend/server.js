import app from './app.js'
import dotenv from 'dotenv'
import { connectDataBase } from './config/db.js'
dotenv.config({path: 'backend/config/config.env'})

const PORT = process.env.PORT || 7000

connectDataBase()
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
    
})

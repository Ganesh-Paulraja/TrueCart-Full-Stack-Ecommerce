import app from './app.js'
import dotenv from 'dotenv'
import { connectDataBase } from './config/db.js'
dotenv.config({path: 'backend/config/config.env'})

const PORT = process.env.PORT || 7000

connectDataBase()
const server = app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})




// dontenv wrong data error like wrong db url
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Server is shutting down, due to unhandled promise rejection`);
    server.close(() => {
        process.exit(1)
    })
    
})
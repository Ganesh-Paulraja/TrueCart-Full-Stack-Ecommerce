import mongoose from "mongoose";

export const connectDataBase = () => {
    const url = process.env.MONGODB_URL
    mongoose.connect(url).
    then((data) => {
        console.log(`MongoDB connected with server ${data.connection.host}`);
        
    }).
    catch((error) => {
        console.log(error);
        
    })
}

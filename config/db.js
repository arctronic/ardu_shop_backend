import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
    try {
        console.log()
        const connect = await mongoose.connect(process.env.DB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`MongoDB connectd : ${connect.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}


export default connectDB
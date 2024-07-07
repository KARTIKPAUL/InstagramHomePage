const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const connectDB = async () =>{
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_URI)
        console.log(`\n Mongo DB Connected Sucessfully !! DB HOST : ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log('MongoDb Connect failed');   
    }
}

module.exports = connectDB;
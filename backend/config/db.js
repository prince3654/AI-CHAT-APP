const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
dotenv.config();


const connectDB = async()=>{
    try{
       const conn =  await mongoose.connect(process.env.URL, {
            useNewUrlParser: true,
         
        });
        console.log(`MongoDB Connected : ${conn.connection.host}`.blue.bold.underline);
    }catch(err){
        console.log(`err : ${err.message}`.red.bold);
        process.exit(1);
    }
}
module.exports = connectDB;
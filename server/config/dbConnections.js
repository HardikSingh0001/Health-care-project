const mongoose = require("mongoose");

const connectDb = async()=>{
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database Connected",connect.connection.host,connect.connection.name);
    }catch(err){
        console.log(err);
        //terminate the process immediately 1 stands for fail and 0 means success
        process.exit(1);
    }
};

module.exports = connectDb;
const mongoose = require("mongoose")


const connect = ()=>{
    return mongoose.connect("mongodb://localhost:27017/unit4-c3")
}

module.exports=connect;

const mongoose = require("mongoose")

const connect = ()=>{
    return mongoose.connect("mongodb://localhost:27017/sprint4-c4")
}
module.exports=connect
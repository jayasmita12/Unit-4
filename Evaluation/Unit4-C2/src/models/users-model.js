const  mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    age:{type:Number,required:true},
    email:{type:String,required:true},
    address:{type:String,required:true},
    gender:{type:String,default:"female"}
},{
    versionKey:false,
    timeStamps:true
})
const User = mongoose.model("user",userSchema)
module.exports=User;
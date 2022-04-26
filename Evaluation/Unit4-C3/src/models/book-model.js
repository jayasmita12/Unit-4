const mongoose = require("mongoose")

const bookSchema =new mongoose.Schema({
    likes:{type:Number,required:true,default:0},
    coverImage:{type:String,required:true},
    content:{type:String,required:true},
   userId:{type:mongoose.Schema.Types.ObjectId,ref:"user"}
},{
    versionKey:false,
    timeStamps:true
})
const Book = mongoose.model("book",bookSchema)
module.exports=Book
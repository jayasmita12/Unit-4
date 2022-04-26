const  mongoose = require("mongoose");


const branchdetailsSchema = new mongoose.Schema({
    name:{type:String,required:true},
    address:{type:String,required:true},
    IFSC:{type:String,required:true},
    MICR:{type:Number,required:true},
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
},{
    versionKey:false,
    timeStamps:true
})
const Branchdetails = mongoose.model("branchdetails",branchdetailsSchema)
module.exports=Branchdetails;
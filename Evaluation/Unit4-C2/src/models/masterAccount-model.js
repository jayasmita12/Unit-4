const  mongoose = require("mongoose");


const masterSchema = new mongoose.Schema({
    balance:{type:Number,required:true},
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
},{
    versionKey:false,
    timeStamps:true
})
const Master = mongoose.model("master",masterSchema)
module.exports=Master;
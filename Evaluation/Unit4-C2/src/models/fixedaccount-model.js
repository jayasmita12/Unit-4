const  mongoose = require("mongoose");


const fixedSchema = new mongoose.Schema({
    
    savingId :{type:mongoose.Schema.Types.ObjectId,
        ref:"saving"},
    startDate:{type:Date,required:true},
    MaturityDate:{type:Date,required:true}
},{
    versionKey:false,
    timeStamps:true
})
const Fixedaccount = mongoose.model("fixed",fixedSchema)
module.exports=Fixedaccount;
const  mongoose = require("mongoose");


const savingSchema = new mongoose.Schema({
    accountNumber:{type:Number,required:true},
    balanceId :{type:mongoose.Schema.Types.ObjectId,
        ref:"master"},
    interestRate:{type:Number,required:true}
},{
    versionKey:false,
    timeStamps:true
})
const Saving = mongoose.model("saving",savingSchema)
module.exports=Saving;
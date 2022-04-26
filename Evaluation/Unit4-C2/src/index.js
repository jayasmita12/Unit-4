const express = require("express")
// const mongoose = require("mongoose")
const app = express();
const connect=require("./configs/dbs") 

// const User = require("./models/users-model")
// const Branchdetails= require("./models/branch-details-model")
// const Master = require("./models/masterAccount-model")
// const Saving = require("./models/savingAccount-model")
// const Fixedaccount = require("./models/fixedaccount-model")

const mastercontroller = require("./controllers/master-controller")
const usercontroller = require("./controllers/user-controller")

app.use(express.json())
app.use("/masters",mastercontroller)
app.use("/users",usercontroller)

app.listen(5000,async()=>{
    try{
        await connect()
    }
    catch(err){
        console.log("ERROR")
    }
    console.log("Connecting to the PORT 5000")
})



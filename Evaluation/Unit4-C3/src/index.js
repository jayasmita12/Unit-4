
const express = require("express")
const mongoose= require("mongoose")
const app = express()
const connect = require("./configs/db")

app.use(express.json())
const userController = require("./controllers/user-controller")
app.use("/users",userController)
const bookController = require("./controllers/book-controller")
app.use("/books",bookController)

app.listen(5000,async(req,res)=>{
    try{
        await connect()
        console.log("Connecting on PORT 5000")
    }
    catch(err){
        console.log(err)
    }
})
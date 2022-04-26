const express = require("express")
const app = express()
const connect = require("./configs/db")

app.use(express.json())
const userController = require("./controller/user-controller")
app.use("/users",userController)
// const authController = require("./controller/auth-controller")
// app.post("/register",authController)
// app.post("/login",authController)

const todoController = require("./controller/todo-controller")
app.use("/todos",todoController)

app.listen(6300,async()=>{
    try{
        await connect()
        console.log("Listening to the Port 6300")
    }
    catch(err){
        console.log(err.message)
    }
})
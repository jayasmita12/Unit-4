const express = require("express")
const app = express()
const User = require("../models/masterAccount-model")


app.post("",async(req,res)=>{
    try{
        const users = await User.create(req.body)
        return res.status(201).send({users})
    }
    catch(err){
        return res.status(500).send({messages:"Something Wrong..."})
    }
})

module.exports=app;
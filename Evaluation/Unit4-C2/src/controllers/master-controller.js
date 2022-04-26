
const express = require("express")
const app = express()
const Master = require("../models/masterAccount-model")

app.get("",async(req,res)=>{
    try{
        const masters = await Master.find().populate({
            path:"userId",
        }).lean().exec()
        return res.status(200).send({masters})
    }
    catch(err){
        return res.status(500).send({messages:"Something Wrong..."})
    }
})

app.post("",async(req,res)=>{
    try{
        const masters = await Master.create(req.body)
        return res.status(201).send({masters})
    }
    catch(err){
        return res.status(500).send({messages:"Something Wrong..."})
    }
})


module.exports=app;
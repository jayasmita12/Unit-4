const { body, validationResult } = require('express-validator');
const express = require("express")
const app = express()
const User = require("../models/user-model")
const router = express.Router()

router.post("",body("firstName").not().isEmpty().custom(async(value)=>{
    if(value.length >=3|| value.length <=30){
        return true
    }else{
        throw new Error("Length of User name Maximum")
    }
}),body("age").not().isEmpty().custom((value)=>{
    if(value.lenght<1 || value.length>150){
        throw new Error("Put perfect age limit")
    }
    return true
}),async(req,res)=>{
    try{
        const users = await User.create(req.body)
        return res.status(201).send(users)
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})

module.exports = router
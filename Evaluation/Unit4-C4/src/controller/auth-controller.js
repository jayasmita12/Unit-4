const jwt = require("jsonwebtoken")
const User = require("../models/user-model")
require("dotenv").config()

const network = (user)=>{
    // console.log()
    return jwt.sign({ user }, process.env.SECREAT_KEY);
}

const register = async(req,res)=>{
    try{
        let user = await User.findOne({email:req.body.email})
        if(user) {
            return res.status(400).send({message:"email  already exit"})
        }
        user = await User.create(req.body)
        const token = newtoken(user)
        return res.status(200).send({user,token})
    }
    catch(err){
        return res.ststus(500).send(err.message)
    }
}

const login = async(req,res)=>{
    try{
        let user = await User.findOne({email:req.body.email})
        if(!user){
            return res.status(400).send("Wrong email or Password")
        } 
        const match = user.checkpassword(req.body.passwod)
        if(!match){
            return res.status(400).send("Wrong email or password")
        }
        const token = newtoken(user)
        return res.status(200).send({user,token})
    }
    catch(err){
        return res.status(500).send(err.message)
    }
}

module.exports= {register,login}
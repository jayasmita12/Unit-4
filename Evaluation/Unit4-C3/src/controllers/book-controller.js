const { body, validationResult } = require('express-validator');
const express = require("express")
const app = express()
const Book = require("../models/user-model")
const router = express.Router()

router.post("",async(req,res)=>{
    try{
        const books = await Book.create(req.body)
        return res.status(500).send(books)
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})

module.exports=router
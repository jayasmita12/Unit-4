const express = require(express)
const router = express.Router()
const Todo = require("../models/todo-model")

router.post("",async(req,res)=>{
    try{
        const todo = await Todo.create(req,body)
        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})

router.get("",async(req,res)=>{
    try{
        const todos = await Todo.find().lean().exec()
        return res.status(200).send(todos)
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})

router.get("/:id",async(req,res)=>{
    try{
        const todo = await Todo.findById().lean().exec()
        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})

router.patch("/:id",async(req,res)=>{
    try{
        const todo = await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})


router.delete("/:id",async(req,res)=>{
    try{
        const todo = await Todo.findByIdAndDelete().lean().exec()
        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})

module.exports=router



const express = require ("express")
const mainapp=express()

mainapp.use(logger)

mainapp.get("/books",(req,res)=>{
    return res.send({route: "/books"})
})

mainapp.get("/libraries",checkPermission("librarian"),(req,res)=>{
    return res.send({route: "/libraries",Permissions:req.Permissions})
})

mainapp.get("/authors",checkPermission("author"),(req,res)=>{
    return res.send({route: "/authors",Permissions:req.Permissions})
})

function logger(req,res,next){
    console.log(req.path)
    next()
}

function checkPermission(catching){
 return   function loger1(req,res,next){
        if(req.path=="/libraries"){
          req.Permissions=true
        }
        if(req.path=="/authors"){
            req.Permissions=true
          }
        next()
    }
}

mainapp.listen(4005,()=>{
    console.log("Connecting to the server of PORT 4006")
})
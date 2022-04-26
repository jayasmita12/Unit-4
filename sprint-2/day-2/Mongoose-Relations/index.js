const express= require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())
const connect =() =>{
    return mongoose.connect("mongodb://localhost:27017/mongoose-relation-assignment")
};

//User schema
const authorSchema = new mongoose.Schema(
    {
    
    firstname: { type: String, required: true },
    lastname: { type: String, required: true},
   
    },
    {
     versionKey: false,
        timestamps: true,
    
    })
    
    //step-2 (Creating Model)
    const Author = mongoose.model("author",authorSchema)




//Post Schema
const bookSchema = new mongoose.Schema(
    {
    
    bookname: { type: String, required: true },
    body: { type: String, required: true},
    sectionId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"section"
        }
    },
    {
     versionKey: false,
        timestamps: true,
    
    })
    
    //step-2 (Creating Model)
    const Book = mongoose.model("book",bookSchema)




//comment Scheme
const sectionSchema = new mongoose.Schema(
    {
    
     sectionName:{type: String, required: true},
    //  bookId:{type:mongoose.Schema.Types.ObjectId,
    //   ref:"book"}
    },
    {
     versionKey: false,
        timestamps: true,
    
    }) 
    //step-2 (Creating Model)
    const Section= mongoose.model("section",sectionSchema)

    const book_authorSchema = new mongoose.Schema({
     bookId:{type:mongoose.Schema.Types.ObjectId,
         ref:"book"},
     authorId:{type:mongoose.Schema.Types.ObjectId,
      ref:"author"},
    },{

      versionKey:false,
      timestamps:true,
    })
    const Book_author = mongoose.model("book_author",book_authorSchema)

const CheckedSchema = new mongoose.Schema({
  authorId:{type:mongoose.Schema.Types.ObjectId,
    ref:"author"},
    bookId:{type:mongoose.Schema.Types.ObjectId,
      ref:"book"},
      checkedOut:{type: Date,default: null},
      checkedIn:{type: Date,default: null},
},{
  versionKey:false,
  timestamps:true,
})
const Checked = mongoose.model("checked",CheckedSchema)
    //CRUD connection
    //get
    //post
    //patch
    //delete

    // app.get("/books",async(req,res)=>{
    //     try{
    //         const books = await Book.find().lean().exec()
    //         return res.status(200).send({books:books})
            
    //     }
    //     catch(err){
    //         return res.status(500).send({message:"Something went wrong"})
    //     }
    // })

    app.post("/books",async(req,res)=>{
        try{
            const book = await Book.create(req.body); 
            return res.status(201).send({book:book})
        }
        catch(err){
            return res.status(500).send({ message: err.message });
        }
    })

    app.get("/authors", async (req, res) => {
        try {
          const authors = await Author.find().lean().exec();
          
      
          return res.status(200).send(authors);
        } catch (err) {
          return res.status(500).send({ message: err.message });
        }
      })

      app.patch("/authors/:id", async (req, res) => {
        try {
          const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
          })
            .lean()
            .exec();
          // db.users.update({_id: Object('622893471b0065f917d24a38')}, {$set: {req.body}})
      
          return res.status(200).send(author);
        } catch (err) {
          return res.status(500).send({ message: err.message });
        }
      });

      app.delete("/authors/:id", async (req, res) => {
        try {
          const author = await Author.findByIdAndDelete(req.params.id).lean().exec();
          // db.authors.deleteOne({_id: Object('622893471b0065f917d24a38')})
      
          return res.status(200).send(author);
        } catch (err) {
          return res.status(500).send({ message: err.message });
        }
      });


//Books Crud
      app.get("/books",async(req,res)=>{
          try{
              const books = await Book.find().populate({path:"sectionId",select:{sectionName:1}}).lean().exec()
            return res.status(200).send({books:books})
          }
          catch(err){
            return res.status(500).send({message:"Somthing wrong in the posting...."})
          }
      })

      app.post("/books",async(req,res)=>{
        try{
            const book = await Book.create(req.body)
          return res.status(201).send({book:book})
        }
        catch(err){
          return res.status(500).send({message:"Somthing wrong in the posting...."})
        }
    })

    app.get("/books/:id",async(req,res)=>{
        try{
            const book = await Book.findById(req.params.id).lean().exec()
          return res.status(200).send({book})
        }
        catch(err){
          return res.status(500).send({message:err.message})
        }
    })

    app.delete("/books/:id",async(req,res)=>{
        try{
            const book = await Book.findByIdAndDelete(req.params.id).lean().exec()
          return res.status(200).send({book})
        }
        catch(err){
          return res.status(500).send({message:err.message})
        }
    })


   // Real Request

    app.post("/sections",async(req,res)=>{
      try{
          const section = await Section.create(req.body); 
          return res.status(201).send({section:section})
      }
      catch(err){
          return res.status(500).send({ message: err.message });
      }
  })

  app.get("/sections",async(req,res)=>{
    try{
        const sections = await Section.find().lean().exec()
      return res.status(200).send({sections:sections})
    }
    catch(err){
      return res.status(500).send({message:err.message})
    }
})

app.post("/authors",async(req,res)=>{
  try{
      const authors = await Author.create(req.body); 
      return res.status(201).send({authors:authors})
  }
  catch(err){
      return res.status(500).send({ message: err.message });
  }
})



app.post("/bookauthors",async(req,res)=>{
  try{
      const book_authors = await Book_author.create(req.body); 
      return res.status(201).send({book_authors:book_authors})
  }
  catch(err){
      return res.status(500).send({ message: err.message });
  }
})

app.get("/bookauthors",async(req,res)=>{
  try{
      const book_authors = await Book_author.find().populate({
        path:"bookId",
        select:["bookname","body"]
      }).populate({
        path:"authorId",
        select:["firstname","lastname"]
      }).lean().exec()
    return res.status(200).send({book_authors:book_authors})
  }
  catch(err){
    return res.status(500).send({message:err.message})
  }
})


app.get("/checked",async(req,res)=>{
  try{
      const checked = await Checked.find().lean().exec()
    return res.status(200).send({checked:checked})
  }
  catch(err){
    return res.status(500).send({message:err.message})
  }
})



app.post("/checked",async(req,res)=>{
  try{
      const checked = await Checked.create(req.body); 
      return res.status(201).send({checked:checked})
  }
  catch(err){
      return res.status(500).send({ message: err.message });
  }
})

app.listen(4000,async()=>{
    try{
        await connect()
    }
    catch(err){
        console.log("Error")
    }  
    console.log("Connecting to the PORT 4000")
})





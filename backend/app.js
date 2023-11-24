const express = require('express')
const mongoose =require ('mongoose')
const app=express();
const router = require("./routes/routes");
const cors=require ("cors")
   
app.use(express.json());
app.use(cors());
app.use("/books", router);

const uri = "mongodb+srv://ansh:KRQWJleVjfNZqZYX@cluster0.pn7oy3b.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri)
.then(()=>{
    console.log('db connected')
})
.catch(()=>{
    console.log('error');
})




app.listen(5000,()=>{
    console.log("hello raasi");
})
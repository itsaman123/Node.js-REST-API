const express=require("express");
const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Product", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("connected".bgMagenta)
})
.catch((e)=>{
    console.log(e);
})



module.exports
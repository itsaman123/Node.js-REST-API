const express = require("express");
const colors = require('colors');
const app = express();
const mongoose = require('mongoose');
const productRoutes = require('./routes/products');
const db=require('./db/connect');
var dotenv=require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        name: "aman",
        email: 'aman@gmail.com'
    });
});

app.use('/api/products', productRoutes);


app.listen(PORT,()=>{
    console.log(`listening to localhost:${PORT}`.bgYellow);
})


// till 12th video 
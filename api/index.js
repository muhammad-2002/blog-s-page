const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT

mongoose.connect(process.env.URI).then(()=>{
    console.log('connected')
}).catch((error)=>{
    console.log(error)
})



app.listen(port,()=>console.log(`listening Port ${port}`))
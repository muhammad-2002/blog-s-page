import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import UserRouter from "./routers/user.router.js";
const app = express();
dotenv.config()
const port = process.env.PORT

mongoose.connect(process.env.URI).then(()=>{
    console.log('connected')
}).catch((error)=>{
    console.log(error)
})




app.listen(port,()=>console.log(`listening Port ${port}`))
app.use('/api/user',UserRouter)
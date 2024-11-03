import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import authRouter from "./routers/auth.router.js";
import userRouter from "./routers/user.router.js";
const app = express();
dotenv.config()
app.use(express.json())
const port = process.env.PORT

mongoose.connect(process.env.URI).then(()=>{
    console.log('connected')
}).catch((error)=>{
    console.log(error)
})




app.listen(port,()=>console.log(`listening Port ${port}`))
app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
<<<<<<< HEAD
import authRouter from "./routers/auth.router.js";
import userRouter from "./routers/user.router.js";
=======
import UserRouter from "./routers/user.router.js";
>>>>>>> b34d5c528367a8223ca72ee17a8a27ca8856131c
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
<<<<<<< HEAD
app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)
=======
app.use('/api/user',UserRouter)
>>>>>>> b34d5c528367a8223ca72ee17a8a27ca8856131c

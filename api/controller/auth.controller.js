import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";

export const signup = async(req,res)=>{
    const {username,email,password} = req.body;
    if(!username || !password || !email || email ===''|| password===''){
        return res.status(500).json({
            message:"not a valid user"
        })
    }
    const hashPassword = bcryptjs.hashSync(password,10)

    const newUser = new User({
        username,
        email,
        password:hashPassword,
    })

    try{
        await newUser.save()
        res.json({message:"success"})
    }catch(error){
        console.log(error)
        res.send("error")
    }
}
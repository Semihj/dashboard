import express from "express";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"
import { verifyToken } from "../middelware/Verify.js";

const router = express.Router();

router.get("/get",async (req,res) => {
    try {
        const users = await User.find({});
        const userWithoutPasswords = users.map(element => {
          const { password: pass, ...rest } = element._doc;
          return rest;
        });
        res.status(200).json(userWithoutPasswords); 
    } catch (error) {
        res.status(500).json(error.message)
    }
})
router.post("/add",async (req,res) => {

    try {  
          const {username,password,email} = req.body
    const hashedPassword = bcryptjs.hashSync(password,10)

    const newUser = new User({
        username,
        email,
        password:hashedPassword
    })
        await newUser.save()
        res.status(200).json(newUser)
     
    } catch (error) {
        res.status(500).json(error.code)
    }
})
router.put("/:id/edit",async (req,res) => {
  
    
    
    try {  
    const password = new Boolean(req.body.password).valueOf()
    const email = new Boolean(req.body.email).valueOf()
    const username = new Boolean(req.body.username).valueOf()
    if(password) {
        req.body.password = bcryptjs.hashSync(req.body.password,10)
    }
    const user = await User.findById(req.params.id)
    const updatedUser = await User.findByIdAndUpdate(req.params.id,{
        $set:{
            username:username ? req.body.username : user.username ,
            email: email ? req.body.email : user.email,
            password: password ? req.body.password : user.password,
        }

    },{new:true})
     
    res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete("/:id/delete",async (req,res) => {
    try {
       await User.findByIdAndDelete(req.params.id)
       res.status(200).json("Successfully deleted") 
    } catch (error) {
        res.status(500).json(error)
    }
})



export default router;
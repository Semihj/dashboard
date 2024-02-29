import express from "express";
import Admin from "../models/admins.model.js";
import bcryptjs from "bcryptjs"
import {v4 as uuid} from "uuid"
import jwt  from "jsonwebtoken";
import { verifyToken } from "../middelware/Verify.js";
const router = express.Router();

router.post("/secretKey", async(req,res) => {

    let isSecretKeyValid = false
    const secretKeys = await Admin.find({})
    secretKeys.forEach( async (user) => { 
        if(user.secretKey === req.body.secretKey ) { 
            isSecretKeyValid = true;
           await user.updateOne({secretKey:uuid() }
           )
    }
    })
    try {
        if(isSecretKeyValid)  {
           const token =  jwt.sign({secretKey:req.body.secretKey}, process.env.JWT_SECRET)
           res.cookie("secret_key",token).status(200).json(true)
        }

        if(!isSecretKeyValid) res.status(404).json(false)
    } catch (error) {
        res.status(500).json(error)
    }   
})

router.post("/register",verifyToken, async (req,res) => {


    try {
        
        const { username, password,email} = req.body;
        const hashedPassword = bcryptjs.hashSync(password,10)
        const newAdmin =  new Admin({
            username,
            email,
            password:hashedPassword,
            secretKey:uuid()
        })
       
        await newAdmin.save()
        res.status(201).json("User created successfully")
    } catch (error) {
        res.status(500).json(error.message)
    }
})
router.post("/login",async (req,res) => {
    const {username,password} = req.body;
    try {
        const validUser = await Admin.findOne({username})
        if(!validUser) return res.status(404).json("User Not Found!")
        const validPassword = bcryptjs.compareSync(password, validUser.password)
        if(!validPassword) return res.status(404).json("Wrong Password!")

        if(validPassword && validUser ) {
            const token = jwt.sign({secretKey:validUser._id},process.env.JWT_SECRET)
            res.cookie("user",token)
            
            const {password:pass,...rest} = validUser._doc
            return res.status(200).json(rest)
     } 
    } catch (error) {
        res.status(500).json(error.message)
    }
})

router.get("/:id/secretKey",async (req, res) => {
    try {
        const admin = await Admin.findById(req.params.id)
        res.status(200).json(admin.secretKey)
    } catch (error) {
        res.status(500).json(error)
    }
})

export default router;
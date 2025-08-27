import User from "../model/userModel.js";
import validator from 'validator';
import bcrypt from 'bcryptjs';
import { generateToken, genToken } from "../config/token.js";


export const Register = async (req, res)=>{
    try {
        const {name, email, password} = req.body;
        const existUser = await User.findOne({email});

        if(existUser){
            return res.status(400).json({message:"User Already Exist"})
        }
        if(!validator.isEmail(email)){
             return res.status(400).json({message:"Enter Valid Email"})
        }
        if(password.length < 8){
             return res.status(400).json({message:"Enter Strong Password"})
        }
        let hashPassword = await bcrypt.hash(password, 10);  // to secure password used hash bcrypt

        const user = await User.create({name, email, password:hashPassword});
        let token = await generateToken(user._id);

        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"Strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.status(201).json({message:"Register Successful"});
    } catch (error) {
        console.log("Register Error");
        return res.status(500).json({
            message: `Register Error ${error}`
        })
    }
}

export const Login = async (req, res) =>{
    try {
        let {email, password} = req.body;
        let user = await User.findOne({email});

        if(!user){
            return res.status(404).json({message:"User Not Found"})
        }

        let isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
             return res.status(400).json({message:"Incorrect Email or Password"})
        }

        let token = await generateToken(user._id);

        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"Strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.status(201).json({message:"Login Successful"});
        
    } catch (error) {
        console.log("Login Error");
        return res.status(500).json({
            message: `Login Error ${error}`
        })
    }
}

// Logout

export const Logout = async (req, res) => {
    try {
        res.clearCookie("token")
        return res.status(200).json({message:"LogOut Successful"})
    } catch (error) {
         console.log("LogOut Error");
        return res.status(500).json({
            message: `LogOut Error ${error}`
        })
    }
}

//Google Login
export const googleLogin = async (req, res)=>{
    try {
        let {name, email} = req.body; // getting from body
        let user = await User.findOne({email});

        if(!user){
            user = await User.create({name, email})
        }

        let token = await generateToken(user._id);

        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"Strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.status(201).json({
            user,
            message:"Google Login Successful"
        });
    } catch (error) {
        console.log("Login Error");
        return res.status(500).json({
            message:  `Google Login Error ${error}`
        })
    }
}

// Admin Login
export const adminLogin = async (req, res) => {
    try {
        let {email, password} = req.body;

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
        
        let token = await genToken(email);

        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"Strict",
            maxAge: 1 * 24 * 60 * 60 * 1000
        })
        return res.status(201).json({
            token,
            message:"Admin Login Successful"
        });
        }

        return res.status(400).json({message:"Invalid Credentials"});
    } catch (error) {
        console.log("Admin Login Error");
        return res.status(500).json({
            message:  `Admin Login Error ${error}`
        })
    }
}
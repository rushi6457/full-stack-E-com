const UserModel = require("../models/userModel");
const express = require("express");
const argon = require("argon2");
const jwt = require('jsonwebtoken')

const Signup = async(req,res) =>{
    const {name,email,password} = req.body;
    const hashed = await argon.hash(password)

    try {
        let existingUser = await UserModel.findOne({email})
        if(existingUser){
            res.send({message:"User already exists"})
        }
        else{
            if(email.includes('@masai.com')){
                let newAdmin = new UserModel({
                    name,
                    email,
                    password:hashed,
                    role: 'admin'
                })
                await newAdmin.save();
                res.status(200).send({message:"Admin Signup successful", status:true,admin:newAdmin})
            }
            else{
                let newUser = new UserModel({
                    name,
                    email,
                    password:hashed,
                    role:'user'
                })
                await newUser.save();
                res.status(200).send({message:"User Signup successful", status:true,user:newUser})
            }
        }
    } catch (error) {
        res.send({message:error,status:false})
    }
}

const findUser = async (data) =>{
    let user = await UserModel.findOne({...data})
    if(user){
        return user
    }
    else{
        return false
    }
}
const validateUser = async(data) =>{
    let {email,password} = data;
   
    try {
        let user = await findUser({email})
        
        if(user){
            if(await argon.verify(user.password,password)){
                return user
            }
            else{
                return ("Password doesn't match")
            }
        }
        else{
            return ("User not exist, Signup to proceed")
        }
    } catch (error) {
        return error
    }
}
const Login = async(req,res) =>{

    let {email,password} = req.body;
    let user = await validateUser({email,password});
    let userId = user._id;
    let role = user.role
      
          if(user && user.email.includes("@masai.com")){
                if(user){
                  
                     let token = jwt.sign(

            {email:user.email,password:user.password,id:user._id},
            process.env.SECRET_KEY,
            {
                expiresIn:'2days'
            }
        );
        let refreshToken = jwt.sign(
            {email:user.email,password:user.password,id:user._id},
            process.env.REFRESH_KEY,
            {
                expiresIn:'28days'
            }
        );
        res.status(200).send({message:"Admin login successful",status:true,token,refreshToken,userId:userId,role:role})
                }
                else{
         let token = jwt.sign(
            {email:user.email,password:user.password,id:user._id},
            process.env.SECRET_KEY,
            {
                expiresIn:'2days'
            }
        );
        let refreshToken = jwt.sign(
            {email:user.email,password:user.password,id:user._id},
            process.env.REFRESH_KEY,
            {
                expiresIn:'28days'
            }
        );
        res.status(200).send({message:"User login successful",status:true,token,refreshToken,userId:userId,role:role})
        }        
    }   
     
}

const GetAllProfiles = async(req,res) =>{
    let box = []
    let users = await UserModel.find()
    for(let i=0;i<users.length;i++){
        box.push({email:users[i].email, role:users[i].role,name:users[i].name,id:users[i]._id})
    }
    res.send(box).status(200)
}
const GetSingleUser = async(req,res)=>{
    const {id} = req.params;
    const user = await UserModel.findById(id)
    try {
        if(user){
            res.send({email:user.email,name:user.name,role:user.role,status:true}).status(200)
        }
        else{
            res.send({message:"User not found",status:false})
        }
    } catch (error) {
        res.send({message:error})
    }
}

module.exports = {
    Signup,
    Login,
    GetAllProfiles,
    GetSingleUser
}
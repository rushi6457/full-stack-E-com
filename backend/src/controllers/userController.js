const UserModel = require("../models/userModel")
const asyncHandler = require('express-async-handler')
const argon = require('argon2');
const generateToken = require('../middlewares/token');

const Signup = asyncHandler(async(req,res) =>{
    const {name,email,password} = req.body;
    const hashedPassword = await argon.hash(password)
    const exisitingUser = await UserModel.findOne({email})
    if(exisitingUser){
        res.status(400).send({message:"User already exists"})
    }
    else{
        if(email.includes("@patil.com")){
            let newUser = await UserModel.create({
            name,
            email,
            password:hashedPassword,
            role:"admin"
        })
        if(newUser){
            res.status(200).json({
                _id:newUser._id,
                name:newUser.name,
                email:newUser.email,
                role:newUser.role   
            })
        }
        else{
            throw new Error("Unable to signup")
        }
    }
        else{
             let newUser = await UserModel.create({
            name,
            email,
            password:hashedPassword,
            role:"user"
        })
        if(newUser){
            res.status(200).json({
                _id:newUser._id,
                name:newUser.name,
                email:newUser.email,
                role:newUser.role   
            })
        }
        else{
            throw new Error("Unable to signup")
        }
        }
    }
}) 

const Login = asyncHandler(async(req,res) =>{
    const {email,password} =req.body;
    const user = await UserModel.findOne({email})
    if(user && await argon.verify(user.password,password)){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            role:user.role,
            token:generateToken(user._id,user.role)
        })
    }
      else{
        res.status(400)
        throw new Error("Something went wrong")
    }
})

const getAllUsers = asyncHandler(async(req,res) =>{
    let users = await UserModel.find().select("-password")
    if(users){
        res.status(200).send(users)
    }
    else{
        throw new Error("Something went wrong")
    }
})
const GetSingleUser = asyncHandler(async(req,res) =>{

    try {
        let singleUser = await UserModel.findById(req.body).populate("cartId");
        res.status(200).send(singleUser)

    } catch (error) {
        console.log(error);
    }

})

const getProductsWithUsers = asyncHandler(async(req,res) =>{
    const users = await UserModel.find().populate("cartId")
    console.log(users)
    res.send(users)
})



module.exports = {
    Signup,
    Login,
    getAllUsers,
    getProductsWithUsers,
    GetSingleUser
}
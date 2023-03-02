
const jwt  = require('jsonwebtoken');
const UserModel = require("../models/chatModel")
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async(req,res,next) =>{

        let token;
        if(req.headers.authorization && req.headers.authorization.startsWith("Bearer ")){

            try {
                token = req.headers.authorization.split(" ")[1];

                const decoded = jwt.verify(token,process.env.SECRET_KEY)
                req.user = await UserModel.findById(decoded.id).select("-password")
                next();
            } catch (error) {
                res.status(401)
                throw new Error("Not authorised")
            }
        }
        if(!token){
            res.status(401)
            throw new Error("Login to access")
        }
})
module.exports = { protect };
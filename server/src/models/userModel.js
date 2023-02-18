const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true,
        },
        role:{
            type:String,
            enum:["admin","user"],
            default:'user'
        },
        cartItems:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'cart'
        }
        
},{
    timestamps:true
})
const UserModel = mongoose.model("user",UserSchema);
module.exports = UserModel;
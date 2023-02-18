const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
        maxlength:4000
    },
    price:{
        type:Number,
        required:true,
        min:1
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true
    }
},{
    timestamps:true
})
const ProductModel = mongoose.model('product',ProductSchema)
module.exports = ProductModel
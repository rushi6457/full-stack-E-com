const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:"https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-polo-men.png"
    },
    description:{
        type:String,
        default:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt et est ratione tempore, nobis accusantium reiciendis explicabo quia nulla commodi magni, fuga eveniet sapiente nisi ipsum numquam quam vitae possimus"
    },
    price:{
        type:Number,
        required:true
    }
},{
    timestamps:true
})
const ProductModel = mongoose.model("Product",ProductSchema)
module.exports = ProductModel
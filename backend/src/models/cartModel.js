const mongoose = require('mongoose');
const CartSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        default:1,
        required:true
    } 
},{
    timestamps:true
})

const CartModel = mongoose.model("Cart",CartSchema)
module.exports = CartModel
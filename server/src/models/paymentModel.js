const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
   userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product',
        required:true
    },
    quantity:{
         type:Number,
         required:true,
         default:1   
    }
})
const PaymentModel = mongoose.model("payment",PaymentSchema)
module.exports = PaymentModel
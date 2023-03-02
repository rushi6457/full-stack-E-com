const PaymentModel = require("../models/paymentModel")
const asyncHandler = require("express-async-handler")

const ProceesToPayment = asyncHandler(async(req,res) =>{
    const {productId,cartItems,address,pincode} = req.body;
    
    
    const payment = await PaymentModel.create({productId,cartItems,address,pincode})
    const paymentprocess = await PaymentModel.findById(payment._id).populate("cartItems").populate("productId")
   
    await paymentprocess.save()
    const total = paymentprocess.cartItems.quantity * paymentprocess.productId.price
    res.status(200).send({paymentprocess,total:total})
})

const PaymentData = asyncHandler(async(req,res) =>{
    let data = await PaymentModel.find().populate('cartItems')
    res.status(200).send(data)
})
module.exports = {
    ProceesToPayment,
    PaymentData
}
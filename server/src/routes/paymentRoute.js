const PaymentModel = require("../models/paymentModel")
const ProductModel = require("../models/productModel")
const Payment = async(req,res) =>{
    const {userId,productId,quantity} = req.body;
    // const findProduct = await ProductModel.findById({productId:productId})  
    console.log(productId); 
    try {
        let netValue = new PaymentModel({
           userId: userId,
            productId:productId,
            quantity:quantity
        }) 
     
        await payment.save();
        res.send({status:true,total:payment})

    } catch (error) {
        res.send({message:error})
    }
}

module.exports = {
    Payment
}
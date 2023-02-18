const CartModel = require("../models/cartModel")

// Add to cart
const AddToCart = async(req,res)=>{
    try {
        let {productId,userId,quantity} = req.body;
        const productExisist = await CartModel.findOne({productId})
        if(productExisist){
            res.send({status:true,message:"Product already exists"})
        }
        else{
            let newCartItem = await (await (await CartModel.create({productId:productId,userId:userId,quantity})).populate('productId')).populate('userId')

            res.send({status:true,newCartItem}).status(200)
        }
    } catch (error) {
        res.send({status:false,message:error.message})
    }
}

module.exports = {
    AddToCart
}
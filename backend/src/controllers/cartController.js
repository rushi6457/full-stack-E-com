const CartModel = require("../models/cartModel")
const asyncHandler = require('express-async-handler')

const AddToCart = asyncHandler(async(req,res) =>{
    
    try {
        const {userId, productId, quantity } = req.body;
    
        const isProductExist = await CartModel.findOne({ productId, userId });
        if (isProductExist) {
            return res.status(404).send({ message: 'Product already exists in cart' });
        }
       
        const cart = await CartModel.create({ userId,productId, quantity });
        
          const newCartItem = await CartModel.findById(cart._id).populate('productId').populate('userId',"-password");
          await newCartItem.save()
         res.status(201).send({ message:`Product Added Successfully in cart`  ,  newCartItem});
    } catch (error) {
         res.status(404).send({ message: 'Something went wrong' });
    }

})

const CartData = asyncHandler(async(req,res) =>{
    let data = await CartModel.find().populate('productId').populate('userId',"-password");
    res.status(200).send(data)
})

const DeleteCart = asyncHandler(async(req,res) =>{
    const {id} = req.params;
    let deleteCartItem = await CartModel.findByIdAndDelete({_id:id})
    if(deleteCartItem){
        res.status(200).send({message:"Item removed successfully"})
    }
    else{
        res.status(400).send({message:"Product not found"})
    }
})

const UpdateCart = asyncHandler(async(req,res) =>{
    const {id} = req.params;
    let updateProduct = await CartModel.findByIdAndUpdate({_id:id})
    if(updateProduct){
        updateProduct.quantity = req.body.quantity
        
    }
})

module.exports = {
    AddToCart,
    CartData,
    DeleteCart,
    UpdateCart
}
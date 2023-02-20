const CartModel = require("../models/cartModel")
const ProductModel = require("../models/productModel")

// Add to cart
const AddToCart = async(req,res)=>{
    try {
        let {productId,userId} = req.body;
        const productExisist = await CartModel.findOne({productId})
        if(productExisist){
            res.send({status:true,message:"Product already exists"})
        }
        else{
            let newCartItem = new CartModel({
                productId: productId,
                userId: userId,
                // quantity: quantity
            })
            await newCartItem.save()
            res.send({status:true,newCartItem}).status(200)
        }
    } catch (error) {
        res.send({status:false,message:error.message})
    }
}

const GetCart= async(req,res) =>{
    const {id} = req.body;
    
    try {
         let items = await CartModel.find()
         let pro = await ProductModel.findById({_id:id})
         console.log(pro);
         console.log(items);
    res.send({status:true,cart:items})
    } catch (error) {
        res.send({message:"Cart is empty"})
    }
}

const DeleteCart = async(req,res) =>{
    let {id} = req.params;
    try {
        let deleteCart = await CartModel.findOneAndDelete({_id:id})
        res.send({status:true,message:"Product deleted successfully"})
    } catch (error) {
         res.send({message:error.message,status:false})
    }
}

module.exports = {
    AddToCart,
    GetCart,
    DeleteCart
}
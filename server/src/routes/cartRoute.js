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
            }).populate('productId')
            await newCartItem.save()
            res.send({status:true,newCartItem}).status(200)
        }
    } catch (error) {
        res.send({status:false,message:error.message})
    }
}

const GetCart= async(req,res) =>{
  
    try {
         let items = await CartModel.find()
       
    res.send({status:true,cart:items})
    } catch (error) {
        res.send({message:"Cart is empty"})
    }
}

async function getCartItems(req, res) {
    const {userid:userId} = req.headers
    console.log('userId: ', userId);

    try {
    const carts = await CartModel.find(userId).populate('productId').select('userId');
    console.log(carts);
    // return res.status(200).send({ carts });
        
    } catch (error) {
        // return res.status(404).send({ message: error.message });
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
    DeleteCart,
    getCartItems
}
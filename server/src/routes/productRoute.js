const ProductModel = require('../models/productModel')

// Get all products
const GetAllProducts = async(req,res) =>{
    const products = await ProductModel.find()
   if(products){
     res.send({status:true,products:products}).status(200)
   }
   else{
    res.send({status:false,message:"Products not found"})
   }
}
// Add new Product
const AddProduct = async(req,res) =>{
    const {title, description,price,image} = req.body;
    try {
        let newProduct = new ProductModel({
            title,
            description,
            price,
            image
        })
        await newProduct.save();
        res.send({status:true,product:newProduct}).status(200)
    } catch (error) {
        res.send({status:false,message:error.message})
    }
} 

// Delete Product
const DeleteProduct = async(req,res)=>{
    const {id} = req.params;
 
    try {
         let deleteProduct = await ProductModel.findOneAndDelete({_id:id})
         console.log(deleteProduct);
         res.send({status:true,message:"Product deleted successfully"})
     
    } catch (error) {
        res.send({message:error.message,status:false})
    }
}   

// Update products
const UpdateProduct = async(req,res) =>{
    const {id} = req.params;
    try {
        let product = await ProductModel.findByIdAndUpdate({_id:id})
        product.price = req.body.price;
        res.send({status:true,updatedProduct:product})
    } catch (error) {
        res.send({message:error.message,status:false})
    }
}


module.exports = {
    AddProduct,
    DeleteProduct,
    GetAllProducts,
    UpdateProduct
}
const ProductModel = require("../models/productModel")
const asyncHandler = require('express-async-handler')

const AddProduct = asyncHandler(async(req,res) =>{

    const {image,title,description,price} = req.body;
    const newProduct = await ProductModel.create({
        image,
        title,
        description,
        price
    })
   if(newProduct){
     res.status(200).send({
        _id:newProduct._id,
        image:newProduct.image,
        title:newProduct.title,
        description:newProduct.description,
        price:newProduct.price
    })
   }
   else{
    throw new Error("Something went wrong")
   }
})

const DeleteProduct = asyncHandler(async(req,res) =>{

        const {id} = req.params;
        let deleteProduct = await ProductModel.findByIdAndDelete({_id:id})
        if(deleteProduct){
                    res.status(200).send({message:"Deleted successfully",DeletetedProduct:deleteProduct})
        }
        else{
            throw new Error()
        }
})

const UpdateProduct = asyncHandler(async(req,res) =>{
    const {id} = req.params;
    let updateproduct = await ProductModel.findByIdAndUpdate(id)
    if(updateproduct){
        updateproduct.price = req.body.price
       let prod = await updateproduct.save()
        res.status(200).send({message:"Product updated successfully",UpdatedProduct:prod})
    }
    else{
        throw new Error("Failed to update the product")
    }
})

const GetAllProduct = asyncHandler(async(req,res) =>{
    
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit)|| 5
    let skip = (page-1) * limit
    let sort = req.query.sort 
    if(sort === 'asc'){
        sort = 1
    }
    else if(sort === 'desc'){
        sort = -1
    }
    const allProducts = await ProductModel.find().skip(skip).limit(limit).sort({price:sort})
    
    if(allProducts.length >= 1){
        res.status(200).send({data:allProducts})
    }
    else{
        res.status(400).send({message:"Products not available"})
    }
})

module.exports = {
    AddProduct,
    DeleteProduct,
    UpdateProduct,
    GetAllProduct
}
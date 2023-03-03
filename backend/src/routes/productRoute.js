const express = require("express")
const { AddProduct, DeleteProduct, UpdateProduct, GetAllProduct, GetSingleProduct } = require("../controllers/productController")

const router = express.Router()

router.post("/newproduct",AddProduct)
router.delete("/deleteproduct/:id",DeleteProduct)
router.put("/updateproduct/:id",UpdateProduct)
router.get("/allproducts",GetAllProduct)
router.get("/singleproduct/:id",GetSingleProduct)

module.exports = router
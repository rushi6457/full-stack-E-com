const express = require("express")
const { AddProduct, DeleteProduct, UpdateProduct, GetAllProduct } = require("../controllers/productController")

const router = express.Router()

router.post("/newproduct",AddProduct)
router.delete("/deleteproduct/:id",DeleteProduct)
router.put("/updateproduct/:id",UpdateProduct)
router.get("/allproducts",GetAllProduct)

module.exports = router
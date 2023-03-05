const express = require('express');
const { AddToCart, CartData, DeleteCart, UpdateCart, GetCartItem, CartDatanew } = require('../controllers/cartController');
const router = express.Router();

router.post("/addtocart",AddToCart)
router.get("/cartdata",CartData)
router.delete("/deletecart/:id",DeleteCart)
router.put("/updatecart/:id",UpdateCart)
router.get("/getcart/:id",GetCartItem)
router.get("/cartdatanew",CartDatanew)

module.exports = router;
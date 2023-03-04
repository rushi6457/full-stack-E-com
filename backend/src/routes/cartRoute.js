const express = require('express');
const { AddToCart, CartData, DeleteCart, UpdateCart, GetCartItem } = require('../controllers/cartController');
const router = express.Router();

router.post("/addtocart",AddToCart)
router.get("/cartdata",CartData)
router.delete("/deletecart/:id",DeleteCart)
router.put("/updatecart/:id",UpdateCart)
router.get("/getcart/:id",GetCartItem)

module.exports = router;
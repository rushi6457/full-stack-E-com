const express = require('express');
const connect = require("./config/db")
const app = express()
const cors = require('cors');
require('dotenv').config();
const userRoute = require("./routes/userRoutes")
const productRoute = require("./routes/productRoute")
const cartRoute = require("./routes/cartRoute")
const paymentRoute = require("./routes/paymentRoute")

app.use(express.urlencoded({ extended:true}))
app.use(cors({origin:true,credentials:true}))
app.use(express.json());

app.get("/user/:id",userRoute.GetSingleUser)
app.get("/users",userRoute.GetAllProfiles)
app.post("/signup",userRoute.Signup)
app.post("/login",userRoute.Login)

app.patch("/updateproduct/:id",productRoute.UpdateProduct)
app.delete("/deleteproduct/:id",productRoute.DeleteProduct)
app.post("/newproduct",productRoute.AddProduct)
app.get("/products",productRoute.GetAllProducts)
app.get("/product/:id",productRoute.GetSingleProduct)

app.get("/deleteproduct/:id",cartRoute.DeleteCart)
app.post('/addtocart',cartRoute.AddToCart)
app.get("/getcart",cartRoute.GetCart)

app.post("/payment",paymentRoute.Payment)

app.get("/",(req,res) =>res.send("HELLO"))

app.listen(process.env.PORT, async()=>{
    await connect()
    console.log(`Server started on http://localhost:${process.env.PORT}`);
})

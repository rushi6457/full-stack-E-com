require('dotenv').config()
const express = require('express');
const connect = require('./config/connect');
const app = express();
const Razorpay = require("razorpay")
const shortId = require('shortid')
const cors = require('cors');
const router = require('./routes/userRoute');
const productRoute = require("./routes/productRoute")
const cartRoute = require("./routes/cartRoute")
const paymentRoute =  require("./routes/paymentRoute")
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({origin:true,credentials:true}))

app.get("/",(req,res) =>res.send("HELLO"));
app.use("/user",router)
app.use("/admin",productRoute)
app.use("/cart",cartRoute)
app.use("/payment",paymentRoute)

const razorpay = new Razorpay({
    key_id:'rzp_test_slyL42DlrfRwnp',
    key_secret:'qq4lLxfcuIFYtqxfEuNTCg19'
})
app.post("/razorpay",async(req,res) =>{
    const payment_capture = 1;
    const amount = 50
    const currency = "INR"
    // console.log(amount);
    const options = {
        amount : amount * 100,
        currency:currency,
        receipt:shortId.generate(),
        payment_capture
    }

    try {
        const response = await razorpay.orders.create(options)
        console.log(response);
        res.json({
            id:response.id,
            currency:response.currency,
            amount:response.amount,
            receipt:response.receipt
        })
    } catch (error) {
        console.log(error);
    }
})

app.listen(process.env.PORT,async() =>{
    await connect()
    console.log(`Server started on http://localhost:${process.env.PORT}`);
})


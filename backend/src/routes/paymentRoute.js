const { ProceesToPayment, PaymentData } = require('../controllers/paymentController');
const express = require('express');
const router = express.Router();

router.post("/proceedtopayment",ProceesToPayment)
router.get("/getdetails",PaymentData)

module.exports = router;
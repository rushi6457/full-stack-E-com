const { Signup, Login, getAllUsers, getProductsWithUsers, GetSingleUser } = require("../controllers/userController")
const express = require("express")

const router = express.Router()

router.post("/signup",Signup)
router.post("/login",Login)
router.get("/users",getAllUsers)
router.get("/usercart",getProductsWithUsers)
router.get("/singleuser/:id",GetSingleUser)

module.exports = router
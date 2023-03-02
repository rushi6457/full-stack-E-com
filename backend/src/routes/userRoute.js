const { Signup, Login, getAllUsers } = require("../controllers/userController")
const express = require("express")

const router = express.Router()

router.post("/signup",Signup)
router.post("/login",Login)
router.get("/users",getAllUsers)

module.exports = router
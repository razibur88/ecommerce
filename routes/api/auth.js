const express=require("express")
const router= express.Router();
const registrationControllers = require("../../controllers/registrationControllers.js")
const loginControllers = require("../../controllers/loginControllers.js")



router.post("/registration", registrationControllers)
router.post("/login", loginControllers)

module.exports = router
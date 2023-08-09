const express=require("express")
const router= express.Router();
const registrationControllers = require("../../controllers/registrationControllers.js")
const loginControllers = require("../../controllers/loginControllers.js")
const emailVarificationOtpMatch = require("../../controllers/emailVarificationOtpMatch.js")



router.post("/registration", registrationControllers)
router.post("/login", loginControllers)
router.post("/emailVarificationOtpMatch", emailVarificationOtpMatch)

module.exports = router

const User = require("../models/userSchema")

let emailvarificationOtpMatch = async (req, res)=>{
    const {email, randomOtp} = req.body

    const findOtp = await User.find({email})

    if(findOtp.length > 0){
        if(randomOtp == findOtp[0].randomOtp ){
            res.json({"successs": "Otp Success"})
        }else{
            res.json({"error": "Otp error"})
        }
    }
}
module.exports = emailvarificationOtpMatch
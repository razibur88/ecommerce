const emailValidation = require("../helpers/emailValidation.js")
const User = require("../models/userSchema.js")
const bcrypt = require("bcrypt")
const sendEmail = require("../helpers/sendEmail.js")
const otpTemplate = require("../helpers/otpTemplate.js")
const aleaRNGFactory = require("number-generator/lib/aleaRNGFactory");

let registrationControllers = async (req,res)=>{
    const {fullName, email,password,avatar,facebokId,linkedinId} = req.body
    
    
        if(!fullName){
            return res.send({error:"Please Enter Your Name"})
        }
        if(!email){
            return res.send({error:"Please Enter Your Emaill"})
        }else if(!emailValidation(email)){
            return res.send({error:"Please Enter valid Emaill"})
        }
        
        if(!password){
            return res.send({error:"Please Enter Your Password"})
        }else{
            let duplicateemail = await User.find({email:email})
    
            if(duplicateemail.length > 0){
                return res.send({error:"Email Already Exists"}) 
            }
            bcrypt.hash(password, 10, async function(err, hash) {
                const user = new User({
                    fullName,
                    email,
                    password:hash,
                    avatar,
                    facebokId,
                    linkedinId
    
                })
                user.save()
                const generator2 = aleaRNGFactory(Date.now());
                let random = generator2.uInt32().toString().substring(0, 4)
                let randomOtpStore = await User.findOneAndUpdate(
                    {email},
                    {$set:{randomOtp:random}},
                    {new:true}
                )
                sendEmail(email, random, otpTemplate)
                setInterval(async ()=>{
                    
                    let randomOtpStore = await User.findOneAndUpdate(
                        {email},
                        {$unset:{randomOtp:""}},
                        {new:true}
                    )
                },10000)

               
                res.send({
                    success:"Registration Successfull Please check Email",
                    fullName:user.fullName,
                    email:user.email
                })
    
            });
            
        }
    
}



module.exports = registrationControllers
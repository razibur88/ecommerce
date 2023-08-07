const User = require("../models/userSchema");
const bcrypt = require("bcrypt")
const emailValidation = require("../helpers/emailValidation")

let loginControllers = async(req, res) =>{
    let {email, password} = req.body
    if(!email){
        return res.send({error:"Please Enter Your Emaill"})
    }else if(!emailValidation(email)){
        return res.send({error:"Please Enter valid Emaill"})
    }else if(!password){
        return res.send({error:"Please Enter Your Password"})
    }else{
        let isEmailExist = await User.find({email})
        if(isEmailExist.length > 0){
            bcrypt.compare(password, isEmailExist[0].password).then(function(result) {
                if(result){
                    res.send({
                        success:"login Successfull",
                        fullName:isEmailExist.fullName,
                        email:isEmailExist.email
                    })
                }
            });
        }else{
            res.send({"error":"Email Does not Match"})
        }
    }
}
module.exports = loginControllers
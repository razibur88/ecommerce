const mongoose = require("mongoose");

const {Schema } = mongoose

const userSchema = new Schema({
    fullName:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
    emailVerifed:{
        type:Boolean,
        default:false
    },
    randomOtp:{
        type:String
    },
    merchant:{
        type:Boolean,
        default:false
    },
    avatar:{
        type:String
    },
    role:{
        type:String,
        default:"member",
        enum:["admin", "member", "mercent"]
    },
    update:{
        type:Date
    },
    created:{
        type:Date,
        default:Date.now
    },
    facebokId:{
        type:String
    },
    linkedinId:{
        type:String
    }
})

module.exports = mongoose.model("User", userSchema)
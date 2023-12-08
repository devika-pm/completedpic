const mongoose = require('mongoose')
const validator = require('validator')
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:[3, 'must be at least 3, got{VALUE}']
    },
    email:{
        type:String,
        require:true,
        unique :true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email")
            }
        }
    },
    password:{
        type:String,
        require:true
    }

})
const users = mongoose.model("users",userSchema)
module.exports = users
const users = require('../Models/userSchema')
const jwt = require('jsonwebtoken')
//register solve logic define

exports.register = async (req,res)=>{
    console.log('inside register controller function');
    const {username,email,password} = req.body
    //console.log(`${username},${email},${password}`);
  try{ const existingUser = await users.findOne({email})
   if(existingUser){
    res.status(406).json("already have an account!please login")
   }else{
    const newUser = new users({
        username,email,password
    })
    await newUser.save()
    res.status(200).json(newUser)
   }}
   catch(err){
    res.status(401).json(`register APIfailed :error ${err}`)
   }
    
}

//login 
exports.login = async(req,res)=>{
    console.log("inside login controller");
    const{email,password} = req.body
    try{
     const existingUser = await users.findOne({email,password})
     if(existingUser){
        const token = jwt.sign({userId:existingUser._id},"supersecretkey12345")
        res.status(200).json({
            existingUser,token
        })
     }else{
        res.status(404).json("incorrect email / password")
     }
    }catch(err){
        res.status(401).json(`register APIfailed :error ${err}`)
    }
}
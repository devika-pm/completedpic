require('dotenv').config()
const express = require('express')
const cors = require('cors')
//import router
const router = require('./Routes/router')
//import connection.js
require('./DB/connection')


//create an express application
const contestServer = express()
 
contestServer.use(cors())
contestServer.use(express.json())
//routerbuse
contestServer.use(router)
contestServer.use('/uploads',express.static('./uploads'))

//port creation
const PORT = 4000 || process.env.PORT

contestServer.listen(PORT,()=>{
    console.log(`photo contest server started at port : ${PORT} and waiting for the client request !!`);
})
 //http get request to localhost 4000
contestServer.get('/',(req,res)=>{
    res.send('<h1>localhost 4000 started project photo contest !!</h1> ')
   })
contestServer.post('/',(req,res)=>{
    res.send("post request")
})
contestServer.put('/',(req,res)=>{
    res.send("put request")
})
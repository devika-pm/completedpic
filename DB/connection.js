const mongoose = require('mongoose')
const connectionstring = process.env.DATABASE
//connect mongodb with node using mongoose
mongoose.connect(connectionstring).then(()=>{
    console.log
    ('mongo db atlas successfully connected with contestserver !!');
}).catch((err)=>{
    console.log(`mongo db atlas connection error:${err} `);
})
const mongoose = require('mongoose')

mongoose.connect(process.env.db).then(()=>{
    console.log('MongoDB connection succeeded.');
}).catch((err)=>{
    console.log(err)
})
module.exports= mongoose
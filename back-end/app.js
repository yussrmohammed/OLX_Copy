require('dotenv').config()


const express= require('express')
const app= express()
require('./db/dbConnection')
 const userRouter= require('./routers/userRouter')

 app.use(express.json());

app.use('/user', userRouter)

app.get('/', (req,res)=>{
    res.status(200).send('OLX_Copy site')

})

app.listen(process.env.port ,
    ()=>{
        console.log('Server started at port : ' + process.env.port)
    })

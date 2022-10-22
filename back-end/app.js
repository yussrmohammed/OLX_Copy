require('dotenv').config()


const express= require('express')
var cookieParser = require('cookie-parser')
const app = express()
require('./db/dbConnection')
const userRouter= require('./routers/userRouter')

app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET))

app.get('/', (req,res)=>{
    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies)
    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies)
    res.status(200).send('OLX_Copy site')
})


app.use('/user', userRouter)



app.listen(process.env.port ,
    ()=>{
        console.log('Server started at port : ' + process.env.port)
    })

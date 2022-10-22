require('dotenv').config()


const express= require('express')
const app = express()
require('./db/dbConnection')

/* ------------- Imports ------------------- */
const cookieParser = require('cookie-parser')
const userRouter= require('./routers/userRouter')
const categoryRouter = require('./routers/categoryRouter')

/* ------------- Using Packages ------------------- */
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET))

/* ----------- Routers --------------- */
app.use('/user', userRouter)
app.use('/api/v1/categories',categoryRouter)


app.get('/', (req,res)=>{
    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies)
    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies)
    res.status(200).send('OLX_Copy site')
})

app.listen(process.env.port ,
    ()=>{
        console.log('Server started at port : ' + process.env.port)
    })

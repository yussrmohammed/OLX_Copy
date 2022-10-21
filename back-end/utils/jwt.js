const jwt =require('jsonwebtoken')

const createToken = ({payload})=>{
    const token = jwt.sign(payload
        ,process.env.JWT_SECRET
        ,{expiresIn:process.env.JWT_LIFETIME})
        return token

}
const tokenVerification= (token)=>{
    const verifiedToken= jwt.verify(token,process.env.JWT_SECRET)
    return verifiedToken

}

sendCookieToResponse = ({res,user})=>{
    const token = createToken({payload:user})
    const oneDay = 24*60*60*1000 
    res.cookie('userToken', token,{
        httpOnly:true,
        expires: new Date(Date.now() + oneDay),
        signed:true,
    })
    console.log(token)
}


module.exports={
    createToken,
    tokenVerification,
    sendCookieToResponse
}
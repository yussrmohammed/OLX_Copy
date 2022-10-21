const {tokenVerification}= require('../utils/jwt')

const authenticateUser= (req,res,next)=>{
    try {
        const userToken =req.signedCookies.userToken
       
            if(!userToken){
                return res.json({msg:"Authentication invalid !"})
            }
            const payload=  tokenVerification(userToken)
            req.user={name:payload.name,userID:payload.userID,role:payload.role}
            console.log("authenticateUser", req.user, userToken)
            
             
        
        
     

        
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({mes:error.message})

        
    }
   next()
    
}
module.exports={
    authenticateUser
}
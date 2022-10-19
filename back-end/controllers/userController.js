const userModel = require('../models/userModel')
const bcrypt= require('bcryptjs')

const userAPIs={
    createUser: async (req,res)=>{
        try {
            const {name,email,password,phone,gender,role} = req.body
            const salt = await bcrypt.genSalt(10);
            const hasedPassword= await bcrypt.hash(password,salt)
            const newUser= await userModel.create({
                name:name,
                email:email,
                phone:phone,
                gender:gender,
                role:role,
            password:hasedPassword    

            })
           return res.json(newUser)
            
            


            
        } catch (error) {
            return res.status(500).json({mes:error.message})
            
        }


    },
    getAllUsers: async (req,res)=>{
        try {
            const users= await userModel.find()
          return  res.json(users)
            
        } catch (error) {
            return res.status(500).json({mes:error.message})
            
        }
    },
    getOneUser: async (req,res)=>{
        try {
            const userId = req.params.id
            const user= await userModel.findById({_id:userId})
            if(!user)
            {
                 return res.status(404).json({msg:'Not found!'})
            }
           return res.json(user)
            
        } catch (error) {
            return res.status(500).json({mes:error.message})
            
        }
    }


}


module.exports= userAPIs
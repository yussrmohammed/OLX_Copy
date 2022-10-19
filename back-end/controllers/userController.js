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
            res.json(newUser)
            
            


            
        } catch (error) {
            return res.status(500).json({mes:error.message})
            
        }


    },
    getAllUsers: async (req,res)=>{
        try {
            const users= await userModel.find()
            res.json(users)
            
        } catch (error) {
            return res.status(500).json({mes:error.message})
            
        }
    }


}


module.exports= userAPIs
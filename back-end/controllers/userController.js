const userModel = require('../models/userModel')
const bcrypt= require('bcryptjs');
const { findOne } = require('../models/userModel');
const jwt = require('../utils/jwt')

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
    logIn: async(req,res)=>{
        try {
            const {email,password}=req.body
            if(!{email,password}){

                return res.status(400).json({mes:"please enter email and password"})
                }
                const user =await userModel.findOne({email:email})
                if(!user){
                    return res.status(400).send('Email or password is wrong')

                }
                const pass= await bcrypt.compare(password , user.password)
                if(!pass)
                { return res.status(400).send('invaled password')
                 }
        const token = {name:user.name, userID:user._id, role:user.role}
        jwt.sendCookieToResponse({res,user:token})
        return res.send(token.userID)




            
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
    },
    updateUser: async (req,res)=>{
        try {
            const userId= req.params.id
            const {name,email,oldpassword,newpassword,phone,gender,role} = req.body
            const user= await userModel.findById({_id:userId})
            const isValidPassword=await bcrypt.compare(oldpassword, user.password)
            if(!isValidPassword){
                return res.json({mes:'old password is wrong'})
            }
            const salt = await bcrypt.genSalt(10);
            const hasedPassword= await bcrypt.hash(newpassword,salt)
            const updatedUser= await user.update({
                name:name,
                email:email,
                phone:phone,
                gender:gender,
                role:role,
            password:hasedPassword 

            })
            return res.json({mes:"User has been updated successfully!"})
            

        } catch (error) {
            return res.status(500).json({mes:error.message})
            
        }
    },
    deleteUser: async(req,res)=>{
        try {
            const userId= req.params.id
            const deletedUser=await userModel.findByIdAndDelete({_id:userId})
            if(!deletedUser){
                return res.status(404).json({msg:'Not found!'})

            }
            return res.json({mes:"User has been deleted successfully!"})
            
        } catch (error) {
            return res.status(500).json({mes:error.message})
            
        }
    },
    logOut:(req,res)=>{
        res.cookie('userToken','logout',{
            httpOnly:true,
            expires: new Date(Date.now()),
        })
        res.json({mes:"user has logged out"})



    }




}


module.exports= userAPIs
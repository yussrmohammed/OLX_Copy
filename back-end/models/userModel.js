const {Schema, default:mongoose} = require('mongoose')
const validator = require('validator')

const userSchema= new Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        validate:{
            validator:validator.isEmail

        }
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true

    },
    gender:{
        type:String,
        enum:['male','female']
    },
    role:{  
         type:String,
        enum:['admin','user'],
    
    }



})
module.exports= mongoose.model('User', userSchema)
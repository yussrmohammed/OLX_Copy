const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    enName:{
        type:String,
        required:[true,'Please provide the category name in English'],
        unique:true
    },
    arName:{
        type:String,
        required:[true,'Please provide the category name in Arabic'],
        validate: {
            validator: function (input) {
                // check if all input is in arabic and there can be whitespaces
                return  /^[\u0600-\u06FF-\s]*$/.test(input); 
            },
            message: "Enter a valid name in arabic",
        },
        unique:true
    }
})

module.exports = mongoose.model('Category',categorySchema)
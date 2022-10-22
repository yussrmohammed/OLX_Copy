const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    enName:{
        type:String,
        required:[true,'Please provide the category name in english']
    },
    arName:{
        type:String,
        required:[true,'Please provide the category name in arabic']
    }
})

module.exports = mongoose.model('Category',categorySchema)
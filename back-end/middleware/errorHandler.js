const {StatusCodes} = require('http-status-codes')

const errorHandlingMiddlware = async (err,req,res,next)=>{
    console.log(err,err.message)
    let CustomError = {
        msg:err.message|| 'Please Try again Later!',
        statusCode:err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
    }

    if(err.name === 'ValidationError'){
        CustomError.msg = ` Please provide a valid value to this field : ${Object.keys(err.errors)}`
        CustomError.statusCode = StatusCodes.BAD_REQUEST
    }

    if(err.name === 'CastError'){
        CustomError.msg = `No item found with id : ${err.value}`;
        CustomError.statusCode = StatusCodes.NOT_FOUND;
    }
    
    if(err.code && err.code === 11000){
        console.log(`this is the duplication error ----------> ${Object.keys(err.keyValue)}`)
        CustomError.msg = `Duplicate Value For : ${Object.keys(err.keyValue)} already exists! Please enter a new value`;
        CustomError.statusCode = StatusCodes.BAD_REQUEST;    
    }

    return res.status(CustomError.statusCode).json({msg:CustomError.msg})
}

module.exports = errorHandlingMiddlware
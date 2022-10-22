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

    



    return res.status(CustomError.statusCode).json({msg:CustomError.msg})
}

module.exports = errorHandlingMiddlware
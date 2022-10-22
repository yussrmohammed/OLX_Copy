const {StatusCodes} = require('http-status-codes')

const errorHandlingMiddlware = async (err,req,res,next)=>{
    console.log(err,err.message)





    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:'Internal server error please try again after fixing the error'})
}

module.exports = errorHandlingMiddlware
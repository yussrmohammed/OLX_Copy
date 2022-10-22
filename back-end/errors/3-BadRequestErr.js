const {StatusCodes} = require('http-status-codes')
const CustomErrorAPI = require('./1-CustomError')

class BAD_REQUEST_ERROR extends CustomErrorAPI{
    constructor(message){
        super(message);
        this.statusCode= StatusCodes.BAD_REQUEST
    }
}

module.exports = BAD_REQUEST_ERROR
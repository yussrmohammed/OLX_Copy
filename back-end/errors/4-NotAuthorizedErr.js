const {StatusCodes} = require('http-status-codes')
const CustomErrorAPI = require('./1-CustomError')

class NOT_AUTHORIZED_ERROR extends CustomErrorAPI{
    constructor(message){
        super(message);
        this.statusCode= StatusCodes.FORBIDDEN
    }
}

module.exports = NOT_AUTHORIZED_ERROR
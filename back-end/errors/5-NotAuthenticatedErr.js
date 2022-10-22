const {StatusCodes} = require('http-status-codes')
const CustomErrorAPI = require('./1-CustomError')

class NOT_AUTHENTICATED_ERROR extends CustomErrorAPI{
    constructor(message){
        super(message);
        this.statusCode= StatusCodes.UNAUTHORIZED
    }
}

module.exports = NOT_AUTHENTICATED_ERROR
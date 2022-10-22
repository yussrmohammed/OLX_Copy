const {StatusCodes} = require('http-status-codes')
const CustomErrorAPI = require('./1-CustomError')

class NOT_FOUND_ERROR extends CustomErrorAPI{
    constructor(message){
        super(message);
        this.statusCode= StatusCodes.NOT_FOUND
    }
}

module.exports = NOT_FOUND_ERROR
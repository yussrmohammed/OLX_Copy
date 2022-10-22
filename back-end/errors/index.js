const CustomErrorAPI  = require('./1-CustomError')
const NOT_FOUND_ERROR = require('./2-NotFoundErr')
const BAD_REQUEST_ERROR = require('./3-BadRequestErr')
const NOT_AUTHORIZED_ERROR = require('./4-NotAuthorizedErr')
const NOT_AUTHENTICATED_ERROR = require('./5-NotAuthenticatedErr')


module.exports = {
    CustomErrorAPI,
    NOT_FOUND_ERROR,
    BAD_REQUEST_ERROR,
    NOT_AUTHORIZED_ERROR,
    NOT_AUTHENTICATED_ERROR
}
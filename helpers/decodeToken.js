const { promisify } = require('util')
const JWT = require('jsonwebtoken')

const decodeToken = async token =>
  await promisify(JWT.verify)(token, process.env.JWT_SECRET_KEY)

module.exports = decodeToken

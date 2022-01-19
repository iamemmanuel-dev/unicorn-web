module.exports = (err, req, res, next) => {
  const { message, status, statusCode = 500 } = err
  return res.status(statusCode).json({ status, message })
}

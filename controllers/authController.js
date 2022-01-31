const JWT = require('jsonwebtoken')
const AppErrorHandler = require('../errors/appErrorHandler')
const catchAsync = require('../errors/catchAsync')
const decodeToken = require('../helpers/decodeToken')
const UsersModel = require('../models/UsersModel')

const signedToken = _id =>
  JWT.sign({ _id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRESIN,
  })

const createSendToken = (user, res, statusCode) => {
  const token = signedToken(user._id)
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRESIN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  }

  process.env.NODE_ENV === 'production' && (cookieOptions.secure = true)

  res.cookie('jwt', token, cookieOptions)
  res.status(statusCode).json({ status: `success`, user })
}

exports.signup = catchAsync(async (req, res, next) => {
  const { username } = req.body
  const isUsernameTaken = await UsersModel.findOne({ username })
  if (isUsernameTaken)
    return next(
      new AppErrorHandler(
        'username is already taken, please choose another',
        403
      )
    )

  const User = await UsersModel.create(req.body)
  createSendToken(User, res, 201)
})

exports.configUser = catchAsync(async (req, res, next) => {
  const { id } = req.query
  const { badge, niche } = req.body
  let User
  if (badge.isViewer) {
    User = await UsersModel.findByIdAndUpdate(
      id,
      { badge: 'viewer' },
      { new: true, runValidators: false }
    )
    return res.status(200).json({ status: 'success', User })
  } else if (badge.isTalent) {
    User = await UsersModel.findByIdAndUpdate(
      id,
      { badge: 'talent', niche },
      { new: true, runValidators: false }
    )
    return res.status(200).json({ status: 'success', User })
  }
})

exports.login = catchAsync(async (req, res, next) => {
  const { username, password } = req.body
  if (!username || !password)
    return next(
      new AppErrorHandler('please provide a username and password', 400)
    )

  const User = await UsersModel.findOne({ username }).select('+password')
  if (!User || !(await User.validatePassword(password, User.password)))
    return next(new AppErrorHandler('Invalid username or password', 403))

  createSendToken(User, res, 200)
})

exports.logout = catchAsync(async (req, res) => {
  res.cookie('jwt', 'logging you out', {
    expires: new Date(Date.now() + 5 * 1000),
  })
  res.redirect('/register')
})

exports.secureRouteToAuthUsers = catchAsync(async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  )
    token = req.headers.authorization
  else if (req.cookies.jwt) token = req.cookies.jwt

  if (!token)
    return next(
      new AppErrorHandler('Please login to access this resource', 402)
    )

  const decoded = await decodeToken(token)

  const User = await UsersModel.findById(decoded._id)
  if (!User)
    return next(
      new AppErrorHandler(
        'This user no longer exist in our database. Please login again.',
        402
      )
    )

  req.user = User
  next()
})

exports.restrictTo = badge =>
  catchAsync(async (req, res, next) => {
    if (req.user.badge !== badge)
      return next(
        new AppErrorHandler(
          'sorry, you are not authorized to perform this action',
          402
        )
      )

    next()
  })

exports.getAuthState = catchAsync(async (req, res, next) => {
  if (!req.cookies.jwt) return res.status(200).json({})

  const { _id } = await decodeToken(req.cookies.jwt)
  const User = await UsersModel.findById(_id)

  if (!User) return res.status(200).json({ status: 'fail', User: '' })
  res.status(200).json({ status: 'success', User })
})

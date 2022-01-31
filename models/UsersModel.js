const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const PersonSchema = require('./PersonModel')

const UsersSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: [true, 'Username has already been taken'],
    },
    password: {
      type: String,
      minlength: [8, 'password cannot be less than 8 characters'],
      select: false,
    },
    confirmedPassword: {
      type: String,
      validate: {
        validator(val) {
          return this.password === val
        },

        message: 'Passwords do not match. Please verify password credential',
      },
    },
    profileImage: String,
    coverImage: String,
    badge: String,
    niche: String,
    following: [PersonSchema],
    followers: [PersonSchema],
    description: {
      type: String,
      maxlength: [80, 'Description cannot be longer than 80 characters'],
    },
    nationality: String,
    city: String,
    groupsCreated: [String],
    groupsIN: [String],
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetTokenExpiresIn: Date,
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

UsersSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  this.password = await bcrypt.hash(this.password, 12)
  this.confirmedPassword = undefined
  next()
})

UsersSchema.methods.validatePassword = async (
  candidatePassword,
  userPassword
) => await bcrypt.compare(candidatePassword, userPassword)

UsersSchema.virtual('posts', {
  ref: 'post',
  foreignField: 'creator',
  localField: '_id',
})

const UsersModel = mongoose.model('user', UsersSchema)
module.exports = UsersModel

const mongoose = require('mongoose')
const PersonSchema = require('./PersonModel')

const PostsSchema = new mongoose.Schema(
  {
    creator: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
      },
    ],
    image: String,
    videos: String,
    description: String,
    niche: String,
    likes: [PersonSchema],
    collaborators: [PersonSchema],
    collabsRequests: [PersonSchema],
    bookmarks: [PersonSchema],
  },
  { timestamps: true }
)

const PostsModel = mongoose.model('post', PostsSchema)
module.exports = PostsModel

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
    videos: String,
    description: String,
    niche: String,
    postImages: Array,
    likes: [PersonSchema],
    collaborators: [PersonSchema],
    collabsRequests: [PersonSchema],
    bookmarks: [PersonSchema],
  },
  { timestamps: true }
)

const PostsModel = mongoose.model('post', PostsSchema)
module.exports = PostsModel

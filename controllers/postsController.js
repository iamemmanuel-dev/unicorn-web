const PostsModel = require('../models/PostsModel')
const AppErrorHandler = require('../errors/appErrorHandler')
const catchAsync = require('../errors/catchAsync')

exports.getAllPosts = catchAsync(async (req, res, next) => {
  let Posts
  const { niche } = req.query
  if (niche) {
    Posts = await PostsModel.find({ niche })
    return res.status(200).json({ status: 'success', Posts })
  }
  Posts = await PostsModel.find()
  res.status(200).json({ status: 'success', Posts })
})

exports.getPost = catchAsync(async (req, res, next) => {
  const { id } = req.params
  if (!id) return next(new AppErrorHandler('This post no longer exist', 404))
  const Post = await PostsModel.findById(id)
  res.status(200).json({ status: 'success', Post })
})

exports.createPost = catchAsync(async (req, res, next) => {
  console.log('REQ BODY', req.body)
  console.log('REQ FILE', req.file)
  console.log('REQ FILES', req.files)
  // const Post = await PostsModel.create(req.body)
  // res.status(201).json({ status: 'success', Post })
})

exports.updatePost = catchAsync(async (req, res, next) => {
  const { id } = req.params
  if (!id) return next(new AppErrorHandler('This post no longer exist', 404))
  const Post = await PostsModel.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  })
  res.status(200).json({ status: 'success', Post })
})

exports.deletePost = catchAsync(async (req, res, next) => {
  const { id } = req.params
  await PostsModel.findByIdAndDelete(id)
  res.status(204).json({})
})

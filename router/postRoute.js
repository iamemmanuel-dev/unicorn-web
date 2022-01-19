const { Router } = require('express')
const router = Router()

const {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require('../controllers/postsController')

const {
  secureRouteToAuthUsers,
  restrictTo,
} = require('../controllers/authController')

router
  .route('/')
  .get(getAllPosts)
  .post(secureRouteToAuthUsers, restrictTo('talent'), createPost)
router
  .route('/:id')
  .get(getPost)
  .patch(secureRouteToAuthUsers, restrictTo('talent'), updatePost)
  .delete(secureRouteToAuthUsers, restrictTo('talent'), deletePost)

module.exports = router

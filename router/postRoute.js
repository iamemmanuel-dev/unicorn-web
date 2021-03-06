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
const { upload } = require('../helpers/fileupload')

router
  .route('/')
  .get(getAllPosts)
  .post(
    secureRouteToAuthUsers,
    restrictTo('talent'),
    upload.array('postImages', 2),
    createPost
  )
router
  .route('/:id')
  .get(getPost)
  .patch(secureRouteToAuthUsers, restrictTo('talent'), updatePost)
  .delete(secureRouteToAuthUsers, restrictTo('talent'), deletePost)

module.exports = router

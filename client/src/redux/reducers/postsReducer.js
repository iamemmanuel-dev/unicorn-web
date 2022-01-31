import axios from 'axios'
import { printOptions } from '../helpers'

const Posts = {
  createPost: {
    postDescription: '',
    postImages: [],
    postImagesPreview: [],
    collaborators: [],
  },

  getPosts: {
    posts: [],
  },
}

export const handlePostCreation = data => async dispatch => {
  try {
    const res = await axios(printOptions('POST', '/api/posts', data))
  } catch (err) {
    console.log('error occured', err.message)
  }
}

const reducer = (state = Posts, { type, payload, file }) => {
  switch (type) {
    case 'SET_POST_IMAGES':
      return {
        ...state,
        createPost: {
          ...state.createPost,
          postImages: [...state.createPost.postImages, file],
          postImagesPreview: [
            ...state.createPost.postImagesPreview,
            { id: file.id, url: payload },
          ],
        },
      }

    case 'HANDLE_IMAGE_UPLOAD_FILTER':
      const newPostImagesPreviews = state.createPost.postImagesPreview.filter(
        el => el.id !== payload
      )

      const newPostImages = state.createPost.postImages.filter(
        el => el.id !== payload
      )

      return {
        ...state,
        createPost: {
          ...state.createPost,
          postImages: newPostImages,
          postImagesPreview: newPostImagesPreviews,
        },
      }

    case 'SET_POSTS_VALUE':
      return {
        ...state,
        createPost: {
          ...state.createPost,
          ...payload,
        },
      }

    default:
      return state
  }
}

export default reducer

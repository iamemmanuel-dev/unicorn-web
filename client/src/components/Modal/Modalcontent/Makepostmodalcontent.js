import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaPlusCircle, FaTimes, FaSearch, FaCheck } from 'react-icons/fa'
import M from './MakePost.module.css'
import { handlePostCreation } from '../../../redux/reducers/postsReducer'

const MakePostContent = () => {
  const { createPost, getPosts } = useSelector(state => state.Posts)
  const dispatch = useDispatch()

  const frontCard = useRef()
  const backCard = useRef()

  const handleAddingCollaborators = () => {
    frontCard.current.classList.add('hide_behind')
    backCard.current.classList.add('show_infront')
  }

  const handleAddingCollaborators_done = () => {
    frontCard.current.classList.remove('hide_behind')
    backCard.current.classList.remove('show_infront')
  }

  const handleMouseEnter = e => {
    if (
      !createPost.postDescription ||
      createPost.postImagesPreview.length < 1
    ) {
      e.currentTarget.classList.add('disable_button')
      e.currentTarget.disabled = true
    } else {
      e.currentTarget.classList.remove('disable_button')
      e.currentTarget.disabled = false
    }
  }

  const handleFileUpload = e => {
    const imageFile = e.target.files[0]
    imageFile.id = Date.now()
    e.target.files &&
      e.target.files[0] &&
      dispatch({
        type: 'SET_POST_IMAGES',
        payload: URL.createObjectURL(e.target.files[0]),
        file: imageFile,
      })
  }

  const handleImageUploadFilter = id =>
    dispatch({ type: 'HANDLE_IMAGE_UPLOAD_FILTER', payload: id })

  const handleChange = ({ target: { name, value } }) =>
    dispatch({ type: 'SET_POSTS_VALUE', payload: { [name]: value } })

  const handleSubmit = e => {
    e.preventDefault()
    const data = new FormData()
    Object.keys(createPost).map(k => data.append([k], createPost[k]))
    dispatch(handlePostCreation(data))
  }

  return (
    <div className={M.parentCard}>
      <div className={M.frontCard} ref={frontCard}>
        <header className={M.modalHeader}>
          <h3>Create post</h3>
        </header>
        <div className={M.profileContainer}>
          <img
            src='/images/person1.jpg'
            alt='user pic'
            className={M.profileImage}
          />
          <p className='flex'>
            Susan Kelly <span className={M.badge}></span>{' '}
          </p>
        </div>

        <div className={M.modalPostContent}>
          <form onSubmit={handleSubmit}>
            <textarea
              name='postDescription'
              value={createPost.postDescription}
              onChange={handleChange}
              placeholder='Share talent with the world'
            ></textarea>
            <div className={M.modalPostContent_option}>
              <div>
                <input
                  type='file'
                  id='postImage'
                  className={M.inputFile}
                  name='postImages'
                  onChange={handleFileUpload}
                />
                <label
                  htmlFor='postImage'
                  className={`${M.inputFileLabel} flex`}
                >
                  <FaPlusCircle className={M.modalPostIcon} />
                  <p>Add Image</p>
                </label>
              </div>

              <div className={M.imgPreviewContainer}>
                {createPost.postImagesPreview.length > 0 &&
                  createPost.postImagesPreview.map(({ id, url }) => (
                    <div className={M.imgPreviewContainer_imgBox} key={id}>
                      <img
                        src={url}
                        alt='post resource'
                        className={M.imgPreview}
                      />

                      <FaTimes
                        className={M.removeImgPreviewBtn}
                        onClick={() => handleImageUploadFilter(id)}
                      />
                    </div>
                  ))}
              </div>
            </div>

            <div
              className={`${M.modalPostContent_option} ${M.modalPostContent_option_last}`}
            >
              <div
                className='cursor_this flex'
                onClick={handleAddingCollaborators}
              >
                <FaPlusCircle className={M.modalPostIcon} />
                <p>Add Collaborators</p>
              </div>
              <div className={M.collaboratorsList}>
                {new Array(4).fill().map((_, i) => (
                  <p className='flex flex_wrap' key={i}>
                    John doe{' '}
                    <span className={M.collaboratorsListCloseBtn}>
                      <FaTimes />
                    </span>
                  </p>
                ))}
              </div>
            </div>

            <button className={M.btn} onMouseEnter={handleMouseEnter}>
              Post
            </button>
          </form>
        </div>
      </div>
      <div className={M.backCard} ref={backCard}>
        <header>
          <h3>Add Collaborators</h3>
        </header>

        <div className={M.backCardContent}>
          <div className={M.backCardContent_inputContainer}>
            <div className='flex'>
              <input
                type='text'
                placeholder='Search...'
                className={M.searchInput}
              />
              <FaSearch />
              <h4
                className={M.backCardContent_backText}
                onClick={handleAddingCollaborators_done}
              >
                Done
              </h4>
            </div>
          </div>

          <div className={M.collaboratorsDisplayBox}>
            <ul>
              <li className={M.collaboratorsDisplayBox_list}>
                <div className='flex'>
                  <img src='/images/person2.jpg' alt='user pic' />
                  <p>Emmanuel Ademola</p>
                </div>
                <FaCheck />
              </li>

              <li className={M.collaboratorsDisplayBox_list}>
                <div className='flex'>
                  <img src='/images/person2.jpg' alt='user pic' />
                  <p>Emmanuel Ademola</p>
                </div>
                <FaCheck />
              </li>

              <li className={M.collaboratorsDisplayBox_list}>
                <div className='flex'>
                  <img src='/images/person2.jpg' alt='user pic' />
                  <p>Emmanuel Ademola</p>
                </div>
                <FaCheck />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MakePostContent

import React from 'react'
import Story from './Story'
import Post from './Post'
import H from './home.module.css'
import Showcase from '../../components/Showcase/Showcase'

const AllPosts = ({ handleModalOpen }) => {
  return (
    <>
      {/* <div className={`${H.storyContainer} flex`}>
        {new Array(10).fill().map((_, i) => (
          <Story key={i} index={i} />
        ))}
      </div>
      <div className={`${H.makePostContainer} flex`}>
        <img src='/images/person2.jpg' alt='profile picture' />
        <div onClick={handleModalOpen}>Click to make a post</div>
      </div> */}
      <div style={{ color: '#eee' }}>Post of the week</div>
      <Showcase />
      <div className={H.allPostsDisplayContainer}>
        {new Array(11).fill().map((_, i) => (
          <Post key={i} index={i} />
        ))}
      </div>
    </>
  )
}

export default AllPosts

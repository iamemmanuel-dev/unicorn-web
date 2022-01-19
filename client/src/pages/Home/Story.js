import React from 'react'
import H from './home.module.css'

const Story = ({ index }) => {
  return (
    <div className={H.story}>
      <div className={H.story_imgContainer}>
        <img
          src={`/images/person${index + 1}.jpg`}
          alt='story image'
          className={H.story_img}
        />
      </div>
    </div>
  )
}

export default Story

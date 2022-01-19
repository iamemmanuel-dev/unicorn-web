import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaRegHeart, FaRegBookmark, FaUsers } from 'react-icons/fa'
import H from './home.module.css'

const Post = ({ index }) => {
  const {} = useSelector(state => state.Posts)
  const dispatch = useDispatch()

  return (
    <article className={H.postDisplay}>
      <header className={H.postDisplay_header}>
        <div className='flex'>
          <img
            src='/images/person8.jpg'
            alt='user image'
            className={H.postDisplay_header_img}
          />
          <div className={H.postDisplay_info}>
            <a href='/' className={H.postAuthor}>
              John Doe Lee
            </a>
            <small>
              7 hrs <span className={H.dot}></span>
            </small>
            <h4 className={H.post_desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A nisi,
              ab suscipit voluptate, dignissimos fuga odio, optio amet provident
              ad impedit! Inventore sapiente vero ullam praesentium! Distinctio
              dignissimos aperiam unde!
            </h4>
          </div>
        </div>
      </header>
      <div className={H.postDisplay_body}>
        <div className={H.postDisplay_body_postContainer}>
          <img
            src={`/images/Artboard${index + 1}.png`}
            alt='post'
            className={H.postDisplay_body_postResource}
          />
        </div>
        <footer className={H.postDisplay_body_footer}>
          <div className={`${H.postDisplay_body_footer_rxnsContainer} flex`}>
            <FaRegHeart />
            <p>1.2k likes</p>
          </div>

          <div className={`${H.postDisplay_body_footer_rxnsContainer} flex`}>
            <FaRegBookmark />
            <p>1.2k bookmarks</p>
          </div>

          <div className={`${H.postDisplay_body_footer_rxnsContainer} flex`}>
            <FaUsers />
            <p>1.2k collaborators</p>
          </div>
        </footer>
      </div>
    </article>
  )
}

export default Post

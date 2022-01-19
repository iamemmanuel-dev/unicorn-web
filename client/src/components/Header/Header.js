import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaFacebookMessenger, FaListUl } from 'react-icons/fa'
import H from './header.module.css'

const Header = ({ handleModalOpen }) => {
  return (
    <header id={H.mainHeader} className='flex'>
      <div className={`${H.header_left}`}>
        <Link to='/' className='flex'>
          <img src='/images/logo1.png' alt='logo' className={H.logo} />
          <h1>YouNiq</h1>
        </Link>
      </div>
      <div className={H.header_center}>
        <Link to='/'>
          <FaHome />
        </Link>
        <FaListUl onClick={handleModalOpen} />
      </div>
      <div className={`${H.header_right} flex`}>
        <FaFacebookMessenger />
        <div className={H.header_right_imgContainer}>
          <img
            src='/images/avatar.jpg'
            className={H.header_right_img}
            alt='user image'
          />
        </div>
      </div>
    </header>
  )
}

export default Header

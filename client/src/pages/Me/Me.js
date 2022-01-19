import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  FaDashcube,
  FaPage4,
  FaFacebook,
  FaEnvelope,
  FaPen,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import Post from '../Home/Post'
import Header from '../../components/Header/Header'
import M from './Me.module.css'

const Me = () => {
  const point = useRef()
  const Leftbar = useRef()
  const Rightbar = useRef()

  // useEffect(() => {
  //   window.addEventListener('scroll', e => {
  //     if (e.currentTarget.pageYOffset >= point.current.offsetTop) {
  //       Leftbar.current.classList.add('leftbar_fixed')
  //       Rightbar.current.classList.add('rightbar_fixed')
  //     } else {
  //       Leftbar.current.classList.remove('leftbar_fixed')
  //       Rightbar.current.classList.remove('rightbar_fixed')
  //     }
  //   })
  // }, [])

  return (
    <section>
      <Header />
      <div className={M.profilePageContainer}>
        <aside id={M.aside}>
          <div className={`${M.aside_top} flex`}>
            <FaFacebook />
            <h1>YouNiq</h1>
          </div>
          <div className={M.aside_bottom}>
            <h3 className={M.aside_bottom_title}>Main</h3>
            <ul>
              <li className='flex'>
                <FaDashcube />
                Dashboard
              </li>

              <li className='flex'>
                <FaPage4 />
                Pages
              </li>
            </ul>
          </div>
        </aside>
        <main id={M.main}>
          <div className={`${M.mainTop} flex`}>
            <h2>My Profile</h2>
          </div>

          <div className={M.mainContent}>
            <div
              className={M.userProfileCoverImage}
              style={{ backgroundImage: 'url(/images/Artboard4.png)' }}
            >
              <Link to='/Me/edit' className={`${M.editProfileLink} flex`}>
                <FaPen />
                Edit profile
              </Link>
              <div className={`${M.userProfileImageContainer} flex`}>
                <img
                  src='/images/person8.jpg'
                  className={M.userProfileImageContainer_image}
                />
                <div className={M.userProfile_Detail}>
                  <h2 className={M.userProfile_Detail_name}>Susan smith joe</h2>
                  <p className={M.userProfile_Detail_job}>3D Animation</p>
                </div>
              </div>
            </div>

            <div className={M.mainContent_row} ref={point}>
              <div className={M.mainContentCol_Left} ref={Leftbar}>
                <div className={M.mainContentCol_Left_box}>
                  <h3 className={M.mainContentLeft_title}>About Me</h3>
                  <p className={M.mainContentLeft_paragraph}>
                    I am a skilled 3D Animator and a passionate illustrationist
                  </p>

                  <ul>
                    <li className='flex'>
                      <FaMapMarkerAlt /> Pasadena, California
                    </li>

                    <li className='flex'>
                      <FaPhone /> +1 233 2113 21
                    </li>

                    <li className='flex'>
                      <FaEnvelope /> sussy@gmail.com
                    </li>
                  </ul>
                </div>
                <div className={M.mainContentCol_Left_box}></div>
                <div className={M.mainContentCol_Left_box}></div>
              </div>
              <div className={M.mainContentCol_Center}>
                {new Array(4).fill().map((_, i) => (
                  <Post index={i} key={i} />
                ))}
              </div>
              <div className={M.mainContentCol_Right} ref={Rightbar}>
                {' '}
                COLUMN 3
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}

export default Me

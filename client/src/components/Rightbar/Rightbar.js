import React from 'react'
import { Link } from 'react-router-dom'
import { FaPen, FaUser, FaUserAlt } from 'react-icons/fa'
import R from './rightbar.module.css'

const Rightbar = () => {
  return (
    <aside id={R.aside_right}>
      <div className={R.aside_right_content}>
        <div className={R.aside_right_profileCard}>
          <div className={R.aside_right_content_top}>
            <img src='/images/person10.jpg' alt='user pic' />
          </div>
          <div className={R.aside_right_content_bottom}>
            <div className={R.aside_right_content_bottom_content}>
              <div className={R.aside_right_content_bottom_head}>
                <p>Illustrationist</p>
                <h3>Susan smith</h3>
              </div>

              <div
                className={R.aside_right_content_bottom_followersCountContainer}
              >
                <div className={R.aside_right_content_bottom_imgContainer}>
                  <img src='/images/person1.jpg' alt='user pic' />
                  <img src='/images/person2.jpg' alt='user pic' />
                  <img src='/images/person3.jpg' alt='user pic' />
                  <img src='/images/person4.jpg' alt='user pic' />
                </div>

                <div className={R.count}>
                  <h2>1.5k</h2>
                  <h4>Followers</h4>
                </div>
              </div>

              <center className={R.aside_right_content_bottom_beneath}>
                <Link to='/'>
                  <FaUserAlt />
                  See creator's profile
                </Link>
              </center>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Rightbar

import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaUser, FaProjectDiagram, FaPen } from 'react-icons/fa'
import P from './profilecard.module.css'

const Profilecard = () => {
  const { user } = useSelector(state => state.Auth)
  return (
    <article className={P.profileCard}>
      <center className='grid' id={P.center}>
        <img
          src='/images/person8.jpg'
          alt='profile pic'
          className={P.profileImage}
        />
        <small className={P.profileCard_job}>3d Animator</small>
      </center>
      <div className={P.row}>
        <div className={P.col}>
          <center>
            <FaUser />
          </center>
          <h2>{user.followers.length}</h2>
          <h3>Followers</h3>
        </div>
        <div className={P.col}>
          <center>
            <FaProjectDiagram />
          </center>
          <h2>10</h2>
          <h3>Posts</h3>
        </div>
      </div>

      <center id={P.profileCard_edit}>
        <Link to='/me'>
          <FaPen />
          Go to profile
        </Link>
      </center>
    </article>
  )
}

export default Profilecard

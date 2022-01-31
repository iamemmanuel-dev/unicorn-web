import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import U from './userconfig.module.css'
import axios from 'axios'
import { printOptions } from '../../Helpers/axiosHelper'

const UserConfig = () => {
  const { id, username } = useParams()
  const [userconfig, setUserconfig] = useState({
    badge: {
      isTalent: false,
      isViewer: false,
    },
    niche: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleMouseEnter = e => {
    if (!userconfig.badge.isTalent && !userconfig.badge.isViewer) {
      e.currentTarget.style.cursor = 'not-allowed'
      e.currentTarget.disabled = true
    } else if (userconfig.badge.isTalent && !userconfig.niche) {
      e.currentTarget.style.cursor = 'not-allowed'
      e.currentTarget.disabled = true
    } else {
      e.currentTarget.style.cursor = 'pointer'
      e.currentTarget.disabled = false
    }
  }

  const handleChange = e => {
    const { value } = e.target
    const { name } = e.target.dataset
    e.target.type === 'radio'
      ? setUserconfig({
          ...userconfig,
          badge: { [name]: true },
        })
      : setUserconfig({ ...userconfig, niche: value })
  }

  const handleSubmit = async e => {
    setIsLoading(true)
    e.preventDefault()
    try {
      const res = await axios(
        printOptions('POST', `/api/configUser?id=${id}`, userconfig)
      )

      const { status } = res.data
      status === 'success' && window.location.replace('/')
    } catch (err) {
      setIsLoading(false)
      console.log(err)
    }
  }

  return (
    <div
      style={{ backgroundImage: 'url(images/BG3.jpg)' }}
      className={U.userConfigSection}
    >
      <div className={U.overlay}>
        <div className={U.modal}>
          <div className={U.modal_logoContainer}>
            <img
              src='/images/logo1.png'
              alt='company logo'
              className={U.modal_logo}
            />
          </div>
          <h2>Welcome, {username} </h2>
          <p>
            Thank you for registering. Please select an option below to help us
            best customize your experience.
          </p>

          <div className={U.optionsContainer}>
            <form onSubmit={handleSubmit}>
              <h3>I am registering as a...</h3>
              <div className={U.form_group}>
                <input
                  type='radio'
                  name='badge'
                  data-name='isTalent'
                  id='Talent'
                  value='isTalent'
                  onChange={handleChange}
                />
                <label htmlFor='Talent'>Talent</label>
              </div>

              <div className={U.form_group}>
                <input
                  type='radio'
                  name='badge'
                  data-name='isViewer'
                  id='Viewer'
                  value='isViewer'
                  onChange={handleChange}
                />
                <label htmlFor='Viewer'>Viewer</label>
              </div>

              {userconfig.badge.isTalent && (
                <div className={U.nicheContainer}>
                  <label htmlFor='niche'>select a niche:</label>
                  <select
                    name='niche'
                    id='niche'
                    value={userconfig.niche}
                    onChange={handleChange}
                  >
                    <option value=''>select an option</option>
                    <option value='3d animation'>3D Animation</option>
                    <option value='artist'>Artist</option>
                    <option value='app development'>App development</option>
                    <option value='makeup and beauty'>
                      make-up and beauty
                    </option>
                    <option value='electricity'>Electricity</option>
                    <option value='mechanics'>mechanics</option>
                    <option value='web development'>web development</option>
                    <option value='ui/ux designer'>ui/ux designer</option>
                    <option value='others'>others</option>
                  </select>
                </div>
              )}

              <button
                className={`${U.btn} flex`}
                onMouseEnter={handleMouseEnter}
              >
                {isLoading ? 'Please wait...' : 'continue'} <FaArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserConfig

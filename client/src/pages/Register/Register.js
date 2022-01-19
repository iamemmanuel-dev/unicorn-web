import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import R from './register.module.css'
import { printOptions } from '../../Helpers'

const Register = props => {
  const [authCredentials, setAuthCredentials] = useState({
    username: '',
    password: '',
    confirmedPassword: '',
  })
  const [isSignup, setisSignUp] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState({ isError: false, errMsg: '' })
  const handleFormChange = () => setisSignUp(!isSignup)

  const handleChange = ({ target: { name, value } }) =>
    setAuthCredentials({ ...authCredentials, [name]: value })

  const handleAuth = async e => {
    e.preventDefault()
    if (isSignup) {
      if (authCredentials.password !== authCredentials.confirmedPassword)
        return setError({
          ...error,
          isError: true,
          errMsg: 'Passwords do not match. Please verify credentials',
        })

      setIsLoading(true)
      const res = await axios(
        printOptions('POST', '/api/signup', authCredentials)
      )
      const {
        status,
        user: { _id, username },
      } = res.data

      status === 'success' &&
        props.history.replace(`/success/userconfig/${username}/${_id}`)
    }
  }

  return (
    <div
      className={R.registerSection}
      style={{ backgroundImage: 'url(images/BG3.jpg)' }}
    >
      <div className={R.registrationContainer}>
        <div className={R.registrationContainer_left}>
          <div className={R.registrationContainer_left_content}>
            <h2>
              Connect with and find talents from all over the world in various
              niche
            </h2>
          </div>
        </div>
        <div className={R.registrationContainer_right}>
          <div className={R.registrationContainer_right_content}>
            <div
              className={R.registrationContainer_right_content_logoContainer}
            >
              <img
                src='/images/logo1.png'
                alt='company logo'
                className={R.registrationContainer_right_content_logo}
              />
            </div>
            <h2>Welcome</h2>
            <form id='registrationForm' onSubmit={handleAuth}>
              <div className={R.form_group}>
                <label htmlFor='username'>Username</label>
                <input
                  type='text'
                  name='username'
                  value={authCredentials.username}
                  onChange={handleChange}
                  id='username'
                  required
                />
              </div>

              <div className={R.form_group}>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  name='password'
                  value={authCredentials.password}
                  onChange={handleChange}
                  id='password'
                  required
                />
              </div>

              {isSignup && (
                <div className={R.form_group}>
                  <label htmlFor='confirmedPassword'>Confirm password</label>
                  <input
                    type='password'
                    name='confirmedPassword'
                    id='confirmedPassword'
                    value={authCredentials.confirmedPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}

              {error.isError && (
                <div className={R.errorContainer}>
                  <p>{error.errMsg}</p>
                </div>
              )}

              <div className={R.form_group}>
                <button className={R.signBtn}>
                  {isLoading ? (
                    <img
                      src='/images/loading3.gif'
                      alt='spinner'
                      className={R.spinner}
                    />
                  ) : isSignup ? (
                    'sign up'
                  ) : (
                    'login'
                  )}
                </button>
              </div>

              <p className={R.haveAcctText}>
                {isSignup ? (
                  <>
                    Already have an account?{' '}
                    <span onClick={handleFormChange}>Sign in</span>{' '}
                  </>
                ) : (
                  <>
                    Don't have an account ?{' '}
                    <span onClick={handleFormChange}>Sign up</span>
                  </>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Register)

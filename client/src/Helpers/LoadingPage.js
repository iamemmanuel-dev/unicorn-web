import React from 'react'
import L from './Loading.module.css'

const LoadingPage = ({ error }) => {
  return (
    <section id={L.loadingPage}>
      <div className={L.loadingPage_content}>
        <div className={L.loadingPage_content_logoContainer}>
          <img src='/images/logo1.png' alt='logo' />
        </div>
        {!error ? (
          <div className={L.loadingPage_content_spinnerContainer}>
            <img src='/images/loading3.gif' alt='loading spinner' />
          </div>
        ) : (
          <div className={L.errorContainer}>
            <h3>You're not logged in, Please login to access this resource</h3>
            <a href='/register'>Sign in</a>
          </div>
        )}
      </div>
    </section>
  )
}

export default LoadingPage

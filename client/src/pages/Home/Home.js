import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AllPosts from './AllPosts'
import Header from '../../components/Header/Header'
import LeftBar from '../../components/Leftbar/Leftbar'
import RightBar from '../../components/Rightbar/Rightbar'
import H from './home.module.css'
import Modal from '../../components/Modal/Modal'
import MakePostContent from '../../components/Modal/Modalcontent/Makepostmodalcontent'
import LoadingPage from '../../Helpers/LoadingPage'
import { useEffect } from 'react'
import { getUserAuthState } from '../../redux/reducers/authReducer'

const Home = () => {
  const dispatch = useDispatch()

  const [error, setError] = useState(false)
  const { user } = useSelector(state => state.Auth)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalOpen = () => setIsModalOpen(true)
  const handleModalClose = () => setIsModalOpen(false)

  const HomeContent = (isModalOpen, handleModalOpen, handleModalClose) => (
    <div>
      <Header handleModalOpen={handleModalOpen} />
      <main id={H.homeMain}>
        <LeftBar user={user} />
        <div id={H.appCenter}>
          <AllPosts handleModalOpen={handleModalOpen} />
        </div>
        <RightBar />
      </main>
      {isModalOpen && (
        <Modal handleModalClose={handleModalClose}>
          <MakePostContent />
        </Modal>
      )}
    </div>
  )

  useEffect(() => {
    dispatch(getUserAuthState())
  }, [])

  useEffect(() => {
    user === '' && setError(true)
  }, [user])

  return (
    <>
      {!user ? (
        <LoadingPage error={error} />
      ) : (
        HomeContent(isModalOpen, handleModalOpen, handleModalClose)
      )}
    </>
  )
}

export default Home

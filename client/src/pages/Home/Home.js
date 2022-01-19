import React, { useState } from 'react'
import AllPosts from './AllPosts'
import Header from '../../components/Header/Header'
import LeftBar from '../../components/Leftbar/Leftbar'
import RightBar from '../../components/Rightbar/Rightbar'
import H from './home.module.css'
import Modal from '../../components/Modal/Modal'
import MakePostContent from '../../components/Modal/Modalcontent/Makepostmodalcontent'

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalOpen = () => setIsModalOpen(true)
  const handleModalClose = () => setIsModalOpen(false)

  return (
    <div>
      <Header handleModalOpen={handleModalOpen} />
      <main id={H.homeMain}>
        <LeftBar />
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
}

export default Home

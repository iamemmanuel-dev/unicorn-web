import React from 'react'
import { FaTimesCircle } from 'react-icons/fa'
import M from '../Modal/modal.module.css'

const Modal = ({ children, handleModalClose }) => {
  return (
    <div className={M.overlay}>
      <div className={M.modal}>
        <FaTimesCircle className={M.modalCloseBtn} onClick={handleModalClose} />
        {children}
      </div>
    </div>
  )
}

export default Modal

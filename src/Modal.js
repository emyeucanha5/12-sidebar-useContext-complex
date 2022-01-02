import React from 'react'
import { FaTimes } from 'react-icons/fa'
import {useGlobalContext} from './context.js'
const Modal = () => {
  const {closeModal, isModalOpen} = useGlobalContext();
  console.log(isModalOpen);
  return <div className={`modal-overlay ${isModalOpen&&"show-modal"}`}>
    <div className = "modal-container">
          <h3>Modal Content</h3>
          <button onClick ={closeModal} className="close-modal-btn">
            < FaTimes />
          </button>
        </div>
  </div>
}

export default Modal
 
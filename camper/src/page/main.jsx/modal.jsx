import React, { useState } from 'react'
import './modal.css'
import VideoBox1 from '..//..//assets/home-box-1.png'
import VideoBox2 from '..//..//assets/home-box-2.png'
import VideoBox3 from '..//..//assets/home-box-3.png'
import VideoBox4 from '..//..//assets/home-box-4.png'
import VideoBox5 from '..//..//assets/home-box-5.png'
import VideoBox6 from '..//..//assets/home-box-6.png'
import VideoBox7 from '..//..//assets/home-box-7.png'
import VideoBox8 from '..//..//assets/home-box-8.png'
import CloseIcon from '@mui/icons-material/Close';

const VideoModal = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  }
  if(modal){
    document.body.classList.add('active-modal')
  }else{
    document.body.classList.remove('active-modal')
  }
  return (
    <div>
      <div onClick={toggleModal} className="btn-modal">
        <img src={VideoBox1}/>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 className='videoName'>Video Name</h2>
            <iframe className='videos' width="560" height="315" src="https://www.youtube.com/embed/s0zeuUxmTxI?si=QtZborlJ6jmwfbQn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <button className="close-modal" onClick={toggleModal}>
              <CloseIcon/>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default VideoModal

export const VideoModal2 = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  }
  if(modal){
    document.body.classList.add('active-modal')
  }else{
    document.body.classList.remove('active-modal')
  }
  return (
    <div>
      <div onClick={toggleModal} className="btn-modal">
        <img src={VideoBox2}/>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Video Name</h2>
            <iframe className='videos' width="560" height="315" src="https://www.youtube.com/embed/wqhvVRPpels?si=qUqDU_t69-VU0Vy7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <button className="close-modal" onClick={toggleModal}>
              <CloseIcon/>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
export const VideoModal3 = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  }
  if(modal){
    document.body.classList.add('active-modal')
  }else{
    document.body.classList.remove('active-modal')
  }
  return (
    <div>
      <div onClick={toggleModal} className="btn-modal">
        <img src={VideoBox3}/>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Video Name</h2>
            <iframe className='videos' width="560" height="315" src="https://www.youtube.com/embed/gSjoX1c-ZWY?si=ZmjwkLgn3huDsRxw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
            <button className="close-modal" onClick={toggleModal}>
              <CloseIcon/>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
export const VideoModal4 = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  }
  if(modal){
    document.body.classList.add('active-modal')
  }else{
    document.body.classList.remove('active-modal')
  }
  return (
    <div>
      <div onClick={toggleModal} className="btn-modal">
        <img src={VideoBox4}/>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Video Name</h2>
            <iframe className='videos' width="560" height="315" src="https://www.youtube.com/embed/7mEcEtu0Y_0?si=pbfLoi9zLKaydtjh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <button className="close-modal" onClick={toggleModal}>
              <CloseIcon/>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
export const VideoModal5 = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  }
  if(modal){
    document.body.classList.add('active-modal')
  }else{
    document.body.classList.remove('active-modal')
  }
  return (
    <div>
      <div onClick={toggleModal} className="btn-modal">
        <img src={VideoBox5}/>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Video Name</h2>
            <iframe className='videos' width="560" height="315" src="https://www.youtube.com/embed/dYyobv1tcek?si=UaCbGzS5SGYVojOb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <button className="close-modal" onClick={toggleModal}>
              <CloseIcon/>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
export const VideoModal6 = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  }
  if(modal){
    document.body.classList.add('active-modal')
  }else{
    document.body.classList.remove('active-modal')
  }
  return (
    <div>
      <div onClick={toggleModal} className="btn-modal">
        <img src={VideoBox6}/>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Video Name</h2>
            <iframe className='videos' width="560" height="315" src="https://www.youtube.com/embed/0ZgizY-9jOc?si=ojSaMsQKGmNpjLkX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <button className="close-modal" onClick={toggleModal}>
              <CloseIcon/>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
export const VideoModal7 = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  }
  if(modal){
    document.body.classList.add('active-modal')
  }else{
    document.body.classList.remove('active-modal')
  }
  return (
    <div>
      <div onClick={toggleModal} className="btn-modal">
        <img src={VideoBox7}/>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Video Name</h2>
            <iframe className='videos' width="560" height="315" src="https://www.youtube.com/embed/gwNJyhAWXD8?si=D2xuqVGkM7t1L4OW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <button className="close-modal" onClick={toggleModal}>
              <CloseIcon/>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
export const VideoModal8 = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  }
  if(modal){
    document.body.classList.add('active-modal')
  }else{
    document.body.classList.remove('active-modal')
  }
  return (
    <div>
      <div onClick={toggleModal} className="btn-modal">
        <img src={VideoBox8}/>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Video Name</h2>
            <iframe className='videos' width="560" height="315" src="https://www.youtube.com/embed/5Wcfa5GXJtI?si=uzDO3DGlTKeWWwtl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <button className="close-modal" onClick={toggleModal}>
              <CloseIcon/>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
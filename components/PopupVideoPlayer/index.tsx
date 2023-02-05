import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import playBtn from '../../public/play-btn.svg'

const PopupVideoPlayer = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <React.Fragment>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />

      <img
        className="w-16 cursor-pointer"
        onClick={() => setOpen(true)}
        src={playBtn.src}
        alt="play-btn"
      />
    </React.Fragment>
  )
}

export default PopupVideoPlayer

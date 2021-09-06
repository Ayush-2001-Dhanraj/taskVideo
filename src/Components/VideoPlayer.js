import React, { useState } from 'react'
import ReactPlayer from 'react-player'

import './VideoPlayer.css'

const VideoPlayer = () => {
  const [isplay, setIsPlay] = useState(false)
  return (
    <div className='Container'>
      <div className='playerContainer'>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=zln8SZO6yYY'
          controls='true'
          playing={isplay}
        />
      </div>
      <div className='circle' onClick={() => setIsPlay(preValue => !preValue)}>
        {isplay ? (
          <i class='far fa-pause-circle fa-3x'></i>
        ) : (
          <i class='far fa-play-circle fa-3x'></i>
        )}
      </div>
    </div>
  )
}

export default VideoPlayer

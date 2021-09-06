import React from 'react'
import ReactPlayer from 'react-player'
import './VideoPlayer.css'

const VideoPlayer = () => {
  return (
    <div className='Container'>
      <div className='playerContainer'>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=zln8SZO6yYY'
          controls='true'
        />
      </div>
      <div className='circle'>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=zln8SZO6yYY'
          controls='true'
          height='100%'
          width='100%'
        />
      </div>
    </div>
  )
}

export default VideoPlayer

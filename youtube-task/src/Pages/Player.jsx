import React from 'react'

const Player = (props) => {
    let {play}=props
    console.log(play)

  return (
    <div className='player'>
        <video src={play.videoUrl}  height={400} autoPlay width={600}>  </video>
    </div>
  )
}

export default Player
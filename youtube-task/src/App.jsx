import React, { useState } from 'react'
import VIDEOS from './video.json'
import VideoConatainer from './Pages/VideoConatainer'
import './global.css'
const App = () => {
    let [state,setState]=useState(VIDEOS)
    console.log(state)

    let [play,setPlay]=useState(state[0])
    // console.log(play)
    let handleVideo=(song)=>{
        setPlay(song)
    }

    return (
        <div className='container'>
            <VideoConatainer  state={state} play={play} handleVideo={handleVideo}/>
        </div>
    )
}
export default App

import React from "react";
const PlayerConatiner=(props)=>{
    // console.log(props)
    let {state, play, handleVideo}=props
    console.log(state)
    console.log(play)

    return(
<>
<video src={play.videoUrl} controls height={300} width={600}></video>
</>
    )
}
export default PlayerConatiner;
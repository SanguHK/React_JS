import React  from "react";
import PlayerConatiner from "./PlayerContainer";
import PlayerListContainer from "./PlayerListContainer";

const VideoConatainer=(props)=>{
    // console.log(props)
    let {state,play,handleVideo}=props
    // console.log(state)
    // console.log(play)
    
    return(
        <section className="videoContainer">
            <aside className="playerContainer" >
                <PlayerConatiner  play={play} />
            </aside>
            
            <aside className="playerListConatainer">
                  {
                    state.map((song)=>{
                        return(
                            <PlayerListContainer song={song} handleVideo={handleVideo}/>
                        )
                    })
                }
                 {/* <PlayerListContainer state={state} handleVideo={handleVideo}/> */}
            </aside>
           
        </section>
    )
}
export default VideoConatainer;
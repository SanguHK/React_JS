import React from 'react'

const PlayerListContainer = (props) => {
    // console.log(props)
    let {song, handleVideo}=props
    console.log(song)
    console.log(handleVideo)

    let {thumbnailUrl,views,subscriber,duration }=props.song
//     console.log(thumbnailUrl)
//     console.log(views)
//     console.log(subscriber)
// console.log(duration)

    // state.map((song)=>{
    //     console.log(song)
    // })
    return(
        <div className='playerList' onClick={()=>handleVideo(song)}>
                {/* <h1>Player List Container</h1> */}
                <img src={thumbnailUrl} height={110} width={250} alt="" />
            <p>View: {views}</p>
            <p> subscriber: {subscriber}</p>
            <p> Duration: {duration}</p>
        </div>

    )
}
export default PlayerListContainer
import { useContext } from "react"

import userContext from "./UseContext"

const ComponentF=()=>{
    let userData=useContext(userContext)
    console.log(userData)
    return(
        

        <>
        <h1>{userData.name}</h1>
        <h1>{userData.age}</h1>
        <h1>{userData.address}</h1>
        </>
    )
}
export default ComponentF
import { useContext } from "react"
import courseStore from "./courseContext"

const Ajith =()=>{
    let techs=useContext(courseStore)
    return(
        <div>
            <h1>Ajith Skills:</h1>
          {  techs.JFS.map((tech)=>{
            return(
                <p>
                    {tech}
                </p>
            )

            })}
        </div>
    )
}
export default Ajith